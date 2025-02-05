<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog.store'
import { useTabStore } from '@/stores/tab.store'
import { useUserStore } from '@/stores/user.store'
import { getTooltip, TooltipProps } from '@/util/util'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const $props = defineProps({
    ...TooltipProps('Expandir menú', 'alt+t'),
})
const tooltipText = computed(() =>
    getTooltip($props.tooltip, $props.shortcut, $props.showShortcut, $props.showTooltip),
)

const { showUsers } = useDialogStore()
const userStore = useUserStore()
const tabStore = useTabStore()
const { availibleUsers: users } = storeToRefs(userStore)
const { tabs } = storeToRefs(tabStore)

async function addTab() {
    if (tabs.value.length === users.value.length) return
    const user = await showUsers(false)
    tabStore.addTab(user)
}
</script>

<template>
    <v-btn
        size="default"
        variant="text"
        @click="addTab"
        v-tooltip="tooltipText"
        icon="fas fa-circle-plus"
        v-shortcut.click="shortcut"
    />
</template>
