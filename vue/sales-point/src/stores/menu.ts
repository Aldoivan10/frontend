import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu-store', () => {
    const menuItems = ref<Menu.Item[]>([
        {
            title: 'Punto de venta',
            admin: false,
            subtitle: 'F1',
            icon: 'fas fa-cart-shopping',
            tooltip: 'F1',
        },
    ])
    const expandMenu = ref(true)

    return { menuItems, expandMenu }
})
