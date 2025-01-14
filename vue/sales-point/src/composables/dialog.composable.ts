import { DialogSymbol } from '@/plugins/dialog.plugin'
import { Dialog } from '@/service/dialog.svc'
import { inject } from 'vue'

export function useDialog() {
    const dialog = inject<Dialog>(DialogSymbol)
    if (!dialog)
        throw new Error('useDialog debe ser utilizado después de instalar el dialogPlugin.')
    return dialog
}
