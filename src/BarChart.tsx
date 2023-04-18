import ReactECharts from 'echarts-for-react';
import data from './Wine-Data.json'

const BarChart = () => {
  // Filter out the alcohol categories (unique category using Set())
  const alcoholCategories = [...new Set(data.map(item => item['Alcohol']))]
  // Find the minimum Magnesium value for each alcohol category (Reduced time complexity from O(n^2) to O(n))
  const arr: any = alcoholCategories.map(item => ([])) //Declared an empty array of arrays with length of 'alcoholCategories'
  data.map(item => arr[item['Alcohol'] - 1].push(item['Magnesium'])) //Added values of magnesium in the empty arrays category-wise
  const minimumMagnesium = arr.map((item: any) => Math.min(...item))
  const options = {
    title: {
      text: 'Bar Chart - Minimum Magnesium Value corresponding to each Alcohol Category '
    },
    xAxis: {
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