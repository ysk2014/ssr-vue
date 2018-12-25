<template>
    <div class="next-view">
        <h1>This is the next page</h1>

        <div>Data: </div>
        <ul>
            <li v-for="(item, index) in items" :key="index"> </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    asyncData({ store, route, context }) {
        return store.dispatch("next/fetch", context);
    },

    computed: {
        ...mapState("next", {
            items: (state) => state.items
        })
    },

    created() {},

    mounted() {}
};
</script>

<style scoped>
img {
    display: block;
}
</style>
