<template>
    <div class="trans">
        <h1>Transitions</h1>
        <h1></h1>
        <button @click="show = !show">Show an alert()</button>
        <br><br>
        <transition name="fade">
            <div v-if="show">some alert</div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .fade {
        &-enter {
            opacity: 0;
            &-active {
                transition: opacity 1s;
            }
        }
        &-leave {
            &-active {
                transition: opacity 1s;
                opacity: 0;
            }
        }
    }
</style>