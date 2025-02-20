<script setup lang="ts">
import { useTabStore } from '@/stores/tab.store'
import { useUserStore } from '@/stores/user.store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const userStore = useUserStore()
const tabStore = useTabStore()
const { availibleUsers: users } = storeToRefs(userStore)
const { tabs } = storeToRefs(tabStore)

const $emit = defineEmits<{ closeDialog: [data: User.State] }>()

function getSequence(num: number) {
    return num.toString().split('').join(' ')
}

function disabled(user: User.State) {
    const finded = tabs.value.find((u) => user.name == u.name)
    return Boolean(finded)
}

onMounted(async () => await userStore.findSystemUsers())
</script>

<template>
    <v-sheet class="d-flex flex-column ga-2">
        <v-btn
            v-for="(user, key) in users"
            v-shortcut.click="getSequence(key + 1)"
            @click="$emit('closeDialog', user)"
            :disabled="disabled(user)"
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
