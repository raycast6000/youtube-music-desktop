const { app, BrowserWindow } = require('electron')
const path = require("path")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 680,
        title: "YouTube Music",
        icon: path.join(process.resourcesPath, "assets/logo1.ico"),
        roundedCorners: true
    })

    win.loadURL("https://music.youtube.com/")
    win.setMenuBarVisibility(false)
}

app.on("window-all-closed", () => {
    app.quit()
})

app.whenReady().then(() => {
    createWindow()
})