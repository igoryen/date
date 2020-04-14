<template>
    <div class="trans">
        <h1>Transitions</h1>
        <h1></h1>
        <button @click="show = !show">Show an alert()</button>
        <br><br>
        <hr>
        <transition :name="alertAnimation" mode="out-in">
            <div key="alpha" v-if="show">Alpha</div>
            <div key="bravo" v-else>Bravo</div>
        </transition>
        <hr>
        <select name="" id="" v-model="alertAnimation">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </select>
        <transition :name="alertAnimation">
            <div v-if="show">alert with selectable transition</div>
        </transition>
        <hr>
        <transition name="fade">
            <div v-if="show">fading alert</div>
        </transition>
        <transition name="slide" type="animation">
            <div v-show="show">sliding alert</div>
        </transition>
        <transition name="fade" appear>
            <div v-if="show" class="appr">sliding alert 2</div>
        </transition>
        <transition
                appear
                enter-active-class="animated bounce"
                leave-active-class="animated shake"
            >
            <div v-if="show" class="appr">sliding alert 3</div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            alertAnimation: 'fade'
        }
    }
}
</script>

<style lang="scss" scoped>
    .appr {
        background-color: aquamarine;
        margin: 1em;
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
                transition: opacity 1s;
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