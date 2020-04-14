<template>
    <div class="trans">
        <h1>Transitions</h1>
        <h1></h1>
        <button @click="show = !show">Show an alert()</button>
        <br><br>
        <transition name="fade">
            <div v-if="show">fading alert</div>
        </transition>
        <transition name="slide" type="animation">
            <div v-show="show">sliding alert</div>
        </transition>
        <transition name="fade" appear>
            <div v-if="show" class="appr">sliding alert 2</div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .appr {
        background-color: aquamarine;
        padding: 1em;
    }
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
    .slide {
        &-enter {
            opacity: 0;
            &-active {
                animation: slide-in 1s ease-out forwards;
                transition: opacity 0.5s;
            }
        }
        &-leave {
            &-active {
                animation: slide-out 1s ease-out forwards;
                transition: opacity 3s;
                opacity: 0;
            }
        }
    }

    @keyframes slide-in {
        from{
            transform: translateY( 20px );
        }
        to {
            transform: translateY( 0 );
        }
    }
    @keyframes slide-out {
        from{
            transform: translateY( 0 );
        }
        to {
            transform: translateY( 20px );
        }
    }
</style>