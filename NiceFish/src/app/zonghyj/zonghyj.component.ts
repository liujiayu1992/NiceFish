import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zonghyj',
  templateUrl: './zonghyj.component.html',
  styleUrls: ['./zonghyj.component.scss']
})
export class ZonghyjComponent implements OnInit {
  zonghyjAreaLineChart = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
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
        boundaryGap: false,
        data: ['10月01日','', '11月01日','', '12月01日','', '01月01日','', '02月01日','','03月01日','', '04月01日']
      }
    ],
    yAxis: [
      {
        min:'0',
        max:'1500',
        interval:250,
      }
    ],
    series: [
      {
        type: 'line',
        lineStyle: {
          normal: {
            color: '#DE71D6'
          }
        },
        areaStyle: {
          normal: {
            color: '#DE96BD'
          }
        },
        data: [900, 850, 800, 1250, 1150, 900, 900, 950,750,650,850,1100,1200]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
