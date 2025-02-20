<script setup lang="ts">
import ProductsTable from '@/components/ProductsTable.vue'
import SearchInput from '@/components/SearchInput.vue'
import { getTooltip, TooltipProps } from '@/util/util'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const $props = defineProps({
    itemsPerPage: Number,
    search: String,
    page: Number,
    ...TooltipProps('Cambiar', 'alt+k'),
})

const { tooltip, shortcut, showShortcut, showTooltip } = $props
const search = ref($props.search ?? '')
const $router = useRouter()
const tooltipKit = getTooltip(tooltip, shortcut, showShortcut, showTooltip)

onMounted(() => $router.replace({ query: undefined }))
</script>

<template>
    <v-card class="w-100 h-100 d-flex flex-column" elevation="5">
        <v-card-item class="bg-secondary text-white">
            <template v-slot:prepend>
                <span class="d-flex ga-3 align-center">
                    <v-icon icon="fas fa-boxes-stacked"></v-icon>
                    <v-card-title class="font-weight-bold"> Productos </v-card-title>
                </span>
            </template>
            <template v-slot:default>
                <SearchInput @search="(val) => (search = val)" />
            </template>
            <template v-slot:append>
                <v-switch
                    v-shortcut.click="shortcut"
                    v-tooltip="tooltipKit"
                    append-icon="fas fa-box"
                    prepend-icon="fas fa-boxes-stacked"
                    hide-details
                ></v-switch>
            </template>
        </v-card-item>
        <v-card-text class="position-relative">
            <ProductsTable :itemsPerPage :search :page />
        </v-card-text>
    </v-card>
</template>
