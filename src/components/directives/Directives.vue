<template>
    <div class="directives">
        <h1>Directives</h1>
        <div>
            <h2>Custom directives</h2>
            <div class="dir-examples">
                <p v-highlight:background="'#222222'">Color this</p>
                <p v-highlight:background.delayed="'#333333'">Colored with delay</p>
                <p v-local-highlight:background.delayed="{mainColor:'#662900'}">Local custom directive</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: '#333333', secondColor: '#666666', delay:500}">Local. Blink.</p>
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
                if (binding.modifiers["blink"]) {
                    let mainColor = binding.value.mainColor;
                    let secondColor = binding.value.secondColor; // light green
                    let currentColor = mainColor;
                    setTimeout(() => {
                        setInterval(() => {
                            currentColor == secondColor
                                ? (currentColor = mainColor)
                                : (currentColor = secondColor);
                            if (binding.arg == "background") {
                                el.style.backgroundColor = currentColor;
                            } else {
                                el.style.color = currentColor;
                            }
                        }, 1000);
                    }, binding.value.delay);
                } else {
                    setTimeout(() => {
                        if (binding.arg == "background") {
                            el.style.backgroundColor = binding.value.mainColor;
                        } else {
                            el.style.color = binding.value.mainColor;
                        }
                    }, delay);
                }
            }
        }
    }
};
</script>

<style>

</style>