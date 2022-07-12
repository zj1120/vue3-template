import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        name: '/',
        path: '/',
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
