<template>
    <div>
        <van-tabbar 
        route 
        fixed 
        safe-area-inset-bottom 
        active-color="#07c160"
        inactive-color="#000"
        >
            <van-tabbar-item
            replace
            to="/table"
            icon="home-o"
            >
            课程表
            </van-tabbar-item>
            <van-tabbar-item
            replace
            to="/clock"
            icon="underway-o"
            >
            番茄时钟
            </van-tabbar-item>
            <van-tabbar-item
            replace
            to="/tools"
            icon="diamond-o"
            >
            工具
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            active: 0,
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

    },
};
</script>

<style scoped lang="scss">

</style>
