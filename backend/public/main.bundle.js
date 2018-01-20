webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_menu__ = __webpack_require__("../../../../primeng/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_menubar__ = __webpack_require__("../../../../primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_dropdown__ = __webpack_require__("../../../../primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_button__ = __webpack_require__("../../../../primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_chart__ = __webpack_require__("../../../../primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_spinner__ = __webpack_require__("../../../../primeng/spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_inputtextarea__ = __webpack_require__("../../../../primeng/inputtextarea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_inputtextarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_inputtextarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_calendar__ = __webpack_require__("../../../../primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__ = __webpack_require__("../../../../primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_dialog__ = __webpack_require__("../../../../primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_picklist__ = __webpack_require__("../../../../primeng/picklist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_picklist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_picklist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_table__ = __webpack_require__("../../../../primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_forms_forms_component__ = __webpack_require__("../../../../../src/app/components/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_display_display_component__ = __webpack_require__("../../../../../src/app/components/display/display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_primeng_primeng_component__ = __webpack_require__("../../../../../src/app/components/primeng/primeng.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_initial_path_initial_path_component__ = __webpack_require__("../../../../../src/app/components/initial-path/initial-path.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_primeng_menubar_menubar_component__ = __webpack_require__("../../../../../src/app/components/primeng/menubar/menubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_primeng_chart_chart_component__ = __webpack_require__("../../../../../src/app/components/primeng/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_primeng_form_form_component__ = __webpack_require__("../../../../../src/app/components/primeng/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_primeng_info_info_component__ = __webpack_require__("../../../../../src/app/components/primeng/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_primeng_picklist_picklist_component__ = __webpack_require__("../../../../../src/app/components/primeng/picklist/picklist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_primeng_table_table_component__ = __webpack_require__("../../../../../src/app/components/primeng/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { UIRouterModule } from '@uirouter/angular';
// Material

// PrimeNG












// Custom















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_28__components_initial_path_initial_path_component__["a" /* InitialPathComponent */] },
    { path: 'material', component: __WEBPACK_IMPORTED_MODULE_23__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'primeng', component: __WEBPACK_IMPORTED_MODULE_27__components_primeng_primeng_component__["a" /* PrimengComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_32__components_primeng_info_info_component__["a" /* InfoComponent */] },
            { path: 'info', component: __WEBPACK_IMPORTED_MODULE_32__components_primeng_info_info_component__["a" /* InfoComponent */] },
            { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_30__components_primeng_chart_chart_component__["a" /* ChartComponent */] },
            { path: 'form', component: __WEBPACK_IMPORTED_MODULE_31__components_primeng_form_form_component__["a" /* FormComponent */] },
            { path: 'picklist', component: __WEBPACK_IMPORTED_MODULE_33__components_primeng_picklist_picklist_component__["a" /* PicklistComponent */] },
            { path: 'table', component: __WEBPACK_IMPORTED_MODULE_34__components_primeng_table_table_component__["a" /* TableComponent */] }
        ] }
];
// UI Router states
var formState = { name: 'form', url: '/form', component: __WEBPACK_IMPORTED_MODULE_31__components_primeng_form_form_component__["a" /* FormComponent */] };
var chartState = { name: 'chart', url: '/chart', component: __WEBPACK_IMPORTED_MODULE_30__components_primeng_chart_chart_component__["a" /* ChartComponent */] };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_forms_forms_component__["a" /* FormsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_display_display_component__["b" /* DisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_display_display_component__["a" /* DialogOverview */],
                __WEBPACK_IMPORTED_MODULE_27__components_primeng_primeng_component__["a" /* PrimengComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_initial_path_initial_path_component__["a" /* InitialPathComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_primeng_menubar_menubar_component__["a" /* MenubarComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_primeng_chart_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_primeng_form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_primeng_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_primeng_picklist_picklist_component__["a" /* PicklistComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_primeng_table_table_component__["a" /* TableComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_26__components_display_display_component__["a" /* DialogOverview */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(appRoutes),
                //UIRouterModule.forRoot({states: [formState, chartState], useHash: true}),
                //PrimeNG
                __WEBPACK_IMPORTED_MODULE_8_primeng_menu__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_spinner__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_inputtextarea__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_picklist__["PickListModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_table__["TableModule"],
                //Material
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["D" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["I" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatStepperModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_21__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-group{\r\n    border: 1px solid #e8e8e8;\r\n}\r\n\r\n.tab-content{\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"float: left;\">About</h1>\n<button mat-button color=\"primary\" style=\"float: right; margin-top: 25px;\" [disabled]=\"!showPbar\" (click)=\"doneReading()\">I'm finished reading</button>\n<mat-progress-bar *ngIf=\"showPbar; else breaks\" mode=\"indeterminate\"></mat-progress-bar>\n<ng-template #breaks>\n  <br><br><br><br>\n</ng-template>\n<p>This is the Material Design section. Each tab describes the elements used and where to find them on the site.</p>\n\n<mat-tab-group class=\"tab-group\">\n  <mat-tab label=\"UI\">\n    <div class=\"tab-content\">\n      <p>The Nav <strong>Toolbar</strong> is used at the top of the page, with the toggle button for the <strong>Side-Nav</strong> and <strong>Menu</strong> button for switching UI libraries.</p>\n      <p>The About section of the Side-Nav (here) contains the <strong>Tab</strong> layout element with <strong>Material Icons</strong> in one of the tab labels. I used an <strong>Indeterminate Progress Bar</strong> that goes away when the user is 'finished reading'.</p>\n      <p>The Form section contains <strong>DatePicker, Input, Radio, Checkbox, Select, Slide Toggle,</strong> and <strong>Button</strong> elements integrated with the ngForm module for validation and data-binding. A <strong>Determinate Progress Bar</strong> is used for indicating the completion of the form before the submit button is enabled. On submit a <strong>SnackBar</strong> element is used as an alert message, the form fields reset, and an http request is made through a service to post the data.</p>\n      <p>The Display section uses a service to make a get request and display the entries using the <strong>Card</strong> layout element with <strong>Chips</strong> for various fields. There is also a <strong>Dialog Modal</strong> used to insert credit card info for certain entries. An <strong>Indeterminate Progress Spinner</strong> is used that the user can stop by finishing reading.</p>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Back-end\">\n    <div class=\"tab-content\">\n      This application is currently using MongoDB as the database, with the intention of switching to ReThinkDB. Node is used for the basic server setup, and express for the routes.\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Food\">\n    <ng-template mat-tab-label>\n      <mat-icon>restaurant</mat-icon><span style=\"padding-left: 10px; padding-right: 10px;\">Food</span><mat-icon>restaurant_menu</mat-icon>\n    </ng-template>\n    <div class=\"tab-content\" style=\"text-align: center\">\n      <p>Some good foods:</p>\n      <ul style=\"width: 20%; margin: auto; text-align: left;\">\n        <li>Salmon</li>\n        <li>Chicken</li>\n        <li>Cow</li>\n        <li>Pig</li>\n        <li>Grains</li>\n        <li>Wheat</li>\n        <li>Oats</li>\n      </ul>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.showPbar = true;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.doneReading = function () {
        this.showPbar = false;
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/display/display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".onlyFive {\r\n    border-radius: 20px;\r\n    color: darkgreen;\r\n    background-color: lightgreen;\r\n    width: 40px;\r\n    transition: all;\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n.onlyFive:hover {\r\n    border-radius: 1px;\r\n    width: 70px;\r\n}\r\n\r\n.mat-progress-spinner {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"display: inline-block;\">Display</h1>\n<button mat-button (click)=\"toggleProgress()\" style=\"display: inline-block;margin-left: 20px;\">Toggle indeterminate progress spinner</button>\n<mat-spinner *ngIf=\"indeterminate\"></mat-spinner>\n\n<br><br>\n\n<div *ngFor=\"let item of items; let i = index\">\n<mat-card>\n  <mat-card-header>\n    <mat-card-title style=\"padding-top: 6px;margin-bottom: 0; font-size: 18px\">{{item.name}}</mat-card-title>\n    <mat-chip-list>\n      <mat-chip>{{item.type}}</mat-chip>\n      <mat-chip *ngIf=\"item.guacamole\">Guacamole</mat-chip>\n    </mat-chip-list>\n  </mat-card-header>\n  <mat-card-content>\n    <br>\n    <p style=\"padding: 8px;font-size: 16px;\">DatePicker date: {{item.datePicker | date }}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <p *ngIf=\"item.sellInfo;else noInfo\">Purchase this customers personal info: <button mat-button  (click)=\"openDialog(i)\" class=\"onlyFive\">Only $5!</button></p>\n    <p *ngIf=\"cc && currentIndex == i\">Your credit card number: {{cc}}</p>\n    <ng-template #noInfo><i style=\"padding: 12px;\">This customer's info is not for sale.</i></ng-template>\n  </mat-card-actions>\n</mat-card>\n<br>\n</div>\n<br>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, quis. Eum perspiciatis dolorum voluptatibus, excepturi aperiam et voluptatem mollitia asperiores qui, fugit soluta ratione laboriosam beatae molestiae porro non incidunt.</p>"

/***/ }),

/***/ "../../../../../src/app/components/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DisplayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogOverview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DisplayComponent = (function () {
    function DisplayComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.items = [];
        this.indeterminate = true;
    }
    DisplayComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    DisplayComponent.prototype.getItems = function () {
        var _this = this;
        this.data.getItems().subscribe(function (items) {
            _this.items = items;
        });
        console.log(this.items);
    };
    DisplayComponent.prototype.openDialog = function (i) {
        var _this = this;
        this.currentIndex = i;
        var dialogRef = this.dialog.open(DialogOverview, {
            width: '300px',
            data: { cc: this.cc }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.cc = result;
        });
    };
    DisplayComponent.prototype.toggleProgress = function () {
        this.indeterminate = !this.indeterminate;
    };
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-display',
            template: __webpack_require__("../../../../../src/app/components/display/display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], DisplayComponent);
    return DisplayComponent;
}());

var DialogOverview = (function () {
    function DialogOverview(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverview.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverview = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-overview',
            template: "\n    <h2 mat-dialog-title>Enter your credit card information below.</h2>\n    <div mat-dialog-content>\n      <p>*Your account will be charged a $2.99 service fee</p>\n      <mat-form-field style=\"width: 100%\">\n        <input matInput [(ngModel)]=\"data.cc\" maxlength=16 required>\n      </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">Cancel</button>\n      <button mat-button [mat-dialog-close]=\"data.cc\" cdkFocusInitial>Pay</button>\n      <mat-icon style=\"margin-left: 32px;margin-top: 5px;\">account_balance</mat-icon>\n    </div>\n  "
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogOverview);
    return DialogOverview;
}());



/***/ }),

/***/ "../../../../../src/app/components/forms/forms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dummy .mat-input-placeholder {\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Completion status:</h3>\n  <mat-progress-bar [color]=\"color\" [value]=\"completion\" mode=\"determinate\"></mat-progress-bar>\n</div>\n\n<form #frm=\"ngForm\" (ngSubmit)=\"onSubmit(frm)\" style=\"padding: 10px;\">\n  <h2 style=\"display:inline-block; margin-right:30px\">Fill out the form</h2>\n  <mat-slide-toggle [color]='color' (click)=\"changeColor()\">Toggle Red</mat-slide-toggle>\n  <br>\n  <mat-form-field>\n    <input matInput placeholder=\"Enter name\" name=\"name\" ngModel required (input)=\"completeSection($event)\">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Select\" name=\"type\" ngModel required>\n      <mat-option value=\"Dine In\" (click)=\"completeSelect()\">Dine In</mat-option>\n      <mat-option value=\"Take Out\" (click)=\"completeSelect()\">Take Out</mat-option>\n      <mat-option value=\"Delivery\" (click)=\"completeSelect()\">Delivery</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <br>\n  <br>\n  <mat-checkbox [color]='color' [(ngModel)]=\"guacamole\" name=\"gaucamole\">Add guacamole? <span style=\"font-size:12px\">({{1 | currency}} extra)</span></mat-checkbox>\n  <br>\n  <br>\n  <p>Do you give us permission to sell your personal info to 3rd party companies?</p>\n  <mat-radio-group class=\"radg\" name=\"sellInfo\" [(ngModel)]=\"sellInfo\" required (click)=\"completeInfo()\">\n    <mat-radio-button class=\"radb\" value=\"true\" [color]='color'>Yes</mat-radio-button>\n    <mat-radio-button class=\"radb\" value=\"false\" [color]='color'>No</mat-radio-button>\n  </mat-radio-group>\n  <br>\n  <br>\n  <h4 style=\"padding-bottom:5px;margin-bottom:0;\">When would you like your food delivered?</h4>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp\" placeholder=\"Choose date\" ngModel name=\"date\" required (dateInput)=\"completeDate()\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n    <mat-datepicker #dp disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n  <br>\n\n  <button mat-raised-button [color]='color' [disabled]=frm.invalid >Place Order</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsComponent = (function () {
    function FormsComponent(snackBar, data) {
        this.snackBar = snackBar;
        this.data = data;
        this.color = "primary";
        this.guacamole = false;
        this.completion = 0;
        this.completed = [];
        this.canAdd = true;
        this.canAddSelect = true;
        this.canAddInfo = true;
        this.canAddDate = true;
    }
    FormsComponent.prototype.changeColor = function () {
        if (this.color == "primary") {
            this.color = "warn";
        }
        else if (this.color == "warn") {
            this.color = "primary";
        }
    };
    FormsComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Your order has been placed! (View it in the display section of the Side-Nav)", "OK", {
            duration: 5000
        });
    };
    FormsComponent.prototype.onSubmit = function (form) {
        if (this.sellInfo === "true") {
            this.sellInfoBool = true;
        }
        else if (this.sellInfo === "false") {
            this.sellInfoBool = false;
        }
        else {
            console.log('ERROR: sellInfo not of right type');
        }
        var newItem = {
            name: form.value.name,
            type: form.value.type,
            guacamole: this.guacamole,
            sellInfo: this.sellInfoBool,
            datePicker: form.value.date
        };
        this.data.addItem(newItem).subscribe(function (item) {
            console.log(item);
        });
        form.resetForm();
        this.completion = 0;
        this.canAdd = true;
        this.canAddSelect = true;
        this.canAddInfo = true;
        this.canAddDate = true;
        this.completed = [];
        this.openSnackBar();
    };
    FormsComponent.prototype.completeSection = function (field) {
        //Even though there is only one text input element in the form this function can handle multiple.
        if (field.target.validity.valid) {
            for (var i = 0; i < this.completed.length; i++) {
                if (this.completed[i] == field.target.name) {
                    this.canAdd = false;
                }
            }
            if (this.canAdd) {
                this.completed.push(field.target.name);
                this.completion += 25;
            }
            this.canAdd = true;
        }
    };
    FormsComponent.prototype.completeSelect = function () {
        if (this.canAddSelect) {
            this.completion += 25;
            this.canAddSelect = false;
        }
    };
    FormsComponent.prototype.completeInfo = function () {
        if (this.canAddInfo) {
            this.completion += 25;
            this.canAddInfo = false;
        }
    };
    FormsComponent.prototype.completeDate = function () {
        if (this.canAddDate) {
            this.completion += 25;
            this.canAddDate = false;
        }
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__("../../../../../src/app/components/forms/forms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/initial-path/initial-path.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/initial-path/initial-path.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 50%; min-width: 300px; margin: 50px auto; text-align: center;\">\n  <h1>Choose library:</h1>\n  <hr>\n  <a routerLink=\"material\">Material Design</a>\n  or\n  <a routerLink=\"primeng\">PrimeNG</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/initial-path/initial-path.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialPathComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InitialPathComponent = (function () {
    function InitialPathComponent() {
    }
    InitialPathComponent.prototype.ngOnInit = function () {
    };
    InitialPathComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-initial-path',
            template: __webpack_require__("../../../../../src/app/components/initial-path/initial-path.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/initial-path/initial-path.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InitialPathComponent);
    return InitialPathComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.e-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.is-mobile {\r\n    position: fixed;\r\n    z-index: 2;\r\n    /* make sure it will stay on top of content */\r\n}\r\n\r\n.is-mobile .sidenav-container {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n.ml {\r\n    margin-left: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"e-container\" [class.is-mobile]=\"mobileQuery.matches\">-->\n\n  <mat-toolbar color='primary'>\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <h3>Toolbar with Responsive Side Nav</h3>\n    <span class=\"spacer\"></span>\n    <button mat-button [matMenuTriggerFor]=\"menu\">Choose library</button>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list style=\"padding-top: 0\">\n        <a mat-list-item (click)=\"snav.toggle()\" (click)=\"changeContent($event)\" *ngFor=\"let nav of snavItems\" style=\"padding: 10px 15px; border-bottom: 1px solid rgb(161, 161, 161)\">{{nav}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <div style=\"width: 50%;margin: 0 auto\">\n        <app-forms *ngIf=\"snavContent == 'Form'\"></app-forms>\n        <app-about *ngIf=\"snavContent == 'About'\"></app-about>\n        <app-display *ngIf=\"snavContent == 'Display'\"></app-display>\n      </div>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item routerLink=\"/material\">Material Design</button>\n  <button mat-menu-item routerLink=\"/primeng\">PrimeNG</button>\n</mat-menu>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(changeDetectorRef, media) {
        // Cool array method use case for generating test nav items
        //snavItems = Array(5).fill(0).map((_, i) => `Item ${i + 1}`);
        this.snavItems = ["About", "Form", "Display"];
        this.snavContent = 'About';
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.changeContent = function (e) {
        this.snavContent = e.target.innerText;
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/primeng/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/primeng/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Doughnut Chart</h2>\n<p>The color counts are stored in a database so they represent clicks from everyone who has come to this page!</p>\n<hr>\n<button pButton (click)=\"donutClick($event)\" type=\"button\" label=\"Grayish\" style=\"background-color: #4c5454; color: white\"></button>\n<button pButton type=\"button\" label=\"Peach\" (click)=\"donutClick($event)\" style=\"background-color: #ff715b; color: white;\"></button>\n<button pButton type=\"button\" (click)=\"donutClick($event)\" label=\"Teal\" style=\"background-color: #1ea896; color: white;\"></button>\n<button pButton type=\"button\" label=\"Brown!\" style=\"background-color: #523f38; color: white;\" (click)=\"donutClick($event)\"></button>\n<br><br>\n<p-chart type=\"doughnut\" [data]=\"data\"></p-chart>"

/***/ }),

/***/ "../../../../../src/app/components/primeng/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = (function () {
    function ChartComponent(dService) {
        this.dService = dService;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        //retrieve color counts from db
        this.dService.getDoughnut().subscribe(function (i) {
            _this.doughnut = i;
            _this.updateChart();
        });
    };
    ChartComponent.prototype.updateChart = function () {
        this.data = {
            labels: ['Grayish', 'Peach', 'Teal', 'Brown!'],
            datasets: [
                {
                    data: [this.doughnut[0].grayish, this.doughnut[0].peach, this.doughnut[0].teal, this.doughnut[0].brown],
                    backgroundColor: ['#4c5454', '#FF715B', '#1EA896', '#523F38'],
                    hoverBackgroundColor: ['#9DA1A1', '#FFB1A5', '#84CFC5', '#A09692']
                }
            ]
        };
    };
    ChartComponent.prototype.donutClick = function (e) {
        var _this = this;
        switch (e.target.innerText) {
            case 'Grayish': {
                this.doughnut[0].grayish++;
                break;
            }
            case 'Peach': {
                this.doughnut[0].peach++;
                break;
            }
            case 'Teal': {
                this.doughnut[0].teal++;
                break;
            }
            case 'Brown!': {
                this.doughnut[0].brown++;
                break;
            }
            default: {
                console.log('ERROR: Invalid button color');
            }
        }
        this.dService.updateDoughnut(this.doughnut[0]).subscribe(function (res) {
            _this.updateChart();
        });
    };
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__("../../../../../src/app/components/primeng/chart/chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/primeng/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/primeng/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/primeng/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"display:inline-block;margin-right:20px;padding:10px;\">User Registration</h1>\n<button type=\"button\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Terms of Service\"></button>\n<hr>\n<form #user=\"ngForm\" (ngSubmit)=\"onSubmit(user)\" style=\"width:90%;margin:auto;\">\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align: center;\">\n        <p>Make a Username</p>\n      <div class=\"ui-inputgroup\">\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\n        <input pInputText type=\"text\" name=\"username\" placeholder=\"Username\" style=\"width:100%\" ngModel required>\n      </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align: center;\">\n      <p>What is your age?</p>\n      <p-spinner name=\"age\" placeholder=\"Age\" size=\"40\" [min]=\"1\" [max]=\"100\" required style=\"padding-left:10px;margin-left:5px;\" ngModel></p-spinner>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align: center;\">\n      <p>Select profile picture (Disabled)</p>\n      <p-fileUpload mode=\"basic\" name=\"profilePic\" accept=\"image/*\" (onUpload)=\"onUpload($event)\" disabled=\"true\"></p-fileUpload>\n    </div>\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align: center;\">\n      <p>Pick a day you are looking forward to!</p>\n      <p-calendar name=\"day\" [showIcon]=\"true\" ngModel required></p-calendar>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12\">\n      <p>If you could have a gigantic billboard with anything on it, what would it say?</p>\n      <textarea pInputTextarea autoResize=\"autoResize\" name=\"message\" cols=\"30\" rows=\"5\" placeholder=\"Type here...\" ngModel required></textarea>\n    </div>\n  </div>\n  <br>\n  <br>\n  <button pButton type=\"submit\" label=\"Submit\"></button>\n  \n  <p-dialog header=\"Terms of Service\" [(visible)]=\"privacyDialog\" modal=\"modal\" width=\"300\" [responsive]=\"true\">\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate, autem iusto quasi illum hic temporibus quos praesentium magni. Quia hic amet explicabo vitae optio! Minus inventore voluptate alias vero?</p>\n    <p-footer>\n        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"privacyDialog=false\" label=\"Agree\"></button>\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"privacyDialog=false\" label=\"No\"></button>\n    </p-footer>\n  </p-dialog>\n</form>\n<br><br><br>"

/***/ }),

/***/ "../../../../../src/app/components/primeng/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent(userService) {
        this.userService = userService;
        this.privacyDialog = false;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.showDialog = function () {
        this.privacyDialog = true;
    };
    FormComponent.prototype.onSubmit = function (form) {
        var newUser = {
            username: form.value.username,
            age: form.value.age,
            day: form.value.day,
            message: form.value.message
        };
        console.log(newUser);
        this.userService.addUser(newUser).subscribe(function (response) {
            console.log(response);
        });
        form.resetForm();
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/components/primeng/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/primeng/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/primeng/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/primeng/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to the PrimeNG section!</h1>\n<p>These elements are cool. I have DB collections for button clicks (doughnut chart) and users (form, data displays).</p>\n<p>This section is organized much more than the Material section. I used many subcomponents and child routes.</p>"

/***/ }),

/***/ "../../../../../src/app/components/primeng/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info',
            template: __webpack_require__("../../../../../src/app/components/primeng/info/info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/primeng/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/primeng/menubar/menubar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/primeng/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"menuItems\">\n  <div>\n    <p-dropdown [options]=\"dropOptions\" placeholder=\"Choose library\" optionLabel=\"name\" (onChange)=\"dropChange($event)\"></p-dropdown>\n  </div>\n</p-menubar>"

/***/ }),

/***/ "../../../../../src/app/components/primeng/menubar/menubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenubarComponent = (function () {
    function MenubarComponent(router) {
        this.router = router;
        this.dropOptions = [{ name: "PrimeNG" }, { name: "Material Design" }];
    }
    MenubarComponent.prototype.ngOnInit = function () {
        this.menuItems = [
            {
                label: 'Info',
                icon: 'fa-info',
                routerLink: ['info']
            },
            {
                label: 'Form',
                icon: 'fa-file-o',
                routerLink: ['form']
            },
            {
                label: 'Chart',
                icon: 'fa-pie-chart',
                routerLink: ['chart']
            },
            {
                label: 'Data Display',
                items: [
                    { label: 'Picklist', icon: 'fa-arrows-h', routerLink: ['picklist'] },
                    { label: 'Tree', icon: 'fa-tree', disabled: true },
                    { label: 'Turbo/DataTable', icon: 'fa-table', routerLink: ['table'] },
                    { label: 'TreeTable', icon: 'fa-object-ungroup', disabled: true }
                ]
            }
        ];
    };
    MenubarComponent.prototype.dropChange = function (e) {
        if (e.value.name == "Material Design") {
            this.router.navigate(['/material']);
        }
        if (e.value.name == "PrimeNG") {
            this.router.navigate(['/primeng']);
        }
    };
    MenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menubar',
            template: __webpack_require__("../../../../../src/app/components/primeng/menubar/menubar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/primeng/menubar/menubar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/primeng/picklist/picklist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/primeng/picklist/picklist.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Data PickList</h1>\n<p>With Drag & Drop functionality</p>\n<br>\n\n<p-pickList [source]=\"users\" [target]=\"ptarget\" sourceHeader=\"Users\" targetHeader=\"Cool Users\" [responsive]=\"true\" filterBy=\"name\" dragdrop=\"true\" dragdropScope=\"users\" sourceFilterPlaceholder=\"Search by name\" targetFilterPlaceholder=\"Search by name\" [sourceStyle]=\"{'height':'300px'}\" [targetStyle]=\"{'height':'300px'}\">\n  <ng-template let-user pTemplate=\"item\">\n    <div class=\"ui-helper-clearfix\">\n      <div style=\"font-size:14px;margin:15px 5px 0 0;\">{{user.username}} ({{user.age}}) - {{user.message}} - {{user.day | date}}</div>\n    </div>\n  </ng-template>\n</p-pickList>\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/components/primeng/picklist/picklist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicklistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PicklistComponent = (function () {
    function PicklistComponent(userService) {
        this.userService = userService;
        this.ptarget = [];
    }
    PicklistComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    PicklistComponent.prototype.getItems = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    PicklistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-picklist',
            template: __webpack_require__("../../../../../src/app/components/primeng/picklist/picklist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/primeng/picklist/picklist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], PicklistComponent);
    return PicklistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/primeng/primeng.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/primeng/primeng.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menubar></app-menubar>\n<div style=\"margin: 10px 20px;\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/primeng/primeng.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimengComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrimengComponent = (function () {
    function PrimengComponent() {
    }
    PrimengComponent.prototype.ngOnInit = function () {
    };
    PrimengComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-primeng',
            template: __webpack_require__("../../../../../src/app/components/primeng/primeng.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/primeng/primeng.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrimengComponent);
    return PrimengComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/primeng/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/primeng/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Table Component</h1>\n<p>Create, Read, Update, Delete users.</p>\n<br>\n\n<p-table [columns]=\"cols\" [value]=\"users\" selectionMode=\"single\" [(selection)]=\"selectedUser\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"10\">\n\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\">\n        {{col.header}}\n      </th>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        {{rowData[col.field]}}\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"summary\" let-rowData>\n    <div style=\"text-align: left\">\n      <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"></button>\n    </div>\n  </ng-template>\n\n</p-table>\n\n<p-dialog header=\"User Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n  <div class=\"ui-g ui-fluid\" *ngIf=\"user\">\n    <div class=\"ui-g-12\">\n      <div class=\"ui-g-4\">\n        <label for=\"username\">Username</label>\n      </div>\n      <div class=\"ui-g-8\">\n        <input pInputText id=\"username\" [(ngModel)]=\"user.username\">\n      </div>\n    </div>\n    <div class=\"ui-g-12\">\n      <div class=\"ui-g-4\">\n        <label for=\"age\">Age</label>\n      </div>\n      <div class=\"ui-g-8\">\n        <input pInputText id=\"age\" [(ngModel)]=\"user.age\">\n      </div>\n    </div>\n    <div class=\"ui-g-12\">\n      <div class=\"ui-g-4\">\n        <label for=\"day\">Day</label>\n      </div>\n      <div class=\"ui-g-8\">\n        <!--<input pInputText id=\"day\" [(ngModel)]=\"user.day\">-->\n        <p-calendar name=\"day\" id=\"day\" [showIcon]=\"true\" [(ngModel)]=\"user.day\" required></p-calendar>\n      </div>\n    </div>\n    <div class=\"ui-g-12\">\n      <div class=\"ui-g-4\">\n        <label for=\"username\">Message</label>\n      </div>\n      <div class=\"ui-g-8\">\n        <input pInputText id=\"message\" [(ngModel)]=\"user.message\">\n      </div>\n    </div>\n  </div>\n\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\n    </div>\n  </p-footer>\n\n</p-dialog>"

/***/ }),

/***/ "../../../../../src/app/components/primeng/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = (function () {
    function TableComponent(userService) {
        this.userService = userService;
        this.cols = [
            { field: 'username', header: 'Username' },
            { field: 'age', header: 'Age' },
            { field: 'day', header: 'Day' },
            { field: 'message', header: 'Message' }
        ];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    TableComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    TableComponent.prototype.showDialogToAdd = function () {
        this.addUser = true;
        this.user = {};
        this.displayDialog = true;
    };
    TableComponent.prototype.onRowSelect = function (event) {
        this.addUser = false;
        this.user = this.clone(event.data);
        this.displayDialog = true;
    };
    TableComponent.prototype.clone = function (u) {
        var user = {};
        for (var prop in u) {
            if (prop == 'day') {
                user[prop] = '';
            }
            else {
                user[prop] = u[prop];
            }
        }
        return user;
    };
    TableComponent.prototype.save = function () {
        var _this = this;
        var users = this.users.slice();
        if (this.addUser) {
            //add new
            users.push(this.user);
            this.userService.addUser(this.user).subscribe(function (response) {
                console.log(response);
                _this.getUsers();
            });
            ;
        }
        else {
            //update
            this.userService.updateUser(this.user).subscribe(function (res) {
                _this.getUsers();
            });
            users[this.users.indexOf(this.selectedUser)] = this.user;
        }
        this.users = users;
        this.user = null;
        this.displayDialog = false;
    };
    TableComponent.prototype.delete = function () {
        var _this = this;
        this.userService.deleteUser(this.selectedUser._id).subscribe(function (res) {
            _this.getUsers();
        });
        var index = this.users.indexOf(this.selectedUser);
        this.users = this.users.filter(function (val, i) { return i != index; });
        this.user = null;
        this.displayDialog = false;
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/components/primeng/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/primeng/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    // Remove http://localhost:3000/ before hosting on node server
    // Material requests
    DataService.prototype.getItems = function () {
        return this.http.get('api/items');
    };
    DataService.prototype.addItem = function (newItem) {
        return this.http.post('api/item', newItem, httpOptions);
    };
    DataService.prototype.deleteItem = function (id) {
        return this.http.delete('api/item/' + id, httpOptions);
    };
    // Doughnut Chart/Button requests
    DataService.prototype.getDoughnut = function () {
        return this.http.get('api2/doughnuts');
    };
    DataService.prototype.addDoughnut = function () {
        return this.http.post('api2/doughnutPost', httpOptions);
    };
    DataService.prototype.updateDoughnut = function (newDoughnut) {
        return this.http.put('api2/doughnut/' + newDoughnut._id, newDoughnut, httpOptions);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpHead = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    // Remove http://localhost:3000/ for deployment
    UserService.prototype.getUsers = function () {
        return this.http.get('users');
    };
    UserService.prototype.addUser = function (newUser) {
        return this.http.post('users', newUser, httpHead);
    };
    UserService.prototype.updateUser = function (newUser) {
        return this.http.put('users/' + newUser._id, newUser, httpHead);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete('users/' + id, httpHead);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map