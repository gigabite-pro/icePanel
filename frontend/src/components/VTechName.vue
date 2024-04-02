<template>
  <label class="block">
    <span class="mb-1 lock text-sm font-light text-white">Technology name</span>
    <input
      type="text"
      id="success"
      name="techName"
      required
      aria-describedby="helper-text-explanation"
      class="mt-0.5 bg-[#3B3C3E40] border border-[#4C5052] w-full text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block placeholder:text-[#84898C]"
      :class="{
        'focus:border-[#EB6E6E] focus:ring-[#EB6E6E]': status == true,
        'focus:border-[#92DD78] focus:ring-[#92DD78]': status == false,
        'focus:border-blue-500': status == null
      }"
      v-model="inputvalue"
      @input="handleInput"
      placeholder="Your technology name"
    />
    <p v-if="status == true" class="mt-1 text-[#EB6E6E] text-xs">This already exists</p>
    <p v-else-if="status == false" class="mt-1 text-[#92DD78] text-xs">
      Cool - this hasn't been added yet!
    </p>
    <p v-else class="hidden"></p>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['updateTechNameCheck'])

let inputvalue = ref('')
let status = ref(null)

function handleInput() {
  if (inputvalue.value.length < 1) {
    status.value = null
    emit('updateTechNameCheck', false)
    return
  }
  fetch(`http://localhost:3000/requests/verifyName?name=${inputvalue.value}`, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      status.value = data.status
      emit('updateTechNameCheck', !data.status)
    })
    .catch((err) => console.log(err))
}
</script>
