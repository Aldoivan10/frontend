<script setup lang="ts">
import AuthButton from '@/layouts/header/components/AuthButton.vue'
import SwitchTheme from '@/layouts/header/components/SwitchTheme.vue'
import UserTab from '@/layouts/header/components/UserTabs.vue'
import { useTabStore } from '@/stores/tab.store'
import { storeToRefs } from 'pinia'
import AddTabBtn from './components/AddTabBtn.vue'
import HamburguerBtn from './components/HamburguerBtn.vue'

const tabStore = useTabStore()
const { tabs } = storeToRefs(tabStore)
</script>

<template>
    <header class="bg-primary-darken-1 pa-2 d-flex ga-1 align-center rounded-0 v-card elevation-4">
        <HamburguerBtn />
        <AddTabBtn :tabs />
        <UserTab :tabs />
        <SwitchTheme />
        <AuthButton />
    </header>
</template>
