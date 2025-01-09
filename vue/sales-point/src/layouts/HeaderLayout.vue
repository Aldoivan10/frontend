<script setup lang="ts">
import AuthButton from '@/components/header/AuthButton.vue';
import SwitchTheme from '@/components/header/SwitchTheme.vue';
import { Button, Menubar } from 'primevue';
</script>

<template>
    <header>
        <Menubar>
            <template #start>
                <Button variant="text">
                    <template #icon>
                        <font-awesome-icon :icon="['fas', 'bars']" />
                    </template>
                </Button>
            </template>
            <template #end>
                <SwitchTheme />
                <AuthButton />
            </template>
        </Menubar>
    </header>
</template>
