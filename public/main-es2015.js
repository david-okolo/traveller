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

module.exports = "<router-outlet name=\"main\"></router-outlet>\n<router-outlet></router-outlet>"

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

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/createform/createform.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/components/createform/createform.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"createFormWrapper\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-9 col-lg-6\">\n\n      <div class=\"row\">\n        <p class=\"h3\">Add new country details.</p>\n      </div>\n      \n      <div class=\"row mb-4\">\n          <p class=\"h6\">Country Name</p>\n          <input class=\"col-12 form-input-field\" type=\"text\" [(ngModel)]=\"countryname\" name=\"countryname\" id=\"countryname\" (keyup)=\"checkValidity('countryname', this.countryname, 2)\" placeholder=\"Name\">\n      </div>\n\n      <div class=\"row mb-4\" id=\"visatypes\">\n        <p class=\"h6\">Visa Types</p>\n        <div class=\"w-100\"></div>\n        <div class=\"col-12 check-box-wrap pl-0 pr-o\" *ngFor=\"let visa of visas\">\n          <div class=\"check-box mr-3\" (click)=\"onSelect('visatypes', visa, this.selectedVisas)\" id={{visa}}></div>\n          <div class=\"check-box-text\">{{visa}} Visa</div>\n        </div>\n        \n      </div>\n\n      <div class=\"row mb-4\" id=\"visareqs\">\n          <p class=\"h6\">Visa Requirements</p>\n          <div class=\"w-100\"></div>\n          <div class=\"col-12 check-box-wrap pl-0 pr-o\" *ngFor=\"let visar of visaReqs\">\n            <div class=\"check-box mr-3\" (click)=\"onSelect('visareqs', visar, this.selectedVisaReqs)\" id={{visar}}></div>\n            <div class=\"check-box-text\">{{visar}}</div>\n          </div>\n      </div>\n\n      <div class=\"row mb-4\" id=\"routes\">\n        <p class=\"h6\">Travel Routes</p>\n        <div class=\"w-100\"></div>\n        <div class=\"col-12 check-box-wrap pl-0 pr-o\" *ngFor=\"let route of routes\">\n          <div class=\"check-box mr-3\" (click)=\"onSelect('routes', route, this.selectedRoutes)\" id={{route}}></div>\n          <div class=\"check-box-text\">{{route}}</div>\n        </div>  \n      </div>\n\n      <div class=\"row mb-4\">\n        <p class=\"h6\">Average Flight Fee</p>\n        <input class=\"col-12 form-input-field\" type=\"number\" [(ngModel)]=\"flightFee\" name=\"flightFee\" id=\"flightfee\" (keyup)=\"checkValidity('flightfee', this.flightFee, 4)\" placeholder=\"Amount\">\n      </div>\n\n      <div class=\"row mb-4\">\n        <p class=\"h6\">Embassy Address</p>\n        <textarea class=\"col-12 pt-2\" type=\"textarea\" [(ngModel)]=\"embassyAddressOne\" name=\"embassyaddressone\" id=\"addressone\" (keyup)=\"checkValidity('addressone', this.embassyAddressOne, 10)\" placeholder=\"Address\" required></textarea>\n      </div>\n\n      <div class=\"row mb-4\">\n        <p class=\"h6\">Embassy Address <span class=\"text-muted font-weight-light font-italic\">optional</span></p>\n        <textarea class=\"col-12 pt-2\" type=\"textarea\" [(ngModel)]=\"embassyAddressTwo\" name=\"embassyaddresstwo\" id=\"addresstwo\" placeholder=\"Address\"></textarea>\n      </div>\n\n      <div class=\"row mb-4\">\n        <p class=\"h6\">Visa Application Link</p>\n        <textarea class=\"col-12 pt-2\" type=\"textarea\" [(ngModel)]=\"visaLink\" name=\"visalink\" id=\"visalink\" (keyup)=\"checkValidity('visalink', this.visaLink, 8)\" placeholder=\"Application Link\"></textarea>\n      </div>\n\n      <div class=\"row justify-content-end mb-4\">\n        <div class=\"col-4 btn px-0 py-0\" (click)=\"onSubmit()\">\n          submit\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/navbar/navbar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/components/navbar/navbar.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 d-flex justify-content-between\" style=\"margin-top: 40px\">\n        <span class=\"logo\">TRAVLR</span>\n        <ul class=\"bar-links\">\n          <li (click)=\"showCreate()\">add country. <span class=\"bar\"></span></li>\n          <li (click)=\"showDatabase()\">view country database. <span class=\"bar\"></span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"dashWrapper\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-3 d-none d-lg-flex\" id=\"sideNav\"></div>\n    <div class=\"col-9\" id=\"\">\n    \n    </div>\n  </div>\n</div>\n"

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

module.exports = "@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: \"SemiBold\";\n}\n#cover {\n  width: 100vw;\n  height: 100vh;\n  background-color: #1f1e48;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.columns {\n  position: relative;\n  z-index: 1;\n  min-height: 100vh;\n}\n#leftColumn {\n  background: rgba(255, 255, 255, 0.9);\n}\n#title {\n  color: #f2f2f2;\n  letter-spacing: 25px;\n  font-size: 48px;\n  font-family: Poppins;\n  font-weight: bold;\n  display: block;\n  position: absolute;\n  z-index: 3;\n}\n#logo {\n  font-size: 24px;\n  font-weight: 100;\n  color: #1f1e48;\n  letter-spacing: 13px;\n  font-family: Poppins;\n  opacity: 0;\n}\n#wrapper {\n  position: relative;\n  z-index: 99;\n  min-height: 100vh;\n}\n#wrapperdiv {\n  position: relative;\n  z-index: 3;\n}\n#copy {\n  color: #f8f9fa;\n  font-family: Poppins;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxwcm9qZWN0c1xcdHJhdmVsbGVyXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usc0JBS1U7RUFKVixtREFBQTtFQUNBLHVCQUc4RDtBQ0hsRTtBRGFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFSWTtFQVNaLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDWEo7QURhQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDVko7QURZQTtFQUNJLG9DQUFBO0FDVEo7QURZQTtFQUNJLGNBdkJTO0VBd0JULG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDVEo7QURXQTtFQUdJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ1ZKO0FEWUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1RKO0FEV0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNSSjtBRFVBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBmb250KCRmb250LWZhbWlseSwgJGZvbnQtZmlsZSwgJGZvbnQtd2VpZ2h0KVxyXG4gIEBmb250LWZhY2VcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHlcclxuICAgIHNyYzogdXJsKCRmb250LWZpbGUrJy0nKyRmb250LXdlaWdodCsnLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKVxyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodFxyXG5cclxuXHJcbkBpbmNsdWRlIGZvbnQoJ1BvcHBpbnMnLCAnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMvUG9wcGlucycsICdTZW1pQm9sZCcpXHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4kcHJpbWFyeS1jb2xvcjogIzFmMWU0OFxyXG4kbGlnaHQtZ3JleTogI2YyZjJmMlxyXG4kZGFyay1ncmV5OiAjODI4MjgyXHJcblxyXG5cclxuI2NvdmVyIFxyXG4gICAgd2lkdGg6IDEwMHZ3XHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvclxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB0b3A6IDBcclxuICAgIGxlZnQ6IDBcclxuICAgIHotaW5kZXg6IDJcclxuXHJcbi5jb2x1bW5zXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIHotaW5kZXg6IDFcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoXHJcblxyXG4jbGVmdENvbHVtblxyXG4gICAgYmFja2dyb3VuZDogaHNsYSgwLCAwLCAxMDAsIDAuOSlcclxuXHJcblxyXG4jdGl0bGVcclxuICAgIGNvbG9yOiAkbGlnaHQtZ3JleVxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHhcclxuICAgIGZvbnQtc2l6ZTogNDhweFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnNcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB6LWluZGV4OiAzXHJcblxyXG4jbG9nb1xyXG4gICAgLy8gbGVmdDogMTVweFxyXG4gICAgLy8gdG9wOiA0MHB4XHJcbiAgICBmb250LXNpemU6IDI0cHhcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDBcclxuICAgIGNvbG9yOiAjMWYxZTQ4XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTNweFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnNcclxuICAgIG9wYWNpdHk6IDBcclxuXHJcbiN3cmFwcGVyXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIHotaW5kZXg6IDk5XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxyXG5cclxuI3dyYXBwZXJkaXZcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgei1pbmRleDogM1xyXG5cclxuI2NvcHlcclxuICAgIGNvbG9yOiAjZjhmOWZhXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucyIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBcIlNlbWlCb2xkXCI7XG59XG4jY292ZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFlNDg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29sdW1ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbiNsZWZ0Q29sdW1uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4jdGl0bGUge1xuICBjb2xvcjogI2YyZjJmMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xufVxuXG4jbG9nbyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMxZjFlNDg7XG4gIGxldHRlci1zcGFjaW5nOiAxM3B4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgb3BhY2l0eTogMDtcbn1cblxuI3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuI3dyYXBwZXJkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG59XG5cbiNjb3B5IHtcbiAgY29sb3I6ICNmOGY5ZmE7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufSJdfQ== */"

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
            this.router.navigate([{ outlets: { primary: 'createform', main: 'navbar' } }]);
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

module.exports = "@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: \"SemiBold\";\n}\n@font-face {\n  font-family: \"Poppins-Regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: \"Regular\";\n}\ndiv {\n  font-family: Poppins;\n  color: #1f1e48;\n}\ninput {\n  height: 60px;\n  border: none;\n}\ninput::-webkit-input-placeholder {\n  color: #828282;\n  font-family: Poppins-Regular;\n}\ninput::-moz-placeholder {\n  color: #828282;\n  font-family: Poppins-Regular;\n}\ninput::-ms-input-placeholder {\n  color: #828282;\n  font-family: Poppins-Regular;\n}\ninput::placeholder {\n  color: #828282;\n  font-family: Poppins-Regular;\n}\n#loginBtn {\n  position: relative;\n  height: 60px;\n  background-color: #1f1e48;\n  color: #fff;\n  line-height: 60px;\n  text-align: center;\n  cursor: pointer;\n  width: 200px;\n}\n#loginBtn svg {\n  opacity: 0;\n  position: absolute;\n  top: 8px;\n  left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9EOlxccHJvamVjdHNcXHRyYXZlbGxlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQkFLVTtFQUpWLG1EQUFBO0VBQ0EsdUJBRzhEO0FDSGxFO0FESEU7RUFDRSw4QkFNVTtFQUxWLGtEQUFBO0VBQ0Esc0JBSXNFO0FDQzFFO0FES0E7RUFDSSxvQkFBQTtFQUNBLGNBTlk7QUNHaEI7QURLQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRko7QURHSTtFQUNJLGNBVkk7RUFXSiw0QkFBQTtBQ0RSO0FEREk7RUFDSSxjQVZJO0VBV0osNEJBQUE7QUNEUjtBRERJO0VBQ0ksY0FWSTtFQVdKLDRCQUFBO0FDRFI7QURESTtFQUNJLGNBVkk7RUFXSiw0QkFBQTtBQ0RSO0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFsQlk7RUFtQlosV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBmb250KCRmb250LWZhbWlseSwgJGZvbnQtZmlsZSwgJGZvbnQtd2VpZ2h0KVxyXG4gIEBmb250LWZhY2VcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHlcclxuICAgIHNyYzogdXJsKCRmb250LWZpbGUrJy0nKyRmb250LXdlaWdodCsnLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKVxyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodFxyXG5cclxuXHJcbkBpbmNsdWRlIGZvbnQoJ1BvcHBpbnMnLCAnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMvUG9wcGlucycsICdTZW1pQm9sZCcpXHJcbkBpbmNsdWRlIGZvbnQoJ1BvcHBpbnMtUmVndWxhcicsICcuLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zJywgJ1JlZ3VsYXInKVxyXG5cclxuJHByaW1hcnktY29sb3I6ICMxZjFlNDhcclxuJGxpZ2h0LWdyZXk6ICNmMmYyZjJcclxuJGRhcmstZ3JleTogIzgyODI4MlxyXG4gICAgXHJcbmRpdlxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnNcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvclxyXG5cclxuaW5wdXRcclxuICAgIGhlaWdodDogNjBweFxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICAmOjpwbGFjZWhvbGRlclxyXG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmV5XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhclxyXG5cclxuI2xvZ2luQnRuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIGhlaWdodDogNjBweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3JcclxuICAgIGNvbG9yOiAjZmZmXHJcbiAgICBsaW5lLWhlaWdodDogNjBweFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIHdpZHRoOiAyMDBweFxyXG5cclxuI2xvZ2luQnRuIHN2Z1xyXG4gICAgb3BhY2l0eTogMFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB0b3A6IDhweFxyXG4gICAgbGVmdDogNHB4XHJcbiAgICAvLyBkaXNwbGF5OiBub25lIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IFwiU2VtaUJvbGRcIjtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogXCJSZWd1bGFyXCI7XG59XG5kaXYge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgY29sb3I6ICMxZjFlNDg7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbn1cblxuI2xvZ2luQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFlNDg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuI2xvZ2luQnRuIHN2ZyB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDRweDtcbn0iXX0= */"

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

/***/ "./src/app/modules/dashboard/components/createform/createform.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/createform/createform.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: \"SemiBold\";\n}\n@font-face {\n  font-family: \"Poppins-Regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: \"Regular\";\n}\n#createFormWrapper {\n  position: relative;\n  top: 100px;\n}\n.form-input-field {\n  height: 50px;\n  border: none;\n  border-right: 2px solid #f2f2f2;\n  background-color: #f2f2f2;\n  font-family: Poppins-Regular;\n}\n.form-input-field::-webkit-input-placeholder {\n  color: #828282;\n}\n.form-input-field::-moz-placeholder {\n  color: #828282;\n}\n.form-input-field::-ms-input-placeholder {\n  color: #828282;\n}\n.form-input-field::placeholder {\n  color: #828282;\n}\nlabel {\n  font-size: 16px;\n}\n.check-box-wrap {\n  height: 25px;\n}\n.check-box {\n  background-color: #f2f2f2;\n  border: 2px solid #f2f2f2;\n  border-radius: 5px;\n  width: 17px;\n  height: 17px;\n  float: left;\n}\n.check-box-text {\n  float: left;\n  line-height: 16px;\n  font-family: Poppins-Regular;\n}\ntextarea {\n  min-height: 150px;\n  border: none;\n  border-right: 2px solid #f2f2f2;\n  background-color: #f2f2f2;\n  font-family: Poppins-Regular;\n}\ntextarea::-webkit-input-placeholder {\n  color: #828282;\n}\ntextarea::-moz-placeholder {\n  color: #828282;\n}\ntextarea::-ms-input-placeholder {\n  color: #828282;\n}\ntextarea::placeholder {\n  color: #828282;\n}\n.btn {\n  height: 50px;\n  background-color: #1f1e48;\n  color: white;\n  line-height: 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jcmVhdGVmb3JtL0Q6XFxwcm9qZWN0c1xcdHJhdmVsbGVyXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcY3JlYXRlZm9ybVxcY3JlYXRlZm9ybS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jcmVhdGVmb3JtL2NyZWF0ZWZvcm0uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQkFLVTtFQUpWLG1EQUFBO0VBQ0EsdUJBR29FO0FDSHhFO0FESEU7RUFDRSw4QkFNVTtFQUxWLGtEQUFBO0VBQ0Esc0JBSTRFO0FDQ2hGO0FEUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNOSjtBRFFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQWJTO0VBZ0JULDRCQUFBO0FDUEo7QURLSTtFQUNJLGNBZEk7QUNXWjtBREVJO0VBQ0ksY0FkSTtBQ1daO0FERUk7RUFDSSxjQWRJO0FDV1o7QURFSTtFQUNJLGNBZEk7QUNXWjtBRE1BO0VBQ0ksZUFBQTtBQ0hKO0FES0E7RUFDSSxZQUFBO0FDRko7QURJQTtFQUNJLHlCQXpCUztFQTBCVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDREo7QURHQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDQUo7QURFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBekNTO0VBNENULDRCQUFBO0FDREo7QURESTtFQUNJLGNBMUNJO0FDNkNaO0FESkk7RUFDSSxjQTFDSTtBQzZDWjtBREpJO0VBQ0ksY0ExQ0k7QUM2Q1o7QURKSTtFQUNJLGNBMUNJO0FDNkNaO0FEQUE7RUFDSSxZQUFBO0VBQ0EseUJBakRZO0VBa0RaLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvY3JlYXRlZm9ybS9jcmVhdGVmb3JtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZvbnQoJGZvbnQtZmFtaWx5LCAkZm9udC1maWxlLCAkZm9udC13ZWlnaHQpXHJcbiAgQGZvbnQtZmFjZVxyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseVxyXG4gICAgc3JjOiB1cmwoJGZvbnQtZmlsZSsnLScrJGZvbnQtd2VpZ2h0KycudHRmJykgZm9ybWF0KCd0cnVldHlwZScpXHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0XHJcblxyXG5cclxuQGluY2x1ZGUgZm9udCgnUG9wcGlucycsICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zJywgJ1NlbWlCb2xkJylcclxuQGluY2x1ZGUgZm9udCgnUG9wcGlucy1SZWd1bGFyJywgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMnLCAnUmVndWxhcicpXHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICMxZjFlNDhcclxuJGxpZ2h0LWdyZXk6ICNmMmYyZjJcclxuJGRhcmstZ3JleTogIzgyODI4MlxyXG4kc3VjY2VzczogIzI4YTc0NVxyXG4kZGFuZ2VyOiAjZGMzNTQ1XHJcbiAgICBcclxuI2NyZWF0ZUZvcm1XcmFwcGVyXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIHRvcDogMTAwcHhcclxuXHJcbi5mb3JtLWlucHV0LWZpZWxkXHJcbiAgICBoZWlnaHQ6IDUwcHhcclxuICAgIGJvcmRlcjogbm9uZVxyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGxpZ2h0LWdyZXlcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5XHJcbiAgICAmOjpwbGFjZWhvbGRlclxyXG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmV5XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyXHJcblxyXG5sYWJlbFxyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcblxyXG4uY2hlY2stYm94LXdyYXBcclxuICAgIGhlaWdodDogMjVweFxyXG5cclxuLmNoZWNrLWJveFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXlcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRsaWdodC1ncmV5XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIHdpZHRoOiAxN3B4XHJcbiAgICBoZWlnaHQ6IDE3cHhcclxuICAgIGZsb2F0OiBsZWZ0XHJcblxyXG4uY2hlY2stYm94LXRleHRcclxuICAgIGZsb2F0OiBsZWZ0XHJcbiAgICBsaW5lLWhlaWdodDogMTZweFxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhclxyXG5cclxudGV4dGFyZWFcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4XHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRsaWdodC1ncmV5XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleVxyXG4gICAgJjo6cGxhY2Vob2xkZXJcclxuICAgICAgICBjb2xvcjogJGRhcmstZ3JleVxyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhclxyXG5cclxuLmJ0blxyXG4gICAgaGVpZ2h0OiA1MHB4XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvclxyXG4gICAgY29sb3I6IHdoaXRlXHJcbiAgICBsaW5lLWhlaWdodDogNTBweFxyXG4gICAgY3Vyc29yOiBwb2ludGVyIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IFwiU2VtaUJvbGRcIjtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogXCJSZWd1bGFyXCI7XG59XG4jY3JlYXRlRm9ybVdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAwcHg7XG59XG5cbi5mb3JtLWlucHV0LWZpZWxkIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmMmYyZjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG59XG4uZm9ybS1pbnB1dC1maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jaGVjay1ib3gtd3JhcCB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmNoZWNrLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jaGVjay1ib3gtdGV4dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbn1cblxudGV4dGFyZWEge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZjJmMmYyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xufVxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFlNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

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


let CreateformComponent = class CreateformComponent {
    constructor() {
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
            return true;
        }
        else {
            return false;
        }
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
};
CreateformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createform',
        template: __webpack_require__(/*! raw-loader!./createform.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/components/createform/createform.component.html"),
        styles: [__webpack_require__(/*! ./createform.component.sass */ "./src/app/modules/dashboard/components/createform/createform.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateformComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/components/navbar/navbar.component.sass":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/navbar/navbar.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  letter-spacing: 13px;\n  font-size: 24px;\n}\n\n.bar-links {\n  list-style-type: none;\n}\n\n.bar-links li {\n  position: relative;\n  display: inline-block;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.bar-links li .bar {\n  position: absolute;\n  display: block;\n  width: 30px;\n  height: 2px;\n  background-color: #000000;\n  bottom: 0;\n  opacity: 0;\n}\n\n.wrapper {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9uYXZiYXIvRDpcXHByb2plY3RzXFx0cmF2ZWxsZXJcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREZJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSVI7O0FERkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29cclxuICAgIGxldHRlci1zcGFjaW5nOiAxM3B4XHJcbiAgICBmb250LXNpemU6IDI0cHhcclxuXHJcbi5iYXItbGlua3NcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZVxyXG5cclxuLmJhci1saW5rcyBsaVxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIC5iYXJcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIHdpZHRoOiAzMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAycHhcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwXHJcbiAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG5cclxuLndyYXBwZXJcclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbiAgICB6LWluZGV4OiA5OSIsIi5sb2dvIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmJhci1saW5rcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmJhci1saW5rcyBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJhci1saW5rcyBsaSAuYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5O1xufSJdfQ== */"

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
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/modules/dashboard/components/navbar/navbar.component.ts");






const routes = [
    {
        path: "dashboard",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
    {
        path: "createform",
        component: _components_createform_createform_component__WEBPACK_IMPORTED_MODULE_4__["CreateformComponent"],
    },
    {
        path: "navbar",
        component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        outlet: "main"
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

module.exports = "@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: \"SemiBold\";\n}\n#dashWrapper {\n  min-height: 100vh;\n  background-color: #fff;\n}\n#sideNav {\n  height: 100vh;\n  background-color: #1f1e48;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvRDpcXHByb2plY3RzXFx0cmF2ZWxsZXJcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUtVO0VBSlYsbURBQUE7RUFDQSx1QkFHOEQ7QUNIbEU7QURZQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QUNWSjtBRFlBO0VBQ0ksYUFBQTtFQUNBLHlCQVZNO0FDQ1YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZm9udCgkZm9udC1mYW1pbHksICRmb250LWZpbGUsICRmb250LXdlaWdodClcclxuICBAZm9udC1mYWNlXHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5XHJcbiAgICBzcmM6IHVybCgkZm9udC1maWxlKyctJyskZm9udC13ZWlnaHQrJy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJylcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHRcclxuXHJcblxyXG5AaW5jbHVkZSBmb250KCdQb3BwaW5zJywgJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMnLCAnU2VtaUJvbGQnKVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuJHByaW1hcnk6ICMxZjFlNDhcclxuJGxpZ2h0LWdyZXk6ICNmMmYyZjJcclxuJGRhcmstZ3JleTogIzgyODI4MlxyXG5cclxuI2Rhc2hXcmFwcGVyXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG5cclxuI3NpZGVOYXZcclxuICAgIGhlaWdodDogMTAwdmhcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IFwiU2VtaUJvbGRcIjtcbn1cbiNkYXNoV3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4jc2lkZU5hdiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFlNDg7XG59Il19 */"

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









let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _components_createform_createform_component__WEBPACK_IMPORTED_MODULE_7__["CreateformComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"]
        ],
        providers: []
    })
], DashboardModule);



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
        this.backendUrl = "/users";
    }
    signin(_data) {
        return this.http.post(this.backendUrl + "/authenticate", _data);
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

module.exports = __webpack_require__(/*! D:\projects\traveller\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map