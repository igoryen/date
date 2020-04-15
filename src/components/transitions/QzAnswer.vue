<template>
    <div class="answer">
        <h1>Correct!</h1>
        <div>
            <button @click="nxtq">Next question</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        nxtq() {
            this.$emit('confirmed');
        }
    }
}
</script>

<style>
    .answer {
        background-color: lightgreen;
        margin: auto;
        max-width: 200px;
        padding: 1em;
    }
</style>