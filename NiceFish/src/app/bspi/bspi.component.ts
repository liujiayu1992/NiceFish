import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bspi',
  templateUrl: './bspi.component.html',
  styleUrls: ['./bspi.component.scss']
})
export class BspiComponent implements OnInit {
  bspiLineChart = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2016/11/8', '2016/11/15', '2016/11/22', '2016/11/29', '2016/12/6', '2016/12/13', '2016/12/20',
        '2016/12/27', '2017/1/3', '2017/1/10', '2017/1/17', '2017/1/24', '2017/1/31', '2017/2/7',
        '2016/2/14', '2017/2/21', '2017/2/28', '2017/3/7', '2017/3/14', '2017/3/21', '2017/3/28']
    },
    yAxis: {
      min:'585',
      max:'610'
    },
    series: [
      {
        type: 'line',
        data: [606, 604, 601, 599, 598, 595, 594, 593.5, 593, 592, 591,590.5,
          590, 587, 586, 586, 589, 593, 599, 606, 605]
      }]
  };
  constructor() { }

  ngOnInit() {
  }

}
