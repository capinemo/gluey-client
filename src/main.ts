import { app, BrowserWindow } from 'electron';

/**
 * Loading window
 */
async function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    movable: false,
    kiosk: true,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  await win.loadFile('index.html');

  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    await createWindow();
  }
});
