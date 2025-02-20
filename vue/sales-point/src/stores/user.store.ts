import { useApi } from '@aldoivan10/v-api-client/composable'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const availibleUsers = ref<User.State[]>([])
    const api = useApi()

    async function findSystemUsers() {
        const response = await api.get<User.State[]>({ url: '/users' })
        if (response.ok)  availibleUsers.value = response.body
    }

    return { availibleUsers, findSystemUsers }
})
