<template>
    <div class="portfolio">
        <div>
            <h2>Stock Trader - Portfolio</h2>
            <app-stock
                v-for="(stock, idx) in stocks"
                :key="idx"
                :stock="stock"
            ></app-stock>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import stk from './Stock.vue';
export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
        appStock: stk
    }
}
</script>

<style>

</style>