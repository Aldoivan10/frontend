<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

const theme = useTheme()
const icon = ref('fas fa-moon')
const tooltip = ref('Modo oscuro')

function switchTheme() {
    const dark = theme.global.current.value.dark
    theme.global.name.value = dark ? 'light' : 'dark'
    tooltip.value = dark ? 'Modo oscuro' : 'Modo claro'
    icon.value = dark ? 'fas fa-moon' : 'fas fa-sun'
}
</script>

<template>
    <v-btn variant="text" @click="switchTheme" :icon v-tooltip="tooltip" />
</template>
