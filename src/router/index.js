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
