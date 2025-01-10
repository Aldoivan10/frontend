declare global {
    namespace Menu {
        type Item = {
            title: string
            subtitle: string
            icon: string
            admin: boolean
            tooltip: string
        }
    }
}

export {}
