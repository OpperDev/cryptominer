'use strict'

const { app, BrowserWindow, ipcMain } = require('electron'),
    path = require('path')

let win

function makeWindow() {
    win = new BrowserWindow({
        title: 'Cryptominer',
        width: 250,
        height: 200,
        frame: false,
        center: true,
        alwaysOnTop: true,
        resizable: false,
        fullscreen: false,
        maximizable: false,
        fullscreenable: false,
        autoHideMenuBar: true,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile(path.join(__dirname, '/res/index.html'))
    win.on('closed', () => win = null)
}

app.on('ready', makeWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (win === null) makeWindow()
})

ipcMain.on('close-app', (evt, arg) => app.quit())