<template>
    <div>
        <h3>Some User Details</h3>
        <pre>UseDetail.vue</pre>
        <p>The loaded user's ID: {{ $route.params.id }}</p>
        <router-link
            tag="button"
            v-bind:to="link"
        >Edit User</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            link: {
                name: 'userEdit',
                params: { id: this.$route.params.id },
                query: {
                    locale: 'en',
                    q: 100
                },
                hash: '#data'
            }
        }
    },
    // similar to a life-cycle hook
    // eslint-disable-next-line no-unused-vars
    beforeRouteEnter( to, from, next ) {
        // this.link // data access fails
        next( vm => { // next() - the permission to load/create this file/component
            vm.link; // data access works (a callback)
        }); 
    }

}
</script>