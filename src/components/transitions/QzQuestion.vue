<template>
    <div class="question">
        <h3>{{ q }}</h3>
        <div class="btns">
            <button @click="onresp(btnData[0].cqt)">{{ btnData[0].resp }}</button>
            <button @click="onresp(btnData[1].cqt)">{{ btnData[1].resp }}</button>
            <button @click="onresp(btnData[2].cqt)">{{ btnData[2].resp }}</button>
            <button @click="onresp(btnData[3].cqt)">{{ btnData[3].resp }}</button>
        </div>
    </div>
</template>

<script>
const ADD_MO = 1; // addition mode
const SUB_MO = 2; // subtraction mode
export default {
    data() {
        return {
            q: 'Oops, an error occured!', // q = question
            btnData: [
                { cqt: true,  resp: 0 },
                { cqt: false, resp: 0 },
                { cqt: false, resp: 0 },
                { cqt: false, resp: 0 }
            ]
        };
    },
    methods: {
        genq() { // genq = generate question
            const num1 = this.grn(1, 100);
            const num2 = this.grn(1, 100);
            const mono = this.grn(1, 2); // mo+no = mode number
            
            let ans = 0; // ans = answer

            switch( mono ) {
                case ADD_MO:
                    ans = num1 + num2;
                    this.q = `What is ${num1} + ${num2}?`;
                    break;
                case SUB_MO: 
                    ans = num1 - num2;
                    this.q = `What is ${num1} - ${num2}?`;
                    break;
                default:
                    ans = 0;
                    this.q = 'Oops, an error occured :/';
            }

            this.btnData[0].resp = this.grn(ans-10, ans+10, ans);
            this.btnData[0].cqt = false;
            this.btnData[1].resp = this.grn(ans-10, ans+10, ans);
            this.btnData[1].cqt = false;
            this.btnData[2].resp = this.grn(ans-10, ans+10, ans);
            this.btnData[2].cqt = false;
            this.btnData[3].resp = this.grn(ans-10, ans+10, ans);
            this.btnData[3].cqt = false;

            const cqtbtn = this.grn(0,3);
            this.btnData[cqtbtn].cqt = true;
            this.btnData[cqtbtn].resp = ans;
        },
        grn( min, max, exc) { // generate random number, exc = except
            const rn = Math.round(Math.random() * (max-min)) + min; // rn = random number
            console.log('min: ' + min + ', max: ' + max + ', rn: ' + rn);
            if( rn == exc ) {
                return this.grn(min,max,exc);
            }
            return rn;
        },
        onresp( iscqt ) { // on+resp = on response
            this.$emit('replied', iscqt);
        }
    },
    created() {
        this.genq();
    }
}
</script>

<style lang="scss" scoped>
    .question {
        background-color: antiquewhite;
        margin: auto;
        max-width: 200px;
        padding: 1em;
    }
    .btns {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        button {
            margin: 3% 10%;
            width: 3em;            
        }
    }

</style>