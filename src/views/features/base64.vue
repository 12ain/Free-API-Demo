<template>
    <div>
        <Navbar title="Base64加密与解密"/>
        <div class="container container-WithNavbar">
            <van-field
                maxlength="100"
                v-model="code.src"
                rows="1"
                type="textarea"
                placeholder="明文"
                show-word-limit
                clearable
            />
            <div class="button-group">
                <van-button slot="button" size="small" type="primary" @click="encode">加密</van-button>
                <van-button slot="button" size="small" type="primary" @click="decode">解密</van-button>
            </div>
            <van-field
                v-model="code.target"
                rows="1"
                type="textarea"
                placeholder="密文"
            />
        </div>
    </div>
</template>

<script>
import Navbar from '../../components/Navbar'
export default {
    props: {

    },
    data() {
        return {
            code:{
                src:'',
                target: '',
            }
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        encode(){
            console.log('加密')
            this.code.target = btoa(this.code.src)
        },
        decode(){
            console.log('解密')
            this.code.src = atob(this.code.target)
        },
    },
    components: {
        Navbar
    },
};
</script>

<style scoped lang="scss">
.button-group{
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
}
</style>
