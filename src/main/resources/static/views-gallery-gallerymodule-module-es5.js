(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-gallery-gallerymodule-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/photo/photo.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/photo/photo.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\" (click)=\"openDialog()\">\r\n  <img class=\"image\" src=\"data:image/jpg;base64,{{photo.thumbnail}}\" alt=\"main\" />\r\n  <div class=\"overlay\">\r\n    <mat-icon>\r\n      <p>search</p>\r\n    </mat-icon>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/gallery/gallery.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/gallery/gallery.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <mat-card class=\"sorting-container\">\r\n    <div class=\"heading-chip\">\r\n      <p>Filter</p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-m-5 col-sm-4\">\r\n        <app-search-box-input [(ngModel)]=\"searchString\" (ngModelChange)=\"initSearch($event)\" ></app-search-box-input>\r\n      </div>\r\n      <div class=\"col-m-3 col-sm-4\">\r\n        <app-categories-input (selectionChange)=\"selectionChangedCategories($event)\" name=\"categories\"\r\n          [categoriesList]=\"categories\">\r\n        </app-categories-input>\r\n      </div>\r\n      <div class=\"col-m-3 col-sm-4\">\r\n        <app-tags-checkbox-input (selectionChange)=\"selectionChangedTags($event)\" name=\"tags\" [tags]=\"tags\">\r\n        </app-tags-checkbox-input>\r\n      </div>\r\n    </div>\r\n    <label>\r\n    </label>\r\n  </mat-card>\r\n  <mat-card>\r\n    <ng-container *ngIf=\"photos.length < 1\">\r\n      <img src=\"../../../assets/imageedit_2_5812423925-696x379.png\" />\r\n    </ng-container>\r\n    <div *ngFor=\"let item of photos; let i = index\">\r\n      <div *ngIf=\"i % 3 == 0\">\r\n        <div class=\"row justify-content-center\">\r\n          <div *ngFor=\"let item of photos.slice(i, i + 3)\">\r\n            <div class=\"photo-container\">\r\n              <app-photo [photo]=\"item\"></app-photo>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/photo/photo.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/photo/photo.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.container .overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: #e91e63;\n  opacity: 0.5;\n  display: none;\n  -webkit-animation: moveUp linear 0.5s;\n          animation: moveUp linear 0.5s;\n  top: 0;\n}\n.container:hover .overlay {\n  display: block;\n}\n.container:hover .overlay mat-icon p {\n  margin-left: 55px;\n  margin-top: 75px;\n  font-size: 150px;\n  visibility: visible;\n}\n@-webkit-keyframes moveUp {\n  0% {\n    top: 250px;\n    opacity: 0;\n  }\n  50% {\n    top: 150px;\n    opacity: 0.1;\n  }\n  100% {\n    top: 0;\n    opacity: 0.5;\n  }\n}\n@keyframes moveUp {\n  0% {\n    top: 250px;\n    opacity: 0;\n  }\n  50% {\n    top: 150px;\n    opacity: 0.1;\n  }\n  100% {\n    top: 0;\n    opacity: 0.5;\n  }\n}\n@media only screen and (max-width: 330px) {\n  .container {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90by9DOlxcVXNlcnNcXHZpbG1pXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxnYWxsZXJ5QW5ndWxhclNwcmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xccGhvdG9cXHBob3RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob3RvL3Bob3RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob3RvL0M6XFxVc2Vyc1xcdmlsbWlcXE9uZURyaXZlXFxEb2N1bWVudHNcXGdhbGxlcnlBbmd1bGFyU3ByaW5nL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbnN0cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJFWlE7RUZhUixZQUFBO0VBQ0EsYUFBQTtFQUVBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxNQUFBO0FDRko7QURPRTtFQUNFLGNBQUE7QUNKSjtBRE1JO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNKTjtBRFNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsVUFBQTtFQ05GO0VEUUE7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQ05GO0VEUUE7SUFDRSxNQUFBO0lBQ0EsWUFBQTtFQ05GO0FBQ0Y7QUROQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUNORjtFRFFBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUNORjtFRFFBO0lBQ0UsTUFBQTtJQUNBLFlBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLFVBQUE7RUNQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG90by9waG90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29uc3RzLnNjc3MnO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICBhbmltYXRpb246IG1vdmVVcCBsaW5lYXIgMC41cztcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIge1xyXG4gIC5vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIG1hdC1pY29uIHAge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNTVweDtcclxuICAgICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZVVwIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDI1MHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lciAub3ZlcmxheSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcbiAgb3BhY2l0eTogMC41O1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IG1vdmVVcCBsaW5lYXIgMC41cztcbiAgdG9wOiAwO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IG1hdC1pY29uIHAge1xuICBtYXJnaW4tbGVmdDogNTVweDtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuQGtleWZyYW1lcyBtb3ZlVXAge1xuICAwJSB7XG4gICAgdG9wOiAyNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgdG9wOiAxNTBweDtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59IiwiJHByaW1hcnk6ICMzZjUxYjU7XHJcbiRzZWNvbmRhcnk6ICNlOTFlNjM7Il19 */"

/***/ }),

/***/ "./src/app/components/photo/photo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/photo/photo.component.ts ***!
  \*****************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs_photodialog_photodialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/photodialog/photodialog.component */ "./src/app/components/dialogs/photodialog/photodialog.component.ts");





var PhotoComponent = /** @class */ (function () {
    function PhotoComponent(gallery, dialog) {
        this.gallery = gallery;
        this.dialog = dialog;
    }
    PhotoComponent.prototype.ngOnInit = function () { };
    PhotoComponent.prototype.openDialog = function () {
        this.dialog.open(_dialogs_photodialog_photodialog_component__WEBPACK_IMPORTED_MODULE_4__["PhotodialogComponent"], {
            width: '500px',
            disableClose: true,
            autoFocus: true,
            data: this.photo
        });
    };
    PhotoComponent.ctorParameters = function () { return [
        { type: _services_gallery_service__WEBPACK_IMPORTED_MODULE_1__["GalleryService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotoComponent.prototype, "photo", void 0);
    PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! raw-loader!./photo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./photo.component.scss */ "./src/app/components/photo/photo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gallery_service__WEBPACK_IMPORTED_MODULE_1__["GalleryService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/pipes/item-count.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/item-count.pipe.ts ***!
  \******************************************/
/*! exports provided: ItemCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCountPipe", function() { return ItemCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemCountPipe = /** @class */ (function () {
    function ItemCountPipe() {
    }
    ItemCountPipe.prototype.transform = function (imageCount) {
        if (imageCount < 10) {
            return imageCount + '';
        }
        else if (imageCount > 100 && imageCount < 500) {
            return '100+';
        }
        else if (imageCount > 500 && imageCount < 1000) {
            return '500+';
        }
        else if (imageCount > 1000) {
            return '1000+';
        }
    };
    ItemCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'itemCount'
        })
    ], ItemCountPipe);
    return ItemCountPipe;
}());



/***/ }),

/***/ "./src/app/views/gallery/gallery-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/gallery/gallery-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, GalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRoutingModule", function() { return GalleryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component */ "./src/app/views/gallery/gallery.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: '', component: _gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"] }
];
var GalleryRoutingModule = /** @class */ (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], GalleryRoutingModule);
    return GalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background-color: #3f51b5;\n  padding: 20px;\n  margin-top: 10px;\n}\n\n.photo-container {\n  width: 270px;\n  height: 270px;\n  overflow: hidden;\n  margin: 10px;\n  display: inline-block;\n}\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.sorting-container {\n  margin-bottom: 12px;\n  margin-top: 53px;\n}\n\n.sorting-container mat-form-field {\n  padding: 0 30px;\n  width: 100%;\n}\n\n.sorting-container ::ng-deep .mat-form-field-outline {\n  max-height: 56px !important;\n}\n\nmat-card {\n  width: calc(100% - 32px);\n  position: relative;\n  background-color: #fafafa;\n}\n\nmat-card:not(.sorting-container) {\n  padding-top: 5vw;\n  position: relative;\n}\n\nmat-spinner {\n  margin: 30px auto;\n}\n\n.res-count-container {\n  position: absolute;\n  right: 18px;\n  top: 10px;\n  font-size: 12px;\n  color: grey;\n  letter-spacing: 0.3px;\n}\n\n.relative {\n  position: relative;\n}\n\n.placeholder {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZ2FsbGVyeS9DOlxcVXNlcnNcXHZpbG1pXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxnYWxsZXJ5QW5ndWxhclNwcmluZy9zcmNcXGFwcFxcdmlld3NcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtBQ0FKOztBRElBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBob3RvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDogMjcwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uc29ydGluZy1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNTNweDtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgbWF4LWhlaWdodDogNTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbm1hdC1jYXJkOm5vdCguc29ydGluZy1jb250YWluZXIpIHtcclxuICBwYWRkaW5nLXRvcDogNXZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcblxyXG4ucmVzLWNvdW50LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxOHB4O1xyXG4gIHRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG59XHJcblxyXG4ucmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG4iLCJzZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBob3RvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4uc29ydGluZy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1M3B4O1xufVxuLnNvcnRpbmctY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zb3J0aW5nLWNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBtYXgtaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbm1hdC1jYXJkOm5vdCguc29ydGluZy1jb250YWluZXIpIHtcbiAgcGFkZGluZy10b3A6IDV2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4ucmVzLWNvdW50LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JleTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuXG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBncmV5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/gallery/gallery.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/gallery/gallery.component.ts ***!
  \****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gallery.service */ "./src/app/services/gallery.service.ts");



// import { MatCardModule } from '@angular/material/card';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(gallery) {
        this.gallery = gallery;
        this.allPhotos = [];
        this.photos = [];
        this.categories = [];
        this.selectedCategories = [];
        this.tags = [];
        this.selectedTags = [];
        this.counter = 0;
        this.searchString = '';
        this.tagsToReturn = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.loadPhotos();
        this.loadCategories();
        this.loadTags();
    };
    GalleryComponent.prototype.search = function (categories, tags, search) {
        var _this = this;
        this.gallery.search(categories, tags, search).subscribe(function (data) {
            _this.photos = data;
        });
    };
    GalleryComponent.prototype.selectionChangedTags = function (event) {
        this.selectedTags = this.getIds(event.value);
        this.search(this.selectedCategories, this.selectedTags, this.searchString);
    };
    GalleryComponent.prototype.selectionChangedCategories = function (event) {
        this.selectedCategories = this.getIds(event.value);
        this.search(this.selectedCategories, this.selectedTags, this.searchString);
    };
    GalleryComponent.prototype.initSearch = function (e) {
        if (e.length < 3 &&
            this.selectedTags.length < 1 &&
            this.selectedCategories.length < 1) {
            this.photos = this.allPhotos;
            return;
        }
        this.searchString = e;
        if (e.length > 2 ||
            this.selectedTags.length > 0 ||
            this.selectedCategories.length > 0) {
            this.search(this.selectedCategories, this.selectedTags, this.searchString);
        }
    };
    GalleryComponent.prototype.loadTags = function () {
        var _this = this;
        return this.gallery.getTagsWithParent().subscribe(function (data) {
            _this.tags = data;
        });
    };
    GalleryComponent.prototype.loadPhotos = function () {
        var _this = this;
        return this.gallery.getThumbnails().subscribe(function (data) {
            _this.photos = data;
            _this.allPhotos = data;
        });
    };
    GalleryComponent.prototype.loadCategories = function () {
        var _this = this;
        return this.gallery.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    GalleryComponent.prototype.getIds = function (array) {
        var e_1, _a;
        var numbers = [];
        try {
            for (var array_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                var number = array_1_1.value;
                numbers.push(number.id);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return numbers;
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.loadCategories().unsubscribe();
        this.loadTags().unsubscribe();
        this.loadPhotos().unsubscribe();
    };
    GalleryComponent.ctorParameters = function () { return [
        { type: src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"] }
    ]; };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/views/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/views/gallery/gallerymodule.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/gallery/gallerymodule.module.ts ***!
  \*******************************************************/
/*! exports provided: GallerymoduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerymoduleModule", function() { return GallerymoduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _gallery_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../gallery/gallery-routing.module */ "./src/app/views/gallery/gallery-routing.module.ts");
/* harmony import */ var _control_accessors_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../control-accessors.module */ "./src/app/control-accessors.module.ts");
/* harmony import */ var _pipes_item_count_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../pipes/item-count.pipe */ "./src/app/pipes/item-count.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_photo_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/photo/photo.component */ "./src/app/components/photo/photo.component.ts");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.component */ "./src/app/views/gallery/gallery.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../material.module */ "./src/app/material.module.ts");












var GallerymoduleModule = /** @class */ (function () {
    function GallerymoduleModule() {
    }
    GallerymoduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"], _components_photo_photo_component__WEBPACK_IMPORTED_MODULE_5__["PhotoComponent"], _pipes_item_count_pipe__WEBPACK_IMPORTED_MODULE_3__["ItemCountPipe"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_gallery_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__["routes"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _control_accessors_module__WEBPACK_IMPORTED_MODULE_2__["ControlAccessorsModule"],
                _gallery_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__["GalleryRoutingModule"]
            ]
        })
    ], GallerymoduleModule);
    return GallerymoduleModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-gallery-gallerymodule-module-es5.js.map