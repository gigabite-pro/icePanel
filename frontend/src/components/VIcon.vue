<template>
  <label class="block mt-5">
    <span class="mb-1 lock text-sm font-light text-white">Icon</span>
    <div
      class="bg-[#4C505240] flex justify-center rounded border border-dashed border-[#434547] px-6 py-3"
    >
      <div class="text-center">
        <div class="flex text-sm leading-6 text-[#84898C]">
          <label
            for="file-upload"
            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <input id="file-upload" type="file" class="sr-only" />
          </label>
        </div>
        <p v-if="fileStatus == false" class="mx-auto text-xs text-[#84898C]">
          Drag and drop image here
        </p>
        <p v-if="fileStatus == false" class="text-xs leading-5 text-[#84898C]">
          Format: SVG/PNG/JPEG
        </p>
        <p v-if="fileStatus == true" class="text-xs leading-5 text-[#84898C]">
          File uploaded successfully
        </p>
        <button
          type="button"
          @click="handleClick"
          class="mt-2 py-3 px-7 bg-[#5A5E60] rounded text-sm text-white"
        >
          Click to choose image
        </button>
        <input type="hidden" name="fileUrl" v-model="fileUrl" />
      </div>
    </div>
    <p class="mt-1 text-[#84898C] text-xs">Max file size: 5mb</p>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const fileStatus = ref(false)
const fileUrl = ref('')

const emit = defineEmits(['updateIconCheck'])

const firebaseConfig = {
  apiKey: 'AIzaSyCXUiEl4J6fjI4puMxGmwKP6xxK5Zh5nPE',
  authDomain: 'icepanel-305a5.firebaseapp.com',
  projectId: 'icepanel-305a5',
  storageBucket: 'icepanel-305a5.appspot.com',
  messagingSenderId: '625468169429',
  appId: '1:625468169429:web:df42ef8d9dffb2748f965c'
}

firebase.initializeApp(firebaseConfig)

function handleClick() {
  function getFileInfoFromBase64(base64String) {
    const parts = base64String.split(',')

    if (parts.length < 2) {
      return { fileType: null }
    }

    const metadata = parts[0]

    const metadataParts = metadata.split(';')
    if (metadataParts.length !== 2) {
      return { fileType: null }
    }

    const fileType = metadataParts[0].split(':')[1]

    return { fileType }
  }

  const input = document.createElement('input')
  input.type = 'file'
  input.onchange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (readerEvent) => {
      const { fileType } = getFileInfoFromBase64(readerEvent.target.result)

      var byteCharacters = atob(readerEvent.target.result.split(',')[1])
      var byteNumbers = new Array(byteCharacters.length)
      for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      var byteArray = new Uint8Array(byteNumbers)
      var blob = new Blob([byteArray], { type: fileType })

      const ref = firebase.storage().ref()
      const name = `${new Date()}-icePanelIcon`
      const metadata = {
        contentType: fileType
      }
      const task = ref.child(name).put(blob, metadata)

      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          fileUrl.value = url
          fileStatus.value = true
          emit('updateIconCheck', true)
        })
    }
  }
  input.click()
}
</script>
