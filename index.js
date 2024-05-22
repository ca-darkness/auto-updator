const { app, BrowserWindow } = require("electron")

function __init__() {
    const window = new BrowserWindow({
        height: 470, width: 720,
        webPreferences: { nodeIntegration: true },
        frame: false,
        title: "Hello world"
    })

    window.setTitle("Hello world")
    window.loadFile("view/index.html")
}

app.whenReady().then(__init__)
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") { app.quit() }
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) { __init__() }
})