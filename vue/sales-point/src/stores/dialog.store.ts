import { DialogSymbol } from '@/plugins/dialog.plugin'
import { Dialog } from '@/service/dialog.svc'
import { defineStore } from 'pinia'
import { inject } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
    const dialog = inject<Omit<Dialog, 'install'>>(DialogSymbol)

    if (!dialog)
        throw new Error('useDialog debe ser utilizado después de instalar el dialogPlugin.')

    function showUsers(onEscClose = true) {
        
    }

    return { dialog, showUsers }
})
