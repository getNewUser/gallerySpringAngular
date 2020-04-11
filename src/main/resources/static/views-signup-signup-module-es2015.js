(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/signup/signup.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/signup/signup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\r\n  <div class=\"row\">\r\n    <div class=\"col side \"></div>\r\n    <div class=\"col side \">\r\n    </div>\r\n    <div class=\"col side\">\r\n    </div>\r\n    <div class=\"col main\">\r\n      <mat-card>\r\n        <h1>Signup</h1>\r\n        <form (ngSubmit)=\"onSubmit(f, 'Dismiss')\" #f=\"ngForm\" [mustMatch]=\"['password', 'confirmPassword']\" novalidate>\r\n          <app-name-input [(ngModel)]=\"name\" name=\"name\" #nameVal=\"ngModel\"></app-name-input>\r\n          <app-name-input [(ngModel)]=\"username\" name=\"username\" #usernameVal=\"ngModel\"></app-name-input>\r\n          <app-email-input [(ngModel)]=\"email\" name=\"email\" #emailVal=\"ngModel\"></app-email-input>\r\n          <app-password-input [(ngModel)]=\"password\" name=\"password\" #passwordVal=\"ngModel\"></app-password-input>\r\n          <app-password-input [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordVal=\"ngModel\"></app-password-input>\r\n          <mat-error *ngIf=\"confirmPasswordVal.control.hasError('mustMatch') && (confirmPasswordVal.dirty || confirmPasswordVal.touched)\">Passwords must match</mat-error>\r\n          <div class=\"matcheckbox\">\r\n            <mat-checkbox required required name=\"policy\" id=\"policy\" ngModel #policy=\"ngModel\">\r\n              I agree with privacy policy\r\n            </mat-checkbox>\r\n            <mat-error *ngIf=\"policy.control.hasError('required') && (policy.dirty || policy.touched)\">\r\n              You must agree with privacy policy</mat-error>\r\n          </div>\r\n          <button mat-flat-button color=\"primary\" type=\"submit\" (click)=\"onSubmit('You successfully signed up', 'Dismiss')\">\r\n            Signup\r\n          </button>\r\n          <div>\r\n          </div>\r\n        </form>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col side\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/directives/MustMatch.ts":
/*!*****************************************!*\
  !*** ./src/app/directives/MustMatch.ts ***!
  \*****************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        // null if controls not initialized yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator already found an error 
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
                mustMatch: true
            });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _must_match_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./must-match.directive */ "./src/app/directives/must-match.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DirectivesModule = class DirectivesModule {
};
DirectivesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_must_match_directive__WEBPACK_IMPORTED_MODULE_1__["MustMatchDirective"]],
        exports: [_must_match_directive__WEBPACK_IMPORTED_MODULE_1__["MustMatchDirective"]]
    })
], DirectivesModule);



/***/ }),

/***/ "./src/app/directives/must-match.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/must-match.directive.ts ***!
  \****************************************************/
/*! exports provided: MustMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatchDirective", function() { return MustMatchDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _MustMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MustMatch */ "./src/app/directives/MustMatch.ts");

var MustMatchDirective_1;



let MustMatchDirective = MustMatchDirective_1 = class MustMatchDirective {
    constructor() {
        this.mustMatch = [];
    }
    validate(formGroup) {
        return Object(_MustMatch__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mustMatch'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MustMatchDirective.prototype, "mustMatch", void 0);
MustMatchDirective = MustMatchDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mustMatch]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MustMatchDirective_1, multi: true }]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MustMatchDirective);



/***/ }),

/***/ "./src/app/views/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component */ "./src/app/views/signup/signup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    { path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"] }
];
let SignupRoutingModule = class SignupRoutingModule {
};
SignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SignupRoutingModule);



/***/ }),

/***/ "./src/app/views/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/signup/signup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  top: 228px;\n  min-height: 300px;\n  max-width: 400px;\n  z-index: 2;\n}\nmat-card .matcheckbox {\n  margin: 13px 0;\n}\nmat-card h1 {\n  text-transform: uppercase;\n  text-align: center;\n  padding: 10px 0;\n  letter-spacing: 3px;\n  color: #676767;\n}\nmat-card form {\n  width: 100%;\n  padding: 0 20px;\n}\nmat-card form ::ng-deep .mat-form-field-infix {\n  margin: 0 13px;\n}\nmat-card .signupPrefix ::ng-deep .mat-icon {\n  margin-left: 3px;\n}\nmat-card button {\n  width: 100%;\n  text-transform: uppercase;\n  height: 43px;\n}\nimg {\n  top: 0;\n  left: 0;\n  height: 979px;\n  width: 1922px;\n  position: absolute;\n}\n.hero {\n  background-image: url('city-blurred-hd-1920x1080.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 1080px;\n  width: 1980px;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n.hero div {\n  height: 90%;\n}\n@media only screen and (max-width: 1200px) {\n  .main {\n    width: 100%;\n    margin-left: 450px;\n  }\n\n  .side {\n    display: none;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .main {\n    width: 100%;\n    margin-left: 300px;\n  }\n\n  .side {\n    display: none;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .main {\n    width: 100%;\n    margin-left: 200px;\n  }\n\n  .side {\n    display: none;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .main {\n    width: 100%;\n    margin: 0 90px;\n  }\n\n  .side {\n    display: none;\n  }\n}\n@media only screen and (max-width: 420px) {\n  .main {\n    width: 100%;\n    margin: 0 68px;\n  }\n\n  .side {\n    display: none;\n  }\n}\n@media only screen and (max-width: 330px) {\n  .main {\n    width: 100%;\n    margin: 0 5px;\n  }\n\n  .side {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2lnbnVwL0M6XFxVc2Vyc1xcdmlsbWlcXE9uZURyaXZlXFxEb2N1bWVudHNcXGdhbGxlcnlBbmd1bGFyU3ByaW5nL3NyY1xcYXBwXFx2aWV3c1xcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDRjtBRENJO0VBQ0UsY0FBQTtBQ0NOO0FERUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0RKO0FERUk7RUFDRSxjQUFBO0FDQU47QURLSTtFQUNFLGdCQUFBO0FDSE47QURNRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNKSjtBRFFBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUNFLHNEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBRUEsY0FBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFNFO0VBQ0UsV0FBQTtBQ1BKO0FEV0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQ1JGOztFRFVBO0lBQ0UsYUFBQTtFQ1BGO0FBQ0Y7QURVQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VDUkY7O0VEVUE7SUFDRSxhQUFBO0VDUEY7QUFDRjtBRFVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUNSRjs7RURVQTtJQUNFLGFBQUE7RUNQRjtBQUNGO0FEVUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VDUkY7O0VEV0E7SUFDRSxhQUFBO0VDUkY7QUFDRjtBRFdBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQ1RGOztFRFlBO0lBQ0UsYUFBQTtFQ1RGO0FBQ0Y7QURZQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNWRjs7RURhQTtJQUNFLGFBQUE7RUNWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICB0b3A6IDIyOHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgei1pbmRleDogMjtcclxuXHJcbiAgICAubWF0Y2hlY2tib3gge1xyXG4gICAgICBtYXJnaW46IDEzcHggMDtcclxuICAgIH1cclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgbWFyZ2luOiAwIDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2lnbnVwUHJlZml4IHtcclxuICAgIDo6bmctZGVlcCAubWF0LWljb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gIH1cclxufVxyXG5cclxuaW1nIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDk3OXB4O1xyXG4gIHdpZHRoOiAxOTIycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvY2l0eS1ibHVycmVkLWhkLTE5MjB4MTA4MC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDEwODBweDtcclxuICB3aWR0aDogMTk4MHB4O1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICBkaXYge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xyXG4gIH1cclxuICAuc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gIH1cclxuICAuc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIH1cclxuICAuc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDkwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDY4cHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcblxyXG4gIC5zaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIm1hdC1jYXJkIHtcbiAgdG9wOiAyMjhweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5tYXQtY2FyZCAubWF0Y2hlY2tib3gge1xuICBtYXJnaW46IDEzcHggMDtcbn1cbm1hdC1jYXJkIGgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxubWF0LWNhcmQgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5tYXQtY2FyZCBmb3JtIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBtYXJnaW46IDAgMTNweDtcbn1cbm1hdC1jYXJkIC5zaWdudXBQcmVmaXggOjpuZy1kZWVwIC5tYXQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5tYXQtY2FyZCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgaGVpZ2h0OiA0M3B4O1xufVxuXG5pbWcge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogOTc5cHg7XG4gIHdpZHRoOiAxOTIycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2l0eS1ibHVycmVkLWhkLTE5MjB4MTA4MC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDgwcHg7XG4gIHdpZHRoOiAxOTgwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmhlcm8gZGl2IHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gIH1cblxuICAuc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xuICB9XG5cbiAgLnNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgfVxuXG4gIC5zaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgOTBweDtcbiAgfVxuXG4gIC5zaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgNjhweDtcbiAgfVxuXG4gIC5zaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMzMHB4KSB7XG4gIC5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG5cbiAgLnNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupComponent = class SignupComponent {
    constructor(auth, snackBar, router) {
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.name = 'Name..';
        this.username = 'Username..';
        this.password = 'Password..';
        this.confirmPassword = 'Confirm Password..';
        this.email = '';
        this.user = {
            name: '',
            username: '',
            password: '',
            email: ''
        };
        this.userRegistration = {
            email: '',
            name: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
    }
    ngOnInit() { }
    onSubmit(form, action) {
        if (this.name === 'Name..' ||
            this.name === '' ||
            this.username === 'Username..' ||
            this.username === '' ||
            this.password === 'Password..' ||
            this.password === '' ||
            this.confirmPassword === 'Confirm Password..' ||
            this.confirmPassword === '' ||
            this.email === '') {
            this.snackBar.open('You have to fill up all fields', action, {
                duration: 2000
            });
            return;
        }
        this.userRegistration = form.value;
        console.log(this.userRegistration);
        this.user.name = this.userRegistration.name;
        this.user.email = this.userRegistration.email;
        this.user.username = this.userRegistration.username;
        this.user.password = this.userRegistration.password;
        this.auth
            .register(this.user)
            .then(() => {
            this.router.navigate(['']);
            this.snackBar.open('You successfully signed up!', action, {
                duration: 2000
            });
        })
            .catch(error => {
            this.snackBar.open('Name or email is already taken!', action, {
                duration: 2000
            });
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/views/signup/signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/views/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/views/signup/signup-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.component */ "./src/app/views/signup/signup.component.ts");
/* harmony import */ var _control_accessors_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../control-accessors.module */ "./src/app/control-accessors.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










let SignupModule = class SignupModule {
};
SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _control_accessors_module__WEBPACK_IMPORTED_MODULE_7__["ControlAccessorsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_1__["DirectivesModule"]
        ],
        providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    })
], SignupModule);



/***/ })

}]);
//# sourceMappingURL=views-signup-signup-module-es2015.js.map