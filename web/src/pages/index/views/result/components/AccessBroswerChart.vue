<template>
  <div id="b"></div>
</template>
<script>
import * as echarts from "echarts";
import Vue from "vue";

export default {
  data: function () {
    return {
      option: {
        title:{
          text: "浏览器占比",
          left: "center",
          top: "5%",
          textStyle: {
            fontSize: "14",
            color: "#666",
          },
        },      toolbox: {
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

        series: [
          {
            name: "浏览器",
            type: "pie",
            radius: "50%",
            data: [
            //  { name: "chrome", value: "100" }
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

  created(){

  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById("b"));
    var that = this;
    this.$axios.post("http://localhost:8081/log/browser",this.$store.state.logid
    ,{
          headers: {
            'Content-Type':'application/json'
          }
    }
    ).then(function(response){
      //console.log(response.data);
      for(var i = 0;response.data[i]!= null;i++){
        that.option.series[0].data[i] = {name:"",value:0};
        that.option.series[0].data[i].name = response.data[i][0];
        that.option.series[0].data[i].value = response.data[i][1];
      }
      //console.log(that.option.series[0].data);
      that.option = { ...that.option };
      myChart2.setOption(that.option);
     })
  },
};
</script>
<style scoped>
#b {
  width: 100%;
  height: 100%;
}
</style>