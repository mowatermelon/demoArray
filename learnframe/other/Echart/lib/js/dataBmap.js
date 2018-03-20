/*
 * @Author: Watermelon.Mo 
 * @Date: 2018-03-19 19:12:01 
 * @Last Modified by: Eva.Wu
 * @Last Modified time: 2018-03-19 21:54:40
 */

/**
* 获取地图配置Option
*/
function getMapOption(type,mapType){
  let data = getCityData();
  let seriesData = getSeriesData(type,data,mapType); 
  let mapOption = {
      title: {
          text: '全国主要城市空气质量',
          subtext: 'data from watermelon.in',
          x:'center',
          textAlign: 'center',
          textStyle: {
              color: '#3a87ad'
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
              color: '#3a87ad'
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
              color: '#3a87ad'
          }
      },
      bmap: {
        center: [110.114129, 32.550339],
        zoom: 7,
        roam: true,
        mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
      },
      series: seriesData
  };
  return mapOption;
}
