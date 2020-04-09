export const fruitMixin = {
    data() {
        return {
            fruits: ['Adam', 'Bob', 'Peter', 'James'],
            filterText: '',
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    created() {
        console.log( 'fruitMixin is created' );
    }
}