<template>
    <div class="home">
        <pre>Hello from Home.vue</pre>
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div class="spans">
            <span>Name: {{ name }}</span>
            <span>Age: {{ age }}</span>
            <span>Age times 3 = {{ age * 3 }}</span>
            <span>Random number: {{ random() }}</span>
            <span>
                <img :src="img" alt=""  style="width: 30px;">
            </span>
            <input type="text" :value="txt">
            <button @click="alertme">Show alert</button>
            <input @keydown="value = $event.target.value" type="text" placeholder="as you type">
            <span class="output">{{ value }}</span>
            <input @keydown.enter="val2 = $event.target.value" type="text" placeholder="on click Enter">
            <span class="output">{{ val2 }}</span>
            <hr>
            <button @click="val3+=5">Add 5</button>
            <button @click="val3+=1">Add 1</button>
            <span>Current value: {{ val3 }}</span>
            <span class="output">Result: {{ res }}</span>
            <hr>
            <app-styles></app-styles>
            <hr>
            <app-condlist></app-condlist>
            <hr>
            <div class="ex-comps">
                <app-serv-header></app-serv-header>
                <div class="b">
                    <app-servers></app-servers>
                    <app-serv-deets></app-serv-deets>
                </div>
                <app-serv-footer></app-serv-footer>
            </div>
            <hr>
            <div class="clr-comps">
                <div class="buttons">
                    <button>Load blue template</button>
                    <button>Load green template</button>
                    <button>Load red template</button>
                </div>
                <div class="templates">
                    <app-blue>
                        <p>Some content</p>
                    </app-blue>
                    <app-green>
                        <p>Some content</p>
                    </app-green>
                    <app-red>
                        <p>Some content</p>
                    </app-red>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import StylesEx from '@/components/exercises/Styles.vue';
import condlist from '@/components/exercises/CondList.vue';
//---
import ServerFooter from '@/components/exercises/comps/shared/Footer.vue';
import ServerHeader from '@/components/exercises/comps/shared/Header.vue';
import ServerDeets from '@/components/exercises/comps/server/ServerDeets.vue';
import Servers from '@/components/exercises/comps/server/Servers.vue';
//---
import Green from '@/components/exercises/comps/colored/Green.vue';
import Blue from '@/components/exercises/comps/colored/Blue.vue';
import Red from '@/components/exercises/comps/colored/Red.vue';

export default {
    name: "Home",
    components: {
        HelloWorld,
        appStyles: StylesEx,
        appCondlist: condlist,
        appServFooter: ServerFooter,
        appServHeader: ServerHeader,
        appServDeets: ServerDeets,
        appServers: Servers,
        //----
        appRed: Red,
        appBlue: Blue,
        appGreen: Green
    },
    data() {
        return {
            name: 'igoryen',
            age: 11,
            img: 'http://www.valuecoders.com/blog/wp-content/uploads/2016/11/Vue.js-cover-150x105.png',
            txt: 'i am an input',
            value: '',
            val2: '',
            val3: 0
        }
    },
    methods: {
        random: function() {
            return Math.random();
        },
        alertme: function() {
            alert('Hi!')
        }
    },
    computed: {
        res: function(){
            return this.val3 == 43 ? 'done. Will reset in 2 secs' : 'Add 5 and 1 until 43';
        }
    },
    watch: {
        res: function() {
            var vm = this;
            setTimeout( function(){
                vm.val3 = 0;
            }, 2000)
        }
    }
};
</script>
<style lang="scss">
    .clr-comps {
        width: 100%;
        .buttons {            
            text-align: left;
        }
        .templates {
            display: grid;
            grid-template-columns: 30% 30% 30%;
        }
    }
    
    .ex-comps {
        background-color: lightcyan;
        padding: 0.5em;
        width: 100%;
        .b {
            display: grid;
            grid-template-columns: 40% 40%;
        }
    }
    .spans, .parent {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        span, input, button {
            border: 1px solid #ccc;
            margin: 3px;
            padding: 3px;
        }
        hr {
            width: 100%;
        }
        ul {
            padding-left: 0;
            text-align: left;
        }
        li {
            list-style: none;
        }
    }
    .output {
        background-color: antiquewhite;
    }
</style>
