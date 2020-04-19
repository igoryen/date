<template>
    <div class="trader">
        <div>
            <h2>Stock trader - Home</h2>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('initStocks');
    }
}
</script>

<style>

</style>