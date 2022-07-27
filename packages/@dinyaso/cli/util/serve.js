const http = require("http");
const fs = require("fs-extra");
const { join } = require("path");
const { dir_ok } = require("./tools");
module.exports = function serve(port, dir) {
    function format_url(url) {
        if (url === "/") url = "index.html";
        const full_url = join(dir, url);
        if (dir_ok(full_url) === false) return false;
        return full_url;
    }
    const server = http.createServer((req, res) => {
        const url = format_url(req.url);
        if (url === false) return;
        fs.createReadStream(url).pipe(res);
    });
    server.listen(port);
    return server;
};
