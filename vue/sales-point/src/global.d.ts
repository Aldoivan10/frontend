import { ButtonHTMLAttributes, type App } from 'vue'

declare global {
    namespace Menu {
        type Item = {
            title: string
            subtitle: string
            icon: string
            admin: boolean
            tooltip: string
            route: string
        }
    }

    namespace User {
        type Shortcut = {
            action: string
            shortcut: string
        }

        type State = {
            name: string
            logged: boolean
            views: Shortcut[]
            shortcuts: Shortcut[]
        }
    }

    namespace Dialog {
        type Button = {
            text: string
            form?: string
            color?: string
            keyComb?: string
            loading?: boolean
            variant?: 'tonal' | 'text'
            action?: (btn: Button) => void
            type?: ButtonHTMLAttributes['type']
        }

        type Props = {
            title: string
            content: string | Component

            icon?: string
            persistent?: boolean
            modelValue?: Any
            onEscClose: boolean
            fullScreen?: boolean
            role?: Role | 'choice'
            width?: string | number
            onAfterLeave?: () => void
            maxWidth?: string | number
            actions?: Button[] | boolean
            form?: { name: string; props: Record<string, string | number | boolean> }
        }

        type Child = VNode<
            RendererNode,
            RendererElement,
            {
                [key: string]: Any
            }
        >

        type ChoiceProps = Omit<
            Props,
            'icon' | 'role' | 'modelValue' | 'title' | 'content' | 'onAfterLeave'
        >

        type Service = {
            install: (app: App) => void
        }
    }

    type Role = 'info' | 'warning' | 'error' | 'success'

    type Maybe<T> = null | undefined | T
}

export {}

declare module 'vue' {
    interface ComponentCustomProperties {
        $dialog: {
            choice: (title: string, content: Component | string, props: ChoiceProps) => Any
        }
    }
}
