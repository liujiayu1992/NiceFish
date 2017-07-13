"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AmchartComponent = (function () {
    function AmchartComponent() {
    }
    AmchartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            AmCharts.makeChart(_this.id, _this.options);
        }, 20);
    };
    return AmchartComponent;
}());
__decorate([
    core_1.Input()
], AmchartComponent.prototype, "id");
__decorate([
    core_1.Input()
], AmchartComponent.prototype, "options");
AmchartComponent = __decorate([
    core_1.Component({
        selector: 'app-amchart',
        templateUrl: './amchart.component.html',
        styleUrls: ['./amchart.component.css']
    })
], AmchartComponent);
exports.AmchartComponent = AmchartComponent;
//# sourceMappingURL=amchart.component.js.map