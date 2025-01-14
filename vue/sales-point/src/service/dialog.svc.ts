import Mousetrap from 'mousetrap'
import { createVNode, h, ref, render, type App, type Component, type Ref, type VNode } from 'vue'
import { VBtn, VCard, VCardActions, VCardText, VDialog, VSpacer } from 'vuetify/components'

export class Dialog {
    private readonly app: App

    constructor(app: App) {
        this.app = app
    }

    public choice(
        title: string,
        content: Component | string,
        props: Dialog.ChoiceProps = { onEscClose: true, persistent: true },
    ) {
        const $container = document.querySelector('.v-overlay-container')!
        const { onEscClose: esc, ...rest } = props
        const $node = ref<VNode>()
        const show = ref(true)

        if (esc) Mousetrap.bind('esc', () => (show.value = false))

        const onAfterLeave = () => {
            render(null, $container)
            Mousetrap.unbind('esc')
        }
        
        $node.value = this.getDialogNode({ title, content, onAfterLeave, ...rest }, show)
        render($node.value, $container)
    }

    public confirm() {}

    private getDialogNode(props: Omit<Dialog.Props, 'onEscClose'>, show: Ref<boolean>) {
        const $dialog = this.getDialog
        const $node = createVNode({
            render() {
                return $dialog({ modelValue: show.value, ...props })
            },
        })
        $node.appContext = this.app._context
        return $node
    }

    private getActions(buttons: Dialog.Button[]) {
        const $spacer = h(VSpacer)
        const $buttons = buttons.map((btn) => {
            const { keyComb: key, ...props } = btn
            const $btn = ref<HTMLButtonElement>()
            if (key) Mousetrap.bind(key, () => $btn.value?.click())
            return h(VBtn, { ref: $btn, ...props }, { default: () => btn.text })
        })
        return h(VCardActions, null, { default: () => [$spacer, ...$buttons] })
    }

    private getDialog(props: Omit<Dialog.Props, 'onEscClose'>) {
        const { title, content, actions, ...rest } = props
        const $content = h(VCardText, null, { default: () => h(content) })
        const $childs = [$content]

        if (actions && Array.isArray(actions)) {
            const $actions = this.getActions(actions)
            $childs.push($actions)
        }

        const $card = h(VCard, { title }, { default: () => $childs })
        const $dialog = h(VDialog, rest, { default: () => $card })
        return $dialog
    }
}
