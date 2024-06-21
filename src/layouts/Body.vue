<template>
  <div class="max-w-[1170px] mx-auto block">
    <MenuSlide />
    <FlashSale />
    <BrowseItems />
    <BestSelling />
    <OurProducts />
    <NewArrival />
  </div>
</template>
<script setup>
import MenuSlide from "./components/MenuSlide.vue";
import FlashSale from "./components/FlashSale.vue";
import BrowseItems from "./components/BrowseItems.vue";
import BestSelling from "./components/BestSelling.vue";
import OurProducts from "./components/OurProducts.vue";
import NewArrival from "./components/NewArrival.vue";
</script>
