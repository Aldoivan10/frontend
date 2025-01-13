import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { AppTheme } from './theme/theme'

import VueMousetrap from '@4rk/vue-mousetrap'
import App from './App.vue'
import { DialogPlugin } from './plugins/dialog.plugin'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(DialogPlugin)
app.use(AppTheme)
app.use(VueMousetrap)

app.mount('#app')
