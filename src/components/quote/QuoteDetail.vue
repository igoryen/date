<template>
    <div>
        <div class="aaa">
            <slot name="a"></slot>
        </div>
        <div class="aaa">
            <slot name="b"></slot>
        </div>
    </div>
    
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

.aaa {
    background-color: aqua;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    margin: 30px auto;
    max-width: 300px;
    padding: 30px;
    text-align: center;
}
h2 {
    color: red;
}
</style>