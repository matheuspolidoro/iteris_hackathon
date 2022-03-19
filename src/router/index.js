import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetalheView from "../views/DetalheView.vue";

import Entrar from "../views/Entrar.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/bloco/:id",
    name: "bloco",
    component: DetalheView,
  },
  {
    path: "/entrar",
    name: "entrar",
    component: Entrar,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
