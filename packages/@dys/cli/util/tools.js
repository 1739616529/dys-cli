const fs = require("fs-extra");
const { exec, which } = require("shelljs");
const request = require("request");
const config = require("../dysconfig");
const admZip = require("adm-zip");
module.exports = {
    dir_ok(path) {
        try {
            fs.accessSync(path, fs.constants.F_OK);
            return true;
        } catch (err) {
            return false;
        }
    },
    instead_model(name) {
        return which(name);
    },

    check_version(name = "@dys/cli") {
        return new Promise((resolve, reject) => {
            let data = "";
            https
                .get(`https://mirrors.cloud.tencent.com/npm/${name}/latest`, (res) => {
                    if (res.statusCode === 404) return reject(new Error("Not fond this package"));
                    res.on("data", (body) => {
                        data += body;
                    });
                })
                .on("error", reject)
                .on("close", () => {
                    resolve(data && JSON.parse(data).version);
                });
        });
    },

    compare_version(preVersion = "", lastVersion = "") {
        var sources = preVersion.split(".");
        var dests = lastVersion.split(".");
        var maxL = Math.max(sources.length, dests.length);
        for (let i = 0; i < maxL; i++) {
            let pre = parseInt(sources[i] || 0);
            let last = parseInt(dests[i] || 0);
            if (pre < last) return true;
        }
        return false;
    },

    get_github_storm(option) {
        // react-vite-electron/archive/refs/heads/main.zip
        const { gitStorm } = config;
        const projects = gitStorm[option.typescript ? "ts" : "js"];
        const storm_name = projects[option.frame];
        const barch = projects.barch;
        const file_name = `${storm_name}-${barch}.zip`;
        const path = `${gitStorm.baseUrl}/${storm_name}/archive/refs/heads/${barch}.zip`;

        return {
            path,
            storm_name,
            fileName: file_name,
        };
    },

    download_file(option) {
        const { path, savePath, fileName } = option;
        if (!path) return;
        return new Promise((resolve) => {
            const file = fs.createWriteStream(`${savePath}/${fileName}`);
            const res = request(path).pipe(file);
            res.on("finish", resolve);
        });
    },
    uncompress(zipFile, destFolder) {
        var zip = new admZip(zipFile);

        // var zipEntries = zip.getEntries();
        // for (var i = 0; i < zipEntries.length; i++) {
        //     var entry = zipEntries[i];
        //     entry.entryName = iconv.decode(entry.rawEntryName, "gbk");
        // }

        zip.extractAllTo(destFolder, true);
    },
};
