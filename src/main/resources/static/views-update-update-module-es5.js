(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/update/update.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/update/update.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col main\">\r\n    <mat-card>\r\n      <div class=\"row\">\r\n        <img [src]=\"imgurl\" alt=\"main\" />\r\n      </div>\r\n      <div class=\"row\">\r\n        <form (ngSubmit)=\"onSubmit(f, 'Dismiss')\" #f=\"ngForm\" novalidate>\r\n          <div class=\"row\">\r\n            <app-name-input-wider class=\"name-input\" [(ngModel)]=\"name\" name=\"name\" #nameVal=\"ngModel\">\r\n            </app-name-input-wider>\r\n          </div>\r\n          <div class=\"row\">\r\n            <app-description-input class=\"description-input\" [(ngModel)]=\"description\" name=\"description\"\r\n              #descripionVal=\"ngModel\"></app-description-input>\r\n          </div>\r\n          <div class=\"row\">\r\n            <app-tags-input [(ngModel)]=\"tags\" name=\"tags\" [allTags]=\"allTags\"></app-tags-input>\r\n          </div>\r\n          <div class=\"row\">\r\n            <app-categories-input [(ngModel)]=\"preselectedCategories\" name=\"categories\" [categoriesList]=\"categories\">\r\n            </app-categories-input>\r\n          </div>\r\n          <div class=\"row\">\r\n            <button mat-flat-button color=\"primary\" class=\"submit-button\" (click)=\"onSubmit('Dismiss')\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/update/update-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/update/update-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, UpdateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRoutingModule", function() { return UpdateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.component */ "./src/app/views/update/update.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: '', component: _update_component__WEBPACK_IMPORTED_MODULE_1__["UpdateComponent"] }
];
var UpdateRoutingModule = /** @class */ (function () {
    function UpdateRoutingModule() {
    }
    UpdateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], UpdateRoutingModule);
    return UpdateRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/update/update.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/update/update.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  top: 123px;\n  min-height: 300px;\n  max-width: 2000px;\n  z-index: 2;\n}\nmat-card mat-form-field {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card app-name-input-wider {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card app-description-input {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card app-tags-input {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card app-categories-input {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card form {\n  width: 100%;\n  padding: 0 20px;\n}\nmat-card button {\n  margin: 0 auto;\n  width: 50%;\n  text-transform: uppercase;\n  height: 43px;\n}\nimg {\n  max-width: 100%;\n  max-height: 400px;\n  margin: 5px auto;\n}\n@media only screen and (max-width: 576px) {\n  img {\n    width: 92%;\n  }\n}\n@media only screen and (max-width: 420px) {\n  img {\n    margin: 0 auto;\n    width: 85%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXBkYXRlL0M6XFxVc2Vyc1xcdmlsbWlcXE9uZURyaXZlXFxEb2N1bWVudHNcXGdhbGxlcnlBbmd1bGFyU3ByaW5nL3NyY1xcYXBwXFx2aWV3c1xcdXBkYXRlXFx1cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDSjtBREVFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNESjtBRElFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNGSjtBREtFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNISjtBRE9FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNMSjtBRFFFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNOSjtBRFVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNQRjtBRFNBO0VBQ0U7SUFDRSxVQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsVUFBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHRvcDogMTIzcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDAwcHg7XHJcbiAgei1pbmRleDogMjtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgYXBwLW5hbWUtaW5wdXQtd2lkZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgYXBwLWRlc2NyaXB0aW9uLWlucHV0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgYXBwLXRhZ3MtaW5wdXR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICBhcHAtY2F0ZWdvcmllcy1pbnB1dHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxufVxyXG4iLCJtYXQtY2FyZCB7XG4gIHRvcDogMTIzcHg7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDIwMDBweDtcbiAgei1pbmRleDogMjtcbn1cbm1hdC1jYXJkIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5tYXQtY2FyZCBhcHAtbmFtZS1pbnB1dC13aWRlciB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxubWF0LWNhcmQgYXBwLWRlc2NyaXB0aW9uLWlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5tYXQtY2FyZCBhcHAtdGFncy1pbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxubWF0LWNhcmQgYXBwLWNhdGVnb3JpZXMtaW5wdXQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbm1hdC1jYXJkIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxubWF0LWNhcmQgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGhlaWdodDogNDNweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICBpbWcge1xuICAgIHdpZHRoOiA5MiU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODUlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/views/update/update.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/update/update.component.ts ***!
  \**************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(route, gallery, snackBar, router, auth) {
        this.route = route;
        this.gallery = gallery;
        this.snackBar = snackBar;
        this.router = router;
        this.auth = auth;
        this.categories = [];
        this.selectedCategories = [];
        this.preselectedCategories = [];
        this.isTagsEmpty = false;
        this.allTags = [];
        this.tags = [];
        this.name = '';
        this.description = '';
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.loadPhoto(this.id);
        this.loadCategories();
        this.getFullPhoto(this.id);
    };
    UpdateComponent.prototype.onSubmit = function (f, action) {
        if (this.tags.length < 1) {
            this.isTagsEmpty = true;
        }
        if (f.valid === true && this.name !== '' && this.description !== '') {
            this.photo = f.value;
            this.photo.id = this.photoTemplate.id;
            this.photo.thumbnail = this.photoTemplate.thumbnail;
            this.photo.width = this.photoTemplate.width;
            this.photo.height = this.photoTemplate.height;
            this.photo.date = this.photoTemplate.date;
            if (this.photo.name === '') {
                this.photo.name = this.photoTemplate.name;
            }
            if (this.photo.description === '') {
                this.photo.description = this.photoTemplate.description;
            }
            if (this.photo.categories.length < 1) {
                this.photo.categories = this.photoTemplate.categories;
            }
            this.gallery.updateImage(this.photo);
            this.snackBar.open('Image updated', action, { duration: 2000 });
            this.router.navigate(['']);
        }
        else {
            this.snackBar.open('Something went wrong', action, { duration: 2000 });
        }
    };
    UpdateComponent.prototype.getFullPhoto = function (imageId) {
        var _this = this;
        return this.gallery.getFullPhoto(imageId).subscribe(function (data) {
            _this.fullPhoto = data.picture;
            _this.imgurl = 'data:image/jpg;base64,' + _this.fullPhoto;
        });
    };
    UpdateComponent.prototype.loadPhoto = function (imageId) {
        var _this = this;
        return this.gallery.getPhoto(imageId).subscribe(function (data) {
            var e_1, _a, e_2, _b;
            _this.photo = data;
            _this.photoTemplate = data;
            try {
                for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data.tags), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var tag = _d.value;
                    _this.tags.push(tag.name);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data.categories), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var category = _f.value;
                    _this.preselectedCategories.push(category);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.name = data.name;
            _this.description = data.description;
        });
    };
    UpdateComponent.prototype.loadCategories = function () {
        var _this = this;
        return this.gallery.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    UpdateComponent.prototype.ngOnDestroy = function () {
        this.loadCategories().unsubscribe();
    };
    UpdateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_1__["GalleryService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/views/update/update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_1__["GalleryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/views/update/update.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/update/update.module.ts ***!
  \***********************************************/
/*! exports provided: UpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModule", function() { return UpdateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _update_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-routing.module */ "./src/app/views/update/update-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _control_accessors_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../control-accessors.module */ "./src/app/control-accessors.module.ts");
/* harmony import */ var _update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.component */ "./src/app/views/update/update.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var UpdateModule = /** @class */ (function () {
    function UpdateModule() {
    }
    UpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _control_accessors_module__WEBPACK_IMPORTED_MODULE_5__["ControlAccessorsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _update_routing_module__WEBPACK_IMPORTED_MODULE_2__["UpdateRoutingModule"]
            ],
            providers: [
                src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ]
        })
    ], UpdateModule);
    return UpdateModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-update-update-module-es5.js.map