import {Component, OnInit} from '@angular/core';
import {fadeIn} from '../animations/fade-in';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  animations: [fadeIn]
})
export class ChartsComponent implements OnInit {

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
  barChart = {
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

  lineChart = {
    title: {
      text: 'NiceFish月访问趋势图',
      subtext: '纯属虚构',
      x: "center"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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
        data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
      }

    ]
  };
//仪表盘

  gaugeChart = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: '累计',
        type: 'gauge',
        detail: {formatter: '{value}%'},
        data: [{value: 50, name: '完成率'}]
      },
      {
        name: '当月',
        type: 'gauge',
        detail: {formatter: '{value}%'},
        data: [{value: 70, name: '完成率'}]
      }
    ]
  };
//嵌套环形图
  nestChart = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
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
        data: [
          {value: 335, name: '直达', selected: true},
          {value: 679, name: '营销广告'},
          {value: 1548, name: '搜索引擎'}
        ]
      },
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [
          {value: 335, name: '直达'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1048, name: '百度'},
          {value: 251, name: '谷歌'},
          {value: 147, name: '必应'},
          {value: 102, name: '其他'}
        ]
      }
    ]
  };
//柱形图
  columnChart = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  //上下浮动箭头样式添加
//   private ops:any = {
//     height: 183,
// //列数据
//     columns: [[{
//       align: 'center',
//       valign: 'middle',
//       field: 'LAIHC',
//       title: '来耗存',
//       rowspan: 2
//     }, {
//       align: 'center',
//       valign: 'middle',
//       field: 'dr',
//       title: '当日',
//       colspan: 3
//     }, {
//       align: 'center',
//       valign: 'middle',
//       field: 'bz',
//       title: '本周',
//       colspan: 3
//     }, {
//       align: 'center',
//       valign: 'middle',
//       field: 'by',
//       title: '本月',
//       colspan: 3
//     }],
//       [{
//         align: 'center',
//         valign: 'middle',
//         field: 'DANGRBQ',
//         title: '本期'
//       }, {
//         align: 'center',
//         valign: 'middle',
//         field: 'DANGRTB',
//         title: '同比'/*,
//          formatter:trend*/
//       }, {
//         align: 'center',
//         valign: 'middle',
//         field: 'DANGRHB',
//         title: '环比'/*,
//          formatter:trend*/
//       }, {
//         align: 'center',
//         valign: 'middle',
//         field: 'BENZBQ',
//         title: '本期'
//       }, {
//         align: 'center',
//         valign: 'middle',
//         field: 'BENZTB',
//         title: '同比'/*,
//          formatter:trend*/
//       }, {
//         align: 'center',
//         valign: 'middle',
//         field: 'BENZHB',
//         title: '环比'/*,
//          formatter:trend*/
//       }, {
//         align: 'center',
//         valign: 'middle',
//         field: 'BENYBQ',
//         title: '本期'
//       }, {
//         align: 'center',
//         valign: 'middle',
//         field: 'BENYTB',
//         title: '同比'/*,
//          formatter:trend*/
//       }, {
//         align: 'center',
//         valign: 'middle',
//         field: 'BENYHB',
//         title: '环比'/*,
//          formatter:trend*/
//       }]]
//   };
  // private a:any;
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
      }]]
  };
  //-----------------------------------------------表的数据---------------------------------------------------------------
  tdata = [{
    LAIHC: 3,
    DANGRBQ: 1,
    DANGRTB: -2,
    DANGRHB: 1,
    BENZBQ: 2,
    BENZTB: 2,
    BENZHB: 3,
    BENYBQ: 7,
    BENYTB: 8,
    BENYHB: 9
  }, {
    LAIHC: 0,
    DANGRBQ: 1,
    DANGRTB: 2,
    DANGRHB: 1,
    BENZBQ: 2,
    BENZTB: 2,
    BENZHB: 3,
    BENYBQ: 7,
    BENYTB: 8,
    BENYHB: 9
  }];


  constructor() {
  }

  ngOnInit() {


  }

}
