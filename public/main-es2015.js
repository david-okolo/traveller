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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"wrapper\">\n    <span id=\"title\">TRAVLR</span>\n  \n  <div class=\"row\">\n    <div class=\"col-12 col-xl-6 columns\" id=\"leftColumn\">\n      <div class=\"container\" style=\"margin-top: 40px\">\n        <div class=\"row justify-content-center\">\n          <span class=\"col-12 col-md-9 pl-0\" id=\"logo\">TRAVLR</span>\n        </div>\n      </div>\n      <app-login [logoData]=\"logo\" (loggedIn)=\"columnAnimation($event)\"></app-login>\n    </div>\n    <div class=\"col-12 col-xl-6 d-none d-xl-flex columns\" id=\"rightColumn\" style=\"background: url('../../../assets/img/background.jpg')\">\n      <div class=\"container\">\n        <p class=\"h1 offset-1\" id=\"copy\">Visa applications <br>made easy.</p>\n      </div>\n    </div>\n  </div>\n  <div id=\"cover\"></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"loginWrapper\">\n  <div class=\"row justify-content-center align-items-center\">\n      <p class=\"col-12 col-md-9 pl-0 h2\" id=\"header\">Welcome Back!</p>\n      <div class=\"w-100 mt-3\"></div>\n      <input class=\"col-12 col-md-9 mb-4 pl-4\" id=\"username\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Name\">\n      <div class=\"w-100\"></div>\n      <input class=\"col-12 col-md-9 mb-3 pl-4\" id=\"password\" type=\"password\" [(ngModel)]=\"password\" name=\"username\" placeholder=\"Password\">\n      <div class='w-100'></div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"shadow-sm\" id=\"loginBtn\" (click)=\"signin()\">\n      <p id=\"loginText\">login</p>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"43.52315054739228\" width=\"54.02315054739222\" id=\"loginSvg\">\n        <defs>\n          <path id=\"path-1\" opacity=\"1\" fill-rule=\"evenodd\" d=\"M11.76157527369611,22.761575273696078 L18.261575273696106,31.76157527369611 L42.26157527369611,11.761575273696053 \"/>\n        </defs>\n        <g opacity=\"1\">\n          <use xlink:href=\"#path-1\" fill-opacity=\"0\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\"/>\n        </g>\n      </svg>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/countries/countries.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/components/countries/countries.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\" id=\"wrapper\">\n  <div class=\"row justify-content-center\">\n    <div class=\"countries-list col-9 col-lg-6\"  *ngIf=\"this.researchList && this.researchList != []\">\n      <div class=\"country row justify-content-around\" *ngFor=\"let research of researchList\">\n        <div class=\"country-name col-4\">{{research.countryName}}</div>\n        <ul class=\"country-actions col-4\">\n          <li>Edit</li>\n          <li (click)=\"deleteResearch(research._id)\">Delete</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/createform/createform.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/components/createform/createform.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"createFormWrapper\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-9 col-lg-6\">\n\n      <div class=\"row\">\n        <p class=\"h3\">Add new country details.</p>\n      </div>\n      \n      <div class=\"row mb-4\">\n          <p class=\"h6\">Country Name</p>\n          <input class=\"col-12 form-input-field\" type=\"text\" [(ngModel)]=\"countryname\" name=\"countryname\" id=\"countryname\" (keyup)=\"checkValidity('countryname', this.countryname, 2)\" placeholder=\"Name\">\n      </div>\n\n      <div class=\"row mb-4\" id=\"visatypes\">\n        <p class=\"h6\">Visa Types</p>\n        <div class=\"w-100\"></div>\n        <div class=\"col-12 check-box-wrap pl-0 pr-o\" *ngFor=\"let visa of visas\">\n          <div class=\"check-box mr-3\" (click)=\"onSelect('visatypes', visa, this.selectedVisas)\" id={{visa}}></div>\n          <div class=\"check-box-text\">{{visa}} Visa</div>\n        </div>\n        \n      </div>\n\n      <div class=\"row mb-4\" id=\"visareqs\">\n          <p class=\"h6\">Visa Requirements</p>\n          <div class=\"w-100\"></div>\n          <div class=\"col-12 check-box-wrap pl-0 pr-o\" *ngFor=\"let visar of visaReqs\">\n            <div class=\"check-box mr-3\" (click)=\"onSelect('visareqs', visar, this.selectedVisaReqs)\" id={{visar}}></div>\n            <div class=\"check-box-text\">{{visar}}</div>\n          </div>\n      </div>\n\n      <div class=\"row mb-4\" id=\"routes\">\n        <p class=\"h6\">Travel Routes</p>\n        <div class=\"w-100\"></div>\n        <div class=\"col-12 check-box-wrap pl-0 pr-o\" *ngFor=\"let route of routes\">\n          <div class=\"check-box mr-3\" (click)=\"onSelect('routes', route, this.selectedRoutes)\" id={{route}}></div>\n          <div class=\"check-box-text\">{{route}}</div>\n        </div>  \n      </div>\n\n      <div class=\"row mb-4\">\n        <p class=\"h6\">Average Flight Fee</p>\n        <input class=\"col-12 form-input-field\" type=\"number\" [(ngModel)]=\"flightFee\" name=\"flightFee\" id=\"flightfee\" (keyup)=\"checkValidity('flightfee', this.flightFee, 4)\" placeholder=\"Amount\">\n      </div>\n\n      <div class=\"row mb-4\">\n        <p class=\"h6\">Embassy Address</p>\n        <textarea class=\"col-12 pt-2\" type=\"textarea\" [(ngModel)]=\"embassyAddressOne\" name=\"embassyaddressone\" id=\"addressone\" (keyup)=\"checkValidity('addressone', this.embassyAddressOne, 10)\" placeholder=\"Address\" required></textarea>\n      </div>\n\n      <div class=\"row mb-4\">\n        <p class=\"h6\">Embassy Address <span class=\"text-muted font-weight-light font-italic\">optional</span></p>\n        <textarea class=\"col-12 pt-2\" type=\"textarea\" [(ngModel)]=\"embassyAddressTwo\" name=\"embassyaddresstwo\" id=\"addresstwo\" placeholder=\"Address\"></textarea>\n      </div>\n\n      <div class=\"row mb-4\">\n        <p class=\"h6\">Visa Application Link</p>\n        <textarea class=\"col-12 pt-2\" type=\"textarea\" [(ngModel)]=\"visaLink\" name=\"visalink\" id=\"visalink\" (keyup)=\"checkValidity('visalink', this.visaLink, 8)\" placeholder=\"Application Link\"></textarea>\n      </div>\n\n      <div class=\"row justify-content-end mb-4\">\n        <div class=\"col-4 btn px-0 py-0\" id=\"submitBtn\" (click)=\"onSubmit()\">\n          submit\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/navbar/navbar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/components/navbar/navbar.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 d-flex justify-content-between\" style=\"margin-top: 40px\">\n        <span class=\"logo\">TRAVLR</span>\n        <ul class=\"bar-links\">\n          <li [routerLink]=\"['createform']\" (click)=\"showCreate()\">add country. <span class=\"bar\"></span></li>\n          <li [routerLink]=\"['countries']\" (click)=\"showDatabase()\">view country database. <span class=\"bar\"></span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
    })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["DashboardModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: \"SemiBold\";\n}\n#cover {\n  width: 100vw;\n  height: 100vh;\n  background-color: #1f1e48;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.columns {\n  position: relative;\n  z-index: 1;\n  min-height: 100vh;\n}\n#leftColumn {\n  background: rgba(255, 255, 255, 0.9);\n}\n#title {\n  color: #f2f2f2;\n  letter-spacing: 25px;\n  font-size: 48px;\n  font-family: Poppins;\n  font-weight: bold;\n  display: block;\n  position: absolute;\n  z-index: 3;\n}\n#logo {\n  font-size: 24px;\n  font-weight: 100;\n  color: #1f1e48;\n  letter-spacing: 13px;\n  font-family: Poppins;\n  opacity: 0;\n}\n#wrapper {\n  position: relative;\n  z-index: 99;\n  min-height: 100vh;\n}\n#wrapperdiv {\n  position: relative;\n  z-index: 3;\n}\n#copy {\n  color: #f8f9fa;\n  font-family: Poppins;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxwcm9qZWN0c1xcdHJhdmVsbGVyXFxzZXJ2ZXJcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQkFLVTtFQUpWLG1EQUFBO0VBQ0EsdUJBRzhEO0FDSGxFO0FEYUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQVJZO0VBU1osa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNYSjtBRGFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRFlBO0VBQ0ksb0NBQUE7QUNUSjtBRFlBO0VBQ0ksY0F2QlM7RUF3QlQsb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNUSjtBRFdBO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDVko7QURZQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDVEo7QURXQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ1JKO0FEVUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZvbnQoJGZvbnQtZmFtaWx5LCAkZm9udC1maWxlLCAkZm9udC13ZWlnaHQpXHJcbiAgQGZvbnQtZmFjZVxyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseVxyXG4gICAgc3JjOiB1cmwoJGZvbnQtZmlsZSsnLScrJGZvbnQtd2VpZ2h0KycudHRmJykgZm9ybWF0KCd0cnVldHlwZScpXHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0XHJcblxyXG5cclxuQGluY2x1ZGUgZm9udCgnUG9wcGlucycsICcuLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zJywgJ1NlbWlCb2xkJylcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiRwcmltYXJ5LWNvbG9yOiAjMWYxZTQ4XHJcbiRsaWdodC1ncmV5OiAjZjJmMmYyXHJcbiRkYXJrLWdyZXk6ICM4MjgyODJcclxuXHJcblxyXG4jY292ZXIgXHJcbiAgICB3aWR0aDogMTAwdndcclxuICAgIGhlaWdodDogMTAwdmhcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHRvcDogMFxyXG4gICAgbGVmdDogMFxyXG4gICAgei1pbmRleDogMlxyXG5cclxuLmNvbHVtbnNcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgei1pbmRleDogMVxyXG4gICAgbWluLWhlaWdodDogMTAwdmhcclxuXHJcbiNsZWZ0Q29sdW1uXHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAsIDEwMCwgMC45KVxyXG5cclxuXHJcbiN0aXRsZVxyXG4gICAgY29sb3I6ICRsaWdodC1ncmV5XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMjVweFxyXG4gICAgZm9udC1zaXplOiA0OHB4XHJcbiAgICBmb250LWZhbWlseTogUG9wcGluc1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHotaW5kZXg6IDNcclxuXHJcbiNsb2dvXHJcbiAgICAvLyBsZWZ0OiAxNXB4XHJcbiAgICAvLyB0b3A6IDQwcHhcclxuICAgIGZvbnQtc2l6ZTogMjRweFxyXG4gICAgZm9udC13ZWlnaHQ6IDEwMFxyXG4gICAgY29sb3I6ICMxZjFlNDhcclxuICAgIGxldHRlci1zcGFjaW5nOiAxM3B4XHJcbiAgICBmb250LWZhbWlseTogUG9wcGluc1xyXG4gICAgb3BhY2l0eTogMFxyXG5cclxuI3dyYXBwZXJcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgei1pbmRleDogOTlcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoXHJcblxyXG4jd3JhcHBlcmRpdlxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICB6LWluZGV4OiAzXHJcblxyXG4jY29weVxyXG4gICAgY29sb3I6ICNmOGY5ZmFcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IFwiU2VtaUJvbGRcIjtcbn1cbiNjb3ZlciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWU0ODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jb2x1bW5zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuI2xlZnRDb2x1bW4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbiN0aXRsZSB7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICBsZXR0ZXItc3BhY2luZzogMjVweDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG59XG5cbiNsb2dvIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzFmMWU0ODtcbiAgbGV0dGVyLXNwYWNpbmc6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBvcGFjaXR5OiAwO1xufVxuXG4jd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jd3JhcHBlcmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cblxuI2NvcHkge1xuICBjb2xvcjogI2Y4ZjlmYTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs/lib/anime.es */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.primarycolor = "#1f1e48";
        this.lightgrey = "#f2f2f2";
        this.darkgrey = "#828282";
        this.pop = ".23, 1.25, 0.46, 1";
        this.showLogin = false;
    }
    ngOnInit() {
        this.collectVariables();
        this.setCenter(this.title, this.wrapper);
        this.setBottom(this.copy);
        let t1 = animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({});
        t1
            .add({
            targets: this.title,
            left: this.logo.offsetLeft,
            top: this.logo.offsetTop,
            fontSize: 24,
            fontWeight: 100,
            color: "#1f1e48",
            letterSpacing: "13px",
            delay: 1000,
            duration: 300,
            easing: 'cubicBezier(' + this.pop + ')'
        })
            .add({
            targets: this.cover,
            left: window.innerWidth + 'px',
            width: 0,
            opacity: 0,
            duration: 300,
            easing: 'easeInOutQuad'
        }, "-=300");
        t1.finished.then(() => {
            // this.title.style.position = "static"
            // this.cover.style.display = "none"
            this.logo.style.opacity = "1";
        })
            .then(() => {
            this.title.style.opacity = "0";
            // this.title.style.display = "none"
        });
    }
    collectVariables() {
        this.title = document.getElementById('title');
        this.wrapper = document.getElementById('wrapper');
        this.wrapperdiv = document.getElementById('wrapperdiv');
        this.cover = document.getElementById('cover');
        this.logo = document.getElementById('logo');
        this.copy = document.getElementById('copy');
        this.leftColumn = document.getElementById('leftColumn');
        this.rightColumn = document.getElementById('rightColumn');
        // console.log(this.logo)
    }
    setCenter(_element, _parent) {
        let verticalCenter = (window.innerHeight / 2) - (_element.clientHeight / 2);
        let horizCenter = (_parent.clientWidth / 2) - (_element.clientWidth / 2);
        _element.style.top = verticalCenter.toString() + "px";
        _element.style.left = horizCenter.toString() + "px";
        // console.log(_element)
    }
    setBottom(_element) {
        let verticalSpot = (window.innerHeight) - (_element.clientHeight * 1.75);
        _element.style.marginTop = verticalSpot.toString() + 'px';
    }
    columnAnimation() {
        let animation = animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
            delay: 1500
        })
            .add({
            targets: this.logo,
            opacity: 0,
            duration: 100
        })
            .add({
            targets: this.leftColumn,
            translateX: '-' + this.leftColumn.clientWidth.toString() + 'px',
            opacity: 0,
            duration: 500,
            easing: "easeInOutQuad"
        }, "-100")
            .add({
            targets: this.cover,
            left: 0,
            width: window.innerWidth.toString() + 'px',
            opacity: 1,
            backgroundColor: this.primarycolor,
            duration: 500,
            easing: "easeInOutQuad"
        }, "-=400")
            .add({
            targets: this.title,
            opacity: 1,
            duration: 300
        }, "-=6000");
        // .add({
        //   targets: this.cover,
        //   left: 0,
        //   width: (window.innerWidth/3).toString()+'px',
        //   opacity:1,
        //   backgroundColor: "#fff",
        //   duration: 500,
        //   easing: "easeInOutQuad"
        // })
        animation.finished.then(() => {
            this.router.navigate([{ outlets: { primary: 'dashboard' } }]);
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/components/home/home.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: \"SemiBold\";\n}\n@font-face {\n  font-family: \"Poppins-Regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: \"Regular\";\n}\ndiv {\n  font-family: Poppins;\n  color: #1f1e48;\n}\ninput {\n  height: 60px;\n  border: none;\n}\ninput::-webkit-input-placeholder {\n  color: #828282;\n  font-family: Poppins-Regular;\n}\ninput::-moz-placeholder {\n  color: #828282;\n  font-family: Poppins-Regular;\n}\ninput::-ms-input-placeholder {\n  color: #828282;\n  font-family: Poppins-Regular;\n}\ninput::placeholder {\n  color: #828282;\n  font-family: Poppins-Regular;\n}\n#loginBtn {\n  position: relative;\n  height: 60px;\n  background-color: #1f1e48;\n  color: #fff;\n  line-height: 60px;\n  text-align: center;\n  cursor: pointer;\n  width: 200px;\n}\n#loginBtn svg {\n  opacity: 0;\n  position: absolute;\n  top: 8px;\n  left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9EOlxccHJvamVjdHNcXHRyYXZlbGxlclxcc2VydmVyXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUtVO0VBSlYsbURBQUE7RUFDQSx1QkFHOEQ7QUNIbEU7QURIRTtFQUNFLDhCQU1VO0VBTFYsa0RBQUE7RUFDQSxzQkFJc0U7QUNDMUU7QURLQTtFQUNJLG9CQUFBO0VBQ0EsY0FOWTtBQ0doQjtBREtBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNGSjtBREdJO0VBQ0ksY0FWSTtFQVdKLDRCQUFBO0FDRFI7QURESTtFQUNJLGNBVkk7RUFXSiw0QkFBQTtBQ0RSO0FEREk7RUFDSSxjQVZJO0VBV0osNEJBQUE7QUNEUjtBRERJO0VBQ0ksY0FWSTtFQVdKLDRCQUFBO0FDRFI7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQWxCWTtFQW1CWixXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUo7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZvbnQoJGZvbnQtZmFtaWx5LCAkZm9udC1maWxlLCAkZm9udC13ZWlnaHQpXHJcbiAgQGZvbnQtZmFjZVxyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseVxyXG4gICAgc3JjOiB1cmwoJGZvbnQtZmlsZSsnLScrJGZvbnQtd2VpZ2h0KycudHRmJykgZm9ybWF0KCd0cnVldHlwZScpXHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0XHJcblxyXG5cclxuQGluY2x1ZGUgZm9udCgnUG9wcGlucycsICcuLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zJywgJ1NlbWlCb2xkJylcclxuQGluY2x1ZGUgZm9udCgnUG9wcGlucy1SZWd1bGFyJywgJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMnLCAnUmVndWxhcicpXHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzFmMWU0OFxyXG4kbGlnaHQtZ3JleTogI2YyZjJmMlxyXG4kZGFyay1ncmV5OiAjODI4MjgyXHJcbiAgICBcclxuZGl2XHJcbiAgICBmb250LWZhbWlseTogUG9wcGluc1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yXHJcblxyXG5pbnB1dFxyXG4gICAgaGVpZ2h0OiA2MHB4XHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgICY6OnBsYWNlaG9sZGVyXHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyZXlcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyXHJcblxyXG4jbG9naW5CdG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgaGVpZ2h0OiA2MHB4XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvclxyXG4gICAgY29sb3I6ICNmZmZcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgd2lkdGg6IDIwMHB4XHJcblxyXG4jbG9naW5CdG4gc3ZnXHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHRvcDogOHB4XHJcbiAgICBsZWZ0OiA0cHhcclxuICAgIC8vIGRpc3BsYXk6IG5vbmUiLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogXCJTZW1pQm9sZFwiO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBcIlJlZ3VsYXJcIjtcbn1cbmRpdiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBjb2xvcjogIzFmMWU0ODtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xufVxuXG4jbG9naW5CdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWU0ODtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jbG9naW5CdG4gc3ZnIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogNHB4O1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs/lib/anime.es */ "./node_modules/animejs/lib/anime.es.js");




let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.pop = ".23, 1.25, 0.46, 1";
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.collectVariables();
        this.moveCenter(this.wrapper);
    }
    collectVariables() {
        this.wrapper = document.getElementById('loginWrapper');
        this.loginBtn = document.getElementById('loginBtn');
        this.loginText = document.getElementById('loginText');
        this.loginSvg = document.getElementById('loginSvg');
        this.formHeader = document.getElementById('header');
        this.formUsername = document.getElementById('username');
        this.formPassword = document.getElementById('password');
    }
    signin() {
        let loginData = {
            username: this.username,
            password: this.password
        };
        if (loginData.username == "" || loginData.password == "" || loginData.username == undefined || loginData.password == undefined) {
            this.buttonAnimFailed();
        }
        else {
            this.authService.signin(loginData)
                .subscribe(data => {
                if (data.success == true) {
                    this.buttonAnimSuccess();
                    localStorage.setItem('token', data.token);
                    this.loggedIn.emit(true);
                }
                else {
                    this.buttonAnimFailed();
                }
            });
        }
    }
    moveCenter(el) {
        let vertical = ((window.innerHeight - el.clientHeight) / 2) - (this.logoData.clientHeight + this.logoData.offsetTop);
        el.style.marginTop = vertical.toString() + 'px';
    }
    setCenter(_element, _parent) {
        let verticalCenter = (_parent.clientHeight / 2) - (_element.clientHeight / 2);
        let horizCenter = (_parent.clientWidth / 2) - (_element.clientWidth / 2);
        _element.style.top = verticalCenter.toString() + "px";
        _element.style.left = horizCenter.toString() + "px";
    }
    buttonAnimSuccess() {
        let animation = animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({})
            .add({
            targets: this.loginBtn,
            width: "60px",
            borderRadius: "60px",
            backgroundColor: "#4BB543",
            duration: 300,
            easing: 'cubicBezier(' + this.pop + ')'
        })
            .add({
            targets: this.loginText,
            opacity: "0",
            duration: 300
        }, "-=300")
            .add({
            targets: this.loginSvg,
            opacity: "1"
        })
            .add({
            targets: this.formHeader,
            translateX: "-200px",
            opacity: 0,
            duration: 300,
            easing: 'easeInOutQuad'
        })
            .add({
            targets: this.formHeader,
            translateX: "-200px",
            opacity: 0,
            duration: 300,
            easing: 'easeInOutQuad'
        })
            .add({
            targets: this.formUsername,
            translateX: "-200px",
            opacity: 0,
            duration: 300,
            easing: 'easeInOutQuad'
        }, "-=50")
            .add({
            targets: this.formPassword,
            translateX: "-200px",
            opacity: 0,
            duration: 300,
            easing: 'easeInOutQuad'
        }, "-=100");
    }
    buttonAnimFailed() {
        let animation = animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({})
            .add({
            targets: this.loginBtn,
            width: "250px",
            borderRadius: "0px",
            backgroundColor: "#dc3545",
            duration: 600,
            easing: 'cubicBezier(' + this.pop + ')'
        })
            .add({
            targets: this.loginBtn,
            width: "200px",
            borderRadius: "0px",
            backgroundColor: "#1f1e48",
            duration: 300,
            easing: 'cubicBezier(' + this.pop + ')'
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginComponent.prototype, "loggedIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLElement)
], LoginComponent.prototype, "logoData", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/components/login/login.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/components/countries/countries.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/countries/countries.component.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  position: relative;\n  top: 100px;\n}\n\n.country {\n  padding: 20px 0 20px 0;\n  background-color: #f2f2f2;\n}\n\n.country-actions {\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.country-actions li {\n  display: inline-block;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.country-actions li:nth-child(2) {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jb3VudHJpZXMvRDpcXHByb2plY3RzXFx0cmF2ZWxsZXJcXHNlcnZlclxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGNvdW50cmllc1xcY291bnRyaWVzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNISjs7QURLQTtFQUNJLHNCQUFBO0VBQ0EseUJBVFM7QUNPYjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURHSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRFI7O0FERUk7RUFDUSxVQUFBO0FDQVoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzFmMWU0OFxyXG4kbGlnaHQtZ3JleTogI2YyZjJmMlxyXG4kZGFyay1ncmV5OiAjODI4MjgyXHJcbiAgICBcclxuI3dyYXBwZXJcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgdG9wOiAxMDBweFxyXG5cclxuLmNvdW50cnlcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleVxyXG5cclxuXHJcbi5jb3VudHJ5LWFjdGlvbnNcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG4gICAgbGlcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIGxpOm50aC1jaGlsZCgyKVxyXG4gICAgICAgICAgICBjb2xvcjogcmVkIiwiI3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAwcHg7XG59XG5cbi5jb3VudHJ5IHtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmNvdW50cnktYWN0aW9ucyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb3VudHJ5LWFjdGlvbnMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvdW50cnktYWN0aW9ucyBsaTpudGgtY2hpbGQoMikge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/countries/countries.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/countries/countries.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/modules/dashboard/services/country.service.ts");



let CountriesComponent = class CountriesComponent {
    constructor(countryService) {
        this.countryService = countryService;
    }
    ngOnInit() {
        this.getCountries();
    }
    getCountries() {
        this.countryService.getCountries()
            .subscribe(data => {
            if (data.success) {
                this.researchList = data.researchList;
            }
        });
    }
    deleteResearch(_id) {
        let body = {
            id: _id
        };
        this.countryService.deleteCountry(body)
            .subscribe(data => {
            if (data.success) {
                console.log(data);
                this.getCountries();
            }
        });
    }
};
CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countries',
        template: __webpack_require__(/*! raw-loader!./countries.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/countries/countries.component.html"),
        styles: [__webpack_require__(/*! ./countries.component.sass */ "./src/app/modules/dashboard/components/countries/countries.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"]])
], CountriesComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/components/createform/createform.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/createform/createform.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: \"SemiBold\";\n}\n@font-face {\n  font-family: \"Poppins-Regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: \"Regular\";\n}\n#createFormWrapper {\n  position: relative;\n  top: 100px;\n}\n.form-input-field {\n  height: 50px;\n  border: none;\n  border-right: 2px solid #f2f2f2;\n  background-color: #f2f2f2;\n  font-family: Poppins-Regular;\n}\n.form-input-field::-webkit-input-placeholder {\n  color: #828282;\n}\n.form-input-field::-moz-placeholder {\n  color: #828282;\n}\n.form-input-field::-ms-input-placeholder {\n  color: #828282;\n}\n.form-input-field::placeholder {\n  color: #828282;\n}\nlabel {\n  font-size: 16px;\n}\n.check-box-wrap {\n  height: 25px;\n}\n.check-box {\n  background-color: #f2f2f2;\n  border: 2px solid #f2f2f2;\n  border-radius: 5px;\n  width: 17px;\n  height: 17px;\n  float: left;\n}\n.check-box-text {\n  float: left;\n  line-height: 16px;\n  font-family: Poppins-Regular;\n}\ntextarea {\n  min-height: 150px;\n  border: none;\n  border-right: 2px solid #f2f2f2;\n  background-color: #f2f2f2;\n  font-family: Poppins-Regular;\n}\ntextarea::-webkit-input-placeholder {\n  color: #828282;\n}\ntextarea::-moz-placeholder {\n  color: #828282;\n}\ntextarea::-ms-input-placeholder {\n  color: #828282;\n}\ntextarea::placeholder {\n  color: #828282;\n}\n.btn {\n  height: 50px;\n  background-color: #1f1e48;\n  color: white;\n  line-height: 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jcmVhdGVmb3JtL0Q6XFxwcm9qZWN0c1xcdHJhdmVsbGVyXFxzZXJ2ZXJcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxjcmVhdGVmb3JtXFxjcmVhdGVmb3JtLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2NyZWF0ZWZvcm0vY3JlYXRlZm9ybS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUtVO0VBSlYsbURBQUE7RUFDQSx1QkFHb0U7QUNIeEU7QURIRTtFQUNFLDhCQU1VO0VBTFYsa0RBQUE7RUFDQSxzQkFJNEU7QUNDaEY7QURRQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ05KO0FEUUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBYlM7RUFnQlQsNEJBQUE7QUNQSjtBREtJO0VBQ0ksY0FkSTtBQ1daO0FERUk7RUFDSSxjQWRJO0FDV1o7QURFSTtFQUNJLGNBZEk7QUNXWjtBREVJO0VBQ0ksY0FkSTtBQ1daO0FETUE7RUFDSSxlQUFBO0FDSEo7QURLQTtFQUNJLFlBQUE7QUNGSjtBRElBO0VBQ0kseUJBekJTO0VBMEJULHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNESjtBREdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNBSjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkF6Q1M7RUE0Q1QsNEJBQUE7QUNESjtBRERJO0VBQ0ksY0ExQ0k7QUM2Q1o7QURKSTtFQUNJLGNBMUNJO0FDNkNaO0FESkk7RUFDSSxjQTFDSTtBQzZDWjtBREpJO0VBQ0ksY0ExQ0k7QUM2Q1o7QURBQTtFQUNJLFlBQUE7RUFDQSx5QkFqRFk7RUFrRFosWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jcmVhdGVmb3JtL2NyZWF0ZWZvcm0uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZm9udCgkZm9udC1mYW1pbHksICRmb250LWZpbGUsICRmb250LXdlaWdodClcclxuICBAZm9udC1mYWNlXHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5XHJcbiAgICBzcmM6IHVybCgkZm9udC1maWxlKyctJyskZm9udC13ZWlnaHQrJy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJylcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHRcclxuXHJcblxyXG5AaW5jbHVkZSBmb250KCdQb3BwaW5zJywgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMnLCAnU2VtaUJvbGQnKVxyXG5AaW5jbHVkZSBmb250KCdQb3BwaW5zLVJlZ3VsYXInLCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMvUG9wcGlucycsICdSZWd1bGFyJylcclxuXHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzFmMWU0OFxyXG4kbGlnaHQtZ3JleTogI2YyZjJmMlxyXG4kZGFyay1ncmV5OiAjODI4MjgyXHJcbiRzdWNjZXNzOiAjMjhhNzQ1XHJcbiRkYW5nZXI6ICNkYzM1NDVcclxuICAgIFxyXG4jY3JlYXRlRm9ybVdyYXBwZXJcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgdG9wOiAxMDBweFxyXG5cclxuLmZvcm0taW5wdXQtZmllbGRcclxuICAgIGhlaWdodDogNTBweFxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkbGlnaHQtZ3JleVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXlcclxuICAgICY6OnBsYWNlaG9sZGVyXHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyZXlcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXJcclxuXHJcbmxhYmVsXHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuXHJcbi5jaGVjay1ib3gtd3JhcFxyXG4gICAgaGVpZ2h0OiAyNXB4XHJcblxyXG4uY2hlY2stYm94XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleVxyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGxpZ2h0LWdyZXlcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgd2lkdGg6IDE3cHhcclxuICAgIGhlaWdodDogMTdweFxyXG4gICAgZmxvYXQ6IGxlZnRcclxuXHJcbi5jaGVjay1ib3gtdGV4dFxyXG4gICAgZmxvYXQ6IGxlZnRcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyXHJcblxyXG50ZXh0YXJlYVxyXG4gICAgbWluLWhlaWdodDogMTUwcHhcclxuICAgIGJvcmRlcjogbm9uZVxyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGxpZ2h0LWdyZXlcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5XHJcbiAgICAmOjpwbGFjZWhvbGRlclxyXG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmV5XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyXHJcblxyXG4uYnRuXHJcbiAgICBoZWlnaHQ6IDUwcHhcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yXHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIiLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogXCJTZW1pQm9sZFwiO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBcIlJlZ3VsYXJcIjtcbn1cbiNjcmVhdGVGb3JtV3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMDBweDtcbn1cblxuLmZvcm0taW5wdXQtZmllbGQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2YyZjJmMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbn1cbi5mb3JtLWlucHV0LWZpZWxkOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNoZWNrLWJveC13cmFwIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uY2hlY2stYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNoZWNrLWJveC10ZXh0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xufVxuXG50ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmMmYyZjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG59XG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWU0ODtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/createform/createform.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/createform/createform.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateformComponent", function() { return CreateformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/modules/dashboard/services/country.service.ts");
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs/lib/anime.es */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreateformComponent = class CreateformComponent {
    constructor(countryService, router) {
        this.countryService = countryService;
        this.router = router;
        this.pop = ".23, 1.25, 0.46, 1";
        this.visas = [
            'Business',
            'Family',
            'Student',
            'Visitor',
            'Work'
        ];
        this.visaReqs = [
            'Valid passport',
            'Visa fee payment',
            'Bank statement showing proof of funds'
        ];
        this.routes = [
            'Direct',
            'Connecting'
        ];
        this.embassyAddresses = [];
        this.selectedVisas = [];
        this.selectedVisaReqs = [];
        this.selectedRoutes = [];
    }
    ngOnInit() {
        this.submitBtn = document.getElementById('submitBtn');
    }
    onSelect(_el, _item, _itemArray) {
        let selected = false;
        let visaId = document.getElementById(_item);
        let success = "#28a745";
        let normal = "#f2f2f2";
        for (let i = 0; i < _itemArray.length; i++) {
            if (_itemArray[i] == _item) {
                _itemArray.splice(i, 1);
                selected = true;
            }
        }
        if (!selected) {
            _itemArray.push(_item);
            visaId.style.backgroundColor = success;
        }
        else {
            visaId.style.backgroundColor = normal;
        }
        this.checkValidity(_el, _itemArray, 1);
    }
    ///Form validation methods
    dataExists(_data) {
        if (_data) {
            return true;
        }
        else {
            return false;
        }
    }
    dataHasCorrectLength(_data, _length) {
        if (_data.length >= _length) {
            return true;
        }
        else {
            return false;
        }
    }
    isvalid(_data, _length) {
        if (this.dataExists(_data)) {
            if (this.dataHasCorrectLength(_data, _length)) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            return 2;
        }
    }
    onSubmit() {
        let status = true;
        let formData = [
            {
                el: 'countryname',
                data: this.countryname,
                len: 2
            },
            {
                el: 'visatypes',
                data: this.selectedVisas,
                len: 1
            },
            {
                el: 'visareqs',
                data: this.selectedVisaReqs,
                len: 1
            },
            {
                el: 'routes',
                data: this.selectedRoutes,
                len: 1
            },
            {
                el: 'flightfee',
                data: this.flightFee,
                len: 1
            },
            {
                el: 'addressone',
                data: this.embassyAddressOne,
                len: 10
            },
            // {
            //   el: 'addresstwo',
            //   data: this.embassyAddressTwo,
            //   len: 10
            // },
            {
                el: 'visalink',
                data: this.visaLink,
                len: 8
            },
        ];
        for (let index = 0; index < formData.length; index++) {
            if (!this.checkValidity(formData[index].el, formData[index].data, formData[index].len)) {
                status = false;
            }
        }
        if (status) {
            this.submitPaper();
        }
        else {
            this.buttonAnimFailed();
        }
    }
    submitPaper() {
        let form = {
            countryName: this.countryname,
            visaTypes: this.selectedVisas,
            visaRequirements: this.selectedVisaReqs,
            travelRoutes: this.selectedRoutes,
            averageFlightPrice: this.flightFee,
            address: this.embassyAddresses,
            applicationLink: this.visaLink
        };
        this.countryService.postCountry(form)
            .subscribe(data => {
            if (data.success == true) {
                this.buttonAnimSuccess();
            }
            else {
                this.buttonAnimFailed();
            }
        });
    }
    checkValidity(_el, _data, _len) {
        if (typeof (_data) === "number") {
            _data = _data.toString();
        }
        switch (this.isvalid(_data, _len)) {
            case 0:
                document.getElementById(_el).style.borderRight = '4px solid green';
                return true;
            case 1:
                document.getElementById(_el).style.borderRight = '4px solid red';
                return false;
            case 2:
                document.getElementById(_el).style.borderRight = '4px solid red';
                return false;
            default:
                break;
        }
    }
    buttonAnimSuccess() {
        let animation = animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({})
            .add({
            targets: this.submitBtn,
            width: "250px",
            borderRadius: "0px",
            backgroundColor: "#4BB543",
            duration: 600,
            easing: 'cubicBezier(' + this.pop + ')'
        });
        animation.finished.then(() => {
            this.router.navigate(['dashboard', 'countries']);
        });
    }
    buttonAnimFailed() {
        let animation = animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({})
            .add({
            targets: this.submitBtn,
            width: "250px",
            borderRadius: "0px",
            backgroundColor: "#dc3545",
            duration: 600,
            easing: 'cubicBezier(' + this.pop + ')'
        })
            .add({
            targets: this.submitBtn,
            width: "200px",
            borderRadius: "0px",
            backgroundColor: "#1f1e48",
            duration: 300,
            easing: 'cubicBezier(' + this.pop + ')'
        });
    }
};
CreateformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createform',
        template: __webpack_require__(/*! raw-loader!./createform.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/createform/createform.component.html"),
        styles: [__webpack_require__(/*! ./createform.component.sass */ "./src/app/modules/dashboard/components/createform/createform.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CreateformComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/components/navbar/navbar.component.sass":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/navbar/navbar.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  letter-spacing: 13px;\n  font-size: 24px;\n}\n\n.bar-links {\n  list-style-type: none;\n}\n\n.bar-links li {\n  position: relative;\n  display: inline-block;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.bar-links li .bar {\n  position: absolute;\n  display: block;\n  width: 30px;\n  height: 2px;\n  background-color: #000000;\n  bottom: 0;\n  opacity: 0;\n}\n\n.wrapper {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9uYXZiYXIvRDpcXHByb2plY3RzXFx0cmF2ZWxsZXJcXHNlcnZlclxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR0o7O0FERkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNJUjs7QURGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEzcHhcclxuICAgIGZvbnQtc2l6ZTogMjRweFxyXG5cclxuLmJhci1saW5rc1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lXHJcblxyXG4uYmFyLWxpbmtzIGxpXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgLmJhclxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgd2lkdGg6IDMwcHhcclxuICAgICAgICBoZWlnaHQ6IDJweFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBcclxuICAgICAgICBib3R0b206IDBcclxuICAgICAgICBvcGFjaXR5OiAwXHJcblxyXG4ud3JhcHBlclxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxuICAgIHotaW5kZXg6IDk5IiwiLmxvZ28ge1xuICBsZXR0ZXItc3BhY2luZzogMTNweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uYmFyLWxpbmtzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYmFyLWxpbmtzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmFyLWxpbmtzIGxpIC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/navbar/navbar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/navbar/navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    collectVariables() {
    }
    showCreate() {
        //TODO
    }
    showDatabase() {
        //TODO
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.sass */ "./src/app/modules/dashboard/components/navbar/navbar.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _components_createform_createform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/createform/createform.component */ "./src/app/modules/dashboard/components/createform/createform.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/modules/dashboard/components/countries/countries.component.ts");






const routes = [
    {
        path: "dashboard",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: "",
                redirectTo: "createform",
                pathMatch: "full"
            },
            {
                path: "createform",
                component: _components_createform_createform_component__WEBPACK_IMPORTED_MODULE_4__["CreateformComponent"]
            },
            {
                path: "countries",
                component: _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_5__["CountriesComponent"]
            }
        ]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.sass":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: \"SemiBold\";\n}\n#dashWrapper {\n  min-height: 100vh;\n  background-color: #fff;\n}\n#sideNav {\n  height: 100vh;\n  background-color: #1f1e48;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvRDpcXHByb2plY3RzXFx0cmF2ZWxsZXJcXHNlcnZlclxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usc0JBS1U7RUFKVixtREFBQTtFQUNBLHVCQUc4RDtBQ0hsRTtBRFlBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtBQ1ZKO0FEWUE7RUFDSSxhQUFBO0VBQ0EseUJBVk07QUNDViIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBmb250KCRmb250LWZhbWlseSwgJGZvbnQtZmlsZSwgJGZvbnQtd2VpZ2h0KVxyXG4gIEBmb250LWZhY2VcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHlcclxuICAgIHNyYzogdXJsKCRmb250LWZpbGUrJy0nKyRmb250LXdlaWdodCsnLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKVxyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodFxyXG5cclxuXHJcbkBpbmNsdWRlIGZvbnQoJ1BvcHBpbnMnLCAnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMvUG9wcGlucycsICdTZW1pQm9sZCcpXHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4kcHJpbWFyeTogIzFmMWU0OFxyXG4kbGlnaHQtZ3JleTogI2YyZjJmMlxyXG4kZGFyay1ncmV5OiAjODI4MjgyXHJcblxyXG4jZGFzaFdyYXBwZXJcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXHJcblxyXG4jc2lkZU5hdlxyXG4gICAgaGVpZ2h0OiAxMDB2aFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkiLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogXCJTZW1pQm9sZFwiO1xufVxuI2Rhc2hXcmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbiNzaWRlTmF2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWU0ODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.sass */ "./src/app/modules/dashboard/dashboard.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _components_createform_createform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/createform/createform.component */ "./src/app/modules/dashboard/components/createform/createform.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/modules/dashboard/components/navbar/navbar.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/modules/dashboard/components/countries/countries.component.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/country.service */ "./src/app/modules/dashboard/services/country.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _components_createform_createform_component__WEBPACK_IMPORTED_MODULE_7__["CreateformComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_9__["CountriesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [
            _services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/modules/dashboard/services/country.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/services/country.service.ts ***!
  \***************************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let CountryService = class CountryService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    // post(_path, _body, headers = null){
    //   return this.http.post(this.auth.backendUrl+_path, _body, {headers})
    // }
    // get(_path){
    //   return this.http.get(this.auth.backendUrl+_path)
    // }
    postCountry(_data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Bearer ' + this.auth.loadToken());
        return this.http.post(this.auth.backendUrl + '/research/addResearch', _data, { headers });
    }
    getCountries() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Bearer ' + this.auth.loadToken());
        return this.http.get(this.auth.backendUrl + '/research/getResearches', { headers });
    }
    deleteCountry(_data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Bearer ' + this.auth.loadToken());
        return this.http.post(this.auth.backendUrl + '/research/deleteResearch', _data, { headers });
    }
};
CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], CountryService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.backendUrl = "";
    }
    loadToken() {
        return localStorage.getItem('token');
    }
    signin(_data) {
        return this.http.post(this.backendUrl + "/users/authenticate", _data);
        //to handle the error
        // .pipe(
        //   catchError()
        // )
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\traveller\server\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map