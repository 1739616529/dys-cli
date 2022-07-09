export const pack_dir = "packages/@dinyaso";
export interface Order_Item {
    order: string;
    release: string;
}
export interface CARGO_BUILD {
    win32: Order_Item;
    darwin: Order_Item;
    linux: Order_Item;
}
export const cargo_build: CARGO_BUILD = {
    win32: {
        order: "cargo build --target=x86_64-pc-windows-msvc",
        release: "",
    },
    darwin: {
        order: "cargo build ",
        release: "",
    },
    linux: {
        order: "cargo build --target=",
        release: "",
    },
};
