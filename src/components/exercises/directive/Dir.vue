<template>
    <div class="ex-dir">
        <strong>Directive</strong>
        <button v-customOn:click="clicked">Click me</button>
    </div>
</template>

<script>
export default {
    directives: {
        customOn: {
            bind( el, binding ) {
                const type = binding.arg;
                const fn = binding.value;
                el.addEventListener(type, fn);
                // el.onclick = () => {
                //     binding.value();
                // }
            }
        }
    },
    methods: {
        clicked() {
            alert('I was clicked')
        }
    }
}

</script>

<style lang="scss" scoped>

</style>