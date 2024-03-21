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

<script>
const firebaseConfig = {
  apiKey: 'AIzaSyCXUiEl4J6fjI4puMxGmwKP6xxK5Zh5nPE',
  authDomain: 'icepanel-305a5.firebaseapp.com',
  projectId: 'icepanel-305a5',
  storageBucket: 'icepanel-305a5.appspot.com',
  messagingSenderId: '625468169429',
  appId: '1:625468169429:web:df42ef8d9dffb2748f965c'
}

firebase.initializeApp(firebaseConfig)

export default {
  data() {
    return {
      fileStatus: false,
      file: null,
      fileUrl: ''
    }
  },
  methods: {
    handleClick() {
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (readerEvent) => {
          this.file = readerEvent.target.result

          const ref = firebase.storage().ref()
          const file = this.file
          const name = `${new Date()}-${file.name}`
          const metadata = {
            contentType: file.type
          }
          const task = ref.child(name).put(file, metadata)

          task
            .then((snapshot) => snapshot.ref.getDownloadURL())
            .then((url) => {
              this.fileUrl = url
              this.fileStatus = true
            })
        }
      }
      input.click()
    }
  }
}
</script>
