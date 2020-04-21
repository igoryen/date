<template>

    <li class="single-server" @click="serverSelected">Server #{{server.id}}</li>

</template>

<script>
import { serverBus } from "../../../../main";
export default {
    props: ['server'],
    methods: {
        serverSelected() {
            serverBus.$emit('serverSelected', this.server);
        }
    }
}
</script>

<style lang="scss" scoped>
    .single-server {
        background-color: antiquewhite;
        cursor: pointer;
        &:hover {
            background-color: yellow;
        }
    }
</style>