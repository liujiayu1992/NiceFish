"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var user_model_1 = require("../model/user-model");
var fade_in_1 = require("../../animations/fade-in");
var ForgetPwdComponent = (function () {
    function ForgetPwdComponent(forgetPwdService) {
        this.forgetPwdService = forgetPwdService;
        this.user = new user_model_1.User();
    }
    ForgetPwdComponent.prototype.ngOnInit = function () {
    };
    ForgetPwdComponent.prototype.sendValidationEmail = function () {
        var _this = this;
        this.forgetPwdService.sendValidationEmail(this.user.email)
            .subscribe(function (data) {
            _this.message = data.message;
            _this.messgeType = "success";
        }, function (error) {
            _this.message = error.messge;
            _this.messgeType = "danger";
        });
    };
    return ForgetPwdComponent;
}());
ForgetPwdComponent = __decorate([
    core_1.Component({
        selector: 'app-forget-pwd',
        templateUrl: './forget-pwd.component.html',
        styleUrls: ['./forget-pwd.component.scss'],
        animations: [fade_in_1.fadeIn]
    })
], ForgetPwdComponent);
exports.ForgetPwdComponent = ForgetPwdComponent;
//# sourceMappingURL=forget-pwd.component.js.map