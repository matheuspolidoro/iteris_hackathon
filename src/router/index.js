import Vue from "vue";
import VueRouter from "vue-router";
import Entrar from "../views/Entrar.vue";
import InicioView from "../views/InicioView.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/entrar",
        name: "entrar",
        component: Entrar,
    },
    {
        path: "/",
        name: "inicio",
        component: InicioView,
    },
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;