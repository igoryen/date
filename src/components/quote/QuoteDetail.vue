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


</style>