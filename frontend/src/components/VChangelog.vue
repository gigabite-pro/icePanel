<template>
  <label class="block mt-5">
    <span class="mb-1 lock text-sm font-light text-white"
      >Change log <span class="text-[#84898C]">(optional)</span></span
    >
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <i class="fa-solid fa-globe text-[#84898C] mt-1"></i>
      </div>
      <input
        type="url"
        name="changelogUrl"
        aria-describedby="helper-text-explanation"
        class="mt-0.5 bg-[#3B3C3E40] border border-[#4C5052] w-full text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block placeholder:text-[#84898C] pl-9"
        placeholder="e.g. icepanel.io/changelog"
      />
    </div>
  </label>
</template>
