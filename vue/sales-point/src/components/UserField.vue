<script setup lang="ts">
defineProps({
    name: { type: String, default: 'name' },
    label: { type: String, default: 'Usuario' },
    color: { type: String, default: 'secondary' },
    maxLength: { type: Number },
})
</script>

<template>
    <v-text-field
        :label
        :color
        :name
        :maxLength
        :counter="maxLength"
        :persistent-counter="!!maxLength"
    >
        <template #prepend-inner>
            <v-icon icon="fas fa-user" size="x-small"></v-icon>
        </template>
    </v-text-field>
</template>
