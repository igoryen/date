<template>
    <div class="env-var">
        <strong>Environment Variables</strong>
        <p><a :href=iyurl>igoryen</a></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iyurl: process.env.VUE_APP_URL
        }
    }
}
</script>

<style>

</style>