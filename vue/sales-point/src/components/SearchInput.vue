<script setup lang="ts">
const $emit = defineEmits<{ search: [val: string]; focusTable: void }>()

function onEnter(evt: KeyboardEvent) {
    const $input = evt.target as HTMLInputElement
    $emit('search', $input.value)
}
</script>

<template>
    <v-text-field
        @keyup.down="$emit('focusTable')"
        @keyup.enter="onEnter"
        variant="outlined"
        label="Buscar"
        color="white"
        class="my-2"
        hide-details
    />
</template>
