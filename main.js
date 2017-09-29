let electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    path = require('path'),
    mainWindow

require('electron-reload')(__dirname)

function createWindow() {

    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 300,
        height: 150,
        icon: path.join(__dirname, 'dev/img/logo64.png'),
        show: false
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
        // mainWindow.webContents.openDevTools();
    })

    mainWindow.on('closed', function () {
        mainWindow = null
    })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit();
});

