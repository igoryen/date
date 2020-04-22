<template>
    <div class="input-live-update">
        <strong>Input Live Update</strong>
        <input type="text" @input="changeTitle" placeholder="Type to change"/>
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: "Hello World!"
        };
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
};
</script>

<style>
</style>