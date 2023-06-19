<template>
  <div id="search"></div>
</template>
<script>
import * as echarts from "echarts";
import Vue from "vue";

export default {
  data: function () {
    return {

      option: {
        title: {
          text: "操作系统",
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
          top: "bottom",
          left: "center",
        },
        series: [
          {
            name: "操作系统",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
            ],
          },
        ],
      },
    };
  },
  mounted: function () {
    var myChart = echarts.init(document.getElementById("search"));
    var that = this;
    //console.log(this.$store.state.logid);
    this.$axios.post("http://localhost:8081/log/client",this.$store.state.logid,{
          headers: {
            'Content-Type':'application/json'
          }
    }).then(function(response){
      console.log(response.data);
      for(var i = 0;response.data[i]!=null;i++){
        that.option.series[0].data[i] = {name:"",value:0};
        that.option.series[0].data[i].name = response.data[i][0];
        that.option.series[0].data[i].value = response.data[i][1];
      }
      // console.log(that.option.series[0].data);
      that.option = { ...that.option };
      myChart.setOption(that.option);
    })
  },
};
</script>
<style scoped>
#search {
  width: 100%;
  height: 100%;
}
</style>