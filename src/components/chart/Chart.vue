<template>
    <div ref="chartRef" class="chart"></div>
</template>

<script setup>
  import {chart} from 'echarts'
  import {ref,onMounted,onUnmounted} from "vue"
  let chartRef=ref()
  let myChart
  onUnmounted(()=>{
      myChart.dispose()
      myChart=null
  })
  onMounted(()=>{
      myChart=chart.init(chartRef.value)
      const option={
          tooltip:{
              trigger:"item"
          },
          color:['#ffd666',"#ffa39e","#409EFF"],
          series:[
              {
                  name:"游戏生涯",
                  type:"pie",
                  radius:"70%",
                  data:[
                      {
                          value:43340,name:"王者"
                      },
                      {
                          value:7003,name:"lol"
                      },
                      {
                          value:4314,name:"原神"
                      }
                  ]
              }
          ]
      }
      myChart.setOption(option)
  })
</script>

<style scoped>
    .chart{
        height: 300px;
    }
</style>