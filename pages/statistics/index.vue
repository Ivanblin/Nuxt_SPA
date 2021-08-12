<template>
  <div class="">
    <h1>Статистика</h1>
    <div class="chart-container">
      <line-chart :chart-data="datacollection" :options="chartOptions"></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from '@/plugins/LineChart.js'

export default {
  layout: 'rootlayout',
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null,
      chartOptions: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      // console.log(this.getRandomInt())
      this.datacollection = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
        type: 'line',
        options: {
          // legend: {
          //   labels: {
          //     // This more specific font property overrides the global property
          //     fontColor: 'red'
          //   }
          // },
          responsive: true,
          title: {
            display: true,
            text: 'Custom Chart Title'
          },
          // maintainAspectRatio: false,
          responsiveAnimationDuration: 3
          // maintainAspectRatio: false,
          // defaultFontColor: '#788DFF',
          // legend: {
          //   labels: {
          //     // This more specific font property overrides the global property
          //     fontColor: '#788DFF'
          //   }
          // }
          // scales: {
          //   yAxes: [{
          //     ticks: {
          //       max: 5,
          //       min: 0,
          //       stepSize: 0.5
          //     }
          //   }]
          // }
        },
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [12, 19, 3, 5, 2, 3, 20],
            pointBackgroundColor: '#fff',
            borderColor: '#788DFF',
            borderWidth: 2,
            fill: false,
            lineTension: 0,
            pointRadius: 3
            // defaultFontColor: '#788DFF'
            // borderDash: [40, 20]
          },
          {
            label: 'Data two',
            backgroundColor: '#EEB969',
            data: [1, -33, 3, 15, 22, 30, 10],
            pointBackgroundColor: '#fff',
            borderColor: '#EEB969',
            borderWidth: 2,
            fill: false,
            lineTension: 0,
            pointRadius: 3,
            responsive: true
            // borderDash: [40, 20]
          }
        ]
      }

      // this.chartOptions = {
      //   scales: {
      //     yAxes: [{
      //       ticks: {
      //         beginAtZero:true
      //       }
      //     }]
      //   }
      // }
    }
    // getRandomInt () {
    //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    // }
  }
}
// export default {
//   layout: 'rootlayout'
// }
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  margin: auto;
  height: 80vh;
  width: 65vw;
}
</style>
