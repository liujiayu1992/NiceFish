import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duibfx',
  templateUrl: './duibfx.component.html',
  styleUrls: ['./duibfx.component.scss']
})
export class DuibfxComponent implements OnInit {

//仪表盘
  gaugeChart1={
    tooltip : {
      formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
      show: true,
      feature: {
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series : [
      {
        name: '速度',
        type: 'gauge',
        z: 3,
        min: 0,
        max: 1000,
        splitNumber: 5,
        radius: '100%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 25,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          length: 40,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        title : {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 15,
            fontStyle: 'italic'
          }
        },
        detail : {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder'
          }
        },
        data:[{value: 700, name: '入厂标单'},{value: 850, name: '入厂标单'}]
      }

    ]
  };
  gaugeChart2={
    tooltip : {
      formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
      show: true,
      feature: {
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series : [
      {
        name: '速度',
        type: 'gauge',
        z: 3,
        min: 0,
        max: 1000,
        splitNumber: 5,
        radius: '100%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 25,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          length: 40,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        title : {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 15,
            fontStyle: 'italic'
          }
        },
        detail : {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder'
          }
        },
        data:[{value: 700, name: '入炉标单'},{value: 750, name: '入炉标单'}]
      }

    ]
  };
  gaugeChart3={
    tooltip : {
      formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
      show: true,
      feature: {
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series : [
      {
        name: '速度',
        type: 'gauge',
        z: 3,
        min: 0,
        max: 300,
        splitNumber: 10,
        radius: '100%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 25,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          length: 40,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        title : {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 15,
            fontStyle: 'italic'
          }
        },
        detail : {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder'
          }
        },
        data:[{value: 130, name: '热值差'},{value: 190, name: '热值差'}]
      }

    ]
  };
//嵌套环形图
  nestChart= {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data:['霍林河','中煤','神华','伊泰','同煤','地方矿','其他']
    },
    series: [
      {
        name:'访问来源',
        type:'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:335, name:'海运'},
          {value:135, name:'皮带'},
          {value:679, name:'铁路', selected:true},
          {value:1548, name:'公路'}
        ]
      },
      {
        name:'访问来源',
        type:'pie',
        radius: ['40%', '55%'],

        data:[
          {value:335, name:'霍林河'},
          {value:310, name:'中煤'},
          {value:234, name:'神华'},
          {value:135, name:'伊泰'},
          {value:1048, name:'同煤'},
          {value:251, name:'地方矿'},
          {value:102, name:'其他'}
        ]
      }
    ]
  };
//柱形图
  barChart={

    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['平圩', '平二', '姚孟', '姚二', '常熟', '神头', '大别山','清河','芜湖'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {

        color: ['#DAE0A0'],
        name:'环比',
        type:'bar',
        barWidth: '50%',
        label: {
          normal: {
            show: true,
            position:'top',
            textStyle:{
              color:'#DAE0A0'
            },
          }
        },

        data:[1.81, 1.25, 16.37, 16.85, 10.25, 15.42, 9.6,3.07,1.83]
      },
      {
        name:'同比',
        type:'bar',
        barWidth: '50%',
        label: {
          normal: {
            show: true,
            position:'top',
            textStyle:{
              color:'#CC0000'
            },

          }
        },

        barGap:'-100%',//柱间距离

        data:[0.181, 0.125, 1.637, 1.685, 1.025, 1.542, 0.96,0.307,0.183]
      }
    ]
  };
  barChart2 = {
    title: {
      text: '中电国际与集团同区域加权平均值对标',
      x: 'center'
    },

    color: ['#9BBB59'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: "{b}月{a}:{c}"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        nameLocation:'end',

        data: ['集团全口径', '安徽公司', '江苏公司', '河南公司', '山西公司', '湖北公司', '东北公司'],

        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        name:'单位：元/吨',
        min:-400.00,
        max:300.00,
        type: 'value'
      }
    ],
    series: [
      {
        name: '   ',
        type: 'bar',
        barWidth: '60%',
        label: {
          normal: {
            show: true,
            position:'top',
            textStyle:{
              color:'#000000'
            },
          }
        },
        data: [76.89, -50.08, -68.83, 14.06, -288.55, 213.24, 52.79]
      }
    ]
  };
  barChart3={
    title: {
      text: '中电国际与五大集团对标',
      x: 'center'
    },


    color: ['#4BACC6'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: "{b}月{a}:{c}"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',


        data: ['国电电投', '华能', '大唐',  '华电', '国电'],

        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        name:'单位：元/吨',
        min:0.00,
        max:200.00,
        splitNumber:10,
        type: 'value'
      }
    ],
    series: [
      {
        name: '环比',
        type: 'bar',
        barWidth: '60%',
        label: {
          normal: {
            show: true,
            position:'top',
            textStyle:{
              color:'#000000'
            },
          }
        },
        data: [76.89, 173.58, 173.58,48.4, 173.58]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
