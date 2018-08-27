import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: () => import("../container/home/index.vue")
    },
    {
        path: "/next",
        component: () => import("../container/next/index.vue")
    }
];

export function createRouter() {
    return new Router({
        mode: "history",
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: routes
    });
}
