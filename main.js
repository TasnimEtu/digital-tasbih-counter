const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 400,
    height: 550,
    autoHideMenuBar: true
  });
  win.loadFile('index.html');
});