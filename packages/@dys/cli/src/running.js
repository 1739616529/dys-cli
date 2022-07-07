const { exec } = require("shelljs");

function running(script, obj, command) {
    exec(`npm run ${command.args.join(" ")}`);
}

module.exports = running;
