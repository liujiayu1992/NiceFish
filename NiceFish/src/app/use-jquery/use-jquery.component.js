"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var fade_in_1 = require("../animations/fade-in");
var UseJqueryComponent = (function () {
    function UseJqueryComponent() {
    }
    UseJqueryComponent.prototype.ngOnInit = function () {
        $("#datepicker").datepicker();
        $("#tabs").tabs();
    };
    return UseJqueryComponent;
}());
UseJqueryComponent = __decorate([
    core_1.Component({
        selector: 'app-use-jquery',
        templateUrl: './use-jquery.component.html',
        styleUrls: ['./use-jquery.component.scss'],
        animations: [fade_in_1.fadeIn]
    })
], UseJqueryComponent);
exports.UseJqueryComponent = UseJqueryComponent;
//# sourceMappingURL=use-jquery.component.js.map