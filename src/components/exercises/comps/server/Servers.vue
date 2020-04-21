<template>
    <div class="comps-server">
        <div class="a">
            <strong>Comps-server</strong>
        </div>
        <div class="b">            
            <div class="bb">
                <ul>
                    <li v-for="idx in 5 " :key="idx">Server #{{idx}}</li>
                </ul>
            </div>
            <div class="ba">
                ba
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .b {
        display: grid;
        grid-template-columns: 40% 40%;
    }
    .ba {
        background-color: lavender;
    }
    .bb {
        background-color: lavenderblush;
    }
</style>