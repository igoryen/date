<template>
    <div class="header">
        <div id="nav">
            <router-link to="/">
                <span @click="sth = false">Home</span></router-link> |
            <router-link to="/about">
                <span @click="sth = false">About</span></router-link> |
            <router-link to="/user">
                <span @click="sth = false">User</span></router-link> |
            <router-link to="/book">
                <span @click="sth = false">Book</span></router-link> |
            <router-link to="/quote">
                <span @click="sth = false">Quote</span></router-link> |
            <router-link to="/directives">
                <span @click="sth = false">Directives</span></router-link> |
            <router-link to="/filmix">
                <span @click="sth = false">Filmix</span></router-link> |
            <router-link to="/transitions">
                <span @click="sth = false">Transitions</span></router-link> |
            <router-link to="/sthome">
                <span @click="sth = true">ST-Home</span></router-link> |
            <router-link to="/stportfolio">
                <span @click="sth = true">ST-Portf</span></router-link> |
            <router-link to="/ststocks">
                <span @click="sth = true">ST-Stocks</span></router-link>
        </div>
        <div class="st" v-if="sth">
            <span>Stock trader</span>
            <div class="links">
                <a href="#" @click="endDay">End Day</a> |
                <a href="#">Save data</a> |
                <a href="#">Load data</a> |
                <span>Your funds: {{ funds | currency }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                sth: false // stock trader's header
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks'
            ]),
            endDay(){
                this.randomizeStocks();
            }
        }        
    }
</script>
<style lang="scss" scoped>
    .st {
        background-color: #f2f2f2;
        display: flex;
        justify-content: space-between;

        a {
            margin: 3px 0.5em;
        }

    }
    #nav {
        padding: 1em;
    }
    .header {
        background-color: antiquewhite;
        a {
            font-size: 10px;
        }
    }
</style>