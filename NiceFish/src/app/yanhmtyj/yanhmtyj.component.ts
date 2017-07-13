import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yanhmtyj',
  templateUrl: './yanhmtyj.component.html',
  styleUrls: ['./yanhmtyj.component.scss']
})
export class YanhmtyjComponent implements OnInit {
  yanhmtyjAreaLineChart = {
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
        data: ['2015-01', '2015-03', '2015-05', '2015-07', '2015-09','2015-10', '2015-11', '2016-01','2016-02',
          '2016-03', '2016-05', '2016-07','2016-08', '2016-09','2016-10','2016-11','2017-01','2017-03','2017-04']
      }
    ],
    yAxis: [
      {
        min:'300',
        max:'1400'
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
        data: [500, 420, 390, 450, 400, 500, 450, 490,500,530,520,570,990,1120,850,680,500,1150,1050]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
