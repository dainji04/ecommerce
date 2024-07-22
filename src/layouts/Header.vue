<template>
  <div>
    <div
      class="text-sm flex gap-[200px] h-12 w-full bg-black text-white py-3 pr-[136px] pl-[270px] items-center"
    >
      <div class="flex gap-2">
        <h2>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h2>
        <router-link class="underline" to="#">ShopNow</router-link>
      </div>
      <div
        @click="toggleLanguages"
        class="flex flex-col gap-1 cursor-pointer relative"
      >
        <div class="flex justify-center items-center pl-3">
          <h2>{{ recentLanguage }}</h2>
          <img src="@/assets/fonts/down-arrow.svg" alt="" />
        </div>
        <div
          v-show="showSelectLangs"
          class="absolute bg-black mt-6 rounded-md text-left py-3 px-4 z-10"
        >
          <h2 @click="succesLang('English')" class="hover:text-gray-400">
            English
          </h2>
          <h2 @click="succesLang('Vietnamese')" class="hover:text-gray-400">
            Vietnamese
          </h2>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-40 mx-auto mt-10 mb-4 max-w-[1170px]">
      <div class="flex items-center gap-[188px]">
        <router-link to="/" class="font-bold select-none">
          its'Dainji
        </router-link>
        <nav class="flex gap-12">
          <router-link class="hover:underline decoration-[#ccc]" to="/">
            Home
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/abc">
            Contact
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/xyz">
            About
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/login">
            Login
          </router-link>
        </nav>
      </div>
      <div class="flex items-center gap-6">
        <div class="relative flex items-center">
          <input
            class="bg-[#f5f5f5] rounded-lg border-none outline-none py-3 px-4 pr-16"
            type="text"
            placeholder="What are you looking for?"
          />
          <img
            class="absolute right-0 mr-3 select-none"
            src="@/assets/fonts/search.svg"
            alt=""
          />
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/wish-list">
            <img class="cursor-pointer" src="@/assets/fonts/heart.svg" alt="" />
          </router-link>
          <router-link to="/cart">
            <img class="cursor-pointer" src="@/assets/fonts/cart.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <span
    class="w-full flex h-[0.5px] justify-center items-center flex-shrink-0 bg-black opacity-30"
  ></span>
</template>
<script>
export default {
  data() {
    const recentLanguage = "English";
    return {
      recentLanguage,
      showSelectLangs: false,
    };
  },
  methods: {
    toggleLanguages() {
      this.showSelectLangs = !this.showSelectLangs;
    },
    succesLang(lang) {
      alert("select language succes: " + lang);
    },
  },
};
</script>
<style scoped>
nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #ccc;
}
</style>
