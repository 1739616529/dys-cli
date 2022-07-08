const { exec } = require("shelljs");
const { join } = require("path");
const { cwd } = require("../dysconfig");
const { dir_ok } = require("../util/tools");
function install() {
    let order = false;
    const mirror = [
        { name: "yarn", order: "yarn", file: "yarn.lock" },
        { name: "pnpm", order: "pnpm i", file: "pnpm-lock.yaml" },
        { name: "npm", order: "npm i", file: "package-lock.json" },
    ];
    mirror.some((v) => {
        if (dir_ok(join(cwd, v.file))) {
            order = v.order;
            return true;
        }
    });

    if (order === false) {
        exec("npm i");
        return;
    }

    exec(order);
}
module.exports = install;
