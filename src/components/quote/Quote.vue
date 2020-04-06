<template>
    <div>
        <h1>The Quote Page</h1>
        <hr>
        <div class="q-01">
            <app-new-qwt @quoteAdded="newQwt"></app-new-qwt>
            <app-quote-grid :qwts="qwts" @qwtDeleted="deleteQwt"></app-quote-grid>
            <div class="q-info">
                <span>Click on a quote to delete it.</span>
            </div>
        </div>
        <hr>
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Quote author</button>
        <button @click="selectedComponent = 'appNew'">New quote</button>
        <p>{{ selectedComponent }}</p>
        <keep-alive>
            <component :is="selectedComponent">
                <p>Default content</p>
            </component>
        </keep-alive>
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

import QuoteGrid from "./QuoteGrid.vue";
import NewQwt from "./NewQwt.vue";

//--------
import QuoteDetail from "./QuoteDetail.vue";
import QuoteAuthor from "./QuoteAuthor.vue";
import QuoteNew from "./QuoteNew.vue";

export default {
    data: function() {
        return {
            qwts: [
                'Carpe diem!'
            ],
            maxQwts: 10,
            //-----------------------------
            quoteTitle: "My quote today",
            selectedComponent: "appQuote"
        };
    },
    methods: {
        newQwt( qwt ) {
            this.qwts.push(qwt)
        },
        deleteQwt( index ) {
            this.qwts.splice(index, 1);
        },
        //----
        navigateToHome() {
            this.$router.push({ name: "Home" });
        }
    },
    components: {
        appQuoteGrid: QuoteGrid,
        appNewQwt: NewQwt,
        //-------------
        appQuote: QuoteDetail,
        appAuthor: QuoteAuthor,
        appNew: QuoteNew
    }
};
</script>

<style lang="scss" scoped>
   .q-info {
       background-color: aquamarine;
   }
</style>