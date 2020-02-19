<template>
    <div>
        <h3>Some User Details</h3>
        <p>The loaded user's ID: {{ $route.params.id }}</p>
        <router-link tag="button" v-bind:to="{ name: 'userEdit', params: { id: $route.params.id } }">Edit User</router-link>
    </div>
</template>