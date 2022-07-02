const https = require('https')
function url_delay(url) {
	return new Promise((resolve) => {
		const tmpl = { ping: 0, ok: false }
		setTimeout(() => {
			resolve(tmpl)
		}, 3000)
		const start_time = new Date().getTime()
		https.get(url, { timeout: 1000 }, (res) => {
			res.on('data', () => {})
			res.on('end', () => {
				tmpl.ping = new Date().getTime() - start_time
				tmpl.ok = true
			})
		})
	})
}
module.exports = url_delay
