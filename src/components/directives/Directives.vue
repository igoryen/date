<template>
    <div class="directives">
        <h1>Directives</h1>
        <div>
            <h2>Custom directives</h2>
            <div class="dir-examples">
                <p v-highlight>Color this</p>
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
export default {};
</script>

<style>
.dir-examples {
    border: 1px solid #ccc;

}
</style>