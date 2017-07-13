import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cctd',
  templateUrl: './cctd.component.html',
  styleUrls: ['./cctd.component.scss']
})
export class CctdComponent implements OnInit {
  favoriteHero=true;
  cctdLineChart1 = {
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
      data: ['2016-06-27', '2016-08-01', '2016-09-05', '2016-10-17','2016-11-4', '2016-11-21', '2016-12-26', '2017-02-06',
        '2017-03-13', '2017-04-17', '2017-06-05']
    },
    yAxis: {
      min:'250',
      max:'750'
    },
    series: [
      {
        type: 'line',
        data: [400, 450, 500, 610, 700, 680, 640, 610, 620, 650, 580]
      },
      {
        type: 'line',
        data: [360, 405, 480, 550, 630, 620, 580, 540, 585, 595, 500]
      },
      {
        type: 'line',
        data: [330, 350, 400, 490, 550, 540, 500, 490, 510, 515, 440]
      },
    ]
  };
  cctdLineChart2= {
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
      data: ['2017-01-01', '2017-02-01', '2017-03-01', '2017-04-01','2017-05-01', '2017-06-01']
    },
    yAxis: {
      min:'400',
      max:'650'
    },
    series: [
      {
        type: 'line',
        data: [580, 575, 570, 580, 575, 560]
      },
      {
        type: 'line',

        data: [550, 540, 535, 540, 538, 510]
      },
      {
        type: 'line',
        data: [450, 445, 445, 460, 450, 410]
      },
    ]
  };
  constructor() { }
  a=function () {
  this.favoriteHero=false;
}
  ngOnInit() {
  }

}
