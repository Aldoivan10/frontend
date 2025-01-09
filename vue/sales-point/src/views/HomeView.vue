<script setup lang="ts">
import { Button } from 'primevue'
</script>

<template>
    <main>
        <Button label="Submit">
            <template #icon>
                <font-awesome-icon :icon="['fas', 'bars']" />
            </template>
        </Button>
    </main>
</template>
