import Mousetrap from "mousetrap";
import { createVNode, h, ref, render, type App, type Component } from "vue";
import { VBtn, VCard, VCardActions, VCardText, VDialog, VSpacer } from "vuetify/components";

export class Dialog {
    private readonly app: App

    constructor(app: App) {
        this.app = app
    }

    public choice(
        title: string,
        content: Component | string,
        props: Dialog.ChoiceProps = { onEscClose: true },
    ) {
        const $dialog = this.getDialog
        const $container = document.querySelector('.v-overlay-container')!

        const $el = createVNode({
            render() {
                return $dialog(title, content, props)
            },
        })
        $el.appContext = this.app._context
        render($el, $container)
    }

    public confirm() {}

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

    private getDialog(title: string, content: string | Component, props: Dialog.Props) {
        const $content = h(VCardText, null, { default: () => content })
        const { actions, onEscClose: esc, ...rest } = props
        const $childs = [$content]
        const $dialog = ref<VDialog>()

        if (actions && Array.isArray(actions)) {
            const $actions = this.getActions(actions)
            $childs.push($actions)
        }
        const key = esc ? 'esc' : undefined
        if (key)
            Mousetrap.bind(key, () => {})

        const $card = h(VCard, { title }, { default: () => $childs })

        const $el = h(
            VDialog,
            {
                modelValue: true,
                persistent: true,
                ref: $dialog,
                ...rest,
            },
            { default: () => $card },
        )
        return $el
    }
}