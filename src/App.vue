<template>
    <div id="app">
        <router-view name="header-top"/>
        <transition name="slide" mode="out-in">
            <router-view />
        </transition>
        <router-view name="header-bottom"/>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.slide-leave-active {
    animation: slide-out 0.2s ease-out forwards;
}
.slide-leave {}
.slide-enter-active {
    animation: slide-in 0.2s ease-out forwards;
}

@keyframes slide-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@keyframes slide-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
