<template>
    <div class="stocks">
        <div>
            <h2>Stock Trader - Stocks</h2>
        </div>
        <div class="stocks-box">
            <app-stock v-for="(stock, idx) in stocks" :key="idx"></app-stock>
        </div>
    </div>
</template>

<script>
import stock from './Stock.vue';
export default {
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110 },
                { id: 2, name: 'IBM', price: 220 },
                { id: 3, name: 'CNN', price: 330 },
                { id: 4, name: 'NBS', price: 440 },
            ]
        }
    },
    components: {
        appStock: stock
    }
}
</script>

<style lang="scss" scoped>
    .stocks-box {
        display: flex;
        flex-wrap: wrap;
    }
</style>