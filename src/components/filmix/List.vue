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
export default {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: '',
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
.list {
    background-color: bisque;
    margin: 1em;
    border: 1px solid;
    ul {
        padding: 0;
        li {
            list-style: none;
        }
    }
}
</style>