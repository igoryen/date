<template>
    <div class="styles">
        
        <hr>
        <span :class="[float, 'blue', 'text-color']">I've got no class</span>
        <input v-model="userClass" type="text">
        <span :class="[{visible: true}, userClass]"></span>
        <input v-model="userClass" type="text">
        <input v-model="isVisible" type="text">
        <input :class="[{visible: isVisible}, userClass]" type="text">
        <input v-model="myStyle.backgroundColor" type="text" placeholder="Type color name">
        <span :style="myStyle"></span>
        <hr>
        
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            
            float: 'float',
            userClass: '', // userClass = user class
            isVisible: true,
            myStyle: {
                border: '1px solid black',
                width: '100px',
                height: '20px',
                backgroundColor: 'gray'
            },            
        }
    },

}
</script>

<style lang="scss" scoped>
    
</style>