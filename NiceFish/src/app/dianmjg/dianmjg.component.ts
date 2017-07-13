import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dianmjg',
  templateUrl: './dianmjg.component.html',
  styleUrls: ['./dianmjg.component.scss']
})
export class DianmjgComponent implements OnInit {
  dianmjgLineChart = {
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
      data: ['2014-1', '2014-5', '2014-9', '2015-1', '2015-5', '2015-9', '2016-1',
        '2016-5', '2016-9','2016-11', '2017-1','2017-2', '2017-5']
    },
    yAxis: {
      min:'250',
      max:'600'
    },
    series: [
      {
        type: 'line',
        data: [500, 450, 410, 460, 360, 340, 330, 320,410, 520, 530,520]
      }]
  };
  constructor() { }

  ngOnInit() {
  }

}
