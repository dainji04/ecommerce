<template>
  <div class="mt-20">
    <div class="flash-sales w-full flex flex-col relative">
      <div class="w-full">
        <div class="w-full flex items-end justify-between">
          <div class="flex items-end gap-[87px]">
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <h2 class="text-base font-semibold leading-5">
                  Wishlist ({{ length }})
                </h2>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <!-- @click="moveAllToBag()" -->
            <button
              class="py-4 px-12 font-medium rounded-md border border-[#d4d4d4] hover:bg-primary hover:text-white"
            >
              Move All To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[60px]">
      <div class="grid grid-cols-4 max-tablet:grid-cols-2 gap-8">
        <template v-if="items">
          <div
            class="flex flex-col gap-4 w-full cursor-pointer"
            v-for="item in items"
            :key="item._id"
          >
            <router-link
              :to="{
                name: 'itemsDetails',
                params: { id: item.productId, nameList: item.productType },
              }"
            >
              <div
                class="item w-full h-[250px] bg-grayScale rounded-md overflow-hidden outline-none border-none flex items-center justify-center relative"
              >
                <img
                  class="items-product p-[14px]"
                  :src="item.productImage"
                  alt=""
                />
                <div
                  class="absolute w-12 h-12 top-3 right-3 flex flex-col justify-center gap-2"
                >
                  <button
                    class="group w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-red-500 transition-all duration-200 ease-in-out active:scale-95"
                    @click.stop.prevent="handleDelete(item._id)"
                  >
                    <svg
                      class="w-4 h-4 fill-gray-600 transition-all duration-200 ease-in-out group-hover:fill-white group-hover:scale-110"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  class="add-to-cart absolute bottom-0 left-50% w-full py-2 flex items-center justify-center bg-black"
                >
                  <a
                    @click.stop.prevent="handleAddToCart(item)"
                    class="text-white w-full flex justify-center items-center hover:text-red-400"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="font-semibold">{{ item.productName }}</h2>
                <div class="flex items-center gap-3">
                  <p class="text-primary font-semibold">
                    ${{ convertMoney(item.productPrice) }}
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </template>
        <template v-else>
          <div class="flex flex-col gap-4 w-full cursor-pointer">
            <div
              class="item w-full h-[250px] bg-grayScale rounded-md overflow-hidden outline-none border-none flex items-center justify-center relative"
            >
              <img
                class="items-product p-[14px]"
                src="@/assets/fonts/empty.svg"
                alt=""
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <contextHolder />
</template>

<script setup>
import { notification } from "ant-design-vue";
import useFetch from "@/store/fetchAPI";
import User from "@/store/getUser";
import { ref, onMounted } from "vue";
import convertMoney from "@/utils/convertMoney";

const user = ref("");
const length = ref(0);
const items = ref(null);
const emailUser = ref("");
const { listItems, fetchData, deleteData, addToCart } = useFetch();

const refreshItems = async () => {
  const email = user.value.email;
  await fetchData(`user/auth/${email}/wishlist`);
  items.value = listItems.value;
  length.value = items.value.length;
};

const handleDelete = async (itemId) => {
  const endPoint = `user/auth/${emailUser.value}/wishlist/${itemId}`;
  await deleteData(endPoint);
  await refreshItems();
};

const handleAddToCart = async (item) => {
  const data = {
    _id: item.productId,
    name: item.productName,
    price: item.productPrice,
  };
  await addToCart(data, emailUser.value);
  open("cart");
};

onMounted(async () => {
  user.value = await User().getCurrentUser();
  emailUser.value = user.value.email;
  await refreshItems();
});

const [api, contextHolder] = notification.useNotification();
const open = (placement) => openNotification(placement);
const openNotification = (placement) => {
  api.success({
    message: `Added success`,
    description: `click ${placement} to view item`,
  });
};
</script>
