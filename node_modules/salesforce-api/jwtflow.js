var request = require('request');
var jwt = require('jsonwebtoken');

module.exports = function (clientId, privateKey, userName, sandbox, customTokenEndpoint, cb) {

	var options = {
		issuer: clientId,
		expiresInMinutes: 3,
		algorithm:'RS256',
		audience: sandbox ? 'https://test.salesforce.com' : 'https://login.salesforce.com'
	};

	if (!cb && typeof customTokenEndpoint === 'function') {
		cb = customTokenEndpoint;
		customTokenEndpoint = null;
	}
	
	var token = jwt.sign({ prn: userName }, privateKey, options);

	var post = {
		form: {
			grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
			assertion:  token
		},
		method: 'post',
		uri: sandbox ? 'https://test.salesforce.com/services/oauth2/token' : 'https://login.salesforce.com/services/oauth2/token'
	}

	if (customTokenEndpoint) post.uri = customTokenEndpoint;

	request(post, function(err, res, body) {
		if (err) {
			cb(err);
			return;
		};

		var reply = JsonTryParse(body);
		if (!reply) return cb(new Error('No response from oauth endpoint.'));

		if (res.statusCode != 200) {
			var message = 'Unable to authenticate: ' + reply.error + ' (' + reply.error_description + ')';
			cb(new Error(message))
			return;
		};

		cb(null, reply.access_token);
	});
}

function JsonTryParse(string) {
	try {
		return JSON.parse(string);
	} catch (e) {
		return null;
	}
}