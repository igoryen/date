<template>
    <div class="styles">
        <strong>Styles.vue</strong>
        <hr />
        <span :class="[float, 'blue', 'text-color']">I've got no class</span>
        <hr>
        <input v-model="userClass" type="text" />
        <span :class="[{visible: true}, userClass]"></span>
        <hr>
        <input v-model="isVisible" type="text" />
        <input :class="[{visible: isVisible}, userClass]" type="text" />
        <hr>
        <p>Type a browser-supported color name:</p>
        <input v-model="myStyle.backgroundColor" type="text" placeholder="Type color name" />
        <span :style="myStyle"></span>
        <hr />
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            float: "float",
            userClass: "", // userClass = user class
            isVisible: true,
            myStyle: {
                border: "1px solid black",
                width: "100px",
                height: "20px",
                backgroundColor: "gray"
            }
        };
    }
};
</script>

<style lang="scss" scoped>
</style>