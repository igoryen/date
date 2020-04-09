<template>
    <div class="filmix">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: "Hello there!"
        }
    },
    filters: {
        // 'to-uppercase'() // also possible
        toUppercase(value) {
            return value.toUpperCase();
        }
    }
}
</script>
<style lang="sass" scoped>

</style>