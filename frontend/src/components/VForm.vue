<script lang="ts" setup>
import VDescription from '../components/VDescription.vue'
import VTechName from '../components/VTechName.vue'
import VIcon from '../components/VIcon.vue'
import VInput from '../components/VInput.vue'
import VBrandColor from '../components/VBrandColor.vue'
import VAbstractionModel from '../components/VAbstractionModel.vue'
import VAvailability from '../components/VAvailability.vue'
import VSubmit from '../components/VSubmit.vue'
import { ref } from 'vue'

const techNameCheck = ref(false)
const descriptionCheck = ref(false)
const iconCheck = ref(false)
const websiteCheck = ref(false)

function handleUpdateTechNameCheck(value: boolean) {
  techNameCheck.value = value
}

function handleUpdateDescriptionCheck(value: boolean) {
  descriptionCheck.value = value
}

function handleUpdateIconCheck(value: boolean) {
  iconCheck.value = value
}

function handleUpdateWebsiteCheck(value: boolean) {
  websiteCheck.value = value
}
</script>

<template>
  <form action="http://localhost:3000/requests/submit" method="POST" class="bg-[#1E1F20] rounded">
    <div class="border-b border-gray-900/10 p-12">
      <h1 class="mb-7 text-3xl font-semibold text-white">Technology choice request</h1>
      <VTechName @updateTechNameCheck="handleUpdateTechNameCheck" />
      <VDescription @updateDescriptionCheck="handleUpdateDescriptionCheck" />
      <VAbstractionModel />
      <VIcon @updateIconCheck="handleUpdateIconCheck" />
      <VInput
        :type="'website'"
        :text="'Website URL'"
        :placeholder="'e.g. icepanel.io'"
        @updateWebsiteCheck="handleUpdateWebsiteCheck"
      />
      <VInput :type="'docs'" :text="'Docs URL'" :placeholder="'e.g. docs.icepanel.io'" />
      <VInput
        :type="'changelog'"
        :text="'Change Log'"
        :placeholder="'e.g. icepanel.io/changelog'"
      />
      <VBrandColor />
      <VAvailability />
      <VSubmit
        :techNameCheck="techNameCheck"
        :descriptionCheck="descriptionCheck"
        :iconCheck="iconCheck"
        :websiteCheck="websiteCheck"
      />
    </div>
  </form>
</template>
