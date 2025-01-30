<script setup lang="ts">
import { computed, ref } from 'vue'

const $props = defineProps({
    show: { type: Boolean, default: false },
    name: { type: String, default: 'password' },
    label: { type: String, default: 'Contraseña' },
    color: { type: String, default: 'secondary' },
    maxLength: { type: Number },
})
const show = ref($props.show)
const model = defineModel({ type: String })
const icon = computed(() => (show.value ? 'fas fa-eye' : 'fas fa-eye-slash'))
const type = computed(() => (show.value ? 'text' : 'password'))
</script>

<template>
    <v-text-field
        v-model="model"
        :type
        :label
        :color
        :name
        :maxLength
        :counter="maxLength"
        :persistent-counter="!!maxLength"
    >
        <template #prepend-inner>
            <v-icon icon="fas fa-key" size="x-small"></v-icon>
        </template>
        <template #append-inner>
            <v-btn @click="show = !show" :icon size="x-small" variant="text" class="opacity-70" />
        </template>
    </v-text-field>
</template>
