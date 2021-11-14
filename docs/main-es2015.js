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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bar-chart/bar-chart.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bar-chart/bar-chart.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-bar-vertical\r\n  [scheme]=\"colorScheme\"\r\n  [results]=\"single\"\r\n  [gradient]=\"gradient\"\r\n  [xAxis]=\"showXAxis\"\r\n  [yAxis]=\"showYAxis\"\r\n  [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\"\r\n  [showYAxisLabel]=\"showYAxisLabel\"\r\n  [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\"\r\n  (select)=\"onSelect($event)\">\r\n</ngx-charts-bar-vertical>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top\">\r\n  <h3>dashbang</h3>\r\n  <div class=\"d-flex\" style=\"align-items: center;\">\r\n    <a href=\"https://github.com/xEyad/widgets-demo\" target=\"_blank\">\r\n      <img src=\"assets/github.png\" alt=\"\" class=\"rounded-circle mr-2 github\" >\r\n    </a>\r\n    <div class=\"user\">\r\n      <img src=\"assets/profile.webp\" alt=\"\" class=\"rounded-circle\">\r\n      <span>Dawny jhonson</span>\r\n      <i class=\"ml-2 fa fa-caret-down\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n<div class=\"secondary border-bottom\">\r\n  <h1>Dawny's Analytics Dashboard</h1>\r\n  <i class=\"fa fa-pencil fa-2x\"></i>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <app-header></app-header>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row slots-wrapper\">\r\n    <div class=\"col-2\">\r\n      <app-sidebar></app-sidebar>\r\n    </div>\r\n    <div class=\"col-10 py-0 pb-2 pr-5 d-flex flex-column\">\r\n      <!-- SLOTS -->\r\n      <ng-container *ngTemplateOutlet=\"slots\"></ng-container>\r\n\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-12 d-flex justify-content-end\">\r\n          <button class=\"btn btn-danger mr-4\" (click)=\"reset()\">Reset</button>\r\n          <button class=\"btn btn-primary\">Finish</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #slots>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <p>Drag a widget into an open dashboard slot</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row h-100 slots\">\r\n\r\n      <app-slot class=\"g-big\" #slot1></app-slot>\r\n      <app-slot class=\"g-big\"></app-slot>\r\n\r\n      <app-slot [slotDisabled]='true' class=\"g-small\"></app-slot>\r\n      <app-slot [slotDisabled]='true' class=\"g-small\"></app-slot>\r\n      <app-slot [slotDisabled]='true' class=\"g-small\"></app-slot>\r\n\r\n      <app-slot [slotDisabled]='true' class=\"g-medium\"></app-slot>\r\n      <app-slot [slotDisabled]='false' class=\"g-medium\"></app-slot>\r\n      <app-slot [slotDisabled]='true' class=\"g-medium\"></app-slot>\r\n\r\n      <app-slot [slotDisabled]='true' class=\"g-small\"></app-slot>\r\n      <app-slot [slotDisabled]='true' class=\"g-small\"></app-slot>\r\n      <app-slot [slotDisabled]='true' class=\"g-small\"></app-slot>\r\n\r\n    <!-- <div class=\"col-2 s-3\">\r\n      <app-slot [slotDisabled]='true'></app-slot>\r\n    </div>\r\n    <div class=\"col-2 s-3\">\r\n      <app-slot [slotDisabled]='true'></app-slot>\r\n    </div>\r\n    <div class=\"col-2 s-3\">\r\n      <app-slot [slotDisabled]='true'></app-slot>\r\n    </div>\r\n\r\n    <div class=\"col-3 s-6\">\r\n      <app-slot [slotDisabled]='true'></app-slot>\r\n    </div>\r\n    <div class=\"col-3 s-6\">\r\n      <app-slot [slotDisabled]='true'></app-slot>\r\n    </div>\r\n\r\n    <div class=\"col-2 s-3\">\r\n      <app-slot [slotDisabled]='true'></app-slot>\r\n    </div>\r\n    <div class=\"col-2 s-3\">\r\n      <app-slot [slotDisabled]='true'></app-slot>\r\n    </div>\r\n    <div class=\"col-2 s-3\">\r\n      <app-slot [slotDisabled]='true'></app-slot>\r\n    </div> -->\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-line-chart\r\n  [scheme]=\"colorScheme\"\r\n  [legend]=\"legend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\"\r\n  [showYAxisLabel]=\"showYAxisLabel\"\r\n  [xAxis]=\"xAxis\"\r\n  [yAxis]=\"yAxis\"\r\n  [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\"\r\n  [timeline]=\"timeline\"\r\n  [results]=\"multi\"\r\n  (select)=\"onSelect($event)\"\r\n  (activate)=\"onActivate($event)\"\r\n  (deactivate)=\"onDeactivate($event)\"\r\n  >\r\n</ngx-charts-line-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pie-chart/pie-chart.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pie-chart/pie-chart.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-pie-chart\r\n  [scheme]=\"colorScheme\"\r\n  [results]=\"single\"\r\n  [gradient]=\"gradient\"\r\n  [legend]=\"showLegend\"\r\n  [legendPosition]=\"legendPosition\"\r\n  [labels]=\"showLabels\"\r\n  [doughnut]=\"isDoughnut\"\r\n  (select)=\"onSelect($event)\"\r\n  (activate)=\"onActivate($event)\"\r\n  (deactivate)=\"onDeactivate($event)\"\r\n  >\r\n</ngx-charts-pie-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/polar-radar/polar-radar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/polar-radar/polar-radar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-polar-chart\r\n  [scheme]=\"colorScheme\"\r\n  [legend]=\"legend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\"\r\n  [showYAxisLabel]=\"showYAxisLabel\"\r\n  [xAxis]=\"xAxis\"\r\n  [yAxis]=\"yAxis\"\r\n  [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\"\r\n  [results]=\"multi\">\r\n</ngx-charts-polar-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper border-right\">\r\n  <div class=\"addBtn clickable border\">\r\n    <i class=\"fa fa-plus\"></i>\r\n    <span>New Widget</span>\r\n  </div>\r\n  <div\r\n    [dndDraggable]=\"widget\"\r\n    [dndEffectAllowed]=\"draggable.effectAllowed\"\r\n    [dndDisableIf]=\"draggable.disable\"\r\n    (dndStart)=\"onDragStart($event)\"\r\n    (dndCopied)=\"onDraggableCopied($event)\"\r\n    (dndLinked)=\"onDraggableLinked($event)\"\r\n    (dndMoved)=\"onDraggableMoved($event)\"\r\n    (dndCanceled)=\"onDragCanceled($event)\"\r\n    (dndEnd)=\"onDragEnd($event)\"\r\n    class=\"widget clickable\"\r\n    *ngFor=\"let widget of widgets\"\r\n  >\r\n    <img [src]=\"widget.img\" alt=\"\" />\r\n    <h4>{{ widget.name }}</h4>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slot/slot.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slot/slot.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  [ngClass]=\"{ 'filled-slot': haveChild, 'slot': !haveChild }\"\r\n  dndDropzone\r\n  [dndEffectAllowed]=\"'all'\"\r\n  [dndDragoverClass]=\"'dndDraggingZone'\"\r\n  [dndDropzoneDisabledClass]=\"'slot-disabled'\"\r\n  [dndDisableIf]=\"slotDisabled\"\r\n  (dndDragover)=\"onDragover($event)\"\r\n  (dndDrop)=\"onDrop($event)\"\r\n>\r\n  <ng-container *ngIf=\"!haveChild\">\r\n    <i class=\"fa fa-plus-circle fa-3x\" *ngIf=\"!slotDisabled\"></i>\r\n    <i class=\"fa fa-times-circle fa-3x\" *ngIf=\"slotDisabled\"></i>\r\n  </ng-container>\r\n\r\n  <ng-container widget-slot></ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tree-map/tree-map.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tree-map/tree-map.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-tree-map\r\n  [scheme]=\"colorScheme\"\r\n  [results]=\"single\"\r\n  [gradient]=\"gradient\"\r\n  [animations]=\"animations\"\r\n  [labelFormatting]=\"labelFormatting\"\r\n  (select)=\"onSelect($event)\">\r\n</ngx-charts-tree-map>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.title = 'dubai';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _slot_slot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slot/slot.component */ "./src/app/slot/slot.component.ts");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/fesm2015/ngx-drag-drop.js");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./src/app/pie-chart/pie-chart.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _widgetSlot_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgetSlot.directive */ "./src/app/widgetSlot.directive.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/line-chart/line-chart.component.ts");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var _polar_radar_polar_radar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./polar-radar/polar-radar.component */ "./src/app/polar-radar/polar-radar.component.ts");
/* harmony import */ var _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tree-map/tree-map.component */ "./src/app/tree-map/tree-map.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
            _slot_slot_component__WEBPACK_IMPORTED_MODULE_8__["SlotComponent"],
            _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__["PieChartComponent"],
            _widgetSlot_directive__WEBPACK_IMPORTED_MODULE_13__["WidgetSlotDirective"],
            _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_14__["LineChartComponent"],
            _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_15__["BarChartComponent"],
            _polar_radar_polar_radar_component__WEBPACK_IMPORTED_MODULE_16__["PolarRadarComponent"],
            _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_17__["TreeMapComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DndModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ],
        providers: [],
        entryComponents: [_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__["PieChartComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_14__["LineChartComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_15__["BarChartComponent"], _polar_radar_polar_radar_component__WEBPACK_IMPORTED_MODULE_16__["PolarRadarComponent"], _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_17__["TreeMapComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.scss":
/*!****************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.ts ***!
  \**************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BarChartComponent = class BarChartComponent {
    constructor() {
        this.single = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            }
        ];
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "2010",
                        "value": 7300000
                    },
                    {
                        "name": "2011",
                        "value": 8940000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "2010",
                        "value": 7870000
                    },
                    {
                        "name": "2011",
                        "value": 8270000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "2010",
                        "value": 5000002
                    },
                    {
                        "name": "2011",
                        "value": 5800000
                    }
                ]
            }
        ];
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
    }
    ;
    onSelect(event) {
        console.log(event);
    }
    ngOnInit() {
    }
};
BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bar-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bar-chart/bar-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bar-chart.component.scss */ "./src/app/bar-chart/bar-chart.component.scss")).default]
    })
], BarChartComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top {\n  height: 80px;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  align-items: center;\n  color: white;\n}\n.top .user {\n  cursor: pointer;\n}\n.top .user i {\n  color: white;\n}\nimg {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.github {\n  width: 60px;\n  height: 60px;\n}\n.secondary {\n  height: 80px;\n  display: flex;\n  padding: 20px;\n  align-items: center;\n  background-color: white;\n}\n.secondary h1 {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0s6XFx3b3Jrc2hvcFxcd2Vic2l0ZXNcXHdpZGdldHMtZGVtby9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNBRjtBREdBO0VBRUUsV0FBQTtFQUNBLFlBQUE7QUNERjtBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3B7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIC51c2Vye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGl7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmdpdGh1YlxyXG57XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5zZWNvbmRhcnl7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGgxe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIudG9wIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4udG9wIC51c2VyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvcCAudXNlciBpIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmdpdGh1YiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5zZWNvbmRhcnkge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNlY29uZGFyeSBoMSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  max-height: 100vh;\n  max-width: 100vw;\n  overflow: hidden;\n  display: block;\n  background-color: #edf1f7;\n}\n:host .slots-wrapper {\n  height: calc(100% - 160px);\n}\n:host .container-fluid {\n  height: 100vh;\n}\n.slots {\n  height: calc(100% - 160px);\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  gap: 15px;\n  grid-gap: 15px;\n  flex-grow: 1;\n}\n.slots app-slot {\n  display: block;\n  height: 100%;\n  margin-bottom: 15px;\n}\n.slots .g-big {\n  grid-column-end: span 3;\n  grid-row-end: span 2;\n}\n.slots .g-medium {\n  grid-column-end: span 1;\n  grid-row-end: span 2;\n}\n.slots .g-small {\n  grid-column-end: span 1;\n  grid-row-end: span 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9LOlxcd29ya3Nob3BcXHdlYnNpdGVzXFx3aWRnZXRzLWRlbW8vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NGO0FEQUU7RUFDRSwwQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURDQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEREU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDR0o7QURERTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7QUNHSjtBRERFO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtBQ0dKO0FEREU7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmNztcclxuICAuc2xvdHMtd3JhcHBlcntcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTYwcHgpO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbn1cclxuLnNsb3Rze1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTYwcHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcclxuICBnYXA6IDE1cHg7XHJcbiAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGFwcC1zbG90e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAuZy1iaWd7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMztcclxuICAgIGdyaWQtcm93LWVuZDogc3BhbiAyO1xyXG4gIH1cclxuICAuZy1tZWRpdW17XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMTtcclxuICAgIGdyaWQtcm93LWVuZDogc3BhbiAyO1xyXG4gIH1cclxuICAuZy1zbWFsbHtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiBzcGFuIDE7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY3O1xufVxuOmhvc3QgLnNsb3RzLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE2MHB4KTtcbn1cbjpob3N0IC5jb250YWluZXItZmx1aWQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2xvdHMge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE2MHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdhcDogMTVweDtcbiAgZ3JpZC1nYXA6IDE1cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5zbG90cyBhcHAtc2xvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc2xvdHMgLmctYmlnIHtcbiAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDM7XG4gIGdyaWQtcm93LWVuZDogc3BhbiAyO1xufVxuLnNsb3RzIC5nLW1lZGl1bSB7XG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxO1xuICBncmlkLXJvdy1lbmQ6IHNwYW4gMjtcbn1cbi5zbG90cyAuZy1zbWFsbCB7XG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxO1xuICBncmlkLXJvdy1lbmQ6IHNwYW4gMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _slot_slot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slot/slot.component */ "./src/app/slot/slot.component.ts");



let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    reset() {
        this.slots.forEach(element => {
            element.clear();
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_slot_slot_component__WEBPACK_IMPORTED_MODULE_2__["SlotComponent"])
], HomeComponent.prototype, "slots", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/line-chart/line-chart.component.scss":
/*!******************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/line-chart/line-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.ts ***!
  \****************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LineChartComponent = class LineChartComponent {
    constructor() {
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "1990",
                        "value": 62000000
                    },
                    {
                        "name": "2010",
                        "value": 73000000
                    },
                    {
                        "name": "2011",
                        "value": 89400000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "1990",
                        "value": 250000000
                    },
                    {
                        "name": "2010",
                        "value": 309000000
                    },
                    {
                        "name": "2011",
                        "value": 311000000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "1990",
                        "value": 58000000
                    },
                    {
                        "name": "2010",
                        "value": 50000020
                    },
                    {
                        "name": "2011",
                        "value": 58000000
                    }
                ]
            },
            {
                "name": "UK",
                "series": [
                    {
                        "name": "1990",
                        "value": 57000000
                    },
                    {
                        "name": "2010",
                        "value": 62000000
                    }
                ]
            }
        ];
        this.view = [700, 300];
        // options
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.yAxisLabel = 'Population';
        this.timeline = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
    }
    ngOnInit() {
    }
    onSelect(data) {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
    onActivate(data) {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
    onDeactivate(data) {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
};
LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-line-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/line-chart/line-chart.component.scss")).default]
    })
], LineChartComponent);



/***/ }),

/***/ "./src/app/pie-chart/pie-chart.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pie-chart/pie-chart.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pie-chart/pie-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pie-chart/pie-chart.component.ts ***!
  \**************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PieChartComponent = class PieChartComponent {
    constructor() {
        this.single = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            },
            {
                "name": "UK",
                "value": 6200000
            }
        ];
        // options
        this.gradient = true;
        this.showLegend = true;
        this.showLabels = true;
        this.isDoughnut = false;
        this.legendPosition = 'below';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        ;
    }
    ngOnInit() {
    }
    onSelect(data) {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
    onActivate(data) {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
    onDeactivate(data) {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
};
PieChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pie-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pie-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pie-chart/pie-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pie-chart.component.scss */ "./src/app/pie-chart/pie-chart.component.scss")).default]
    })
], PieChartComponent);



/***/ }),

/***/ "./src/app/polar-radar/polar-radar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/polar-radar/polar-radar.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGFyLXJhZGFyL3BvbGFyLXJhZGFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/polar-radar/polar-radar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/polar-radar/polar-radar.component.ts ***!
  \******************************************************/
/*! exports provided: PolarRadarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarRadarComponent", function() { return PolarRadarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PolarRadarComponent = class PolarRadarComponent {
    constructor() {
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "1990",
                        "value": 62000000
                    },
                    {
                        "name": "2010",
                        "value": 73000000
                    },
                    {
                        "name": "2011",
                        "value": 89400000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "1990",
                        "value": 250000000
                    },
                    {
                        "name": "2010",
                        "value": 309000000
                    },
                    {
                        "name": "2011",
                        "value": 311000000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "1990",
                        "value": 58000000
                    },
                    {
                        "name": "2010",
                        "value": 50000020
                    },
                    {
                        "name": "2011",
                        "value": 58000000
                    }
                ]
            },
            {
                "name": "UK",
                "series": [
                    {
                        "name": "1990",
                        "value": 57000000
                    },
                    {
                        "name": "2010",
                        "value": 62000000
                    },
                    {
                        "name": "2011",
                        "value": 72000000
                    }
                ]
            }
        ];
        this.view = [700, 300];
        // options
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
    }
    ngOnInit() {
    }
};
PolarRadarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-polar-radar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./polar-radar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/polar-radar/polar-radar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./polar-radar.component.scss */ "./src/app/polar-radar/polar-radar.component.scss")).default]
    })
], PolarRadarComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 160px);\n  overflow-y: scroll;\n  background-color: white;\n}\n.wrapper .addBtn {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  margin-bottom: 10px;\n}\n.wrapper .addBtn i {\n  margin-right: 10px;\n}\n.wrapper .widget {\n  text-align: center;\n  color: cornflowerblue;\n  margin-bottom: 20px;\n}\n.wrapper .widget img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9LOlxcd29ya3Nob3BcXHdlYnNpdGVzXFx3aWRnZXRzLWRlbW8vc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0FDR047QURBRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxXQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC5hZGRCdG57XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBpe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53aWRnZXR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ud3JhcHBlciAuYWRkQnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi53cmFwcGVyIC5hZGRCdG4gaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi53cmFwcGVyIC53aWRnZXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi53cmFwcGVyIC53aWRnZXQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _widget_mapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../widget-mapper.service */ "./src/app/widget-mapper.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SidebarComponent = class SidebarComponent {
    constructor() {
        this.widgets = [
            {
                name: "Pie",
                img: "assets/pie.png",
                type: _widget_mapper_service__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].pie,
            },
            {
                name: "Line",
                img: "assets/line.png",
                type: _widget_mapper_service__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].line,
            },
            {
                name: "Bar",
                img: "assets/bar.png",
                type: _widget_mapper_service__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].bar,
            },
            {
                name: "Polar",
                img: "assets/polar.png",
                type: _widget_mapper_service__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].polar,
            },
            {
                name: "Tree",
                img: "assets/tree.png",
                type: _widget_mapper_service__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].tree,
            }
        ];
        this.draggable = {
            effectAllowed: "all",
            disable: false,
            handle: false
        };
    }
    ngOnInit() {
    }
    onDragStart(event) {
        // this.draggable.data = <any>widget;
        console.log("drag started", JSON.stringify(event, null, 2));
    }
    onDragEnd(event) {
        console.log("drag ended", JSON.stringify(event, null, 2));
    }
    onDraggableCopied(event) {
        console.log("draggable copied", JSON.stringify(event, null, 2));
    }
    onDraggableLinked(event) {
        console.log("draggable linked", JSON.stringify(event, null, 2));
    }
    onDraggableMoved(event) {
        console.log("draggable moved", JSON.stringify(event, null, 2));
    }
    onDragCanceled(event) {
        console.log("drag cancelled", JSON.stringify(event, null, 2));
    }
    onDragover(event) {
        console.log("dragover", JSON.stringify(event, null, 2));
    }
    onDrop(event) {
        console.log("dropped from sidebar", JSON.stringify(event, null, 2));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SidebarComponent.prototype, "widgets", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/slot/slot.component.scss":
/*!******************************************!*\
  !*** ./src/app/slot/slot.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slot {\n  border: 2px dashed #edf1f7;\n  background-color: white;\n  counter-reset: #edf1f7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.slot-disabled {\n  background-color: #dfdfdf;\n}\n\n.filled-slot {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n}\n\n.dndDraggingZone {\n  border: 2px solid #1c64d0;\n  background-color: cadetblue;\n}\n\n.dndDragOverBlocked {\n  border: 2px solid red;\n  background-color: #736e6e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xvdC9LOlxcd29ya3Nob3BcXHdlYnNpdGVzXFx3aWRnZXRzLWRlbW8vc3JjXFxhcHBcXHNsb3RcXHNsb3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nsb3Qvc2xvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQ0lGOztBRERBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvc2xvdC9zbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsb3R7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNlZGYxZjc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY291bnRlci1yZXNldDogI2VkZjFmNztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2xvdC1kaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG59XHJcbi5maWxsZWQtc2xvdHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRuZERyYWdnaW5nWm9uZXtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMWM2NGQwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxufVxyXG5cclxuLmRuZERyYWdPdmVyQmxvY2tlZHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNmU2ZTtcclxufVxyXG4iLCIuc2xvdCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZWRmMWY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY291bnRlci1yZXNldDogI2VkZjFmNztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNsb3QtZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xufVxuXG4uZmlsbGVkLXNsb3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRuZERyYWdnaW5nWm9uZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxYzY0ZDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbn1cblxuLmRuZERyYWdPdmVyQmxvY2tlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNmU2ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/slot/slot.component.ts":
/*!****************************************!*\
  !*** ./src/app/slot/slot.component.ts ***!
  \****************************************/
/*! exports provided: SlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotComponent", function() { return SlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _widget_mapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../widget-mapper.service */ "./src/app/widget-mapper.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _widgetSlot_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgetSlot.directive */ "./src/app/widgetSlot.directive.ts");




let SlotComponent = class SlotComponent {
    constructor(componentFactoryResolver, widgetMapper) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.widgetMapper = widgetMapper;
        this.slotDisabled = false;
        this.haveChild = false;
    }
    ngOnInit() {
    }
    onDragover(event) {
        console.log("dragover", JSON.stringify(event, null, 2));
    }
    onDrop(event) {
        console.log("dropped", JSON.stringify(event, null, 2));
        this.widgetType = event.data.type;
        this.loadComponent();
    }
    loadComponent() {
        const component = this.widgetMapper.getComponent(this.widgetType);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const viewContainerRef = this.slot.viewContainerRef;
        this.clear();
        this.haveChild = true;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance; //manipulate it through interface
    }
    clear() {
        const viewContainerRef = this.slot.viewContainerRef;
        viewContainerRef.clear();
        this.haveChild = false;
    }
};
SlotComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
    { type: _widget_mapper_service__WEBPACK_IMPORTED_MODULE_1__["WidgetMapperService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SlotComponent.prototype, "widgetType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SlotComponent.prototype, "slotDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_widgetSlot_directive__WEBPACK_IMPORTED_MODULE_3__["WidgetSlotDirective"], { static: true, })
], SlotComponent.prototype, "slot", void 0);
SlotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-slot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slot/slot.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slot.component.scss */ "./src/app/slot/slot.component.scss")).default]
    })
], SlotComponent);



/***/ }),

/***/ "./src/app/tree-map/tree-map.component.scss":
/*!**************************************************!*\
  !*** ./src/app/tree-map/tree-map.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWUtbWFwL3RyZWUtbWFwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tree-map/tree-map.component.ts":
/*!************************************************!*\
  !*** ./src/app/tree-map/tree-map.component.ts ***!
  \************************************************/
/*! exports provided: TreeMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMapComponent", function() { return TreeMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TreeMapComponent = class TreeMapComponent {
    constructor() {
        this.single = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            },
            {
                "name": "Italy",
                "value": 4500000
            },
            {
                "name": "Spain",
                "value": 5730000
            }, {
                "name": "UK",
                "value": 8200000
            }
        ];
        this.view = [700, 400];
        // options
        this.gradient = false;
        this.animations = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
    }
    onSelect(event) {
        console.log(event);
    }
    labelFormatting(c) {
        return `${(c.label)} Population`;
    }
    ngOnInit() {
    }
};
TreeMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tree-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tree-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tree-map/tree-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tree-map.component.scss */ "./src/app/tree-map/tree-map.component.scss")).default]
    })
], TreeMapComponent);



/***/ }),

/***/ "./src/app/widget-mapper.service.ts":
/*!******************************************!*\
  !*** ./src/app/widget-mapper.service.ts ***!
  \******************************************/
/*! exports provided: WidgetMapperService, WidgetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetMapperService", function() { return WidgetMapperService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return WidgetType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/line-chart/line-chart.component.ts");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./src/app/pie-chart/pie-chart.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _polar_radar_polar_radar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polar-radar/polar-radar.component */ "./src/app/polar-radar/polar-radar.component.ts");
/* harmony import */ var _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-map/tree-map.component */ "./src/app/tree-map/tree-map.component.ts");







let WidgetMapperService = class WidgetMapperService {
    constructor() { }
    getComponent(type) {
        switch (type) {
            case WidgetType.pie:
                return _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"];
            case WidgetType.line:
                return _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"];
            case WidgetType.bar:
                return _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"];
            case WidgetType.polar:
                return _polar_radar_polar_radar_component__WEBPACK_IMPORTED_MODULE_5__["PolarRadarComponent"];
            case WidgetType.tree:
                return _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_6__["TreeMapComponent"];
        }
    }
};
WidgetMapperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
], WidgetMapperService);

var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["pie"] = 0] = "pie";
    WidgetType[WidgetType["line"] = 1] = "line";
    WidgetType[WidgetType["bar"] = 2] = "bar";
    WidgetType[WidgetType["polar"] = 3] = "polar";
    WidgetType[WidgetType["tree"] = 4] = "tree";
})(WidgetType || (WidgetType = {}));


/***/ }),

/***/ "./src/app/widgetSlot.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/widgetSlot.directive.ts ***!
  \*****************************************/
/*! exports provided: WidgetSlotDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSlotDirective", function() { return WidgetSlotDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetSlotDirective = class WidgetSlotDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
WidgetSlotDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
WidgetSlotDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[widget-slot]',
    })
], WidgetSlotDirective);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

module.exports = __webpack_require__(/*! K:\workshop\websites\widgets-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map