<template>
    <div class="header">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/user">User</router-link> |
            <router-link to="/book">Book</router-link> |
            <router-link to="/quote">Quote</router-link> |
            <router-link to="/directives">Directives</router-link> | 
            <router-link to="/filmix">Filmix</router-link> |
            <router-link to="/transitions">Transitions</router-link> | 
            <router-link to="/sthome">ST-Home</router-link> |
            <router-link to="/stportfolio">ST-Portf</router-link> |
            <router-link to="/ststocks">ST-Stocks</router-link>
        </div>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
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