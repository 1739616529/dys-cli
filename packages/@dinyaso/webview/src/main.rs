use web_view::*;

fn main() {
    builder()
        .title(" cli docs")
        .content(Content::Url("https://www.baidu.com"))
        .size(800, 600)
        .resizable(true)
        .debug(true)
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .run()
        .unwrap();
}
