<template>
  <label class="block mt-5">
    <span class="mb-1 lock text-sm font-light text-white"
      >Brand Color <span class="text-[#84898C]">(optional)</span></span
    >
    <Listbox as="div" v-model="selected">
      <input type="hidden" name="brandColorName" v-model="selected.name" />
      <input type="hidden" name="brandColorHex" v-model="selected.hex" />
      <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900"></ListboxLabel>
      <div class="relative">
        <ListboxButton
          class="relative w-full border border-[#4C5052] cursor-default rounded bg-[#3B3C3E40] py-1.5 pr-10 text-left"
        >
          <span class="flex items-center">
            <i class="ml-3 fa-solid fa-palette" :style="{ color: selected.hex }"></i>
            <span class="ml-3 block truncate" :style="{ color: selected.hex }">{{
              selected.name
            }}</span>
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
            style="top: -407px"
          >
            <ListboxOption
              as="template"
              v-for="color in colors"
              :key="color.id"
              :value="color"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-3 pr-9'
                ]"
              >
                <div class="flex items-center">
                  <div
                    class="w-5 h-5 color-box rounded"
                    :style="{ backgroundColor: color.hex }"
                  ></div>
                  <span
                    :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']"
                    :style="{ color: color.hex }"
                    >{{ color.name }}</span
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

const colors = [
  {
    id: 1,
    name: 'Blue',
    hex: '#1BCBF5'
  },
  {
    id: 2,
    name: 'DarkBlue',
    hex: '#588AF7'
  },
  {
    id: 3,
    name: 'Pink',
    hex: '#F82DF4'
  },
  {
    id: 4,
    name: 'Purple',
    hex: '#CB80F0'
  },
  {
    id: 5,
    name: 'Green',
    hex: '#92DD78'
  },
  {
    id: 6,
    name: 'Yellow',
    hex: '#F5B841'
  },
  {
    id: 7,
    name: 'Orange',
    hex: '#FF8811'
  },
  {
    id: 8,
    name: 'Red',
    hex: '#EB6E6E'
  },
  {
    id: 9,
    name: 'Beaver',
    hex: '#A18276'
  },
  {
    id: 10,
    name: 'White',
    hex: '#FFFFFF'
  },
  {
    id: 11,
    name: 'Black',
    hex: '#1E1F20'
  }
]

const selected = ref(colors[5])
</script>
