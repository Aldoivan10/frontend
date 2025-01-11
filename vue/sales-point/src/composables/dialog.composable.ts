import { DialogSymbol } from "@/plugins/dialog.plugin"
import { Dialog } from "@/service/dialog.svc"
import { inject, ref } from "vue"

export function useDialog() {
    const dialog = inject<Omit<Dialog, 'install'>>(DialogSymbol)
    if (!dialog)
        throw new Error('useDialog debe ser utilizado después de instalar el dialogPlugin.')
    const $dialog = ref<Omit<Dialog, 'install'>>(dialog)

    return { dialog, $dialog: $dialog! }
}