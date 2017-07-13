"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var echarts = require("echarts");
var EChartOptionDirective1 = (function () {
    function EChartOptionDirective1(el) {
        this.el = el;
    }
    EChartOptionDirective1.prototype.ngOnInit = function () {
        echarts.init(this.el.nativeElement).setOption(this.chartType);
    };
    return EChartOptionDirective1;
}());
__decorate([
    core_1.Input('chartType')
], EChartOptionDirective1.prototype, "chartType");
EChartOptionDirective1 = __decorate([
    core_1.Directive({
        selector: 'echart'
    })
], EChartOptionDirective1);
exports.EChartOptionDirective1 = EChartOptionDirective1;
//# sourceMappingURL=echart-option.directive.js.map