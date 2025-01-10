import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { AppTheme } from './theme/theme'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AppTheme)

app.mount('#app')
