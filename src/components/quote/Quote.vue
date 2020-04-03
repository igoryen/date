<template>
    <div>
        <h1>The Quote Page</h1>
        <app-quote>
            <h2 slot="a">{{ quoteTitle }}</h2>
            <p  slot="b">Carpe diem!</p>
            <p>
                <slot name="c">autnor not specified</slot>
            </p>
        </app-quote>
        <router-view />
        <hr />
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
import QuoteDetail from "./QuoteDetail.vue";
export default {
    data: function() {
        return {
            quoteTitle: 'My quote today'
        }
    },
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