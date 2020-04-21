<template>
    <div class="ex-fm">
        <strong>Filters and Mixins</strong>
        <p>redrum desserts live stink sports larger pupils raw smart pals guns lived dog straw time deliver star spoons</p>
        <p>{{ 'redrum desserts live stink sports larger pupils raw smart pals guns lived dog straw time deliver star spoons' | reverse }}</p>
        <p>{{ 'igoryen' | calculateLength }}</p>
        <p>{{text1}}</p>
        <p>{{ flip }}</p>
        <p>{{ calcLen}}</p>
    </div>
</template>

<script>
import { calcLen } from './calcLenMixin';
export default {
    mixins: [calcLen],
    data() {
        return {
            text1: 'leon gateman diaper looter deeps peels swap',
            text2: 'Honorificabilitudinitatibus'
        }
    },
    filters: {
        reverse(val) {
            return val.split("").reverse().join("");
        }
    },
    computed: {
        flip() {
            return this.text1.split("").reverse().join("");
        }
    }
}

</script>

<style lang="scss" scoped>
.ex-fn {
    background-color: lemonchiffon;
}

</style>