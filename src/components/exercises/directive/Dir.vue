<template>
    <div class="ex-dir">
        <strong>Directive</strong>
        <button v-customOn:click="clicked">Click me</button>
        <div class="aa"
            v-customOn:mouseenter="ratonEntrado"
            v-customOn:mouseleave="ratonSalido"
            ></div>
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
        },
        ratonEntrado() {
            console.log('El raton ha entrado!')
        },
        ratonSalido() {
            console.log('El raton ha salido!')
        }
    }
}

</script>

<style lang="scss" scoped>


</style>