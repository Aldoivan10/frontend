<script setup lang="ts">
import { getTooltip, TooltipProps } from '@/util/util'
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'

const $props = defineProps(TooltipProps('Cambiar modo', 'alt+s'))

const theme = useTheme()
const icon = ref('fas fa-moon')
const tooltipText = computed(() =>
    getTooltip($props.tooltip, $props.shortcut, $props.showShortcut, $props.showTooltip),
)

function switchTheme() {
    const dark = theme.global.current.value.dark
    theme.global.name.value = dark ? 'light' : 'dark'
    icon.value = dark ? 'fas fa-moon' : 'fas fa-sun'
}
</script>

<template>
    <v-btn
        @click="switchTheme"
        v-tooltip="tooltipText"
        v-shortcut.click="shortcut"
        size="default"
        variant="text"
        :icon
    />
</template>
