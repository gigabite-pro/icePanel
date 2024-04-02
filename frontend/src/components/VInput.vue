<template>
  <label class="block mt-5">
    <span class="mb-1 lock text-sm font-light text-white"
      >{{ text }}
      <span v-if="type == 'docs' || type == 'changelog'" class="text-[#84898C]"
        >(optional)</span
      ></span
    >
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <i class="fa-solid fa-globe text-[#84898C] mt-1"></i>
      </div>
      <input
        type="url"
        :name="type + 'Url'"
        :required="type == 'website'"
        aria-describedby="helper-text-explanation"
        class="mt-0.5 bg-[#3B3C3E40] border border-[#4C5052] w-full text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block placeholder:text-[#84898C] pl-9"
        :placeholder="placeholder"
        v-model="inputvalue"
      />
    </div>
  </label>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'
const props = defineProps({
  type: String,
  text: String,
  placeholder: String
})

const emit = defineEmits(['updateWebsiteCheck'])

let inputvalue = ref('')

onMounted(() => {
  watchEffect(() => {
    emit('updateWebsiteCheck', inputvalue.value.length > 0 && inputvalue.value.includes('http'))
  })
})
</script>
