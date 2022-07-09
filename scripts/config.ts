export const pack_dir = "packages/@dinyaso";
export interface Order_Item {
    order: string;
    release: string;
    target: string;
}
export interface CARGO_BUILD {
    win32: Order_Item;
    darwin: Order_Item;
    linux: Order_Item;
}
export const cargo_build: CARGO_BUILD = {
    win32: {
        order: "cargo build --release --target=x86_64-pc-windows-msvc",
        target: "x86_64-pc-windows-msvc",
        release: "",
    },
    linux: {
        order: "cargo build --release --target=x86_64-unknown-linux-musl",
        target: "x86_64-unknown-linux-musl",
        release: "",
    },
    darwin: {
        order: "cargo build --release --target=x86_64-apple-darwin",
        target: "x86_64-apple-darwin",
        release: "",
    },
};
