<template>
    <div class="component book">
        <h1>The Book Component</h1>
        <p>I'm an awesome Book!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is: <span class="flash" v-bind:class="{ 'flare': isFlare}">{{ name2 }}</span></p>
        <p>Released: {{ age2 }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-book-detail
                    v-bind:name1="name2"
                    @nameGotReset="name2 = $event"
                    v-bind:resetFunc="resetName"
                    :pRelDate="age2"
                ></app-book-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-book-edit
                    :pRelDate="age2"
                    @relDateGotEdited="age2 = $event"
                ></app-book-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import BookDetail from './BookDetail.vue';
    import BookEdit from './BookEdit.vue';

    export default {
        data() {
            return {
                name2: 'Math',
                age2: 1991,
                isFlare: false
            };
        },
        methods: {
            changeName() {
                this.name2 = 'Physics',
                this.isFlare = true,
                setTimeout(() => {
                    this.isFlare = false
                }, 1000)
            },
            resetName() {
                this.name2 = 'Math'
            }
        },
        components: {
            appBookDetail: BookDetail,
            appBookEdit: BookEdit
        }
    }
</script>

<style lang="scss">
    
</style>
