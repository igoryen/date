<template>
    <div class="comp-green">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .comp-green {
        background-color: lightgreen;
        border: 1px solid green;
        margin: 20px auto;
        padding: 30px;
        text-align: center;
    }
</style>