import { APIFetch } from '@/service/api.svc'
import type { App } from 'vue'

export const FetchSymbol = Symbol('FetchAPI')

export const APIPlugin = {
    install(app: App, options: { baseUrl?: string }) {
        const api = new APIFetch(options.baseUrl)
        app.provide(FetchSymbol, api)
        app.config.globalProperties.$api = api
    },
}
