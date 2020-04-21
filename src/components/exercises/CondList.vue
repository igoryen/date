<template>
    <div class="condlist parent">
        <strong>Conditionals and lists</strong>
        <hr>
        <button @click="isShown = !isShown">Toggle</button>
        <span v-if="isShown">You either see me...</span>
        <span v-else>... or me</span>
        <hr>
        <span>
            <ul>
                <li v-for="(element, idx) in array" :key="idx">{{idx}}. {{ element }}</li>
            </ul>
        </span>
        <span>
            <ul>
                <li v-for="(value, keyname, idx) in myObject" :key="idx">{{idx}}. {{keyname}}: {{ value }}</li>
            </ul>
        </span>
        <span>
            <ul>
                <li v-for="(value, idx) in testData" :key="idx">
                    <template v-if="Array.isArray(value)">
                        <span v-for="(element, idx) in value" :key="idx">{{ element }}</span>  
                    </template>
                    <template v-else>
                        <span>{{ value }}</span>
                    </template>
                </li>
            </ul>
        </span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isShown: true,
            array: ['Igor', 'Jenica', 'Daniel', 'Joy'],
            myObject: {
                title: 'Lord of the Rings',
                author: 'J.R.R. Tolkien',
                books: 3
            },
            testData: {
                name: "TESTOBJECT",
                id: 10,
                data: [1.67, 1.33, 0.98, 2.21]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>