<template>
  <div id="app">
    <ul class="charts">
      <!-- <el-form id="resForm">
        <el-form-item height="10" label="日志编号：">
          <el-col span="8"><label>{{logid}}</label></el-col></el-form-item> -->
          <label>DICOM文件编号：{{logid}}</label>
          <el-card class="box-card" shadow="hover">  <div slot="header" class="clearfix">
          <span>检测结果</span></div>
          <li><ISPChart /></li>
          </el-card>


          <el-card class="box-card" shadow="hover">  <div slot="header" class="clearfix">
          <span>检测结果2</span></div>
          <li><TopNChart /></li>
          </el-card>


          <el-card class="box-card" shadow="hover">  <div slot="header" class="clearfix">
          <span>分割结果</span></div>
          <li><AccessTimeChart /></li>
          </el-card>             
      <!-- </el-form> -->
    </ul>  
  </div>

 
</template>
<script>
import ISPChart from './components/ISPChart.vue'
import TopNChart from './components/TopNChart.vue'
import AccessTimeChart from './components/AccessTimeChart.vue'
import AccessSourceChart from './components/AccessSourceChart.vue'
import SearchEnginesChart from './components/SearchEnginesChart.vue'
import AccessOSChart from './components/AccessBroswerChart.vue'
import AccessAreaChart from './components/AccessAreaChart.vue'
export default {
  name: 'Result',
  data(){
    return{
      logid : this.$store.state.logid,
    }
  },
  components: {
    AccessAreaChart,
    ISPChart,
    TopNChart,
    AccessTimeChart,
    AccessSourceChart,
    SearchEnginesChart,
    AccessOSChart
  },
  
  created(){
    // this.$axios.post('http://localhost:8081/log/connection').then(Response=>{
    //   console.log(Response);
    // })
  },
 mounted() {
    
  },
  // 里面的函数只有调用才会执行
  methods: {
    // getArea(){
    //   this.chart = Chart.init(this.$refs.Areachart)
    //   this.chart.setOption(this.AREAoption)
    // },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.logid{
  font-size: 24px
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 900px;
    height: 500px;
  }
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
.stbox {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.ip{
    width: 500px;
    height: 300px;
}
.charts{
  width: 1000px;
  list-style: none;
  margin: 0 auto;
  overflow: hidden;
}
.charts li{
  width: 400px;
  height: 600px;
  float: left;
  background-color: white;
  margin-bottom: 10px;
  overflow: hidden;
  border: 1px solid #d3d3d3;
}
.charts li:nth-child(2){
  margin-left: 10px;
}
.charts li:nth-child(3){
  margin-left: 10px;
}
.charts li:nth-child(5){
  margin-left: 10px;
}
.charts li:nth-child(6){
  margin-left: 10px;
} 
.charts li:nth-last-child(1){
  width: 100%;
  height: 400px;
}
body{
    background-color: #f5f5f5;
}
</style>
