<template>
    <div>
        <pre>UseEdit.vue</pre>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }} </p>
        <p>Query: {{ $route.query.q }} </p>
        <div class="abc"></div>
        <p id="data">Some extra data</p>
    </div>
</template>
<style>
    .abc {
        background-color: bisque;
        height: 500px;
    }
</style>