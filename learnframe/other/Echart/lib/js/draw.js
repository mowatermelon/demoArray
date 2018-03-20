/*
 * @Author: Watermelon.Mo 
 * @Date: 2018-03-16 10:27:05 
 * @Last Modified by: Eva.Wu
 * @Last Modified time: 2018-03-19 22:44:10
 */

"use strict"

/**
 * 绘制相关图表数据
 */

function drawChart(id,type,mapType){
  let dom = document.getElementById(id);
  let myChart = echarts.init(dom);
  let option = {};
  switch(type){
      case 0:{
        // option = getMapOption("bubble",mapType);//地图的symbol是以冒泡形式出现
        option = getMapOption("pin",mapType);//地图的symbol是以圆球形式出现        
        break;
      }
      case 1:{
        option = getBarOption("join");
        break;
      }
      case 2:{
        option = getBarOption("up");
        break;
      }
  }

  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
}

/**
 * 转译城市地址到点坐标的转化
 */
function convertData(data) {
  let res = [];
  let geoCoordMap = getGeoCoord();
  for (let i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
          res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
          });
      }
  }
  return res;
};

/**
 * 页面插入实时数据
*/
function drawList(id){
  let dom = document.getElementById(id);
  let data = getListData();
  let res = '';
  for(let i = 0;i<data.length;i++){
    res += '<li class="item">';
    res += '   <label class="item-label">';
    res += data[i].name;    
    res += '   </label>';
    res += '   <span>';
    res += data[i].name+"总量";    
    res += '   </span>';
    res += '   <span class="count">';
    res += "19，786";    
    res += '   <span>';
    res += "件";    
    res += '   </span>';
    res += '</li>';
  }
  dom.innerHTML = res;

}