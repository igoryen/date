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
        console.log('QuoteNew is Destroyed!')
    },
    deactivated() {
        console.log('QuoteNew is Deactivated!')
    },
    activated() {
        console.log('QuoteNew is Activated!')
    }
}
</script>

<style lang="scss" scoped>

</style>