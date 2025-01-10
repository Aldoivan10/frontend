<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'

const menuStore = useMenuStore()
const { expandMenu: rail, menuItems: items } = storeToRefs(menuStore)
</script>

<template>
    <aside>
        <v-layout class="h-100">
            <v-navigation-drawer :model-value="true" :rail permanent app>
                <v-list
                    class="h-100 d-flex flex-column"
                    density="compact"
                    activatable
                    mandatory
                    nav
                >
                    <v-list-item
                        v-for="({ title, subtitle, icon }, key) in items"
                        :key
                        :title
                        :subtitle
                        color="primary"
                        :prepend-icon="icon"
                    />
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </aside>
</template>
