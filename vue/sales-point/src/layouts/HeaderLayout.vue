<script setup lang="ts">
import AuthButton from '@/components/header/AuthButton.vue'
import SwitchTheme from '@/components/header/SwitchTheme.vue'
import UserTab from '@/components/header/UserTabs.vue'
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'

const menuStore = useMenuStore()
const { expandMenu } = storeToRefs(menuStore)
</script>

<template>
    <header class="bg-primary-darken-1 pa-2 d-flex ga-1 align-center">
        <v-app-bar-nav-icon
            v-tooltip="'Expandir menú'"
            icon="fas fa-bars"
            @click="expandMenu = !expandMenu"
        />
        <UserTab />
        <SwitchTheme />
        <AuthButton />
    </header>
</template>
