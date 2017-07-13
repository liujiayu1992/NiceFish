import { Component, OnInit } from '@angular/core';
import { fadeIn } from "../animations/fade-in";

@Component( {
    selector: 'app-rucbdfx',
    templateUrl: './rucbdfx.component.html',
    styleUrls: ['./rucbdfx.component.scss'],
    animations: [fadeIn]
} )
export class RucbdfxComponent implements OnInit {

    private kouj: string = '入厂标煤单价趋势';
    private koujList: string[] = ['入厂标煤单价趋势', '天然煤价趋势'];
    private huanb: string = '入厂标单环比';
    private huanbList: string[] = ['入厂标单环比', '入厂标单同比', '入厂标单累计'];

    /* =================================================== */
    /* START shouhczs PAGE */

    //仪表盘
    rucbdfxGaugeChart = {
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
    rucbdfxPieChart = {
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
    rucbdfxBarChart1 = {
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
            data: ['入厂标单']
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
                name: '入厂标单',
                type: 'bar',
                data: [2.0, 4.9, 26.2, 25.6, 4.9, 26.2]
            }
        ]
    };
    //柱状图2
    rucbdfxBarChart2 = {
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
            data: ['入厂标单']
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
                name: '入厂标单',
                type: 'bar',
                data: [2.0, 4.9, -9.0, 26.2, 25.6, -76.7, 4.9, -9.0, 26.2, -9.0, 26.2]
            }
        ]
    };

    //折线
    rucbdfxLineChart = {
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
            data: ['当月', '累计']
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
            type: 'value',
            name: '单位：(元/吨)',
        },
        series: [
            {
                name: '当月',
                type: 'line',
                // stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
            },
            {
                name: '累计',
                type: 'line',
                // stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310]
            }
        ]
    };

    // 区域折线
    rucbdfxAreaLineChart = {
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


    /* =================================================== */
    /* END shouhczs PAGE */

    constructor() { }

    ngOnInit() {
    }

}
