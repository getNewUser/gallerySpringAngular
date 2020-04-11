(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/add/add.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/add/add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col main\">\r\n    <mat-card>\r\n      <div class=\"row\">\r\n        <img src=\"{{shownPicture}}\" />\r\n      </div>\r\n      <div class=\"row\">\r\n        <form (ngSubmit)=\"onSubmit(f, 'Dismiss')\" #f=\"ngForm\" novalidate>\r\n          <div class=\"row\">\r\n            <app-name-input-wider class=\"name-input\" [(ngModel)]=\"name\" name=\"name\" #nameVal=\"ngModel\"></app-name-input-wider>\r\n          </div>\r\n          <div class=\"row\">\r\n            <app-description-input class=\"name-input\" [(ngModel)]=\"description\" name=\"description\" #descripionVal=\"ngModel\"></app-description-input>\r\n          </div>\r\n          <div class=\"row\">\r\n            <app-tags-input [(ngModel)]=\"tags\" name=\"tags\" [allTags]=\"allTags\" ></app-tags-input>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <app-categories-input [(ngModel)]=\"selectedCategories\" name=\"categories\" [categoriesList]=\"categories\"></app-categories-input>\r\n          </div>\r\n          <div class=\"row\">\r\n            <mat-form-field>\r\n              <ngx-mat-file-input (change)=\"picked($event)\" placeholder=\"Image\" #inputfield=\"ngModel\" ngModel required\r\n                name=\"file\">\r\n              </ngx-mat-file-input>\r\n              <mat-icon matSuffix>folder</mat-icon>\r\n              <mat-error *ngIf=\"inputfield.control.hasError('required')\">Image upload is required</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"row\">\r\n            <button mat-flat-button color=\"primary\" class=\"submit-button\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/add/add-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/add/add-routing.module.ts ***!
  \*************************************************/
/*! exports provided: routes, AddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoutingModule", function() { return AddRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.component */ "./src/app/views/add/add.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    { path: '', component: _add_component__WEBPACK_IMPORTED_MODULE_1__["AddComponent"] }
];
let AddRoutingModule = class AddRoutingModule {
};
AddRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AddRoutingModule);



/***/ }),

/***/ "./src/app/views/add/add.component.scss":
/*!**********************************************!*\
  !*** ./src/app/views/add/add.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  top: 123px;\n  min-height: 300px;\n  max-width: 2000px;\n  z-index: 2;\n}\nmat-card mat-form-field {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card app-name-input-wider {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card app-description-input {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card app-categories-input {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card app-tags-input {\n  width: 50%;\n  margin: 0 auto;\n}\nmat-card form {\n  width: 100%;\n  padding: 0 20px;\n}\nmat-card button {\n  margin: 0 auto;\n  width: 50%;\n  text-transform: uppercase;\n  height: 43px;\n}\nimg {\n  max-width: 100%;\n  max-height: 400px;\n  margin: 5px auto;\n}\n@media only screen and (max-width: 576px) {\n  img {\n    width: 92%;\n  }\n}\n@media only screen and (max-width: 420px) {\n  img {\n    margin: 0 auto;\n    width: 85%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRkL0M6XFxVc2Vyc1xcdmlsbWlcXE9uZURyaXZlXFxEb2N1bWVudHNcXGdhbGxlcnlBbmd1bGFyU3ByaW5nL3NyY1xcYXBwXFx2aWV3c1xcYWRkXFxhZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDSjtBREVFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNESjtBRElFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNGSjtBREtFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNISjtBRE1FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNKSjtBRE9FO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNMSjtBRFNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNORjtBRFFBO0VBQ0U7SUFDRSxVQUFBO0VDTEY7QUFDRjtBRFFBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsVUFBQTtFQ05GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHRvcDogMTIzcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDAwcHg7XHJcbiAgei1pbmRleDogMjtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgYXBwLW5hbWUtaW5wdXQtd2lkZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgYXBwLWRlc2NyaXB0aW9uLWlucHV0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgYXBwLWNhdGVnb3JpZXMtaW5wdXR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICBhcHAtdGFncy1pbnB1dHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGhlaWdodDogNDNweDtcclxuICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG59XHJcbiIsIm1hdC1jYXJkIHtcbiAgdG9wOiAxMjNweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogMjAwMHB4O1xuICB6LWluZGV4OiAyO1xufVxubWF0LWNhcmQgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbm1hdC1jYXJkIGFwcC1uYW1lLWlucHV0LXdpZGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5tYXQtY2FyZCBhcHAtZGVzY3JpcHRpb24taW5wdXQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbm1hdC1jYXJkIGFwcC1jYXRlZ29yaWVzLWlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5tYXQtY2FyZCBhcHAtdGFncy1pbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxubWF0LWNhcmQgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5tYXQtY2FyZCBidXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgaGVpZ2h0OiA0M3B4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDkyJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICBpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/add/add.component.ts":
/*!********************************************!*\
  !*** ./src/app/views/add/add.component.ts ***!
  \********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_filterTagsCategories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/filterTagsCategories.service */ "./src/app/services/filterTagsCategories.service.ts");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








let AddComponent = class AddComponent {
    constructor(gallery, httpClient, filter, snackBar, router, auth) {
        this.gallery = gallery;
        this.httpClient = httpClient;
        this.filter = filter;
        this.snackBar = snackBar;
        this.router = router;
        this.auth = auth;
        this.categories = [];
        this.selectedCategories = [];
        this.selectedTags = [];
        this.shownPicture = '../../../assets/noimage2.png';
        this.isTagsEmpty = false;
        this.allTags = [];
        this.tags = [];
        this.tagsToReturn = [];
        this.tagsFromService = [];
        this.SERVER_URL = 'http://localhost:8080/images';
        this.noTags = true;
        this.name = 'Name..';
        this.description = 'Description..';
    }
    ngOnInit() {
        this.loadCategories();
    }
    picked(event) {
        let fileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];
            this.handleInputChange(file);
        }
    }
    handleInputChange(files) {
        var file = files;
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onloadend = this.handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    handleReaderLoaded(e) {
        let reader = e.target;
        let base64result = reader.result.substr(reader.result.indexOf(',') + 1);
        this.shownPicture = 'data:image/jpg;base64,' + base64result;
        this.fullPicture = base64result;
    }
    onSubmit(f, action) {
        if (this.tags.length < 1) {
            this.isTagsEmpty = true;
            return;
        }
        this.isTagsEmpty = false;
        this.noTags = false;
        this.photo = f.value;
        this.photo.thumbnail = this.fullPicture;
        this.httpClient
            .post('http://localhost:8080/images', this.photo)
            .subscribe(() => {
            this.snackBar.open('Image added successfully', action, {
                duration: 2000
            });
            this.router.navigate(['']);
        }, err => {
            this.snackBar.open('Something went wrong..', action, {
                duration: 2000
            });
        });
    }
    filterCategories(category) {
        this.filter.filter(category, this.selectedCategories);
    }
    loadCategories() {
        return this.gallery.getCategories().subscribe(data => {
            this.categories = data;
        });
    }
    ngOnDestroy() {
        this.loadCategories().unsubscribe();
    }
};
AddComponent.ctorParameters = () => [
    { type: _services_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_filterTagsCategories_service__WEBPACK_IMPORTED_MODULE_1__["FilterCategoriesService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/add/add.component.html"),
        styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/views/add/add.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _services_filterTagsCategories_service__WEBPACK_IMPORTED_MODULE_1__["FilterCategoriesService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], AddComponent);



/***/ }),

/***/ "./src/app/views/add/add.module.ts":
/*!*****************************************!*\
  !*** ./src/app/views/add/add.module.ts ***!
  \*****************************************/
/*! exports provided: AddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModule", function() { return AddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var _control_accessors_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../control-accessors.module */ "./src/app/control-accessors.module.ts");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.component */ "./src/app/views/add/add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _add_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-routing.module */ "./src/app/views/add/add-routing.module.ts");











let AddModule = class AddModule {
};
AddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_add_routing_module__WEBPACK_IMPORTED_MODULE_9__["routes"]),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _control_accessors_module__WEBPACK_IMPORTED_MODULE_2__["ControlAccessorsModule"],
            _add_routing_module__WEBPACK_IMPORTED_MODULE_9__["AddRoutingModule"]
        ],
        providers: [
            _services_gallery_service__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]
        ]
    })
], AddModule);



/***/ })

}]);
//# sourceMappingURL=views-add-add-module-es2015.js.map