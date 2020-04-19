<template>
    <div class="home">
        <pre>Hello from Home.vue</pre>
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div>
            <p>Name: {{ name }}</p>
            <p>Age: {{ age }}</p>
            <p>Age times 3 = {{ age * 3 }}</p>
            <p>Random number: {{ random() }}</p>
            <p style="width: 100px;">
                <img :src="img" alt="">
            </p>
            <input type="text" :value="txt">
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld
    },
    data() {
        return {
            name: 'igoryen',
            age: 11,
            img: 'http://www.valuecoders.com/blog/wp-content/uploads/2016/11/Vue.js-cover-150x105.png',
            txt: 'i am an input'
        }
    },
    methods: {
        random: function() {
            return Math.random();
        }
    }
};
</script>
