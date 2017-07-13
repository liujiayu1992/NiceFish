"use strict";
exports.__esModule = true;
var user_login_component_1 = require("./user/user-login/user-login.component");
var forget_pwd_component_1 = require("./user/forget-pwd/forget-pwd.component");
var user_register_component_1 = require("./user/user-register/user-register.component");
var chart_component_1 = require("./chart/chart.component");
var charts_component_1 = require("./charts/charts.component");
var gaode_map_component_1 = require("./map/gaode-map/gaode-map.component");
var use_jquery_component_1 = require("./use-jquery/use-jquery.component");
var jsplumb_demo_component_1 = require("./jsplumb-demo/jsplumb-demo.component");
var grid_demo_component_1 = require("./grid-demo/grid-demo.component");
var amcharts_demo_component_1 = require("./amcharts-demo/amcharts-demo.component");
exports.appRoutes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: "amcharts",
        component: amcharts_demo_component_1.AmchartsDemoComponent
    },
    {
        path: "grid",
        component: grid_demo_component_1.GridDemoComponent
    },
    //--------------------------------
    {
        path: "charts",
        component: charts_component_1.ChartsComponent
    },
    //----------------------------------
    {
        path: "echart",
        component: chart_component_1.ChartComponent
    },
    {
        path: "map",
        component: gaode_map_component_1.GaodeMapComponent
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'posts',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'post',
        loadChildren: './post/post.module#PostModule'
    },
    {
        path: 'login',
        component: user_login_component_1.UserLoginComponent
    },
    {
        path: 'forgetpwd',
        component: forget_pwd_component_1.ForgetPwdComponent
    },
    {
        path: 'register',
        component: user_register_component_1.UserRegisterComponent
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'manage',
        loadChildren: './manage/manage.module#ManageModule'
    },
    {
        path: 'jquery',
        component: use_jquery_component_1.UseJqueryComponent
    }, {
        path: 'jsplumb',
        component: jsplumb_demo_component_1.JsplumbDemoComponent
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];
//# sourceMappingURL=app.routes.js.map