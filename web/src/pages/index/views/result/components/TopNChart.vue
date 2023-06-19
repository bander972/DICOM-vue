<template>
  <div>
    <img src="../../../assets/image/0.png" alt="图片" class="img"/>
  </div>
</template>
<script>
import * as echarts from "echarts";
import Vue from "vue";

export default {
  data: function () {
    return {
      option: {
        title: {
          text: "TopN",
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
        series: [
          {
            name: "topN",
            type: "pie",
            radius: ['40%', '70%'],
            center: ["50%", "50%"],
            // roseType: "area",
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              // { value: 40, name: "rose 1" },
              // { value: 38, name: "rose 2" },
              // { value: 32, name: "rose 3" },
              // { value: 30, name: "rose 4" },
              // { value: 28, name: "rose 5" },
              // { value: 26, name: "rose 6" },
              // { value: 22, name: "rose 7" },
              // { value: 18, name: "rose 8" },
            ],
          },
        ],
      },
    };
  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("topN"));
    var that = this;
    this.$axios.post("http://localhost:8081/log/topN",this.$store.state.logid
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
      myChart.setOption(that.option);
     })
  },
};
</script>
<style scoped>
#topN {
  width: 100%;
  height: 100%;
}

.img{
  width:860px;
  height:400px;
}
</style>
