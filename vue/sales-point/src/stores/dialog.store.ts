import ChoiseUser from '@/components/user/ChoiseUser.vue'
import LoginUser from '@/components/user/LoginUser.vue'
import { useDialog } from '@aldoivan10/vuetify-dialog/composable'
import { defineStore } from 'pinia'
import { markRaw } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
    const dialog = useDialog()

    async function showUsers(escClose = true) {
        const user = await dialog.simple<User.State>({
            header: { title: 'Seleccionar usuario', prependIcon: 'fas fa-user' },
            body: { content: markRaw(ChoiseUser) },
            persistent: escClose,
        })
        return user
    }

    async function authUser() {
        const auth = await dialog.confirm<boolean>({
            header: { title: 'Identificarse' },
            body: { content: markRaw(LoginUser) },
            persistent: true,
        })
        return auth
    }

    return { dialog, showUsers, authUser }
})
