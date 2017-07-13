"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_translate_1 = require("ng2-translate");
var user_login_component_1 = require("../user/user-login/user-login.component");
var user_info_component_1 = require("../user/user-info/user-info.component");
var user_profile_component_1 = require("../user/user-profile/user-profile.component");
var form_control_component_1 = require("../user/user-profile/dynamic-form/form-control.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_translate_1.TranslateModule
        ],
        declarations: [
            user_login_component_1.UserLoginComponent,
            user_info_component_1.UserInfoComponent,
            user_profile_component_1.UserProfileComponent,
            form_control_component_1.FormControlComponent
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ng2_translate_1.TranslateModule,
            user_login_component_1.UserLoginComponent,
            user_info_component_1.UserInfoComponent,
            user_profile_component_1.UserProfileComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map