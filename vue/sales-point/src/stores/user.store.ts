import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const currentUser = ref<Maybe<User.State>>()
    const availibleUsers = ref<User.State[]>([])

    return { currentUser, availibleUsers }
})
