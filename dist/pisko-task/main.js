(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <div class=\"nav-left\">\n    <img [src]=\"'assets/Logo.svg'\"  class=\"logo\" />\n  </div>\n  <div class=\"nav-right\">\n    <a href=\"/help\"><img [src]=\"'assets/Help Portal.svg'\"  /></a>\n    <a href=\"/help\"><img [src]=\"'assets/Settings.svg'\"  /></a>\n    <a href=\"/profile\"><img [src]=\"'assets/profile.svg'\"  /></a>\n  </div>\n</div>\n<div class=\"container\">\n\n  <!-- {{time}} -->\n\n  <div *ngIf=\"showLoading\" class=\"loading-holder\">\n    <img [src]=\"'assets/gear solid.svg'\" class=\"loading\" />\n  </div>\n  <div *ngIf=\"showSelector\" class=\"select-company\">\n    <app-select\n      (selectedCompany)=\"onSelectCompany($event)\"\n      [options]=\"companies\">\n    </app-select>\n  </div>\n\n  <div *ngIf=\"showMondrian\">\n    <app-mondrian [list]=\"data\">\n      <app-block\n      [title]=\"'New to System Configuration?'\"\n      [size]=\"2\"\n      [delay]=\"data.length + 1\">\n      Learn how you can become an expert.<br>Visit Kern Ferry's <a class=\"underline\">Service Portal.</a>\n      </app-block>\n    </app-mondrian>\n\n  </div>\n</div>\n<div class=\"footer\">\n  <div class=\"footer-left\">\n    Kern Ferry 2018 All Rights Reserved\n  </div>\n  <div class=\"footer-right\">\n    <a href=\"/terms\">Terms</a>\n    <a href=\"/privacy\">Privacy</a>\n    <a href=\"/contact\">Contact Us</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  background-color: #fff;\n  box-shadow: 0px 4px 12px #999;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .nav .nav-left .logo {\n    padding: 9px; }\n  .nav .nav-right {\n    display: flex; }\n  .nav .nav-right a {\n      border-right: 1px solid #666;\n      padding: 10px 20px; }\n  .nav .nav-right a:nth-child(3) {\n        border: none; }\n  .container {\n  -webkit-perspective: 1300px;\n          perspective: 1300px; }\n  .container .select-company {\n    margin: 2rem auto; }\n  .container .loading-holder {\n    margin: 0 auto;\n    padding-top: 6rem;\n    text-align: center; }\n  .container .loading-holder .loading {\n      width: 70px;\n      -webkit-transform: rotateZ(0deg);\n              transform: rotateZ(0deg);\n      -webkit-animation: rolly .8s ease-out forwards;\n              animation: rolly .8s ease-out forwards;\n      -webkit-animation-direction: alternate;\n              animation-direction: alternate;\n      -webkit-animation-iteration-count: infinite;\n              animation-iteration-count: infinite; }\n  @-webkit-keyframes rolly {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateZ(90deg);\n            transform: rotateZ(90deg); } }\n  @keyframes rolly {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateZ(90deg);\n            transform: rotateZ(90deg); } }\n  .footer {\n  height: auto;\n  background-color: black;\n  color: #fff;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  font-size: 9px; }\n  .footer .footer-left {\n    display: inline-block;\n    width: 50%; }\n  .footer .footer-right {\n    display: inline-block;\n    width: 50%;\n    text-align: right; }\n  .footer .footer-right a:link {\n      color: #fff;\n      text-decoration: none;\n      margin: 0 20px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.time = 0;
        this.showMondrian = false;
        this.showSelector = false;
        this.showLoading = false;
        this.companies = [
            { name: 'Novartis' },
            { name: 'Walmart' },
            { name: 'Wegmans' }
        ];
        this.data = [
            {
                title: 'Manage Users',
                path: '/manage/users',
                icon: 'assets/manage users.svg',
            },
            {
                title: 'Orders & Subscriptions',
                path: '/manage/orders',
                icon: 'assets/orders and subscriptions.svg',
            },
            {
                title: 'Data Upload',
                path: '/manage/data',
                icon: 'assets/data upload.svg',
            },
            {
                title: 'Module Settings',
                path: '/manage/orders',
                icon: 'assets/module settings.svg',
            },
            {
                title: 'Organization Content',
                path: '/manage/content',
                icon: 'assets/organization content.svg',
            },
            {
                title: 'Content Library Manager',
                path: '/manage/library',
                icon: 'assets/content library.svg',
            },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*
        THIS TIMEOUT CONTROLS THE ORER OF THINGS APPEARING ON THE PAGE
         */
        var timeoutId = setInterval(function () {
            console.log(_this.time);
            switch (_this.time) {
                case 0:
                    _this.showLoading = true;
                    break;
                case 2:
                    _this.showLoading = false;
                    _this.showSelector = true;
                    break;
                case 3:
                    _this.showMondrian = true;
                    break;
            }
            _this.time++;
        }, 1000);
    };
    /*
    THIS IS USED TO HANDLE SELECTION FROM THE DROP DOWN
     */
    AppComponent.prototype.onSelectCompany = function (event) {
        console.log('from parent', event);
        this.showMondrian = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/block.component */ "./src/app/block/block.component.ts");
/* harmony import */ var _mondrian_mondrian_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mondrian/mondrian.component */ "./src/app/mondrian/mondrian.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _block_block_component__WEBPACK_IMPORTED_MODULE_4__["BlockComponent"],
                _mondrian_mondrian_component__WEBPACK_IMPORTED_MODULE_5__["MondrianComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/block/block.component.html":
/*!********************************************!*\
  !*** ./src/app/block/block.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\" [style.animation-delay]=\"getDelay()\" [ngClass]=\"{'single': !size, 'double': size == 2}\">\n  <div class=\"inner\">\n    <img *ngIf=\"icon\" [src]=\"icon\" class=\"icon\"  />\n    <div class=\"title\">\n      {{title}}\n    </div>\n    <div class=\"content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/block/block.component.scss":
/*!********************************************!*\
  !*** ./src/app/block/block.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .outer {\n  display: inline-block;\n  float: left;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: -1px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform: translateZ(1000px) translateY(-600px);\n          transform: translateZ(1000px) translateY(-600px);\n  opacity: 0;\n  -webkit-animation: fallPerspective .8s ease-out forwards;\n          animation: fallPerspective .8s ease-out forwards;\n  cursor: pointer; }\n  :host .outer.single:hover .inner {\n    background-color: #006381;\n    color: #fff; }\n  :host .outer.single:hover .inner .icon {\n      -webkit-filter: invert(1);\n              filter: invert(1); }\n  :host .outer .inner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #fff;\n    border: 1px solid #ececec;\n    text-align: center;\n    transition: background .4s ease-in-out; }\n  :host .outer.single .inner {\n    height: 200px;\n    width: 200px; }\n  :host .outer.single .inner .title {\n      width: 60%;\n      margin-top: 16px;\n      font-weight: 500;\n      font-size: 14px;\n      text-transform: uppercase; }\n  :host .outer.double .inner {\n    height: 200px;\n    width: 400px; }\n  :host .outer.double .inner .title {\n      width: 100%;\n      margin-top: 16px;\n      font-weight: 500;\n      font-size: 16px; }\n  :host .outer.double .inner .content {\n      font-size: 12px; }\n  @-webkit-keyframes fallPerspective {\n  100% {\n    -webkit-transform: translateZ(0px) translateY(0px);\n            transform: translateZ(0px) translateY(0px);\n    opacity: 1; } }\n  @keyframes fallPerspective {\n  100% {\n    -webkit-transform: translateZ(0px) translateY(0px);\n            transform: translateZ(0px) translateY(0px);\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/block/block.component.ts":
/*!******************************************!*\
  !*** ./src/app/block/block.component.ts ***!
  \******************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockComponent = /** @class */ (function () {
    function BlockComponent() {
    }
    BlockComponent.prototype.ngOnInit = function () {
        console.log(this.title);
        console.log(this.delay);
    };
    /*
    GET DELAY TAKES THE INDEX PASSED IN BY THE MONDRIAN COMPONENT
    WHICH OUT PUTS THE BLOCKS IN A FOR LOOP
    IT USES THE DELAY TO SET THE ANIMATION-DELAY STYLE TO OFFSET EAHC BLOCK
     */
    BlockComponent.prototype.getDelay = function () {
        return this.delay * 50 + 'ms';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlockComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BlockComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlockComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlockComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlockComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BlockComponent.prototype, "size", void 0);
    BlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block',
            template: __webpack_require__(/*! ./block.component.html */ "./src/app/block/block.component.html"),
            styles: [__webpack_require__(/*! ./block.component.scss */ "./src/app/block/block.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/mondrian/mondrian.component.html":
/*!**************************************************!*\
  !*** ./src/app/mondrian/mondrian.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-block *ngFor=\"let block of list; let i = index\"\n  [title]=\"block.title\"\n  [path]=\"block.path\"\n  [icon]=\"block.icon\"\n  [content]=\"block.content\"\n  [delay]=\"i\">\n</app-block>\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/mondrian/mondrian.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mondrian/mondrian.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 800px;\n  margin: 0 auto;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/mondrian/mondrian.component.ts":
/*!************************************************!*\
  !*** ./src/app/mondrian/mondrian.component.ts ***!
  \************************************************/
/*! exports provided: MondrianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MondrianComponent", function() { return MondrianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MondrianComponent = /** @class */ (function () {
    function MondrianComponent() {
    }
    MondrianComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MondrianComponent.prototype, "list", void 0);
    MondrianComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mondrian',
            template: __webpack_require__(/*! ./mondrian.component.html */ "./src/app/mondrian/mondrian.component.html"),
            styles: [__webpack_require__(/*! ./mondrian.component.scss */ "./src/app/mondrian/mondrian.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MondrianComponent);
    return MondrianComponent;
}());



/***/ }),

/***/ "./src/app/select/select.component.html":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select\" (click)=\"toggleChoices()\">\n  <div class=\"choice\">\n    {{selection.name}}\n  </div>\n  <img [src]=\"'assets/Indicator.svg'\" class=\"indicator\"  />\n</div>\n<div [@expandCollapse]=\"{value: dropdownState, params:{min_height: minHeight}}\" class=\"options\">\n  <div *ngFor=\"let option of options\" (click)=\"setSelected(option)\"\n    [ngClass]=\"['option']\"\n    [class.selected]=\"option.selected\"\n    >\n    {{option.name}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/select/select.component.scss":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 40%;\n  margin: 0 auto;\n  display: block;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform: translateZ(1000px) translateY(-600px);\n          transform: translateZ(1000px) translateY(-600px);\n  opacity: 0;\n  -webkit-animation: fallPerspective .8s ease-out forwards;\n          animation: fallPerspective .8s ease-out forwards;\n  position: relative;\n  z-index: 100; }\n  :host select {\n    display: none; }\n  :host .select {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fff;\n    border: 1px solid #eeeccc;\n    border-radius: 6px;\n    padding: 20px;\n    cursor: pointer; }\n  :host .select .choice {\n      width: 80%; }\n  :host .select .indicator {\n      width: 20px;\n      height: auto; }\n  :host .options {\n    position: absolute;\n    width: 100%;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);\n    overflow: hidden; }\n  :host .options .option {\n      cursor: pointer;\n      background-color: #fff;\n      border-bottom: 1px solid #eeecff;\n      padding: 20px;\n      transition: all .4s ease-out; }\n  :host .options .option.selected {\n        background-color: #006381;\n        color: #fff; }\n  @-webkit-keyframes fallPerspective {\n  100% {\n    -webkit-transform: translateZ(0px) translateY(0px);\n            transform: translateZ(0px) translateY(0px);\n    opacity: 1; } }\n  @keyframes fallPerspective {\n  100% {\n    -webkit-transform: translateZ(0px) translateY(0px);\n            transform: translateZ(0px) translateY(0px);\n    opacity: 1; } }\n  @-webkit-keyframes dropit {\n  100% {\n    height: 100%;\n    opacity: 1; } }\n  @keyframes dropit {\n  100% {\n    height: 100%;\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/select/select.component.ts":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectComponent = /** @class */ (function () {
    function SelectComponent(element) {
        this.element = element;
        this.selectedCompany = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selection = { name: '- select -' };
        this.collapsed = true;
        this.minHeight = '0px';
        this.dropdownState = 'collapsed';
    }
    SelectComponent.prototype.setStartHeight = function () {
        this.minHeight = '0px';
    };
    SelectComponent.prototype.ngOnInit = function () {
        console.log(this.options);
    };
    SelectComponent.prototype.toggleChoices = function () {
        this.collapsed = !this.collapsed;
        // WHEN THE SELECTOR IS CLICKED WE USE THE EXPAND TEXT METHOD TO SET THE OPEN HEIGHT TO AUTO
        this.expandText();
    };
    SelectComponent.prototype.setSelected = function (choice) {
        this.options.forEach(function (item, index) {
            item['selected'] = false;
        });
        choice['selected'] = true;
        this.selectedCompany.emit(choice);
        console.log(choice);
    };
    SelectComponent.prototype.expandText = function () {
        this.setStartHeight();
        // DEPENDING ON WHAT THE STATE IS WE SHOULD EITHER EXPAND OR COLLAPSE THE DROPDOWN FOR THE OPTIONS
        this.dropdownState = this.dropdownState === 'expanded' ? 'collapsed' : 'expanded';
        console.log(this.dropdownState);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "selectedCompany", void 0);
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/select/select.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expandCollapse', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '{{min_height}}',
                    }), { params: { min_height: '0px' } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"]
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SelectComponent);
    return SelectComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shanepisko/Downloads/Task/pisko-task/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map