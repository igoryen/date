<template>
    <div class="comps-server">
        <div class="a">
            <strong>Comps-server</strong>
        </div>
        <div class="b">            
            <div class="bb">
                <ul>
                    <app-server v-for="(server, idx) in servers" :key="idx" :server="server"></app-server>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import server from './Server.vue';
export default {
    data: function() {
        return {
            servers: [
                { id: 1, stat: 'Normal' },
                { id: 2, stat: 'Critical' },
                { id: 3, stat: 'Unknown' },
                { id: 4, stat: 'Normal' }
            ]
        }
    },
    components: {
        appServer: server
    }
}
</script>

<style lang="scss" scoped>

</style>