<script setup lang="ts">
import { Button } from 'primevue';
</script>

<template>
    <Button v-tooltip.bottom="'Iniciar sesión'" >
        <template #icon>
            <font-awesome-icon :icon="['fas', 'user-tie']" />
        </template>
    </Button>
</template>