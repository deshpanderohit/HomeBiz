webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_modal_about_modal__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_faq__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__policies_policies__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_terms__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { File } from '@ionic-native/file';
//import { FileTransfer } from '@ionic-native/file-transfer'
//import { DocumentViewer } from '@ionic-native/document-viewer';
var AboutPage = (function () {
    function AboutPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.categories = [];
        this.initialize();
    }
    AboutPage.prototype.initialize = function () {
        this.categories = [
            { "cat_id": "1", "cat_name": "About Us" },
            { "cat_id": "2", "cat_name": "Sell on Homebiz365" },
            { "cat_id": "3", "cat_name": "FAQ's" },
            { "cat_id": "4", "cat_name": "Privacy" },
            { "cat_id": "5", "cat_name": "Terms and Conditions" }
        ];
    };
    AboutPage.prototype.openURL = function () {
        window.open('www.clairvoyantbizinfo.com', '_system');
    };
    AboutPage.prototype.open = function (category) {
        if (category.cat_name == "About Us") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_modal_about_modal__["a" /* AboutModalPage */]);
            modal.present();
        }
        if (category.cat_name == "FAQ's") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__faq_faq__["a" /* FaqPage */]);
            modal.present();
        }
        if (category.cat_name == "Privacy") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__policies_policies__["a" /* PoliciesPage */]);
            modal.present();
        }
        if (category.cat_name == "Terms and Conditions") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__terms_terms__["a" /* TermsPage */]);
            modal.present();
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div style="align-items: center;">\n\n      <img alt="logo" height="60" width="200" src="assets/img/logo.png" >\n\n  </div>\n\n<br>\n\n<div padding>\n\n  <span style="font-size: 16px;">\n\n    HomeBiz365 is an online business platform provided by <a href="www.clairvoyantbizinfo.com"> Clairvoyant BizInfo Pvt. Ltd </a> for home-based entrepreneurs to connect directly to the customers who love buying home made quality products.\n\n  </span>\n\n</div>\n\n\n\n  <br><br>\n\n  <ion-list>\n\n    <ion-list-header style="font-size: 18px; font-weight: bold; text-align: center;">\n\n      Easy Links\n\n    </ion-list-header>\n\n    <button ion-item *ngFor="let category of categories" (click)="open(category)">\n\n      {{ category.cat_name }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_conference_data__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(navCtrl, userData, http, zone, confData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.http = http;
        this.zone = zone;
        this.confData = confData;
        this.captchaPassed = false;
        //  signup: UserOptions = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.member = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            mob: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]),
            pincode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(6)]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
            dob: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            gen: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            re_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.equalto('password')])
        });
    };
    SignupPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    SignupPage.prototype.captchaResolved = function (response) {
        var _this = this;
        this.zone.run(function () {
            _this.captchaPassed = true;
            _this.captchaResponse = response;
        });
    };
    SignupPage.prototype.newCustRegister = function () {
        var data = JSON.stringify({ name: this.name, address: this.address, pincode: this.pincode, email: this.email, dob: this.dob, gender: this.gender, username: this.username, password: this.password, cpassword: this.cpassword });
        this.confData.custSignup(data).subscribe(function (data) {
            console.log(data);
        });
        //this.http.post('http://localhost/api/product/gym_signup.php',data).map(res => res.json()).subscribe(res => {alert("success: Userid "+res.userid+" Access Token "+res.token);}, () => {alert("failed");});		
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/signup/signup.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Customer Registration</ion-title>\n\n	</ion-navbar>\n\n		  \n\n</ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n	<ion-list>\n\n	  <form novalidate [formGroup]="member">\n\n  \n\n		  <ion-item>      \n\n			  <ion-label fixed style="color: black;">Full Name</ion-label>\n\n			  <ion-input type="text" value="" formControlName="name"></ion-input>\n\n		  </ion-item>\n\n\n\n\n\n		<ion-item>\n\n			<ion-label fixed style="color: black;">Address</ion-label>\n\n			<ion-textarea name="address" rows="3" formControlName="address" required></ion-textarea>\n\n		</ion-item>	\n\n\n\n		<ion-item>\n\n			<ion-label fixed style="color: black;">Pincode</ion-label>\n\n			<ion-input type="text" name="pincode" formControlName="pincode" required ></ion-input>\n\n		</ion-item>\n\n\n\n\n\n		<ion-item>\n\n			<ion-label fixed style="color: black;">Mob</ion-label>\n\n			<ion-input type="text" formControlName="mob" value="" ></ion-input>\n\n		</ion-item>\n\n\n\n\n\n  <!--\n\n	  formControlName="name"\n\n	  [formGroup]="member"\n\n		  <ion-item no-lines *ngIf="( member.get(\'name\').hasError(\'minlength\') || member.get(\'name\').hasError(\'required\') ) && member.get(\'name\').touched">\n\n			  <div class="error" *ngIf="member.get(\'name\').hasError(\'required\') && member.get(\'name\').touched">\n\n			  Please enter your full name\n\n			  </div>\n\n		  </ion-item>\n\n  -->\n\n  \n\n		  <ion-item>\n\n		  <ion-label fixed style="color: black;">Email</ion-label>\n\n		  <ion-input type="text" value="" formControlName="email"></ion-input>\n\n		  </ion-item>\n\n  <!--\n\n	  formControlName="email"\n\n		  <ion-item no-lines *ngIf="( member.get(\'email\').hasError(\'required\') || member.get(\'email\').hasError(\'email\') ) && member.get(\'email\').touched">\n\n			  <div class="error" *ngIf="member.get(\'email\').hasError(\'required\') && member.get(\'email\').touched">\n\n				  Please enter your email\n\n			  </div>\n\n	  </ion-item>\n\n	  \n\n  -->\n\n	  <ion-item>\n\n		  <ion-label fixed style="color: black;">Date Of Birth : </ion-label>\n\n		  <ion-datetime displayFormat="DD MM YYYY" [(ngModel)]="today" name="dob" formControlName="dob"></ion-datetime>\n\n		  <ion-icon name="calendar" item-right></ion-icon>\n\n	  </ion-item>\n\n  <!--  \n\n	  formControlName="dob"\n\n	  <ion-item no-lines *ngIf="( member.get(\'dob\').hasError(\'minlength\') || member.get(\'dob\').hasError(\'required\') ) && member.get(\'dob\').touched">\n\n		  <div class="error" *ngIf="member.get(\'dob\').hasError(\'required\') && member.get(\'dob\').touched">\n\n		  Please enter your date of birth\n\n		  </div>\n\n		  </ion-item>\n\n		  \n\n		  formControlName="address"\n\n		  formControlName="mob"\n\n	  -->\n\n	  \n\n  \n\n  \n\n		  <ion-item>\n\n			  <ion-label fixed style="color: black;">Gender</ion-label>\n\n			  <ion-select [(ngModel)]="gender" name="gen" formControlName="gen">\n\n				  <ion-option value="Male">Male</ion-option>\n\n				  <ion-option value="Female">Female</ion-option>\n\n			  </ion-select>\n\n		  </ion-item>\n\n  \n\n  \n\n  <!--\n\n		  <ion-item no-lines *ngIf="( member.get(\'mob\').hasError(\'required\') || member.get(\'mob\').hasError(\'minlength\') || member.get(\'mob\').hasError(\'maxlength\'))&& member.get(\'mob\').touched">\n\n			  <div class="error" *ngIf="member.get(\'mob\').hasError(\'required\') && member.get(\'mob\').touched">\n\n				  Please enter your mobile number\n\n			  </div>\n\n			  <div class="error" *ngIf="member.get(\'mob\').hasError(\'minlength\') && member.get(\'mob\').touched">\n\n				  Please enter valid mobile number\n\n			  </div>\n\n  \n\n			  <div class="error" *ngIf="member.get(\'mob\').hasError(\'maxlength\') && member.get(\'mob\').touched">\n\n				  Please enter valid mobile number\n\n			  </div>\n\n		  </ion-item>\n\n  -->\n\n\n\n\n\n		<ion-item>      \n\n			<ion-label fixed style="color: black;">Username</ion-label>\n\n			<ion-input type="text" value="" formControlName="username"></ion-input>\n\n		</ion-item>\n\n\n\n\n\n		<ion-item>\n\n			<ion-label fixed style="color: black;">Password</ion-label>\n\n			<ion-input type="password" value="" formControlName="password"></ion-input>\n\n		  </ion-item>\n\n	  \n\n		  <ion-item no-lines *ngIf="( member.get(\'password\').hasError(\'required\') ) && member.get(\'password\').touched">\n\n			<div class="error" *ngIf="member.get(\'password\').hasError(\'required\') && member.get(\'password\').touched">\n\n			Password is required\n\n			</div>\n\n		  </ion-item>\n\n	  \n\n		  <ion-item>\n\n			<ion-label fixed style="color: black;">Confirm Password</ion-label>\n\n			<ion-input type="password" value="" formControlName="re_password"></ion-input>\n\n		  </ion-item>\n\n	  \n\n		  <ion-item no-lines *ngIf="( member.get(\'re_password\').hasError(\'equalTo\') || member.get(\'re_password\').hasError(\'required\') ) && member.get(\'re_password\').touched">\n\n			<div class="error" *ngIf="member.get(\'re_password\').hasError(\'required\') && member.get(\'re_password\').touched">\n\n			Confirm password is required\n\n			</div>\n\n			<div class="error" *ngIf="member.get(\'re_password\').hasError(\'equalTo\') && member.get(\'re_password\').touched">\n\n			Password Mismatch\n\n			</div>\n\n		  </ion-item>\n\n\n\n\n\n  <!--\n\n	  formControlName="address"\n\n	  <ion-item no-lines *ngIf="( member.get(\'address\').hasError(\'minlength\') || member.get(\'address\').hasError(\'required\') ) && member.get(\'address\').touched">\n\n		  <div class="error" *ngIf="member.get(\'address\').hasError(\'required\') && member.get(\'address\').touched">\n\n		  Please enter your address\n\n		  </div>\n\n	  </ion-item>\n\n  -->\n\n  	<div style="align-content: center; padding-top: 10px;">\n\n  		<re-captcha (resolved)="captchaResolved($event)" siteKey="6Lcv2m8UAAAAAG63Pi1cd_9dIBoXLQCPlKWNJeKT"></re-captcha>\n\n	</div>\n\n\n\n  	<div padding>\n\n		<button ion-button color="facebook" [disabled]="member.invalid || !captchaPassed" full (click)="newCustRegister()">Register</button>\n\n  	</div>\n\n  \n\n	  </form>\n\n  </ion-list>\n\n  </ion-content>\n\n  <!-- [disabled]="member.invalid" -->\n\n\n\n  <style type="text/css">\n\n	.error\n\n	{\n\n		color:red;\n\n		font-size:12px;\n\n	}\n\n	\n\n	</style>\n\n	'/*ion-inline-end:"/root/HomeBiz365/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_conference_data__["a" /* ConferenceData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_conference_data__["a" /* ConferenceData */]) === "function" && _e || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conference_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    //@ViewChild('mapCanvas') mapElement: ElementRef;
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/map/map.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cart</ion-title>\n\n  </ion-navbar>\n\n\n\n  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_filter_schedule_filter__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Http } from '@angular/http';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';




var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
        this.products = [];
        this.data = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.app.setTitle('Schedule');
        this.confData.getProducts().subscribe(function (data) {
            _this.products = data;
            //console.log("Products: "+JSON.stringify(this.products));
        });
        this.confData.getTopTrending().subscribe(function (data) {
            _this.data = data;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
            }
        });
    };
    SchedulePage.prototype.view = function (product) {
        event.stopPropagation();
        console.log("Product Clicked: " + JSON.stringify(product.prod_name));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], { product: product });
    };
    SchedulePage.prototype.viewAllNewArrivals = function (event) {
        event.stopPropagation();
    };
    SchedulePage.prototype.viewAllTrending = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-schedule',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/schedule/schedule.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title style="text-align: center; padding-right: 10px;">\n\n      <img alt="logo" height="50" width="150" src="assets/img/logo.png" >\n\n    </ion-title>\n\n\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentFilter()">\n\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar color="primary"\n\n                   [(ngModel)]="queryText"\n\n                   (ionInput)="updateSchedule()"\n\n                   placeholder="Search">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n<!--\n\n    <ion-scroll scrollX="true" class="wide-as-needed">\n\n        <img src="../../assets/img/banner/bakery.jpg">\n\n    </ion-scroll>\n\n-->\n\n\n\n<div>\n\n  <ion-slides autoplay="2000" loop="true" speed="1500" class="slides" pager="true">\n\n    <ion-slide>\n\n      <img src="../../assets/img/banner/bakery.jpg">\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="../../assets/img/banner/beauty.jpg">\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="../../assets/img/banner/food items.jpg">\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="../../assets/img/banner/gift.jpg">\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="../../assets/img/banner/jewellery.jpg">\n\n    </ion-slide>\n\n  </ion-slides>\n\n</div>\n\n\n\n<div>\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-card-header style="font-size: 18px; padding-left: 15px;">\n\n        New Arrivals\n\n      </ion-card-header>\n\n    \n\n      <div style="padding-left: 130px; padding-top: 9px;">\n\n        <button class="addButton" ion-button clear  (click)="viewAllNewArrivals($event)">View All</button>\n\n      </div>\n\n\n\n      <div style="padding-left: 17px;">\n\n        <ion-list>\n\n\n\n          <ion-card *ngFor="let product of products" (click)="view(product)">\n\n            <img class="full-image" src="assets/img/products/{{product.prod_img}}"/>\n\n            <div class="card-title" style="font-size: 15px">{{ product?.prod_name }}</div>\n\n          </ion-card>\n\n\n\n        </ion-list>\n\n      </div>\n\n    </ion-row>\n\n  </ion-grid>\n\n</div>\n\n\n\n<div>\n\n      <ion-card-header style="font-size: 18px; padding-left: 15px;">\n\n        Top Trending\n\n      </ion-card-header>\n\n    \n\n      <div style="padding-left: 17px;">\n\n        <ion-list>\n\n\n\n          <ion-card *ngFor="let product of data" (click)="view(product)">\n\n            <img class="full-image" src="assets/img/products/{{product.prod_img}}"/>\n\n            <div class="card-title" style="font-size: 15px">{{ product?.prod_name }}</div>\n\n          </ion-card>\n\n\n\n        </ion-list>\n\n      </div>\n\n  \n\n</div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/root/HomeBiz365/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_details_category_details__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { CategoryDetailsPage } from '../category-details/category-details';
var SpeakerListPage = (function () {
    function SpeakerListPage(navCtrl, modalCtrl, confData) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.confData = confData;
        this.speakers = [];
        this.categories = [];
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getProductCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    SpeakerListPage.prototype.view = function (category) {
        //this.navCtrl.push(CategoryDetailsPage,{product: product});
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__category_details_category_details__["a" /* CategoryDetailsPage */], { category: category });
        modal.present();
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Product Categories</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    \n\n  <ion-searchbar color="primary"\n\n                  [(ngModel)]="queryText"\n\n                  (ionInput)="updateSchedule()"\n\n                  placeholder="Search">\n\n  </ion-searchbar>\n\n    \n\n  <div style="padding-left: 17px;">\n\n      <ion-grid>\n\n        <ion-row>\n\n\n\n              <ion-list>\n\n      \n\n                <ion-card *ngFor="let product of categories" (click)="view(product)">\n\n                  <img class="full-image" src="assets/img/products/categories/{{product.cat_img}}"/>\n\n                  <div class="card-title" style="font-size: 15px">{{ product?.cat_name }}</div>\n\n                </ion-card>\n\n      \n\n              </ion-list>\n\n        \n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n      \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.getProducts = function () {
        return this.http.get('http://localhost/hb/product/newArrival.php').map(function (result) { return result.json(); });
    };
    ConferenceData.prototype.getTopTrending = function () {
        return this.http.get('http://localhost/hb/product/topTrending.php').map(function (result) { return result.json(); });
    };
    ConferenceData.prototype.getProductDetails = function (prod_id) {
        var data = JSON.stringify({ prod_id: prod_id });
        return this.http.post('http://localhost/hb/product/product_details.php', data).map(function (result) { return result.json(); });
    };
    ConferenceData.prototype.getProductCategories = function () {
        return this.http.get('http://localhost/hb/product/productCategories.php').map(function (result) { return result.json(); });
    };
    ConferenceData.prototype.getCategoryDetails = function (id, name) {
        var data = JSON.stringify({ cat_id: id, cat_name: name });
        return this.http.post('http://localhost/hb/product/categoryDetails.php', data).map(function (result) { return result.json(); });
    };
    ConferenceData.prototype.getProductByName = function (prod_name) {
        var data = JSON.stringify({ prod_name: prod_name });
        return this.http.post('http://localhost/hb/product/productInfo.php', data).map(function (result) { return result.json(); });
    };
    ConferenceData.prototype.validateLogin = function (username, password) {
        var data = JSON.stringify({ username: username, password: password });
        return this.http.post('http://localhost/hb/login/validateLogin.php', data).map(function (result) { return result.json(); });
    };
    ConferenceData.prototype.custInfo = function (id) {
        //console.log("Id is: "+id);
        var data = JSON.stringify({ cust_id: id });
        return this.http.post('http://localhost/hb/customer/custInfo.php', data).map(function (result) { return result.json(); });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutModalPage = (function () {
    function AboutModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.category = this.navParams.get("category");
    }
    AboutModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutModalPage');
    };
    AboutModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AboutModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-modal',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/about-modal/about-modal.html"*/'<!--\n  Generated template for the AboutModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About Us</ion-title>\n\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div padding>\n\n\n\'HomeBiz365\' is an e-commerce platform designed, developed, managed and owned by Clairvoyant BizInfo Pvt. Ltd., a company engaged into various activities through its diverse functional verticals. The company has launched its first e-commerce platform <a herf="www.homebiz365.in" >www.homebiz365.in</a> for its users that brings together home based entrepreneurs and the customers who love to buy quality home-made products.<br><br>\n\nThis platform is specially developed keeping in mind the home businesses which operate on small scale focusing on their quality, wish to expand their reach but face challenges of investment of money as well as time for marketing etc.<br><br>\n\nThrough this platform, now small product vendors can<br>\n1. Have their presence on internet at very low cost<br>\n2. Cross their boundaries and reach larger audience<br>\n3. Showcase their products without extra cost<br>\n4. Avail benefits of Digital Marketing at nominal cost<br>\n5. Easily operate and use the platform as no need to be a tech-savvy person<br><br>\n\nThis platform works as a Lead Generation platform for home based small businesses owners. At the same time for customers at large, this acts as a place where they can have quality goods from vendors which are not operating on mass scale but are focusing on quality. So it’s a WIN ‐ WIN for both, vendors and customers.<br>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/about-modal/about-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], AboutModalPage);
    return AboutModalPage;
}());

//# sourceMappingURL=about-modal.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = (function () {
    function FaqPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/faq/faq.html"*/'<!--\n  Generated template for the FaqPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FAQ\'s</ion-title>\n\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div>\n    <h5 style="text-align: center;"><b>Frequently Asked Questions</b></h5>\n  </div>\n\n  <div style="padding-top: 20px;" padding>\n    <ion-list>\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>Is FSSAI registration mandatory for all the products. How I can do this?</b><br />\n          -No, FSSAI is not mandatory registration for all products but it is mandatory only for items in Food and related category.\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>Is GST registration mandatory?</b><br />\n          -HomeBiz365 is just a platform made available to facilitate the trade for home based vendors. GST and related compliance is individual vendor\'s responsibility inline with government regulations.<br />\n          It is not mandatory though preferable to have GST registration for vendors on HomeBiz365 platform.\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>How can I start selling my products on HomeBiz365?</b><br />\n          -<button clear (click)="vendor()">Click Here</button>to Start Selling on HomeBiz365.\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>Is delivery option available?</b><br />\n          -Delivery is the biggest problem for home based businesses to cross the limits of service.<br />\n          HomeBiz365 has solved this problem by making delivery option available as marginally extra cost through our delivery partner.<br />\n          As of now delivery is available within Pune and Pimpri-chinchwad area only.<br />\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>What are the delivery charges?</b><br />\n        -Delivery charge varies with each Seller.<br />\n        Sellers incur relatively higher shipping costs on low value items.<br />\n        In such cases, charging delivery charge helps them offset logistics costs.<br />\n        Please check your order summary to understand the delivery charges for individual products.<br />\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>What is the estimated delivery time?</b><br />\n          -Sellers generally prepare/procure and ship the items within the time specified on the product page.<br />\n          Business days exclude public holidays and Sundays.<br />\n          Estimated delivery time depends on the following factors:<br />\n          <ol>\n            <li>The Seller offering the product</li>\n            <li>Product\'s availability with the Seller</li>\n            <li>The destination to which you want the order shipped to and location of the Seller.</li>\n          </ol>\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on Homebiz365?</b><br />\n          -There are NO hidden charges when you make a purchase on homebiz365.<br />\n          List prices you see on the products page are all-inclusive of all the taxes.<br />\n          The price you see on the product page is exactly what you would pay.<br />\n          Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller\'s shipping policy.<br />\n          These charges will be displayed before proceeding for payment.<br />\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>If I request for a replacement, when will I get it?</b><br />\n          -Visit My Orders to check the status of your replacement.<br />\n          In most locations, the replacement item is delivered to you at the time of pick-up.<br />\n          In all other areas, the replacement is initiated after the originally delivered item is picked up.<br />\n          Please check the SMS & email we send you for your replacement request for more details.<br />\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>Can items be returned after the time period mentioned in the seller\'s Returns Policy?</b><br />\n          -No, sellers will not be able to accept products after the time period mentioned in the seller\'s Returns Policy.\n      </span><br /><br />\n\n      <ion-icon name="help"> </ion-icon>\n      <span style="font-style: bold; font-size: 14px;">\n        <b>How do returns work?</b><br />\n            -You can raise a request to return your items with these simple steps:<br />\n            <ol>\n                <li>Log into your homebiz365 account</li>\n                <li>Go to My Orders</li>\n                <li>Click on \'Return\' against the item you wish to return or exchange</li>\n                <li>Fill in the details and raise a return request\nOnce you raise a request, you\'ll get an email and SMS confirming that your request is being processed.\nBased on the item, your request may be automatically approved or you may be contacted for more details.\nIf the request is approved, the item will be picked up after which you will get a replacement or refund.\nYou can also track the status of your return request instantly from the \'My Orders\' section. </li>\n            </ol>\n      </span><br /><br />\n\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PoliciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PoliciesPage = (function () {
    function PoliciesPage(navCtrl, navParams, docViewer, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.docViewer = docViewer;
        this.viewCtrl = viewCtrl;
    }
    PoliciesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoliciesPage');
    };
    PoliciesPage.prototype.showDocument = function () {
        var options = {
            title: 'Policies',
            documentView: { closeLabel: '' },
            navigationView: { closeLabel: '' },
            email: { enabled: true },
            print: { enabled: true },
            openWith: { enabled: true },
            bookmarks: { enabled: true },
            search: { enabled: false },
            autoClose: { onPause: false }
        };
        this.docViewer.viewDocument('assets/policies.pdf', 'application/pdf', options);
    };
    PoliciesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PoliciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-policies',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/policies/policies.html"*/'<!--\n  Generated template for the PoliciesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Policies</ion-title>\n\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="showDocument()">\n    Read Policies\n  </button>\n</ion-content>\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/policies/policies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], PoliciesPage);
    return PoliciesPage;
}());

//# sourceMappingURL=policies.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, viewCtrl, docViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.docViewer = docViewer;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.showDocument = function () {
        var options = {
            title: 'Policies',
            documentView: { closeLabel: '' },
            navigationView: { closeLabel: '' },
            email: { enabled: true },
            print: { enabled: true },
            openWith: { enabled: true },
            bookmarks: { enabled: true },
            search: { enabled: false },
            autoClose: { onPause: false }
        };
        this.docViewer.viewDocument('assets/terms.pdf', 'application/pdf', options);
    };
    TermsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Terms</ion-title>\n\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="showDocument()">\n    Read Terms & Conditions\n  </button>\n</ion-content>\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
        this.modalCtrl = modalCtrl;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updateProfile = function () {
        //console.log('Clicked to update picture');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        //console.log('Clicked to change password');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordPage */]);
        modal.present();
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/account/account.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Account</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <div padding-top text-center *ngIf="username">\n\n    <h4>{{ username }}</h4>\n\n\n\n    <ion-list inset>\n\n      <button ion-item (click)="orders()">My Orders</button>\n\n      <button ion-item (click)="updateProfile()">Update Profile</button>\n\n      <button ion-item (click)="changePassword()">Change Password</button>\n\n      <button ion-item (click)="logout()">Logout</button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, confData, storage, userData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.confData = confData;
        this.storage = storage;
        this.userData = userData;
        this.custInfo = [];
        this.today = new Date();
        //this.cid = this.userData.getCustId();
        storage.get('cid').then(function (data) {
            console.log("Data: " + data);
            _this.cid = data;
            console.log("Cid is: " + _this.cid);
            _this.confData.custInfo(_this.cid).subscribe(function (data) {
                _this.custInfo = data;
                console.log("Cust Info: " + JSON.stringify(_this.custInfo));
                _this.custInfo.forEach(function (value) {
                    _this.gender = value.cust_gen;
                    _this.today = value.cust_dob;
                });
            });
        });
        //this.cid = this.storage.get('cid');
        //console.log("CId: "+JSON.stringify(this.cid));
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.member = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].email]),
            dob: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]),
            mob: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].maxLength(10)]),
            address: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required])
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let customer of custInfo">\n	<form novalidate>\n\n		<ion-item>      \n			<ion-label fixed style="color: black;">Full Name</ion-label>\n			<ion-input type="text" value="" placeholder="{{ customer?.cust_fname }}"></ion-input>\n		</ion-item>\n<!--\n	formControlName="name"\n	[formGroup]="member"\n		<ion-item no-lines *ngIf="( member.get(\'name\').hasError(\'minlength\') || member.get(\'name\').hasError(\'required\') ) && member.get(\'name\').touched">\n			<div class="error" *ngIf="member.get(\'name\').hasError(\'required\') && member.get(\'name\').touched">\n			Please enter your full name\n			</div>\n		</ion-item>\n-->\n\n		<ion-item>\n		<ion-label fixed style="color: black;">Email</ion-label>\n		<ion-input type="text" value="" placeholder="{{ customer?.cust_email }}"></ion-input>\n		</ion-item>\n<!--\n	formControlName="email"\n		<ion-item no-lines *ngIf="( member.get(\'email\').hasError(\'required\') || member.get(\'email\').hasError(\'email\') ) && member.get(\'email\').touched">\n			<div class="error" *ngIf="member.get(\'email\').hasError(\'required\') && member.get(\'email\').touched">\n				Please enter your email\n			</div>\n    </ion-item>\n    \n-->\n    <ion-item>\n        <ion-label fixed style="color: black;">Date Of Birth : </ion-label>\n        <ion-datetime displayFormat="DD MM YYYY" [(ngModel)]="today" name="dob" placeholder="{{ customer?.cust_dob }}"></ion-datetime>\n        <ion-icon name="calendar" item-right></ion-icon>\n    </ion-item>\n<!--  \n	formControlName="dob"\n    <ion-item no-lines *ngIf="( member.get(\'dob\').hasError(\'minlength\') || member.get(\'dob\').hasError(\'required\') ) && member.get(\'dob\').touched">\n        <div class="error" *ngIf="member.get(\'dob\').hasError(\'required\') && member.get(\'dob\').touched">\n        Please enter your date of birth\n        </div>\n		</ion-item>\n		\n		formControlName="address"\n		formControlName="mob"\n	-->\n	\n		<ion-item>\n			<ion-label fixed style="color: black;">Address</ion-label>\n			<ion-textarea name="address" rows="3" placeholder="{{ customer?.cust_addr }}" required></ion-textarea>\n		</ion-item>\n\n\n		<ion-item>\n			<ion-label fixed style="color: black;">Gender</ion-label>\n			<ion-select [(ngModel)]="gender" name="gen" placeholder="{{ customer?.cust_gen }}">\n				<ion-option value="Male">Male</ion-option>\n				<ion-option value="Female">Female</ion-option>\n			</ion-select>\n		</ion-item>\n\n\n		<ion-item>\n			<ion-label fixed style="color: black;">Mob</ion-label>\n			<ion-input type="text" placeholder="{{ customer?.cust_cntc }}" value="" ></ion-input>\n		</ion-item>\n<!--\n		<ion-item no-lines *ngIf="( member.get(\'mob\').hasError(\'required\') || member.get(\'mob\').hasError(\'minlength\') || member.get(\'mob\').hasError(\'maxlength\'))&& member.get(\'mob\').touched">\n			<div class="error" *ngIf="member.get(\'mob\').hasError(\'required\') && member.get(\'mob\').touched">\n				Please enter your mobile number\n			</div>\n			<div class="error" *ngIf="member.get(\'mob\').hasError(\'minlength\') && member.get(\'mob\').touched">\n				Please enter valid mobile number\n			</div>\n\n			<div class="error" *ngIf="member.get(\'mob\').hasError(\'maxlength\') && member.get(\'mob\').touched">\n				Please enter valid mobile number\n			</div>\n		</ion-item>\n-->\n		<ion-item>\n			<ion-label fixed style="color: black;">Pincode</ion-label>\n			<ion-input type="text" name="pincode" placeholder="{{ customer?.loc_zip }}" required ></ion-input>\n		</ion-item>\n<!--\n	formControlName="address"\n    <ion-item no-lines *ngIf="( member.get(\'address\').hasError(\'minlength\') || member.get(\'address\').hasError(\'required\') ) && member.get(\'address\').touched">\n        <div class="error" *ngIf="member.get(\'address\').hasError(\'required\') && member.get(\'address\').touched">\n        Please enter your address\n        </div>\n    </ion-item>\n-->\n\n<div padding>\n	<button ion-button color="facebook" full (click)="updateProfile()">Update</button>\n</div>\n\n	</form>\n</ion-list>\n</ion-content>\n<!-- [disabled]="member.invalid" -->'/*ion-inline-end:"/root/HomeBiz365/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
        this.member = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            re_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.equalto('password')])
        });
    };
    ChangePasswordPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/change-password/change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Change Password</ion-title>\n\n    <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <form novalidate [formGroup]="member">\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password" value="" formControlName="password"></ion-input>\n              </ion-item>\n          \n              <ion-item no-lines *ngIf="( member.get(\'password\').hasError(\'required\') ) && member.get(\'password\').touched">\n                <div class="error" *ngIf="member.get(\'password\').hasError(\'required\') && member.get(\'password\').touched">\n                Password is required\n                </div>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label floating>Confirm Password</ion-label>\n                <ion-input type="password" value="" formControlName="re_password"></ion-input>\n              </ion-item>\n          \n              <ion-item no-lines *ngIf="( member.get(\'re_password\').hasError(\'equalTo\') || member.get(\'re_password\').hasError(\'required\') ) && member.get(\'re_password\').touched">\n                <div class="error" *ngIf="member.get(\'re_password\').hasError(\'required\') && member.get(\'re_password\').touched">\n                Confirm password is required\n                </div>\n                <div class="error" *ngIf="member.get(\'re_password\').hasError(\'equalTo\') && member.get(\'re_password\').touched">\n                Password Mismatch\n                </div>\n              </ion-item>\n          \n          \n          <div padding>\n              <button ion-button color="facebook" full [disabled]="member.invalid" (click)="newmregister()">Register</button>\n          </div>\n          \n        </form>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_page_tabs_page__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_conference_data__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(navCtrl, http, toastCtrl, userData, loadingCtrl, confData) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.confData = confData;
        this.login = { username: '', password: '' };
        this.submitted = false;
        this.passwordRegex = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})';
    }
    LoginPage.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(4)]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(20)]))
        });
    };
    LoginPage.prototype.userSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    /*
        validateLogin() {
            let data=JSON.stringify({username: this.username, password:this.password});
    
            console.log("Data: "+data);
    
            this.http.post('http://localhost/hb/login/validateLogin.php',data).subscribe(res => {
    */
    /*		let loader = this.loadingCtrl.create({
                content: "Authenticating...",
                duration: 300
            });
            loader.present();
    */
    /*		let toast = this.toastCtrl.create({
              message: 'Welcome '+res.name,
              duration: 4000
            });
            toast.present();
    */
    /*
            console.log(JSON.stringify(res));
            this.userData.login(this.username);
            this.navCtrl.setRoot(TabsPage);
    
        }, () => {
        
            let toast = this.toastCtrl.create({
            message: 'Incorrect Username or Password',
            duration: 4000
            });
            toast.present();
    
        });
            
    
        }
    */
    LoginPage.prototype.validateLogin = function () {
        var _this = this;
        //let data=JSON.stringify({username: this.username, password:this.password});
        this.confData.validateLogin(this.username, this.password).subscribe(function (data) {
            //console.log(JSON.stringify(data));
            if (data) {
                _this.result = data;
                _this.result.forEach(function (value) {
                    _this.userData.login(value.uname);
                    _this.userData.setId(value.cid);
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_page_tabs_page__["a" /* TabsPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Incorrect Username or Password',
                    duration: 4000
                });
                toast.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/login/login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Login</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-center padding>\n\n<!--	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n\n	</div>\n\n-->\n\n\n\n<form novalidate #loginForm="ngForm" [formGroup]="user">\n\n\n\n<ion-item>\n\n<ion-label floating>Username</ion-label>\n\n<ion-input type="text" [(ngModel)]="username" value="" formControlName="name"></ion-input>\n\n</ion-item>\n\n\n\n<ion-item no-lines *ngIf="( user.get(\'name\').hasError(\'minlength\') || user.get(\'name\').hasError(\'required\') ) && user.get(\'name\').touched">\n\n\n\n<div class="error" *ngIf="user.get(\'name\').hasError(\'required\') && user.get(\'name\').touched">\n\nPlease enter your username\n\n</div>\n\n<div class="error" *ngIf="user.get(\'name\').hasError(\'minlength\') && user.get(\'name\').touched">\n\nMinimum of 4 characters\n\n</div>\n\n</ion-item>\n\n\n\n\n\n\n\n<ion-item>\n\n<ion-label floating>Password</ion-label>\n\n<ion-input type="password" [(ngModel)]="password" value="" formControlName="password"></ion-input>\n\n</ion-item>\n\n\n\n<ion-item no-lines *ngIf="( user.get(\'password\').hasError(\'required\') || user.get(\'password\').hasError(\'minlength\') || user.get(\'password\').hasError(\'maxlength\'))&& user.get(\'password\').touched">\n\n\n\n<div class="error" *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched">\n\nPlease enter your password\n\n</div>\n\n<div class="error" *ngIf="user.get(\'password\').hasError(\'minlength\') && user.get(\'password\').touched">\n\nPassword must contain at least 4 characters\n\n</div>\n\n\n\n<div class="error" *ngIf="user.get(\'password\').hasError(\'maxlength\') && user.get(\'password\').touched">\n\nMaximum password length is 20\n\n</div>\n\n</ion-item>\n\n\n\n\n\n<div padding>\n\n<button ion-button full color="facebook" (click)="validateLogin()">Login</button>\n\n</div>\n\n</form>\n\n\n\n<div padding style="padding-top: 40px;">\n\n	<p class="gray" align="center"><b>New to HomeBiz365?</b></p>\n\n	<button ion-button full color="facebook" (click)="userSignup()">Register Now!</button>\n\n</div>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<style type="text/css">\n\n.error\n\n{\n\ncolor:red;\n\nfont-size:12px;\n\n}\n\n</style>\n\n<!--\n\n	[disabled]="user.invalid"\n\n-->'/*ion-inline-end:"/root/HomeBiz365/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__providers_conference_data__["a" /* ConferenceData */]])
    ], LoginPage);
    return LoginPage;
}());

//Validators.pattern(this.passwordRegex) 
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        // passed in array of track names that should be excluded (unchecked)
        //   let excludedTrackNames = this.navParams.data;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Cancel</button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>\n\n      Filter Sessions\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list>\n\n    <ion-list-header>Tracks</ion-list-header>\n\n\n\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n\n      <span item-start class="dot"></span>\n\n      <ion-label>{{track.name}}</ion-label>\n\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n\n      Reset All Filters\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductPage = (function () {
    function ProductPage(navCtrl, navParams, confData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.confData = confData;
        this.today = new Date();
        this.data = [];
        this.products = [];
        this.initialize();
        this.data = this.navParams.get('product');
        this.confData.getProductDetails(this.data.prod_id).subscribe(function (data) {
            _this.products = data;
            _this.products = _this.products.map(function (e) {
                var o = Object.assign({}, e);
                o.quantity = "1";
                return o;
            });
            console.log("Product Details: " + JSON.stringify(_this.products));
            _this.today.setDate(_this.products.lead_time_display);
        });
    }
    ProductPage.prototype.initialize = function () {
        this.timeslots = [
            { "st": "9 AM", "et": "12 PM" },
            { "st": "12 PM", "et": "3 PM" },
            { "st": "3 PM", "et": "6 PM" },
            { "st": "6 AM", "et": "9 PM" },
        ];
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage.prototype.increment = function (ev, product) {
        ev.stopPropagation();
        product.quantity++;
    };
    ProductPage.prototype.decrement = function (ev, product) {
        ev.stopPropagation();
        if (product.quantity > 1)
            product.quantity--;
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/product/product.html"*/'<!--\n  Generated template for the ProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ data.prod_name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="padding-left: 60px;">\n    <img height="80%" width="80%" class="full-image" src="assets/img/products/{{data.prod_img}}"/>\n  </div>\n\n  <div *ngFor="let product of products" style="padding-top: 20px;">\n    \n      <label style="font-size: 18px;">Vendor : </label> \n      <span style="font-size: 16px;"> {{ product.vendor }}\n      {{ product.vend_rating }}<ion-icon name="star"></ion-icon>\n      </span>\n      <br>\n      <label style="font-size: 18px; padding-top: 10px;">Price : </label>\n      <span style="font-size: 16px;">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n        <i class="fa fa-rupee"></i>{{ product.mrp }}/- for {{ product.mrp_for }} {{ product.prod_unit }}\n      </span>\n      <br>\n      <label style="font-size: 18px; padding-top: 10px;">Lead Time : </label>\n      <span style="font-size: 16px;">\n        {{ product.prod_min_time }} Day(s)\n      </span>\n      <br>\n      <label style="font-size: 18px; padding-top: 10px;">Offers : </label>\n      <span style="font-size: 16px;">\n        \n      </span>\n      <br>\n      <label style="font-size: 18px; padding-top: 10px;">Replacement : </label>\n      <span *ngIf="product.prod_replace==\'Y\'"  style="font-size: 16px;">\n        within {{ product.r_within }} Day(s)\n      </span>\n      <span *ngIf="product.prod_replace==\'N\'"  style="font-size: 16px;">\n        No Replacement\n      </span>\n      <br>\n      <label style="font-size: 18px; padding-top: 10px;">Return : </label>\n      <span *ngIf="product.prod_return==\'Y\'"  style="font-size: 16px;">\n        within {{ product.r_within }} Day(s)\n      </span>\n      <span *ngIf="product.prod_replace==\'N\'"  style="font-size: 16px;">\n        No Return\n      </span>\n      <br>\n      <span>\n        \n          <ion-row>\n            <ion-col col-7>\n                <ion-label style="font-size: 18px;">Quantity : </ion-label>\n            </ion-col>\n          \n            <ion-col col-3 style="padding-top: 20px;">\n                <ion-icon name="remove-circle" style="font-size:18px;" (click)="decrement($event,product)"></ion-icon>\n                {{ product.quantity }}\n                <ion-icon name="add-circle" style="font-size:18px;" (click)="increment($event,product)"></ion-icon>\n            </ion-col>\n\n            <ion-col col-2>\n                <p ng-model="total" style="font-size:16px; color:black;"> \n                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n                  <i class="fa fa-rupee"></i>{{ product.mrp*product.quantity }}\n                </p>\n    \n            </ion-col>\n          </ion-row>\n        \n      </span>\n\n\n\n    <div>\n      <ion-item>\n        <ion-label>Required On : </ion-label>\n        <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="today"></ion-datetime>\n        <ion-icon name="calendar" item-right></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Delivery Time : </ion-label>\n        <ion-select [(ngModel)]="time">\n          <ion-option *ngFor="let timeslot of timeslots" [value]="timeslot">{{ timeslot.st }} - {{ timeslot.et }}</ion-option>        </ion-select>\n      </ion-item>\n\n      <div padding>\n        <button ion-button full (click)="addToCart(product,today,time)">Add To Cart</button>\n      </div>\n  \n    </div>\n  </div>  \n\n</ion-content>\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CategoryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryDetailsPage = (function () {
    function CategoryDetailsPage(navCtrl, navParams, viewCtrl, confData, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.confData = confData;
        this.toastCtrl = toastCtrl;
        this.category = [];
        this.categories = [];
        this.product = [];
        this.category = this.navParams.get("category");
        var id = this.category.cat_id;
        var name = this.category.cat_name;
        this.confData.getCategoryDetails(id, name).subscribe(function (data) {
            console.log("Data : " + JSON.stringify(data));
            _this.categories = data;
        });
    }
    CategoryDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryDetailsPage');
    };
    CategoryDetailsPage.prototype.viewProduct = function (product) {
        var _this = this;
        var category = product.cs_name;
        this.confData.getProductByName(category).subscribe(function (data) {
            if (data) {
                _this.product = data;
                console.log("Product: " + JSON.stringify(_this.product));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { product: _this.product, pname: category });
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'No Vendors available right now',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toast.present();
            }
        });
    };
    CategoryDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CategoryDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-category-details',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/category-details/category-details.html"*/'<!--\n  Generated template for the CategoryDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ category.cat_name }}</ion-title>\n  \n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n      <img class="full-image" src="assets/img/products/categories/{{category.cat_img}}"/>\n  </div>\n\n  <ion-list>\n    <button ion-item *ngFor="let category of categories" (click)="viewProduct(category)">\n      {{ category.cs_name }}\n    </button>\n  </ion-list>\n    \n\n</ion-content>\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/category-details/category-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], CategoryDetailsPage);
    return CategoryDetailsPage;
}());

//# sourceMappingURL=category-details.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.today = new Date();
        this.products = [];
        this.initialize();
        this.products = this.navParams.get("product");
        this.pname = this.navParams.get("pname");
        //this.pname = this.products.prod_name;
        this.products = this.products.map(function (e) {
            var o = Object.assign({}, e);
            o.quantity = "1";
            return o;
        });
    }
    ProductDetailsPage.prototype.initialize = function () {
        this.timeslots = [
            { "st": "9 AM", "et": "12 PM" },
            { "st": "12 PM", "et": "3 PM" },
            { "st": "3 PM", "et": "6 PM" },
            { "st": "6 AM", "et": "9 PM" },
        ];
    };
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailsPage');
    };
    ProductDetailsPage.prototype.increment = function (ev, product) {
        ev.stopPropagation();
        product.quantity++;
    };
    ProductDetailsPage.prototype.decrement = function (ev, product) {
        ev.stopPropagation();
        if (product.quantity > 1)
            product.quantity--;
    };
    ProductDetailsPage.prototype.addToCart = function (product, today, time) {
        console.log("Product: " + JSON.stringify(product));
        console.log("Date: " + JSON.stringify(today));
        console.log("Time: " + time);
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-details',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/product-details/product-details.html"*/'<!--\n  Generated template for the ProductDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ pname }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngFor="let product of products" style="padding-top: 20px;">\n\n    <div style="padding-left: 60px;">\n      <img height="80%" width="80%" class="full-image" src="assets/img/products/{{product.prod_img}}"/>\n    </div>  \n    \n    <label style="font-size: 18px;">Vendor : </label> \n    <span style="font-size: 16px;"> {{ product.vendor }}\n    {{ product.vend_rating }}<ion-icon name="star"></ion-icon>\n    </span>\n    <br>\n    <label style="font-size: 18px; padding-top: 10px;">Price : </label>\n    <span style="font-size: 16px;">\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n      <i class="fa fa-rupee"></i>{{ product.mrp }}/- for {{ product.mrp_for }} {{ product.prod_unit }}\n    </span>\n    <br>\n    <label style="font-size: 18px; padding-top: 10px;">Lead Time : </label>\n    <span style="font-size: 16px;">\n      {{ product.prod_min_time }} Day(s)\n    </span>\n    <br>\n    <label style="font-size: 18px; padding-top: 10px;">Offers : </label>\n    <span style="font-size: 16px;">\n      \n    </span>\n    <br>\n    <label style="font-size: 18px; padding-top: 10px;">Replacement : </label>\n    <span *ngIf="product.prod_replace==\'Y\'"  style="font-size: 16px;">\n      within {{ product.r_within }} Day(s)\n    </span>\n    <span *ngIf="product.prod_replace==\'N\'"  style="font-size: 16px;">\n      No Replacement\n    </span>\n    <br>\n    <label style="font-size: 18px; padding-top: 10px;">Return : </label>\n    <span *ngIf="product.prod_return==\'Y\'"  style="font-size: 16px;">\n      within {{ product.r_within }} Day(s)\n    </span>\n    <span *ngIf="product.prod_replace==\'N\'"  style="font-size: 16px;">\n      No Return\n    </span>\n    <br>\n    <span>\n      \n        <ion-row>\n          <ion-col col-7>\n              <ion-label style="font-size: 18px;">Quantity : </ion-label>\n          </ion-col>\n        \n          <ion-col col-3 style="padding-top: 18px;">\n              <ion-icon name="remove-circle" style="font-size:18px;" (click)="decrement($event,product)"></ion-icon>\n              {{ product.quantity }}\n              <ion-icon name="add-circle" style="font-size:18px;" (click)="increment($event,product)"></ion-icon>\n          </ion-col>\n\n          <ion-col col-2>\n              <p ng-model="total" style="font-size:16px; color:black;"> \n                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n                <i class="fa fa-rupee"></i>{{ product.mrp*product.quantity  }}\n              </p>\n  \n          </ion-col>\n        </ion-row>\n      \n    </span>\n\n    <div>\n      <ion-item>\n        <ion-label>Required On : </ion-label>\n        <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="today"></ion-datetime>\n        <ion-icon name="calendar" item-right></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Delivery Time : </ion-label>\n        <ion-select [(ngModel)]="time">\n          <ion-option *ngFor="let timeslot of timeslots" [value]="timeslot">{{ timeslot.st }} - {{ timeslot.et }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <div padding>\n        <button ion-button full (click)="addToCart(product,today,time)">Add To Cart</button>\n      </div>\n  \n    </div>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/product-details/product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n\n      <h2 class="slide-title">\n\n        Welcome to <b>ICA</b>\n\n      </h2>\n\n      <p>\n\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n\n      <h2 class="slide-title" >What is Ionic?</h2>\n\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n\n      <h2 class="slide-title">What is Ionic Pro?</h2>\n\n      <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n\n      <h2 class="slide-title">Ready to Play?</h2>\n\n      <button ion-button icon-end large clear (click)="startApp()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/support/support.html"*/'<ion-header>\n\n\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Support</ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n\n	</div>\n\n\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n\n			</ion-item>\n\n		</ion-list>\n\n\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n\n			Support message is required\n\n		</p>\n\n\n\n		<div padding>\n\n			<button ion-button block type="submit">Submit</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_popover_about_popover__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_map_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_schedule_schedule__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_schedule_filter_schedule_filter__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_session_detail_session_detail__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_speaker_detail_speaker_detail__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_speaker_list_speaker_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_page_tabs_page__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tutorial_tutorial__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_support_support__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_product_product__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_category_details_category_details__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_product_details_product_details__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_about_modal_about_modal__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_faq_faq__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_policies_policies__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_terms_terms__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_profile_profile__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_change_password_change_password__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_conference_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_user_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































//import { RecaptchaModule } from 'ng-recaptcha';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_category_details_category_details__["a" /* CategoryDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_policies_policies__["a" /* PoliciesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_about_modal_about_modal__["a" /* AboutModalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__["RecaptchaModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */], name: 'Map', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_category_details_category_details__["a" /* CategoryDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_policies_policies__["a" /* PoliciesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_about_modal_about_modal__["a" /* AboutModalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_33__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_34__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha__["RecaptchaModule"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.storage.remove('cid');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.setId = function (id) {
        this.storage.set('cid', id);
    };
    ;
    UserData.prototype.getCustId = function () {
        return this.storage.get('cid').then(function (value) {
            return JSON.parse(value);
        });
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_speaker_list_speaker_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_support_support__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Home', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'home' },
            { title: 'Categories', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_12__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'contacts' },
            { title: 'Cart', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */], index: 2, icon: 'cart' },
            { title: 'About', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Logout', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/root/HomeBiz365/src/app/app.template.html"*/'<ion-split-pane>\n\n\n\n  <!-- logged out menu -->\n\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Navigate\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Account\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Contact Us\n\n        </ion-list-header>\n\n        <p style="padding-left: 30px; font-size: 16px;">\n\n          <ion-icon name="mail"></ion-icon> info@homebiz365.in<br />\n\n          <ion-icon name="call"></ion-icon> 9373512915 / 9673006100\n\n        </p>\n\n      \n\n      </ion-list>\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <!-- logged in menu -->\n\n  <ion-menu id="loggedInMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Navigate\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Account\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Tutorial\n\n        </ion-list-header>\n\n        <button ion-item menuClose (click)="openTutorial()">\n\n          <ion-icon item-start name="hammer"></ion-icon>\n\n          Show Tutorial\n\n        </button>\n\n      </ion-list>\n\n\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n\n\n</ion-split-pane>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_15__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.ionViewWillEnter = function () {
    };
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-session-detail',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/session-detail/session-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/session-detail/session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"/root/HomeBiz365/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/speaker-detail/speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/root/HomeBiz365/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabUrlPath="conference-schedule"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Categories" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Cart" tabIcon="cart"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/root/HomeBiz365/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map