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
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
    .comps-server {
        background-color: bisque;
        padding: 3px;
    }
    .a {
        background-color: lightgoldenrodyellow
    }
    .ba {
        background-color: lavender;
    }
    .bb {
        background-color: lavenderblush;
    }
</style>