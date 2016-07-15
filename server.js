import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/components/index'

var Twilio = require('twilio');
var Fanout = require('fanoutpub');
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var fanout = new Fanout.Fanout(config.fanout.realm_id, config.fanout.realm_key);

app.post('/sms', Twilio.webhook(config.twilio),function(req, res) {
    var  addOn = JSON.parse(req.body.AddOns);

	// Create a data object with the properties you want to send
    var msg = {
        text: req.body.Body,
        from: req.body.From,
        sentiment: addOn.results.marchex_sentiment.result.result,
        country: req.body.FromCountry
    };

    fanout.publish(config.channel, msg);

    // Create a TwiML response
    var twiml = new Twilio.TwimlResponse();
    twiml.message('Message received');
    
    // Send the TwiML response as XML
    res.send(twiml.toString());
});

app.get('/', function (req, res) {
	res.render('index', {});
});

app.listen(config.port, function() {
    console.log('Server up and listening on port %d', config.port);
});