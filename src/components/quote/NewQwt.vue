<template>
    <div class="row">
        <div class="nw-a">
            <form action>
                <label>Quote</label>
                <textarea name id cols="30" rows="3" v-model="qwt"></textarea>
            </form>
        </div>
        <div class="nw-f">
            <button @click.prevent="createNew">Add Qwt</button>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            qwt: ""
        };
    },
    methods: {
        createNew() {
            this.$emit("quoteAdded", this.qwt);
            this.qwt = ""; // reset after sending so the form gets cleared
        }
    }
};
</script>

<style lang="scss">

</style>