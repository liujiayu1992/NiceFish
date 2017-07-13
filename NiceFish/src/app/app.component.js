"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
require("rxjs/add/operator/merge");
var AppComponent = (function () {
    function AppComponent(elementRef, renderer, router, activatedRoute, translate, userLoginService, userRegisterService, toastr, vcr) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.userLoginService = userLoginService;
        this.userRegisterService = userRegisterService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
        console.log("什么也没有...");
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) {
            console.log("全局监听点击事件>" + event);
        });
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.userLoginService.currentUser
            .merge(this.userRegisterService.currentUser)
            .subscribe(function (data) {
            _this.currentUser = data;
            var activatedRouteSnapshot = _this.activatedRoute.snapshot;
            var routerState = _this.router.routerState;
            var routerStateSnapshot = routerState.snapshot;
            console.log(activatedRouteSnapshot);
            console.log(routerState);
            console.log(routerStateSnapshot);
            //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
            if (routerStateSnapshot.url.indexOf("/login") != -1) {
                _this.router.navigateByUrl("/home");
            }
        }, function (error) { return console.error(error); });
        this.translate.addLangs(["zh", "en"]);
        this.translate.setDefaultLang('zh');
        var browserLang = this.translate.getBrowserLang();
        console.log("检测到的浏览器语言>" + browserLang);
        this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.globalClickCallbackFn) {
            this.globalClickCallbackFn();
        }
    };
    AppComponent.prototype.toggle = function (button) {
        console.log(button);
    };
    AppComponent.prototype.doLogout = function () {
        this.userLoginService.logout();
        this.toastr.success('退出成功！', '系统提示');
        this.router.navigateByUrl("");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
    //------------------
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map