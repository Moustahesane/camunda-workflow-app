(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");





const routes = [
    { path: "", redirectTo: '/login', pathMatch: 'full' },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'documaniaworkflow-front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_i18n_app_text_config_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/i18n/app-text-config-service.service */ "./src/app/services/i18n/app-text-config-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_auth_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth/basic-auth-interceptor.service */ "./src/app/services/auth/basic-auth-interceptor.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_rest_camunda_rest_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/rest/camunda-rest.service */ "./src/app/services/rest/camunda-rest.service.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_i18n_app_text_config_service_service__WEBPACK_IMPORTED_MODULE_5__["AppTextConfigService"],
        _services_rest_camunda_rest_service__WEBPACK_IMPORTED_MODULE_13__["CamundaRestService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["HttpInterceptorService"],
            multi: true
        },
        _services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                providers: [
                    _services_i18n_app_text_config_service_service__WEBPACK_IMPORTED_MODULE_5__["AppTextConfigService"],
                    _services_rest_camunda_rest_service__WEBPACK_IMPORTED_MODULE_13__["CamundaRestService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["HttpInterceptorService"],
                        multi: true
                    },
                    _services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                    _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function LoginComponent_form_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
} }
function LoginComponent_form_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.successMessage, " ");
} }
const _c0 = function () { return { standalone: true }; };
function LoginComponent_form_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_10_div_2_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_10_div_3_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nom d'utilisateur : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_10_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mot de passe : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_10_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_10_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.handleLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_10_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.resetPass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mot de passe oubli\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.invalidLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
} }
function LoginComponent_form_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.errorMessage, " ");
} }
function LoginComponent_form_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.successMessage, " ");
} }
function LoginComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_11_div_2_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_11_div_3_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nom d'utilisateur ou email : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.handleLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_11_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.resetPass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.invalidLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.component === "forgetpass" ? "R\u00E9initialiser le mot de passe" : "Mot de passe oubli\u00E9 ?");
} }
class LoginComponent {
    constructor(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
        this.loginSuccess = false;
        this.component = 'signin';
    }
    ngOnInit() {
    }
    handleLogin() {
        if (this.component === "forgetpass") {
            this.component = 'signin';
        }
        else {
            this.authenticationService.authenticationService(this.username, this.password).subscribe((result) => {
                this.invalidLogin = false;
                this.loginSuccess = true;
                this.successMessage = 'Login Successful.';
                alert("Logged");
                this.router.navigate(['/certificates']);
            }, () => {
                this.invalidLogin = true;
                this.loginSuccess = false;
            });
        }
    }
    resetPass() {
        if (this.component === "signin") {
            this.component = 'forgetpass';
        }
        else {
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 2, consts: [[1, "navbar", "navbar-light", "navbar-expand-lg", "fixed-top", "clean-navbar", 2, "height", "80px", "background-color", "#021048"], [1, "container"], [1, "page", "login-page"], [1, "clean-block", "clean-form", "dark", 2, "padding-bottom", "65px"], [1, "container", 2, "margin-top", "2.1em"], [1, "block-heading", "pt-3"], ["src", "assets/logo/logo-documania-certify-no-bg.png", "alt", "Documania certify logo", 2, "height", "180px", "margin", "15px 1px"], ["style", "border-radius: 20px;", "class", "rounded-2", 4, "ngIf"], [1, "page-footer", "dark", 2, "padding-top", "2.5em", "bottom", "0", "position", "absolute", "width", "100%"], [1, "footer-copyright"], [1, "rounded-2", 2, "border-radius", "20px"], [1, "form-group"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["for", "username"], ["type", "text", "id", "username", "name", "username", 1, "form-control", "item", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "fas", "fa-sign-in-alt"], [1, "btn", "btn-outline-primary", "btn-block", 3, "click"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_form_10_Template, 16, 8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_form_11_Template, 12, 6, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A9 2020 VevioSys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.component === "signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.component === "forgetpass");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["#baguetteBox-overlay[_ngcontent-%COMP%]{display:none;opacity:0;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:1000000;background-color:#222;background-color:rgba(0,0,0,.8);transition:opacity .5s ease}#baguetteBox-overlay.visible[_ngcontent-%COMP%]{opacity:1}#baguetteBox-overlay[_ngcontent-%COMP%]   .full-image[_ngcontent-%COMP%]{display:inline-block;position:relative;width:100%;height:100%;text-align:center}#baguetteBox-overlay[_ngcontent-%COMP%]   .full-image[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{display:inline;margin:0;height:100%}#baguetteBox-overlay[_ngcontent-%COMP%]   .full-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;width:auto;height:auto;max-height:100%;max-width:100%;vertical-align:middle;box-shadow:0 0 8px rgba(0,0,0,.6)}#baguetteBox-overlay[_ngcontent-%COMP%]   .full-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{display:block;position:absolute;bottom:0;width:100%;text-align:center;line-height:1.8;white-space:normal;color:#ccc;background-color:#000;background-color:rgba(0,0,0,.6);font-family:sans-serif}#baguetteBox-overlay[_ngcontent-%COMP%]   .full-image[_ngcontent-%COMP%]:before{content:\"\";display:inline-block;height:50%;width:1px;margin-right:-1px}#baguetteBox-slider[_ngcontent-%COMP%]{position:absolute;left:0;top:0;height:100%;width:100%;white-space:nowrap;transition:left .4s ease,transform .4s ease}#baguetteBox-slider.bounce-from-right[_ngcontent-%COMP%]{-webkit-animation:d .4s ease-out;animation:d .4s ease-out}#baguetteBox-slider.bounce-from-left[_ngcontent-%COMP%]{-webkit-animation:e .4s ease-out;animation:e .4s ease-out}@-webkit-keyframes d{0%,to{margin-left:0}50%{margin-left:-30px}}@keyframes d{0%,to{margin-left:0}50%{margin-left:-30px}}@-webkit-keyframes e{0%,to{margin-left:0}50%{margin-left:30px}}@keyframes e{0%,to{margin-left:0}50%{margin-left:30px}}.baguetteBox-button#next-button[_ngcontent-%COMP%], .baguetteBox-button#previous-button[_ngcontent-%COMP%]{top:50%;top:calc(50% - 30px);width:44px;height:60px}.baguetteBox-button[_ngcontent-%COMP%]{position:absolute;cursor:pointer;outline:0;padding:0;margin:0;border:0;border-radius:15%;background-color:#323232;background-color:rgba(50,50,50,.5);color:#ddd;font:1.6em sans-serif;transition:background-color .4s ease}.baguetteBox-button[_ngcontent-%COMP%]:focus, .baguetteBox-button[_ngcontent-%COMP%]:hover{background-color:rgba(50,50,50,.9)}.baguetteBox-button#next-button[_ngcontent-%COMP%]{right:2%}.baguetteBox-button#previous-button[_ngcontent-%COMP%]{left:2%}.baguetteBox-button#close-button[_ngcontent-%COMP%]{top:20px;right:2%;right:calc(2% + 6px);width:30px;height:30px}.baguetteBox-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;left:0;top:0}.baguetteBox-spinner[_ngcontent-%COMP%]{width:40px;height:40px;display:inline-block;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-20px}.baguetteBox-double-bounce1[_ngcontent-%COMP%], .baguetteBox-double-bounce2[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:f 2s infinite ease-in-out;animation:f 2s infinite ease-in-out}.baguetteBox-double-bounce2[_ngcontent-%COMP%]{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes f{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes f{0%,to{transform:scale(0)}50%{transform:scale(1)}}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%;width:100%}.sp-loading[_ngcontent-%COMP%]{text-align:center;max-width:270px;padding:15px;font-size:12px;color:#888}.sp-loading[_ngcontent-%COMP%], .sp-wrap[_ngcontent-%COMP%]{border:5px solid #eee;border-radius:3px}.sp-wrap[_ngcontent-%COMP%]{display:none;line-height:0;font-size:0;background:#eee;position:relative;margin:0 25px 15px 0;float:left;max-width:300px}.sp-thumbs[_ngcontent-%COMP%]{text-align:left;display:inline-block}.sp-thumbs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:50px;min-width:50px;max-width:50px}.sp-thumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link, .sp-thumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{width:50px;height:50px;overflow:hidden;opacity:.3;display:inline-block;background-size:cover;background-position:50%;transition:all .2s ease-out}.sp-thumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1}.sp-current[_ngcontent-%COMP%], .sp-thumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{opacity:1!important;position:relative}.sp-large[_ngcontent-%COMP%]{position:relative;overflow:hidden;top:0;left:0}.sp-large[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.sp-large[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block}.sp-zoom[_ngcontent-%COMP%]{position:absolute;left:-50%;top:-50%;cursor:zoom-in;display:none}.sp-lightbox[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:100%;background:#000;background:rgba(0,0,0,.9);z-index:1031;display:none;cursor:pointer}.sp-lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;margin:auto;top:0;bottom:0;left:0;right:0;max-width:90%;max-height:90%;border:2px solid #fff}#sp-next[_ngcontent-%COMP%], #sp-prev[_ngcontent-%COMP%]{position:absolute;top:50%;margin-top:-25px;z-index:501;color:#fff;padding:14px;text-decoration:none;background:#000;border-radius:25px;border:2px solid #fff;width:50px;height:50px;box-sizing:border-box;transition:.2s}#sp-prev[_ngcontent-%COMP%]{left:10px}#sp-prev[_ngcontent-%COMP%]:before{content:\"\";border:7px solid transparent;border-right:15px solid #fff;position:absolute;top:16px;left:7px}#sp-next[_ngcontent-%COMP%]{right:10px}#sp-next[_ngcontent-%COMP%]:before{content:\"\";border:7px solid transparent;border-left:15px solid #fff;position:absolute;top:16px;left:18px}#sp-next[_ngcontent-%COMP%]:hover, #sp-prev[_ngcontent-%COMP%]:hover{background:#444}@media screen and (max-width:400px){.sp-wrap[_ngcontent-%COMP%]{margin:0 0 15px}#sp-next[_ngcontent-%COMP%], #sp-prev[_ngcontent-%COMP%]{top:auto;margin-top:0;bottom:25px}}.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.clean-block[_ngcontent-%COMP%]{padding-bottom:50px}.clean-block.dark[_ngcontent-%COMP%]{background-color:#f6f6f6}.clean-block.blue[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}.clean-block.blue[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none}.clean-block[_ngcontent-%COMP%]   .block-heading[_ngcontent-%COMP%]{padding-top:50px;margin-bottom:40px;text-align:center}.clean-block[_ngcontent-%COMP%]   .block-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;max-width:420px;margin:auto;opacity:.7}.clean-block.dark[_ngcontent-%COMP%]   .block-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.8}.clean-block[_ngcontent-%COMP%]   .block-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .clean-block[_ngcontent-%COMP%]   .block-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .clean-block[_ngcontent-%COMP%]   .block-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:1.2rem}.clean-block[_ngcontent-%COMP%]   .block-content[_ngcontent-%COMP%], .clean-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{box-shadow:0 2px 10px rgba(0,0,0,.075);background-color:#fff}.clean-block[_ngcontent-%COMP%]   .block-content[_ngcontent-%COMP%]{padding:40px}.clean-block.clean-hero[_ngcontent-%COMP%]{position:relative;text-align:center;background-size:cover;background-repeat:no-repeat;display:flex;align-items:center;justify-content:center;padding-bottom:0}.clean-block.clean-hero[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:currentColor;z-index:1}.clean-block.clean-hero[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{max-width:640px;color:#fff;z-index:2;padding:40px 15px;text-shadow:1px 1px 1px rgba(0,0,0,.15)}.clean-block.clean-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px}.clean-block.clean-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;margin-bottom:30px}.feature-box[_ngcontent-%COMP%]{padding:15px 20px 15px 70px}.feature-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:30px;position:absolute;left:15px;top:15px;width:30px;text-align:center;color:#3b99e0}.feature-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:1.2rem}.feature-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;opacity:.8}.clean-block.slider[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.clean-card[_ngcontent-%COMP%]{box-shadow:0 2px 10px rgba(0,0,0,.075);border-radius:3px;margin-bottom:40px;border:1px solid #eaeaea}.clean-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{border-radius:3px 3px 0 0;overflow:hidden}.clean-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:30px}.clean-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:1em}.clean-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.8;font-size:.85em;margin-bottom:.9em}.clean-card[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;color:#3b99e0;opacity:.75;height:2em;line-height:2;text-align:center;padding:.6em .4em}.clean-card[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1;text-decoration:none}.clean-block.clean-info[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px;text-align:center}.clean-block.clean-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:.8em;margin-bottom:.6em}.clean-block.clean-services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-bottom:30px;text-align:center}.clean-block.clean-services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:1em;margin-bottom:.8em}.clean-block.clean-services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;opacity:.8}.clean-block.clean-services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:25px;padding:6px 20px}.clean-block.clean-faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]{margin-bottom:20px}.clean-block.clean-faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]{font-weight:600;font-size:1em;line-height:1.5}.clean-block.clean-faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]:not(:first-child)   .question[_ngcontent-%COMP%]{margin-top:1.8em}.clean-block.clean-faq[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{font-size:1em;color:#7f7d7d;margin-top:20px}.clean-block.clean-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{border-top:2px solid #5ea4f3;background-color:#fff;max-width:500px;margin:auto;padding:40px;box-shadow:0 2px 10px rgba(0,0,0,.075)}.clean-block.clean-block.clean-gallery[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-bottom:20px}.clean-block.clean-gallery[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{box-shadow:0 2px 10px rgba(0,0,0,.075)}.clean-block.clean-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.2s ease-in-out}.clean-block.clean-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.clean-block.clean-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px}.baguetteBox-button[_ngcontent-%COMP%]{background-color:transparent!important}.clean-pricing-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{text-align:center;padding-bottom:10px;border-bottom:1px solid rgba(0,0,0,.1)}.clean-pricing-item[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.075);border-top:2px solid #5ea4f3;padding:30px;overflow:hidden;position:relative}.clean-block.clean-pricing[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%]:not(:last-child)   .item[_ngcontent-%COMP%]{margin-bottom:30px}.clean-pricing-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:600}.clean-pricing-item[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%]{width:160px;height:32px;font-size:12px;text-align:center;color:#fff;font-weight:700;box-shadow:0 2px 3px hsla(0,0%,53%,.25);background:#4dbe3b;transform:rotate(45deg);position:absolute;right:-42px;top:20px;padding-top:7px}.clean-pricing-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-top:20px;opacity:.7}.clean-pricing-item[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]{font-weight:600}.clean-pricing-item[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;font-size:18px;padding:5px}.clean-pricing-item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:15px 0;font-size:45px;text-align:center;color:#2288f9}.clean-pricing-item[_ngcontent-%COMP%]   .buy-now[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;margin:auto;font-weight:600;padding:9px 0}.clean-block.payment-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{border-top:2px solid #5ea4f3;box-shadow:0 2px 10px rgba(0,0,0,.075);background-color:#fff;padding:0;max-width:600px;margin:auto}.clean-block.payment-form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1em;border-bottom:1px solid rgba(0,0,0,.1);margin-bottom:.8em;font-weight:600;padding-bottom:8px}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]{background-color:#f7fbff;padding:25px}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-bottom:1em}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{font-weight:600;font-size:.9em}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{font-size:.8em;opacity:.6}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.2em}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{float:right;font-weight:600;font-size:.9em}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);margin-top:10px;padding-top:19px;font-weight:600;line-height:1}.clean-block.payment-form[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]{padding:25px 25px 15px}.clean-block.payment-form[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;margin-bottom:15px;color:#79818a;text-transform:uppercase}.clean-block.payment-form[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:.6em;padding:12px 0;font-weight:600}.clean-block.payment-form[_ngcontent-%COMP%]   .date-separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;margin-top:5px}.clean-block.clean-catalog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{padding-left:40px;padding-top:10px}.clean-block.clean-catalog[_ngcontent-%COMP%]   .filter-collapse[_ngcontent-%COMP%]   .filter-caret[_ngcontent-%COMP%]{float:right;font-size:12px;line-height:26px}.clean-block.clean-catalog[_ngcontent-%COMP%]   .filter-collapse[_ngcontent-%COMP%]{display:block;padding:10px;border:1px solid #ccc;margin:30px;border-radius:0;text-align:left}.clean-block.clean-catalog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1em;font-weight:600;margin-bottom:.8em}.clean-block.clean-catalog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:20px;font-weight:700;padding-bottom:20px}.clean-block.clean-catalog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]{margin-bottom:40px}.clean-block.clean-catalog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{word-wrap:break-word;max-width:100%}.clean-block.clean-catalog[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]{padding:0}.clean-block.clean-catalog[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-of-type{border-top:none;border-left:none;margin-bottom:20px}.clean-product-item[_ngcontent-%COMP%]{padding:20px;border-right:none;border-bottom:1px solid #e8e6e6;height:100%}.clean-product-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{margin-bottom:20px}.clean-product-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:220px;max-height:180px}.clean-product-item[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{margin-bottom:20px;text-align:center}.clean-product-item[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#585858;font-size:1.1em}.clean-product-item[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#8f8c8c}.clean-product-item[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.clean-product-item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{text-align:right;padding-right:10px}.clean-product-item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2em;font-weight:600;color:#32303c;margin:0}.clean-product-item[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{color:#fec000}.clean-product-item[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:14px;margin-right:2px}.clean-product-item[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{padding-right:10px}.clean-block.clean-catalog[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]{width:50%;margin:55px auto 0}.clean-block.clean-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{justify-content:center}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{padding:36px}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:40px}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:15px;border:2px solid #f0f0f0}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{padding-top:0}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{padding-top:1em;padding-bottom:1em}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{font-weight:600;font-size:1.3em}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-specs[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;margin-top:15px}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-specs[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-weight:400}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]{width:68px}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.9em}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:700;font-size:22px;text-align:right}.clean-block.clean-cart[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{background-color:#f7fbff;height:100%;padding:30px}.clean-block.clean-cart[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-size:1.25em;font-weight:600;padding-top:16px;padding-bottom:28px;text-transform:uppercase;letter-spacing:2px;color:#1d4f88}.clean-block.clean-cart[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-bottom:18px;margin-bottom:0;background:#fff;padding-left:20px;padding-right:20px}.clean-block.clean-cart[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:first-of-type{border-top:1px solid #86b4e8;padding-top:18px}.clean-block.clean-cart[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:last-of-type{color:#617ef3;border-bottom:1px solid #e6edf5}.clean-block.clean-cart[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:.65em;font-weight:600}.clean-block.clean-cart[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:.6em;float:right;margin-top:10px}.clean-block.clean-cart[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px;font-weight:600;font-size:1em;padding:10px 0}.clean-block.clean-product[_ngcontent-%COMP%]   .block-content[_ngcontent-%COMP%]{padding:20px}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{margin-bottom:50px}.clean-block.clean-product[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]{padding:20px;background-color:#f6f6f6}.clean-block.clean-product[_ngcontent-%COMP%]   .sp-wrap[_ngcontent-%COMP%]{background:transparent;border:none;float:none;max-width:100%}.clean-block.clean-product[_ngcontent-%COMP%]   .sp-thumbs[_ngcontent-%COMP%]{margin-top:15px}.clean-block.clean-product[_ngcontent-%COMP%]   .sp-thumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link{margin-right:10px}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{padding:20px 0}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{color:#fec000;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.1)}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 20px;margin-bottom:30px}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);padding-top:30px}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{max-width:720px;margin:0 auto}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:50px}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:60px;margin-bottom:20px}.clean-block.clean-product[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{padding-top:60px}.clean-block.clean-product[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{text-align:left}.clean-block.clean-product[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%], .clean-block.clean-product[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .specifications[_ngcontent-%COMP%]{padding-top:30px}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .specifications[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]{font-weight:700}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]{margin-bottom:30px;padding:20px;border:1px solid #ded7d7}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2em;font-weight:600}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.9em}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:12px;font-size:.9em}.clean-block.clean-product[_ngcontent-%COMP%]   .clean-related-items[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{margin-top:30px}.clean-related-item[_ngcontent-%COMP%]{border:1px solid #eaeaea;padding-top:20px;padding-bottom:20px}.clean-related-item[_ngcontent-%COMP%]   .related-name[_ngcontent-%COMP%]{text-align:center;margin-top:16px}.clean-related-item[_ngcontent-%COMP%]   .related-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1em;color:#212529}.clean-related-item[_ngcontent-%COMP%]   .related-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#999ea4}.clean-block.clean-product[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%], .clean-related-item[_ngcontent-%COMP%]   .related-name[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{color:#fec000;margin-bottom:10px}.clean-block.clean-product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .clean-block.clean-product[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .clean-related-item[_ngcontent-%COMP%]   .related-name[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;margin-right:2px}.clean-related-item[_ngcontent-%COMP%]   .related-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.3em;font-weight:600;color:#007bff}.clean-blog-post[_ngcontent-%COMP%]{padding-bottom:70px}.clean-blog-post[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.3em;font-weight:600;padding-top:17px}.clean-blog-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.95em}.clean-blog-post[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:5px 0 12px;font-size:.9em}.clean-blog-post[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child){margin-right:7px}.clean-blog-post[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.clean-block.clean-post[_ngcontent-%COMP%]{padding-top:100px}.clean-block.clean-post[_ngcontent-%COMP%]   .block-content[_ngcontent-%COMP%]{padding:0}.clean-block.clean-post[_ngcontent-%COMP%]   .post-image[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;width:100%;height:300px}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]{padding:70px 50px;font-size:.9em}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:30px}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]{padding:20px 0}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#007bff}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child){margin-right:40px}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;padding-top:20px;padding-bottom:20px}.clean-testimonial-item[_ngcontent-%COMP%]{border:1px solid #eaeaea;box-shadow:0 2px 10px rgba(0,0,0,.075);margin-bottom:30px;background-color:#fff;color:#212529;text-align:left}.clean-testimonial-item[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:40px}.clean-testimonial-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1em;font-weight:600}.clean-testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}.clean-testimonial-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.9em;color:#3b99e0}.clean-block.add-on[_ngcontent-%COMP%]{padding:50px 0;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column}.clean-block.add-on.call-to-action[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-right:0;margin-bottom:20px}.clean-block.add-on.call-to-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:20px}.clean-block.add-on.newsletter-sign-up[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-right:20px}.clean-block.add-on.newsletter-sign-up[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:85%;margin-bottom:18px;margin-top:10px}.clean-block.add-on.newsletter-sign-up[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:20px}.clean-block.add-on.newsletter-sign-up[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{max-width:300px}.clean-block.add-on.social-icons[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:45px}.clean-block.add-on.social-icons[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:24px;margin-right:4px;color:#6aacf3;border:1px solid;opacity:.75;border-radius:50%;width:45px;height:45px;display:inline-block;text-align:center}.clean-block.add-on.social-icons[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1;text-decoration:none}.clean-block.add-on.social-icons.blue[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;opacity:1}.clean-block.add-on.social-icons.blue[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.8;text-decoration:none}.clean-block.add-on.sponsors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:170px;filter:grayscale(.8)}.clean-block.add-on.sponsors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child)   img[_ngcontent-%COMP%]{margin-bottom:20px}@media (max-width:767.98px){.clean-block.clean-services[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   .card[_ngcontent-%COMP%]{margin-bottom:0}}@media (min-width:576px){.clean-block[_ngcontent-%COMP%]{padding-bottom:100px}.clean-block[_ngcontent-%COMP%]   .block-heading[_ngcontent-%COMP%]{padding-top:80px}.clean-block.clean-hero[_ngcontent-%COMP%]{min-height:680px}.clean-block.clean-hero[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{padding:0}.clean-block.clean-block.clean-gallery[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-bottom:40px}.clean-block.payment-form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2em}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]{padding:40px}.clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], .clean-block.payment-form[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:1em}.clean-block.payment-form[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]{padding:40px 40px 30px}.clean-block.payment-form[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:2em}}@media (min-width:768px){.clean-block.clean-info.right[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{flex-direction:row-reverse}.clean-block.clean-info[_ngcontent-%COMP%]{padding-left:0;padding-right:0;text-align:inherit}.clean-block.clean-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{padding:0;text-align:left}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]:not(:last-child){padding-top:0;padding-bottom:25px}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:700;font-size:22px}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{text-align:center}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]{margin:auto;padding-left:15px;padding-right:5px}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{font-size:1em}.clean-block.clean-cart[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{padding:0 15px 0 1.5em}.clean-block.clean-post[_ngcontent-%COMP%]   .post-image[_ngcontent-%COMP%]{height:400px}.clean-block.clean-blog-list[_ngcontent-%COMP%]   .block-content[_ngcontent-%COMP%]{padding:80px}.clean-blog-post[_ngcontent-%COMP%]{padding-bottom:70px}.clean-block.add-on[_ngcontent-%COMP%]{flex-direction:row}.clean-block.add-on.call-to-action[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .clean-block.add-on.sponsors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child)   img[_ngcontent-%COMP%]{margin-right:20px;margin-bottom:0}.clean-block.add-on.newsletter-sign-up[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0}.clean-block.add-on.newsletter-sign-up[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:200px;margin-bottom:0;margin-top:0;margin-right:10px}.clean-block.clean-catalog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{padding-top:30px}.clean-block.clean-catalog[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]{padding:30px 30px 30px 0}.clean-block.clean-catalog[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .clean-product-item[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{text-align:left}.clean-block.clean-catalog[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-of-type{border-top:1px solid #e8e6e6;border-left:1px solid #e8e6e6}.clean-block.clean-catalog[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .clean-product-item[_ngcontent-%COMP%]{border-right:1px solid #e8e6e6}.clean-block.clean-product[_ngcontent-%COMP%]   .block-content[_ngcontent-%COMP%]{padding:40px}.clean-block.clean-product[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{text-align:right}}@media (min-width:992px){.clean-card[_ngcontent-%COMP%]{margin-bottom:0}.clean-blog-post[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-top:0}.clean-block.clean-post[_ngcontent-%COMP%]   .post-image[_ngcontent-%COMP%]{height:500px}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]{padding:70px 150px}.clean-block.clean-testimonials[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-bottom:0}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]{padding:70px 100px}.clean-block.clean-post[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-top:50px}}.clean-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-weight:600;font-size:.8rem;text-transform:uppercase}.clean-navbar.fixed-bottom[_ngcontent-%COMP%], .clean-navbar.fixed-top[_ngcontent-%COMP%]{box-shadow:0 0 15px rgba(0,0,0,.1)}.clean-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{padding-right:2rem}.clean-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]:last-child   .item[_ngcontent-%COMP%]:last-child, .clean-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]:last-child   .item[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]{padding-right:0}.clean-navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:1.5rem}.clean-navbar.fixed-top[_ngcontent-%COMP%] + .page[_ngcontent-%COMP%]{padding-top:62px}@media (min-width:576px){.navbar[_ngcontent-%COMP%]{padding-top:1.2rem;padding-bottom:1.2rem}.clean-navbar.fixed-top[_ngcontent-%COMP%] + .page[_ngcontent-%COMP%]{padding-top:5rem}}.header-standard[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding-left:20px;font-size:20px}.header-standard[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{padding-top:200px;padding-bottom:200px;text-align:center}.header-standard[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:50px}.header-standard[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin:30px auto;font-size:20px;margin-top:30px}.page-footer[_ngcontent-%COMP%]{background-color:#fff;padding-top:30px;text-align:center}.page-footer.dark[_ngcontent-%COMP%]{background-color:#2b2f31}.page-footer[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]{background-color:#fff;padding-top:3px;padding-bottom:3px;text-align:center;margin-top:50px;border:1px solid #ededed}.page-footer.dark[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]{background-color:#222425;border-color:#222425}.page-footer[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px;color:#7d8288}.page-footer.dark[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#ccc}.page-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding-left:0;line-height:1.7}.page-footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin-top:30px}.page-footer.dark[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff}.page-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#53595f;text-decoration:none}.page-footer.dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#d2d1d1}.page-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .page-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#1d2125}.page-footer.dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .page-footer.dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}@media (min-width:576px){.page-footer[_ngcontent-%COMP%]{text-align:left}}@media (min-width:768px){.page-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:10px}.page-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after, .page-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\"\";position:absolute;left:0;width:2px;height:6px;border-radius:2px;background-color:#007bff;transform:rotate(-45deg)}.page-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{top:9px;transform:rotate(-45deg)}.page-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{top:13px;transform:rotate(45deg)}}\n/*# sourceMappingURL=bootstrap.min.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQixZQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQywrQkFBK0IsQ0FBQywyQkFBMkIsQ0FBQyw2QkFBNkIsU0FBUyxDQUFDLGlDQUFpQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLHdDQUF3QyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxxQ0FBcUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLGlDQUFpQyxDQUFDLDRDQUE0QyxhQUFhLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLCtCQUErQixDQUFDLHNCQUFzQixDQUFDLHdDQUF3QyxVQUFVLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFxRCwyQ0FBa0gsQ0FBQyxzQ0FBc0MsZ0NBQWdDLENBQUMsd0JBQXdCLENBQUMscUNBQXFDLGdDQUFnQyxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixNQUFNLGFBQWEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsYUFBYSxNQUFNLGFBQWEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLE1BQU0sYUFBYSxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLE1BQU0sYUFBYSxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxvRUFBb0UsT0FBTyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsa0NBQWtDLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLG9DQUFvQyxDQUFDLG9EQUFvRCxrQ0FBa0MsQ0FBQyxnQ0FBZ0MsUUFBUSxDQUFDLG9DQUFvQyxPQUFPLENBQUMsaUNBQWlDLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLHdEQUF3RCxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDJDQUEyQyxDQUFDLG1DQUFtQyxDQUFDLDRCQUE0QiwyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsTUFBaUMsa0JBQWtCLENBQUMsSUFBK0Isa0JBQWtCLENBQUMsQ0FBQyxhQUFhLE1BQWlDLGtCQUFrQixDQUFDLElBQStCLGtCQUFrQixDQUFDLENBQUMsVUFBVSxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksaUJBQWlCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLHFCQUFxQixxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsZUFBZSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsZUFBZSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsdUNBQXVDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLGdDQUFnQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixjQUFjLENBQUMsV0FBVyxDQUFDLFlBQVksYUFBYSxDQUFDLFNBQVMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGFBQWEsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxTQUFTLFNBQVMsQ0FBQyxnQkFBZ0IsVUFBVSxDQUFDLDRCQUE0QixDQUFDLDRCQUE0QixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxVQUFVLENBQUMsZ0JBQWdCLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDhCQUE4QixlQUFlLENBQUMsb0NBQW9DLFNBQVMsZUFBZSxDQUFDLGtCQUFrQixRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sZ0JBQWdCLENBQUMsYUFBYSxtQkFBbUIsQ0FBQyxrQkFBa0Isd0JBQXdCLENBQUMsa0JBQWtCLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsV0FBVyxDQUFDLDRCQUE0QixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyw4QkFBOEIsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsbUNBQW1DLFVBQVUsQ0FBQyw2RkFBNkYsb0JBQW9CLENBQUMsa0RBQWtELHNDQUFzQyxDQUFDLHFCQUFxQixDQUFDLDRCQUE0QixZQUFZLENBQUMsd0JBQXdCLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLDJCQUEyQixDQUFxQixZQUFZLENBQXVCLGtCQUFrQixDQUFzQixzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQywrQkFBK0IsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQyxTQUFTLENBQUMsOEJBQThCLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLHVDQUF1QyxDQUFDLDJCQUEyQixrQkFBa0IsQ0FBQywwQkFBMEIsY0FBYyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsMkJBQTJCLENBQUMsbUJBQW1CLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLGNBQWMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFlBQVksc0NBQXNDLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsbUJBQW1CLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsWUFBWSxDQUFDLGVBQWUsZUFBZSxDQUFDLGFBQWEsQ0FBQyxjQUFjLFVBQVUsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxrQ0FBa0Msa0JBQWtCLENBQUMsaUJBQWlCLENBQUMscUNBQXFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsb0NBQW9DLGNBQWMsQ0FBQyxVQUFVLENBQUMseUNBQXlDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGlDQUFpQyxrQkFBa0IsQ0FBQywyQ0FBMkMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsNkRBQTZELGdCQUFnQixDQUFDLHlDQUF5QyxhQUFhLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyw2QkFBNkIsNEJBQTRCLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsc0NBQXNDLENBQUMsNkNBQTZDLGtCQUFrQixDQUFDLHdDQUF3QyxzQ0FBc0MsQ0FBQyx5Q0FBeUMsMEJBQTBCLENBQUMsK0NBQTZFLHFCQUFxQixDQUFDLCtCQUErQixpQkFBaUIsQ0FBQyxvQkFBb0Isc0NBQXNDLENBQUMsNkJBQTZCLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLG9CQUFvQixxQkFBcUIsQ0FBQyxzQ0FBc0MsQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLDREQUE0RCxrQkFBa0IsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLDRCQUE0QixXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHVDQUF1QyxDQUFDLGtCQUFrQixDQUFpQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyx1Q0FBdUMsZUFBZSxDQUFDLGlDQUFpQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLDhCQUE4QixhQUFhLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxvQ0FBb0MsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsK0JBQStCLDRCQUE0QixDQUFDLHNDQUFzQyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxhQUFhLENBQUMsc0NBQXNDLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLG9DQUFvQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsMENBQTBDLGlCQUFpQixDQUFDLCtDQUErQyxlQUFlLENBQUMsY0FBYyxDQUFDLHNEQUFzRCxjQUFjLENBQUMsVUFBVSxDQUFDLDRDQUE0QyxrQkFBa0IsQ0FBQywyQ0FBMkMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsMkNBQTJDLG1DQUFtQyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHdDQUF3QyxzQkFBc0IsQ0FBQyw4Q0FBOEMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsK0NBQStDLGVBQWUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDBDQUEwQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsb0NBQW9DLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLDBEQUEwRCxXQUFXLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLDRDQUE0QyxhQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHVDQUF1QyxhQUFhLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLDZDQUE2QyxjQUFjLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLGlEQUFpRCxrQkFBa0IsQ0FBQywwQ0FBMEMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLHFDQUFxQyxTQUFTLENBQUMsd0RBQXdELGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsWUFBWSxDQUFDLGlCQUFpQixDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQywyQkFBMkIsa0JBQWtCLENBQUMsK0JBQStCLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxrQ0FBa0Msa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLGFBQWEsQ0FBQyxlQUFlLENBQUMsMENBQTBDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQywyQkFBK0MsWUFBWSxDQUF1QixrQkFBa0IsQ0FBdUIsNkJBQTZCLENBQUMsMkJBQTJCLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLDhCQUE4QixlQUFlLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLGFBQWEsQ0FBQyxnQ0FBZ0MsVUFBVSxDQUFDLGdCQUFnQixDQUFDLCtCQUErQixrQkFBa0IsQ0FBQyw0Q0FBNEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLHVDQUE0RCxzQkFBc0IsQ0FBQywrQkFBK0IsWUFBWSxDQUFDLHdDQUF3QyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyx1REFBMkUsWUFBWSxDQUF1QixrQkFBa0IsQ0FBc0Isc0JBQXNCLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLHdDQUF3QyxhQUFhLENBQUMsc0RBQXNELGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxzREFBc0QsZUFBZSxDQUFDLGVBQWUsQ0FBQyxxRUFBcUUsZUFBZSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsNEVBQTRFLGVBQWUsQ0FBQyxrRUFBa0UsVUFBVSxDQUFDLHdEQUF3RCxjQUFjLENBQUMsK0NBQStDLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsaUNBQWlDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsb0NBQW9DLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsb0NBQW9DLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsa0RBQWtELDRCQUE0QixDQUFDLGdCQUFnQixDQUFDLGlEQUFpRCxhQUFhLENBQUMsK0JBQStCLENBQUMsdUNBQXVDLGVBQWUsQ0FBQyxlQUFlLENBQUMsd0NBQXdDLGNBQWMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLHdDQUF3QyxlQUFlLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsMENBQTBDLFlBQVksQ0FBQyx5Q0FBeUMsa0JBQWtCLENBQUMsb0NBQW9DLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxvQ0FBb0Msc0JBQXNCLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsc0NBQXNDLGVBQWUsQ0FBQyw2Q0FBNkMsaUJBQWlCLENBQUMsc0RBQXNELGNBQWMsQ0FBQyx5REFBeUQsZUFBZSxDQUFDLGVBQWUsQ0FBQyx1REFBdUQsYUFBYSxDQUFDLG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLHNEQUFzRCxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQywwREFBMEQsaUJBQWlCLENBQUMsd0RBQXdELG1DQUFtQyxDQUFDLGdCQUFnQixDQUFDLDBEQUEwRCxjQUFjLENBQUMsc0RBQXNELGVBQWUsQ0FBQyxhQUFhLENBQUMsd0RBQXdELGtCQUFrQixDQUFDLHlEQUF5RCxlQUFlLENBQUMsa0JBQWtCLENBQUMscURBQXFELGdCQUFnQixDQUFDLDREQUE0RCxlQUFlLENBQUMseUdBQXlHLGdCQUFnQixDQUFDLCtEQUErRCxlQUFlLENBQUMsK0RBQStELGtCQUFrQixDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxrRUFBa0UsZUFBZSxDQUFDLGVBQWUsQ0FBQyxvRUFBb0UsY0FBYyxDQUFDLGlFQUFpRSxlQUFlLENBQUMsY0FBYyxDQUFDLHVEQUF1RCxlQUFlLENBQUMsb0JBQW9CLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGtDQUFrQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsb0NBQW9DLGFBQWEsQ0FBQyxhQUFhLENBQUMsMENBQTBDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxtR0FBbUcsYUFBYSxDQUFDLGtCQUFrQixDQUFDLHNLQUFzSyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGlCQUFpQixtQkFBbUIsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHVCQUF1QixrQkFBa0IsQ0FBQyxjQUFjLENBQUMsNkNBQTZDLGdCQUFnQixDQUFDLHlCQUF5QixhQUFhLENBQUMsd0JBQXdCLGlCQUFpQixDQUFDLHVDQUF1QyxTQUFTLENBQUMsb0NBQW9DLHFCQUFxQixDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsbUNBQW1DLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxzQ0FBc0MsZUFBZSxDQUFDLHFDQUFxQyxrQkFBa0IsQ0FBQyw4Q0FBOEMsY0FBYyxDQUFDLG1EQUFtRCxhQUFhLENBQUMsb0VBQW9FLGlCQUFpQixDQUFDLHNDQUFzQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLHdCQUF3QixDQUFDLHNDQUFzQyxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsbUNBQW1DLFlBQVksQ0FBQywyQkFBMkIsZUFBZSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsY0FBYyxDQUFDLDJCQUEyQixjQUFjLENBQUMsYUFBYSxDQUFDLG9CQUFvQixjQUFjLENBQUMsaUJBQWlCLENBQXFCLFlBQVksQ0FBdUIsa0JBQWtCLENBQXNCLHNCQUFzQixDQUEyQixxQkFBcUIsQ0FBQyxzQ0FBc0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLDBDQUEwQyxrQkFBa0IsQ0FBQywwQ0FBMEMsa0JBQWtCLENBQUMsNkNBQTZDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsOENBQThDLGtCQUFrQixDQUFDLG9EQUFvRCxlQUFlLENBQUMsMENBQTBDLGdCQUFnQixDQUFDLDBDQUEwQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGdEQUFnRCxTQUFTLENBQUMsb0JBQW9CLENBQUMsK0NBQStDLFVBQVUsQ0FBQyxTQUFTLENBQUMscURBQXFELFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxtQ0FBbUMsZUFBZSxDQUE4QixvQkFBb0IsQ0FBQyxvREFBb0Qsa0JBQWtCLENBQUMsNEJBQTRCLHNEQUFzRCxlQUFlLENBQUMsQ0FBQyx5QkFBeUIsYUFBYSxvQkFBb0IsQ0FBQyw0QkFBNEIsZ0JBQWdCLENBQUMsd0JBQXdCLGdCQUFnQixDQUFDLDhCQUE4QixTQUFTLENBQUMsNkNBQTZDLGtCQUFrQixDQUFDLGlDQUFpQyxlQUFlLENBQUMsb0NBQW9DLFlBQVksQ0FBQywwRkFBMEYsYUFBYSxDQUFDLHdDQUF3QyxzQkFBc0IsQ0FBQywrQ0FBK0MsY0FBYyxDQUFDLENBQUMseUJBQXlCLDhDQUE2RSwwQkFBMEIsQ0FBQyx3QkFBd0IsY0FBYyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsWUFBWSxDQUFDLHdDQUF3QyxTQUFTLENBQUMsZUFBZSxDQUFDLHlEQUF5RCxhQUFhLENBQUMsbUJBQW1CLENBQUMsK0NBQStDLGVBQWUsQ0FBQyxjQUFjLENBQUMsa0RBQWtELGlCQUFpQixDQUFDLGtFQUFrRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsc0RBQXNELGFBQWEsQ0FBQyxzREFBc0Qsc0JBQXNCLENBQUMsb0NBQW9DLFlBQVksQ0FBQyw0Q0FBNEMsWUFBWSxDQUFDLGlCQUFpQixtQkFBbUIsQ0FBQyxvQkFBMkMsa0JBQWtCLENBQUMsMEZBQTBGLGlCQUFpQixDQUFDLGVBQWUsQ0FBQywwQ0FBMEMsZUFBZSxDQUFDLDZDQUE2QyxlQUFlLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsZ0JBQWdCLENBQUMscUNBQXFDLHdCQUF3QixDQUFDLHVFQUF1RSxlQUFlLENBQUMsd0RBQXdELDRCQUE0QixDQUFDLDZCQUE2QixDQUFDLHlEQUF5RCw4QkFBOEIsQ0FBQywwQ0FBMEMsWUFBWSxDQUFDLDREQUE0RCxnQkFBZ0IsQ0FBQyxDQUFDLHlCQUF5QixZQUFZLGVBQWUsQ0FBQyxvQkFBb0IsYUFBYSxDQUFDLG9DQUFvQyxZQUFZLENBQUMsbUNBQW1DLGtCQUFrQixDQUFDLHNDQUFzQyxlQUFlLENBQUMsbUNBQW1DLGtCQUFrQixDQUFDLHNDQUFzQyxnQkFBZ0IsQ0FBQyxDQUFDLG9DQUFvQyxlQUFlLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLG1EQUFtRCxrQ0FBa0MsQ0FBQyxvQ0FBb0Msa0JBQWtCLENBQUMsOEdBQThHLGVBQWUsQ0FBQyxvQkFBb0IsZ0JBQWdCLENBQUMsOEJBQThCLGdCQUFnQixDQUFDLHlCQUF5QixRQUFRLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLDhCQUE4QixnQkFBZ0IsQ0FBQyxDQUFDLG1DQUFtQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGdDQUFnQyxjQUFjLENBQUMsNkJBQTZCLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsYUFBYSxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0Isd0JBQXdCLENBQUMsK0JBQStCLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsb0NBQW9DLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLGlDQUFpQyxXQUFXLENBQUMsYUFBYSxDQUFDLHNDQUFzQyxVQUFVLENBQUMsZ0JBQWdCLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLGNBQWMsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHFCQUFxQixVQUFVLENBQUMsZUFBZSxhQUFhLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLGFBQWEsQ0FBQywwQ0FBMEMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLG9EQUFvRCxVQUFVLENBQUMseUJBQXlCLGFBQWEsZUFBZSxDQUFDLENBQUMseUJBQXlCLG1CQUFtQixpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxtREFBbUQsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFrQyx3QkFBd0IsQ0FBQywwQkFBMEIsT0FBTyxDQUFrQyx3QkFBd0IsQ0FBQyx5QkFBeUIsUUFBUSxDQUFpQyx1QkFBdUIsQ0FBQyxDQUMzcndCLDRDQUE0QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWd1ZXR0ZUJveC1vdmVybGF5e2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjA7cG9zaXRpb246Zml4ZWQ7b3ZlcmZsb3c6aGlkZGVuO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTAwMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOiMyMjI7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44KTt0cmFuc2l0aW9uOm9wYWNpdHkgLjVzIGVhc2V9I2JhZ3VldHRlQm94LW92ZXJsYXkudmlzaWJsZXtvcGFjaXR5OjF9I2JhZ3VldHRlQm94LW92ZXJsYXkgLmZ1bGwtaW1hZ2V7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0jYmFndWV0dGVCb3gtb3ZlcmxheSAuZnVsbC1pbWFnZSBmaWd1cmV7ZGlzcGxheTppbmxpbmU7bWFyZ2luOjA7aGVpZ2h0OjEwMCV9I2JhZ3VldHRlQm94LW92ZXJsYXkgLmZ1bGwtaW1hZ2UgaW1ne2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWF4LWhlaWdodDoxMDAlO21heC13aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3gtc2hhZG93OjAgMCA4cHggcmdiYSgwLDAsMCwuNil9I2JhZ3VldHRlQm94LW92ZXJsYXkgLmZ1bGwtaW1hZ2UgZmlnY2FwdGlvbntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MS44O3doaXRlLXNwYWNlOm5vcm1hbDtjb2xvcjojY2NjO2JhY2tncm91bmQtY29sb3I6IzAwMDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjYpO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWZ9I2JhZ3VldHRlQm94LW92ZXJsYXkgLmZ1bGwtaW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6NTAlO3dpZHRoOjFweDttYXJnaW4tcmlnaHQ6LTFweH0jYmFndWV0dGVCb3gtc2xpZGVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3doaXRlLXNwYWNlOm5vd3JhcDt0cmFuc2l0aW9uOmxlZnQgLjRzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjRzIGVhc2U7dHJhbnNpdGlvbjpsZWZ0IC40cyBlYXNlLHRyYW5zZm9ybSAuNHMgZWFzZTt0cmFuc2l0aW9uOmxlZnQgLjRzIGVhc2UsdHJhbnNmb3JtIC40cyBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIC40cyBlYXNlfSNiYWd1ZXR0ZUJveC1zbGlkZXIuYm91bmNlLWZyb20tcmlnaHR7LXdlYmtpdC1hbmltYXRpb246ZCAuNHMgZWFzZS1vdXQ7YW5pbWF0aW9uOmQgLjRzIGVhc2Utb3V0fSNiYWd1ZXR0ZUJveC1zbGlkZXIuYm91bmNlLWZyb20tbGVmdHstd2Via2l0LWFuaW1hdGlvbjplIC40cyBlYXNlLW91dDthbmltYXRpb246ZSAuNHMgZWFzZS1vdXR9QC13ZWJraXQta2V5ZnJhbWVzIGR7MCUsdG97bWFyZ2luLWxlZnQ6MH01MCV7bWFyZ2luLWxlZnQ6LTMwcHh9fUBrZXlmcmFtZXMgZHswJSx0b3ttYXJnaW4tbGVmdDowfTUwJXttYXJnaW4tbGVmdDotMzBweH19QC13ZWJraXQta2V5ZnJhbWVzIGV7MCUsdG97bWFyZ2luLWxlZnQ6MH01MCV7bWFyZ2luLWxlZnQ6MzBweH19QGtleWZyYW1lcyBlezAlLHRve21hcmdpbi1sZWZ0OjB9NTAle21hcmdpbi1sZWZ0OjMwcHh9fS5iYWd1ZXR0ZUJveC1idXR0b24jbmV4dC1idXR0b24sLmJhZ3VldHRlQm94LWJ1dHRvbiNwcmV2aW91cy1idXR0b257dG9wOjUwJTt0b3A6Y2FsYyg1MCUgLSAzMHB4KTt3aWR0aDo0NHB4O2hlaWdodDo2MHB4fS5iYWd1ZXR0ZUJveC1idXR0b257cG9zaXRpb246YWJzb2x1dGU7Y3Vyc29yOnBvaW50ZXI7b3V0bGluZTowO3BhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MDtib3JkZXItcmFkaXVzOjE1JTtiYWNrZ3JvdW5kLWNvbG9yOiMzMjMyMzI7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDUwLDUwLDUwLC41KTtjb2xvcjojZGRkO2ZvbnQ6MS42ZW0gc2Fucy1zZXJpZjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjRzIGVhc2V9LmJhZ3VldHRlQm94LWJ1dHRvbjpmb2N1cywuYmFndWV0dGVCb3gtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSg1MCw1MCw1MCwuOSl9LmJhZ3VldHRlQm94LWJ1dHRvbiNuZXh0LWJ1dHRvbntyaWdodDoyJX0uYmFndWV0dGVCb3gtYnV0dG9uI3ByZXZpb3VzLWJ1dHRvbntsZWZ0OjIlfS5iYWd1ZXR0ZUJveC1idXR0b24jY2xvc2UtYnV0dG9ue3RvcDoyMHB4O3JpZ2h0OjIlO3JpZ2h0OmNhbGMoMiUgKyA2cHgpO3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHh9LmJhZ3VldHRlQm94LWJ1dHRvbiBzdmd7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowfS5iYWd1ZXR0ZUJveC1zcGlubmVye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW4tdG9wOi0yMHB4O21hcmdpbi1sZWZ0Oi0yMHB4fS5iYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMSwuYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3BhY2l0eTouNjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7LXdlYmtpdC1hbmltYXRpb246ZiAycyBpbmZpbml0ZSBlYXNlLWluLW91dDthbmltYXRpb246ZiAycyBpbmZpbml0ZSBlYXNlLWluLW91dH0uYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTJ7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTFzO2FuaW1hdGlvbi1kZWxheTotMXN9QC13ZWJraXQta2V5ZnJhbWVzIGZ7MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgZnswJSx0b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19Ym9keSxodG1se2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LnNwLWxvYWRpbmd7dGV4dC1hbGlnbjpjZW50ZXI7bWF4LXdpZHRoOjI3MHB4O3BhZGRpbmc6MTVweDtmb250LXNpemU6MTJweDtjb2xvcjojODg4fS5zcC1sb2FkaW5nLC5zcC13cmFwe2JvcmRlcjo1cHggc29saWQgI2VlZTtib3JkZXItcmFkaXVzOjNweH0uc3Atd3JhcHtkaXNwbGF5Om5vbmU7bGluZS1oZWlnaHQ6MDtmb250LXNpemU6MDtiYWNrZ3JvdW5kOiNlZWU7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjAgMjVweCAxNXB4IDA7ZmxvYXQ6bGVmdDttYXgtd2lkdGg6MzAwcHh9LnNwLXRodW1ic3t0ZXh0LWFsaWduOmxlZnQ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnNwLXRodW1icyBpbWd7bWluLWhlaWdodDo1MHB4O21pbi13aWR0aDo1MHB4O21heC13aWR0aDo1MHB4fS5zcC10aHVtYnMgYTpsaW5rLC5zcC10aHVtYnMgYTp2aXNpdGVke3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3ZlcmZsb3c6aGlkZGVuO29wYWNpdHk6LjM7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246NTAlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlLW91dH0uc3AtdGh1bWJzIGE6aG92ZXJ7b3BhY2l0eToxfS5zcC1jdXJyZW50LC5zcC10aHVtYnMgYTphY3RpdmV7b3BhY2l0eToxIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZX0uc3AtbGFyZ2V7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO3RvcDowO2xlZnQ6MH0uc3AtbGFyZ2UgYSBpbWd7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LnNwLWxhcmdlIGF7ZGlzcGxheTpibG9ja30uc3Atem9vbXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi01MCU7dG9wOi01MCU7Y3Vyc29yOnpvb20taW47ZGlzcGxheTpub25lfS5zcC1saWdodGJveHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOiMwMDA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC45KTt6LWluZGV4OjEwMzE7ZGlzcGxheTpub25lO2N1cnNvcjpwb2ludGVyfS5zcC1saWdodGJveCBpbWd7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOmF1dG87dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7bWF4LXdpZHRoOjkwJTttYXgtaGVpZ2h0OjkwJTtib3JkZXI6MnB4IHNvbGlkICNmZmZ9I3NwLW5leHQsI3NwLXByZXZ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTttYXJnaW4tdG9wOi0yNXB4O3otaW5kZXg6NTAxO2NvbG9yOiNmZmY7cGFkZGluZzoxNHB4O3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQ6IzAwMDtib3JkZXItcmFkaXVzOjI1cHg7Ym9yZGVyOjJweCBzb2xpZCAjZmZmO3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246LjJzfSNzcC1wcmV2e2xlZnQ6MTBweH0jc3AtcHJldjpiZWZvcmV7Y29udGVudDpcIlwiO2JvcmRlcjo3cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjE1cHggc29saWQgI2ZmZjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtsZWZ0OjdweH0jc3AtbmV4dHtyaWdodDoxMHB4fSNzcC1uZXh0OmJlZm9yZXtjb250ZW50OlwiXCI7Ym9yZGVyOjdweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItbGVmdDoxNXB4IHNvbGlkICNmZmY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE2cHg7bGVmdDoxOHB4fSNzcC1uZXh0OmhvdmVyLCNzcC1wcmV2OmhvdmVye2JhY2tncm91bmQ6IzQ0NH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KXsuc3Atd3JhcHttYXJnaW46MCAwIDE1cHh9I3NwLW5leHQsI3NwLXByZXZ7dG9wOmF1dG87bWFyZ2luLXRvcDowO2JvdHRvbToyNXB4fX0uYnRuIGl7bWFyZ2luLXJpZ2h0OjVweH0uY2xlYW4tYmxvY2t7cGFkZGluZy1ib3R0b206NTBweH0uY2xlYW4tYmxvY2suZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjZ9LmNsZWFuLWJsb2NrLmJsdWV7YmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO2NvbG9yOiNmZmZ9LmNsZWFuLWJsb2NrLmJsdWUgaW5wdXR7Ym9yZGVyOm5vbmV9LmNsZWFuLWJsb2NrIC5ibG9jay1oZWFkaW5ne3BhZGRpbmctdG9wOjUwcHg7bWFyZ2luLWJvdHRvbTo0MHB4O3RleHQtYWxpZ246Y2VudGVyfS5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyBwe3RleHQtYWxpZ246Y2VudGVyO21heC13aWR0aDo0MjBweDttYXJnaW46YXV0bztvcGFjaXR5Oi43fS5jbGVhbi1ibG9jay5kYXJrIC5ibG9jay1oZWFkaW5nIHB7b3BhY2l0eTouOH0uY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcgaDEsLmNsZWFuLWJsb2NrIC5ibG9jay1oZWFkaW5nIGgyLC5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyBoM3ttYXJnaW4tYm90dG9tOjEuMnJlbX0uY2xlYW4tYmxvY2sgLmJsb2NrLWNvbnRlbnQsLmNsZWFuLWJsb2NrIC5jb250ZW50e2JveC1zaGFkb3c6MCAycHggMTBweCByZ2JhKDAsMCwwLC4wNzUpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uY2xlYW4tYmxvY2sgLmJsb2NrLWNvbnRlbnR7cGFkZGluZzo0MHB4fS5jbGVhbi1ibG9jay5jbGVhbi1oZXJve3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmctYm90dG9tOjB9LmNsZWFuLWJsb2NrLmNsZWFuLWhlcm86YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjt6LWluZGV4OjF9LmNsZWFuLWJsb2NrLmNsZWFuLWhlcm8gLnRleHR7bWF4LXdpZHRoOjY0MHB4O2NvbG9yOiNmZmY7ei1pbmRleDoyO3BhZGRpbmc6NDBweCAxNXB4O3RleHQtc2hhZG93OjFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjE1KX0uY2xlYW4tYmxvY2suY2xlYW4taGVybyBoMnttYXJnaW4tYm90dG9tOjMwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLWhlcm8gcHtmb250LXNpemU6MThweDttYXJnaW4tYm90dG9tOjMwcHh9LmZlYXR1cmUtYm94e3BhZGRpbmc6MTVweCAyMHB4IDE1cHggNzBweH0uZmVhdHVyZS1ib3ggLmljb257Zm9udC1zaXplOjMwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxNXB4O3RvcDoxNXB4O3dpZHRoOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzNiOTllMH0uZmVhdHVyZS1ib3ggaDR7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxLjJyZW19LmZlYXR1cmUtYm94IHB7Zm9udC1zaXplOi45ZW07b3BhY2l0eTouOH0uY2xlYW4tYmxvY2suc2xpZGVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99LmNsZWFuLWNhcmR7Ym94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoMCwwLDAsLjA3NSk7Ym9yZGVyLXJhZGl1czozcHg7bWFyZ2luLWJvdHRvbTo0MHB4O2JvcmRlcjoxcHggc29saWQgI2VhZWFlYX0uY2xlYW4tY2FyZCAuaW1hZ2V7Ym9yZGVyLXJhZGl1czozcHggM3B4IDAgMDtvdmVyZmxvdzpoaWRkZW59LmNsZWFuLWNhcmQgLmluZm97cGFkZGluZzozMHB4fS5jbGVhbi1jYXJkIGg0e2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MWVtfS5jbGVhbi1jYXJkIHB7b3BhY2l0eTouODtmb250LXNpemU6Ljg1ZW07bWFyZ2luLWJvdHRvbTouOWVtfS5jbGVhbi1jYXJkIC5pY29ucyBhe2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiMzYjk5ZTA7b3BhY2l0eTouNzU7aGVpZ2h0OjJlbTtsaW5lLWhlaWdodDoyO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6LjZlbSAuNGVtfS5jbGVhbi1jYXJkIC5pY29ucyBhOmhvdmVye29wYWNpdHk6MTt0ZXh0LWRlY29yYXRpb246bm9uZX0uY2xlYW4tYmxvY2suY2xlYW4taW5mb3twYWRkaW5nLWxlZnQ6MjBweDtwYWRkaW5nLXJpZ2h0OjIwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LmNsZWFuLWJsb2NrLmNsZWFuLWluZm8gaDN7bWFyZ2luLXRvcDouOGVtO21hcmdpbi1ib3R0b206LjZlbX0uY2xlYW4tYmxvY2suY2xlYW4tc2VydmljZXMgLmNhcmR7bWFyZ2luLWJvdHRvbTozMHB4O3RleHQtYWxpZ246Y2VudGVyfS5jbGVhbi1ibG9jay5jbGVhbi1zZXJ2aWNlcyAuY2FyZCBoNHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjFlbTttYXJnaW4tYm90dG9tOi44ZW19LmNsZWFuLWJsb2NrLmNsZWFuLXNlcnZpY2VzIC5jYXJkIHB7Zm9udC1zaXplOi45ZW07b3BhY2l0eTouOH0uY2xlYW4tYmxvY2suY2xlYW4tc2VydmljZXMgLmNhcmQgYnV0dG9ue21hcmdpbi1ib3R0b206MjVweDtwYWRkaW5nOjZweCAyMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1mYXEgLmZhcS1pdGVte21hcmdpbi1ib3R0b206MjBweH0uY2xlYW4tYmxvY2suY2xlYW4tZmFxIC5mYXEtaXRlbSAucXVlc3Rpb257Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxZW07bGluZS1oZWlnaHQ6MS41fS5jbGVhbi1ibG9jay5jbGVhbi1mYXEgLmZhcS1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIC5xdWVzdGlvbnttYXJnaW4tdG9wOjEuOGVtfS5jbGVhbi1ibG9jay5jbGVhbi1mYXEgLmZhcS1pdGVtIC5hbnN3ZXJ7Zm9udC1zaXplOjFlbTtjb2xvcjojN2Y3ZDdkO21hcmdpbi10b3A6MjBweH0uY2xlYW4tYmxvY2suY2xlYW4tZm9ybSBmb3Jte2JvcmRlci10b3A6MnB4IHNvbGlkICM1ZWE0ZjM7YmFja2dyb3VuZC1jb2xvcjojZmZmO21heC13aWR0aDo1MDBweDttYXJnaW46YXV0bztwYWRkaW5nOjQwcHg7Ym94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoMCwwLDAsLjA3NSl9LmNsZWFuLWJsb2NrLmNsZWFuLWJsb2NrLmNsZWFuLWdhbGxlcnkgLml0ZW17bWFyZ2luLWJvdHRvbToyMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1nYWxsZXJ5IC5pdGVtIC5pbWFnZXtib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMDc1KX0uY2xlYW4tYmxvY2suY2xlYW4tZ2FsbGVyeSAubGlnaHRib3ggaW1ne3RyYW5zaXRpb246LjJzIGVhc2UtaW4tb3V0fS5jbGVhbi1ibG9jay5jbGVhbi1nYWxsZXJ5IC5saWdodGJveCBpbWc6aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfS5jbGVhbi1ibG9jay5jbGVhbi1nYWxsZXJ5IGltZ3tib3JkZXItcmFkaXVzOjRweH0uYmFndWV0dGVCb3gtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fS5jbGVhbi1wcmljaW5nLWl0ZW0gLmhlYWRpbmd7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZy1ib3R0b206MTBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKX0uY2xlYW4tcHJpY2luZy1pdGVte2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMDc1KTtib3JkZXItdG9wOjJweCBzb2xpZCAjNWVhNGYzO3BhZGRpbmc6MzBweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9LmNsZWFuLWJsb2NrLmNsZWFuLXByaWNpbmcgLmNvbC1tZC01Om5vdCg6bGFzdC1jaGlsZCkgLml0ZW17bWFyZ2luLWJvdHRvbTozMHB4fS5jbGVhbi1wcmljaW5nLWl0ZW0gYnV0dG9ue2ZvbnQtd2VpZ2h0OjYwMH0uY2xlYW4tcHJpY2luZy1pdGVtIC5yaWJib257d2lkdGg6MTYwcHg7aGVpZ2h0OjMycHg7Zm9udC1zaXplOjEycHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2ZmZjtmb250LXdlaWdodDo3MDA7Ym94LXNoYWRvdzowIDJweCAzcHggaHNsYSgwLDAlLDUzJSwuMjUpO2JhY2tncm91bmQ6IzRkYmUzYjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi00MnB4O3RvcDoyMHB4O3BhZGRpbmctdG9wOjdweH0uY2xlYW4tcHJpY2luZy1pdGVtIHB7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoyMHB4O29wYWNpdHk6Ljd9LmNsZWFuLXByaWNpbmctaXRlbSAuZmVhdHVyZXMgLmZlYXR1cmV7Zm9udC13ZWlnaHQ6NjAwfS5jbGVhbi1wcmljaW5nLWl0ZW0gLmZlYXR1cmVzIGg0e3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxOHB4O3BhZGRpbmc6NXB4fS5jbGVhbi1wcmljaW5nLWl0ZW0gLnByaWNlIGg0e21hcmdpbjoxNXB4IDA7Zm9udC1zaXplOjQ1cHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzIyODhmOX0uY2xlYW4tcHJpY2luZy1pdGVtIC5idXktbm93IGJ1dHRvbnt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46YXV0bztmb250LXdlaWdodDo2MDA7cGFkZGluZzo5cHggMH0uY2xlYW4tYmxvY2sucGF5bWVudC1mb3JtIGZvcm17Ym9yZGVyLXRvcDoycHggc29saWQgIzVlYTRmMztib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMDc1KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzowO21heC13aWR0aDo2MDBweDttYXJnaW46YXV0b30uY2xlYW4tYmxvY2sucGF5bWVudC1mb3JtIC50aXRsZXtmb250LXNpemU6MWVtO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO21hcmdpbi1ib3R0b206LjhlbTtmb250LXdlaWdodDo2MDA7cGFkZGluZy1ib3R0b206OHB4fS5jbGVhbi1ibG9jay5wYXltZW50LWZvcm0gLnByb2R1Y3Rze2JhY2tncm91bmQtY29sb3I6I2Y3ZmJmZjtwYWRkaW5nOjI1cHh9LmNsZWFuLWJsb2NrLnBheW1lbnQtZm9ybSAucHJvZHVjdHMgLml0ZW17bWFyZ2luLWJvdHRvbToxZW19LmNsZWFuLWJsb2NrLnBheW1lbnQtZm9ybSAucHJvZHVjdHMgLml0ZW0tbmFtZXtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOi45ZW19LmNsZWFuLWJsb2NrLnBheW1lbnQtZm9ybSAucHJvZHVjdHMgLml0ZW0tZGVzY3JpcHRpb257Zm9udC1zaXplOi44ZW07b3BhY2l0eTouNn0uY2xlYW4tYmxvY2sucGF5bWVudC1mb3JtIC5wcm9kdWN0cyAuaXRlbSBwe21hcmdpbi1ib3R0b206LjJlbX0uY2xlYW4tYmxvY2sucGF5bWVudC1mb3JtIC5wcm9kdWN0cyAucHJpY2V7ZmxvYXQ6cmlnaHQ7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZTouOWVtfS5jbGVhbi1ibG9jay5wYXltZW50LWZvcm0gLnByb2R1Y3RzIC50b3RhbHtib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTttYXJnaW4tdG9wOjEwcHg7cGFkZGluZy10b3A6MTlweDtmb250LXdlaWdodDo2MDA7bGluZS1oZWlnaHQ6MX0uY2xlYW4tYmxvY2sucGF5bWVudC1mb3JtIC5jYXJkLWRldGFpbHN7cGFkZGluZzoyNXB4IDI1cHggMTVweH0uY2xlYW4tYmxvY2sucGF5bWVudC1mb3JtIC5jYXJkLWRldGFpbHMgbGFiZWx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NjAwO21hcmdpbi1ib3R0b206MTVweDtjb2xvcjojNzk4MThhO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uY2xlYW4tYmxvY2sucGF5bWVudC1mb3JtIC5jYXJkLWRldGFpbHMgYnV0dG9ue21hcmdpbi10b3A6LjZlbTtwYWRkaW5nOjEycHggMDtmb250LXdlaWdodDo2MDB9LmNsZWFuLWJsb2NrLnBheW1lbnQtZm9ybSAuZGF0ZS1zZXBhcmF0b3J7bWFyZ2luLWxlZnQ6MTBweDttYXJnaW4tcmlnaHQ6MTBweDttYXJnaW4tdG9wOjVweH0uY2xlYW4tYmxvY2suY2xlYW4tY2F0YWxvZyAuZmlsdGVyc3twYWRkaW5nLWxlZnQ6NDBweDtwYWRkaW5nLXRvcDoxMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXRhbG9nIC5maWx0ZXItY29sbGFwc2UgLmZpbHRlci1jYXJldHtmbG9hdDpyaWdodDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoyNnB4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXRhbG9nIC5maWx0ZXItY29sbGFwc2V7ZGlzcGxheTpibG9jaztwYWRkaW5nOjEwcHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO21hcmdpbjozMHB4O2JvcmRlci1yYWRpdXM6MDt0ZXh0LWFsaWduOmxlZnR9LmNsZWFuLWJsb2NrLmNsZWFuLWNhdGFsb2cgLmZpbHRlcnMgaDN7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDo2MDA7bWFyZ2luLWJvdHRvbTouOGVtfS5jbGVhbi1ibG9jay5jbGVhbi1jYXRhbG9nIC5maWx0ZXJzIC5oZWFkaW5ne2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMDtwYWRkaW5nLWJvdHRvbToyMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXRhbG9nIC5maWx0ZXJzIC5maWx0ZXItaXRlbXttYXJnaW4tYm90dG9tOjQwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLWNhdGFsb2cgLmZpbHRlcnMgbGFiZWx7d29yZC13cmFwOmJyZWFrLXdvcmQ7bWF4LXdpZHRoOjEwMCV9LmNsZWFuLWJsb2NrLmNsZWFuLWNhdGFsb2cgLnByb2R1Y3Rze3BhZGRpbmc6MH0uY2xlYW4tYmxvY2suY2xlYW4tY2F0YWxvZyAucHJvZHVjdHMgLnJvdzpmaXJzdC1vZi10eXBle2JvcmRlci10b3A6bm9uZTtib3JkZXItbGVmdDpub25lO21hcmdpbi1ib3R0b206MjBweH0uY2xlYW4tcHJvZHVjdC1pdGVte3BhZGRpbmc6MjBweDtib3JkZXItcmlnaHQ6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZThlNmU2O2hlaWdodDoxMDAlfS5jbGVhbi1wcm9kdWN0LWl0ZW0gLmltYWdle21hcmdpbi1ib3R0b206MjBweH0uY2xlYW4tcHJvZHVjdC1pdGVtIC5pbWFnZSBpbWd7bWF4LXdpZHRoOjIyMHB4O21heC1oZWlnaHQ6MTgwcHh9LmNsZWFuLXByb2R1Y3QtaXRlbSAucHJvZHVjdC1uYW1le21hcmdpbi1ib3R0b206MjBweDt0ZXh0LWFsaWduOmNlbnRlcn0uY2xlYW4tcHJvZHVjdC1pdGVtIC5wcm9kdWN0LW5hbWUgYXtjb2xvcjojNTg1ODU4O2ZvbnQtc2l6ZToxLjFlbX0uY2xlYW4tcHJvZHVjdC1pdGVtIC5wcm9kdWN0LW5hbWUgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojOGY4YzhjfS5jbGVhbi1wcm9kdWN0LWl0ZW0gLmFib3V0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5jbGVhbi1wcm9kdWN0LWl0ZW0gLnByaWNle3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDoxMHB4fS5jbGVhbi1wcm9kdWN0LWl0ZW0gLnByaWNlIGgze2ZvbnQtc2l6ZToxLjJlbTtmb250LXdlaWdodDo2MDA7Y29sb3I6IzMyMzAzYzttYXJnaW46MH0uY2xlYW4tcHJvZHVjdC1pdGVtIC5yYXRpbmd7Y29sb3I6I2ZlYzAwMH0uY2xlYW4tcHJvZHVjdC1pdGVtIC5yYXRpbmcgaW1ne3dpZHRoOjE0cHg7bWFyZ2luLXJpZ2h0OjJweH0uY2xlYW4tcHJvZHVjdC1pdGVtIC5hZGQgLmljb257cGFkZGluZy1yaWdodDoxMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXRhbG9nIC5wcm9kdWN0cyAucGFnZXN7d2lkdGg6NTAlO21hcmdpbjo1NXB4IGF1dG8gMH0uY2xlYW4tYmxvY2suY2xlYW4tY2F0YWxvZyAucGFnaW5hdGlvbnstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jbGVhbi1ibG9jay5jbGVhbi1jYXJ0IC5pdGVtc3twYWRkaW5nOjM2cHh9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLml0ZW1zIC5wcm9kdWN0e3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206NDBweH0uY2xlYW4tYmxvY2suY2xlYW4tY2FydCAuaXRlbXMgLnByb2R1Y3QgLnByb2R1Y3QtaW1hZ2V7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MTVweDtib3JkZXI6MnB4IHNvbGlkICNmMGYwZjB9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLml0ZW1zIC5wcm9kdWN0e3BhZGRpbmctdG9wOjB9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLml0ZW1zIC5wcm9kdWN0IC5wcm9kdWN0LWluZm97cGFkZGluZy10b3A6MWVtO3BhZGRpbmctYm90dG9tOjFlbX0uY2xlYW4tYmxvY2suY2xlYW4tY2FydCAuaXRlbXMgLnByb2R1Y3QgLnByb2R1Y3QtbmFtZXtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEuM2VtfS5jbGVhbi1ibG9jay5jbGVhbi1jYXJ0IC5pdGVtcyAucHJvZHVjdCAucHJvZHVjdC1pbmZvIC5wcm9kdWN0LXNwZWNze2ZvbnQtc2l6ZTouOHJlbTtmb250LXdlaWdodDo2MDA7bWFyZ2luLXRvcDoxNXB4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXJ0IC5pdGVtcyAucHJvZHVjdCAucHJvZHVjdC1pbmZvIC5wcm9kdWN0LXNwZWNzIC52YWx1ZXtmb250LXdlaWdodDo0MDB9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLml0ZW1zIC5wcm9kdWN0IC5xdWFudGl0eSAucXVhbnRpdHktaW5wdXR7d2lkdGg6NjhweH0uY2xlYW4tYmxvY2suY2xlYW4tY2FydCAuaXRlbXMgLnByb2R1Y3QgLnF1YW50aXR5IGxhYmVse2ZvbnQtc2l6ZTouOWVtfS5jbGVhbi1ibG9jay5jbGVhbi1jYXJ0IC5pdGVtcyAucHJvZHVjdCAucHJpY2V7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToyMnB4O3RleHQtYWxpZ246cmlnaHR9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLnN1bW1hcnl7YmFja2dyb3VuZC1jb2xvcjojZjdmYmZmO2hlaWdodDoxMDAlO3BhZGRpbmc6MzBweH0uY2xlYW4tYmxvY2suY2xlYW4tY2FydCAuc3VtbWFyeSBoM3t0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MS4yNWVtO2ZvbnQtd2VpZ2h0OjYwMDtwYWRkaW5nLXRvcDoxNnB4O3BhZGRpbmctYm90dG9tOjI4cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjJweDtjb2xvcjojMWQ0Zjg4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXJ0IC5zdW1tYXJ5IGg0e3BhZGRpbmctYm90dG9tOjE4cHg7bWFyZ2luLWJvdHRvbTowO2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nLWxlZnQ6MjBweDtwYWRkaW5nLXJpZ2h0OjIwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLnN1bW1hcnkgaDQ6Zmlyc3Qtb2YtdHlwZXtib3JkZXItdG9wOjFweCBzb2xpZCAjODZiNGU4O3BhZGRpbmctdG9wOjE4cHh9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLnN1bW1hcnkgaDQ6bGFzdC1vZi10eXBle2NvbG9yOiM2MTdlZjM7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U2ZWRmNX0uY2xlYW4tYmxvY2suY2xlYW4tY2FydCAuc3VtbWFyeSAudGV4dHtmb250LXNpemU6LjY1ZW07Zm9udC13ZWlnaHQ6NjAwfS5jbGVhbi1ibG9jay5jbGVhbi1jYXJ0IC5zdW1tYXJ5IC5wcmljZXtmb250LXNpemU6LjZlbTtmbG9hdDpyaWdodDttYXJnaW4tdG9wOjEwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLnN1bW1hcnkgYnV0dG9ue21hcmdpbi10b3A6MjBweDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjFlbTtwYWRkaW5nOjEwcHggMH0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAuYmxvY2stY29udGVudHtwYWRkaW5nOjIwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnByb2R1Y3QtaW5mb3ttYXJnaW4tYm90dG9tOjUwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLmdhbGxlcnl7cGFkZGluZzoyMHB4O2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNn0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAuc3Atd3JhcHtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2Zsb2F0Om5vbmU7bWF4LXdpZHRoOjEwMCV9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnNwLXRodW1ic3ttYXJnaW4tdG9wOjE1cHh9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnNwLXRodW1icyBhOmxpbmt7bWFyZ2luLXJpZ2h0OjEwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnByb2R1Y3QtaW5mbyAuaW5mbyAucHJpY2V7cGFkZGluZzoyMHB4IDB9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnByb2R1Y3QtaW5mbyAuaW5mbyAucHJpY2UgaDN7Zm9udC1zaXplOjEuNWVtO2ZvbnQtd2VpZ2h0OjcwMH0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAucHJvZHVjdC1pbmZvIC5pbmZvIC5yYXRpbmd7Y29sb3I6I2ZlYzAwMDtwYWRkaW5nLWJvdHRvbToyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpfS5jbGVhbi1ibG9jay5jbGVhbi1wcm9kdWN0IC5wcm9kdWN0LWluZm8gLmluZm8gYnV0dG9ue3BhZGRpbmc6MTBweCAyMHB4O21hcmdpbi1ib3R0b206MzBweH0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAucHJvZHVjdC1pbmZvIC5pbmZvIGJ1dHRvbiAuZmF7bWFyZ2luLXJpZ2h0OjEwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnByb2R1Y3QtaW5mbyAuaW5mbyAuc3VtbWFyeXtib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtwYWRkaW5nLXRvcDozMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1wcm9kdWN0IC5wcm9kdWN0LWluZm8gLmluZm8gLnN1bW1hcnkgcHtmb250LXNpemU6LjllbX0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAucHJvZHVjdC1pbmZvIC5kZXNjcmlwdGlvbnttYXgtd2lkdGg6NzIwcHg7bWFyZ2luOjAgYXV0b30uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAucHJvZHVjdC1pbmZvIC5kZXNjcmlwdGlvbiBwe21hcmdpbi1ib3R0b206NTBweH0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAucHJvZHVjdC1pbmZvIC5kZXNjcmlwdGlvbiBoNHttYXJnaW4tdG9wOjYwcHg7bWFyZ2luLWJvdHRvbToyMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1wcm9kdWN0IC50YWItY29udGVudCAuZGVzY3JpcHRpb257cGFkZGluZy10b3A6NjBweH0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAudGFiLWNvbnRlbnQgLmRlc2NyaXB0aW9uIC5yaWdodHt0ZXh0LWFsaWduOmxlZnR9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnRhYi1jb250ZW50IC5yZXZpZXdzLC5jbGVhbi1ibG9jay5jbGVhbi1wcm9kdWN0IC50YWItY29udGVudCAuc3BlY2lmaWNhdGlvbnN7cGFkZGluZy10b3A6MzBweH0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAucHJvZHVjdC1pbmZvIC5zcGVjaWZpY2F0aW9ucyAuc3RhdHtmb250LXdlaWdodDo3MDB9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnByb2R1Y3QtaW5mbyAucmV2aWV3cyAucmV2aWV3LWl0ZW17bWFyZ2luLWJvdHRvbTozMHB4O3BhZGRpbmc6MjBweDtib3JkZXI6MXB4IHNvbGlkICNkZWQ3ZDd9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnByb2R1Y3QtaW5mbyAucmV2aWV3cyAucmV2aWV3LWl0ZW0gaDR7Zm9udC1zaXplOjEuMmVtO2ZvbnQtd2VpZ2h0OjYwMH0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAucHJvZHVjdC1pbmZvIC5yZXZpZXdzIC5yZXZpZXctaXRlbSBzcGFue2ZvbnQtc2l6ZTouOWVtfS5jbGVhbi1ibG9jay5jbGVhbi1wcm9kdWN0IC5wcm9kdWN0LWluZm8gLnJldmlld3MgLnJldmlldy1pdGVtIHB7bWFyZ2luLXRvcDoxMnB4O2ZvbnQtc2l6ZTouOWVtfS5jbGVhbi1ibG9jay5jbGVhbi1wcm9kdWN0IC5jbGVhbi1yZWxhdGVkLWl0ZW1zIC5pdGVtc3ttYXJnaW4tdG9wOjMwcHh9LmNsZWFuLXJlbGF0ZWQtaXRlbXtib3JkZXI6MXB4IHNvbGlkICNlYWVhZWE7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToyMHB4fS5jbGVhbi1yZWxhdGVkLWl0ZW0gLnJlbGF0ZWQtbmFtZXt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOjE2cHh9LmNsZWFuLXJlbGF0ZWQtaXRlbSAucmVsYXRlZC1uYW1lIGF7Zm9udC1zaXplOjFlbTtjb2xvcjojMjEyNTI5fS5jbGVhbi1yZWxhdGVkLWl0ZW0gLnJlbGF0ZWQtbmFtZSBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiM5OTllYTR9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnJldmlld3MgLnJldmlldy1pdGVtIC5yYXRpbmcsLmNsZWFuLXJlbGF0ZWQtaXRlbSAucmVsYXRlZC1uYW1lIC5yYXRpbmd7Y29sb3I6I2ZlYzAwMDttYXJnaW4tYm90dG9tOjEwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXByb2R1Y3QgLnByb2R1Y3QtaW5mbyAuaW5mbyAucmF0aW5nIGltZywuY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAucmV2aWV3cyAucmV2aWV3LWl0ZW0gLnJhdGluZyBpbWcsLmNsZWFuLXJlbGF0ZWQtaXRlbSAucmVsYXRlZC1uYW1lIC5yYXRpbmcgaW1ne3dpZHRoOjE4cHg7bWFyZ2luLXJpZ2h0OjJweH0uY2xlYW4tcmVsYXRlZC1pdGVtIC5yZWxhdGVkLW5hbWUgaDR7Zm9udC1zaXplOjEuM2VtO2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjojMDA3YmZmfS5jbGVhbi1ibG9nLXBvc3R7cGFkZGluZy1ib3R0b206NzBweH0uY2xlYW4tYmxvZy1wb3N0IGgze2ZvbnQtc2l6ZToxLjNlbTtmb250LXdlaWdodDo2MDA7cGFkZGluZy10b3A6MTdweH0uY2xlYW4tYmxvZy1wb3N0IHB7Zm9udC1zaXplOi45NWVtfS5jbGVhbi1ibG9nLXBvc3QgLmluZm97cGFkZGluZzo1cHggMCAxMnB4O2ZvbnQtc2l6ZTouOWVtfS5jbGVhbi1ibG9nLXBvc3QgLmluZm8gc3Bhbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDo3cHh9LmNsZWFuLWJsb2ctcG9zdCAuaW5mbyBhe2NvbG9yOmluaGVyaXR9LmNsZWFuLWJsb2NrLmNsZWFuLXBvc3R7cGFkZGluZy10b3A6MTAwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXBvc3QgLmJsb2NrLWNvbnRlbnR7cGFkZGluZzowfS5jbGVhbi1ibG9jay5jbGVhbi1wb3N0IC5wb3N0LWltYWdle2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7d2lkdGg6MTAwJTtoZWlnaHQ6MzAwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXBvc3QgLnBvc3QtYm9keXtwYWRkaW5nOjcwcHggNTBweDtmb250LXNpemU6LjllbX0uY2xlYW4tYmxvY2suY2xlYW4tcG9zdCAucG9zdC1ib2R5IGgze2ZvbnQtd2VpZ2h0OjYwMH0uY2xlYW4tYmxvY2suY2xlYW4tcG9zdCAucG9zdC1ib2R5IHB7bWFyZ2luLWJvdHRvbTozMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1wb3N0IC5wb3N0LWJvZHkgLnBvc3QtaW5mb3twYWRkaW5nOjIwcHggMH0uY2xlYW4tYmxvY2suY2xlYW4tcG9zdCAucG9zdC1ib2R5IC5wb3N0LWluZm8gc3Bhbntjb2xvcjojMDA3YmZmfS5jbGVhbi1ibG9jay5jbGVhbi1wb3N0IC5wb3N0LWJvZHkgLnBvc3QtaW5mbyBzcGFuOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0OjQwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXBvc3QgLnBvc3QtYm9keSBoNHtmb250LXdlaWdodDo2MDA7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToyMHB4fS5jbGVhbi10ZXN0aW1vbmlhbC1pdGVte2JvcmRlcjoxcHggc29saWQgI2VhZWFlYTtib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMDc1KTttYXJnaW4tYm90dG9tOjMwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMyMTI1Mjk7dGV4dC1hbGlnbjpsZWZ0fS5jbGVhbi10ZXN0aW1vbmlhbC1pdGVtIC5jYXJkLWJvZHl7cGFkZGluZzo0MHB4fS5jbGVhbi10ZXN0aW1vbmlhbC1pdGVtIGgze2ZvbnQtc2l6ZToxLjFlbTtmb250LXdlaWdodDo2MDB9LmNsZWFuLXRlc3RpbW9uaWFsLWl0ZW0gcHtmb250LXNpemU6LjllbX0uY2xlYW4tdGVzdGltb25pYWwtaXRlbSBoNHtmb250LXNpemU6LjllbTtjb2xvcjojM2I5OWUwfS5jbGVhbi1ibG9jay5hZGQtb257cGFkZGluZzo1MHB4IDA7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5jbGVhbi1ibG9jay5hZGQtb24uY2FsbC10by1hY3Rpb24gaDN7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbToyMHB4fS5jbGVhbi1ibG9jay5hZGQtb24uY2FsbC10by1hY3Rpb24gYnV0dG9ue2JvcmRlci1yYWRpdXM6MjBweH0uY2xlYW4tYmxvY2suYWRkLW9uLm5ld3NsZXR0ZXItc2lnbi11cCBoMntwYWRkaW5nLXJpZ2h0OjIwcHh9LmNsZWFuLWJsb2NrLmFkZC1vbi5uZXdzbGV0dGVyLXNpZ24tdXAgaW5wdXR7bWF4LXdpZHRoOjg1JTttYXJnaW4tYm90dG9tOjE4cHg7bWFyZ2luLXRvcDoxMHB4fS5jbGVhbi1ibG9jay5hZGQtb24ubmV3c2xldHRlci1zaWduLXVwIGJ1dHRvbntib3JkZXItcmFkaXVzOjIwcHh9LmNsZWFuLWJsb2NrLmFkZC1vbi5uZXdzbGV0dGVyLXNpZ24tdXAgLmlucHV0LWdyb3Vwe21heC13aWR0aDozMDBweH0uY2xlYW4tYmxvY2suYWRkLW9uLnNvY2lhbC1pY29ucyAuaWNvbnMgaXtsaW5lLWhlaWdodDo0NXB4fS5jbGVhbi1ibG9jay5hZGQtb24uc29jaWFsLWljb25zIC5pY29ucyBhe2ZvbnQtc2l6ZToyNHB4O21hcmdpbi1yaWdodDo0cHg7Y29sb3I6IzZhYWNmMztib3JkZXI6MXB4IHNvbGlkO29wYWNpdHk6Ljc1O2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjQ1cHg7aGVpZ2h0OjQ1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpjZW50ZXJ9LmNsZWFuLWJsb2NrLmFkZC1vbi5zb2NpYWwtaWNvbnMgLmljb25zIGE6aG92ZXJ7b3BhY2l0eToxO3RleHQtZGVjb3JhdGlvbjpub25lfS5jbGVhbi1ibG9jay5hZGQtb24uc29jaWFsLWljb25zLmJsdWUgLmljb25zIGF7Y29sb3I6I2ZmZjtvcGFjaXR5OjF9LmNsZWFuLWJsb2NrLmFkZC1vbi5zb2NpYWwtaWNvbnMuYmx1ZSAuaWNvbnMgYTpob3ZlcntvcGFjaXR5Oi44O3RleHQtZGVjb3JhdGlvbjpub25lfS5jbGVhbi1ibG9jay5hZGQtb24uc3BvbnNvcnMgYSBpbWd7bWF4LXdpZHRoOjE3MHB4Oy13ZWJraXQtZmlsdGVyOmdyYXlzY2FsZSguOCk7ZmlsdGVyOmdyYXlzY2FsZSguOCl9LmNsZWFuLWJsb2NrLmFkZC1vbi5zcG9uc29ycyBhOm5vdCg6bGFzdC1jaGlsZCkgaW1ne21hcmdpbi1ib3R0b206MjBweH1AbWVkaWEgKG1heC13aWR0aDo3NjcuOThweCl7LmNsZWFuLWJsb2NrLmNsZWFuLXNlcnZpY2VzIC5yb3cgZGl2Omxhc3QtY2hpbGQgLmNhcmR7bWFyZ2luLWJvdHRvbTowfX1AbWVkaWEgKG1pbi13aWR0aDo1NzZweCl7LmNsZWFuLWJsb2Nre3BhZGRpbmctYm90dG9tOjEwMHB4fS5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZ3twYWRkaW5nLXRvcDo4MHB4fS5jbGVhbi1ibG9jay5jbGVhbi1oZXJve21pbi1oZWlnaHQ6NjgwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLWhlcm8gLnRleHR7cGFkZGluZzowfS5jbGVhbi1ibG9jay5jbGVhbi1ibG9jay5jbGVhbi1nYWxsZXJ5IC5pdGVte21hcmdpbi1ib3R0b206NDBweH0uY2xlYW4tYmxvY2sucGF5bWVudC1mb3JtIC50aXRsZXtmb250LXNpemU6MS4yZW19LmNsZWFuLWJsb2NrLnBheW1lbnQtZm9ybSAucHJvZHVjdHN7cGFkZGluZzo0MHB4fS5jbGVhbi1ibG9jay5wYXltZW50LWZvcm0gLnByb2R1Y3RzIC5pdGVtLW5hbWUsLmNsZWFuLWJsb2NrLnBheW1lbnQtZm9ybSAucHJvZHVjdHMgLnByaWNle2ZvbnQtc2l6ZToxZW19LmNsZWFuLWJsb2NrLnBheW1lbnQtZm9ybSAuY2FyZC1kZXRhaWxze3BhZGRpbmc6NDBweCA0MHB4IDMwcHh9LmNsZWFuLWJsb2NrLnBheW1lbnQtZm9ybSAuY2FyZC1kZXRhaWxzIGJ1dHRvbnttYXJnaW4tdG9wOjJlbX19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5jbGVhbi1ibG9jay5jbGVhbi1pbmZvLnJpZ2h0Pi5jb250YWluZXI+LnJvd3stbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9LmNsZWFuLWJsb2NrLmNsZWFuLWluZm97cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3RleHQtYWxpZ246aW5oZXJpdH0uY2xlYW4tYmxvY2suY2xlYW4taW5mbyBoM3ttYXJnaW4tdG9wOjB9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLml0ZW1zIC5wcm9kdWN0e3BhZGRpbmc6MDt0ZXh0LWFsaWduOmxlZnR9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLml0ZW1zIC5wcm9kdWN0Om5vdCg6bGFzdC1jaGlsZCl7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbToyNXB4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXJ0IC5pdGVtcyAucHJvZHVjdCAucHJpY2V7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToyMnB4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXJ0IC5pdGVtcyAucHJvZHVjdCAucXVhbnRpdHl7dGV4dC1hbGlnbjpjZW50ZXJ9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLml0ZW1zIC5wcm9kdWN0IC5xdWFudGl0eSAucXVhbnRpdHktaW5wdXR7bWFyZ2luOmF1dG87cGFkZGluZy1sZWZ0OjE1cHg7cGFkZGluZy1yaWdodDo1cHh9LmNsZWFuLWJsb2NrLmNsZWFuLWNhcnQgLml0ZW1zIC5wcm9kdWN0IC5wcm9kdWN0LW5hbWV7Zm9udC1zaXplOjFlbX0uY2xlYW4tYmxvY2suY2xlYW4tY2FydCAuaXRlbXMgLnByb2R1Y3QgLnByb2R1Y3QtaW5mb3twYWRkaW5nOjAgMTVweCAwIDEuNWVtfS5jbGVhbi1ibG9jay5jbGVhbi1wb3N0IC5wb3N0LWltYWdle2hlaWdodDo0MDBweH0uY2xlYW4tYmxvY2suY2xlYW4tYmxvZy1saXN0IC5ibG9jay1jb250ZW50e3BhZGRpbmc6ODBweH0uY2xlYW4tYmxvZy1wb3N0e3BhZGRpbmctYm90dG9tOjcwcHh9LmNsZWFuLWJsb2NrLmFkZC1vbnstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30uY2xlYW4tYmxvY2suYWRkLW9uLmNhbGwtdG8tYWN0aW9uIGgzLC5jbGVhbi1ibG9jay5hZGQtb24uc3BvbnNvcnMgYTpub3QoOmxhc3QtY2hpbGQpIGltZ3ttYXJnaW4tcmlnaHQ6MjBweDttYXJnaW4tYm90dG9tOjB9LmNsZWFuLWJsb2NrLmFkZC1vbi5uZXdzbGV0dGVyLXNpZ24tdXAgaDJ7bWFyZ2luLWJvdHRvbTowfS5jbGVhbi1ibG9jay5hZGQtb24ubmV3c2xldHRlci1zaWduLXVwIGlucHV0e21heC13aWR0aDoyMDBweDttYXJnaW4tYm90dG9tOjA7bWFyZ2luLXRvcDowO21hcmdpbi1yaWdodDoxMHB4fS5jbGVhbi1ibG9jay5jbGVhbi1jYXRhbG9nIC5maWx0ZXJze3BhZGRpbmctdG9wOjMwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLWNhdGFsb2cgLnByb2R1Y3Rze3BhZGRpbmc6MzBweCAzMHB4IDMwcHggMH0uY2xlYW4tYmxvY2suY2xlYW4tY2F0YWxvZyAucHJvZHVjdHMgLmNsZWFuLXByb2R1Y3QtaXRlbSAucHJvZHVjdC1uYW1le3RleHQtYWxpZ246bGVmdH0uY2xlYW4tYmxvY2suY2xlYW4tY2F0YWxvZyAucHJvZHVjdHMgLnJvdzpmaXJzdC1vZi10eXBle2JvcmRlci10b3A6MXB4IHNvbGlkICNlOGU2ZTY7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNlOGU2ZTZ9LmNsZWFuLWJsb2NrLmNsZWFuLWNhdGFsb2cgLnByb2R1Y3RzIC5jbGVhbi1wcm9kdWN0LWl0ZW17Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZThlNmU2fS5jbGVhbi1ibG9jay5jbGVhbi1wcm9kdWN0IC5ibG9jay1jb250ZW50e3BhZGRpbmc6NDBweH0uY2xlYW4tYmxvY2suY2xlYW4tcHJvZHVjdCAudGFiLWNvbnRlbnQgLmRlc2NyaXB0aW9uIC5yaWdodHt0ZXh0LWFsaWduOnJpZ2h0fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmNsZWFuLWNhcmR7bWFyZ2luLWJvdHRvbTowfS5jbGVhbi1ibG9nLXBvc3QgaDN7cGFkZGluZy10b3A6MH0uY2xlYW4tYmxvY2suY2xlYW4tcG9zdCAucG9zdC1pbWFnZXtoZWlnaHQ6NTAwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXBvc3QgLnBvc3QtYm9keXtwYWRkaW5nOjcwcHggMTUwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXRlc3RpbW9uaWFscyAuaXRlbXttYXJnaW4tYm90dG9tOjB9LmNsZWFuLWJsb2NrLmNsZWFuLXBvc3QgLnBvc3QtYm9keXtwYWRkaW5nOjcwcHggMTAwcHh9LmNsZWFuLWJsb2NrLmNsZWFuLXBvc3QgLnBvc3QtYm9keSBoNHtwYWRkaW5nLXRvcDo1MHB4fX0uY2xlYW4tbmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtbGlua3tmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOi44cmVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uY2xlYW4tbmF2YmFyLmZpeGVkLWJvdHRvbSwuY2xlYW4tbmF2YmFyLmZpeGVkLXRvcHtib3gtc2hhZG93OjAgMCAxNXB4IHJnYmEoMCwwLDAsLjEpfS5jbGVhbi1uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVte3BhZGRpbmctcmlnaHQ6MnJlbX0uY2xlYW4tbmF2YmFyIC5uYXZiYXItbmF2Omxhc3QtY2hpbGQgLml0ZW06bGFzdC1jaGlsZCwuY2xlYW4tbmF2YmFyIC5uYXZiYXItbmF2Omxhc3QtY2hpbGQgLml0ZW06bGFzdC1jaGlsZCBhe3BhZGRpbmctcmlnaHQ6MH0uY2xlYW4tbmF2YmFyIC5sb2dve2ZvbnQtc2l6ZToxLjVyZW19LmNsZWFuLW5hdmJhci5maXhlZC10b3ArLnBhZ2V7cGFkZGluZy10b3A6NjJweH1AbWVkaWEgKG1pbi13aWR0aDo1NzZweCl7Lm5hdmJhcntwYWRkaW5nLXRvcDoxLjJyZW07cGFkZGluZy1ib3R0b206MS4ycmVtfS5jbGVhbi1uYXZiYXIuZml4ZWQtdG9wKy5wYWdle3BhZGRpbmctdG9wOjVyZW19fS5oZWFkZXItc3RhbmRhcmQgLm5hdmJhci1uYXYgLml0ZW17cGFkZGluZy1sZWZ0OjIwcHg7Zm9udC1zaXplOjIwcHh9LmhlYWRlci1zdGFuZGFyZCAuaGVyb3twYWRkaW5nLXRvcDoyMDBweDtwYWRkaW5nLWJvdHRvbToyMDBweDt0ZXh0LWFsaWduOmNlbnRlcn0uaGVhZGVyLXN0YW5kYXJkIC5oZXJvIC5oZWFkaW5ne2ZvbnQtc2l6ZTo1MHB4fS5oZWFkZXItc3RhbmRhcmQgLmhlcm8gLmluZm97bWFyZ2luOjMwcHggYXV0bztmb250LXNpemU6MjBweDttYXJnaW4tdG9wOjMwcHh9LnBhZ2UtZm9vdGVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nLXRvcDozMHB4O3RleHQtYWxpZ246Y2VudGVyfS5wYWdlLWZvb3Rlci5kYXJre2JhY2tncm91bmQtY29sb3I6IzJiMmYzMX0ucGFnZS1mb290ZXIgLmZvb3Rlci1jb3B5cmlnaHR7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmctdG9wOjNweDtwYWRkaW5nLWJvdHRvbTozcHg7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDo1MHB4O2JvcmRlcjoxcHggc29saWQgI2VkZWRlZH0ucGFnZS1mb290ZXIuZGFyayAuZm9vdGVyLWNvcHlyaWdodHtiYWNrZ3JvdW5kLWNvbG9yOiMyMjI0MjU7Ym9yZGVyLWNvbG9yOiMyMjI0MjV9LnBhZ2UtZm9vdGVyIC5mb290ZXItY29weXJpZ2h0IHB7bWFyZ2luOjEwcHg7Y29sb3I6IzdkODI4OH0ucGFnZS1mb290ZXIuZGFyayAuZm9vdGVyLWNvcHlyaWdodCBwe2NvbG9yOiNjY2N9LnBhZ2UtZm9vdGVyIHVse2xpc3Qtc3R5bGUtdHlwZTpub25lO3BhZGRpbmctbGVmdDowO2xpbmUtaGVpZ2h0OjEuN30ucGFnZS1mb290ZXIgaDV7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NzAwO21hcmdpbi10b3A6MzBweH0ucGFnZS1mb290ZXIuZGFyayBoNXtjb2xvcjojZmZmfS5wYWdlLWZvb3RlciBhe2NvbG9yOiM1MzU5NWY7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LnBhZ2UtZm9vdGVyLmRhcmsgYXtjb2xvcjojZDJkMWQxfS5wYWdlLWZvb3RlciBhOmZvY3VzLC5wYWdlLWZvb3RlciBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMxZDIxMjV9LnBhZ2UtZm9vdGVyLmRhcmsgYTpmb2N1cywucGFnZS1mb290ZXIuZGFyayBhOmhvdmVye2NvbG9yOiNmZmZ9QG1lZGlhIChtaW4td2lkdGg6NTc2cHgpey5wYWdlLWZvb3Rlcnt0ZXh0LWFsaWduOmxlZnR9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsucGFnZS1mb290ZXIgdWwgbGl7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjEwcHh9LnBhZ2UtZm9vdGVyIHVsIGxpOmFmdGVyLC5wYWdlLWZvb3RlciB1bCBsaTpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt3aWR0aDoycHg7aGVpZ2h0OjZweDtib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5wYWdlLWZvb3RlciB1bCBsaTpiZWZvcmV7dG9wOjlweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnBhZ2UtZm9vdGVyIHVsIGxpOmFmdGVye3RvcDoxM3B4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9fVxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAubWluLmNzcy5tYXAgKi9cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    canActivate() {
        if (this.authService.isUserLoggedIn())
            return true;
        else {
            this.route.navigate(['login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





const BASE_AUTH_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].CAMUNDA_URL + "/identity/verify";
class AuthService {
    constructor(http) {
        this.http = http;
        this.USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
        this.AUTH_ATTRIBUTE_NAME = 'AUTH';
    }
    authenticationService(username, password) {
        return this.http.post(BASE_AUTH_URL, { username: username, password: password }, { headers: { authorization: window.atob(this.createBasicAuthToken(username, password)) } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.username = username;
            this.password = password;
            this.id = res;
            this.registerSuccessfulLogin(username, password);
        }));
    }
    createBasicAuthToken(username, password) {
        return window.btoa('Basic ' + window.btoa(username + ":" + password));
    }
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        sessionStorage.setItem(this.AUTH_ATTRIBUTE_NAME, this.createBasicAuthToken(username, password));
    }
    logout() {
        sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(this.AUTH_ATTRIBUTE_NAME);
        this.username = null;
        this.password = null;
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        let auth = sessionStorage.getItem(this.AUTH_ATTRIBUTE_NAME);
        if (user === null || auth === null) {
            this.logout();
            return false;
        }
        return true;
    }
    getLoggedInUserName() {
        let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null)
            return '';
        return user;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/basic-auth-interceptor.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/auth/basic-auth-interceptor.service.ts ***!
  \*****************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");




class HttpInterceptorService {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(req, next) {
        if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
            const authReq = req.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': `${window.atob(sessionStorage.getItem(this.authenticationService.AUTH_ATTRIBUTE_NAME))}`
                })
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/i18n/app-text-config-service.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/i18n/app-text-config-service.service.ts ***!
  \******************************************************************/
/*! exports provided: AppTextConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTextConfigService", function() { return AppTextConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AppTextConfigService {
    constructor(http) {
        this.http = http;
        this.text = {
            homePage: {
                title: "",
                guide: [
                    "",
                    "",
                    ""
                ],
                btnLeft: "",
                btnRight: "",
                copyright: ""
            },
            ocr: {
                ar: "",
                en: "",
                fr: ""
            }
        };
        this.isLoaded = false;
        this.local = "";
    }
    getConfigLang() {
        var _a;
        let p = (_a = localStorage.getItem("preferedlang")) !== null && _a !== void 0 ? _a : 'fr';
        if (p == "ar") {
            document.dir = "rtl";
        }
        this.lang = p;
        this.http.get("assets/configs/documania-workflow-strings-" + p + ".min.json").subscribe(res => {
            this.text = res.strings;
        });
    }
    changeLanguage(lang) {
        return this.http.get("assets/configs/documania-workflow-strings-" + lang + ".min.json");
    }
    getLocalByLang() {
        if (this.lang == "ar")
            return "ar-SA";
        else if (this.lang == "en")
            return "en-US";
        else
            return "fr-FR";
    }
}
AppTextConfigService.ɵfac = function AppTextConfigService_Factory(t) { return new (t || AppTextConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppTextConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppTextConfigService, factory: AppTextConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppTextConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/rest/camunda-rest.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/rest/camunda-rest.service.ts ***!
  \*******************************************************/
/*! exports provided: CamundaRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamundaRestService", function() { return CamundaRestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].CAMUNDA_URL;
class CamundaRestService {
    constructor(http) {
        this.http = http;
    }
}
CamundaRestService.ɵfac = function CamundaRestService_Factory(t) { return new (t || CamundaRestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CamundaRestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CamundaRestService, factory: CamundaRestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamundaRestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    CAMUNDA_URL: "http://localhost:8800/engine-rest"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! R:\Github - Local\VevioSys Projects\Documania Workflow\camunda-workflow-app\documaniaworkflow-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map