<template>
    <div class="comps-server-deets">
        <pre>Comps-server-deets</pre>
        <div v-if="!server">Please select a server</div>
        <div v-else>
            <p>server # {{ server.id }} selected</p>
            <p>status: {{server.stat}} </p>
            <button @click="resetStat">Change to Normal</button>
        </div>
    </div>
</template>

<script>
import { serverBus } from '../../../../main';
export default {
    data: function() {
        return {
            server: null
        }
    },
    methods: {
        resetStat() {
            this.server.stat = 'Normal';
        }
    },
    created() {
        serverBus.$on('serverSelected', (server) => {
            this.server = server;
        });
    }
}
</script>

<style lang="scss" scoped>

</style>