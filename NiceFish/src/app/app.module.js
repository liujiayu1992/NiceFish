"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng2_translate_1 = require("ng2-translate");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var shared_module_1 = require("./shared/shared.module");
var app_component_1 = require("./app.component");
var user_login_service_1 = require("./user/user-login/user-login.service");
var forget_pwd_component_1 = require("./user/forget-pwd/forget-pwd.component");
var user_register_component_1 = require("./user/user-register/user-register.component");
var user_register_service_1 = require("./user/user-register/user-register.service");
var forget_pwd_service_1 = require("./user/forget-pwd/forget-pwd.service");
var grid_demo_component_1 = require("./grid-demo/grid-demo.component");
var equal_validator_directive_1 = require("./user/user-register/directives/equal-validator.directive");
var grid_component_1 = require("./grid-demo/grid/grid.component");
var chart_component_1 = require("./chart/chart.component");
var charts_component_1 = require("./charts/charts.component");
var echart_option_directive_1 = require("./chart/echart-option.directive");
var use_jquery_component_1 = require("./use-jquery/use-jquery.component");
var gaode_map_component_1 = require("./map/gaode-map/gaode-map.component");
var amap_component_1 = require("./map/gaode-map/amap/amap.component");
var jsplumb_demo_component_1 = require("./jsplumb-demo/jsplumb-demo.component");
var app_routes_1 = require("./app.routes");
var amcharts_demo_component_1 = require("./amcharts-demo/amcharts-demo.component");
var amchart_component_1 = require("./amcharts-demo/amchart/amchart.component");
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, './assets/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            forget_pwd_component_1.ForgetPwdComponent,
            user_register_component_1.UserRegisterComponent,
            equal_validator_directive_1.EqualValidator,
            echart_option_directive_1.EChartOptionDirective1,
            chart_component_1.ChartComponent,
            charts_component_1.ChartsComponent,
            use_jquery_component_1.UseJqueryComponent,
            amap_component_1.AmapComponent,
            gaode_map_component_1.GaodeMapComponent,
            jsplumb_demo_component_1.JsplumbDemoComponent,
            grid_demo_component_1.GridDemoComponent,
            grid_component_1.GridComponent,
            amcharts_demo_component_1.AmchartsDemoComponent,
            amchart_component_1.AmchartComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [http_1.Http]
            }),
            shared_module_1.SharedModule,
            ng2_toastr_1.ToastModule.forRoot(),
            router_1.RouterModule.forRoot(app_routes_1.appRoutes)
        ],
        providers: [
            user_login_service_1.UserLoginService,
            user_register_service_1.UserRegisterService,
            forget_pwd_service_1.ForgetPwdService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map