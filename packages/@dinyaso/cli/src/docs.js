const { join } = require("path");
const { exec } = require("child_process");
const serve = require("../util/serve");
const boxne = require("boxen");
const chalk = require("chalk");
const { serveProt } = require("../dysconfig");
function docs() {
    const webview_name = {
        win32: "docs.exe",
        darwin: "docs",
        linux: "docs",
    };
    const webview = join(__dirname, "../docs/", webview_name[process.platform]);
    const server = serve(serveProt, join(__dirname, "../docs/"));
    process.on("exit", () => {
        server.close();
    });

    const url = `http://127.0.0.1:${serveProt}`;
    exec(`${webview} ${url}`);
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
