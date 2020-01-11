(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rutina-desbloqueararea-desbloqueararea-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rutina/desbloqueararea/desbloqueararea.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rutina/desbloqueararea/desbloqueararea.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>desbloqueararea</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <span *ngFor=\"let oficina of this.oficinas\">\n      <ion-item-sliding>\n          <ion-item-options side=\"end\">\n              <ion-item-option (click)=\"bloquarArea(oficina)\" color=\"success\" > <ion-icon name=\"checkmark-circle\" size=\"large\"></ion-icon> </ion-item-option>\n           </ion-item-options>\n  \n            <ion-item-options side=\"start\">\n                <ion-item-option color=\"danger\" (click)=\"desbloquarArea(oficina)\" ><ion-icon name=\"remove-circle\" size=\"large\"></ion-icon></ion-item-option>\n              </ion-item-options>\n  \n            <ion-item>\n                <ion-label>\n                    <p><ion-icon  name=\"contacts\" slot=\"start\"></ion-icon> {{oficina.descripcion}}</p>\n        <br>\n                </ion-label>\n              </ion-item>\n      </ion-item-sliding>\n  </span>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/rutina/desbloqueararea/desbloqueararea-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/rutina/desbloqueararea/desbloqueararea-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DesbloquearareaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesbloquearareaPageRoutingModule", function() { return DesbloquearareaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _desbloqueararea_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desbloqueararea.page */ "./src/app/rutina/desbloqueararea/desbloqueararea.page.ts");




const routes = [
    {
        path: '',
        component: _desbloqueararea_page__WEBPACK_IMPORTED_MODULE_3__["DesbloquearareaPage"]
    }
];
let DesbloquearareaPageRoutingModule = class DesbloquearareaPageRoutingModule {
};
DesbloquearareaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DesbloquearareaPageRoutingModule);



/***/ }),

/***/ "./src/app/rutina/desbloqueararea/desbloqueararea.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/rutina/desbloqueararea/desbloqueararea.module.ts ***!
  \******************************************************************/
/*! exports provided: DesbloquearareaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesbloquearareaPageModule", function() { return DesbloquearareaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _desbloqueararea_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desbloqueararea-routing.module */ "./src/app/rutina/desbloqueararea/desbloqueararea-routing.module.ts");
/* harmony import */ var _desbloqueararea_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desbloqueararea.page */ "./src/app/rutina/desbloqueararea/desbloqueararea.page.ts");







let DesbloquearareaPageModule = class DesbloquearareaPageModule {
};
DesbloquearareaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _desbloqueararea_routing_module__WEBPACK_IMPORTED_MODULE_5__["DesbloquearareaPageRoutingModule"]
        ],
        declarations: [_desbloqueararea_page__WEBPACK_IMPORTED_MODULE_6__["DesbloquearareaPage"]]
    })
], DesbloquearareaPageModule);



/***/ }),

/***/ "./src/app/rutina/desbloqueararea/desbloqueararea.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/rutina/desbloqueararea/desbloqueararea.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1dGluYS9kZXNibG9xdWVhcmFyZWEvZGVzYmxvcXVlYXJhcmVhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/rutina/desbloqueararea/desbloqueararea.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/rutina/desbloqueararea/desbloqueararea.page.ts ***!
  \****************************************************************/
/*! exports provided: DesbloquearareaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesbloquearareaPage", function() { return DesbloquearareaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_consulta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/consulta.service */ "./src/app/services/consulta.service.ts");



let DesbloquearareaPage = class DesbloquearareaPage {
    constructor(consultaService) {
        this.consultaService = consultaService;
        this.oficinas = null;
        this.respuesta = null;
    }
    ngOnInit() {
        console.log('AQUI');
        this.consultaService.getOficinas().subscribe((res) => {
            console.log(res);
            this.oficinas = res;
        });
        console.log('oficinas: ', this.oficinas);
    }
    bloquarArea(oficina) {
        console.log(oficina);
        this.consultaService.desbloqueaArea(oficina.id).subscribe((res) => {
            console.log(res);
            this.respuesta = res;
        });
        console.log('respuesta: ', this.respuesta);
    }
    desbloquarArea(oficina) {
        console.log(oficina);
    }
};
DesbloquearareaPage.ctorParameters = () => [
    { type: src_app_services_consulta_service__WEBPACK_IMPORTED_MODULE_2__["ConsultaService"] }
];
DesbloquearareaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-desbloqueararea',
        template: __webpack_require__(/*! raw-loader!./desbloqueararea.page.html */ "./node_modules/raw-loader/index.js!./src/app/rutina/desbloqueararea/desbloqueararea.page.html"),
        styles: [__webpack_require__(/*! ./desbloqueararea.page.scss */ "./src/app/rutina/desbloqueararea/desbloqueararea.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_consulta_service__WEBPACK_IMPORTED_MODULE_2__["ConsultaService"]])
], DesbloquearareaPage);



/***/ }),

/***/ "./src/app/services/consulta.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/consulta.service.ts ***!
  \**********************************************/
/*! exports provided: ConsultaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaService", function() { return ConsultaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ConsultaService = class ConsultaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getOficinas() {
        return this.httpClient.get('http://10.8.6.28:8080/getOficinas');
    }
    desbloqueaArea(area) {
        console.log('http://10.8.6.28:8080/desbloqueoArea?area=' + area);
        return this.httpClient.get('http://10.8.6.28:8080/desbloqueoArea?area=' + area);
    }
};
ConsultaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConsultaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ConsultaService);



/***/ })

}]);
//# sourceMappingURL=rutina-desbloqueararea-desbloqueararea-module-es2015.js.map