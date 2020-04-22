<template>
    <div class="home">
        <pre>Hello from Home.vue</pre>
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <hr />
        <section class="panel-set">
            <div class="buttons">
                <button @click="pckPnl = 'appPnlA'">PanelA.vue</button>
                <button @click="pckPnl = 'appPnlB'">PanelB.vue</button>
                <button @click="pckPnl = 'appPnlC'">PanelC.vue</button>
                <button @click="pckPnl = 'appPnlD'">PanelD.vue</button>
                <button @click="pckPnl = 'appStyles'">Styles.vue</button>
                <button @click="pckPnl = 'appCondlist'">CondList.vue</button>
            </div>
            <div class="panel">
                <component :is="pckPnl"></component>
            </div>
        </section>
        <hr />
        <div class="spans">
            <hr />

            <hr />

            <hr />

            <hr />

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
            <hr />
            <app-env-var></app-env-var>
            <hr />
            <app-ilu></app-ilu>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import StylesEx from "@/components/exercises/Styles.vue";
import condlist from "@/components/exercises/CondList.vue";
//---

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

import ev from "@/components/envvar/EnvVar.vue";
import InputLiveUpdate from "@/components/exercises/InputLiveUpdate.vue";
import PanelA from "@/components/exercises/PanelA.vue";
import PanelB from "@/components/exercises/PanelB.vue";
import PanelC from "@/components/exercises/PanelC.vue";
import PanelD from "@/components/exercises/PanelD.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
        appStyles: StylesEx,
        appCondlist: condlist,

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
        appAx1: ax1,

        appEnvVar: ev,
        appIlu: InputLiveUpdate,
        appPnlA: PanelA,
        appPnlB: PanelB,
        appPnlC: PanelC,
        appPnlD: PanelD
    },
    data() {
        return {
            selComp: "appBlue", // #1
            pckPnl: "appPnlA"
        };
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

$light_blue: #b3e0ff;

$border_type: dashed;
$border_type2: solid;

@mixin box_styled {
    background-color: #222222;
    border: 1px $border_type $dark040;
    padding: 3px;
}

body {
    background-color: $dark010;
    color: $dark150;
}
a {
    color: $light_blue;
}
h1,
h2,
h3,
h4,
h5,
h6,
strong {
    // background-color: $dark020;
    color: $dark150;
    text-shadow: 1px 2px 2px $dark000;
}
hr {
    background-color: $dark_blue;
    border: 0;
    height: 5px;
}
input,
textarea {
    background-color: $dark010;
    border: 2px $border_type2 $dark030;
    color: $dark150;
}
button {
    // background-color: $dark030;
    border: 1px $border_type2 $dark040;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(34, 34, 34, 1) 50%,
        rgba(68, 68, 68, 1) 100%
    );

    border-radius: 5px;
    color: $dark150;
    padding: 5px !important;

    &[type="submit"] {
        background-color: $dark020;
    }
    &:disabled {
        color: $dark070;
    }
}
//----------------------------
#app {
    color: $dark150;
}

.panel-set {
    display: flex;
    flex-direction: row;
    div {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        @include box_styled();
    }
    .panel {
        width: 100%;
    }
    .buttons {
        display: flex;
        flex-direction: column;
    }
    .output {
        @include box_styled();
    }
}

.input-live-update {
    span {
        @include box_styled;
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

.spans,
.parent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    span,
    input,
    button {
        // border: 1px $border_type $dark030;
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
    border: 1px $border_type $dark080;
    max-width: 500px;
    margin: auto;
}
//--------------------
.danger {
    border: 1px $border_type red;
    background-color: $dark_orange;
}

.stock {
    border-radius: 3px;
    border: 1px $border_type $dark_blue;
    background-color: $dark040;
    margin: 0.5em;
    padding: 0.1em;
    width: 25%;
    h4 {
        background-color: $dark_green;
        margin: 0;
    }
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
    border: 1px $border_type $dark030;
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
    border: 1px $border_type $dark120;
}
// comps/colored/Blue
.comp-blue {
    background-color: $dark_blue;
    border: 1px $border_type blue;
    margin: 20px auto;
    padding: 30px;
    text-align: center;
}
.comp-green {
    background-color: $dark_green;
    border: 1px $border_type green;
    margin: 20px auto;
    padding: 30px;
    text-align: center;
}
.comp-red {
    background-color: $dark_red;
    border: 1px $border_type red;
    margin: 20px auto;
    padding: 30px;
    text-align: center;
}

//---

.comps-server-deets {
    background-color: $dark040;
    text-align: left;
    border: 1px $border_type $dark010;
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

.ex-comps {
    background-color: $dark030;
    padding: 0.5em;
    width: 100%;
    .comps-header {
        background-color: $dark_green;
    }
    .b {
        display: flex;
        flex-direction: row;
    }
    .comps-footer {
        background-color: $dark010;
    }
    .single-server {
        // background-color: $dark010;
        cursor: pointer;
        &:hover {
            background-color: $dark010;
        }
    }
    ul {
        padding: 0;
        list-style: none;
    }
    li {
        color: $light_blue;
    }
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
.panel-b {
    .progress-bar {
        width: 200px;
        height: 20px;
        background-color: $dark040;
        border: 1px $border_type $dark030;
    }
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
    border: 1px $border_type black;
}
// Stock
.danger {
    border: 1px $border_type red;
    background-color: $dark_orange;
}
h4 {
    background-color: $dark_blue;
    margin: 0;
}
.stock {
    border-radius: 3px;
    border: 1px $border_type $dark_green;
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
    border: 1px $border_type $dark060;
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
    border: 1px $border_type $dark120;
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

    border: 1px $border_type $dark120;
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
    border: 1px $border_type green;
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
.trans {
    .alpha {
        background-color: $dark030;
        border: 1px $border_type $dark070;
        margin: 3px;
        padding: 3px;
    }
}
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
        border: 1px $border_type $dark040;
        padding: 0;
        li {
            border: 1px $border_type $dark030;
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
    background-color: $dark000;
    span {
        // background-color: $dark030;
        color: $light_blue;
    }
}
.header {
    background-color: $dark030;
    color: $dark040;
    a {
        font-size: 10px;
    }
}
// Filmix/List.vue
.list {
    background-color: $dark_blue;
    margin: 1em;
    border: 1px $border_type;
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
    border: 1px $border_type;
    ul {
        padding: 0;
        li {
            list-style: none;
        }
    }
}
</style>
