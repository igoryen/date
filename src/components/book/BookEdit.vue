<template>
    <div class="component edit">
        <h3>You may edit the Book here</h3>
        <p>Edit me!</p>
        <p>Released: {{ pRelDate }}</p>
        <button @click="editAge">Edit age</button>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
    props: ['pRelDate'],
    methods: {
        editAge() {
            this.pRelDate = 1801;
            eventBus.changeRelYear( this.pRelDate );
            // eventBus.$emit('relDateGotEdited', this.pRelDate);
            // this.$emit('relDateGotEdited', this.pRelDate) // replaced by eventBus
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
