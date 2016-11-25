
var smartthings = require('./lib/smartthingsapi');

var app_url      = "https://graph-eu01-euwest1.api.smartthings.com:443/api/smartapps/installations/";
var app_id       = "f3169d44-4e8f-4da2-b141-6b6daf9d1083";
var access_token = "15657529-1f18-430d-ab4c-f2a1492b98f5";

console.log("Loading Smartthings API...");

smartthings.init(app_url, app_id, access_token);

smartthings.getDevices(function (myList) {
    console.log(myList);
});
