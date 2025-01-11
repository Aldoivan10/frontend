<script setup lang="ts">
import NavLayout from './NavLayout.vue'
</script>

<template>
    <section class="main-content">
        <NavLayout />
        <main>
            <RouterView />
        </main>
    </section>
</template>
