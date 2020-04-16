<template>
    <div class="stock">
        <h4>NAME <small>(Price: PRICE)</small></h4>
        <div class="body">
            <input type="number" placeholder="quantity">
            <button>Buy</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    h4 {
        background-color: rgb(212, 255, 241);
        margin: 0;
    }
    .stock { 
        border-radius: 3px; 
        border: 1px solid aquamarine;
        margin: 0.5em;
        padding: 0.1em;
        width: 25%;
    }
    .body {
        display: flex;
        justify-content: space-between;
        padding: 3px;
        input {
            max-width: 5em;
        }
    }
</style>