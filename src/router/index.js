import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
<<<<<<< HEAD
import DetalheView from "../views/DetalheView.vue";

=======
import Entrar from "../views/Entrar.vue";
>>>>>>> main
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
<<<<<<< HEAD
    path: "/:id",
    name: "bloco",
    component: DetalheView,
=======
    path: "/entrar",
    name: "entrar",
    component: Entrar,
>>>>>>> main
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
