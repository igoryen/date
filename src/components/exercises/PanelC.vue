<template>
    <div class="panel-c">
        <strong>Panel C</strong>
        <button @click="startEffect">Start Effect</button>
        <span :class="ecl" id="effect"></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ecl: {
                // ecl = effect classes
                hlt: false, // hlt = highlight
                shr: true // shr = shrink
            }
        };
    },
    methods: {
        startEffect: function() {
            var vm = this;
            setInterval(function() {
                vm.ecl.hlt = !vm.ecl.hlt;
                vm.ecl.shr = !vm.ecl.shr;
            }, 1000);
        }
    }
};
</script>

<style>
</style>