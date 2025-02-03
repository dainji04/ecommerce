<template>
  <div id="products" class="flex flex-col gap-8 my-14 mx-3">
    <nav class="navbar w-full flex">
      <ul class="flex justify-center items-center gap-8">
        <li
          :class="{ active: nameList == 'new-arrival' }"
          @click="(nameList = 'new-arrival'), app()"
        >
          New Arrival
        </li>
        <li
          :class="{ active: nameList == 'best-sells' }"
          @click="(nameList = 'best-sells'), app()"
        >
          Best Seller
        </li>
      </ul>
    </nav>
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
          <div
            class="flex flex-col gap-2 max-tablet:items-center max-tablet:text-center"
          >
            <h2 class="font-semibold">{{ item.name }}</h2>
            <div class="flex items-center gap-3">
              <p class="text-primary font-semibold">
                {{ calculatorSales(item.price, item.discount) }}
              </p>
            </div>
            <p class="opacity-50 font-semibold line-through">
              {{ convertMoney(item.price) }}
            </p>
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
      <template v-if="!items.length">
        <div>
          <p class="text-primary">Loading...</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import convertMoney from "@/utils/convertMoney";
import calculatorSales from "@/utils/calculatorDiscount";
import useFetch from "@/store/fetchAPI";
import { ref, onMounted } from "vue";

const items = ref([]);
const nameList = ref("best-sells");
const { listItems, addToCart, addToWishList, fetchData } = useFetch();

const app = async () => {
  console.log(nameList.value);
  items.value = [];
  listItems.value = [];
  await fetchData(nameList.value);
  items.value = listItems.value;
};
onMounted(async () => {
  app();
});
</script>

<style scoped>
.navbar > ul > li {
  padding-bottom: 10px;
}
.active {
  border-bottom: 2px solid #000;
}
</style>
