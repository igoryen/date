<template>
    <div class="filmix">
        <h1>Filters & Mixins</h1>
        <hr>
        <button @click="fruits.push('Berries')">Add new item</button>
        <div>
            <input type="text" v-model="filterText">
        </div>
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index"> {{ fruit }}</li>
        </ul>
        <hr>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <app-list></app-list>
    </div>
</template>
<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin';
export default {
    mixins: [fruitMixin],
    data() {
        return {
            text: "Hello there!"
        }
    },
    filters: {
        // 'to-uppercase'() // also possible
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    components: {
        appList: List
    }
}
</script>
<style lang="scss" scoped>

</style>