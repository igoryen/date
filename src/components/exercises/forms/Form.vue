<template>
    <div class="ex-form">
        
        <div class="form" v-if="!submitted">            
            <form action="">
                <strong>form</strong>
                <app-full-name v-model="fullName"></app-full-name>
                <label>Email: <input type="text" v-model="email"></label>
                <label>Password: <input type="password" v-model="pwd"></label>
                <div>
                    <label for=""><input type="radio" name="" id="" value="yes" v-model="storeData" checked></label>
                    <label for=""><input type="radio" name="" id="" value="no"  v-model="storeData"></label>
                </div>
                <button type="submit" @click.prevent="submitted = true">Submit the form</button>
            </form>
        </div>
        <div class="data" v-if="submitted">
            <strong>Your data</strong>
            <p>Full Name: {{ fullName }}</p>
            <p>Email: {{ email }}</p>
            <p>Password: {{ pwd }}</p>
            <p>Store in DB? {{ storeData }}</p>
        </div>

        
    </div>
</template>

<script>
import FullName from './FullName.vue';
export default {
    data() {
        return {
            fullName: 'igor entaltsev',
            email: '',
            pwd: '',
            storeData: 'yes',
            submitted: false

        }
    },
    components: {
        appFullName: FullName
    }
}
</script>

<style lang="scss" scoped>
.ex-form {
    width: 100%;
    .form {
        background-color: antiquewhite;
    }
    form {
        align-items: flex-start;        
        display: flex;
        flex-direction: column;
        padding: 3px;
    }
    .data {
        background-color: lavenderblush;
        padding: 3px;
        text-align: left;
    }
}
    
</style>