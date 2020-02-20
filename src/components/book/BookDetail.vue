<template>
    <div class="component deet">
        <h3>You may view the Book Details here</h3>
        <p>Many Details</p>
        <p>Book name: {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        props: ['name1'],
        methods: {
            switchName() {
                return this.name1.split("").reverse().join("");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .deet {
        background-color: lightcoral;
        margin: 1em;
        padding: 1em;
    }
</style>
