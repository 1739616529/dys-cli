use std::env;
use web_view::*;
fn main() {
    let args: Vec<String> = env::args().collect();
    let url = &args[1];
    if url.len() > 0 {
        builder()
            .title("cli docs")
            .content(Content::Url(url))
            .size(800, 600)
            .resizable(true)
            // .debug(true)
            .user_data(())
            .invoke_handler(|_webview, _arg| Ok(()))
            .run()
            .unwrap();
    }
}
