<template>
    <div class="component edit">
        <h3>You may edit the Book here</h3>
        <p>Edit me!</p>
        <p>Released: {{ pRelDate }}</p>
        <button @click="editAge">Edit age</button>
    </div>
</template>

<script>
export default {
    props: ['pRelDate'],
    methods: {
        editAge() {
            this.pRelDate = 1801;
            this.$emit('relDateGotEdited', this.pRelDate)
        }
    }
}
</script>

<style lang="scss" scoped>
    .edit {
        background-color: lightgreen;
        margin: 1em;
        padding: 1em;
    }
</style>
