// src/index.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, '../assets/icons/logo.icns'), // Chemin vers l'icône .icns
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL('https://sso.crunchyroll.com/fr/login');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
