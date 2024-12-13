<template>
  <div v-if="items" class="mt-8 max-w-[1170px] mx-auto">
    <div
      class="grid grid-cols-4 gap-8 max-tablet:grid-cols-2 max-tablet:mx-2 max-tablet:gap-4"
    >
      <template
        class="flex flex-col gap-4 w-[270px] cursor-pointer max-pc:w-[100%]"
        v-for="item in items"
        :key="item._id"
      >
        <router-link
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
              @click.stop.prevent="addToWishList(item, nameList)"
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
                @click.stop.prevent="addToCart(item, nameList)"
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
  </div>
  <div v-else>
    <SkeletonLoading />
  </div>
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
import convertMoney from "../utils/convertMoney";
import calculatorSales from "@/utils/calculatorDiscount";

import SkeletonLoading from "@/components/SkeletonLoading.vue";

export default {
  components: { SkeletonLoading },
  props: ["nameList"],
  data() {
    const { listItems, addToCart, addToWishList, fetchData } = useFetch();
    fetchData(this.nameList);

    return {
      items: listItems,
      addToCart,
      addToWishList,
      convertMoney,
      calculatorSales,
    };
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
.add-to-cart {
  display: none;
  animation: showAddToCart 0.3s ease-in;
}
.item:hover .add-to-cart {
  display: flex;
}
.item:hover > img {
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
