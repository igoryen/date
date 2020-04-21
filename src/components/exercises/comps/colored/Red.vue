<template>
    <div class="comp-red">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .comp-red {
        background-color: lightcoral;
        border: 1px solid red;
        margin: 20px auto;
        padding: 30px;
        text-align: center;
    }
</style>