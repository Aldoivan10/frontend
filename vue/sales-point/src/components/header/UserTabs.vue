<script setup lang="ts"></script>

<template>
    <v-card class="flex-grow-1 w-100 bg-primary-darken-1" elevation="0">
        <v-tabs
            bg-color="primary-darken-1"
            density="compact"
            mandatory="force"
            center-active
            show-arrows
        >
            <v-tab>
                <v-btn
                    icon="fas fa-circle-xmark"
                    class="ms-2"
                    size="x-small"
                    variant="plain"
                    max-width="1.1rem"
                    max-height="1.1rem"
                    v-tooltip="'Cerrar'"
                />
            </v-tab>
        </v-tabs>
    </v-card>
</template>
