import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SignUp from "../pages/SignUp.vue";
import Login from "../pages/Login.vue";
import HomeLogin from "../pages/AppLogin.vue";
import WishList from "../pages/WishList.vue";
import Cart from "../pages/Cart.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/home/u",
    name: "home-login",
    component: HomeLogin,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/wish-list",
    name: "wish-list",
    component: WishList,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
