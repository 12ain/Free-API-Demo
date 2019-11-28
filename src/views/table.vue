<template>
    <div class="main">
        <van-nav-bar title="课程表"/>
        <div class="container">
            <van-card
                centered
                title="前端框架应用"
                desc="李老师"  
                price="2608"
                currency=""
                thumb="https://iph.href.lu/90x90?text=%E6%9C%89%E8%AF%BE&bg=FF9999"
                v-for="item in 4"
                :key="item"
                >
                <div slot="num">
                    10:20-12:00
                </div>
            </van-card>
                
        </div>
        <tabbar/>
    </div>
</template>

<script>
import tabbar from '@/components/tabbar'

export default {
    props: {

    },
    data() {
        return {

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

    },
    components: {
        tabbar
    },
};
</script>

<style scoped lang="scss">
/deep/ .van-tabbar-item{
    background-color: #8CF5CE;
}
.van-nav-bar{
    background-color: #8CF5CE;
}
</style>
