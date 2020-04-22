<template>
    <div class="panel-b">
        <strong>Panel B</strong>
        <button @click="startProgress">Start progress</button>
        <span :class="['progress-bar']" :style="progressBar"></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progressBar: {
                width: "0px",
                backgroundColor: "red"
            }
        };
    },
    methods: {
        startProgress: function() {
            var vm = this;
            var width = 0;
            setInterval(function() {
                width = width + 100 - width / 4;
                vm.progressBar.width = width + "px";
            }, 500);
        }
    }
};
</script>

<style>
</style>