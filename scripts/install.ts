import { exec, cd, which } from "shelljs";
cd(process.cwd());
if (!which("lerna")) exec("npm i -g lerna");

exec("lerna bootstarp");
