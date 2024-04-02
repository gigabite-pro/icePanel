<template>
  <div class="w-full mb-1 rounded bg-[#3B3C3E80] px-2 py-2 text-sm flex justify-between text-white">
    <p>{{ request.techName }}</p>
    <p
      v-if="request.status == 'approved'"
      class="rounded-full border-2 text-xs px-2 text-[#92DD78] border-[#92DD78]"
    >
      Approved
    </p>
    <p
      v-if="request.status == 'pending'"
      class="rounded-full border-2 text-xs px-2 text-[#F5B841] border-[#F5B841]"
    >
      Pending Approval
    </p>
    <p
      v-if="request.status == 'rejected'"
      class="rounded-full border-2 text-xs px-2 text-[#EB6E6E] border-[#EB6E6E]"
    >
      Rejected
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  request: Object
})
</script>
