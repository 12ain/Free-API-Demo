<template>
  <div class="main">
    <van-nav-bar title="番茄时钟" />
    <div class="container">
      <div class="clock">
        <h2 class="clock-title">{{ status }}</h2>
        <h2 class="clock-time">
          <span class="time-minute">{{ minute }}</span
          >:
          <span class="time-second">{{ second }}</span>
        </h2>
        <span class="clock-back"></span>
      </div>
      <div class="setting">
        <div class="item">
        番茄时长:
        <van-stepper
        v-model="tomatoMinute" 
        step="1"  
        min="01" 
        max="60" 
        :disabled="isStart" 
        />
        </div>
        <div class="item">
        休息时长:
        <van-stepper 
        v-model="restMinute" 
        step="1"  
        min="01" 
        max="60" 
        :disabled="isStart" 
        />
        </div>
        <van-button type="primary" @click="choose()" class="btn">开始/暂停</van-button>
      </div>
      
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";

export default {
  props: {},
  data() {
    return {
      isStart: false, //开关
      flag: 0, //状态判断, 0表示停止,1表示番茄时间,2表示休息时间
      tomatoMinute: "05", // 番茄时间
      restMinute: "05",  // 休息时间
      minute: '05', // 当前运行时间
      second: '00', // 秒
      clock:'',  // 定时器
      status: 'Session',
    };
  },
  computed: {},
  created() {
  },
  mounted() {},
  watch: {
  },
  methods: {
    start() {
      this.isStart = true  // 开启时钟
      if(!this.flag){
          this.flag = 1
        }
        if (this.flag == 1) {
            this.minute = this.tomatoMinute;
            this.status = 'Session'
            console.log('开始番茄')
          }
        if(this.flag == 2) {
            this.minute = this.restMinute;
            this.status = 'Rest Time'
            console.log('开始休息')
          }
      this.clock = setInterval(() => {
          if (this.second == "" || this.second == '00') {
                this.second = "60";
                this.minute--;
                console.log('一分钟过去了')
              }
              this.second --
          if (this.minute == "" && this.second == "") {
            if (this.flag == 1) {
              this.flag = 2
              console.log('状态切换')
            }
            else{
              this.flag = 1
            }
            clearInterval(this.clock)
            this.start()
          }
      }, 1000);
    },
    stop() {
      clearInterval(this.clock)
      this.isStart = false
      this.flag = 0
      console.log('停止运行')
    },
    choose(){
      if(!this.isStart)
        this.start();
        else{
        this.stop()
        }
    }
  },
  components: {
    Tabbar
  }
};
</script>

<style scoped lang="scss">
/deep/ .van-tabbar-item {
  background-color: #ffffcc;
}
.van-nav-bar {
  background-color: #ffffcc;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  .clock {
    position: relative;
    width: 250px;
    height: 250px;
    margin-top: 30px;
    border: solid 5px;
    border-radius: 50%;
    border-color: #ffffcc;
    cursor: pointer;
    overflow: hidden;
    text-align: center;
    align-self: center;
    .clock-title {
      width: 50%;
      position: absolute;
      left: 30%;
      top: 30%;
      align-self: center;
    }
    .clock-time {
      position: absolute;
      left: 40%;
      top: 45%;
    }
    .clock-back {
      z-index: -1;
      display: inline-flex;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #ffffcc;
      width: 100%;
      height: 30%;
    }
  }
  .setting{
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 20px;
    .item{
      display: inline-flex;
      align-self: center;
      margin: 20px 0;
    }
    .btn{
      width: 50%;
      align-self: center;
      margin: 20px 0;
    }
  }
}
</style>
