<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard
        v-for="i in 8"
        :key="i"
        title="Vue Conference 2024"
        when="2024-05-01"
        description="Conference about Vue and JavaScript"
        @register="console.log('Registered!')"
      />
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="grid grid-cols-1 gap-8">
      <BookingItem v-for="i in 3" :key="i" />
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import BookingItem from '@/components/BookingItem.vue'

const events = ref([])

const fetchEvents = async () => {
  const response = await fetch('http://localhost:3001/events')
  events.value = await response.json()
  console.log(events.value)
}

onMounted(() => fetchEvents())
</script>
