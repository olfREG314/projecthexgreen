/** @format */

import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/account",
    name: "AccountPage",
    component: () =>
      import(/* webpackChunkName: "loginPage" */ "../views/AccountPage.vue"),
  },
  {
    path: "/loginComponent",
    name: "LoginComponent",
    component: () =>
      import(
        /* webpackChunkName: "loginPage" */ "../components/LoginComponent.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
