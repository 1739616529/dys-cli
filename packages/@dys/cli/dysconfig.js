function get_tmp_dir() {
    const dir = {
        win32: process.env.LOCALAPPDATA,
        linux: "/tmp",
        darwin: "/tmp",
    };
    return `${dir[process.platform]}/dys`;
}
module.exports = {
    cwd: process.cwd(),
    version: require("./package.json").version,
    tmpDir: get_tmp_dir(),
    gitStorm: {
        baseUrl: "https://github.com/1739616529",
        ts: {
            Vue: "",
            React: "react-vite-electron",
            Vanilla: "",
            barch: "main",
        },
        js: {
            Vue: "",
            React: "",
            Vanilla: "",
            barch: "js",
        },
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
