const create_tmpl = require('./create')
const change_origin = require('./origin')
const running = require('./running')
const install = require('./install')
const upgrade = require('./upgrade')
const docs = require('./docs')
const program = require('commander')
const { version } = require('../dysconfig.js')
;(function () {
	program.version(version)

	// 运行 安装
	program.command('i')
		.description('安装依赖. (Install node_modules)')
		.action(install)

	// 运行 安装
	program.command('docs')
		.description('脚手架文档. (Cli docs)')
		.action(docs)

	// 创建项目
	program.command('create')
		.description('创建项目. (create project)')
		.action(create_tmpl)

	// 修改 源
	program.command('origin')
		.description(
			'修改 npm/yarn/pnpm 源. (change npm/yarn/pnpm download origin)'
		)
		.action(change_origin)

	// 更新脚手架
	program.command('upgrade')
		.description('更新脚手架. (Upgrade cli)')
		.action(upgrade)

	// 运行 脚本
	program.command('run <script>')
		.description('需要运行的命令 相当于 npm run (Input order)')
		.action(running)

	program.parse(process.argv)
})()
