<script setup lang="ts">
import { onMounted } from 'vue';
import { useDialog } from './composables/dialog.composable';
import HeaderLayout from './layouts/HeaderLayout.vue';
import MainLayout from './layouts/MainLayout.vue';

const { dialog } = useDialog()

onMounted(() => {
    dialog.choice("Title", "Content")
})
</script>

<template>
    <HeaderLayout />
    <MainLayout />
    <!-- <AppDialog /> -->
</template>
