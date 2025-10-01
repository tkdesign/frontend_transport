<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Create New Order</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn color="secondary" class="mb-4" @click="goBack">Back to Orders List</v-btn>
      </v-col>
    </v-row>
    <v-form @submit.prevent="submitOrder">
      <v-row>
        <v-text-field v-model="order.order_number" label="Order Number" required />
      </v-row>
      <v-row>
        <v-text-field v-model="order.customer_name" label="Customer Name" required />
      </v-row>
      <v-row>
        <v-text-field v-model="order.date" label="Date" type="date" required />
      </v-row>
      <v-row v-for="(wp, index) in order.waypoints" :key="index" class="mt-3">
        <v-text-field v-model="wp.location" label="Address" required />
        <v-select
            v-model="wp.type"
            :items="['Pickup', 'Delivery']"
            label="Type"
            required
        />
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn color="primary" @click="addWaypoint">Add Waypoint</v-btn>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn type="submit" color="success">Create Order</v-btn>
        </v-col>

      </v-row>

    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOrderStore, type Order } from '@/stores/orderStore'
import { useRouter } from 'vue-router'

const store = useOrderStore()
const router = useRouter()

const today = new Date().toISOString().slice(0, 10)

const order = ref<Order>({
  order_number: '',
  customer_name: '',
  date: today,
  waypoints: []
})

const addWaypoint = () => {
  order.value.waypoints.push({ location: '', type: 'Pickup' })
}

const submitOrder = async () => {
  await store.createOrder(order.value)
  await router.push('/orders')
}

const goBack = async () => {
  await router.push('/orders')
}
</script>

<style scoped>

</style>