<script setup lang="ts">
import { useProductStore } from '@/stores/product.store'
import { itemsPerPageOptions, toPercent, toPrice } from '@/util/util'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const $props = defineProps({
    color: { type: String as () => 'primary' | 'secondary', default: 'primary' },
    itemsPerPage: { type: Number, default: 10  },
    page: { type: Number, default: 1  },
    search: { type: String, default: ''  }
})

const productStore = useProductStore()
const { products: items, headers, loading, totalProducts: itemsLength } = storeToRefs(productStore)

onMounted(async () => productStore.filter($props))
</script>

<template>
    <v-data-table-server
        class="position-absolute top-0 right-0 w-100 h-100 no-select"
        :loading="loading ? 'primary' : loading"
        @update:options="productStore.filter"
        :itemsPerPageOptions
        :class="color"
        fixed-header
        ref="$table"
        :itemsLength
        :itemsPerPage
        show-select
        :headers
        :search
        :items
        :color
        :page
        hover
    >
        <template v-slot:item.units.0.profit="{ value }">
            {{ toPercent(value) }}
        </template>
        <template v-slot:item.units.0.sale="{ value }">
            {{ toPrice(value) }}
        </template>
        <template v-slot:item.buy="{ value }">
            {{ toPrice(value) }}
        </template>
        <template v-slot:item.units.0.name="{ item }">
            <span class="d-flex align-center ga-2">
                {{ item.units[0].name }}
                <v-icon v-if="item.units.length > 1" color="primary" icon="fas fa-boxes-stacked" size="x-small"></v-icon>
            </span>
        </template>
    </v-data-table-server>
</template>
