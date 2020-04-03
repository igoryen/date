<template>
    <div>
        <h1>The Quote Page</h1>
        <app-quote quote="A wonderful quote!!!"></app-quote>
        <router-view />

        <hr />
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
import QuoteDetail from "./QuoteDetail.vue";
export default {
    methods: {
        navigateToHome() {
            this.$router.push({ name: "Home" });
        }
    },
    components: {
        appQuote: QuoteDetail
    }
};
</script>

<style lang="scss" scoped>
</style>