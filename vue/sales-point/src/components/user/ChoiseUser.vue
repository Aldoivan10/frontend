<script setup lang="ts">
import { useUserStore } from '@/stores/user.store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const userStore = useUserStore()
const { availibleUsers: users } = storeToRefs(userStore)

const $emit = defineEmits<{ closeDialog: [data: User.State] }>()

function getSequence(num: number) {
    return num.toString().split("").join(" ")
}

function onShortcut(evt: KeyboardEvent) {
    const $btn = evt.target as HTMLButtonElement
    $btn.click()
}

onMounted(async () => await userStore.findSystemUsers())
</script>

<template>
    <v-sheet class="d-flex flex-column ga-2">
        <v-btn
            v-for="(user, key) in users"
            v-mousetrap="getSequence(key + 1)"
            @click="$emit('closeDialog',user)"
            @mousetrap="onShortcut"
            class="text-truncate"
            color="secondary"
            variant="tonal"
            ref="$buttons"
            :key
        >
            {{ user.name }}
        </v-btn>
    </v-sheet>
</template>
