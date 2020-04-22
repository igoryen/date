<template>
    <div class="qwt-header">
        <div class="grow" :style="{width: (qwtCount / maxQwts) * 100 + '%'}">
            {{ qwtCount }} / {{ maxQwts }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['qwtCount', 'maxQwts']
}
</script>

<style lang="scss" scoped>

</style>