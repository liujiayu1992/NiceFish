import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-rucrlzb',
    templateUrl: './rucrlzb.component.html',
    styleUrls: ['./rucrlzb.component.scss']
} )
export class RucrlzbComponent implements OnInit {

    private zhib: string = '热值差';
    private zhibList: string[] = ['热值差', '水分差'];
    private kouj: string = '热值';
    private koujList: string[] = ['热值', '硫分', '灰分', '水分', '挥发分'];

    /* =================================================== */
    /* START shouhczs PAGE */

    //仪表盘
    rucrlzbGaugeChart = {
        tooltip: {
            formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: false },
                //                magicType: {show: true, type: ['line', 'bar']},
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },

        series: [
            {
                name: '入厂标单',
                type: 'gauge',
                color: ['#1F8A1F', '#FF4500', '#FFFF00'],
                center: ['20%', '55%'],    // 默认全局居中
                radius: '35%',
                min: 0,
                max: 1000,
                endAngle: 45,
                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 8,
                        color: [[0.8, '#91C7AE'], [1, '#FF551A']]
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    offsetCenter: [0, '-120%'],       // x, y，单位px
                },
                detail: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data: [{ value: 200, name: '入厂标单(元/吨)' }]
            }, {
                name: '入炉标单',
                type: 'gauge',
                z: 3,
                min: 0,
                max: 1000,
                splitNumber: 10,
                radius: '45%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 10,
                        color: [[0.8, '#91C7AE'], [1, '#FF551A']]
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        // fontWeight: 'bolder',
                        // fontSize: 20,
                        // fontStyle: 'italic'
                    },
                    offsetCenter: [0, '-120%'],
                },
                pointer: {
                    width: 5
                },
                detail: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data: [{ value: 40, name: '入炉标单(元/吨)' }]
            },
            {
                name: '库存',
                type: 'gauge',
                center: ['80%', '55%'],    // 默认全局居中
                radius: '35%',
                min: 0,
                max: 60,
                startAngle: 135,
                endAngle: -45,
                splitNumber: 4,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 8,
                        color: [[0.2, '#FF551A'], [0.4, '#FFff00'], [1, '#91C7AE']]
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber: 5,
                    length: 10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {
                    // formatter:function(v){
                    //     switch (v + '') {
                    //         case '0' : return 'E';
                    //         case '1' : return 'Gas';
                    //         case '2' : return 'F';
                    //     }
                    // }
                },
                splitLine: {           // 分隔线
                    length: 15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    show: true,
                    offsetCenter: [0, '-120%']
                },
                detail: {
                    show: true,
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data: [{ value: 35, name: '库存(万吨)' }]
            }
        ]
    };

    // 饼图
    rucrlzbPieChart = {
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

    //柱状图1
    rucrlzbBarChart1 = {
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
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            left: '5%',
            data: ['厂炉煤折标煤单价差值']
        },
        xAxis: [
            {
                type: 'category',
                data: ['中电国际', '平圩', '姚孟', '常熟', '大别山', '芜湖'],
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
                name: '厂炉煤折标煤单价差值',
                type: 'bar',
                data: [2.0, 4.9, 26.2, 25.6, 4.9, 26.2]
            }
        ]
    };
    //柱状图2
    rucrlzbBarChart2 = {
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
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            left: '5%',
            data: ['本月', '累计']
        },
        xAxis: [
            {
                type: 'category',
                data: ['中电国际', '中国电力', '平圩', '平二', '姚孟', '姚二', '常熟', '神头', '大别山', '清河', '芜湖'],
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
                name: '本月',
                type: 'bar',
                data: [2.0, 4.9, -9.0, 26.2, 25.6, -76.7, 4.9, -9.0, 26.2, -9.0, 26.2]
            },
            {
                name: '累计',
                type: 'bar',
                data: [-76.7, 4.9, -9.0, 26.2, -9.0, 26.2, 4.9, -9.0, 26.2, -9.0, 26.2]
            }
        ]
    };

    //折线
    rucrlzbLineChart = {
        // title: {
        //     text: '折线图堆叠'
        // },
        tooltip: {
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#ccc',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    textStyle: {
                        color: '#222'
                    }
                }
            },
            trigger: 'axis'
        },
        legend: {
            left: '',
            data: ['入炉热值', '入厂热值']
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
            boundaryGap: true,
            axisTick: {
                length: 5,
                interval: 0,
                lineStyle: {

                }

            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '入炉热值',
                type: 'line',
                // stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
            },
            {
                name: '入厂热值',
                type: 'line',
                // stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310]
            }
        ]
    };

    /* =================================================== */
    /* END shouhczs PAGE */

    /* =================================================== */
    /* START rucrlzb TABLE */
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
            field: 'XUH',
            title: '序号',
            rowspan: 2
        },{
            align: 'center',
            valign: 'middle',
            field: 'ZHIB',
            title: '指标',
            rowspan: 2
        }, {
            align: 'center',
            valign: 'middle',
            field: 'RUC',
            title: '入厂',
            colspan: 3
        }, {
            align: 'center',
            valign: 'middle',
            field: 'RUL',
            title: '入炉',
            colspan: 3
        }, {
            align: 'center',
            valign: 'middle',
            field: 'CHAZ',
            title: '差值',
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
        }
        ]]
    };
    //-----------------------------------------------表的数据---------------------------------------------------------------
    private tdata: any = [{
        XUH: '1',
        ZHIB: '标煤价',
        DANGRBQ: 7741.76,
        DANGRTB: 0.65,
        DANGRHB: -0.03,
        BENZBQ: 22529.22,
        BENZTB: 4.19,
        BENZHB: 0.02,
        BENYBQ: 1222.33,
        BENYTB: 0.33,
        BENYHB: 0.45
    }, {
        XUH: '2',
        ZHIB: '热值',
        DANGRBQ: 5833,
        DANGRTB: 0.17,
        DANGRHB: -0.11,
        BENZBQ: 19878,
        BENZTB: 3.03,
        BENZHB: -0.08,
        BENYBQ: 12333,
        BENYTB: 0.12,
        BENYHB: 0.22
    }, {
        XUH: '3',
        ZHIB: '硫分',
        DANGRBQ: 139868,
        DANGRTB: -0.28,
        DANGRHB: 0.01,
        BENZBQ: 139858.76,
        BENZTB: -0.38,
        BENZHB: 0.01,
        BENYBQ: 139858.76,
        BENYTB: -0.38,
        BENYHB: 0.01
    }, {
        XUH: '4',
        ZHIB: '挥发分',
        DANGRBQ: 139868,
        DANGRTB: -0.28,
        DANGRHB: 0.01,
        BENZBQ: 139858.76,
        BENZTB: -0.38,
        BENZHB: 0.01,
        BENYBQ: 139858.76,
        BENYTB: -0.38,
        BENYHB: 0.01
    }, {
        XUH: '5',
        ZHIB: '水分',
        DANGRBQ: 139868,
        DANGRTB: -0.28,
        DANGRHB: 0.01,
        BENZBQ: 139858.76,
        BENZTB: -0.38,
        BENZHB: 0.01,
        BENYBQ: 139858.76,
        BENYTB: -0.38,
        BENYHB: 0.01
    }];
    /* =================================================== */
    /* END rucrlzb TABLE */


    constructor() { }

    ngOnInit() {
        $( '#table' ).bootstrapTable( this.ops ).bootstrapTable( 'load', this.tdata );
    }

}
