const request = require("request");
function url_delay(url) {
    const tmpl = { url, msg: "ok", ping: 0, ok: false };
    return new Promise((resolve) => {
        request({ url, time: true, timeout: 3000 }, (err, res) => {
            if (err) {
                tmpl.msg = err;
                resolve(tmpl);
                return;
            }
            tmpl.ping = res.elapsedTime || 0;
            tmpl.ok = true;
            resolve(tmpl);
        });
    });
}
module.exports = url_delay;
