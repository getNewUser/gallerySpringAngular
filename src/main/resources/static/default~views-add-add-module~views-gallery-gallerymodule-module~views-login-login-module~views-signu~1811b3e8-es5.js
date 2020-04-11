(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-add-add-module~views-gallery-gallerymodule-module~views-login-login-module~views-signu~1811b3e8"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/categories-input/categories-input.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/categories-input/categories-input.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <mat-select multiple [(ngModel)]=\"value\" placeholder=\"Categories..\"  (selectionChange)=\"selectionChanged($event)\" >\r\n        <mat-option *ngFor=\"let category of categoriesList\" [value]=\"category\">\r\n            {{category.name}}\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/description-input/description-input.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/description-input/description-input.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <textarea  placeholder=\"{{placeholder}}\" class=\"textarea1\" matInput rows=\"2\" cols=\"10\" [(ngModel)]=\"value\" minlength=\"10\" maxlength=\"100\" required ngModel #inputfield=\"ngModel\" class=\"form-control\">\r\n    </textarea>\r\n  <mat-error *ngIf=\"inputfield.control.hasError('minlength')\">\r\n    Minimum length is 10 symbols\r\n  </mat-error>\r\n  <mat-error *ngIf=\"inputfield.control.hasError('required')\">\r\n    Description is required\r\n  </mat-error>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/email-input/email-input.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/email-input/email-input.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input matInput type=\"email\" [(ngModel)]=\"value\" maxlength=\"30\" required #inputfield=\"ngModel\"  ngModel class=\"form-control\"  placeholder=\"Email..\"/><mat-icon matPrefix>email</mat-icon>\r\n  <mat-error *ngIf=\"inputfield.control.hasError('required')\">\r\n    Email is required\r\n  </mat-error>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/name-input-wider/name-input-wider.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/name-input-wider/name-input-wider.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input placeholder=\"{{placeholder}}\" matInput [(ngModel)]=\"value\" minlength=\"3\" maxlength=\"10\" required\r\n    #inputfield=\"ngModel\" ngModel class=\"form-control\" />\r\n  <mat-error *ngIf=\"inputfield.control.hasError('minlength')\">\r\n    Minimum length is 3 symbols\r\n  </mat-error>\r\n  <mat-error *ngIf=\"inputfield.control.hasError('required')\">\r\n    Name is required\r\n  </mat-error>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/name-input/name-input.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/name-input/name-input.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input placeholder=\"{{placeholder}}\" matInput [(ngModel)]=\"value\" minlength=\"3\" maxlength=\"10\" required #inputfield=\"ngModel\" ngModel class=\"form-control\"/>\r\n  <mat-icon matPrefix>perm_identity</mat-icon>\r\n  <mat-error *ngIf=\"inputfield.control.hasError('minlength')\">\r\n    Minimum length is 3 symbols\r\n  </mat-error>\r\n  <mat-error *ngIf=\"inputfield.control.hasError('required')\">\r\n    Name is required\r\n  </mat-error>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/password-input/password-input.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/password-input/password-input.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input matInput name=\"inputfield\" type=\"password\" [(ngModel)]=\"value\" minlength=\"8\" maxlength=\"20\" required\r\n    #inputfield=\"ngModel\" ngModel class=\"form-control\" placeholder=\"{{placeholder}}\" />\r\n  <mat-icon class=\"signupPrefix\" matPrefix>vpn_key</mat-icon>\r\n  <mat-error *ngIf=\"inputfield.control.hasError('required')\">\r\n    Password is required\r\n  </mat-error>\r\n  <mat-error *ngIf=\"inputfield.control.hasError('minlength')\">\r\n    Minimum length is 8 symbols\r\n  </mat-error>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/search-box-input/search-box-input.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/search-box-input/search-box-input.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field appearance=\"outline\">\r\n  <input matInput placeholder=\"Search image\" [(ngModel)]=\"value\" class=\"input-padding\">\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <mat-select multiple [(ngModel)]=\"value\" placeholder=\"Tags..\" (selectionChange)=\"selectionChanged($event)\">\r\n    <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">\r\n      {{tag.name}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/tags-input/tags-input.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/tags-input/tags-input.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"w-100\">\r\n  <mat-chip-list #chipList required aria-label=\"Tags selection\" [(ngModel)]=\"value\">\r\n    <mat-chip *ngFor=\"let tag of value; let i = index;\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n      (removed)=\"removeTag(i)\">\r\n      {{tag}}\r\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <input placeholder=\"New tag...\" #tagInput [formControl]=\"tagControl\" [matAutocomplete]=\"auto\"\r\n      [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"addTag($event)\" />\r\n  </mat-chip-list>\r\n  <mat-error *ngIf='isError'>Tags are required</mat-error>\r\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n    <mat-option *ngFor=\"let tag of filteredTags | async\" [value]=\"tag\">\r\n      {{tag}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/inputs/categories-input/categories-input.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/inputs/categories-input/categories-input.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 7px;\n}\n\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvY2F0ZWdvcmllcy1pbnB1dC9DOlxcVXNlcnNcXHZpbG1pXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxnYWxsZXJ5QW5ndWxhclNwcmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5wdXRzXFxjYXRlZ29yaWVzLWlucHV0XFxjYXRlZ29yaWVzLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9jYXRlZ29yaWVzLWlucHV0L2NhdGVnb3JpZXMtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9jYXRlZ29yaWVzLWlucHV0L2NhdGVnb3JpZXMtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcbm1hdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbm1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/inputs/categories-input/categories-input.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/inputs/categories-input/categories-input.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoriesInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesInputComponent", function() { return CategoriesInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CategoriesInputComponent = /** @class */ (function () {
    function CategoriesInputComponent() {
        this.onChange = function () { };
        this.onTouch = function () { };
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    CategoriesInputComponent_1 = CategoriesInputComponent;
    Object.defineProperty(CategoriesInputComponent.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
            this.val = val ? val : [''];
            this.onChange(val);
            this.onTouch(val);
        },
        enumerable: true,
        configurable: true
    });
    CategoriesInputComponent.prototype.selectionChanged = function (event) {
        this.selectionChange.emit(new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectChange"](this.matSelect, event.value));
        // console.log(event.value);
    };
    CategoriesInputComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    CategoriesInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CategoriesInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    CategoriesInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    var CategoriesInputComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelect"])
    ], CategoriesInputComponent.prototype, "matSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], CategoriesInputComponent.prototype, "selectionChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesInputComponent.prototype, "val", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesInputComponent.prototype, "categoriesList", void 0);
    CategoriesInputComponent = CategoriesInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-categories-input',
            template: __webpack_require__(/*! raw-loader!./categories-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/categories-input/categories-input.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return CategoriesInputComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./categories-input.component.scss */ "./src/app/components/inputs/categories-input/categories-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesInputComponent);
    return CategoriesInputComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs/description-input/description-input.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/inputs/description-input/description-input.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 7px;\n}\nmat-form-field textarea {\n  resize: none;\n}\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvZGVzY3JpcHRpb24taW5wdXQvQzpcXFVzZXJzXFx2aWxtaVxcT25lRHJpdmVcXERvY3VtZW50c1xcZ2FsbGVyeUFuZ3VsYXJTcHJpbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGlucHV0c1xcZGVzY3JpcHRpb24taW5wdXRcXGRlc2NyaXB0aW9uLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9kZXNjcmlwdGlvbi1pbnB1dC9kZXNjcmlwdGlvbi1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7QURHQTtFQUNFLGlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9kZXNjcmlwdGlvbi1pbnB1dC9kZXNjcmlwdGlvbi1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5tYXQtZm9ybS1maWVsZCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/inputs/description-input/description-input.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/inputs/description-input/description-input.component.ts ***!
  \************************************************************************************/
/*! exports provided: DescriptionInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionInputComponent", function() { return DescriptionInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DescriptionInputComponent = /** @class */ (function () {
    function DescriptionInputComponent() {
        this.onChange = function () { };
        this.onTouch = function () { };
        this.val = ''; // this is the updated value that the class accesses
        this.placeholder = '';
        this.isChanged = 0; // set value(val) gets called twice while initializing so I set it's placeholder as val twice just to avoid it being renamed if user inputs something
    }
    DescriptionInputComponent_1 = DescriptionInputComponent;
    Object.defineProperty(DescriptionInputComponent.prototype, "value", {
        set: function (val) {
            // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
            this.val = val;
            if (this.isChanged < 3) {
                this.placeholder = this.val;
            }
            this.onChange(val);
            this.onTouch(val);
            this.isChanged++;
        },
        enumerable: true,
        configurable: true
    });
    DescriptionInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    DescriptionInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DescriptionInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    DescriptionInputComponent.prototype.setDisabledState = function (isDisabled) {
        throw new Error('Method not implemented.');
    };
    var DescriptionInputComponent_1;
    DescriptionInputComponent = DescriptionInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description-input',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DescriptionInputComponent_1; }),
                    multi: true
                }
            ],
            template: __webpack_require__(/*! raw-loader!./description-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/description-input/description-input.component.html"),
            styles: [__webpack_require__(/*! ./description-input.component.scss */ "./src/app/components/inputs/description-input/description-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescriptionInputComponent);
    return DescriptionInputComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs/email-input/email-input.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/inputs/email-input/email-input.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 7px;\n}\n\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvZW1haWwtaW5wdXQvQzpcXFVzZXJzXFx2aWxtaVxcT25lRHJpdmVcXERvY3VtZW50c1xcZ2FsbGVyeUFuZ3VsYXJTcHJpbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGlucHV0c1xcZW1haWwtaW5wdXRcXGVtYWlsLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9lbWFpbC1pbnB1dC9lbWFpbC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXRzL2VtYWlsLWlucHV0L2VtYWlsLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5tYXQtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbm1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/inputs/email-input/email-input.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/inputs/email-input/email-input.component.ts ***!
  \************************************************************************/
/*! exports provided: EmailInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInputComponent", function() { return EmailInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var EmailInputComponent = /** @class */ (function () {
    function EmailInputComponent() {
        this.onChange = function () { };
        this.onTouch = function () { };
        this.val = ''; // this is the updated value that the class accesses
    }
    EmailInputComponent_1 = EmailInputComponent;
    Object.defineProperty(EmailInputComponent.prototype, "value", {
        set: function (val) {
            // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
            this.val = val;
            this.onChange(val);
            this.onTouch(val);
        },
        enumerable: true,
        configurable: true
    });
    EmailInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    EmailInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    EmailInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    EmailInputComponent.prototype.setDisabledState = function (isDisabled) {
        throw new Error('Method not implemented.');
    };
    var EmailInputComponent_1;
    EmailInputComponent = EmailInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-input',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmailInputComponent_1; }),
                    multi: true
                }
            ],
            template: __webpack_require__(/*! raw-loader!./email-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/email-input/email-input.component.html"),
            styles: [__webpack_require__(/*! ./email-input.component.scss */ "./src/app/components/inputs/email-input/email-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailInputComponent);
    return EmailInputComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs/name-input-wider/name-input-wider.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/inputs/name-input-wider/name-input-wider.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n}\n\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvbmFtZS1pbnB1dC13aWRlci9DOlxcVXNlcnNcXHZpbG1pXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxnYWxsZXJ5QW5ndWxhclNwcmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5wdXRzXFxuYW1lLWlucHV0LXdpZGVyXFxuYW1lLWlucHV0LXdpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9uYW1lLWlucHV0LXdpZGVyL25hbWUtaW5wdXQtd2lkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvbmFtZS1pbnB1dC13aWRlci9uYW1lLWlucHV0LXdpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbm1hdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/inputs/name-input-wider/name-input-wider.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/inputs/name-input-wider/name-input-wider.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NameInputWiderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameInputWiderComponent", function() { return NameInputWiderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NameInputWiderComponent = /** @class */ (function () {
    function NameInputWiderComponent() {
        this.val = ''; // this is the updated value that the class accesses
        this.placeholder = '';
        this.isChanged = 0; // set value(val) gets called twice while initializing so I set it's placeholder as val twice just to avoid it being renamed if user inputs something
        this.onChange = function () { };
        this.onTouch = function () { };
    }
    NameInputWiderComponent_1 = NameInputWiderComponent;
    Object.defineProperty(NameInputWiderComponent.prototype, "value", {
        set: function (val) {
            // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
            this.val = val;
            if (this.isChanged < 3) {
                this.placeholder = this.val;
                // console.log(this.val);
            }
            this.onChange(val);
            this.onTouch(val);
            this.isChanged++;
        },
        enumerable: true,
        configurable: true
    });
    NameInputWiderComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    NameInputWiderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NameInputWiderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    NameInputWiderComponent.prototype.setDisabledState = function (isDisabled) {
        throw new Error('Method not implemented.');
    };
    var NameInputWiderComponent_1;
    NameInputWiderComponent = NameInputWiderComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-name-input-wider',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NameInputWiderComponent_1; }),
                    multi: true
                }
            ],
            template: __webpack_require__(/*! raw-loader!./name-input-wider.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/name-input-wider/name-input-wider.component.html"),
            styles: [__webpack_require__(/*! ./name-input-wider.component.scss */ "./src/app/components/inputs/name-input-wider/name-input-wider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameInputWiderComponent);
    return NameInputWiderComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs/name-input/name-input.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/inputs/name-input/name-input.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 7px;\n}\n\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvbmFtZS1pbnB1dC9DOlxcVXNlcnNcXHZpbG1pXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxnYWxsZXJ5QW5ndWxhclNwcmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5wdXRzXFxuYW1lLWlucHV0XFxuYW1lLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9uYW1lLWlucHV0L25hbWUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9uYW1lLWlucHV0L25hbWUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/inputs/name-input/name-input.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/inputs/name-input/name-input.component.ts ***!
  \**********************************************************************/
/*! exports provided: NameInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameInputComponent", function() { return NameInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NameInputComponent = /** @class */ (function () {
    function NameInputComponent() {
        this.val = ''; // this is the updated value that the class accesses
        this.placeholder = '';
        this.isChanged = 0; // set value(val) gets called twice while initializing so I set it's placeholder as val twice just to avoid it being renamed if user inputs something
        this.onChange = function () { };
        this.onTouch = function () { };
    }
    NameInputComponent_1 = NameInputComponent;
    Object.defineProperty(NameInputComponent.prototype, "value", {
        set: function (val) {
            // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
            this.val = val;
            if (this.isChanged < 2) {
                this.placeholder = this.val;
            }
            this.onChange(val);
            this.onTouch(val);
            this.isChanged++;
        },
        enumerable: true,
        configurable: true
    });
    NameInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    NameInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NameInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    NameInputComponent.prototype.setDisabledState = function (isDisabled) {
        throw new Error('Method not implemented.');
    };
    var NameInputComponent_1;
    NameInputComponent = NameInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-name-input',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NameInputComponent_1; }),
                    multi: true
                }
            ],
            template: __webpack_require__(/*! raw-loader!./name-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/name-input/name-input.component.html"),
            styles: [__webpack_require__(/*! ./name-input.component.scss */ "./src/app/components/inputs/name-input/name-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameInputComponent);
    return NameInputComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs/password-input/password-input.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/inputs/password-input/password-input.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 7px;\n}\n\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvcGFzc3dvcmQtaW5wdXQvQzpcXFVzZXJzXFx2aWxtaVxcT25lRHJpdmVcXERvY3VtZW50c1xcZ2FsbGVyeUFuZ3VsYXJTcHJpbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGlucHV0c1xccGFzc3dvcmQtaW5wdXRcXHBhc3N3b3JkLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9wYXNzd29yZC1pbnB1dC9wYXNzd29yZC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXRzL3Bhc3N3b3JkLWlucHV0L3Bhc3N3b3JkLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5tYXQtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbm1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/inputs/password-input/password-input.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/inputs/password-input/password-input.component.ts ***!
  \******************************************************************************/
/*! exports provided: PasswordInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordInputComponent", function() { return PasswordInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PasswordInputComponent = /** @class */ (function () {
    function PasswordInputComponent() {
        this.onChange = function () { };
        this.onTouch = function () { };
        this.val = ''; // this is the updated value that the class accesses
        this.placeholder = '';
        this.isChanged = 0; // set value(val) gets called twice while initializing so I set it's placeholder as val twice just to avoid it being renamed if user inputs something
    }
    PasswordInputComponent_1 = PasswordInputComponent;
    Object.defineProperty(PasswordInputComponent.prototype, "value", {
        set: function (val) {
            // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
            this.val = val;
            this.val = val;
            if (this.isChanged < 2) {
                this.placeholder = this.val;
            }
            this.onChange(val);
            this.onTouch(val);
            this.isChanged++;
        },
        enumerable: true,
        configurable: true
    });
    PasswordInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    PasswordInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PasswordInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    PasswordInputComponent.prototype.setDisabledState = function (isDisabled) {
        throw new Error('Method not implemented.');
    };
    var PasswordInputComponent_1;
    PasswordInputComponent = PasswordInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-input',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PasswordInputComponent_1; }),
                    multi: true
                }
            ],
            template: __webpack_require__(/*! raw-loader!./password-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/password-input/password-input.component.html"),
            styles: [__webpack_require__(/*! ./password-input.component.scss */ "./src/app/components/inputs/password-input/password-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasswordInputComponent);
    return PasswordInputComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs/search-box-input/search-box-input.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/inputs/search-box-input/search-box-input.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 7px;\n}\n\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvc2VhcmNoLWJveC1pbnB1dC9DOlxcVXNlcnNcXHZpbG1pXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxnYWxsZXJ5QW5ndWxhclNwcmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5wdXRzXFxzZWFyY2gtYm94LWlucHV0XFxzZWFyY2gtYm94LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zZWFyY2gtYm94LWlucHV0L3NlYXJjaC1ib3gtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zZWFyY2gtYm94LWlucHV0L3NlYXJjaC1ib3gtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gICIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/inputs/search-box-input/search-box-input.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/inputs/search-box-input/search-box-input.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SearchBoxInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxInputComponent", function() { return SearchBoxInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SearchBoxInputComponent = /** @class */ (function () {
    function SearchBoxInputComponent() {
        this.val = ''; // this is the updated value that the class accesses
        this.onChange = function () { };
        this.onTouch = function () { };
    }
    SearchBoxInputComponent_1 = SearchBoxInputComponent;
    Object.defineProperty(SearchBoxInputComponent.prototype, "value", {
        set: function (val) {
            // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
            this.val = val;
            this.onChange(val);
            this.onTouch(val);
        },
        enumerable: true,
        configurable: true
    });
    SearchBoxInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    SearchBoxInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SearchBoxInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    SearchBoxInputComponent.prototype.setDisabledState = function (isDisabled) {
        throw new Error('Method not implemented.');
    };
    var SearchBoxInputComponent_1;
    SearchBoxInputComponent = SearchBoxInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-search-box-input',
            template: __webpack_require__(/*! raw-loader!./search-box-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/search-box-input/search-box-input.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return SearchBoxInputComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./search-box-input.component.scss */ "./src/app/components/inputs/search-box-input/search-box-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchBoxInputComponent);
    return SearchBoxInputComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 90%;\n  margin-bottom: 7px;\n}\n\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvdGFncy1jaGVja2JveC1pbnB1dC9DOlxcVXNlcnNcXHZpbG1pXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxnYWxsZXJ5QW5ndWxhclNwcmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5wdXRzXFx0YWdzLWNoZWNrYm94LWlucHV0XFx0YWdzLWNoZWNrYm94LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy90YWdzLWNoZWNrYm94LWlucHV0L3RhZ3MtY2hlY2tib3gtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy90YWdzLWNoZWNrYm94LWlucHV0L3RhZ3MtY2hlY2tib3gtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxubWF0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TagsCheckboxInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsCheckboxInputComponent", function() { return TagsCheckboxInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var TagsCheckboxInputComponent = /** @class */ (function () {
    function TagsCheckboxInputComponent() {
        this.onChange = function () { };
        this.onTouch = function () { };
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    TagsCheckboxInputComponent_1 = TagsCheckboxInputComponent;
    Object.defineProperty(TagsCheckboxInputComponent.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
            this.val = val ? val : [''];
            this.onChange(val);
            this.onTouch(val);
        },
        enumerable: true,
        configurable: true
    });
    TagsCheckboxInputComponent.prototype.selectionChanged = function (event) {
        this.selectionChange.emit(new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectChange"](this.matSelect, event.value));
        // console.log(event.value);
    };
    TagsCheckboxInputComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    TagsCheckboxInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TagsCheckboxInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    TagsCheckboxInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    var TagsCheckboxInputComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelect"])
    ], TagsCheckboxInputComponent.prototype, "matSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], TagsCheckboxInputComponent.prototype, "selectionChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagsCheckboxInputComponent.prototype, "val", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagsCheckboxInputComponent.prototype, "tags", void 0);
    TagsCheckboxInputComponent = TagsCheckboxInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tags-checkbox-input',
            template: __webpack_require__(/*! raw-loader!./tags-checkbox-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return TagsCheckboxInputComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./tags-checkbox-input.component.scss */ "./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagsCheckboxInputComponent);
    return TagsCheckboxInputComponent;
}());



/***/ }),

/***/ "./src/app/components/inputs/tags-input/tags-input.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/inputs/tags-input/tags-input.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 7px;\n}\n\nmat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvdGFncy1pbnB1dC9DOlxcVXNlcnNcXHZpbG1pXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxnYWxsZXJ5QW5ndWxhclNwcmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5wdXRzXFx0YWdzLWlucHV0XFx0YWdzLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy90YWdzLWlucHV0L3RhZ3MtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy90YWdzLWlucHV0L3RhZ3MtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbiAgbWF0LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/inputs/tags-input/tags-input.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/inputs/tags-input/tags-input.component.ts ***!
  \**********************************************************************/
/*! exports provided: TagsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsInputComponent", function() { return TagsInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TagsInputComponent = /** @class */ (function () {
    function TagsInputComponent() {
        var _this = this;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.addOnBlur = true;
        this.tagControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.onChanged = function () { };
        this.onTouched = function () { };
        this.filteredTags = this.tagControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (tag) { return tag ? _this._filterTag(tag) : _this.allTags.slice(); }));
    }
    TagsInputComponent_1 = TagsInputComponent;
    Object.defineProperty(TagsInputComponent.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            this.val = val ? val : [''];
            this.onChanged(val);
            this.onTouched(val);
        },
        enumerable: true,
        configurable: true
    });
    TagsInputComponent.prototype._filterTag = function (value) {
        var filterValue = value.toLowerCase();
        return this.allTags.filter(function (tag) { return tag.toLowerCase().indexOf(filterValue) === 0; });
    };
    TagsInputComponent.prototype._determineChipListErrorState = function () {
        if (!this.value) {
            return false;
        }
        return this.value.length === 0;
    };
    TagsInputComponent.prototype.selected = function (event) {
        this.tagInput.nativeElement.value = '';
        this.tagControl.setValue(null);
        this.value.push(event.option.viewValue.trim());
        this.isError = this._determineChipListErrorState();
    };
    TagsInputComponent.prototype.removeTag = function (index) {
        if (index >= 0) {
            this.value.splice(index, 1);
            this.isError = this._determineChipListErrorState();
        }
    };
    TagsInputComponent.prototype.addTag = function (event) {
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var value = event.value;
            // Add tag
            if ((value || '').trim()) {
                this.value.push(value.trim());
            }
            // Reset the input value
            if (event.input) {
                event.input.value = '';
            }
            this.tagControl.setValue(null);
            this.isError = this._determineChipListErrorState();
        }
    };
    TagsInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TagsInputComponent.prototype.registerOnChange = function (fn) {
        this.onChanged = fn;
    };
    TagsInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TagsInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    TagsInputComponent.prototype.ngOnInit = function () {
        this.isError = this._determineChipListErrorState();
    };
    var TagsInputComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagsInputComponent.prototype, "val", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagsInputComponent.prototype, "allTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tagInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TagsInputComponent.prototype, "tagInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"])
    ], TagsInputComponent.prototype, "matAutocomplete", void 0);
    TagsInputComponent = TagsInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags-input',
            template: __webpack_require__(/*! raw-loader!./tags-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/tags-input/tags-input.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TagsInputComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./tags-input.component.scss */ "./src/app/components/inputs/tags-input/tags-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagsInputComponent);
    return TagsInputComponent;
}());



/***/ }),

/***/ "./src/app/control-accessors.module.ts":
/*!*********************************************!*\
  !*** ./src/app/control-accessors.module.ts ***!
  \*********************************************/
/*! exports provided: ControlAccessorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlAccessorsModule", function() { return ControlAccessorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_inputs_tags_input_tags_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inputs/tags-input/tags-input.component */ "./src/app/components/inputs/tags-input/tags-input.component.ts");
/* harmony import */ var _components_inputs_categories_input_categories_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inputs/categories-input/categories-input.component */ "./src/app/components/inputs/categories-input/categories-input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_inputs_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inputs/email-input/email-input.component */ "./src/app/components/inputs/email-input/email-input.component.ts");
/* harmony import */ var _components_inputs_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inputs/password-input/password-input.component */ "./src/app/components/inputs/password-input/password-input.component.ts");
/* harmony import */ var _components_inputs_name_input_wider_name_input_wider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inputs/name-input-wider/name-input-wider.component */ "./src/app/components/inputs/name-input-wider/name-input-wider.component.ts");
/* harmony import */ var _components_inputs_name_input_name_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inputs/name-input/name-input.component */ "./src/app/components/inputs/name-input/name-input.component.ts");
/* harmony import */ var _components_inputs_description_input_description_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inputs/description-input/description-input.component */ "./src/app/components/inputs/description-input/description-input.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_inputs_tags_checkbox_input_tags_checkbox_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inputs/tags-checkbox-input/tags-checkbox-input.component */ "./src/app/components/inputs/tags-checkbox-input/tags-checkbox-input.component.ts");
/* harmony import */ var _components_inputs_search_box_input_search_box_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inputs/search-box-input/search-box-input.component */ "./src/app/components/inputs/search-box-input/search-box-input.component.ts");













var ControlAccessorsModule = /** @class */ (function () {
    function ControlAccessorsModule() {
    }
    ControlAccessorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            declarations: [
                _components_inputs_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_5__["EmailInputComponent"],
                _components_inputs_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_6__["PasswordInputComponent"],
                _components_inputs_name_input_wider_name_input_wider_component__WEBPACK_IMPORTED_MODULE_7__["NameInputWiderComponent"],
                _components_inputs_name_input_name_input_component__WEBPACK_IMPORTED_MODULE_8__["NameInputComponent"],
                _components_inputs_description_input_description_input_component__WEBPACK_IMPORTED_MODULE_9__["DescriptionInputComponent"],
                _components_inputs_categories_input_categories_input_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesInputComponent"],
                _components_inputs_tags_input_tags_input_component__WEBPACK_IMPORTED_MODULE_1__["TagsInputComponent"],
                _components_inputs_tags_checkbox_input_tags_checkbox_input_component__WEBPACK_IMPORTED_MODULE_11__["TagsCheckboxInputComponent"],
                _components_inputs_search_box_input_search_box_input_component__WEBPACK_IMPORTED_MODULE_12__["SearchBoxInputComponent"]
            ],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
            exports: [
                _components_inputs_email_input_email_input_component__WEBPACK_IMPORTED_MODULE_5__["EmailInputComponent"],
                _components_inputs_password_input_password_input_component__WEBPACK_IMPORTED_MODULE_6__["PasswordInputComponent"],
                _components_inputs_name_input_wider_name_input_wider_component__WEBPACK_IMPORTED_MODULE_7__["NameInputWiderComponent"],
                _components_inputs_name_input_name_input_component__WEBPACK_IMPORTED_MODULE_8__["NameInputComponent"],
                _components_inputs_description_input_description_input_component__WEBPACK_IMPORTED_MODULE_9__["DescriptionInputComponent"],
                _components_inputs_categories_input_categories_input_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesInputComponent"],
                _components_inputs_tags_input_tags_input_component__WEBPACK_IMPORTED_MODULE_1__["TagsInputComponent"],
                _components_inputs_tags_checkbox_input_tags_checkbox_input_component__WEBPACK_IMPORTED_MODULE_11__["TagsCheckboxInputComponent"],
                _components_inputs_search_box_input_search_box_input_component__WEBPACK_IMPORTED_MODULE_12__["SearchBoxInputComponent"]
            ]
        })
    ], ControlAccessorsModule);
    return ControlAccessorsModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~views-add-add-module~views-gallery-gallerymodule-module~views-login-login-module~views-signu~1811b3e8-es5.js.map