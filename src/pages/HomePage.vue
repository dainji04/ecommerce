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
import MenuSlide from "../layouts/components/MenuSlide.vue";
import FlashSale from "../layouts/components/FlashSale.vue";
import BrowseItems from "../layouts/components/BrowseItems.vue";
import BestSelling from "../layouts/components/BestSelling.vue";
import OurProducts from "../layouts/components/OurProducts.vue";
import NewArrival from "../layouts/components/NewArrival.vue";
</script>
