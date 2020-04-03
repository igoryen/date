<template>
    <div>
        <h1>The Quote Page</h1>
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Quote author</button>
        <button @click="selectedComponent = 'appNew'">New quote</button>
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent">
            <p>Default content</p>
        </component>
        <!-- <app-quote>
            <h2 slot="a">{{ quoteTitle }}</h2>
            <p slot="b">Carpe diem!</p>
            <p>
                <slot name="c">autnor not specified</slot>
            </p>
        </app-quote> -->
        <router-view />
        <hr />
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
import QuoteDetail from "./QuoteDetail.vue";
import QuoteAuthor from "./QuoteAuthor.vue";
import QuoteNew from "./QuoteNew.vue";

export default {
    data: function() {
        return {
            quoteTitle: "My quote today",
            selectedComponent: "appQuote"
        };
    },
    methods: {
        navigateToHome() {
            this.$router.push({ name: "Home" });
        }
    },
    components: {
        appQuote: QuoteDetail,
        appAuthor: QuoteAuthor,
        appNew: QuoteNew
    }
};
</script>

<style lang="scss" scoped>
</style>