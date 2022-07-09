const { join } = require("path");
const { exec } = require("shelljs");
const serve = require("../util/serve");
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
    process.on("exit", () => {
        console.log("exit");
    });
    // exec(webview);
}
module.exports = docs;
