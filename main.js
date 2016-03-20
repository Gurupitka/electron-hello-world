'use strict';

console.log("Starting...");
const electron = require('electron');
const app = electron.app;
console.log("Electron --" + electron );
console.log("app --" + app);
const BrowserWindow = electron.BrowserVersion;

var mainWindow = null;

app.on('window-all-closed', function() {
	if(process.platform != 'darwin'){
		app.quit();
	}
});

app.on('ready', function(){
	mainWindow = new BrowserWindow({width:800, height:600});
	mainWindow.loadURL('file://' +__dirname + '/index.html');
	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function(){
		mainWindow = null;
	});
});
