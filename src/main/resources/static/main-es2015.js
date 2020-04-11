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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/photodialog/photodialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialogs/photodialog/photodialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>{{data.name}}</mat-card-title>\r\n    <mat-card-subtitle>Photo Viewer</mat-card-subtitle>\r\n    <button class=\"close-button\" (click)=\"close()\" mat-icon-button matTooltip=\"Exit\" matTooltipPosition=\"above\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </mat-card-header>\r\n  <div mat-card-image class=\"main-image\">\r\n    <img mat-card-image [src]=\"imgurl\" alt=\"Photo\" />\r\n  </div>\r\n  <button class=\"edit-button\" routerLink=\"/update/{{fullPhoto?.id}}\" (click)=\"close()\" mat-icon-button matTooltip=\"Edit\"\r\n    matTooltipPosition=\"above\">\r\n    <mat-icon>edit</mat-icon>\r\n  </button>\r\n  <mat-card-content>\r\n    <p>\r\n      {{data.description}}\r\n    </p>\r\n    <button class=\"delete-button\" (click)=\"deleteImage( 'Dismiss')\" mat-icon-button matTooltip=\"Delete\"\r\n      matTooltipPosition=\"above\">\r\n      <mat-icon>delete</mat-icon>\r\n    </button>\r\n    <div class=\"res-container\">{{data.width + \"x\" + data.height}}</div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span>{{href | startsWithCapital}}</span>\r\n  <button class=\"home-button\" mat-icon-button mat-icon-button matTooltip=\"Home\" matTooltipPosition=\"below\"\r\n    routerLink=\"/\">\r\n    <mat-icon>home</mat-icon>\r\n  </button>\r\n  <ng-container *ngIf=\"auth.loggedIn === false\" class=\"toolbar\">\r\n    <button mat-flat-button color=\"primary\" class=\"toolbar-signup-button\" routerLink=\"/signup\">Sign up <mat-icon>\r\n        supervised_user_circle</mat-icon></button>\r\n    <button mat-flat-button color=\"primary\" class=\"toolbar-login-button\" routerLink=\"/login\">Login<mat-icon>\r\n        perm_identity</mat-icon></button>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"auth.loggedIn === true\" class=\"toolbar\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <button mat-flat-button color=\"primary\" class=\"toolbar-addphoto-button\" routerLink=\"/add\">Add photo <mat-icon>\r\n            add_a_photo</mat-icon></button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <button mat-flat-button color=\"primary\" class=\"toolbar-logout-button\"\r\n          (click)=\"logout('You succesfully logged out', 'Dismiss')\">Logout <mat-icon>exit_to_app</mat-icon></button>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</mat-toolbar>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | views-gallery-gallerymodule-module */[__webpack_require__.e("default~views-add-add-module~views-gallery-gallerymodule-module~views-login-login-module~views-signu~1811b3e8"), __webpack_require__.e("views-gallery-gallerymodule-module")]).then(__webpack_require__.bind(null, /*! ./views/gallery/gallerymodule.module */ "./src/app/views/gallery/gallerymodule.module.ts")).then(mod => mod.GallerymoduleModule) },
    { path: 'update/:id', loadChildren: () => Promise.all(/*! import() | views-update-update-module */[__webpack_require__.e("default~views-add-add-module~views-gallery-gallerymodule-module~views-login-login-module~views-signu~1811b3e8"), __webpack_require__.e("views-update-update-module")]).then(__webpack_require__.bind(null, /*! ./views/update/update.module */ "./src/app/views/update/update.module.ts")).then(mod => mod.UpdateModule), canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'login', loadChildren: () => Promise.all(/*! import() | views-login-login-module */[__webpack_require__.e("default~views-add-add-module~views-gallery-gallerymodule-module~views-login-login-module~views-signu~1811b3e8"), __webpack_require__.e("views-login-login-module")]).then(__webpack_require__.bind(null, /*! ./views/login/login.module */ "./src/app/views/login/login.module.ts")).then(mod => mod.LoginModule) },
    { path: 'signup', loadChildren: () => Promise.all(/*! import() | views-signup-signup-module */[__webpack_require__.e("default~views-add-add-module~views-gallery-gallerymodule-module~views-login-login-module~views-signu~1811b3e8"), __webpack_require__.e("views-signup-signup-module")]).then(__webpack_require__.bind(null, /*! ./views/signup/signup.module */ "./src/app/views/signup/signup.module.ts")).then(mod => mod.SignupModule) },
    { path: 'add', loadChildren: () => Promise.all(/*! import() | views-add-add-module */[__webpack_require__.e("default~views-add-add-module~views-gallery-gallerymodule-module~views-login-login-module~views-signu~1811b3e8"), __webpack_require__.e("views-add-add-module")]).then(__webpack_require__.bind(null, /*! ./views/add/add.module */ "./src/app/views/add/add.module.ts")).then(mod => mod.AddModule), canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.title = 'gallery';
    }
    ngAfterViewInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_filterTagsCategories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/filterTagsCategories.service */ "./src/app/services/filterTagsCategories.service.ts");
/* harmony import */ var _components_dialogs_photodialog_photodialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dialogs/photodialog/photodialog.component */ "./src/app/components/dialogs/photodialog/photodialog.component.ts");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _pipes_starts_with_capital_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/starts-with-capital.pipe */ "./src/app/pipes/starts-with-capital.pipe.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_dialogs_photodialog_photodialog_component__WEBPACK_IMPORTED_MODULE_4__["PhotodialogComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _pipes_starts_with_capital_pipe__WEBPACK_IMPORTED_MODULE_15__["StartsWithCapitalPipe"]
        ],
        imports: [
            _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"].forRoot({
                config: {
                    tokenGetter: function tokenGetter() {
                        function getCookie(cname) {
                            var name = cname + "=";
                            var decodedCookie = decodeURIComponent(document.cookie);
                            var ca = decodedCookie.split(';');
                            for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == ' ') {
                                    c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                    return c.substring(name.length, c.length);
                                }
                            }
                            return "";
                        }
                        return getCookie('Cookie');
                    },
                    whitelistedDomains: ['localhost:8080'],
                    blacklistedRoutes: ['http://localhost:8080/api/auth/signup',
                        'http://localhost:8080/api/auth/signin']
                }
            })
        ],
        providers: [_services_gallery_service__WEBPACK_IMPORTED_MODULE_5__["GalleryService"],
            _services_filterTagsCategories_service__WEBPACK_IMPORTED_MODULE_3__["FilterCategoriesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [_components_dialogs_photodialog_photodialog_component__WEBPACK_IMPORTED_MODULE_4__["PhotodialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dialogs/photodialog/photodialog.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/dialogs/photodialog/photodialog.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-dialog-container {\n  padding: 0;\n}\n\nmat-card {\n  position: relative;\n}\n\n.main-image {\n  max-height: 85vh;\n  overflow: hidden;\n}\n\n.close-button {\n  position: absolute;\n  top: 17px;\n  right: 17px;\n}\n\n.edit-button {\n  position: absolute;\n  top: 17px;\n  right: 65px;\n}\n\n.delete-button {\n  position: absolute;\n  top: 17px;\n  right: 113px;\n}\n\n.res-container {\n  position: absolute;\n  right: 18px;\n  bottom: 35px;\n  font-size: 12px;\n  color: grey;\n  letter-spacing: 0.3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3Bob3RvZGlhbG9nL0M6XFxVc2Vyc1xcdmlsbWlcXE9uZURyaXZlXFxEb2N1bWVudHNcXGdhbGxlcnlBbmd1bGFyU3ByaW5nL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkaWFsb2dzXFxwaG90b2RpYWxvZ1xccGhvdG9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy9waG90b2RpYWxvZy9waG90b2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3Bob3RvZGlhbG9nL3Bob3RvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYWluLWltYWdlIHtcclxuICAgIG1heC1oZWlnaHQ6IDg1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTdweDtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG59XHJcblxyXG4uZWRpdC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxN3B4O1xyXG4gICAgcmlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTdweDtcclxuICAgIHJpZ2h0OiAxMTNweDtcclxufVxyXG5cclxuLnJlcy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE4cHg7XHJcbiAgICBib3R0b206IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xyXG59IiwiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm1hdC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDg1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTdweDtcbiAgcmlnaHQ6IDE3cHg7XG59XG5cbi5lZGl0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICByaWdodDogNjVweDtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTdweDtcbiAgcmlnaHQ6IDExM3B4O1xufVxuXG4ucmVzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG4gIGJvdHRvbTogMzVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JleTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dialogs/photodialog/photodialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dialogs/photodialog/photodialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: PhotodialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotodialogComponent", function() { return PhotodialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");






// import { isObject } from 'util';
let PhotodialogComponent = class PhotodialogComponent {
    constructor(dialogRef, data, gallery, snackBar, auth) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.gallery = gallery;
        this.snackBar = snackBar;
        this.auth = auth;
        this.imgurl = '';
        this.submitClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.getFullPicture(data.id);
    }
    deleteImage(action) {
        if (!this.auth.loggedIn) {
            this.snackBar.open('Only admins can delete images', action, {
                duration: 2000
            });
            return;
        }
        if (!this.auth.isAdmin()) {
            this.snackBar.open('Only admins can delete images', action, {
                duration: 2000
            });
            return;
        }
        if (confirm('Are you sure you want to delete this image?')) {
            return this.gallery.deleteImage(this.data.id).subscribe(data => {
                location.reload();
            });
        }
    }
    getFullPicture(imageId) {
        return this.gallery.getFullPhoto(imageId).subscribe(data => {
            this.fullPhoto = data;
            this.imgurl = 'data:image/jpg;base64,' + this.fullPhoto.picture;
        });
    }
    close() {
        this.dialogRef.close();
    }
};
PhotodialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_4__["GalleryService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhotodialogComponent.prototype, "submitClicked", void 0);
PhotodialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-photodialog',
        template: __webpack_require__(/*! raw-loader!./photodialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/photodialog/photodialog.component.html"),
        styles: [__webpack_require__(/*! ./photodialog.component.scss */ "./src/app/components/dialogs/photodialog/photodialog.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_4__["GalleryService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
], PhotodialogComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n}\n\n@media (min-width: 1201px) {\n  .toolbar-signup-button {\n    margin-left: 1515px;\n    margin-right: 20px;\n  }\n\n  .toolbar-addphoto-button {\n    margin-left: 1464px;\n    margin-right: 20px;\n  }\n}\n\n@media only screen and (max-width: 1200px) {\n  .toolbar-signup-button {\n    margin-left: 843px;\n    margin-right: 20px;\n  }\n\n  .toolbar-addphoto-button {\n    margin-left: 760px;\n    margin-right: 20px;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .toolbar-signup-button {\n    margin-left: 638px;\n    margin-right: 20px;\n  }\n\n  .toolbar-addphoto-button {\n    margin-left: 552px;\n    margin-right: 20px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .toolbar-signup-button {\n    margin-left: 424px;\n    margin-right: 20px;\n  }\n\n  .toolbar-addphoto-button {\n    margin-left: 329px;\n    margin-right: 10px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  .toolbar-signup-button {\n    margin-left: 224px;\n    margin-right: 20px;\n  }\n\n  .toolbar-addphoto-button {\n    margin-left: 139px;\n    margin-right: 10px;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .toolbar-signup-button {\n    margin-left: 85px;\n    margin-right: 10px;\n  }\n\n  .toolbar-addphoto-button {\n    margin-left: 1px;\n  }\n}\n\n@media only screen and (max-width: 330px) {\n  .toolbar-signup-button {\n    margin-left: 5px;\n  }\n\n  .toolbar-logout-button {\n    margin-left: -31px;\n  }\n\n  mat-icon {\n    display: none;\n  }\n\n  .toolbar-addphoto-button {\n    margin-left: -14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFx2aWxtaVxcT25lRHJpdmVcXERvY3VtZW50c1xcZ2FsbGVyeUFuZ3VsYXJTcHJpbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7RUNDRjs7RURFQTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VDQUY7O0VER0E7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQ0RGOztFRElBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7RUNGRjs7RURLQTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VDSEY7O0VETUE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQ0pGOztFRE9BO0lBQ0UsZ0JBQUE7RUNKRjtBQUNGOztBRE9BO0VBQ0U7SUFDRSxnQkFBQTtFQ0xGOztFRFNBO0lBQ0Usa0JBQUE7RUNORjs7RURTQTtJQUNFLGFBQUE7RUNORjs7RURTQTtJQUNFLGtCQUFBO0VDTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xyXG4gIC50b29sYmFyLXNpZ251cC1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLWFkZHBob3RvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTQ2NHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAudG9vbGJhci1zaWdudXAtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLWFkZHBob3RvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnRvb2xiYXItc2lnbnVwLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjM4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhci1hZGRwaG90by1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1MnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50b29sYmFyLXNpZ251cC1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXItYWRkcGhvdG8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMjlweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudG9vbGJhci1zaWdudXAtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLWFkZHBob3RvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTM5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgLnRvb2xiYXItc2lnbnVwLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogODVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLWFkZHBob3RvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCkge1xyXG4gIC50b29sYmFyLXNpZ251cC1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLWxvZ291dC1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLWFkZHBob3RvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbiAgfVxyXG59XHJcbiIsIm1hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAxcHgpIHtcbiAgLnRvb2xiYXItc2lnbnVwLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAudG9vbGJhci1hZGRwaG90by1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNDY0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudG9vbGJhci1zaWdudXAtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogODQzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLnRvb2xiYXItYWRkcGhvdG8tYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNzYwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC50b29sYmFyLXNpZ251cC1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MzhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAudG9vbGJhci1hZGRwaG90by1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1NTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvb2xiYXItc2lnbnVwLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDQyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC50b29sYmFyLWFkZHBob3RvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDMyOXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAudG9vbGJhci1zaWdudXAtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjI0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLnRvb2xiYXItYWRkcGhvdG8tYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTM5cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC50b29sYmFyLXNpZ251cC1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4NXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC50b29sYmFyLWFkZHBob3RvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCkge1xuICAudG9vbGJhci1zaWdudXAtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLnRvb2xiYXItbG9nb3V0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMXB4O1xuICB9XG5cbiAgbWF0LWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudG9vbGJhci1hZGRwaG90by1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTRweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(auth, snackBar, router) {
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.href = '';
    }
    ngOnInit() {
        this.getNameForHeader();
    }
    logout(message, action) {
        this.snackBar.open(message, action, { duration: 2000 });
        this.router.navigate(['login']);
        this.auth.logout();
    }
    getNameForHeader() {
        this.href = window.location.href;
        this.href = this.href.substring(22);
        if (this.href.indexOf('/') > 0) {
            this.href = this.href.substring(0, this.href.indexOf('/'));
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.auth.loggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/fesm2015/ngx-material-file-input.js");





let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_4__["MaterialFileInputModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_4__["MaterialFileInputModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pipes/starts-with-capital.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/starts-with-capital.pipe.ts ***!
  \***************************************************/
/*! exports provided: StartsWithCapitalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartsWithCapitalPipe", function() { return StartsWithCapitalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StartsWithCapitalPipe = class StartsWithCapitalPipe {
    transform(headerName) {
        return headerName.charAt(0).toUpperCase() + headerName.slice(1);
    }
};
StartsWithCapitalPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'startsWithCapital'
    })
], StartsWithCapitalPipe);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AuthService = class AuthService {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    login(usernameOrEmail, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http
                .post('http://localhost:8080/api/auth/signin', {
                usernameOrEmail,
                password
            })
                .toPromise()
                .then(res => {
                this.cookie.set('Cookie', res.accessToken);
                this.cookieValue = this.cookie.get('Cookie');
            });
        });
    }
    register(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const email = user.email;
            const username = user.username;
            const name = user.name;
            const password = user.password;
            return this.http
                .post('http://localhost:8080/api/auth/signup', {
                email,
                username,
                name,
                password
            })
                .toPromise()
                .then(() => this.login(email, password));
        });
    }
    logout() {
        this.cookie.delete('Cookie');
    }
    get loggedIn() {
        if (this.cookie.get('Cookie')) {
            return true;
        }
        return false;
    }
    isAdmin() {
        let token = this.cookie.get('Cookie');
        let role = atob(token.split('.')[1]);
        role = role.substring(35, 45);
        if (role === 'ROLE_ADMIN') {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/filterTagsCategories.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/filterTagsCategories.service.ts ***!
  \**********************************************************/
/*! exports provided: FilterCategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCategoriesService", function() { return FilterCategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterCategoriesService = class FilterCategoriesService {
    filter(tag, selectedTagsOrCategories) {
        if (selectedTagsOrCategories.includes(tag)) {
            for (let i = 0; i < selectedTagsOrCategories.length; i++) {
                if (selectedTagsOrCategories[i] === tag) {
                    selectedTagsOrCategories.splice(i, 1);
                    return selectedTagsOrCategories;
                }
            }
        }
        selectedTagsOrCategories.push(tag);
        console.log(selectedTagsOrCategories);
        return selectedTagsOrCategories;
    }
};
FilterCategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FilterCategoriesService);



/***/ }),

/***/ "./src/app/services/gallery.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/gallery.service.ts ***!
  \*********************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GalleryService = class GalleryService {
    constructor(http) {
        this.http = http;
    }
    updateImage(image) {
        this.http.put('http://localhost:8080/images/update', image).subscribe(data => {
            console.log('PUT Request was successful: ' + data);
        }, error => {
            console.log('error bois: ', error);
        });
    }
    addImage(image) {
        return this.http.post('http://localhost:8080/images', image);
    }
    deleteImage(imageId) {
        console.log('http://localhost:8080/images/delete/' + imageId);
        return this.http.delete('http://localhost:8080/images/delete/' + imageId);
    }
    getPhoto(index) {
        return this.http.get('http://localhost:8080/images/' + index);
    }
    getFullPhoto(index) {
        return this.http.get('http://localhost:8080/images/fullpicture?imageId=' + index);
    }
    getThumbnails() {
        return this.http.get('http://localhost:8080/images');
    }
    getPhotosByCategory(categoryName) {
        return this.http.get('http://localhost:8080/images/categories/' + categoryName);
    }
    getCategories() {
        return this.http.get('http://localhost:8080/categories');
    }
    getTagsWithParent() {
        return this.http.get('http://localhost:8080/tags');
    }
    getTags() {
        return this.http.get('http://localhost:8080/tags/allexisting');
    }
    search(categories, tags, search) {
        let query = 'http://localhost:8080/images/search?categories=';
        for (let string of categories) {
            query = query + string + ',';
        }
        query = query + '&tags=';
        for (let string of tags) {
            query = query + string + ',';
        }
        query = query.substring(0, query.length - 1);
        query = query + '&search=' + search;
        return this.http.get(query);
    }
};
GalleryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GalleryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GalleryService);



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
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vilmi\OneDrive\Documents\galleryAngularSpring\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map