<template>
  <template v-if="error">
    <ErrorCard :retry="fetchBookings"> Failed to fetch bookings. Please try again. </ErrorCard>
  </template>

  <template v-else>
    <section class="grid grid-cols-1 gap-8">
      <template v-if="!loading">
        <BookingItem
          v-for="booking in bookings"
          :key="booking.id"
          :title="booking.eventTitle"
          :status="booking.status"
          @cancelled="cancelBooking(booking.id)"
        />
      </template>
      <template v-else>
        <LoadingBookingItem v-for="i in 4" :key="i" />
      </template>
    </section>
  </template>
</template>

<script setup>
import { onMounted } from 'vue'
import BookingItem from '@/components/BookingItem.vue'
import LoadingBookingItem from '@/components/LoadingBookingItem.vue'
import useBookings from '@/composables/useBookings.js'
import ErrorCard from '@/components/ErrorCard.vue'

const { bookings, loading, error, fetchBookings, cancelBooking } = useBookings()

onMounted(() => {
  fetchBookings()
})
</script>
