<template>
    <div class="home-view">
        <h1>Hello world</h1>
        <img src='@/assets/img/dog.png'>

        <router-link to="/next" exact>
            Next page
        </router-link>
    </div>
</template>

<script>
export default {
    created() {},

    mounted() {}
};
</script>

<style scoped>
img {
    display: block;
}
</style>
