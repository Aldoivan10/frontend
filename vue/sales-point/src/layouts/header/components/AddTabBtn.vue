<script setup lang="ts">
import { LinkedArray } from '@/model/LinkedArray'
import { useDialogStore } from '@/stores/dialog.store'
import { getTooltip, TooltipProps } from '@/util/util'
import { computed, toRefs } from 'vue'

const $props = defineProps({
    tabs: { type: LinkedArray<User.State>, default: new LinkedArray() },
    ...TooltipProps('Expandir menú', 'alt+t'),
})
const tooltipText = computed(() =>
    getTooltip($props.tooltip, $props.shortcut, $props.showShortcut, $props.showTooltip),
)

const { showUsers } = useDialogStore()
const { tabs } = toRefs($props)

async function addTab() {
    const user = await showUsers()
    tabs.value.push(user!)
}
</script>

<template>
    <v-btn
        variant="text"
        @click="addTab"
        @mousetrap="addTab"
        v-mousetrap="shortcut"
        v-tooltip="tooltipText"
        icon="fas fa-circle-plus"
    />
</template>
