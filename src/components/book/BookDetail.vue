<template>
    <div class="component deet">
        <h3>You may view the Book Details here</h3>
        <p>Many Details</p>
        <p>Book name: <span v-bind:class="{ 'flare': isFlare}">{{ switchName() }}</span></p>
        <p>Released:  <span>{{ pRelDate }}</span></p>
        <div class="reset-buttons">
            <button @click="resetName()">Reset the name</button>
            <button @click="resetFunc()">Reset the name (w/o custom event)</button>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js'
    export default {
        data() {
            return {
                isFlare: false
            }
        },
        props: {
            name1: {
                type: String,
                // required: true, // this prop is required for the component to be used.
                default: 'Math' // 'default' and 'required' are mutually exclusive
            },
            resetFunc: Function, // passed as a prop
            pRelDate: Number
        },
        methods: {
            switchName() {
                return this.name1.split("").reverse().join("");
            },
            resetName() {
                this.name1 = 'Math';
                this.$emit('nameGotReset', this.name1);
                this.isFlare = true,
                setTimeout(() => {
                    this.isFlare = false
                }, 1000)
            }
        },
        created() { // es6 syntax. es5 is: created: function(){...}
            // create a listener that will run all from when the component is created.
            // To listen to events that are emitted:
            eventBus.$on('relDateGotEdited', ( data_relDate) => {
                this.pRelDate = data_relDate;
            });
        }
    }
</script>

<style lang="scss" scoped>
    .deet {
        background-color: lightcoral;
        margin: 1em;
        padding: 1em;
    }
    .reset-buttons {
        display: flex;
        flex-direction: column;
        button {
            margin-bottom: 3px;
        }
    }
</style>
