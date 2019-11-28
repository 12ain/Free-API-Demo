<template>
    <div class="main">
        <van-nav-bar title="学习备忘录"/>
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
    background-color: #FFFFCC;
}
.van-nav-bar{
    background-color: #FFFFCC;
}

</style>
