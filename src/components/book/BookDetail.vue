<template>
    <div class="component deet">
        <h3>You may view the Book Details here</h3>
        <p>Many Details</p>
        <p>Book name: {{ switchName() }}</p>
        <button @click="resetName()">Reset the name</button>
    </div>
</template>

<script>
    export default {
        props: {
            name1: {
                type: String,
                // required: true, // this prop is required for the component to be used.
                default: 'Math' // 'default' and 'required' are mutually exclusive
            }
            // name1: String // prop type. Also possible: [String, Array]
        },
        methods: {
            switchName() {
                return this.name1.split("").reverse().join("");
            },
            resetName() {
                this.name1 = 'Max';
                this.$emit('nameGotReset', this.name1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .deet {
        background-color: lightcoral;
        margin: 1em;
        padding: 1em;
    }
</style>
