<template>
    <div class="stock">
        <h4>{{stock.nom}} <small>(Px: {{stock.px}} | Qty: {{ stock.qty }})</small></h4>
        <div class="body">
            <input type="number" placeholder="quantity" v-model="qty" :class="{danger: insufQty}">
            <button
                @click="sellStock"
                :disabled="insufQty || qty <= 0 || !Number.isInteger(0)"
            >{{ insufQty ? 'Insuf stocks' : 'Sell'}}</button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'; // #3
export default {
    props: ['stock'],
    data() {
        return {
            qty: 0
        }
    },
    computed: {
        insufQty() {
            return this.qty > this.stock.qty;
        }
    },
    methods: {
        ...mapActions({
            placeSellOrd: 'sellStock'
        }),
        sellStock(){
            const ord = {
                stockId: this.stock.id,
                stockPx: this.stock.px,
                qty: this.qty
            };
            this.placeSellOrd(ord);
            this.qty = 0;
        }
    }
}
/*
1. ord = order
2. px = price
3. axn = action
*/
</script>

<style lang="scss" scoped>

</style>