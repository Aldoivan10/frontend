<script setup lang="ts">
import { onMounted } from 'vue'
import HeaderLayout from './layouts/header/HeaderLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import { useDialogStore } from './stores/dialog.store'
import { useTabStore } from './stores/tab.store'

const tabStore = useTabStore()
const { showUsers } = useDialogStore()

onMounted(async () => {
    const user = await showUsers(true)
    tabStore.addTab(user)
})
</script>

<template>
    <HeaderLayout />
    <MainLayout />
</template>
