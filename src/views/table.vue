<template>
    <div class="main">
        <van-nav-bar title="课程表"/>
        <div class="container">
            <!-- <iframe
            scrolling="no" 
            frameborder="0" 
            height="15px"
            width="100%"
            allowtransparency="true" 
            src="//i.tianqi.com/index.php?c=code&id=11&icon=1&site=12"
            style="margin-top:10px">
            </iframe> -->
            <van-card
                centered
                v-for="item in classData"
                :key="item.id"
                :title="item.name"
                :desc="item.teacher"  
                :price="item.address"
                currency=""
                thumb="https://iph.href.lu/90x90?text=%E6%9C%89%E8%AF%BE&bg=FF9999"
                >
                <div slot="num">
                    {{ item.time }}
                </div>
            </van-card>
                
        </div>
        <Tabbar/>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'

export default {
    props: {

    },
    data() {
        return {
            classData:[
                {
                    id: 0,
                    name: '前端框架应用',
                    address: '2610',
                    time: '10:20 - 12:00',
                    teacher: '李老师',
                },
                {
                    id: 1,
                    name: 'Android程序设计',
                    address: '2608',
                    time: '08:25 - 10:05',
                    teacher: '于老师',
                }
            ]
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
        Tabbar
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
