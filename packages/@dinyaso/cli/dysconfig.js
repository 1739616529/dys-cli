const { join } = require("path");
const webview_name = {
    win32: "webview.exe",
    darwin: "webview",
    linux: "webview",
};
const dir = {
    win32: process.env.TEMP,
    linux: "/tmp",
    darwin: "/tmp",
};

const tmpDir = `${dir[process.platform]}/dys`;
module.exports = {
    cwd: process.cwd(),
    version: require("./package.json").version,
    tmpDir,
    docsProt: 9486,
    webviewPath: join(__dirname, "./webview", webview_name[process.platform] || "webview.exe"),
    github: {
        baseUrl: "https://github.com/1739616529",
        gitStorm: {
            Vue: "vue-vite-electron",
            React: "react-vite-electron",
            Vanilla: "vanilla-vite-electron",
        },
        ts: "main",
        js: "vanilla",
    },

    origin: {
        npm: {
            name: "npm",
            key: "npm",
            value: "https://registry.npmjs.org/",
        },
        yarn: {
            name: "yarn",
            key: "yarn",
            value: "https://registry.yarnpkg.com/",
        },
        tencent: {
            name: "tencent",
            key: "tencent",
            value: "https://mirrors.cloud.tencent.com/npm/",
        },
        cnpm: {
            name: "cnpm",
            key: "cnpm",
            value: "https://r.cnpmjs.org/",
        },

        npmMirror: {
            name: "npmMirror (淘宝 taobao.org)",
            key: "npmMirror",
            value: "https://registry.npmmirror.com/",
        },
    },
};
