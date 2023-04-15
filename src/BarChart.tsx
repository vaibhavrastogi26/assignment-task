import ReactECharts from 'echarts-for-react';
import data from './Wine-Data.json'

const BarChart = () => {
  // Filter out the alcohol categories
  const alcoholCategories = data.map(ele => ele['Alcohol']).filter((item, pos, self) => self.indexOf(item) === pos)
  // Find the minimum Magnesium value for each alcohol category
  const minimumMagnesium = alcoholCategories.map(item => data.filter(ele => ele['Alcohol'] === item).map(ele => ele['Magnesium'])).map(item => Math.min(...item))
  const options = {
    title: {
      text: 'Bar Chart - Minimum Magnesium Value corresponding to each Alcohol Category '
    },
    xAxis : { 
      type: 'category',
      data: alcoholCategories,
      name: 'Alcohol Category'
    },
    yAxis: {
      type: 'value',
      name: 'Minimum Magnesium Value'
    },
    series: [
      {
        data: minimumMagnesium,
        type: 'bar',
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

export default BarChart;