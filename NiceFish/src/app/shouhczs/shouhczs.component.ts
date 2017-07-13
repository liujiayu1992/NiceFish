import { Component, OnInit } from '@angular/core';
import { fadeIn } from "../animations/fade-in";

@Component({
  selector: 'app-shouhczs',
  templateUrl: './shouhczs.component.html',
  styleUrls: ['./shouhczs.component.scss'],
  animations:[ fadeIn ]
})

export class ShouhczsComponent implements OnInit {

    private kouj: string = '热值';
    private koujList: string[] = ['热值', '硫分', '水分', '挥发分', '标煤单价'];
    
    /* =================================================== */
    /* START shouhczs PAGE */
    shouhczsPieChart = {
        theme: '',
        event: [
            {
                type: "click",
                cb: function( res ) {
                    console.log( res );
                }
            }
        ],
        /*title: {
          text: 'NiceFish访问用户地区分布',
          subtext: '纯属虚构',
          x: 'center'
        },*/
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['海运', '皮带', '公路', '铁路']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            startAngle: -180,
            radius: '55%',
            center: ['50%', '45%'],
            data: [{
                value: 777,
                name: '海运'
            }, {
                value: 550,
                name: '皮带'
            }, {
                value: 391,
                name: '公路'
            }, {
                value: 3350,
                name: '铁路'
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
    shouhczsBarChart = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                /*dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},*/
                saveAsImage: { show: true }
            }
        },
        legend: {
            left: '5%',
            data: ['电厂热值', '供应商热值']
        },
        xAxis: [
            {
                type: 'category',
                data: ['供应商1', '供应商2', '供应商3', '供应商4', '供应商5', '供应商6'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位: (MJ/kg)',
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: '电厂热值',
                type: 'bar',
                data: [2.0, 4.9, 9.0, 26.2, 25.6, 76.7]
            },
            {
                name: '供应商热值',
                type: 'bar',
                data: [2.6, 5.9, 6.0, 21.4, 28.7, 70.7]
            },
            {
                name: '差值',
                type: 'line',
                data: [-0.6, -1, 3, 4.8, -6.9, 6.7]
            }
        ]
    };

    shouhczsLineChart = {
        legend: {
            left: '5%',
            data: ['耗煤', '来煤']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1日', '3日', '6日', '9日', '12日', '15日', '18日', '21日', '24日', '27日', '30日']
        },
        yAxis: {
            type: 'value',
            name: ' /万吨'
        },
        series: [
            {
                name: '耗煤',
                type: 'line',
                data: [11, 11, 15, 13, 12, 13, 10, 22, 33, 12, 23]
            },
            {
                name: '来煤',
                type: 'line',
                data: [1, 21, 17, 15, 19, 18, 11, 13, 10, 23, 11]
            }

        ]
    };

    shouhczsAreaLineChart = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            left: '5%',
            data: ['库存情况', '正常情况', '警戒库存']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
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
                data: ['1日', '3日', '6日', '9日', '12日', '15日', '18日', '21日', '24日', '27日', '30日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '库存情况',
                type: 'line',
                stack: '总量',
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
                data: [11, 11, 15, 13, 12, 13, 10, 22, 33, 12, 23]
            },
            {
                name: '正常情况',
                type: 'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: '#E7B6A5'
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#84CFFF'
                    }
                },
                data: [1, 21, 17, 15, 19, 18, 11, 13, 10, 23, 11]
            },
            {
                name: '警戒库存',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#FF7952'
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#FFBEAD'
                    }
                },
                data: [17.2, 2, 7.5, 15, 9.8, 1.8, 1.1, 15, 13, 27, 11.9]
            }
        ]
    };

  //仪表盘
    shouhczsAaugeChart = {
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
                detail: { formatter: '{value}%' },
                data: [{ value: 50, name: '完成率' }]
            },
            {
                name: '当月',
                type: 'gauge',
                detail: { formatter: '{value}%' },
                data: [{ value: 70, name: '完成率' }]
            }
        ]
    };
    
    /* =================================================== */
    /* END shouhczs PAGE */
    
 
    /* =================================================== */
    /* START shouhczs TABLE */
    //-------------------------------------------函数-------------------------------------------------------------------------
    private trend: Function = function( value, row ) {
        let v: number = parseFloat( value );
        let trendIcon: String;
        let color: String = 'transparent';
        if ( v > 0 ) {
            trendIcon = 'glyphicon glyphicon-arrow-up';
            color = 'green';
        } else if ( v < 0 ) {
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
        }, {
            align: 'center',
            valign: 'middle',
            field: 'by',
            title: '本年',
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
        }, {
            align: 'center',
            valign: 'middle',
            field: 'BENNBQ',
            title: '本期'
        }, {
            align: 'center',
            valign: 'middle',
            field: 'BENNTB',
            title: '同比',
            formatter: this.trend
        }, {
            align: 'center',
            valign: 'middle',
            field: 'BENNHB',
            title: '环比',
            formatter: this.trend
        }
        ]]
    };
    //-----------------------------------------------表的数据---------------------------------------------------------------
    private tdata: any = [{
        LAIHC: '来煤量',
        DANGRBQ: 7741.76,
        DANGRTB: 0.65,
        DANGRHB: -0.03,
        BENZBQ: 22529.22,
        BENZTB: 4.19,
        BENZHB: 0.02,
        BENYBQ: 1222.33,
        BENYTB: 0.33,
        BENYHB: 0.45,
        BENNBQ: 23432,
        BENNTB: 1.52,
        BENNHB: 1.34
    }, {
        LAIHC: '耗煤量',
        DANGRBQ: 5833,
        DANGRTB: 0.17,
        DANGRHB: -0.11,
        BENZBQ: 19878,
        BENZTB: 3.03,
        BENZHB: -0.08,
        BENYBQ: 12333,
        BENYTB: 0.12,
        BENYHB: 0.22,
        BENNBQ: 23032,
        BENNTB: 0.88,
        BENNHB: 0.74
    }, {
        LAIHC: '存煤量',
        DANGRBQ: 139868,
        DANGRTB: -0.28,
        DANGRHB: 0.01,
        BENZBQ: 139858.76,
        BENZTB: -0.38,
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