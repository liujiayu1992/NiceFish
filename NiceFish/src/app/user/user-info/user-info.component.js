"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var UserInfoComponent = (function () {
    function UserInfoComponent(http) {
        this.http = http;
        this.follow = new core_1.EventEmitter();
        this.userInfoURL = 'user/getUserInfo';
        //构造组件的时候，@Input的属性还没有值
        console.log(this.panelTitle);
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        //组件初始化完成之后，panelTitle才会有值
        console.log(this.panelTitle);
    };
    UserInfoComponent.prototype.loadUserInfo = function () {
        this.userInfoURL = this.userInfoURL + "/" + this.userId;
        return this.http
            .get(this.userInfoURL)
            .map(function (response) {
            var user = response.json();
            return user;
        })
            .subscribe(function (data) {
            console.log("用户信息>" + data);
        }, function (error) {
            console.error(error);
        });
    };
    UserInfoComponent.prototype.followBtnClick = function () {
        this.follow.emit("follow");
    };
    return UserInfoComponent;
}());
__decorate([
    core_1.Input()
], UserInfoComponent.prototype, "panelTitle");
__decorate([
    core_1.Input()
], UserInfoComponent.prototype, "userId");
__decorate([
    core_1.Output()
], UserInfoComponent.prototype, "follow");
UserInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-user-info',
        templateUrl: './user-info.component.html',
        styleUrls: ['./user-info.component.scss']
    })
], UserInfoComponent);
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=user-info.component.js.map