<template>
    <div>
        <Navbar title="翻译"/>
        <div class="container container-WithNavbar">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value" :options="option" />
            </van-dropdown-menu>

            
                <van-field
                    maxlength="100"
                    v-model="word.src"
                    rows="1"
                    type="textarea"
                    placeholder="请输入翻译内容"
                    show-word-limit
                    clearable
                />
                <van-button slot="button" size="small" type="primary" @click="submit">点击翻译</van-button>
                <van-field
                    readonly
                    v-model="word.tgt"
                    rows="1"
                    type="textarea"
                    placeholder="结果显示区"
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
            value: 'AUTO',
            option: [
            {text:'自动选择', value: 'AUTO'},
            {text:'中文 - 英语', value: 'ZH_CN2EN'}, 
            {text:'中文 - 日语', value: 'ZH_CN2JA'}, 
            {text:'中文 - 韩语', value: 'ZH_CN2KR'}, 
            {text:'中文 - 法语', value: 'ZH_CN2FR'}, 
            {text:'中文 - 俄语', value: 'ZH_CN2RU'}, 
            {text:'中文 - 西语', value: 'ZH_CN2SP'}, 
            {text:'英语 - 中文', value: 'EN2ZH_CN'}, 
            {text:'日语 - 中文', value: 'JA2ZH_CN'}, 
            {text:'韩语 - 中文', value: 'KR2ZH_CN'}, 
            {text:'法语 - 中文', value: 'FR2ZH_CN'}, 
            {text:'俄语 - 中文', value: 'RU2ZH_CN'}, 
            {text:'西语 - 中文', value: 'SP2ZH_CN'}, 
            ],
            word:{
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
            this.http.get(this.api.features.translate + '&type=AUTO&i=计算', 
            res => {
                if (res.success) {
                console.log(res)
                } else {
                // 返回错误的处理
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
