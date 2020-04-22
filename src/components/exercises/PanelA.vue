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

        <button @click="val3+=5">Add 5</button>
        <button @click="val3+=1">Add 1</button>
        <span>Current value: {{ val3 }}</span>
        <span class="output">Result: {{ res }}</span>
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
    },
    computed: {
        res: function() {
            return this.val3 == 43
                ? "done. Will reset in 2 secs"
                : "Add 5 and 1 until 43";
        }
    },
    watch: {
        res: function() {
            var vm = this;
            setTimeout(function() {
                vm.val3 = 0;
            }, 2000);
        }
    }
};
</script>

<style>
</style>