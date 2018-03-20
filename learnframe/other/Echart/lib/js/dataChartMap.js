/*
 * @Author: Watermelon.Mo 
 * @Date: 2018-03-19 19:13:11 
 * @Last Modified by: Eva.Wu
 * @Last Modified time: 2018-03-19 22:21:10
 */

/**
* 获取地图配置Option
*/
function getMapOption(type,mapType) {
  let max = 480,
  min = 9; // todo 
  let maxSize4Pin = 100,
  minSize4Pin = 50;
  let data = getCityData();
  let seriesData = getSeriesData(type,data,mapType); 
  let mapOption = {
    backgroundColor: '#fff',
    title: {
      text: '全国主要城市空气质量',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      x:'center',
      textStyle: {
          color: '#404a59'
      }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['symbol'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 200,
        calculable: true,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#bce8f1',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#bce8f1'
            }
        }
    },
    series: seriesData
  };
  return mapOption;
}