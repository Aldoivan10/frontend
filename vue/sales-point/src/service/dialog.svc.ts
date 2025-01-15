import Mousetrap from 'mousetrap'
import { createVNode, h, ref, render, type App, type Component, type Ref, type VNode } from 'vue'
import {
    VBtn,
    VCard,
    VCardActions,
    VCardItem,
    VCardText,
    VCardTitle,
    VDialog,
    VSpacer
} from 'vuetify/components'

export class Dialog {
    private readonly app: App
    private colors: Dialog.Color = {
        info: 'blue',
        choice: 'indigo',
        error: 'red',
        success: 'green',
        warning: 'yellow',
    }
    private textColors: Dialog.TextColor = {
        info: 'text-blue',
        choice: 'text-indigo',
        error: 'text-red',
        success: 'text-green',
        warning: 'text-yellow',
        primary: 'text-primary',
        secondary: 'text-secondary',
        normal: '',
    }

    constructor(app: App) {
        this.app = app
    }

    public choice<T>(title: string, content: Component | string, props: Dialog.ArgProps) {
        return new Promise<Maybe<T>>((resolve) => {
            const $container = document.querySelector('.v-overlay-container')!
            const choiceProps = this.setDefaults(props, 'fas fa-circle-question', 'choice')
            const { escClose: esc, ...rest } = this.setDefaultProps(title, content, choiceProps)
            const $node = ref<VNode>()
            const show = ref(true)

            if (esc) Mousetrap.bind('esc', () => (show.value = false))

            const onAfterLeave = () => {
                render(null, $container)
                Mousetrap.unbind('esc')
            }

            const onCloseDialog = (data: T) => {
                resolve(data)
                show.value = false
            }

            $node.value = this.getDialogNode({ onAfterLeave, onCloseDialog, ...rest }, show)
            render($node.value, $container)
        })
    }

    public confirm() {}

    private getDialogNode(props: Dialog.Props, show: Ref<boolean>) {
        const { title, icon, titleColor, actions, ...rest } = props

        const dialog = this.getDialog
        const header = this.getHeader
        const buttons = this.getActions

        const $node = createVNode({
            render() {
                let $actions
                if (actions && Array.isArray(actions)) $actions = buttons(actions)
                const $header = header(title, titleColor, icon)
                return dialog({ modelValue: show.value, ...rest }, $header, $actions)
            },
        })
        $node.appContext = this.app._context
        return $node
    }

    private getActions(buttons?: Dialog.Button[]) {
        if (!buttons) return undefined

        const $spacer = h(VSpacer)
        const $buttons = buttons.map((btn) => {
            const { shortcut, ...props } = btn
            const $btn = ref<HTMLButtonElement>()
            if (shortcut) Mousetrap.bind(shortcut, () => $btn.value?.click())
            return h(VBtn, { ref: $btn, ...props }, { default: () => btn.text })
        })
        return h(VCardActions, null, { default: () => [$spacer, ...$buttons] })
    }

    private getHeader(title: string, color?: string, prependIcon?: string) {
        const $title = h(VCardTitle, { class: 'font-weight-bold' }, { default: () => title })
        const $header = h(VCardItem, { class: color, prependIcon }, { default: () => $title })
        return $header
    }

    private getDialog(props: Omit<Dialog.Props, 'title'>, header?: VNode, actions?: VNode) {
        const { content, onCloseDialog, ...rest } = props
        const $childs = header ? [header] : []
        const $content = h(VCardText, null, {
            default: () => h(content, { showModal: rest.modelValue, onCloseDialog }),
        })
        $childs.push($content)
        if (actions) $childs.push(actions)
        
        console.log(rest.modelValue)
        const $card = h(VCard, null, { default: () => $childs })
        const $dialog = h(VDialog, rest, { default: () => $card })
        return $dialog
    }

    private setDefaultProps(
        title: string,
        content: string | Component,
        props: Dialog.ArgProps,
    ): Dialog.Props {
        const {
            icon = 'fas fa-comment-dots',
            titleColor: textColor = 'normal',
            transition = 'scale-transition',
            fullScreen = false,
            persistent = true,
            escClose = true,
            width = '25%',
            role = 'info',
            actions,
        } = props
        const titleColor = this.textColors[textColor]

        if (Array.isArray(actions))
            actions.forEach((btn) => {
                btn.color = btn.color ?? this.colors[role]
            })

        return {
            icon,
            title,
            width,
            content,
            escClose,
            titleColor,
            fullScreen,
            persistent,
            transition,
        }
    }

    private setDefaults(
        props: Dialog.ArgProps,
        defIcon: string,
        defRole: Dialog.DRole,
    ): Dialog.ArgProps {
        const { role = defRole, icon = defIcon, ...rest } = props
        return { role, icon, ...rest }
    }
}
