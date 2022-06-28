'use strict'
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow ({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false}
    });
    win.loadFile('inicio.html');
    win.show()

    win.on('closed', () => {
        app.quit();
    });
});