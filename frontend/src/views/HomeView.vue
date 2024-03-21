<script lang="ts">
import VForm from '../components/VForm.vue'

export default {
  components: {
    VForm
  },
  methods: {
    handleClick() {
      window.location.href = 'http://localhost:3000/requests/all'
    }
  }
}
</script>

<template>
  <main class="pt-16 pb-16 flex flex-col items-center justify-center bg-[#3B3C3E]">
    <button class="p-3 bg-white rounded mb-3" type="button" @click="handleClick">
      Check All Requests
    </button>
    <VForm />
  </main>
</template>
