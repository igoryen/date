<template>
    <div class="component book">
        <h1>The Book Component</h1>
        <p>I'm an awesome Book!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is: {{ name2 }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-book-detail
                    v-bind:name1="name2"
                    @nameGotReset="name2 = $event"
                ></app-book-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-book-edit></app-book-edit>
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
                name2: 'Math'
            };
        },
        methods: {
            changeName() {
                this.name2 = 'Physics'
            }
        },
        components: {
            appBookDetail: BookDetail,
            appBookEdit: BookEdit
        }
    }
</script>

<style lang="scss" scoped>
    .component {
        border: 1px solid #333;
        border-radius: 3px;
    }
    .book {
        background-color: lightblue;
        padding: 1em;
    }
</style>
