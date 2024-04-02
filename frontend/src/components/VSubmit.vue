<template>
  <button
    type="submit"
    :disabled="disabled"
    :style="{ opacity: disabled ? '50%' : '100%' }"
    class="w-full py-2 mt-5 rounded bg-[#62E2FE] font-medium"
  >
    <i class="fa-solid fa-paper-plane"></i> Request tech choice
  </button>
</template>

<script setup>
import { watchEffect, ref } from 'vue'
const props = defineProps({
  techNameCheck: Boolean,
  descriptionCheck: Boolean,
  iconCheck: Boolean,
  websiteCheck: Boolean
})

const disabled = ref(true)

watchEffect(() => {
  if (props.techNameCheck && props.descriptionCheck && props.iconCheck && props.websiteCheck) {
    disabled.value = false
  } else {
    disabled.value = true
  }
})
</script>
