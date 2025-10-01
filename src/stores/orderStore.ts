import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

export interface Waypoint {
    id?: number
    location: string
    type: 'Pickup' | 'Delivery'
}

export interface Order {
    id?: number
    order_number: string
    customer_name: string
    date: string
    waypoints: Waypoint[]
}

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [] as Order[],
        loading: false,
    }),
    actions: {
        async fetchOrders() {
            this.loading = true
            try {
                const response = await axios.get<Order[]>('/api/orders/')
                this.orders = response.data
            } finally {
                this.loading = false
            }
        },

        async createOrder(order: Order) {
            const response = await axios.post<Order>('/api/orders/', order)
            this.orders.push(response.data)
        }
    }
})