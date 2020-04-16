<template>
    <div class="stock">
        <h4>{{stock.name}} <small>(Price: {{stock.price}})</small></h4>
        <div class="body">
            <input type="number" placeholder="quantity" v-model="qty">
            <button
                @click="buyStock"
                :disabled="qty <= 0 || !Number.isInteger(0)"
            >Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            qty: 0
        }
    },
    methods: {
        buyStock() {
            const ord = { // ord = order
                stockId: this.stock.id,
                stockPx: this.stock.px, // px = price
                qty: this.qty
            };
            console.log(ord);
            this.qty = 0;
        }
    }
}
</script>

<style lang="scss" scoped>
    h4 {
        background-color: rgb(212, 255, 241);
        margin: 0;
    }
    .stock { 
        border-radius: 3px; 
        border: 1px solid aquamarine;
        margin: 0.5em;
        padding: 0.1em;
        width: 25%;
    }
    .body {
        display: flex;
        justify-content: space-between;
        padding: 3px;
        input {
            max-width: 5em;
        }
        button {
            &:disabled {
                color: #ccc;
            }
        }
    }
</style>