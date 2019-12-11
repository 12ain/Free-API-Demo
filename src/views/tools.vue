<template>
    <div class="main">
        <van-nav-bar title="轻量小工具"/>
        <div class="container">
            <van-grid>
                <van-grid-item
                    v-for="item in features"
                    :key="item.id"
                    :icon="item.icon"
                    :text="item.name"
                    :to="item.path"
                />
            </van-grid>
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
            features:[
                {
                    id: 0,
                    name: '翻译',
                    icon: 'failure',
                    path: '/translate',
                },
                {
                    id: 1,
                    name: 'Base64编码转换',
                    icon: 'failure',
                    path: '',
                },
                {
                    id: 2,
                    name: '短链接生成及还原',
                    icon: 'failure',
                    path: '',
                },
                {
                    id: 3,
                    name: '归属地查询',
                    icon: 'failure',
                    path: '',
                },
                {
                    id: 4,
                    name: '计算器',
                    icon: 'failure',
                    path: '',
                },
                {
                    id: 5,
                    name: '快递查询',
                    icon: 'failure',
                    path: '',
                },
                {
                    id: 6,
                    name: 'ip地址查询',
                    icon: 'failure',
                    path: '',
                },
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
    background-color: #CCCCFF;
}
.van-nav-bar{
    background-color: #CCCCFF;
}


</style>
