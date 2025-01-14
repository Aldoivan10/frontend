import { FetchSymbol } from '@/plugins/api.plugin'
import type { APIFetch } from '@/service/api.svc'
import { inject, ref } from 'vue'

export function useAPI() {
    const api = inject<APIFetch>(FetchSymbol)
    if (!api) throw new Error('useAPI debe ser utilizado después de instalar el APIPlugin.')
    const $api = ref<APIFetch>(api)
    return { api, $api: $api! }
}
