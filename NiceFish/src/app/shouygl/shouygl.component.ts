import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shouygl',
  templateUrl: './shouygl.component.html'
})
export class ShouyglComponent implements OnInit {
  private nianf:string='2017年';
  private nianfList:string[]=['2017年','2016年','2015年','2014年'];
  private yuef:string='1月';
  private yuefList:string[]=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  private kouj:string ='平圩';
  private koujList:string[]=['平圩','平二','姚孟','姚二','常熟','神头','大别山','清河','芜湖'];
  pieChart = {
    theme: '',
    event: [
      {
        type: "click",
        cb: function (res) {
          console.log(res);
        }
      }
    ],
    title: {
      text: 'NiceFish访问用户地区分布',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['深圳', '北京', '广州', '上海', '长沙']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 3350,
        name: '深圳'
      }, {
        value: 310,
        name: '北京'
      }, {
        value: 234,
        name: '广州'
      }, {
        value: 135,
        name: '上海'
      }, {
        value: 1548,
        name: '长沙'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  //柱状图
  barChart2 = {
    title: {
      text: 'NiceFish月访问量统计',
      subtext: '纯属虚构',
      x: 'center'
    },
    color: ['#3398DB'],
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
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '访问量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
      }
    ]
  };

  lineChart2 = {
    title: {
      text: 'NiceFish月访问趋势图',
      subtext: '纯属虚构',
      x:"center"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 次'
      }
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10,123,100,99,66,199]
      }

    ]
  };
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
        radius: '80%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 10,
            color: [[0.7, '#218A21'], [0.8, '#FCC900'],[1, '#FF4100']]
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
        pointer: {
        width:5
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
        radius: '80%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 10,

            color: [[0.7, '#218A21'], [0.8, '#FCC900'],[1, '#FF4100']]
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
        pointer: {
          width:5
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
        radius: '80%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 10,
            color: [[0.6, '#218A21'], [1, '#FF4100']]
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
        pointer: {
          width:5
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

  //-------------------------------------------函数-------------------------------------------------------------------------
  private trend: Function = function (value, row) {
    let v: number = parseFloat(value);
    let trendIcon: String;
    let color: String = 'transparent';
    if (v > 0) {
      trendIcon = 'glyphicon glyphicon-arrow-up';
      color = 'green';
    } else if (v < 0) {
      trendIcon = 'glyphicon glyphicon-arrow-down';
      color = 'red';
    } else {
      trendIcon = ' ';
    }
    return `<div><i style="color: ${color}" class='${trendIcon}' ></i>${value}</div>`
  };
  private ops: any = {
    height: 183,
//列数据-------------------------------------------表头---------------------------------------------------------------------
    columns: [[{
      align: 'center',
      valign: 'middle',
      field: 'LAIHC',
      title: '来耗存',
      rowspan: 2
    }, {
      align: 'center',
      valign: 'middle',
      field: 'dr',
      title: '当日',
      colspan: 3
    }, {
      align: 'center',
      valign: 'middle',
      field: 'bz',
      title: '本周',
      colspan: 3
    }, {
      align: 'center',
      valign: 'middle',
      field: 'by',
      title: '本月',
      colspan: 3
    },{
      align: 'center',
      valign: 'middle',
      field: 'by',
      title: '本年',
      colspan: 3
    }],
      [{
        align: 'center',
        valign: 'middle',
        field: 'DANGRBQ',
        title: '本期'
      }, {
        align: 'center',
        valign: 'middle',
        field: 'DANGRTB',
        title: '同比',
        formatter: this.trend
      }, {
        align: 'center',
        valign: 'middle',
        field: 'DANGRHB',
        title: '环比',
        formatter: this.trend
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENZBQ',
        title: '本期'
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENZTB',
        title: '同比',
        formatter: this.trend
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENZHB',
        title: '环比',
        formatter: this.trend
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENYBQ',
        title: '本期'
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENYTB',
        title: '同比',
        formatter: this.trend
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENYHB',
        title: '环比',
        formatter: this.trend
      },{
        align: 'center',
        valign: 'middle',
        field: 'BENNBQ',
        title: '本期'
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENNTB',
        title: '同比',
        formatter: this.trend
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENNHB',
        title: '环比',
        formatter: this.trend
      }
      ]]
  };
  //-----------------------------------------------表的数据---------------------------------------------------------------
  private tdata:any = [{
    LAIHC: '来煤量',
    DANGRBQ: 7741.76,
    DANGRTB: 0.65,
    DANGRHB: -0.03,
    BENZBQ: 22529.22,
    BENZTB: 4.19,
    BENZHB: 0.02,
    BENYBQ: 1222.33,
    BENYTB: 0.33,
    BENYHB: 0.45,
    BENNBQ:23432,
    BENNTB:1.52,
    BENNHB:1.34
  }, {
    LAIHC: '耗煤量',
    DANGRBQ: 5833,
    DANGRTB: 0.17,
    DANGRHB: -0.11,
    BENZBQ: 19878,
    BENZTB: 3.03,
    BENZHB: -0.08,
    BENYBQ: 12333,
    BENYTB: 0.12,
    BENYHB: 0.22,
    BENNBQ:23032,
    BENNTB:0.88,
    BENNHB:0.74
  },{
    LAIHC: '存煤量',
    DANGRBQ: 139868,
    DANGRTB: -0.28,
    DANGRHB: 0.01,
    BENZBQ: 139858.76,
    BENZTB: -0.38,
    BENZHB: 0.01,
    BENYBQ: 139858.76,
    BENYTB: -0.38,
    BENYHB: 0.01,
    BENNBQ:139858.76,
    BENNTB:-0.29,
    BENNHB:0.01
  }];

  constructor() { }

  ngOnInit() {

    $('#table').bootstrapTable(this.ops).bootstrapTable('load',this.tdata);
  }

}
