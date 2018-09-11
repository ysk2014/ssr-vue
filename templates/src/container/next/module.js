/**
 * vuex module
 */
// fake data api
import next from "./api";

// initial state
const state = {
    items: []
};

// actions
const actions = {
    async fetch({ commit }) {
        try {
            const items = await next.getData();
            return commit("setState", items);
        } catch (err) {
            return Promise.reject(err);
        }
    }
};

// mutations
const mutations = {
    setState(state, rs) {
        state.items = rs;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
