import './assets/main.css'

import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { AppTheme } from './theme/theme'

import Tooltip from 'primevue/tooltip'
import App from './App.vue'
import router from './router'
import { FaIcons } from './theme/icons'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FaIcons)
app.directive('tooltip', Tooltip)
app.use(PrimeVue, AppTheme)

app.mount('#app')
