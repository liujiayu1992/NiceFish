import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chanyx',
  templateUrl: './chanyx.component.html',
  styleUrls: ['./chanyx.component.scss']
})
export class ChanyxComponent implements OnInit {
  option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['本月产量（万吨）','本月同比（%）']
    },
    xAxis: [
      {
        type: 'category',
        data: ['2016-01', '', '2016-03', '', '2016-05', '', '2016-07'],
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 40000,
        interval: 10000,
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        min:-20,
        max:10,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [

      {
        name:'本月产量（万吨）',
        type:'bar',
        /*设置折线颜色*/
        itemStyle : {
          normal : {
            color:'blue'
          }
        },
        data: [30000,20000, 29000, 27000,27000, 28000, 27000],
      },
      {
        name:'本月同比（%）',
        type:'line',
        yAxisIndex: 1,
        itemStyle : {  /*设置折线颜色*/
          normal : {
             color:'#c4cddc'
          }
        },
        data:[6,-6,-4,-12,-15,-16,0],
      }

    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
