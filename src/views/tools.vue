<template>
    <div class="main">
        <van-nav-bar title="轻量小工具"/>
        <div class="container">
            <van-grid
            :column-num="2"
            >
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
                    icon: 'smile-o',
                    path: '/translate',
                },
                {
                    id: 1,
                    name: 'Base64',
                    icon: 'smile-o',
                    path: '/base64',
                },
                {
                    id: 2,
                    name: '短网址生成',
                    icon: 'smile-o',
                    path: '/shorturl',
                },
                {
                    id: 3,
                    name: '轻松一刻',
                    icon: 'smile-o',
                    path: '/smile',
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
