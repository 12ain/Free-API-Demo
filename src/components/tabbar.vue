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
            to="/learn"
            icon="bookmark-o"
            >
            学习备忘录
            </van-tabbar-item>
            <van-tabbar-item
            replace
            to="/eat"
            icon="smile-o"
            >
            吃饭
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
