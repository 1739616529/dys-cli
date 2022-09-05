
_cargo=`command -v cargo`
echo $_cargo
exec "$_cargo " `build --release --target=x86_64-pc-windows-msvc`
