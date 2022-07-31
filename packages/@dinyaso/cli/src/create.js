const { cwd, tmpDir } = require("../dysconfig.js");
const url_delay = require("../util/url_delay.js");
const inquirer = require("inquirer");
const { Listr } = require("listr2");
const { join } = require("path");
const { ensureDirSync, ensureFileSync } = require("fs-extra");
const { dir_ok, get_github_storm, download_file, uncompress } = require("../util/tools");
const { mv } = require("shelljs");
const chalk = require("chalk");
async function create_tmpl() {
    const prompt_lsit = [
        {
            type: "input",
            message: "项目名. （Project name）",
            name: "name",
            validate: function (val) {
                // 如果为空
                if (val === "") return `请输入项目名. (Please enter a project name)`;
                // 规范 文件夹名称
                if (val.match(/(\\|\/|\:|\*|\?|\"|\<|\>|\|)/g))
                    return "请填写正确的文件夹名称. (Please fill in the correct folder name)";

                // 文件夹是否已存在
                if (dir_ok(join(cwd, val))) return "文件夹已存在. (Folder already exists)";

                return true;
            },
        },
        {
            type: "list",
            message: "框架. （Frame）",
            name: "frame",
            choices: ["React", "Vue", "Vanilla"],
        },
        {
            type: "confirm",
            message: "启用 Typescript. (Typescript Supper)",
            name: "typescript",
        },
    ];
    async function online_test(url = "https://www.baidu.com") {
        const rask = new Listr([
            {
                title: "网络测速. (Network testing)",
                task: async (ctx, task) => {
                    const data = await url_delay(url);
                    if (data.ok)
                        task.title = `测试完成. (test is finished)      github.com ${data.ping}ms`;
                    if (!data.ok) throw new Error("网络不通畅. (Poor network connection)");
                },
            },
        ]);

        await rask.run();
    }

    // await online_test();
    inquirer.prompt(prompt_lsit).then(async (res) => {
        // 获取  项目仓库信息
        const { path, fileName, zip_dir_name } = get_github_storm(res);
        // 创建目录
        ensureDirSync(tmpDir);
        const file_path = join(tmpDir, fileName);

        // 如果不存在 则下载
        if (!ensureFileSync(file_path))
            await download_file({ path, savePath: tmpDir, fileName }).catch((err) => {
                console.log(chalk.red("下载失败 请手动下载 :" + path));
            });

        // 解压 到当前目录
        uncompress(file_path, cwd);

        // 重命名
        mv(zip_dir_name, res.name);

        console.log(`
${chalk.green("项目创建完成✨✨✨. (Project creation is completed)")}


    cd ${res.name}
    npm install


`);
    });
}

module.exports = create_tmpl;
