<template>
  <p class="text-sm text-white mt-5">Availabile to all IcePanel Customers</p>
  <div class="checkbox mt-2">
    <input
      id="default-checkbox"
      type="checkbox"
      name="availability"
      v-model="availability"
      @click="availability = !availability"
      class="w-4 h-4 text-blue-600 bg-[#3B3C3E] border-[#4C5052] rounded"
    />
    <label for="default-checkbox" class="ms-2 text-sm text-white">Public tech choice</label>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const availability = ref(false)
</script>
