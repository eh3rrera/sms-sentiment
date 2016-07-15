module.exports = {
	twilio: {
	    validate   :  false
    },

    fanout: {
        realm_id   : '<YOUR_REALM_ID>',
        realm_key  : '<YOUR_REALM_KEY>'
    },

    channel: 'sms',

	port: process.env.APP_PORT || 3000
}