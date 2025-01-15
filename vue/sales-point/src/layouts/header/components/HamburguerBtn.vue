<script setup lang="ts">
import { useMenuStore } from '@/stores/menu.store'
import { getTooltip, TooltipProps } from '@/util/util'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const menuStore = useMenuStore()
const { expandMenu: expand } = storeToRefs(menuStore)

const { tooltip, shortcut, showShortcut, showTooltip } = defineProps(
    TooltipProps('Expandir menú', 'alt+m'),
)
const tooltipText = computed(() => getTooltip(tooltip, shortcut, showShortcut, showTooltip))
</script>

<template>
    <v-app-bar-nav-icon
        icon="fas fa-bars"
        v-mousetrap="shortcut"
        v-tooltip="tooltipText"
        @click="expand = !expand"
        @mousetrap="expand = !expand"
    />
</template>
