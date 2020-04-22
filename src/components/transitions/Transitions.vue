<template>
    <div class="trans">
        <h1>Transitions</h1>
        <hr>
        <transition name="flip" mode="out-in">
            <component
                :is="mode"
                @replied="replied($event)"
                @confirmed="mode='app-q'"></component>
        </transition>
        <hr>
        <button @click="show = !show">Show an alert()</button>
        <br><br>
        <hr>
        <transition :name="alertAnimation" mode="out-in">
            <div class="alpha" key="alpha" v-if="show">Alpha</div>
            <div class="alpha" key="bravo" v-else>Bravo</div>
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
        <hr>
        <button @click="load = !load">Load/Remove element</button>
        <br><br>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"

            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"

            :css="false"
            >
            <div class="abc" v-if="load"></div>
        </transition>
        <hr>
        <button @click="sc == 'app-sa' ? sc = 'app-da' : sc = 'app-sa'">Toggle Components</button>
        <br>
        <transition name="fade" mode="out-in">
            <component :is="sc"></component>
        </transition>
        <hr>
        <button @click="addItem">Add item</button>
        <ul>
            <transition-group name="slide">
                <li class="list-item"
                    v-for="(n, idx) in nums" :key='n'
                    @click="remItem(idx)">{{ n }}</li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import qz from './Quiz.vue';
import q from './QzQuestion.vue';
import a from './QzAnswer.vue';
import da from './DangerAlert.vue';
import sa from './SuccessAlert.vue';
export default {
    data() {
        return {
            mode: 'app-q',
            show: true,
            load: true,
            alertAnimation: 'fade',
            elementWidth: 100,
            sc: 'app-sa', // sc = selected component
            nums: ['one', 'two', 'three', 'four', 'five'] // num = number
        }
    },
    methods: {
        replied(iscqt) {
            if(iscqt) {
                this.mode = 'app-a';
            }
            else {
                this.mode = 'app-q';
                alert('Try again')
            }
        },
        beforeEnter( elt ){
            console.log('beforeEnter - Vue has started adding the element');
            this.elementWidth = 100;
            elt.style.width = this.elementWidth + 'px';
        },
        enter( elt, done ) {
            console.log('enter - Vue is in the process of adding the element');
            let round = 1;
            const interval = setInterval(() => {
                elt.style.width = (this.elementWidth + round * 10) + 'px';
                round++;
                if(round > 20) {
                    clearInterval( interval );
                    done();
                }
            }, 20);
        }, 
        afterEnter() {
            console.log('afterEnter - Vue has finished adding the element');
        }, 
        enterCancelled() {
            console.log('enterCancelled');
        },
        //-----
        beforeLeave( elt ){
            console.log('beforeLeave - Vue has started removing the element');
            this.elementWidth = 300;
            elt.style.width = this.elementWidth + 'px';
        },
        leave( elt, done ) {
            console.log('leave - Vue is in the process of removing the element');
            let round = 1;
            const interval = setInterval(() => {
                elt.style.width = (this.elementWidth - round * 10) + 'px';
                round++;
                if(round > 20) {
                    clearInterval( interval );
                    done();
                }
            }, 20);
        }, 
        afterLeave() {
            console.log('afterLeave - Vue has finished removing the element');
        }, 
        leaveCancelled() {
            console.log('leaveCancelled');
        },
        addItem() {
            const pos = Math.floor(Math.random() * this.nums.length);
            this.nums.splice( pos, 0, this.nums.length + 1);
        },
        remItem(idx) {
            this.nums.splice(idx, 1);
        }
    },
    components: {
        appQuiz: qz,
        appQ: q,
        appA: a,
        appDa: da,
        appSa: sa
    }
}
</script>

<style lang="scss" scoped>
    
</style>