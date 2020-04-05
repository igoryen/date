<template>
    <div>
        <div class="aaa">
            <slot name="a">slot a</slot>
        </div>
        <div class="aaa">
            <slot name="b">slot b</slot>
        </div>
        <div class="aaa author">
            <!-- no name = default -->
            <slot></slot>
        </div>
    </div>
    
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

.aaa {
    background-color: rgb(208, 238, 238);
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    margin: 30px auto;
    max-width: 300px;
    padding: 30px;
    text-align: center;
}
.author {
    color: blue;
}
h2 {
    color: red;
}
</style>