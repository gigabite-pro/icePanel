<template>
  <label class="block mt-5">
    <span class="mb-1 lock text-sm font-light text-white"
      >Brand Color <span class="text-[#84898C]">(optional)</span></span
    >
    <Listbox as="div" v-model="selected">
      <input type="hidden" name="abstractionModel" v-model="selected.name" />
      <ListboxLabel class="block text-sm font-medium leading-6 text-white"></ListboxLabel>
      <div class="relative">
        <ListboxButton
          class="relative w-full border border-[#4C5052] cursor-default rounded bg-[#3B3C3E40] py-1.5 pr-10 text-left"
        >
          <span class="flex items-center">
            <i class="ml-3 text-white fa-solid fa-chart-simple"></i>
            <span class="ml-3 block truncate text-white">{{ selected.name }}</span>
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-3">
            <i class="fa-solid fa-caret-down text-white"></i>
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-[#3B3C3E] text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              as="template"
              v-for="model in models"
              :key="model.id"
              :value="model"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'bg-indigo-600 text-white' : 'text-white',
                  'relative cursor-default select-none py-2 pl-3 pr-9'
                ]"
              >
                <div class="flex items-center">
                  <span
                    :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']"
                    >{{ model.name }}</span
                  >
                </div>

                <span
                  v-if="selected"
                  aria-hidden="true"
                  :class="[
                    active ? 'text-white' : 'text-indigo-600',
                    'absolute inset-y-0 right-0 flex items-center pr-4'
                  ]"
                >
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </label>
</template>

<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'

const models = [
  {
    id: 1,
    name: 'Person'
  },
  {
    id: 2,
    name: 'Software System'
  },
  {
    id: 3,
    name: 'Container'
  },
  {
    id: 4,
    name: 'Component'
  }
]

const selected = ref(models[0])
</script>
