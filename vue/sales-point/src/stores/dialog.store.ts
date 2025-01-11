import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
    const showDialog = ref(true)
    const escKeyEvent = (evt: KeyboardEvent) => {
        if (evt.key == 'Escape') showDialog.value = false
    }

    return { showDialog, escKeyEvent }
})
