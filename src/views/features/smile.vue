<template>
    <div>
        <Navbar title="轻松一刻"/>
        <div class="container container-WithNavbar">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="container">
                <!-- 这里可以弄一个组件或者默认样式，显示暂无数据加一张图片 -->
                    <div v-if='noData'>
                        暂无数据
                    </div>
                    <template v-else>
                        <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="- 没有更多了 -"
                            @load="onLoad"
                            :offset="130"
                        >
                            <van-panel 
                            v-for="item in jokeList" 
                            :key=item.hashId
                            :title="item.content" 
                            :desc="item.updatetime" 
                            >
                            </van-panel>
                        
                        </van-list>
                        
                        <!-- <van-pagination 
                        v-model="currentPage" 
                        :total-items="200" 
                        :items-per-page="5"
                        @change="this.getJokes"
                        /> -->
                    </template>
                </div>
            </van-pull-refresh>
            
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
            jokeList: [],
            page: 1,
            loading: false, // 当loading为true时，转圈圈
            finished: false, // 数据是否请求结束，结束会先显示- 没有更多了 -
            myList:[],
            noData: false, // 如果没有数据，显示暂无数据
            isLoading:false // 下拉的加载图案
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
        getJokes(){
            this.http.get(
                this.api.features.smile + 
                '&pagesize=10' + 
                '&page=' + this.page, 
            res => {
                if (res.data.status.code == '200') {
                // 请求成功的处理
                this.loading = false
                this.page++
                this.jokeList = res.data.data
                this.finished = true
                } else {
                // 返回错误的处理
                this.$toast(res.data.status.message)
                console.log(res)
                this.noData = true
                }
            })
        },
        onLoad () {
        setTimeout(() => {
            this.getJokes()
            this.loading = true
        }, 500)
    },
    onRefresh () {
        setTimeout(() => {
        // 重新初始化这些属性
        this.isLoading = false
        this.myList = []
        // this.page = 1
        this.loading = false
        this.finished = false
        this.noData = false
        // 请求信息
        this.getJokes()
    }, 500)
    }
    },
    components: {
        Navbar
    },
};
</script>

<style scoped lang="scss">
</style>