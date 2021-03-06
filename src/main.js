const { app, BrowserWindow, globalShortcut } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const fs = require("fs");
require("@electron/remote/main").initialize();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    app.quit();
}

const refreshTempDir = () => {
    fs.rmdirSync("./temp");
    fs.mkdirSync("./temp");
};

const createWindow = () => {
    refreshTempDir();
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 960,
        minHeight: 540,
        titleBarStyle: "hidden",
        frame: false,
        backgroundColor: "#FFF",
        icon: "./public/logo512.png",
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            //webSecurity: false,
        },
    });
    app.mainWindow = mainWindow;
    if (isDev) {
        mainWindow.loadURL("http://localhost:3000");
    } else {
        mainWindow.loadFile(path.join(__dirname, "./src/build/index.html"));
    }
    globalShortcut.register("Escape", () => mainWindow.close());
    globalShortcut.register("Ctrl+R", () => mainWindow.reload());
    globalShortcut.register("Ctrl+M", () => mainWindow.minimize());

    // Open the DevTools.
    // setInterval(() => mainWindow.webContents.openDevTools(), 1000);
    mainWindow.setMenu(null);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
