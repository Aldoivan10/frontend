import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabaStore = defineStore('tab', () => {
    const tabs = ref<string[]>()

    return { tabs }
})
