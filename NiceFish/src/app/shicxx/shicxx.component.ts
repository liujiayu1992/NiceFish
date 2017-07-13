import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shicxx',
  templateUrl: './shicxx.component.html',
  styleUrls: ['./shicxx.component.scss']
})
export class ShicxxComponent implements OnInit {
  //折线图
lineChart={
  title: {
    text: '环渤海动力煤价格指数BSPI(元/吨)',
    x:'center',
  },
  tooltip: {
    trigger: 'axis'
  },

  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  yAxis: {
    min:585.00,
    max:610.00,
    splitNumber:5,
    type: 'value'
  },
  series: [

    {
      name:'搜索引擎',
      type:'line',
      stack: '总量',
      data:[608, 600, 596, 592, 590, 586, 588]
    }
  ]
};
  constructor() { }

  ngOnInit() {
  }

}
