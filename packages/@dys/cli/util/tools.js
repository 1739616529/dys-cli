const fs = require('fs-extra')
const { exec, which } = require('shelljs')
const https = require('https')
module.exports = {
	dir_ok(path) {
		try {
			fs.accessSync(path, fs.constants.F_OK)
			return true
		} catch (err) {
			return false
		}
	},
	instead_model(name) {
		return which(name)
	},

	check_version(name = '@dys/cli') {
		return new Promise((resolve, reject) => {
			let data = ''
			https.get(
				`https://mirrors.cloud.tencent.com/npm/${name}/latest`,
				(res) => {
					if (res.statusCode === 404)
						return reject(
							new Error(
								'Not fond this package'
							)
						)
					res.on('data', (body) => {
						data += body
					})
				}
			)
				.on('error', reject)
				.on('close', () => {
					resolve(
						data && JSON.parse(data).version
					)
				})
		})
	},

	compare_version(preVersion = '', lastVersion = '') {
		var sources = preVersion.split('.')
		var dests = lastVersion.split('.')
		var maxL = Math.max(sources.length, dests.length)
		for (let i = 0; i < maxL; i++) {
			let pre = parseInt(sources[i] || 0)
			let last = parseInt(dests[i] || 0)
			if (pre < last) return true
		}
		return false
	},
}
