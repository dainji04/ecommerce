<template>
  <div class="max-w-[1170px] mx-auto">
    <div v-if="item" class="max-tablet:px-4">
      <div id="road-map" class="flex items-center gap-3 my-20">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <router-link to="/"> Home </router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>{{ item.name }}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div>
        <div class="flex w-full justify-between max-tablet:flex-col">
          <div
            class="container w-[60%] relative max-tablet:w-full max-tablet:h-[600px] flex justify-center items-center bg-white"
          >
            <div class="list-slide">
              <template v-for="detailImg in item.detailsImg">
                <div class="slide w-[700px] max-tablet:w-[400px]">
                  <img loading="lazy" :src="detailImg" alt="" />
                </div>
              </template>
            </div>
            <div
              class="listBtn absolute flex w-full justify-between items-center text-4xl px-4"
            >
              <button
                @click="prev()"
                class="bg-black text-white w-10 h-10 rounded-full"
              >
                <
              </button>
              <button
                @click="next()"
                class="bg-black text-white w-10 h-10 rounded-full"
              >
                >
              </button>
            </div>
            <div
              class="absolute bottom-3 w-full h-14 left-0 flex justify-center items-center gap-4"
            >
              <template v-for="(detailImg, index) in item.detailsImg">
                <div>
                  <img
                    @click="reloadSlide(index)"
                    loading="lazy"
                    class="w-14 h-14 bg-white cursor-pointer border-[1px] border-solid border-[rgba(0,0,0,0.1)] object-contain"
                    :src="detailImg"
                    alt=""
                  />
                </div>
              </template>
            </div>
          </div>
          <div class="w-[35%] max-tablet:w-full">
            <div class="flex flex-col gap-4 mb-10">
              <div class="flex flex-col gap-4">
                <h1 class="text-2xl font-semibold">
                  {{ item.name }}
                </h1>
                <div>
                  <p v-if="item.stock != 0" class="text-[#0F6]">In Stock</p>
                  <p v-else>out of stock</p>
                </div>
                <div class="flex items-center gap-4">
                  <p class="text-2xl" v-if="item.discount">
                    {{ calculatorSales(item.price, item.discount) }}
                  </p>
                  <p v-else class="text-2xl">${{ item.price }}</p>
                  <p
                    v-if="item.discount > 0"
                    class="opacity-50 font-semibold line-through"
                  >
                    {{ convertMoney(item.price) }}
                  </p>
                </div>
              </div>
              <div>
                <p class="text-justify font-[arial]">
                  {{ item.description }}
                </p>
              </div>
              <span class="border-b border-solid border-black w-full"></span>
              <div class="flex items-center gap-1" v-if="item.colors">
                <label for="colors">colours: </label>
                <button
                  class="btn font-[arial] px-1 h-8 border border-solid border-[#ccc] rounded"
                  v-for="color in item.colors"
                  :key="color"
                  :class="{ active: selectedColor === color }"
                  @click="selectColor(color)"
                >
                  {{ color }}
                </button>
              </div>
              <div v-if="item.ram" class="flex items-center text-base">
                <p class="mr-6 text-base">RAM:</p>
                <button
                  class="btn w-fit px-1 h-full border border-solid border-[#ccc] rounded"
                  v-for="ram in item.ram"
                  :key="ram"
                  :class="{ active: selectedRam === ram }"
                  @click="selectRam(ram)"
                >
                  {{ ram }}
                </button>
              </div>
              <div v-if="item.rom" class="flex items-center text-base">
                <p class="mr-6 text-base">ROM:</p>
                <button
                  class="btn w-fit px-1 h-full border border-solid border-[#ccc] rounded"
                  v-for="rom in item.rom"
                  :key="rom"
                  :class="{ active: selectedRom === rom }"
                  @click="selectRom(rom)"
                >
                  {{ rom }}
                </button>
              </div>
              <div class="flex items-center gap-4 mt-2">
                <div class="flex items-center">
                  <div>
                    <button
                      class="btn btn--hover p-[10px] border border-solid border-[#ccc] rounded-l"
                      @click="quantity--"
                    >
                      -
                    </button>
                  </div>
                  <div
                    class="border-y border-[#ccc] p-[10px] w-[78px] flex justify-center"
                  >
                    {{ quantity }}
                  </div>
                  <div>
                    <button
                      class="btn btn--hover p-[10px] border border-solid border-[#ccc] rounded-r"
                      @click="quantity++"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    class="font-medium text-base bg-primary text-white py-[10px] px-12 rounded-md"
                    @click="addToCart(item, nameList)"
                  >
                    Add To Cart
                  </button>
                </div>
                <div class="cursor-pointer">
                  <img
                    loading="lazy"
                    class="w-10 h-10 border-2 border-solid border-[#ccc] rounded-lg"
                    src="@/assets/fonts/heart.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="cursor-pointer flex items-center gap-10 w-full">
                <button
                  class="button--hover w-full font-medium text-base text-white py-[10px] px-12 rounded-md"
                >
                  Buy Now
                </button>
              </div>
              <label class="text-red-600" for="quantity" v-if="quantity < 0"
                >quantity must be greater than 0</label
              >
            </div>
            <div
              class="pl-4 py-6 flex flex-col justify-around border border-solid border-black rounded"
            >
              <div class="flex items-center gap-4">
                <div>
                  <img
                    loading="lazy"
                    class="invert"
                    src="@/assets/fonts/truck.svg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <h1 v-if="item.price > 100">Free Delivery</h1>
                  <p class="underline text-xs font-medium">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <span
                class="my-4 border-b border-solid border-black w-full"
              ></span>
              <div class="flex items-center gap-4">
                <div>
                  <img
                    loading="lazy"
                    class="invert"
                    src="@/assets/fonts/truck.svg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <h1 v-if="item.price > 100">Return Delivery</h1>
                  <p class="underline text-xs font-medium">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- related items -->
      <div class="mt-20">
        <div class="flex items-center gap-4 mb-10">
          <img loading="lazy" src="@/assets/fonts/shape.svg" alt="shape" />
          <h2 class="text-primary text-base font-semibold leading-5">
            Relateđ item
          </h2>
        </div>
        <div
          class="grid grid-cols-4 gap-8 max-tablet:grid-cols-2 max-tablet:mx-2 max-tablet:gap-4"
        >
          <div
            class="flex flex-col gap-4 w-[270px] cursor-pointer max-pc:w-[100%]"
            v-for="(product, index) in relatedItems"
            :key="product.id"
            v-show="index < 4"
          >
            <router-link
              v-if="index < 4"
              :to="{
                name: 'itemsDetails',
                params: { id: product._id, nameList: nameList },
              }"
            >
              <div
                class="item w-full h-[250px] max-tablet:h-[150px] bg-grayScale rounded-md overflow-hidden outline-none border-none flex items-center justify-center relative"
              >
                <div
                  class="absolute top-3 left-3 px-3 py-1 bg-primary rounded-md z-10"
                >
                  <p class="text-white text-xs">-{{ product.discount }}%</p>
                </div>
                <img
                  loading="lazy"
                  class="items-product p-[14px] max-tablet:max-h-[150px]"
                  :src="product.thumbnail"
                  alt=""
                />
                <div
                  class="absolute top-3 right-3 flex flex-col justify-center gap-2"
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
                  <a href="#" class="text-white">Add To Cart</a>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="font-semibold">
                  {{ product.name }}
                </h2>
                <div class="flex items-center gap-3">
                  <p class="text-primary font-semibold">
                    {{ calculatorSales(product.price, product.discount) }}
                  </p>
                  <p class="opacity-50 font-semibold line-through">
                    ${{ product.price }}
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
                  <p class="opacity-50">({{ product.stock }})</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex w-full justify-between">
        <div class="skeleton--loading w-[60%] h-[600px] bg-[#d9d9d9]"></div>
        <div class="w-[35%] h-[600px] flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <div
              class="skeleton--loading w-[200px] h-8 bg-[#d9d9d9] rounded-lg"
            ></div>
            <div
              class="skeleton--loading w-[120px] h-8 bg-[#d9d9d9] rounded-lg"
            ></div>
            <div
              class="skeleton--loading w-[150px] h-8 bg-[#d9d9d9] rounded-lg"
            ></div>
          </div>
          <div>
            <div
              class="skeleton--loading w-[400px] h-20 bg-[#d9d9d9] rounded-lg"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useFetch from "@/store/fetchAPI";
import { ref, watchEffect } from "vue";
import calculatorSales from "@/utils/calculatorDiscount";
import convertMoney from "@/utils/convertMoney";

export default {
  props: ["id", "nameList"],
  data() {
    const { URL, listItems, fetchData, addToCart } = useFetch();
    const interval = ref(null);
    watchEffect(() => {
      this.item;
    });

    return {
      item: null,
      relatedItems: ref(null),
      sizes: ["XS", "S", "M", "L", "XL"],
      quantity: 1,
      convertMoney,
      calculatorSales,
      active: 0,
      addToCart,
      URL,
      listItems,
      fetchData,
      selectedColor: null,
      selectedRam: null,
      selectedRom: null,
    };
  },
  watch: {
    "$route.params": {
      handler(newParams) {
        this.fetchItemDetails(newParams.id);
      },
      immediate: true,
    },
  },
  async mounted() {
    await this.fetchData(this.$route.params.nameList);
    this.relatedItems = this.listItems;

    this.fetchItemDetails(this.$route.params.id);
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    },
    selectRam(ram) {
      this.selectedRam = ram;
    },
    selectCRom(rom) {
      this.selectedRom = rom;
    },
    fetchItemDetails(id) {
      fetch(`${this.URL}${this.nameList}/${id}`)
        .then((res) => res.json())
        .then((data) => (this.item = data))
        .catch((err) => console.log("error: " + err));
    },
    reloadSlide(index) {
      const listItem = document.querySelector(".list-slide");
      const items = document.querySelectorAll(".list-slide .slide");

      listItem.style.left = -items[index].offsetLeft + "px";
      this.active = index;
    },
    next() {
      const items = document.querySelectorAll(".list-slide .slide");
      const lengthItems = items.length - 1;

      clearInterval(this.interval);

      this.active = this.active + 1 <= lengthItems ? this.active + 1 : 0;
      this.reloadSlide(this.active);
    },
    prev() {
      const items = document.querySelectorAll(".list-slide .slide");

      clearInterval(this.interval);

      const lengthItems = items.length - 1;
      this.active = this.active - 1 >= 0 ? this.active - 1 : lengthItems;
      this.reloadSlide(this.active);
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.list-slide {
  position: absolute;
  left: 0px;
  height: 100%;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide {
  position: relative;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn + .btn {
  margin-left: 16px;
}
.btn.active,
.btn--hover:hover {
  background-color: red;
  border: 1px solid red;
  color: white;
}
.add-to-cart {
  display: none;
  animation: showAddToCart 0.3s ease-in;
}
.item:hover .add-to-cart {
  display: flex;
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
