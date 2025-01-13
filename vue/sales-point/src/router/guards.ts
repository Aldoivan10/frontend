import { useUserStore } from '@/stores/user.store'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function authGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) {
    const { currentUser: user } = useUserStore()
    if (user && user.logged) next(to)
    else next(from)
}

export function needUserGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) {
    const { currentUser: user } = useUserStore()
    if (user) next(to)
    else next(from)
}
