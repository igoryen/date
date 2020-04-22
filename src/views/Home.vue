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
                <img :src="img" alt style="width: 30px;" />
            </span>
            <input type="text" :value="txt" />
            <button @click="alertme">Show alert</button>
            <input @keydown="value = $event.target.value" type="text" placeholder="as you type" />
            <span class="output">{{ value }}</span>
            <input
                @keydown.enter="val2 = $event.target.value"
                type="text"
                placeholder="on click Enter"
            />
            <span class="output">{{ val2 }}</span>
            <hr />
            <button @click="val3+=5">Add 5</button>
            <button @click="val3+=1">Add 1</button>
            <span>Current value: {{ val3 }}</span>
            <span class="output">Result: {{ res }}</span>
            <hr />
            <app-styles></app-styles>
            <hr />
            <app-condlist></app-condlist>
            <hr />
            <div class="ex-comps">
                <app-serv-header></app-serv-header>
                <div class="b">
                    <app-servers></app-servers>
                    <app-serv-deets></app-serv-deets>
                </div>
                <app-serv-footer></app-serv-footer>
            </div>
            <hr />
            <div class="clr-comps">
                <div class="buttons">
                    <button @click="selComp = 'appBlue'">Load blue template</button>
                    <button @click="selComp = 'appGreen'">Load green template</button>
                    <button @click="selComp = 'appRed'">Load red template</button>
                </div>
                <div class="templates">
                    <component :is="selComp">
                        <p>Some content</p>
                    </component>
                    <!-- <app-blue>
                        <p>Some content</p>
                    </app-blue>
                    <app-green>
                        <p>Some content</p>
                    </app-green>
                    <app-red>
                        <p>Some content</p>
                    </app-red>-->
                </div>
            </div>
            <hr />
            <app-form></app-form>
            <hr />
            <app-dir></app-dir>
            <hr />
            <app-fm></app-fm>
            <hr />
            <app-ax1></app-ax1>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import StylesEx from "@/components/exercises/Styles.vue";
import condlist from "@/components/exercises/CondList.vue";
//---
import ServerFooter from "@/components/exercises/comps/shared/Footer.vue";
import ServerHeader from "@/components/exercises/comps/shared/Header.vue";
import ServerDeets from "@/components/exercises/comps/server/ServerDeets.vue";
import Servers from "@/components/exercises/comps/server/Servers.vue";
//---
import Green from "@/components/exercises/comps/colored/Green.vue";
import Blue from "@/components/exercises/comps/colored/Blue.vue";
import Red from "@/components/exercises/comps/colored/Red.vue";
//---
import Form from "@/components/exercises/forms/Form.vue";
//---
import Dir from "@/components/exercises/directive/Dir.vue";
//---
import Fm from "@/components/exercises/filmix/Fm.vue";
//--
import ax1 from "@/components/axios/Ex1.vue";

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
        appGreen: Green,
        //----
        appForm: Form,
        //---
        appDir: Dir,
        //---
        appFm: Fm,
        //--
        appAx1: ax1
    },
    data() {
        return {
            selComp: "appBlue", // #1
            //----
            name: "igoryen",
            age: 11,
            img:
                "http://www.valuecoders.com/blog/wp-content/uploads/2016/11/Vue.js-cover-150x105.png",
            txt: "i am an input",
            value: "",
            val2: "",
            val3: 0
        };
    },
    methods: {
        random: function() {
            return Math.random();
        },
        alertme: function() {
            alert("Hi!");
        }
    },
    computed: {
        res: function() {
            return this.val3 == 43
                ? "done. Will reset in 2 secs"
                : "Add 5 and 1 until 43";
        }
    },
    watch: {
        res: function() {
            var vm = this;
            setTimeout(function() {
                vm.val3 = 0;
            }, 2000);
        }
    }
};
/**
 * 1. selComp = selected component
 */
</script>
<style lang="scss">
$dark000: #000000;
$dark010: #111111;
$dark020: #222222;
$dark030: #333333;
$dark040: #444444;
$dark050: #555555;
$dark060: #666666;
$dark070: #777777;
$dark080: #888888;
$dark120: #cccccc;
$dark150: #f2f2f2;

$dark_blue: #12303b; // #0d1a26
$dark_green: #0a420a; // #293d3d
$dark_orange: #4d3200;
$dark_red: #440808;


body,
div {
    background-color: $dark010;
    color: $dark150;
}
h1,
h2,
h3,
h4,
h5,
h6,
span {
    background-color: $dark020;
    color: $dark150;
}
input,
textarea {
    background-color: $dark010;
    border-color: $dark150;
    color: $dark150;
}
button {
    border-radius: 5px;
    border: 2px solid $dark040;
    background-color: $dark030;
    color: $dark150;
    &[type="submit"] {
        background-color: $dark020;
    }
    &:disabled {
        color: $dark070;
    }
}

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
    background-color: $dark030;
    padding: 0.5em;
    width: 100%;
    .b {
        display: grid;
        grid-template-columns: 40% 40%;
    }
}
.spans,
.parent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    span,
    input,
    button {
        border: 1px solid $dark030;
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
    background-color: $dark020;
}
.q-info {
    background-color: $dark020;
}
.quote-author {
    background-color: $dark030;
    border: 1px solid $dark080;
    max-width: 500px;
    margin: auto;
}
//--------------------
.danger {
    border: 1px solid red;
    background-color: $dark_orange;
}
.stock {
    h4 {
        background-color: $dark_green;
        margin: 0;
    }
}

.stock {
    border-radius: 3px;
    border: 1px solid $dark_blue;
    margin: 0.5em;
    padding: 0.1em;
    width: 25%;
}
.body {
    display: flex;
    justify-content: space-between;
    padding: 3px;
    input {
        max-width: 5em;
    }
    button {
        &:disabled {
            color: $dark120;
        }
    }
}
// BOOK ---------------
.component {
    border: 1px solid $dark030;
    border-radius: 3px;
}
.book {
    background-color: $dark040;
    padding: 1em;
}
.flare {
    animation: flare 1s ease-out;
}
@keyframes flare {
    0% {
        background-color: $dark_orange;
        color: red;
    }
    100% {
        background-color: transparent;
        color: $dark000;
    }
}
// Book Detail
.deet {
    background-color: $dark050;
    margin: 1em;
    padding: 1em;
}
.reset-buttons {
    display: flex;
    flex-direction: column;
    button {
        margin-bottom: 3px;
    }
}
// BookEdit.vue
.edit {
    background-color: $dark020;
    margin: 1em;
    padding: 1em;
}
// Directives.vue
.dir-examples {
    border: 1px solid $dark120;
}
// comps/colored/Blue
.comp-blue {
    background-color: $dark_blue;
    border: 1px solid blue;
    margin: 20px auto;
    padding: 30px;
    text-align: center;
}
.comp-green {
    background-color: $dark_green;
    border: 1px solid green;
    margin: 20px auto;
    padding: 30px;
    text-align: center;
}
.comp-red {
    background-color: $dark_red;
    border: 1px solid red;
    margin: 20px auto;
    padding: 30px;
    text-align: center;
}

//---
.single-server {
    background-color: $dark010;
    cursor: pointer;
    &:hover {
        background-color: $dark020;
    }
}
.comps-server-deets {
    background-color: $dark010;
    text-align: left;
}
.comps-server {
    background-color: $dark010;
    padding: 3px;
}
.a {
    background-color: $dark020;
}
.ba {
    background-color: $dark020;
}
.bb {
    background-color: $dark020;
}
.comps-footer {
    background-color: $dark010;
}
.comps-header {
    background-color: $dark_green;
}
// directive
.aa {
    background-color: $dark030;
    height: 100px;
    width: 100px;
}
// filters mixins
.ex-fn {
    background-color: $dark030;
}
// form
.ex-form {
    width: 100%;
}
.form {
    background-color: $dark030;
}
form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 3px;
}
.data {
    background-color: $dark030;
    padding: 3px;
    text-align: left;
    p {
        // background-color: $dark010;
    }
}
//--------------
.progress-bar {
    width: 200px;
    height: 20px;
    background-color: $dark040;
    border: 1px solid $dark030;
}
//------
.visible {
    width: 100px;
    height: 10px;
    background-color: $dark040;
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
//---- Styles
.styles {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    span,
    input {
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
    background-color: $dark030;
    width: 10px !important;
}
#effect {
    width: 30px;
    height: 10px;
    border: 1px solid black;
}
// Stock
.danger {
    border: 1px solid red;
    background-color: $dark_orange;
}
h4 {
    background-color: $dark_blue;
    margin: 0;
}
.stock {
    border-radius: 3px;
    border: 1px solid $dark_green;
    margin: 0.5em;
    padding: 0.1em;
    width: 25%;
}
.body {
    display: flex;
    justify-content: space-between;
    padding: 3px;
    input {
        max-width: 5em;
    }
    button {
        &:disabled {
            color: $dark040;
        }
    }
}
// Quote
.nw-a {
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1em;
        textarea {
            max-width: 30%;
        }
    }
}

//--
.aaa {
    background-color: $dark030;
    border: 1px solid $dark060;
    box-shadow: 1px 1px 1px $dark010;
    margin: 30px auto;
    max-width: 300px;
    padding: 30px;
    text-align: center;
}
.author {
    color: lightblue;
}
// h2 {
//     color: red;
// }
// QuoteGrid.vue
.q-r {
    background-color: $dark030;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em;
}
// Quote New
.quote-new {
    background-color: $dark030;
    border: 1px solid $dark120;
    max-width: 500px;
    margin: auto;
}
// Qwt.vue
.q-a {
    margin: 0.1em;
    width: 30%;
}
.panel-body {
    font-family: "Arizonia", cursive;
    font-size: 24px;
    color: $dark150;

    border: 1px solid $dark120;
}
.qwt {
    background-color: $dark030;
    cursor: pointer;
    &:hover {
        background-color: $dark050;
    }
}
// qwtheader.vue
.qwt-header {
    background-color: $dark030;
    padding: 3px;
}
.grow {
    background-color: $dark050;
}
// stocks/Stocks.vue
.stocks-box {
    display: flex;
    flex-wrap: wrap;
}
// DangerAlert.vue
.dangeralert {
    padding: 1em;
    background-color: $dark_red;
    margin: 10px;
}
// Quiz.vue
.quiz {
    border: 1px solid green;
    background-color: $dark_green;
}
// QzAnswer.vue
.answer {
    background-color: $dark_blue;
    margin: auto;
    max-width: 200px;
    padding: 1em;
}
// QzQuestion.vue
.question {
    background-color: $dark_green;
    margin: auto;
    max-width: 200px;
    padding: 1em;
}
.btns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    button {
        margin: 3% 10%;
        width: 3em;
    }
}
// Success Alert.vue
.successalert {
    padding: 1em;
    background-color: $dark_green;
    margin: 10px;
}
// Transitions.vue
.flip {
    &-enter {
        &-active {
            animation: flip-in 0.25s ease-out forwards;
        }
    }
    &-leave {
        &-active {
            animation: flip-out 0.25s ease-out forwards;
        }
    }
}
@keyframes flip-in {
    from {
        transform: rotateY(90deg);
    }
    to {
        transform: rotateY(0deg);
    }
}
@keyframes flip-out {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(90deg);
    }
}
//===============================
.question,
.answer {
    height: 150px;
}
.list-item {
    background-color: $dark_red;
    cursor: pointer;
    margin: 3px;
    list-style: none;
}
.abc {
    background-color: $dark_green;
    height: 100px;
    width: 300px;
}
.appr {
    background-color: $dark_blue;
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
            // position: absolute;
        }
    }
    &-move {
        transition: transform 1s;
    }
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
// User.vue
.user {
    padding: 5px;
    background-color: $dark030;
    box-shadow: 1px 1px 1px $dark000;
    padding: 1em;
}
// UserDetails.vue
.user-detail {
    padding: 5px;
    background-color: $dark030;
    box-shadow: 1px 1px 1px $dark000;
    padding: 1em;
}
// UserEdit.vue
.user-edit {
    padding: 5px;
    background-color: $dark030;
    box-shadow: 1px 1px 1px $dark000;
    padding: 1em;
}
.abc {
    background-color: $dark040;
    height: 700px;
}

// UserStart.vue
.user-start {
    padding: 5px;
    background-color: $dark020;
    box-shadow: 1px 1px 1px $dark000;
    padding: 1em;
}
ul {
    &.list-group {
        border: 1px solid $dark040;
        padding: 0;
        li {
            border: 1px solid $dark030;
            border-radius: 3px;
            list-style: none;
            margin: 2px;
            &:hover {
                background-color: $dark030;
            }
        }
    }
}
// Header.vue
.st {
    background-color: $dark030;
    display: flex;
    justify-content: space-between;

    a {
        margin: 3px 0.5em;
    }
}
#nav {
    padding: 1em;
    background-color: $dark030;
    span {
        background-color: $dark030;
    }
}
.header {
    background-color: $dark030;
    color: red;
    a {
        font-size: 10px;
    }
}
// Filmix/List.vue
.list {
    background-color: $dark_blue;
    margin: 1em;
    border: 1px solid;
    ul {
        padding: 0;
        li {
            list-style: none;
        }
    }
}
// Filmix/Filmix.vue
.filmix {
    background-color: $dark_red;
    margin: 1em;
    border: 1px solid;
    ul {
        padding: 0;
        li {
            list-style: none;
        }
    }
}
</style>
