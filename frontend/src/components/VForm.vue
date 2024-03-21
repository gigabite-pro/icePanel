<script lang="ts">
import VDescription from '../components/VDescription.vue'
import VTechName from '../components/VTechName.vue'
import VIcon from '../components/VIcon.vue'
import VWebsite from '../components/VWebsite.vue'
import VDocs from '../components/VDocs.vue'
import VChangelog from '../components/VChangelog.vue'
import VBrandColor from '../components/VBrandColor.vue'
import VAvailability from '../components/VAvailability.vue'
import VSubmit from '../components/VSubmit.vue'
import { ref } from 'vue'

const techNameCheck = ref(false)
const descriptionCheck = ref(false)
const iconCheck = ref(false)
const websiteCheck = ref(false)

export default {
  components: {
    VDescription,
    VTechName,
    VIcon,
    VWebsite,
    VDocs,
    VChangelog,
    VBrandColor,
    VAvailability,
    VSubmit
  },
  data() {
    return {
      techNameCheck,
      descriptionCheck,
      iconCheck,
      websiteCheck
    }
  }
}
</script>

<template>
  <form action="http://localhost:3000/requests/submit" method="POST" class="bg-[#1E1F20] rounded">
    <div class="border-b border-gray-900/10 p-12">
      <h1 class="mb-7 text-base font-semibold text-3xl text-white">Technology choice request</h1>
      <VTechName :techNameCheck="techNameCheck" />
      <VDescription :descriptionCheck="descriptionCheck" />
      <VIcon :iconCheck="iconCheck" />
      <VWebsite :websiteCheck="websiteCheck" />
      <VDocs />
      <VChangelog />
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
