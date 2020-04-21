<template>

    <li class="single-server">Server #{{id}}</li>

</template>

<script>
export default {
    props: ['id']
}
</script>

<style lang="scss" scoped>
    .single-server {
        background-color: antiquewhite;
    }
</style>