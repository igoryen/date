<template>
    <div class="list">
        <h2>List</h2>
        <hr>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index"> {{ fruit }}</li>
        </ul>
        <hr>
    </div>
</template>
<script>
import { fruitMixin } from './fruitMixin';
export default {
    mixins: [ fruitMixin ],
    created() {
        console.log( 'List.vue, created' );
    }
}
</script>
<style lang="scss" scoped>

</style>