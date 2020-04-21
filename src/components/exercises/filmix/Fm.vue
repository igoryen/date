<template>
    <div class="ex-fm">
        <strong>Filters and Mixins</strong>
        <p>redrum desserts live stink sports larger pupils raw smart pals guns lived dog straw time deliver star spoons</p>
        <p>{{ 'redrum desserts live stink sports larger pupils raw smart pals guns lived dog straw time deliver star spoons' | reverse }}</p>
    </div>
</template>

<script>
export default {
    filters: {
        reverse(val) {
            return val.split("").reverse().join("");
        }
    }
}

</script>

<style lang="scss" scoped>
.ex-fn {
    background-color: lemonchiffon;
}

</style>