<template>
    <div class="main">
        <van-nav-bar title="轻量小工具"/>
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
    background-color: #CCCCFF;
}
.van-nav-bar{
    background-color: #CCCCFF;
}


</style>
