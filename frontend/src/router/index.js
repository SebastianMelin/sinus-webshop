import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/myaccount",
        name: "MyAccount",
        component: () =>
            import ("../views/MyAccount.vue"),
    },
    {
        path: "/basket",
        name: "Basket",
        component: () =>
            import ("../views/Basket.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next("/");
    } else {
        next();
    }
});
export default router;