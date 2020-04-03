<template>
    <div>
        <h1>The Quote Page</h1>
        <router-view />

        <div class="aaa">
            <div class="aba">
                <p>A wonderful quote!</p>
            </div>
        </div>

        <hr />
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({ name: "Home" });
        }
    }
};
</script>

<style lang="scss" scoped>
.aba {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}
</style>