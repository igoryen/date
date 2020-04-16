<template>
    <div class="user-start">
        <pre>UserStart.vue</pre>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li" to="/user/1">User 1</router-link>
            <router-link tag="li" to="/user/2">User 2</router-link>
            <router-link tag="li" to="/user/3">User 3</router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.user-start {
    padding: 5px;
    background-color: lavenderblush;
    box-shadow: 1px 1px 1px #000;
    padding: 1em;
}
ul {
    &.list-group {
        border: 1px solid #f2f2f2;
        padding: 0;
        li {
            border: 1px solid lightblue;
            border-radius: 3px;
            list-style: none;
            margin: 2px;
            &:hover {
                background-color: antiquewhite;
            }
        }
    }
}
</style>