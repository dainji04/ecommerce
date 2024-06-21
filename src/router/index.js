import Vue from "vue";
import VueRouter from "vue-router";

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SignUp from "../pages/SignUp.vue";
import Login from "../pages/Login.vue";
import HomeLogin from "../pages/AppLogin.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
