const fs = require("fs");
const login = require("fca-horizon-remake");

var credentials = {email: "", password: ""}; // thông tin tk

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // đăng nhập
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); //tạo appstate
});