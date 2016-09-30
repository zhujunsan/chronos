const {fetchJSON} = require('./util')

function requestAccessToken({oauth, serviceRoot, tenantId, clientId, clientSecret}) {
	const url = `${oauth}/${tenantId}/oauth2/token`
	const body = `grant_type=client_credentials&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}&resource=${encodeURIComponent(serviceRoot)}`
	// console.info('request access token:', url, body)

	return fetchJSON(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Accept': 'application/json',
		},
		body,
	})
}

module.exports = {
	requestAccessToken,
}