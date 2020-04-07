<template>
    <div class="directives">
        <h1>Directives</h1>
        <div>
            <h2>Custom directives</h2>
            <div class="dir-examples">
                <p v-highlight:background="'#ccc'">Color this</p>
                <p v-highlight:background.delayed="'pink'">Colored with delay</p>
                <p v-local-highlight:background.delayed="'orange'">Local custom directive</p>
            </div>
        </div>
        <div>
            <h2>Built-in directives</h2>
            <div class="dir-examples">
                <p v-text="'text coming in through v-text'"></p>
                <div v-html="'<pre>text coming in through v-html</pre>'"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        "local-highlight": {
            bind(el, binding /*, vnode*/) {
                var delay = 0;
                if (binding.modifiers["delayed"]) {
                    delay = 4000;
                }
                setTimeout(() => {
                    if (binding.arg == "background") {
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }
                }, delay);
            }
        }
    }
};
</script>

<style>
.dir-examples {
    border: 1px solid #ccc;
}
</style>