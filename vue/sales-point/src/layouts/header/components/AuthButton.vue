<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog.store'
import { getTooltip, TooltipProps } from '@/util/util'
import { computed } from 'vue'

const { authUser } = useDialogStore()

const $props = defineProps(TooltipProps('Iniciar sesión', 'alt+l'))
const tooltipText = computed(() =>
    getTooltip($props.tooltip, $props.shortcut, $props.showShortcut, $props.showTooltip),
)
</script>

<template>
    <v-btn
        @click="authUser"
        @mousetrap="authUser"
        v-mousetrap="shortcut"
        v-tooltip="tooltipText"
        icon="fas fa-user-tie"
        variant="text"
    />
</template>
