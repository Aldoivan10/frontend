<script setup lang="ts">
import { useDialog } from './composables/dialog.composable';
import HeaderLayout from './layouts/HeaderLayout.vue';
import MainLayout from './layouts/MainLayout.vue';

const { dialog } = useDialog()
dialog.choice("Title", "content")
/* $dialog.choice("Title", "content") */
</script>

<template>
    <HeaderLayout />
    <MainLayout />
    <!-- <AppDialog /> -->
</template>
