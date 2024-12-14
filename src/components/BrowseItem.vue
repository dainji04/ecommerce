<template>
  <div id="browse-items">
    <div>
      <div class="flash-sales w-full flex flex-col relative mt-20">
        <div class="w-full">
          <div class="w-full flex items-end justify-between">
            <div class="flex items-end gap-[87px]">
              <div class="flex flex-col gap-6">
                <div class="flex items-center gap-4">
                  <img src="@/assets/fonts/shape.svg" alt="shape" />
                  <h2 class="text-primary text-base font-semibold leading-5">
                    Categories
                  </h2>
                </div>
                <div>
                  <h1
                    class="font-[inter] text-4xl font-semibold leading-[48px] tracking-[1.44px]"
                  >
                    Browse By Category
                  </h1>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="p-[11px] bg-grayScale rounded-full cursor-pointer"
                  @click="isActive = false"
                >
                  <img
                    class="invert rotate-[180deg]"
                    src="@/assets/fonts/arrow-right.svg"
                    alt=""
                  />
                </div>
                <div
                  class="p-[11px] bg-grayScale rounded-full cursor-pointer"
                  @click="isActive = true"
                >
                  <img
                    class="invert"
                    src="@/assets/fonts/arrow-right.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div :class="{ active: isActive }" class="container relative w-full">
      <div class="list-media flex gap-8 mt-[60px]">
        <div class="media">
          <img src="@/assets/fonts/phones.svg" alt="" />
          <p>Phones</p>
        </div>
        <div class="media">
          <img
            class="w-[56px] h-[56px]"
            src="@/assets/fonts/laptop.svg"
            alt=""
          />
          <p>Laptop</p>
        </div>
        <div class="media">
          <img src="@/assets/fonts/computer.svg" alt="" />
          <p>computer</p>
        </div>
        <div class="media">
          <img class="w-14 h-14" src="@/assets/fonts/appleWatch.svg" alt="" />
          <p>appleWatch</p>
        </div>
        <div :class="clicked + 3" class="media">
          <img class="invert" src="@/assets/fonts/camera.svg" alt="" />
          <p>camera</p>
        </div>
        <div class="media">
          <img src="@/assets/fonts/headphones.svg" alt="" />
          <p>headphones</p>
        </div>
        <div class="media">
          <img src="@/assets/fonts/gaming.svg" alt="" />
          <p>gaming</p>
        </div>
        <div class="media">
          <img src="@/assets/fonts/gaming.svg" alt="" />
          <p>gaming</p>
        </div>
        <div class="media">
          <img src="@/assets/fonts/gaming.svg" alt="" />
          <p>gaming</p>
        </div>
      </div>
    </div>
    <div class="h-[0.5] w-full bg-black opacity-30 mt-[70px]"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clicked: "clicked",
      isActive: false,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  transition: 1s;
}
.container.active {
  transform: translateX(-50%);
}
.list-media .media {
  width: 170px;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
}
.clicked,
.clicked3 {
  background: #db4444 !important;
  color: white !important;
}
.clicked3 > img {
  filter: invert(0);
}
.clicked > img {
  filter: invert(100);
}
</style>
