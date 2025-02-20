<script setup lang="ts">
import PasswordField from '../PasswordField.vue'
</script>

<template>
    <v-form>
        <v-container>
            <v-row>
                <PasswordField :max-length="10" />
            </v-row>
        </v-container>
    </v-form>
</template>
