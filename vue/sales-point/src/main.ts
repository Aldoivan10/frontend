import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { AppTheme } from './theme/theme'

import { ApiCLientPlugin } from '@aldoivan10/v-api-client'
import { VShortcut } from '@aldoivan10/v-shortcut'
import { Dialog } from '@aldoivan10/vuetify-dialog'
import App from './App.vue'
import { VITE_API_URL } from './config'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AppTheme)
app.use(Dialog)
app.use(VShortcut)
app.use(ApiCLientPlugin, { baseUrl: VITE_API_URL })

app.mount('#app')
