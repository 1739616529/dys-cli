const cli_upgrade = require('../lib/cli_upgrade')
const chalk = require('chalk')
const { Listr } = require('listr2')
const { version } = require('../dysconfig')
const { exec } = require('shelljs')
async function upgrade() {
	const task = new Listr([
		{
			title: '正在检车更新. (checking)',
			task: async (ctx, task) => {
				const is_upgrade = await cli_upgrade()
				if (is_upgrade === false)
					return (task.title = chalk.green(
						`${version}   已是最新版本. (latested version)`
					))

				task.title = `${chalk.red(
					'NEW!'
				)}   有新版本自动更新中. (New version upgrading)`

				exec('npm i -g @dys/cli@next')

				exec('dys upgrade')
			},
		},
	])

	await task.run()
}

module.exports = upgrade
