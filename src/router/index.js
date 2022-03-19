import Vue from "vue";
import VueRouter from "vue-router";
import Circuitos from "../views/Circuitos";
import DetalheView from "../views/DetalheView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/bloco/:id",
    name: "bloco",
    component: DetalheView,
  },
  {
    path: "/circuitos",
    name: "Circuitos",
    component: Circuitos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
