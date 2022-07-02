const cp = require('child_process')
const iconv = require('iconv-lite')

function url_delay(url) {
	return new Promise((resolve) => {
		url = url.replace(/(http|https):\/\//g, '')
		cp.spawn('ping', [url]).stdout.on('data', (data) => {
			//data = data.toString()
			console.log(`${iconv.decode(data, 'cp936')}`)
		})
	})
}
module.exports = url_delay
url_delay('https://www.baidu.com')
