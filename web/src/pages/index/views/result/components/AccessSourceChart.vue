<template>
  <div id="source"></div>
</template>
<script>
import * as echarts from "echarts";
import Vue from "vue";

export default {
  data: function () {
    return {
      option: {
        title: {
          text: "访问方式",
          left: "center",
          top: "5%",
          textStyle: {
            fontSize: "14",
            color: "#666",
          },
        },toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "方式",
            type: "pie",
            radius: "50%",
            data: [
              //  { name: "Search Engine",value: 1048},
              // { name: "Direct",value: 735 },
              // // { value: 580, name: "Email" },
              // { value: 484, name: "Union Ads" },
              // { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("source"));
    var that = this;
    this.$axios.post("http://localhost:8081/log/source",this.$store.state.logid
    ,{
          headers: {
            'Content-Type':'application/json'
          }
    }
    ).then(function(response){
      console.log(response.data);
      for(var i = 0;response.data[i]!= null;i++){
        that.option.series[0].data[i] = {name:"",value:0};
        that.option.series[0].data[i].name = response.data[i][0];
        that.option.series[0].data[i].value = response.data[i][1];
      }
      //console.log(that.option.series[0].data);
      that.option = { ...that.option };
      myChart.setOption(that.option);
     })
  },
};
</script>
<style scoped>
#source {
  width: 100%;
  height: 100%;
}
</style>