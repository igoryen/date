<template>
    <div class="panel-a">
        <strong>Panel A</strong>
        <span>Name: {{ name }}</span>
        <span>Age: {{ age }}</span>
        <span>Age times 3 = {{ age * 3 }}</span>
        <span>Random number: {{ random() }}</span>
        <span>
            <img :src="img" alt style="width: 30px;" />
        </span>
        <input type="text" :value="txt" />
        <button @click="alertme">Show alert</button>
        <input @keydown="value = $event.target.value" type="text" placeholder="as you type" />
        <span class="output">{{ value }}</span>
        <input @keydown.enter="val2 = $event.target.value" type="text" placeholder="on click Enter" />
        <span class="output">{{ val2 }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "igoryen",
            age: 11,
            img:
                "http://www.valuecoders.com/blog/wp-content/uploads/2016/11/Vue.js-cover-150x105.png",
            txt: "i am an input",
            value: "",
            val2: "",
            val3: 0
        };
    },
    methods: {
        random: function() {
            return Math.random();
        },
        alertme: function() {
            alert("Hi!");
        }
    }
};
</script>

<style>
</style>