<template>
    <div>
        <Navbar title="短网址生成"/>
        <div class="container container-WithNavbar">
                <van-field
                    maxlength="100"
                    v-model="url.src"
                    rows="1"
                    type="textarea"
                    placeholder="请输入需要转换的网址"
                    show-word-limit
                    clearable
                />
                <van-button slot="button" size="small" type="primary" @click="submit">开始转换</van-button>
                <van-field
                    v-model="url.tgt"
                    rows="1"
                    type="textarea"
                    placeholder="结果"
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
                // console.log(res)
                this.$toast.success('成功');
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