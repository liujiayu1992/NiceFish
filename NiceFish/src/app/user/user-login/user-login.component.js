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
var UserLoginComponent = (function () {
    function UserLoginComponent(router, activatedRoute, userLoginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userLoginService = userLoginService;
        this.user = new user_model_1.User();
        console.log(this.userLoginService);
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        console.log("--- user-login-component ---");
        console.log(this.router);
        console.log(this.activatedRoute);
        var activatedRouteSnapshot = this.activatedRoute.snapshot;
        var routerState = this.router.routerState;
        var routerStateSnapshot = routerState.snapshot;
        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);
    };
    UserLoginComponent.prototype.doLogin = function () {
        console.log(this.user);
        this.userLoginService.login(this.user);
    };
    UserLoginComponent.prototype.doLogout = function () {
        this.userLoginService.logout();
        this.router.navigateByUrl("home");
    };
    UserLoginComponent.prototype.forgetPwd = function () {
        this.router.navigateByUrl("forgetpwd");
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    core_1.Component({
        selector: 'app-user-login',
        templateUrl: './user-login.component.html',
        styleUrls: ['./user-login.component.scss'],
        animations: [fade_in_1.fadeIn]
    })
], UserLoginComponent);
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=user-login.component.js.map