<template>
    <div class="q-a">
        <div class="panel-body qwt">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    props: ["quotes"],
    data: function() {
        return {
            maxQuotes: 10
        };
    }
};
</script>

<style lang="scss" scoped>

</style>