<template>
    <div>
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
            this.$router.push("/");
            // $router is provided by the router package.
            // .push() as in 'push this route on the stack of existing routes
            // so that the < and > buttons in the browser will work
            // because the old route will be saved as well
        }
    }
};
</script>
<style>
ul.list-group {
    border: 1px solid #f2f2f2;
    padding: 0;
}
ul.list-group li {
    border: 1px solid lightblue;
    border-radius: 3px;
    list-style: none;
    margin: 2PX;
}
ul.list-group li:hover {
    background-color: antiquewhite;
}
</style>