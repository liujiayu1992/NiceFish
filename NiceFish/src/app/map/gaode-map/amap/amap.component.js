"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AmapComponent = (function () {
    function AmapComponent() {
    }
    AmapComponent.prototype.ngOnInit = function () {
        // let map = new AMap.Map('gaodemap-container');
        // map.plugin('AMap.Geolocation', () => {
        //     let geolocation = new AMap.Geolocation({
        //         enableHighAccuracy: true,//是否使用高精度定位，默认:true
        //         timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        //         maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        //         convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        //         showButton: true,        //显示定位按钮，默认：true
        //         buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        //         buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        //         showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        //         showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        //         panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        //         zoomToAccuracy: true     //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        //     });
        //     map.addControl(geolocation);
        // });
    };
    return AmapComponent;
}());
AmapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'amap',
        templateUrl: 'amap.component.html',
        styleUrls: ['amap.component.scss']
    })
], AmapComponent);
exports.AmapComponent = AmapComponent;
//# sourceMappingURL=amap.component.js.map