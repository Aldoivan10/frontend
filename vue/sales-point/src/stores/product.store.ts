import { useApi } from '@aldoivan10/v-api-client/composable'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
    const api = useApi()
    const products = ref<Product.Item[]>([])
    const headers = ref<Head[]>([])
    const totalProducts = ref(0)
    const loading = ref(false)

    async function find(params: APIParams) {
        loading.value = true
        const queryParams = new URLSearchParams(
            Object.assign({ orders: ['nombre_asc'] }, params),
        )
        const response = await api.get<Product.Item[]>({
            url: `/product?${queryParams.toString()}`,
        })
        queryParams.delete("limit")
        queryParams.delete("offset")
        const total = await api.get<number>({
            url: `/product/total?${queryParams.toString()}`,
        })
        if (response.ok && total.ok) {
            products.value = response.body
            headers.value = buildHeaders(products.value[0])
            totalProducts.value = total.body
            console.log(response.body)
        } else console.log(response.error)
        loading.value = false
    }

    function buildHeaders(product: Product.Item) {
        const headers: Head[] = [{ title: 'Nombre', value: 'name' }]
        for (const { id, name: title } of product.codes)
            headers.push({
                title,
                key: title,
                sortable: false,
                value: ({ codes }: Product.Item) => codes.find((c) => c.id === id)?.code ?? '',
            })
        headers.push({ title: 'Unidad', value: 'units.0.name' })
        headers.push({ title: 'Cantidad', value: 'amount' })
        headers.push({ title: 'Precio (MXN)', value: 'buy' })
        headers.push({ title: 'Departamento', value: 'department.name' })
        headers.push({ title: 'Proveedor', value: 'supplier.name' })
        headers.push({ title: 'Precio de compra (MXN)', value: 'units.0.sale' })
        headers.push({ title: 'Ganancia', value: 'units.0.profit' })
        return headers
    }

    function filter({ itemsPerPage: limit = 10, page = 1, search = '' }: Table.Options = {}) {
        if (search) {
            let filter
            if (search.includes('*'))
                filter = search
                    .split('*')
                    .filter(Boolean)
                    .map((str) => `%${str}%`)
                    .join('')
            else filter = `${search}%`
            find({ limit, offset: (page - 1) * limit, filters: [`nombre_like=${filter}`] })
        } else find({ limit, offset: (page - 1) * limit })
    }

    return { filter, products, headers, loading, totalProducts }
})
