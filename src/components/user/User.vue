<template>
    <div>
        <h1>The User Page</h1>
        <p>Loaded user's ID: <span class="loaded-id">{{ id }}</span></p>
        <hr />
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push('/');
            // $router is provided by the router package.
            // .push() as in 'push this route on the stack of existing routes
            // so that the < and > buttons in the browser will work
            // because the old route will be saved as well
        }
    }
};
</script>
<style>
    .loaded-id {
        background-color: blanchedalmond;
        padding: 0 2px;
    }
</style>