import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guojsg',
  templateUrl: './guojsg.component.html',
  styleUrls: ['./guojsg.component.scss']
})
export class GuojsgComponent implements OnInit {
  guojsgLineChart = {
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
      data: ['12月2日','', '1月2日','', '2月2日','', '3月2日','','4月2日','', '5月2日','', '6月2日','', '7月2日',
        '','8月2日','', '9月2日']
    },
    yAxis: {
      min:'42',
      max:'72',
      interval: 5,
    },
    series: [
      {
        type: 'line',
        data: [53, 51, 49, 47, 48, 52, 50, 52, 53, 50, 49,51,52,48,56,62,67,69,66]
      },
      {
        type: 'line',
        data: [49, 46, 48, 43, 47, 43, 46, 50, 45, 48, 46,49,51,49,55,58,62,63,58]
      },
      {
        type: 'line',
        data: [53, 47, 50, 49, 53, 52, 53, 58, 53, 47, 54,55,52,61,57,64,66,68,66]
      },
    ]
  };
  private trend: Function = function( value, row ) {
    let v: number = parseFloat( value );
    let trendIcon: String;
    let color: String = 'transparent';
    if ( v > 2 ) {
      trendIcon = 'glyphicon glyphicon-arrow-up';
      color = 'green';
    } else if ( v < 2 ) {
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
      title: '价格对比',
      rolspan: 2
    }, {
      align: 'center',
      valign: 'middle',
      field: 'dr',
      title: '价格（美元/吨）',
      colspan: 2
    }, {
      align: 'center',
      valign: 'middle',
      field: 'bz',
      title: '环比涨幅（美元/吨）',
    //  rolspan: 2
    }, {
      align: 'center',
      valign: 'middle',
      field: 'by',
      title: '环比跌幅（美元/吨）',
    //  rolspan: 2
    }],
      [{
        align: 'center',
        valign: 'middle',
        field: 'LAIHC',
        title: ' '
      }, {
        align: 'center',
        valign: 'middle',
        field: 'DANGRTB',
        title: '8月29日',

      }, {
        align: 'center',
        valign: 'middle',
        field: 'DANGRHB',
        title: '9月29日',

      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENZBQ',
     //   title: '本期'
        formatter: this.trend
      }, {
        align: 'center',
        valign: 'middle',
        field: 'BENZTB',
    //    title: '同比',
        formatter: this.trend
      }]]
  };
  //-----------------------------------------------表的数据---------------------------------------------------------------
  private tdata: any = [{
    LAIHC: '纽卡斯尔港 NEWC',
   // DANGRBQ: 7741.76,
    DANGRTB: 67.33,
    DANGRHB: 74.3,
    BENZBQ: 6.79,
    BENZTB: 10.35,
    BENZHB: 0.02,
    BENYBQ: 1222.33,
    BENYTB: 0.33,
    BENYHB: 0.45,
    BENNBQ: 23432,
    BENNTB: 1.52,
    BENNHB: 1.34
  }, {
    LAIHC: '理查德港 RB',
    DANGRBQ: 5833,
    DANGRTB: 64.34,
    DANGRHB: 63.52,
    BENZBQ: 0.82,
    BENZTB: 1.27,
    BENZHB: -0.08,
    BENYBQ: 12333,
    BENYTB: 0.12,
    BENYHB: 0.22,
    BENNBQ: 23032,
    BENNTB: 0.88,
    BENNHB: 0.74
  }, {
    LAIHC: '欧洲三港 ARA',
    DANGRBQ: 139868,
    DANGRTB: 57.32,
    DANGRHB: 67.96,
    BENZBQ: 10.64,
    BENZTB: 18.56,
    BENZHB: 0.01,
    BENYBQ: 139858.76,
    BENYTB: -0.38,
    BENYHB: 0.01,
    BENNBQ: 139858.76,
    BENNTB: -0.29,
    BENNHB: 0.01
  }];
  /* =================================================== */
  /* END shouhczs TABLE */

  constructor() { }

  ngOnInit() {
    $( '#table' ).bootstrapTable( this.ops ).bootstrapTable( 'load', this.tdata );
  }

}
