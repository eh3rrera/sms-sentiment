import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GaugeContainer from './gauge-container';
import Messages from './messages';

import Faye from 'faye';
import config from '../../config';

var fanout = new Faye.Client(`http://${config.fanout.realm_id}.fanoutcdn.com/bayeux`);

export default class App extends Component {
  
	constructor(props) {
        super(props);
        this.state = {
            messages: [], 
            background: 'linear-gradient(135deg, #2979FF 0%, #FF1744 100%)',
            sentiment: 0
        };
	}

    componentDidMount() {
        fanout.subscribe('/' + config.channel, this.updateMessages).then(() => {
            console.log('Subscribed to ' + config.channel);
        });
    }

    updateMessages = (data) =>{
        var p1 = 0, p2 = 100;
        if(data.sentiment < 0.5) {
            p1 = (0.5 - data.sentiment) * 100;
        } else {
            p2 = (1 - (data.sentiment - 0.5)) * 100;
        }
        
        this.setState({
                messages: [ data, ...this.state.messages ],
                background: `linear-gradient(135deg, #2979FF ${p1}%, #FF1744 ${p2}%)`,
                sentiment: data.sentiment
        });
    }

	render() {
        const style = { background: this.state.background };

	    return (
            <div id="container" className={'grid'} style={style}>
                <GaugeContainer sentiment={this.state.sentiment}  />
                <Messages messages={this.state.messages} />
            </div>
        );
	}
}