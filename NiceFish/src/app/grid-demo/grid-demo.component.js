"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GridDemoComponent = (function () {
    function GridDemoComponent() {
        this.data = {
            "columns": [{
                    "title": "用户名",
                    "field": "username"
                }, {
                    "title": "邮箱",
                    "field": "email"
                }],
            "rows": [{
                    "username": "****",
                    "email": "XXX@qq.com"
                }, {
                    "username": "钟钟",
                    "email": "XXX@qq.com"
                }, {
                    "username": "钟钟",
                    "email": "XXX@qq.com"
                }, {
                    "username": "钟钟",
                    "email": "XXX@qq.com"
                }, {
                    "username": "钟钟",
                    "email": "XXX@qq.com"
                }, {
                    "username": "钟钟",
                    "email": "XXX@qq.com"
                }, {
                    "username": "钟钟",
                    "email": "XXX@qq.com"
                }, {
                    "username": "钟钟",
                    "email": "XXX@qq.com"
                }]
        };
        this.data2 = {
            "columns": [{
                    "title": "列1",
                    "field": "col1"
                }, {
                    "title": "列2",
                    "field": "col2"
                }],
            "rows": [{
                    "col1": "**等待**",
                    "col2": "XXX@qq.com"
                }, {
                    "col1": "钟钟",
                    "col2": "XXX@qq.com"
                }, {
                    "col1": "钟钟",
                    "col2": "XXX@qq.com"
                }, {
                    "col1": "钟钟",
                    "col2": "XXX@qq.com"
                }, {
                    "col1": "钟钟",
                    "col2": "XXX@qq.com"
                }]
        };
    }
    GridDemoComponent.prototype.ngOnInit = function () {
    };
    return GridDemoComponent;
}());
GridDemoComponent = __decorate([
    core_1.Component({
        selector: 'app-grid-demo',
        templateUrl: './grid-demo.component.html',
        styleUrls: ['./grid-demo.component.css']
    })
], GridDemoComponent);
exports.GridDemoComponent = GridDemoComponent;
//# sourceMappingURL=grid-demo.component.js.map