<template>
    <div class="filmix">
        <h1>Filters & Mixins</h1>
        <hr>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index"> {{ fruit }}</li>
        </ul>
        <hr>
        <p>{{ text | toUppercase | to-lowercase }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: '',
            text: "Hello there!"
        }
    },
    filters: {
        // 'to-uppercase'() // also possible
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.filmix {
    ul {
        padding: 0;
        li {
            list-style: none;
        }
    }
}
</style>