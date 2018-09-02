const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 1000,
    height: 800, 
    title: "Bruno's Very First Start",
    darkTheme: true
  })
  win.loadFile('index.html')

  win.on('closed', () => {
    win = null
  });

  win.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit()
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});


