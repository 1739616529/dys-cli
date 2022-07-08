import { cd, exec, test } from "shelljs";
import { pack_dir } from "./config";
import minimist from "minimist";
const cwd = process.cwd();
const args = minimist(process.argv.slice(2))._;

if (args.length === 0) throw new Error("请输入要运行的项目");
const pack_path = `${cwd}/${pack_dir}/${args[0]}`;
if (test("-d", pack_path) === false) throw new Error("不存在这个包");
cd(pack_path);
exec(`npm run ${args[1] || "dev"}`);
