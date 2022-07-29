const { join } = require("path");
const { exec } = require("child_process");
const serve = require("../util/serve");
const boxne = require("boxen");
const chalk = require("chalk");
const { confirm_port } = require("../util/tools");
const { docsProt, webviewPath } = require("../dysconfig");
async function docs() {
    const port = await confirm_port(docsProt);
    const server = serve(port, join(__dirname, "../docs/"));
    process.on("exit", () => {
        server.close();
    });

    const url = `http://127.0.0.1:${port}`;
    exec(`${webviewPath} ${url}`);
    console.log(
        boxne("local url: " + chalk.blue(url), {
            textAlignment: "center",
            width: 20,
            borderColor: "blue",
            borderStyle: "round",
            padding: {
                top: 1,
                bottom: 1,
                left: 9,
                right: 9,
            },
            margin: {
                top: 1,
                bottom: 1,
            },
        })
    );
}
module.exports = docs;
