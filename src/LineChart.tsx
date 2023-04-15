import ReactECharts from 'echarts-for-react';
import data from './Wine-Data.json'

const LineChart = () => {
  const options = {
    title: {
      text: 'Line Chart - "Ash" vs “Flavanoids”'
    },
    // “Flavanoids” on the horizontal axis
    xAxis : { 
      type: 'category',
      data: data.map(ele => ele['Flavanoids']),
      name: 'Flavanoids'
    },
    // “Ash” on the vertical axis
    yAxis: {
      type: 'value',
      name: 'Ash'
    },
    series: [
      {
        data: data.map(ele => ele['Ash']),
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    }
  };

  return <ReactECharts option={options} />;
};

export default LineChart;