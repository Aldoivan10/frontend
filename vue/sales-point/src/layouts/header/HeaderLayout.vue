<script setup lang="ts">
import AuthButton from '@/layouts/header/components/AuthButton.vue';
import SwitchTheme from '@/layouts/header/components/SwitchTheme.vue';
import AddTabBtn from './components/AddTabBtn.vue';
import HamburguerBtn from './components/HamburguerBtn.vue';
import UserTabs from './components/UserTabs.vue';
</script>

<template>
    <header class="bg-primary-darken-1 pa-2 d-flex ga-1 align-center rounded-0 v-card elevation-4">
        <HamburguerBtn />
        <AddTabBtn />
        <UserTabs />
        <SwitchTheme />
        <AuthButton />
    </header>
</template>
