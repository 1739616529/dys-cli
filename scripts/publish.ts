import { cd, cp, exec, mv, rm } from "shelljs";
import { pack_dir, cargo_build, Order_Item } from "./config";
const cwd = process.cwd();
const pack_path = `${cwd}/${pack_dir}`;

// 打包 rust
const cargo_order_item: Order_Item = cargo_build[process.platform];
cd(`${pack_path}/webview`);
exec(cargo_order_item.order);

// 打包 vitepress
// cd(cwd);
// exec("npm run build docs");
// mv(`${pack_path}/docs/docs/.vitepress/dist`, `${pack_path}/cli/docs`);
