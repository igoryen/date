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
    animation: slide-out 1s ease-out forwards;
    opacity: 0;
    transition: opacity 1s ease;
}
.slide-leave {
    opacity: 1;
    transform: translateX(0);
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
}
@keyframes slide-in {
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
