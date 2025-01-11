import { createVNode, render, type App, type Component } from "vue";
import { VCard, VCardText, VDialog } from "vuetify/components";

export class Dialog {
    private readonly defaultProps: Dialog.Props = {
        fullScreen: false,
        width: '20rem',
        role: 'info'
    }
    private readonly app: App

    constructor(app: App) {
        this.app = app
    }

    public choice(title: string, content: Component | string) {
        const { show, evt } = this.getEvent()

        const $content = createVNode(VCardText, null, { default: () => content })
        const $card = createVNode(VCard, { title }, { default: () => $content })
        const $dialog = createVNode(VDialog, { modelValue: show, persistent: true }, { default: () => $card })
        const $container = document.createElement('div')

        $dialog.appContext = this.app._context
        render($dialog, $container)
        
        window.addEventListener('keydown', evt)
        document.body.appendChild($container.firstChild!)
    }

    public confirm() {

    }

    private getEvent() {
        let show = true
        const evt = (evt: KeyboardEvent) => { if (evt.key === 'Escape') show = false }
        return { show, evt }
    }

}