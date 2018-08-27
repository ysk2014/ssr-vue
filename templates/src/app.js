/**
 * 客户端(entry-client)、服务端(entry-server)公用文件
 */
import "babel-polyfill";

import Vue from "vue";
import App from "./App.vue";
import { createStore } from "./store";
import { createRouter } from "./router";
import { sync } from "vuex-router-sync";

import ProgressBar from "./component/progressbar.vue";
const bar = (Vue.prototype.$bar = new Vue(ProgressBar).$mount());

export default {
    el: "#app",

    data(ssrContext) {
        // create store and router instances
        const store = createStore();
        const router = createRouter();

        // sync the router with the vuex store.
        // this registers `store.state.route`
        sync(store, router);

        // create the app instance.
        // here we inject the router, store and ssr context to all child components,
        // making them available everywhere as `this.$router` and `this.$store`.
        const app = new Vue({
            router,
            store,
            render: h => h(App)
        });

        if (!Vue.prototype.$isServer) {
            document.body.appendChild(bar.$el);
        }

        // expose the app, the router and the store.
        // note we are not mounting the app here, since bootstrapping will be
        // different depending on whether we are in a browser or on the server.
        return { app, router, store };
    },

    methods: {
        asyncDataBefore() {
            bar.start();
        },

        asyncDataComplete() {
            bar.finish();
        }
    }
};
