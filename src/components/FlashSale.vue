4
<template>
  <div class="mt-[140px]">
    <div v-if="items">
      <div class="flash-sales w-full flex flex-col relative">
        <div class="w-full">
          <div
            class="w-full flex items-end justify-between max-tablet:justify-center"
          >
            <div
              class="flex items-end gap-[87px] max-tablet:flex-col max-tablet:gap-5 max-tablet:items-start"
            >
              <div class="flex flex-col gap-6 max-tablet:flex-row">
                <div class="flex items-center gap-4">
                  <img
                    loading="lazy"
                    src="@/assets/fonts/shape.svg"
                    alt="shape"
                  />
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
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div
          class="grid grid-cols-4 gap-8 max-tablet:grid-cols-2 max-tablet:mx-2 max-tablet:gap-4"
        >
          <template
            class="flex flex-col gap-4 w-[270px] cursor-pointer max-pc:w-[100%]"
            v-for="(item, index) in items"
            :key="index"
            v-show="index < 8"
          >
            <router-link
              v-if="index < 8"
              :to="{
                name: 'itemsDetails',
                params: { id: item._id, nameList: nameList },
              }"
            >
              <div
                class="item w-full h-[250px] max-tablet:h-[150px] bg-grayScale rounded-md overflow-hidden outline-none border-none flex items-center justify-center relative"
              >
                <div
                  class="absolute top-3 left-3 px-3 py-1 bg-primary rounded-md z-10"
                  v-if="item.discount > 0"
                >
                  <p class="text-white text-xs">-{{ item.discount }}%</p>
                </div>
                <img
                  loading="lazy"
                  class="items-product p-[14px] max-tablet:max-h-[150px]"
                  :src="item.thumbnail"
                  alt=""
                />
                <div
                  class="absolute top-3 right-3 flex flex-col justify-center gap-2"
                  @click.stop.prevent="addToWishList(item, emailUser)"
                  @click="() => open('wish list')"
                >
                  <img
                    loading="lazy"
                    class="w-12 h-12 max-tablet:w-6 max-tablet:h-6 m-[5px] p-[5px] rounded-full bg-white hover:invert cursor-pointer"
                    src="@/assets/fonts/heart.svg"
                    alt=""
                  />
                </div>
                <div
                  class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black"
                >
                  <a
                    @click.stop.prevent="addToCart(item, emailUser)"
                    @click="() => open('cart')"
                    class="text-white w-full flex justify-center items-center hover:text-red-400"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="font-semibold">{{ item.name }}</h2>
                <div class="flex items-center gap-3">
                  <p class="text-primary font-semibold">
                    {{ calculatorSales(item.price, item.discount) }}
                  </p>
                  <p class="opacity-50 font-semibold line-through">
                    {{ convertMoney(item.price) }}
                  </p>
                </div>
                <div class="flex gap-2">
                  <div class="flex">
                    <img
                      loading="lazy"
                      class="w-5 h-5"
                      src="@/assets/fonts/yellow-star.svg"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      class="w-5 h-5"
                      src="@/assets/fonts/yellow-star.svg"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      class="w-5 h-5"
                      src="@/assets/fonts/yellow-star.svg"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      class="w-5 h-5"
                      src="@/assets/fonts/yellow-star.svg"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      class="w-5 h-5"
                      src="@/assets/fonts/yellow-star.svg"
                      alt=""
                    />
                  </div>
                  <p class="opacity-50">({{ item.stock }})</p>
                </div>
              </div>
            </router-link>
          </template>
        </div>
        <div
          class="w-full flex items-center justify-center my-[60px] max-tablet:my-8"
        >
          <router-link
            :to="{
              name: 'allProducts',
              params: { nameList: nameList },
            }"
          >
            <button class="button--hover">Views All Products</button>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <SkeletonLoading />
    </div>
  </div>
  <div class="line w-full h-[0.5px] bg-black opacity-30"></div>
  <contextHolder />
</template>

<script setup>
import { notification } from "ant-design-vue";
const [api, contextHolder] = notification.useNotification();
const open = (placement) => openNotification(placement);
const openNotification = (placement) => {
  api.success({
    message: `Added success`,
    description: `click ${placement} to view item`,
  });
};
</script>

<script>
import useFetch from "@/store/fetchAPI";
import convertMoney from "@/utils/convertMoney";
import calculatorSales from "@/utils/calculatorDiscount";

import SkeletonLoading from "./SkeletonLoading.vue";
import { ref } from "vue";

import User from "@/store/getUser";

export default {
  components: {
    SkeletonLoading,
  },
  data() {
    const nameList = "flash-sales";
    const items = ref(null);
    const { listItems, addToCart, addToWishList, fetchData } = useFetch();
    setTimeout(async () => {
      await fetchData(this.nameList);

      items.value = listItems.value;
    }, 500);

    return {
      items,
      showAddCart: false,
      days: "01",
      hours: "23",
      minutes: "19",
      seconds: "31",
      nameList,
      addToCart,
      addToWishList,
      calculatorSales,
      convertMoney,
      emailUser: "",
    };
  },
  async mounted() {
    let targetDate = new Date();
    targetDate.setFullYear(2025, 4, 1);
    targetDate.setHours(0, 0, 0);
    this.updateTime(targetDate);
    setInterval(() => {
      this.updateTime(targetDate);
    }, 1000);

    const user = await User().getCurrentUser();
    this.emailUser = user.email;
  },
  methods: {
    calculatorSales(originalPrice, discount) {
      let discountPercent = discount / 100;
      let priceSaled = originalPrice * discountPercent;
      let resultPrice = originalPrice - priceSaled;
      return convertMoney(resultPrice);
    },
    updateTime(targetDate) {
      const now = new Date();
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
<style lang="css" scoped>
#date > div:not(:last-child)::after {
  content: ":";
  color: #e07575;
  height: 42px;
  font-size: 40px;
  line-height: 48px;
}
</style>
