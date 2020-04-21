<template>
    <div class="fullname">
        <label>First name: <input type="text" :value="fname" @input="nameChanged(true, $event)"></label>
        <label>Last name: <input type="text" :value="lname"  @input="nameChanged(false, $event)"></label>
    </div>
</template>

<script>
export default {
    props: ['value'], // #1
    methods: {
        nameChanged(isFirst, event) {
            let name = '';
            if(isFirst) {
                name = event.target.value + ' ' + this.lname;
            }
            else {
                name = this.fname + ' ' + event.target.value;
            }
            this.value = name;
            this.$emit('input', this.value);
        }
    },
    computed: {
        fname() {
            return this.value.split(" ")[0];
        },
        lname() {
            return this.value.split(" ")[1];
        }
    }
}
/**
 * 1. the attribute 'value'
 */
</script>

<style lang="scss" scoped>
    .fullname {
        align-items: flex-start;        
        display: flex;
        flex-direction: column;
    }
</style>