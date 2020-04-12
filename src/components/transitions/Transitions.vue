<template>
    <div class="trans">
        <h1>Transitions</h1>
        <h1></h1>
        <button @click="show = !show">Show an alert()</button>
        <br><br>
        <transition name="fade">
            <div v-if="show">fading alert</div>
        </transition>
        <transition name="slide">
            <div v-if="show">sliding alert</div>
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
    .slide {
        &-enter {
            &-active {
                animation: slide-in 1s ease-out forwards;
            }
        }
        &-leave {
            &-active {
                animation: slide-out 1s ease-out forwards;
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