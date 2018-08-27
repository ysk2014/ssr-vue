import Vue from "vue";
import Vuex from "vuex";
import next from "@/container/next/module";

Vue.use(Vuex);

const modules = {
    next
};

export function createStore() {
    return new Vuex.Store({
        state: {},
        modules: modules
    });
}
