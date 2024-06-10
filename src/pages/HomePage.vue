<template>
  <container class="max-w-[1170px] mx-auto block">
    <div id="Slide-and-menu" class="flex">
      <div class="relative mt-10">
        <div class="flex flex-col gap-4">
          <div
            class="flex gap-12 cursor-pointer hover:underline decoration-[#ccc]"
          >
            <h3>Woman's Fashion</h3>
            <img
              class="rotate-[-90deg] invert"
              src="@/assets/fonts/down-arrow.svg"
              alt=""
            />
          </div>
          <div
            class="flex gap-[78px] cursor-pointer hover:underline decoration-[#ccc]"
          >
            <h3>Men's Fashion</h3>
            <img
              class="rotate-[-90deg] invert"
              src="@/assets/fonts/down-arrow.svg"
              alt=""
            />
          </div>
          <div class="cursor-pointer hover:underline decoration-[#ccc]">
            <h2>Electronics</h2>
          </div>
          <div class="cursor-pointer hover:underline decoration-[#ccc]">
            <h2>Home & Lifestyle</h2>
          </div>
          <div class="cursor-pointer hover:underline decoration-[#ccc]">
            <h2>Medicine</h2>
          </div>
          <div class="cursor-pointer hover:underline decoration-[#ccc]">
            <h2>Sports & Outdoor</h2>
          </div>
          <div class="cursor-pointer hover:underline decoration-[#ccc]">
            <h2>Baby's & Toys</h2>
          </div>
          <div class="cursor-pointer hover:underline decoration-[#ccc]">
            <h2>Groceries & Pets</h2>
          </div>
          <div class="cursor-pointer hover:underline decoration-[#ccc]">
            <h2>Health & Beauty</h2>
          </div>
        </div>
      </div>
      <div class="ml-4 mr-11 w-[0.5px] h-[384px] opacity-30 bg-black"></div>
      <div
        class="flex justify-center w-[892px] h-[344px] mt-10 bg-black select-none relative"
      >
        <div class="ml-16 mt-[58px] text-white mr-10">
          <div class="flex items-center gap-6">
            <img src="@/assets/images/logo-apple.png" alt="" />
            <h3>Iphone 14 series</h3>
          </div>
          <div class="mt-5 w-[300px]">
            <h1
              class="font-[inter] text-5xl font-semibold leading-[60px] tracking-[1.92px] not-italic"
            >
              Up to 10% off Voucher
            </h1>
          </div>
          <div class="select-auto">
            <a
              href="#"
              class="flex items-center gap-2 mt-[22px] hover:underline decoration-[#ccc]"
              >Shop Now <img src="@/assets/fonts/arrow-right.svg" alt=""
            /></a>
          </div>
        </div>
        <div class="w-[496px] h-[352px] mt-4 overflow-hidden">
          <img src="@/assets/images/slider.png" alt="" />
        </div>
        <div
          class="flex items-center gap-3 absolute bottom-0 cursor-pointer mb-2"
        >
          <img src="@/assets/fonts/dot-slide.svg" alt="" />
          <img src="@/assets/fonts/dot-slide.svg" alt="" />
          <img src="@/assets/fonts/red-dot-slide.svg" alt="" />
          <img src="@/assets/fonts/dot-slide.svg" alt="" />
          <img src="@/assets/fonts/dot-slide.svg" alt="" />
        </div>
      </div>
    </div>
    <div
      id="content"
      class="flex flex-col items-center justify-between mt-[140px]"
    >
      <div
        class="flash-sales w-full h-[1000px] flex flex-col gap-[60px] relative"
      >
        <div class="w-full">
          <div class="w-full flex items-end justify-between">
            <div class="flex items-end gap-[87px]">
              <div class="flex flex-col gap-6">
                <div class="flex items-center gap-4">
                  <img src="@/assets/fonts/shape.svg" alt="shape" />
                  <h2 class="text-primary text-base font-semibold leading-5">
                    Today's
                  </h2>
                </div>
                <div>
                  <h1
                    class="font-[inter] text-4xl font-semibold leading-[48px] tracking-[1.44px]"
                  >
                    Flash Sales
                  </h1>
                </div>
              </div>
              <div
                id="date"
                class="flex items-center gap-[38px] pb-2 select-none"
              >
                <div class="flex gap-[17px] items-end">
                  <div class="flex flex-col gap-1">
                    <h2 class="text-xs font-medium">Days</h2>
                    <h3
                      class="text-[32px] font-[inter] font-bold leading-[30px] tracking-[1.28px]"
                    >
                      {{ days }}
                    </h3>
                  </div>
                </div>
                <div class="flex gap-[17px] items-end">
                  <div class="flex flex-col gap-1">
                    <h2 class="text-xs font-medium">Hours</h2>
                    <h3
                      class="text-[32px] font-[inter] font-bold leading-[30px] tracking-[1.28px]"
                    >
                      {{ hours }}
                    </h3>
                  </div>
                </div>
                <div class="flex gap-[17px] items-end">
                  <div class="flex flex-col gap-1">
                    <h2 class="text-xs font-medium">Minutes</h2>
                    <h3
                      class="text-[32px] font-[inter] font-bold leading-[30px] tracking-[1.28px]"
                    >
                      {{ minutes }}
                    </h3>
                  </div>
                </div>
                <div class="flex gap-[17px] items-end">
                  <div class="flex flex-col gap-1">
                    <h2 class="text-xs font-medium">Seconds</h2>
                    <h3
                      class="text-[32px] font-[inter] font-bold leading-[30px] tracking-[1.28px]"
                    >
                      {{ seconds }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="p-[11px] bg-grayScale rounded-full cursor-pointer">
                <img
                  class="invert rotate-[180deg]"
                  src="@/assets/fonts/arrow-right.svg"
                  alt=""
                />
              </div>
              <div class="p-[11px] bg-grayScale rounded-full cursor-pointer">
                <img
                  class="invert"
                  src="@/assets/fonts/arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="mt-8">
            <div class="flex gap-8">
              <div class="flex flex-col gap-4 w-[270px] cursor-pointer">
                <div
                  class="item w-full h-[250px] bg-grayScale border border-solid border-[#ccc] flex items-center justify-center relative"
                >
                  <div class="absolute top-3 left-3 px-3 py-1 bg-primary">
                    <p class="text-white text-xs">-40%</p>
                  </div>
                  <img
                    class="p-[14px]"
                    src="@/assets/images/product1.png"
                    alt=""
                  />
                  <div
                    class="absolute top-3 right-3 flex flex-col justify-center gap-2"
                  >
                    <img
                      class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                      src="@/assets/fonts/heart.svg"
                      alt=""
                    />
                    <img
                      class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                      src="@/assets/fonts/eye.svg"
                      alt=""
                    />
                  </div>
                  <div
                    class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black"
                  >
                    <a href="#" class="text-white">Add To Cart</a>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <h2 class="font-semibold">HAVIT HV-G92 Gamepad</h2>
                  <div class="flex items-center gap-3">
                    <p class="text-primary font-semibold">$120</p>
                    <p class="opacity-50 font-semibold line-through">$160</p>
                  </div>
                  <div class="flex gap-2">
                    <div class="flex">
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                    </div>
                    <p class="opacity-50">(88)</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4 w-[270px] cursor-pointer">
                <div
                  class="item w-full h-[250px] bg-grayScale border border-solid border-[#ccc] flex items-center justify-center relative"
                >
                  <div class="absolute top-3 left-3 px-3 py-1 bg-primary">
                    <p class="text-white text-xs">-40%</p>
                  </div>
                  <img
                    class="p-[14px]"
                    src="@/assets/images/product2.png"
                    alt=""
                  />
                  <div
                    class="absolute top-3 right-3 flex flex-col justify-center gap-2"
                  >
                    <img
                      class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                      src="@/assets/fonts/heart.svg"
                      alt=""
                    />
                    <img
                      class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                      src="@/assets/fonts/eye.svg"
                      alt=""
                    />
                  </div>
                  <div
                    class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black"
                  >
                    <a href="#" class="text-white">Add To Cart</a>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <h2 class="font-semibold">HAVIT HV-G92 Gamepad</h2>
                  <div class="flex items-center gap-3">
                    <p class="text-primary font-semibold">$120</p>
                    <p class="opacity-50 font-semibold line-through">$160</p>
                  </div>
                  <div class="flex gap-2">
                    <div class="flex">
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                    </div>
                    <p class="opacity-50">(88)</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4 w-[270px] cursor-pointer">
                <div
                  class="item w-full h-[250px] bg-grayScale border border-solid border-[#ccc] flex items-center justify-center relative"
                >
                  <div class="absolute top-3 left-3 px-3 py-1 bg-primary">
                    <p class="text-white text-xs">-40%</p>
                  </div>
                  <img
                    class="p-[14px]"
                    src="@/assets/images/product3.png"
                    alt=""
                  />
                  <div
                    class="absolute top-3 right-3 flex flex-col justify-center gap-2"
                  >
                    <img
                      class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                      src="@/assets/fonts/heart.svg"
                      alt=""
                    />
                    <img
                      class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                      src="@/assets/fonts/eye.svg"
                      alt=""
                    />
                  </div>
                  <div
                    class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black"
                  >
                    <a href="#" class="text-white">Add To Cart</a>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <h2 class="font-semibold">HAVIT HV-G92 Gamepad</h2>
                  <div class="flex items-center gap-3">
                    <p class="text-primary font-semibold">$120</p>
                    <p class="opacity-50 font-semibold line-through">$160</p>
                  </div>
                  <div class="flex gap-2">
                    <div class="flex">
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                    </div>
                    <p class="opacity-50">(88)</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4 w-[270px] cursor-pointer">
                <div
                  class="item w-full h-[250px] bg-grayScale border border-solid border-[#ccc] flex items-center justify-center relative"
                >
                  <div class="absolute top-3 left-3 px-3 py-1 bg-primary">
                    <p class="text-white text-xs">-40%</p>
                  </div>
                  <img
                    class="p-[14px]"
                    src="@/assets/images/product4.png"
                    alt=""
                  />
                  <div
                    class="absolute top-3 right-3 flex flex-col justify-center gap-2"
                  >
                    <img
                      class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                      src="@/assets/fonts/heart.svg"
                      alt=""
                    />
                    <img
                      class="w-8 h-8 m-[5px] p-[5px] rounded-full bg-white cursor-pointer"
                      src="@/assets/fonts/eye.svg"
                      alt=""
                    />
                  </div>
                  <div
                    class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black"
                  >
                    <a href="#" class="text-white">Add To Cart</a>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <h2 class="font-semibold">HAVIT HV-G92 Gamepad</h2>
                  <div class="flex items-center gap-3">
                    <p class="text-primary font-semibold">$120</p>
                    <p class="opacity-50 font-semibold line-through">$160</p>
                  </div>
                  <div class="flex gap-2">
                    <div class="flex">
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/yellow-star.svg"
                        alt=""
                      />
                      <img
                        class="w-5 h-5"
                        src="@/assets/fonts/star.svg"
                        alt=""
                      />
                    </div>
                    <p class="opacity-50">(88)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-center">
          <button class="py-4 px-12 bg-primary text-white font-medium">
            Views All Products
          </button>
        </div>
      </div>
    </div>
  </container>
</template>
<script>
export default {
  data() {
    return {
      showAddCart: false,
      days: "01",
      hours: "23",
      minutes: "19",
      seconds: "31",
    };
  },
  mounted() {
    let targetDate = new Date();
    targetDate.setFullYear(2024, 6, 31);
    targetDate.setHours(0, 0, 0);
    console.log(targetDate);
    this.updateTime(targetDate);
    setInterval(() => {
      this.updateTime(targetDate);
    }, 1000);
  },
  methods: {
    updateTime(targetDate) {
      const now = new Date();
      console.log(now);
      const newTime = targetDate - now;
      if (newTime <= 0) {
        this.days = "00";
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
      } else {
        this.days = Math.floor(newTime / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((newTime / (1000 * 60 * 60)) % 24);
        this.minutes = Math.floor((newTime / 1000 / 60) % 60);
        this.seconds = Math.floor((newTime / 1000) % 60);
      }
    },
    ToggleAddCart() {
      this.showAddCart = !this.showAddCart;
    },
  },
};
</script>
<style scoped>
#date > div:not(:last-child)::after {
  content: ":";
  color: #e07575;
  height: 42px;
  font-size: 40px;
  line-height: 48px;
}
.add-to-cart {
  display: none;
  animation: showAddToCart 0.3s ease-in;
}
.item:hover .add-to-cart {
  display: flex;
}
.flash-sales:after {
  content: "";
  background-color: #000;
  width: 1170px;
  height: 1px;
  opacity: 0.3;
}
@keyframes showAddToCart {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
  }
}
</style>
