import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      title: {
        display: true,
        text: 'Custom Chart Title'
      }
    }
  },
  mounted () {
    console.log(this.chartData)
    // Chart.defaults.global.defaultFontColor = 'red'
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}
