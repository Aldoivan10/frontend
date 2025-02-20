<script setup lang="ts">
import { computed } from 'vue';

const { shortcut, showShortcut:show } = defineProps({
    shortcut: { type: String, default: 'alt+space' },
    showShortcut: { type: Boolean, default: true },
})

const $emit = defineEmits<{ search: [val: string]; focusTable: void }>()
const label = computed(() => `BUSCAR ${getShortcut(shortcut, show)}`)

function getShortcut(shortcut: string, showShortcut: boolean) {
    if(!showShortcut) return ""
    return `(${shortcut.toUpperCase()})`
}

function onEnter(evt: KeyboardEvent) {
    const $input = evt.target as HTMLInputElement
    $emit('search', $input.value)
}
</script>

<template>
    <v-text-field
        @keyup.down="$emit('focusTable')"
        v-shortcut.prevent.click="shortcut"
        @keyup.enter="onEnter"
        variant="outlined"
        color="white"
        class="my-2"
        hide-details
        @shortcut="console.log('???')"
        :label
    />
</template>
