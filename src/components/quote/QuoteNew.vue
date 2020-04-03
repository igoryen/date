<template>
    <div class="quote-new">
        <h3>this is a new quote</h3>
        <button @click="counter++">Increment!</button>
        <p>{{ counter }}</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            counter: 0
        };
    },
    destroyed() {
        console.log('Destroyed!')
    }
}
</script>

<style lang="scss" scoped>
    .quote-new {
        background-color: azure;
        border: 1px solid #ccc;
        max-width: 500px;
        margin: auto;
    }
</style>