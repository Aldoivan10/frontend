import { Dialog } from '@/service/dialog.svc'
import type { App } from 'vue'

const DialogSymbol = Symbol('Dialog')

export const dialogPlugin = {
    install(app: App) {
        const dialog = new Dialog(app)
        app.provide(DialogSymbol, dialog)
        app.config.globalProperties.$dialog = dialog 
    },
}

export { DialogSymbol }

