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
    data() {
        return {
            stocks: [
                { id: 1, nom: 'BMW', px: 110 },
                { id: 2, nom: 'IBM', px: 220 },
                { id: 3, nom: 'CNN', px: 330 },
                { id: 4, nom: 'NBS', px: 440 },
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