module.exports = {
	cwd: process.cwd(),
	version: require('./package.json').version,

	gitStorm: {
		ts: {
			Vue: '',
			React: '',
			Vanilla: '',
		},
		Vanilla: {
			Vue: '',
			React: '',
			Vanilla: '',
		},
	},

	origin: {
		npm: {
			name: 'npm',
			key: 'npm',
			value: 'https://registry.npmjs.org/',
		},
		yarn: {
			name: 'yarn',
			key: 'yarn',
			value: 'https://registry.yarnpkg.com/',
		},
		tencent: {
			name: 'tencent',
			key: 'tencent',
			value: 'https://mirrors.cloud.tencent.com/npm/',
		},
		cnpm: {
			name: 'cnpm',
			key: 'cnpm',
			value: 'https://r.cnpmjs.org/',
		},

		npmMirror: {
			name: 'npmMirror (淘宝 taobao.org)',
			key: 'npmMirror',
			value: 'https://registry.npmmirror.com/',
		},
	},
}
