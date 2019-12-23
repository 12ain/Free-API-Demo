<template>
    <div>
        <Navbar title="轻松一刻"/>
        <div class="container container-WithNavbar">
            
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
            url:{
                src: '',
                tgt: '',
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
        submit(){
            
            this.http.get(
                this.api.features.shorturl + 
                '&dwzapi=urlcn' + '&url=' + this.url.src, 
            res => {
                if (res.data.code == '1') {
                // 请求成功的处理
                this.url.tgt = res.data.ae_url

                this.$toast.success('成功');
                // console.log(res)
                } else {
                // 返回错误的处理
                this.$toast(res.data.msg)
                console.log('error' + res)
                }
            })
        }
    },
    components: {
        Navbar
    },
};
</script>

<style scoped lang="scss">
</style>