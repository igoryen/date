<template>
    <div class="stocks">
        <div>
            <h2>Stock Trader - Stocks</h2>
        </div>
        <div class="stocks-box">
            <app-stock
                v-for="(stock, idx) in stocks"
                :key="idx"
                :stock="stock"
            ></app-stock>
        </div>
    </div>
</template>

<script>
import stock from './Stock.vue';
export default {
    components: {
        appStock: stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>

<style lang="scss" scoped>
    .stocks-box {
        display: flex;
        flex-wrap: wrap;
    }
</style>