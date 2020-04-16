<template>
    <div class="user">
        <h1>The User Page</h1>
        <router-view />
        <hr />
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({ name: "Home" });
            // $router is provided by the router package.
            // .push() as in 'push this route on the stack of existing routes
            // so that the < and > buttons in the browser will work
            // because the old route will be saved as well
        }
    }
};
</script>
<style lang="scss">
    .user {
        padding: 5px;
        background-color: lightcyan;
        box-shadow: 1px 1px 1px #000;
        padding: 1em;
    }
</style>