<template>
    <div class="q-a">
        <div class="panel-body qwt">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    props: ["quotes"],
    data: function() {
        return {
            maxQuotes: 10
        };
    }
};
</script>

<style lang="scss" scoped>
.q-a {
    margin: 0.1em;
    width: 30%;
}
.panel-body {
    font-family: "Arizonia", cursive;
    font-size: 24px;
    color: #6e6e6e;

    border: 1px solid #ccc;
}
.qwt {
    background-color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #ffe2e2;
    }
}
</style>