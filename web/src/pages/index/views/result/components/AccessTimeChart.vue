<template>
  <div id="time"></div>
</template>
<script>
import * as echarts from "echarts";
import Vue from "vue";

export default {
  data: function () {
    return {
      option: {
        title: {
          text: "访问时间",
          left: "center",
          top: "5%",
          textStyle: {
            fontSize: "14",
            color: "#666",
          },
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "时间",
            data: [],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("time"));
    var that = this;
    this.$axios.post("http://localhost:8081/log/time",this.$store.state.logid
    ,{
          headers: {
            'Content-Type':'application/json'
          }
    }
    ).then(function(response){
      //console.log(response.data);
      for(var i = 0;response.data[i]!= null;i++){
        that.option.series[0].data[i] = {name:"",value:0};
        that.option.xAxis.data[i] = response.data[i][0];
        that.option.series[0].data[i] = response.data[i][1];
      }
      //console.log(that.option.series[0].data);
      that.option = { ...that.option };
      myChart.setOption(that.option);
     })
  },
};
</script>
<style scoped>
#time {
  width: 100%;
  height: 100%;
}
</style>