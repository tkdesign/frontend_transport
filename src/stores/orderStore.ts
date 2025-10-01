import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
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
            return axios.get<Order[]>('/api/orders/')
                .then((response) => {
                    this.$patch({ orders: response.data })
                })
                .catch((error) => {
                    console.error("Can't load orders.", error)
                    this.$patch({ orders: [] })
                })
        },

        async createOrder(order: Order) {
            return axios.post<Order>('/api/orders/', order)
                .then((response) => {
                    this.orders.push(response.data)
                    return response.data
                })
                .catch((error) => {
                    console.error("Can't create order.", error)
                    throw error
                })
        }
    }
})