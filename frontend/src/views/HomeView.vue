<script lang="ts" setup>
import VForm from '../components/VForm.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="pt-16 pb-16 flex flex-col items-center justify-center bg-[#3B3C3E]">
    <RouterLink to="/requests">
      <button
        class="w-[450px] max-md:w-full py-2 mt-5 mb-4 rounded bg-[#62E2FE] font-medium"
        type="button"
      >
        Check All Requests
      </button>
    </RouterLink>
    <VForm />
  </main>
</template>
