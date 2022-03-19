import Vue from "vue";
import VueRouter from "vue-router";
// import Inicio from "../views/Inicio.vue";
import Circuitos from "../views/Circuitos";
import DetalheView from "../views/DetalheView";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Inicio",
  //   component: Inicio,
  // },
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
  routes,
});

export default router;
