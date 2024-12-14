<template>
  <div
    class="max-w-[1170px] mx-auto block tablet:max-pc:max-w-[900px] tablet:max-pc:overflow-x-hidden"
  >
    <MenuSlide />
    <FlashSale />
    <BrowseItems />
    <!-- <BestSelling /> -->
    <Phones />
    <!-- <OurProducts /> -->
    <Laptop />
    <NewArrival />
  </div>
</template>

<script>
import MenuSlide from "../components/MenuSlide.vue";
import Phones from "@/components/Phones.vue";
import FlashSale from "../components/FlashSale.vue";
import BestSelling from "../components/BestSelling.vue";
import OurProducts from "../components/OurProducts.vue";
import Laptop from "@/components/laptop.vue";
import NewArrival from "../components/NewArrival.vue";
import BrowseItems from "../components/BrowseItem.vue";

import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app";

export default {
  components: {
    MenuSlide,
    FlashSale,
    Phones,
    // BestSelling,
    // OurProducts,
    Laptop,
    NewArrival,
    BrowseItems,
  },
  setup() {
    const name = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.displayName;
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => alert("Signed out"))
        .catch((err) => alert(err.message));
    };

    return {
      Logout,
      name,
    };
  },
};
</script>
<style>
.item .items-product {
  transform: scale(1);
  transition: 0.5s;
}
.item:hover .items-product {
  transform: scale(1.1);
}
</style>
