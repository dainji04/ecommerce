<template>
  <div v-if="items" class="mt-8 max-w-[1170px] mx-auto">
    <div id="road-map" class="flex items-center gap-3 my-20">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Catalog</a-breadcrumb-item>
        <a-breadcrumb-item>{{ nameList }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div
      class="grid grid-cols-4 gap-8 max-tablet:grid-cols-2 max-tablet:mx-2 max-tablet:gap-4"
    >
      <template
        class="flex flex-col gap-4 w-[270px] cursor-pointer max-pc:w-[100%]"
        v-for="item in perItems"
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
      <template v-if="!perItems.length">
        <div>Don't have any items</div>
      </template>
    </div>
    <div id="panigate" class="mt-16">
      <nav>
        <ul class="flex justify-center items-center gap-2">
          <li
            class="page-item"
            @click="currentPage--, calItemsPages(currentPage)"
          >
            <
          </li>
          <li
            class="page-item"
            :class="{ active: index == currentPage }"
            @click="(currentPage = index), calItemsPages()"
            v-for="index in totalPages"
          >
            {{ index }}
          </li>
          <li class="page-item" @click="currentPage++, calItemsPages()">></li>
        </ul>
      </nav>
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
import { ref } from "vue";

import User from "@/store/getUser";

export default {
  components: { SkeletonLoading },
  props: ["nameList"],
  data() {
    const { listItems, addToCart, addToWishList, fetchData } = useFetch();
    const items = ref(null);

    const currentPage = ref(1);
    const perPage = 8;
    const perItems = ref([]);
    const totalPages = ref(0);

    const calItemsPages = () => {
      currentPage.value < 1 || currentPage.value > totalPages.value
        ? (currentPage.value = 1)
        : currentPage.value;

      perItems.value = items.value.slice(
        (currentPage.value - 1) * perPage,
        (currentPage.value - 1) * perPage + perPage
      );
    };

    setTimeout(async () => {
      await fetchData(this.nameList);

      items.value = listItems.value;

      calItemsPages();

      totalPages.value = Math.ceil(items.value.length / perPage);
    }, 500);

    return {
      items,
      addToCart,
      addToWishList,
      convertMoney,
      calculatorSales,
      perItems,
      totalPages,
      calItemsPages,
      currentPage,
      emailUser: "",
    };
  },
  async mounted() {
    const user = await User().getCurrentUser();
    this.emailUser = user.email;
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

.page-item {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #e07575;
  border-radius: 5px;
}
.page-item:hover {
  background-color: #e07575;
  color: white;
}
.page-item.active {
  background-color: #e07575;
  color: white;
}
</style>
