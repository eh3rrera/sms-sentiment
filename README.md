# sms-sentiment
This web application allows you to visualize in real-time SMS messages sent to a Twilio phone number along with their sentiment analysis provided by the Marchex Sentiment Analysis plugin.

It uses Node.js with Express for the web server, Ngrok to expose our local server publicly, Fanout Cloud for the real-time functionality, and isomorphic React for the view.

You can follow the [tutorial](http://tutorials.pluralsight.com/interesting-apis/real-time-sms-sentiment-visualization-with-twilio-fanout-cloud-and-isomorphic-react) to build this application or jump straight to the code.

# Requirements

- [Twilio number with SMS capabilities and the Marchex Sentiment Analysis plugin](https://www.twilio.com/try-twilio)
- [Fanout Cloud account](https://fanout.io)
- [Node.js](https://nodejs.org/en/download/)
- [Ngrok](https://ngrok.com/) (optionally, if you want to expose your local server to the Internet)

# Installation
1. Clone this repository and `cd` into it.
2. Edit the `config.js` file to enter your Fanout realm information.
3. Optionally, in this file, you can change the flag to validate requests from Twilio.
    1. If you do this, you need to set your auth token as the environment variable `TWILIO_AUTH_TOKEN` (for example, on Linux execute `export TWILIO_AUTH_TOKEN=xxx0xxx00xx0xxxxxxx0xxxx0xxxx00xxx0`).
4. Configure a Messaging Webhook in your Twilio number to point to `http://<SERVER:PORT>/sms` using `HTTP POST` (if your trying the app locally, use Ngrok to get a public URL).
5. Install the Marchex Sentiment Analysis plugin and active it for incoming SMS messages.
6. Execute `npm install` to download dependencies.
7. Execute `npm start` to start the app.
8. Go to `http://localhost:3000` (or `http://<NGROK_URL>:3000` or whatever your URL is) and start sending SMS messages to your Twilio number. 

# License
MIT