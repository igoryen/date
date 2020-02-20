<template>
    <div class="component book">
        <h1>The Book Component</h1>
        <p>I'm an awesome Book!</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-book-detail></app-book-detail>
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
