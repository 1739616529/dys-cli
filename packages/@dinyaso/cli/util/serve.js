const http = require("http");
const fs = require("fs-extra");
const { join } = require("path");
module.exports = function serve(port, dir) {
    function format_url(req) {
        let url = req.url;
        if (url === "/") url = "index.html";
        if (url === "/favicon.ico") return false;
        return url;
    }
    const server = http.createServer((req, res) => {
        const url = format_url(req);
        if (url === false) return;
        const file_path = join(dir, url);
        fs.createReadStream(file_path).pipe(res);
    });
    server.listen(port);
    return server;
};
