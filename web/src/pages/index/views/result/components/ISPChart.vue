<template>
  <div>
    <img src="../../../assets/image/14.png" alt="图片" class="img"/>
  </div>
</template>
<script>
import * as echarts from "echarts";
import Vue from "vue";

export default {
  data: function () {
    return {
      imageUrl:"../../../assets/image/1.png",
      option: {
        title: {
          text: "运营商",
          left: "center",
          top: "5%",
          textStyle: {
            fontSize: "14",
            color: "#666",
          },
        },
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              fontSize: "14",
            },
          },
          data: [],
        },
        xAxis: {},
        series: [
          {
            name: "运营商",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("ip"));
    var that = this;
    this.$axios.post("http://localhost:8081/log/isp",this.$store.state.logid
    ,{
          headers: {
            'Content-Type':'application/json'
          }
    }
    ).then(function(response){
      console.log(response.data);
      for(var i = 0;response.data[i]!= null;i++){
        // that.option.series[0].data[i] = {name:"",value:0};
        that.option.yAxis.data[i] = response.data[i][0];
        that.option.series[0].data[i] = response.data[i][1];
      }
      console.log(that.option.series[0].data);
      that.option = { ...that.option };
      myChart.setOption(that.option);
     })
  },
};
</script>
<style scoped>
#ip {
  width: 100%;
  height: 100%;
}
.img{
  width:860px;
  height:400px;
}
</style>