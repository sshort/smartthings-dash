
var dash_button = require('node-dash-button');
var smartthings = require('./lib/smartthingsapi');

var app_url      = "https://graph-eu01-euwest1.api.smartthings.com:443/api/smartapps/installations/";
var app_id       = "f3169d44-4e8f-4da2-b141-6b6daf9d1083";
var access_token = "15657529-1f18-430d-ab4c-f2a1492b98f5";

// Dash button 'finish'
var dash1_button = 'finish'
var dash1_mac    = '50:f5:da:1a:aa:3a';

// Dash button 'simplehuman'
var dash2_button = 'simplehuman'
var dash2_mac  = '50:f5:da:e7:af:39';

// Virtual button 'dash1'
var dash1_name = 'dash1';
var dash1_id   = '9a9884b2-135b-462d-a969-d7a213f0f9e7';

// Virtual button 'dash2'
var dash2_name = 'dash2';
var dash2_id   = 'c7521223-a4b2-473e-b277-cec17960f0e0';

console.log("Loading Smartthings API...");
smartthings.init(app_url, app_id, access_token);

var dash = dash_button([dash1_mac, dash2_mac], null, null, 'all'); //address from step above

console.log("Waiting for dash button events...");
dash.on("detected", function (dash_id){
    if (dash_id === dash1_mac){
		console.log("'" + dash1_name + "' button pressed");
		smartthings.runCommand(function() {
			console.log('Ok');
		}, dash1_id, 'push', { 'buttonNumber': 1 });
    } else if (dash_id === dash2_mac){
		console.log("'" + dash2_name + "' button pressed");
		smartthings.runCommand(function() {
			console.log('Ok');
		}, dash2_id, 'push', { 'buttonNumber': 1 });
    }
});
