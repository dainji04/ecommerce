<template>
  <div
    id="container"
    ref="container-head"
    class="w-full border-b-[1px] bg-white fixed top-0 left-0 right-0 z-20"
  >
    <div
      class="text-sm h-12 w-full bg-black text-white py-3 pr-[136px] pl-[270px] tablet:max-pc:px-14 max-tablet:px-0"
    >
      <div
        class="max-w-[1170px] h-full flex items-center justify-between max-tablet:items-center"
      >
        <div class="flex gap-2 w-[70%]">
          <h2>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h2>
          <router-link class="underline max-tablet:hidden" to="#">
            ShopNow
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="flex items-center justify-between gap-40 mx-auto py-7 max-w-[1170px] max-tablet:gap-0 max-tablet:px-4"
    >
      <div class="menu pc:hidden">
        <div>
          <button @click="toggleMenu()">
            <img src="@/assets/fonts/menu.svg" alt="" />
          </button>
        </div>
      </div>
      <div
        class="flex items-center gap-[188px] max-tablet:gap-6 max-tablet:ml-4"
      >
        <router-link to="/" class="font-bold select-none">
          its'Dainji
        </router-link>
        <nav class="flex gap-12 max-tablet:hidden">
          <router-link class="hover:underline decoration-[#ccc]" to="/">
            Home
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/contact">
            Contact
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/about">
            About
          </router-link>
          <router-link
            class="hover:underline decoration-[#ccc] max-pc:hidden"
            to="/login"
            v-show="!checkLog.login"
          >
            Login
          </router-link>
        </nav>
        <div class="w-10 h-10 hidden max-tablet:block">
          <img class="w-full h-full" src="@/assets/fonts/cart.svg" alt="" />
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="relative flex items-center max-tablet:hidden">
          <input
            ref="search"
            @click="click"
            @input="searchInput()"
            class="bg-[#f5f5f5] rounded-lg border-none outline-none py-3 px-4 pr-16 max-tablet:hidden"
            type="text"
            placeholder="What are you looking for?"
          />
          <img
            v-if="!isSearch"
            class="absolute right-0 mr-3 select-none h-[30px] w-[30px]"
            src="@/assets/fonts/search.svg"
            alt=""
          />
          <img
            @click.stop="
              isSearch = false;
              $refs.search.value = '';
            "
            v-if="isSearch"
            class="absolute right-0 mr-3 select-none h-[25px] w-[25px] opacity-80"
            src="@/assets/fonts/close-circle.svg"
            alt=""
          />
          <div
            v-if="isSearch"
            style="box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.24)"
            class="absolute grid gap-2 top-14 right-0 w-[calc(100%+100px)] h-auto bg-white text-black z-50 rounded-b-md px-3 py-4"
          >
            <template v-for="(item, index) in filtered" :key="i">
              <template v-if="index < 6">
                <router-link
                  :to="{
                    name: 'itemsDetails',
                    params: {
                      id: item._id,
                      nameList: item.type,
                    },
                  }"
                >
                  <div
                    @click="isSearch = false"
                    class="flex justify-between border-b-2 border-[#f5f5f5] py-2 hover:bg-gray-200"
                  >
                    <p>{{ item.name }}</p>
                    <p class="text-primary">{{ convertMoney(item.price) }}</p>
                  </div>
                </router-link>
              </template>
            </template>
            <template v-if="filtered.length == 0">
              <div>
                <p>No result</p>
              </div>
            </template>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/wish-list">
            <img
              class="cursor-pointer max-tablet:hidden"
              src="@/assets/fonts/heart.svg"
              alt=""
            />
          </router-link>
          <router-link to="/cart">
            <img
              class="cursor-pointer max-tablet:hidden"
              src="@/assets/fonts/cart.svg"
              alt=""
            />
          </router-link>
          <div class="flex flex-col relative" v-if="checkLog.login">
            <button @click="toggleSetting">
              <img src="@/assets/fonts/profile.svg" alt="" />
              <ul
                :class="showSetting"
                class="menu-setting w-[230px] absolute right-0 z-10"
              >
                <li>
                  <div>
                    <img src="@/assets/fonts/profile2.svg" alt="" />
                  </div>
                  <p>
                    <router-link to="/user/profile">
                      Manage My Account
                    </router-link>
                  </p>
                </li>
                <li>
                  <div>
                    <img src="@/assets/fonts/grocery.svg" alt="" />
                  </div>
                  <p>My Order</p>
                </li>
                <li>
                  <div>
                    <img src="@/assets/fonts/close-recycle.svg" alt="" />
                  </div>
                  <p>My Cancellations</p>
                </li>
                <li>
                  <div>
                    <img src="@/assets/fonts/star-solid.svg" alt="" />
                  </div>
                  <p>My Reviews</p>
                </li>
                <li class="cursor-pointer" @click="Logout">
                  <div>
                    <img src="@/assets/fonts/logout.svg" alt="" />
                  </div>
                  <p>Logout</p>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button
    class="fixed z-30 bottom-10 right-10 bg-primary text-white rounded-md text-sm w-12 h-12 flex items-center justify-center"
    :class="showScroll"
    @click="toTop"
  >
    <img class="w-8 h-8" src="@/assets/fonts/arrow-up.svg" alt="" />
  </button>

  <div id="menu-modal">
    <div
      :class="isHidden"
      class="fixed top-0 left-0 right-0 bottom-0 p-6 bg-white w-[320px] max-w-[100%] z-20 rounded-tr-3xl rounded-br-3xl shadow-2xl display"
    >
      <div class="mb-4">
        <button>
          <img
            class="w-6 h-6 invert rotate-180"
            src="@/assets/fonts/arrow-right.svg"
            alt=""
            @click="toggleMenu()"
          />
        </button>
      </div>
      <ul class="grid gap-3">
        <li>
          <router-link to="cart" class="flex gap-3 items-center">
            <img src="@/assets/fonts/cart.svg" alt="" />
            <span class="nav-btn__title">Cart</span>
          </router-link>
        </li>
        <li>
          <router-link to="/wish-list" class="flex items-center gap-3">
            <img src="@/assets/fonts/heart.svg" alt="" />
            <span class="nav-btn__title">Favorite</span>
          </router-link>
        </li>
        <li>
          <router-link class="hover:underline decoration-[#ccc]" to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link class="hover:underline decoration-[#ccc]" to="/contact">
            Contact
          </router-link>
        </li>
        <li>
          <router-link class="hover:underline decoration-[#ccc]" to="/about">
            About
          </router-link>
        </li>
        <li>
          <router-link
            class="hover:underline decoration-[#ccc]"
            to="/login"
            v-show="!checkLog.login"
          >
            Login
          </router-link>
        </li>
        <li>
          <router-link
            class="hover:underline decoration-[#ccc]"
            to="/sign-up"
            v-show="!checkLog.login"
          >
            Sign Up
          </router-link>
        </li>
      </ul>
    </div>
    <div
      class="navbar__overlay fixed top-0 left-0 right-0 bottom-0 bg-black opacity-0 invisible z-10"
      @click="toggleMenu()"
    ></div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import { Checklogin } from "../store/login";
import fetchAPI from "@/store/fetchAPI";
import { ref, onMounted, useTemplateRef } from "vue";
import { useRouter } from "vue-router";

import convertMoney from "@/utils/convertMoney";

export default {
  setup() {
    const router = useRouter();
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => alert("Signed out"))
        .catch((err) => alert(err.message));
      checkLog.login = false;
      router.replace("/");
    };
    const checkLog = Checklogin();

    let showScroll = ref("hidden");
    const item = useTemplateRef("container-head");

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let a = 0;
        a = window.scrollY;

        if (a > 50) {
          a = 50;
        }

        if (item) {
          item.value.style.transform = `translate(0, -${a}px)`;
        }

        if (window.scrollY > 50 && window.scrollY < 100) {
          item.value.style.boxShadow =
            "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";
        } else if (window.scrollY > 100) {
          showScroll.value = "block";
        } else {
          showScroll.value = "hidden";
          item.value.style.boxShadow = "none";
        }
      });
    });

    return {
      Logout,
      checkLog,
      showSetting: ref("hidden"),
      isHidden: ref("hiddenMenu"),
      isSearch: ref(false),
      filtered: ref([]),
      time: ref(null),
      showScroll,
      convertMoney,
    };
  },
  methods: {
    toggleSetting() {
      if (this.showSetting == "show") {
        this.showSetting = "hidden";
      } else {
        this.showSetting = "show";
      }
    },
    toggleMenu() {
      if (this.isHidden == "hiddenMenu") {
        this.isHidden = "showMenu";
      } else {
        this.isHidden = "hiddenMenu";
      }
    },
    searchInput() {
      const { listItems, fetchData } = fetchAPI();
      const allProducts = ref(null);

      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      this.searchTimeout = setTimeout(async () => {
        this.filtered = [];

        if (!allProducts.value) {
          await fetchData("all-products");
          allProducts.value = listItems.value;
        }

        if (this.$refs.search.value) {
          allProducts.value.forEach((product) => {
            console.log(product);
            if (
              product.name
                .toLowerCase()
                .includes(this.$refs.search.value.toLowerCase())
            ) {
              this.filtered.push(product);
            }
          });
          this.isSearch = true;
        }
      }, 500);

      if (!this.$refs.search.value) {
        this.isSearch = false;
      }
    },
    click() {
      if (this.$refs.search.value) {
        this.isSearch = true;
      }
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
#container {
  transition: 1s;
}
nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #ccc;
}
.hiddenMenu {
  translate: -100%;
  opacity: 0;
  transition: all 0.3s ease;
}
.showMenu {
  transition: all 0.3s ease-in-out;
}
.navbar__overlay {
  transition: opacity, visibility;
  transition-duration: 0.5s;
}
.showMenu ~ .navbar__overlay {
  opacity: 0.3;
  visibility: visible;
}
.hidden {
  display: none;
}
.show {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.menu-setting {
  border-radius: 4px;
  backdrop-filter: blur(75px);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 18px 12px 10px 20px;
}
.menu-setting > li {
  display: flex;
  align-items: center;
  gap: 16px;
}
/* .menu-setting > li > div > img {
  filter: invert(1);
} */
.menu-setting > li:hover > p {
  color: blue;
}
.menu-setting > li > p {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #fff;
}
.menu-setting > li > div {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
