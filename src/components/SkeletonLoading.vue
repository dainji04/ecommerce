<template>
  <div
    class="max-w-[1140px] mx-auto flex justify-between max-tablet:grid-cols-2"
  >
    <div v-for="index in 4" class="grid">
      <div class="skeleton--loading w-[266px] h-[250px] bg-[#d9d9d9]"></div>
      <div>
        <div
          class="skeleton--loading w-full h-7 bg-[#d9d9d9] mt-2 rounded-md"
        ></div>
        <div
          class="skeleton--loading w-[60%] h-7 bg-[#d9d9d9] mt-2 rounded-md"
        ></div>
        <div
          class="skeleton--loading w-[70%] h-7 bg-[#d9d9d9] mt-2 rounded-md"
        ></div>
      </div>
    </div>
  </div>
</template>
