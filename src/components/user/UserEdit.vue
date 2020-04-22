<template>
    <div class="user-edit">
        <pre>UseEdit.vue</pre>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }} </p>
        <p>Query: {{ $route.query.q }} </p>
        <hr>
        <button @click="confirmed = true">Confirm</button>
        <div class="abc"></div>
        <p id="data">Some extra data</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave( to, from, next ) {
        if ( this.confirmed ) {
            next();
        }
        else {
            if (confirm('Discard unfinished edits and leave?')) {
                next();
            }
            else {
                next( false );
            }
        }
    }
}
</script>
<style>

</style>