const percentFormat = new Intl.NumberFormat('es-MX', { style: "percent", maximumFractionDigits: 2 })
const priceFormat = new Intl.NumberFormat('es-MX', { style: "currency", currency: "MXN", maximumFractionDigits: 2 })

export const TooltipProps = (tooltip: string, shortcut: string) => ({
    tooltip: {
        type: String,
        default: tooltip,
    },
    shortcut: {
        type: String,
        default: shortcut,
    },
    showShortcut: {
        type: Boolean,
        default: true,
    },
    showTooltip: {
        type: Boolean,
        default: true,
    },
})

export function getTooltip(
    tooltip: string,
    shortcut: string,
    showTooltip = true,
    showShortcut = true,
) {
    if (showTooltip && showShortcut) return `${tooltip} (${shortcut.toUpperCase()})`
    if (showTooltip) return tooltip
    return undefined
}

export const itemsPerPageOptions = [
    { value: 10, title: '10' },
    { value: 25, title: '25' },
    { value: 50, title: '50' },
    { value: 100, title: '100' },
    { value: 250, title: '250' },
]

export function toPercent(num: number) {
    return percentFormat.format(num / 100)
}

export function toPrice(num: number) {
    return priceFormat.format(num)
}