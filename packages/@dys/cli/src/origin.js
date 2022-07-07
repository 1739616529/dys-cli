const { origin } = require("../dysconfig.js");
const { instead_model } = require("../util/tools");
const inquirer = require("inquirer");
const { exec } = require("shelljs");
async function change_origin() {
    function check_model() {
        let jc = ["npm", "yarn", "pnpm"];
        return jc.filter((v) => {
            return instead_model(v);
        });
    }
    const origin_arr = [...Object.values(origin), { name: "恢复默认. (inital)", value: "default" }];
    const origin_config = await inquirer.prompt([
        {
            type: "list",
            name: "origin",
            message: "请选择要替换的源. (Select the source you want to replace)",
            choices: origin_arr,
        },
        {
            type: "checkbox",
            name: "package",
            message: "选择要替换的包管理. (Please select package manage)",
            choices: check_model(),
        },
    ]);
    const exec_ordert =
        origin_config.origin === "default"
            ? "config delete register"
            : `config set register ${origin_config.origin}`;
    origin_config.package.forEach((v) => {
        exec(`${v} ${exec_ordert}`);
    });
}

module.exports = change_origin;
