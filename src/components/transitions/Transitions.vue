<template>
    <div class="trans">
        <h1>Transitions</h1>
        <h1></h1>
        <button @click="show = !show">Show an alert()</button>
        <br><br>
        <div v-if="show">some alert</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>

<style>

</style>