import { createRouter, createWebHistory } from 'vue-router'
import OrderList from '@/views/OrderList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/orders' },
        { path: '/orders', component: OrderList },
    ]
})

export default router
