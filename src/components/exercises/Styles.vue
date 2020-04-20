<template>
    <div class="styles">
        <button @click="startEffect">Start Effect</button>
        <span :class="ecl" id="effect" ></span>
        <span :class="[float, 'blue', 'text-color']">I've got no class</span>
        <input v-model="userClass" type="text">
        <span :class="[{visible: true}, userClass]"></span>
        <input v-model="userClass" type="text">
        <input v-model="isVisible" type="text">
        <input :class="[{visible: isVisible}, userClass]" type="text">
        <input v-model="myStyle.backgroundColor" type="text" placeholder="Type color name">
        <span :style="myStyle"></span>
        <hr>
        <button @click="startProgress">Start progress</button>
        <span :class="['progress-bar']" :style="progressBar"></span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            ecl: { // ecl = effect classes
                hlt: false, // hlt = highlight
                shr: true // shr = shrink
            },
            float: 'float',
            userClass: '', // userClass = user class
            isVisible: true,
            myStyle: {
                border: '1px solid black',
                width: '100px',
                height: '20px',
                backgroundColor: 'gray'
            },
            progressBar: {
                width: '0px',
                backgroundColor: 'red'
            }
        }
    },
    methods: {
        startEffect: function() {
            var vm = this;
            setInterval( function(){
                vm.ecl.hlt = !vm.ecl.hlt;
                vm.ecl.shr = !vm.ecl.shr;
            }, 1000);
            
        },
        startProgress: function() {
            var vm = this;
            var width = 0;
            setInterval(function(){
                width = (width + 100)-(width/4);
                vm.progressBar.width = width + 'px';
            }, 500)
        }
    }

}
</script>

<style lang="scss" scoped>
    .progress-bar {
        width: 200px;
        height: 20px;
        background-color: #f2f2f2;
        border: 1px solid #333;
    }
    //------
    .visible {
        width: 100px;
        height: 10px;
        background-color: #f2f2f2;
    }
    //----
    .blue {
        background-color: blue;
    }
    .float {
        float: right;
    }
    .user-class {

    }
    .text-color {
        color: yellow;
    }
    //----
    .styles {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        span, input {
            margin: 3px;
        }
        hr {
            width: 100%;
        }
    }
    .hlt {
        background-color: red;
        width: 40px;
    }
    .shr {
        background-color: #ccc;
        width: 10px !important;
    }
    #effect {
        width: 30px;
        height: 10px;
        border: 1px solid black;
    }
</style>