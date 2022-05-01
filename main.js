const { BrowserWindow, app } = require("electron");

function creatWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.webContents.openDevTools();

    win.loadFile("src/html/index.html");
}

app.whenReady().then(creatWindow);