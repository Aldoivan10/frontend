import { Route } from '@/router/routes'
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
            route: Route.SALES_POINT.path,
        },
    ])
    const expandMenu = ref(true)
    const currentRoute = ref(Route.HOME)

    return { menuItems, expandMenu, currentRoute }
})
