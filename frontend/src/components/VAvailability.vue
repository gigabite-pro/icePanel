<template>
  <p class="text-sm text-white mt-5">Availabile to all IcePanel Customers</p>
  <div class="checkbox mt-2">
    <input
      id="default-checkbox"
      type="checkbox"
      name="availability"
      class="w-4 h-4 text-blue-600 bg-[#3B3C3E] border-[#4C5052] rounded"
      v-model="toggle"
      true-value="yes"
      false-value="no"
    />
    <label for="default-checkbox" class="ms-2 text-sm text-white">Public tech choice</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: 'no'
    }
  }
}
</script>
