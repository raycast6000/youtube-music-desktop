const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "YouTube Music",
        icon: "./assets/app_icon.ico",
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