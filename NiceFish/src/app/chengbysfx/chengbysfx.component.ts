import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chengbfx',
  templateUrl: './chengbysfx.component.html',
  styleUrls: ['./chengbysfx.component.scss']
})
export class  ChengbysfxComponent implements OnInit {
  private nianf:string[]=['2017年','2016年','2015年','2014年'];
  private yuef:string[]=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  private kouj:string[]=['平圩','平二','姚孟','姚二','常熟','神头','大别山','清河','芜湖'];
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
      text: '发电燃料总成本变动影响因素分析',
      subtext: '单位燃料成本同比上升10.92元/千瓦时',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['标准煤耗', '入炉标煤单价']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 0.29,
        name: '标准煤耗'
      }, {
        value: 10.63,
        name: '入炉标煤单价'
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
  pieChart1 = {
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
      text: '发电燃料总成本变动影响因素分析',
      subtext: '发电成本同比上升8987.79万元',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['发电量', '标准煤耗', '标煤单价']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 755.98,
        name: '发电量'
      }, {
        value: 217.6,
        name: '标准煤耗'
      }, {
        value: 8014.21,
        name: '标煤单价'
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
  pieChart3 = {
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
      text: '入厂标煤单价变动影响因素分析',
      subtext: '入厂标煤单价同比下降63.3元/吨',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['矿价影响天然煤价', '运杂费']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 50.42,
        name: '矿价影响天然煤价'
      }, {
        value: 2.72,
        name: '运杂费'
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
  pieChart2 = {
    theme: '',
    event: [
      {
        type: "click",
        cb: function (res) {
          console.log(res);
        }
      }
    ],
    /*title: {
      text: '入场标煤单价变动影响因素分析',
      subtext: '入厂标煤单价同比下降63.3元/吨',
      x: 'center'
    },*/
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['天然煤单价', '热值']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 53.14,
        name: '天然煤单价'
      }, {
        value: 10.16,
        name: '热值'
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
  pieChart4 = {
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
     text: '入炉标煤单价变动影响因素分析',
     subtext: '入炉标煤单价同比下降31.43元/吨',
     x: 'center'
     },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['库存', '厂后杂费','入厂标单']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 12.42,
        name: '库存'
      }, {
        value: 7.98,
        name: '厂后杂费'
      }, {
        value: 11.02,
        name: '入厂标单'
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
  barChart = {
    title: {
      text: '各单位对公司标煤单价影响分析',
      /*subtext: '纯属虚构',*/
      x: 'left',
      /*text:'单位：元/吨',
      x:'right',*/
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
        data: ['平圩', '平二', '姚孟', '姚二', '常熟', '神头', '大别山', '清河', '芜湖'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        min:-5.00,
        max:20.00,
        type: 'value'
      }
    ],
    series: [
      {
       name: '   ',
        type: 'bar',
        barWidth: '60%',
        data: [12.89, 9.45, -3.20, 6.76, -2.39, 17.32, 8.90, 5.68, 7.82]
      }
    ]
  };

  lineChart = {
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

  constructor() { }

  ngOnInit() {
  }

}
