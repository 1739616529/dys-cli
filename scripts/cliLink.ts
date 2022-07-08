import { exec, cd, rm, echo } from "shelljs";
// @ts-ignore
import npm_conf from "npm-conf";
const cwd = process.cwd();
import { pack_dir } from "./config";

const cli_dir = `${cwd}/${pack_dir}/cli`;
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
