import { createRouter, createWebHistory } from 'vue-router'
import OrderList from '@/views/OrderList.vue'
import OrderCreate from '@/views/OrderCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/orders' },
        { path: '/orders', component: OrderList },
        { path: '/orders/create', component: OrderCreate }
    ]
})

export default router
