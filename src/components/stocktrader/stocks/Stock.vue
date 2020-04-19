<template>
    <div class="stock">
        <h4>{{stock.nom}} <small>(Price: {{stock.px}})</small></h4>
        <div class="body">
            <input type="number" placeholder="quantity" v-model="qty" :class="{danger: insuFunds}">
            <button
                @click="buyStock"
                :disabled="insuFunds || qty <= 0 || !Number.isInteger(0)"
            >{{ insuFunds ? 'Insuf $' : 'Buy'}}</button>
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
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insuFunds() {
            return (this.qty * this.stock.px) > this.funds;
        }
    },
    methods: {
        buyStock() {
            const ord = { // #1
                stockId: this.stock.id,
                stockPx: this.stock.px, // #2
                qty: this.qty
            };
            // console.log(ord);
            this.$store.dispatch('buyStock', ord);
            this.qty = 0;
        }
    },
}
/*
1. ord = order
2. px = price
*/
</script>

<style lang="scss" scoped>
    .danger {
        border: 1px solid red;
        background-color: orange;
    }
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