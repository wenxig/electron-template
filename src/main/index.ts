import { app } from "electron"
import { createInitAppDefault } from "./helper/app"
import { WindowManager } from "./manager/window"
const initApp = createInitAppDefault()

const createMainWindow = () => WindowManager.create('main')

app.whenReady().then(async () => {
  initApp([
    [{
      label: 'DevTool', type: 'normal', click: () => {
        WindowManager.each(v => v.webContents.openDevTools())
      }
    }, {
      label: '退出', type: 'normal', click: () => {
        app.quit()
      }
    }]
  ])
  createMainWindow()
})