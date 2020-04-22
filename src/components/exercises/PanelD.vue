<template>
    <div class="panel-d">
        <strong>Panel D</strong>
        <div class="ex-comps">
            <app-serv-header></app-serv-header>
            <div class="b">
                <app-servers></app-servers>
                <app-serv-deets></app-serv-deets>
            </div>
            <app-serv-footer></app-serv-footer>
        </div>
    </div>
</template>

<script>
import ServerFooter from "@/components/exercises/comps/shared/Footer.vue";
import ServerHeader from "@/components/exercises/comps/shared/Header.vue";
import ServerDeets from "@/components/exercises/comps/server/ServerDeets.vue";
import Servers from "@/components/exercises/comps/server/Servers.vue";
export default {
    components: {
        appServFooter: ServerFooter,
        appServHeader: ServerHeader,
        appServDeets: ServerDeets,
        appServers: Servers,
    }
};
</script>

<style>
</style>