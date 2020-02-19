<template>
    <div>
        <h1>The User Page</h1>
        <hr />
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
export default {
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