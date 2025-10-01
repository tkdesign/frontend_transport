<template>
  <v-container>
    <v-btn to="/orders/create" color="primary" class="mb-4">Create Order</v-btn>

    <v-data-table
        :items="orderStore.orders"
        :headers="headers"
        :loading="orderStore.loading"
    />
  </v-container>
</template>

<script setup lang="ts">
import { useOrderStore } from '@/stores/orderStore'
import { onMounted } from 'vue'

const orderStore = useOrderStore()

const headers = [
  { text: 'Order Number', value: 'order_number' },
  { text: 'Customer', value: 'customer_name' },
  { text: 'Date', value: 'date' },
  { text: 'Waypoints Count', value: (item: any) => item.waypoints.length }
]

onMounted(() => {
  orderStore.fetchOrders()
})
</script>

<style scoped>

</style>