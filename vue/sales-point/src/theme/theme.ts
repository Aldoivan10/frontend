import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { es } from 'vuetify/locale'

const light = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#F8FAFC',
        primary: '#FF9800',
        'primary-lighten-1': '#FFA726',
        'primary-darken-1': '#FB8C00',
        secondary: '#EF6C00',
        'secondary-darken-1': '#E65100',
    },
}

const dark = {
    dark: true,
    colors: {
        background: '#40444b',
        surface: '#292b2f',
        primary: '#536dfe',
        'primary-lighten-1': '#4DA0FF',
        'primary-darken-1': '#3a4cb1',
        secondary: '#6543FF',
        'secondary-darken-1': '#7831FF',
    },
}

export const AppTheme = createVuetify({
    components: {
        ...components,
        VNumberInput,
    },
    defaults: {
        VTextField: {
            density: 'comfortable',
        },
        VTextarea: {
            density: 'comfortable',
        },
        VSelect: {
            density: 'comfortable',
        },
        VBtn: {
            elevation: 0,
            size: 'small',
        },
        VAppBarNavIcon: {
            size: 'small',
        },
        VListItem: {
            VIcon: { size: 'small' },
        },
    },
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: { fa },
    },
    locale: {
        locale: 'es',
        messages: { es },
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light,
            dark,
        },
    },
})
