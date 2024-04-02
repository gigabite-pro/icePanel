<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import VRequest from './VRequest.vue'
import VRequestLabels from './VRequestLabels.vue'

import { ref, onMounted } from 'vue'

const requests = ref([])

onMounted(() => {
  fetch('http://localhost:3000/requests/all', { method: 'GET' })
    .then((response) => response.json())
    .then((data) => (requests.value = data))
})
</script>

<template>
  <div class="border-b border-gray-900/10 w-1/3 max-md:w-full p-10 bg-[#1E1F20] rounded">
    <h1 class="mb-7 text-2xl font-semibold text-white">Your technology requests</h1>
    <RouterLink to="/">
      <button class="w-full py-2 mt-2 mb-4 rounded bg-[#62E2FE] font-medium" type="button">
        <i class="fa-solid fa-plus"></i> New Request
      </button>
    </RouterLink>
    <VRequestLabels />
    <VRequest v-for="request in requests" :key="request.id" :request="request" />
  </div>
</template>
