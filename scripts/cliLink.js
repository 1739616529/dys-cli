const { exec, cd, rm, echo } = require("shelljs");
const npm_conf = require("npm-conf")();
const cwd = process.cwd();
const cli_dir = `${cwd}/packages/@dys/cli`;
const cli_pkg = require(`${cli_dir}/package.json`);

cd(cli_dir);
echo("unlink cli");
exec(`npm unlink ${cli_pkg.name}`);

echo("delete cli cmd");
const npm_prefix = npm_conf.get("prefix");
rm(`${npm_prefix}/dys*`);
rm("-rf", `${npm_prefix}/node_modules/${cli_pkg.name}*`);

echo("link cli");
exec(`npm link`);
