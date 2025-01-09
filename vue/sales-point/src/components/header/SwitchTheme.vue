<script setup lang="ts">
import { Button } from 'primevue';
import { ref } from 'vue';

const icon = ref("moon")
const tooltip = ref("Modo oscuro")

function switchTheme(){
    const fa = icon.value
    icon.value = fa == 'sun' ? 'moon' : 'sun'
    tooltip.value = fa == 'sun' ? 'Modo oscuro' : 'Modo claro'
    document.documentElement.classList.toggle('app-dark');
}
</script>

<template>
    <Button @click="switchTheme" v-tooltip.bottom="tooltip" variant="text">
        <template #icon>
            <font-awesome-icon :icon="['fas', icon]" />
        </template>
    </Button>
</template>
