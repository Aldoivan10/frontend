<script setup lang="ts">
import { LinkedArray } from '@/model/LinkedArray'
import Mousetrap from 'mousetrap'
import { onMounted, toRefs } from 'vue'

const $props = defineProps({
    tabs: { type: LinkedArray<User.State>, default: new LinkedArray<User.State>() },
    nextShortcut: { type: String, default: 'alt+ctrl+t' },
    prevShortcut: { type: String, default: 'alt+shift+t' },
})
const { tabs } = toRefs($props)

onMounted(() => {
    Mousetrap.bind($props.prevShortcut, (evt) => {
        evt.preventDefault()
        tabs.value.previous()
    })
    Mousetrap.bind($props.nextShortcut, (evt) => {
        evt.preventDefault()
        tabs.value.next()
    })
})
</script>

<template>
    <v-card class="flex-grow-1 w-100 bg-primary-darken-1" elevation="0">
        <v-tabs
            bg-color="primary-darken-1"
            v-model="tabs._index"
            v-if="tabs.length"
            density="compact"
            mandatory="force"
            center-active
            show-arrows
        >
            <v-tab v-for="(tab, i) in tabs" :value="i" :key="tab.name" :text="tab.name">
                <template #append>
                    <v-btn
                        icon="fas fa-circle-xmark"
                        class="ms-2"
                        size="x-small"
                        variant="plain"
                        max-width="1.1rem"
                        max-height="1.1rem"
                        v-tooltip="'Cerrar'"
                    />
                </template>
            </v-tab>
        </v-tabs>
    </v-card>
</template>
