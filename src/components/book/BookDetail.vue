<template>
    <div class="component deet">
        <h3>You may view the Book Details here</h3>
        <p>Many Details</p>
        <p>Book name: {{ name1 }}</p>
    </div>
</template>

<script>
    export default {
        props: ['name1']
    }
</script>

<style lang="scss" scoped>
    .deet {
        background-color: lightcoral;
        margin: 1em;
        padding: 1em;
    }
</style>
