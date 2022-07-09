#! /usr/bin/env node

require("../src/index");

process.on("SIGINT", () => {
    process.exit(0);
});
