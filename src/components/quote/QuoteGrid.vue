<template>
    <div class="q-r">
        <app-qwt
            v-for="(qwt, index) in qwts" :key="index"
            @click.native="deleteQwt(index)"
            >{{ qwt }}</app-qwt>
    </div>

</template>

<script>
import Qwt from './Qwt.vue';
export default {
    props: ['qwts'],
    components: {
        appQwt: Qwt
    },
    methods: {
        deleteQwt(index) {
            this.$emit('qwtDeleted', index);
        }
    }
}
</script>

<style lang="scss">

</style>