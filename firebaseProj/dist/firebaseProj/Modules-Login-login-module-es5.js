function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-Login-login-module"], {
  /***/
  "./src/app/Modules/Login/Pages/LoginPage/login.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Modules/Login/Pages/LoginPage/login.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesLoginPagesLoginPageLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Services/Auth.service */
    "./src/app/Modules/Login/Services/Auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["user"];
    var _c1 = ["pass"];

    function LoginComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please check your password or UserName");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.mandatoryFieldsMissing = true;
        this.authenticationError = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "authenticate",
        value: function authenticate(userFromInput, passFromInput) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var userName, passWord;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    userName = userFromInput.value;
                    passWord = passFromInput.value;
                    this.authService.SignIn(userName, passWord);
                    this.authService.authenticationFailed.subscribe(function (data) {
                      if (data === true) {
                        _this.authenticationError = true;
                      }
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "inputFieldChange",
        value: function inputFieldChange(event) {
          var userValue = this.userInput.nativeElement.value;
          var passValue = this.passInput.nativeElement.value;

          if (userValue && userValue.length > 0 && passValue && passValue.length > 0) {
            this.mandatoryFieldsMissing = false;
          } else {
            this.mandatoryFieldsMissing = true;
          }
        }
      }, {
        key: "googleAuth",
        value: function googleAuth() {
          this.authService.GoogleAuth();
        }
      }, {
        key: "gitHubAuth",
        value: function gitHubAuth() {
          this.authService.GitHubAuth();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.userInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.passInput = _t.first);
        }
      },
      decls: 59,
      vars: 2,
      consts: [[1, "login-wrap"], [1, "login-html"], ["id", "tab-1", "type", "radio", "name", "tab", "checked", "", 1, "sign-in"], ["for", "tab-1", 1, "tab"], ["id", "tab-2", "type", "radio", "name", "tab", 1, "sign-up"], ["for", "tab-2", 1, "tab"], [1, "login-form"], [1, "sign-in-htm"], [1, "group"], ["for", "user", 1, "label"], ["id", "user", "type", "text", 1, "input", 3, "keyup"], ["user", ""], ["for", "pass", 1, "label"], ["id", "pass", "type", "password", "data-type", "password", 1, "input", 3, "keyup"], ["pass", ""], ["id", "check", "type", "checkbox", "checked", "", 1, "check"], ["for", "check"], [1, "icon"], ["type", "submit", "value", "Sign In", 1, "button", 3, "disabled", "click"], ["src", "assets/Images/GoogleAuthenticate.png", 1, "socialBanner", 3, "click"], ["src", "assets/Images/GitHubAuthentication.png", 1, "socialBanner", 3, "click"], ["class", "errorMsg", 4, "ngIf"], [1, "hr"], [1, "foot-lnk"], ["href", "#forgot"], [1, "sign-up-htm"], ["id", "user", "type", "text", 1, "input"], ["id", "pass", "type", "password", "data-type", "password", 1, "input"], ["id", "pass", "type", "text", 1, "input"], ["type", "submit", "value", "Sign Up", 1, "button"], ["for", "tab-1"], [1, "errorMsg"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function LoginComponent_Template_input_keyup_13_listener($event) {
            return ctx.inputFieldChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function LoginComponent_Template_input_keyup_18_listener($event) {
            return ctx.inputFieldChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Keep me Signed in");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            return ctx.authenticate(_r0, _r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_img_click_28_listener() {
            return ctx.googleAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_img_click_29_listener() {
            return ctx.gitHubAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Repeat Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Already Member?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.mandatoryFieldsMissing);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticationError);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6a6f8c;\n  background: #c8c8c8;\n  font: 600 16px/18px 'MyAppFontsRegular', 'Open Sans', sans-serif;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.clearfix[_ngcontent-%COMP%]:after, .clearfix[_ngcontent-%COMP%]:before {\n  content: '';\n  display: table;\n}\n.clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n  display: block;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.login-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  max-width: 525px;\n  min-height: 670px;\n  position: relative;\n  background: url('/assets/Images/bg.jpg') no-repeat center;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  top: 50%;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: MyAppFontsRegular;\n}\n.login-html[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  padding: 90px 70px 50px 70px;\n  background: rgba(40, 57, 101, 0.9);\n}\n.login-html[_ngcontent-%COMP%]   .sign-in-htm[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up-htm[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.4s linear;\n  margin-top: 40px;\n}\n.login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  display: none;\n}\n.login-html[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.login-html[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-right: 15px;\n  padding-bottom: 5px;\n  margin: 0 15px 10px 0;\n  display: inline-block;\n  border-bottom: 2px solid transparent;\n}\n.login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked    + .tab[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked    + .tab[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #1161ee;\n}\n.login-form[_ngcontent-%COMP%] {\n  min-height: 345px;\n  position: relative;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  display: block;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  border: none;\n  padding: 15px 20px;\n  border-radius: 25px;\n  background: rgba(255, 255, 255, 0.1);\n  outline: none;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:disabled, .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:disabled {\n  background: #E1E1e1;\n  color: #333333;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   input[data-type=\"password\"][_ngcontent-%COMP%] {\n  text-security: circle;\n  -webkit-text-security: circle;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 12px;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: #1161ee;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  position: relative;\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.1);\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before, .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\n  content: '';\n  width: 10px;\n  height: 2px;\n  background: #fff;\n  position: absolute;\n  transition: all 0.2s ease-in-out 0s;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\n  left: 3px;\n  width: 5px;\n  bottom: 6px;\n  transform: scale(0) rotate(0);\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\n  top: 6px;\n  right: 0;\n  transform: scale(0) rotate(0);\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #1161ee;\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\n  transform: scale(1) rotate(45deg);\n}\n.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\n  transform: scale(1) rotate(-45deg);\n}\n.login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked    + .tab[_ngcontent-%COMP%]    + .sign-up[_ngcontent-%COMP%]    + .tab[_ngcontent-%COMP%]    + .login-form[_ngcontent-%COMP%]   .sign-in-htm[_ngcontent-%COMP%] {\n  transform: rotate(0);\n}\n.login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked    + .tab[_ngcontent-%COMP%]    + .login-form[_ngcontent-%COMP%]   .sign-up-htm[_ngcontent-%COMP%] {\n  transform: rotate(0);\n}\n.hr[_ngcontent-%COMP%] {\n  height: 2px;\n  margin: 60px 0 50px 0;\n  background: rgba(255, 255, 255, 0.2);\n}\n.foot-lnk[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.errorMsg[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  color: red;\n}\n.socialBanner[_ngcontent-%COMP%] {\n  width: CALC(50% - 5px);\n  margin-top: 20px;\n  margin-right: 5px;\n}\n.socialBanner[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Nb2R1bGVzL0xvZ2luL1BhZ2VzL0xvZ2luUGFnZS9DOi9HaWwvUHJvai9maXJlYmFzZVByb2ovc3JjL2FwcC9Nb2R1bGVzL0xvZ2luL1BhZ2VzL0xvZ2luUGFnZS9sb2dpbi5jb21wb25lbnQubGVzcyIsImFwcC9Nb2R1bGVzL0xvZ2luL1BhZ2VzL0xvZ2luUGFnZS9sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDRyxnRUFBQTtBQ0NKO0FEQ0E7OztFQUFpQixzQkFBQTtBQ0lqQjtBREhBOztFQUFpQyxXQUFBO0VBQVcsY0FBQTtBQ1E1QztBRFBBO0VBQWdCLFdBQUE7RUFBVyxjQUFBO0FDVzNCO0FEVkE7RUFBRSxjQUFBO0VBQWMscUJBQUE7QUNjaEI7QURaQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseURBQUE7RUFDRyxnRkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDY0o7QURaQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDY0Q7QURaQTs7RUFFQyxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDRywyQkFBQTtFQUNBLGdCQUFBO0FDY0o7QURaQTs7O0VBR0MsYUFBQTtBQ2NEO0FEWkE7OztFQUdDLHlCQUFBO0FDY0Q7QURaQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDY0Q7QURaQTs7RUFFQyxXQUFBO0VBQ0EscUJBQUE7QUNjRDtBRFpBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNjRDtBRFpBO0VBQ0MsbUJBQUE7QUNjRDtBRFpBOzs7RUFHQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNjRDtBRFpBOztFQUVDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0csb0NBQUE7RUFDQSxhQUFBO0FDY0o7QURiSTs7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNnQlI7QURiQTtFQUNDLHFCQUFBO0VBQ0EsNkJBQUE7QUNlRDtBRGJBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUNlRDtBRGJBO0VBQ0MsbUJBQUE7QUNlRDtBRGJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ2VEO0FEYkE7O0VBRUMsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FDZUQ7QURiQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDZUQ7QURiQTtFQUNDLFFBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7QUNlRDtBRGJBO0VBQ0MsV0FBQTtBQ2VEO0FEYkE7RUFDQyxtQkFBQTtBQ2VEO0FEYkE7RUFDQyxpQ0FBQTtBQ2VEO0FEYkE7RUFDQyxrQ0FBQTtBQ2VEO0FEYkE7RUFDQyxvQkFBQTtBQ2VEO0FEYkE7RUFDQyxvQkFBQTtBQ2VEO0FEWkE7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ2NEO0FEWkE7RUFDQyxrQkFBQTtBQ2NEO0FEWEE7RUFDQyxrQkFBQTtFQUNHLGdCQUFBO0VBQ0EsVUFBQTtBQ2FKO0FEVkE7RUFDQyxzQkFBQTtFQUNHLGdCQUFBO0VBQ0EsaUJBQUE7QUNZSjtBRFhDO0VBQ0MsZUFBQTtBQ2FGIiwiZmlsZSI6ImFwcC9Nb2R1bGVzL0xvZ2luL1BhZ2VzL0xvZ2luUGFnZS9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG5cdG1hcmdpbjowO1xuXHRjb2xvcjojNmE2ZjhjO1xuXHRiYWNrZ3JvdW5kOiNjOGM4Yzg7XG4gICAgZm9udDo2MDAgMTZweC8xOHB4ICdNeUFwcEZvbnRzUmVndWxhcicsJ09wZW4gU2Fucycsc2Fucy1zZXJpZjtcbn1cbiosOmFmdGVyLDpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94fVxuLmNsZWFyZml4OmFmdGVyLC5jbGVhcmZpeDpiZWZvcmV7Y29udGVudDonJztkaXNwbGF5OnRhYmxlfVxuLmNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGg7ZGlzcGxheTpibG9ja31cbmF7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZX1cblxuLmxvZ2luLXdyYXB7XG5cdHdpZHRoOjEwMCU7XG5cdG1hcmdpbjphdXRvO1xuXHRtYXgtd2lkdGg6NTI1cHg7XG5cdG1pbi1oZWlnaHQ6NjcwcHg7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRiYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9JbWFnZXMvYmcuanBnJykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OjAgMTJweCAxNXB4IDAgcmdiYSgwLDAsMCwuMjQpLDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwuMTkpO1xuICAgIHRvcDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgZm9udC1mYW1pbHk6IE15QXBwRm9udHNSZWd1bGFyO1xufVxuLmxvZ2luLWh0bWx7XG5cdHdpZHRoOjEwMCU7XG5cdGhlaWdodDoxMDAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0cGFkZGluZzo5MHB4IDcwcHggNTBweCA3MHB4O1xuXHRiYWNrZ3JvdW5kOnJnYmEoNDAsNTcsMTAxLC45KTtcbn1cbi5sb2dpbi1odG1sIC5zaWduLWluLWh0bSxcbi5sb2dpbi1odG1sIC5zaWduLXVwLWh0bXtcblx0dG9wOjA7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6MDtcblx0Ym90dG9tOjA7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xuXHRiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOmFsbCAuNHMgbGluZWFyO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubG9naW4taHRtbCAuc2lnbi1pbixcbi5sb2dpbi1odG1sIC5zaWduLXVwLFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVja3tcblx0ZGlzcGxheTpub25lO1xufVxuLmxvZ2luLWh0bWwgLnRhYixcbi5sb2dpbi1mb3JtIC5ncm91cCAubGFiZWwsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmJ1dHRvbntcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xufVxuLmxvZ2luLWh0bWwgLnRhYntcblx0Zm9udC1zaXplOjIycHg7XG5cdG1hcmdpbi1yaWdodDoxNXB4O1xuXHRwYWRkaW5nLWJvdHRvbTo1cHg7XG5cdG1hcmdpbjowIDE1cHggMTBweCAwO1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0Ym9yZGVyLWJvdHRvbToycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubG9naW4taHRtbCAuc2lnbi1pbjpjaGVja2VkICsgLnRhYixcbi5sb2dpbi1odG1sIC5zaWduLXVwOmNoZWNrZWQgKyAudGFie1xuXHRjb2xvcjojZmZmO1xuXHRib3JkZXItY29sb3I6IzExNjFlZTtcbn1cbi5sb2dpbi1mb3Jte1xuXHRtaW4taGVpZ2h0OjM0NXB4O1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0cGVyc3BlY3RpdmU6MTAwMHB4O1xuXHR0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXB7XG5cdG1hcmdpbi1ib3R0b206MTVweDtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAubGFiZWwsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmlucHV0LFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b257XG5cdHdpZHRoOjEwMCU7XG5cdGNvbG9yOiNmZmY7XG5cdGRpc3BsYXk6YmxvY2s7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmlucHV0LFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b257XG5cdGJvcmRlcjpub25lO1xuXHRwYWRkaW5nOjE1cHggMjBweDtcblx0Ym9yZGVyLXJhZGl1czoyNXB4O1xuICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOmRpc2FibGVke1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTFFMWUxO1xuICAgICAgICBjb2xvcjojMzMzMzMzXG4gICAgfVxufVxuLmxvZ2luLWZvcm0gLmdyb3VwIGlucHV0W2RhdGEtdHlwZT1cInBhc3N3b3JkXCJde1xuXHR0ZXh0LXNlY3VyaXR5OmNpcmNsZTtcblx0LXdlYmtpdC10ZXh0LXNlY3VyaXR5OmNpcmNsZTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAubGFiZWx7XG5cdGNvbG9yOiNhYWE7XG5cdGZvbnQtc2l6ZToxMnB4O1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b257XG5cdGJhY2tncm91bmQ6IzExNjFlZTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCBsYWJlbCAuaWNvbntcblx0d2lkdGg6MTVweDtcblx0aGVpZ2h0OjE1cHg7XG5cdGJvcmRlci1yYWRpdXM6MnB4O1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMSk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb246YmVmb3JlLFxuLmxvZ2luLWZvcm0gLmdyb3VwIGxhYmVsIC5pY29uOmFmdGVye1xuXHRjb250ZW50OicnO1xuXHR3aWR0aDoxMHB4O1xuXHRoZWlnaHQ6MnB4O1xuXHRiYWNrZ3JvdW5kOiNmZmY7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1pbi1vdXQgMHM7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb246YmVmb3Jle1xuXHRsZWZ0OjNweDtcblx0d2lkdGg6NXB4O1xuXHRib3R0b206NnB4O1xuXHR0cmFuc2Zvcm06c2NhbGUoMCkgcm90YXRlKDApO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIGxhYmVsIC5pY29uOmFmdGVye1xuXHR0b3A6NnB4O1xuXHRyaWdodDowO1xuXHR0cmFuc2Zvcm06c2NhbGUoMCkgcm90YXRlKDApO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWx7XG5cdGNvbG9yOiNmZmY7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmNoZWNrOmNoZWNrZWQgKyBsYWJlbCAuaWNvbntcblx0YmFja2dyb3VuZDojMTE2MWVlO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb246YmVmb3Jle1xuXHR0cmFuc2Zvcm06c2NhbGUoMSkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCArIGxhYmVsIC5pY29uOmFmdGVye1xuXHR0cmFuc2Zvcm06c2NhbGUoMSkgcm90YXRlKC00NWRlZyk7XG59XG4ubG9naW4taHRtbCAuc2lnbi1pbjpjaGVja2VkICsgLnRhYiArIC5zaWduLXVwICsgLnRhYiArIC5sb2dpbi1mb3JtIC5zaWduLWluLWh0bXtcblx0dHJhbnNmb3JtOnJvdGF0ZSgwKTtcbn1cbi5sb2dpbi1odG1sIC5zaWduLXVwOmNoZWNrZWQgKyAudGFiICsgLmxvZ2luLWZvcm0gLnNpZ24tdXAtaHRte1xuXHR0cmFuc2Zvcm06cm90YXRlKDApO1xufVxuXG4uaHJ7XG5cdGhlaWdodDoycHg7XG5cdG1hcmdpbjo2MHB4IDAgNTBweCAwO1xuXHRiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjIpO1xufVxuLmZvb3QtbG5re1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmVycm9yTXNne1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uc29jaWFsQmFubmVye1xuXHR3aWR0aDogQ0FMQyh+JzUwJSAtIDVweCcpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cdCY6aG92ZXJ7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG59IiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2YTZmOGM7XG4gIGJhY2tncm91bmQ6ICNjOGM4Yzg7XG4gIGZvbnQ6IDYwMCAxNnB4LzE4cHggJ015QXBwRm9udHNSZWd1bGFyJywgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG4qLFxuOmFmdGVyLFxuOmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2xlYXJmaXg6YWZ0ZXIsXG4uY2xlYXJmaXg6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubG9naW4td3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTI1cHg7XG4gIG1pbi1oZWlnaHQ6IDY3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9JbWFnZXMvYmcuanBnJykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIHRvcDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiBNeUFwcEZvbnRzUmVndWxhcjtcbn1cbi5sb2dpbi1odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA5MHB4IDcwcHggNTBweCA3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA1NywgMTAxLCAwLjkpO1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW4taHRtLFxuLmxvZ2luLWh0bWwgLnNpZ24tdXAtaHRtIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5sb2dpbi1odG1sIC5zaWduLWluLFxuLmxvZ2luLWh0bWwgLnNpZ24tdXAsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmNoZWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dpbi1odG1sIC50YWIsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmxhYmVsLFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmxvZ2luLWh0bWwgLnRhYiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDAgMTVweCAxMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW46Y2hlY2tlZCArIC50YWIsXG4ubG9naW4taHRtbCAuc2lnbi11cDpjaGVja2VkICsgLnRhYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMxMTYxZWU7XG59XG4ubG9naW4tZm9ybSB7XG4gIG1pbi1oZWlnaHQ6IDM0NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5sYWJlbCxcbi5sb2dpbi1mb3JtIC5ncm91cCAuaW5wdXQsXG4ubG9naW4tZm9ybSAuZ3JvdXAgLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmlucHV0LFxuLmxvZ2luLWZvcm0gLmdyb3VwIC5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5pbnB1dDpkaXNhYmxlZCxcbi5sb2dpbi1mb3JtIC5ncm91cCAuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI0UxRTFlMTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgaW5wdXRbZGF0YS10eXBlPVwicGFzc3dvcmRcIl0ge1xuICB0ZXh0LXNlY3VyaXR5OiBjaXJjbGU7XG4gIC13ZWJraXQtdGV4dC1zZWN1cml0eTogY2lyY2xlO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5sYWJlbCB7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxMTYxZWU7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb24ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgbGFiZWwgLmljb246YmVmb3JlLFxuLmxvZ2luLWZvcm0gLmdyb3VwIGxhYmVsIC5pY29uOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCBsYWJlbCAuaWNvbjpiZWZvcmUge1xuICBsZWZ0OiAzcHg7XG4gIHdpZHRoOiA1cHg7XG4gIGJvdHRvbTogNnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwKTtcbn1cbi5sb2dpbi1mb3JtIC5ncm91cCBsYWJlbCAuaWNvbjphZnRlciB7XG4gIHRvcDogNnB4O1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMCk7XG59XG4ubG9naW4tZm9ybSAuZ3JvdXAgLmNoZWNrOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjMTE2MWVlO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb246YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNDVkZWcpO1xufVxuLmxvZ2luLWZvcm0gLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb246YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgtNDVkZWcpO1xufVxuLmxvZ2luLWh0bWwgLnNpZ24taW46Y2hlY2tlZCArIC50YWIgKyAuc2lnbi11cCArIC50YWIgKyAubG9naW4tZm9ybSAuc2lnbi1pbi1odG0ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cbi5sb2dpbi1odG1sIC5zaWduLXVwOmNoZWNrZWQgKyAudGFiICsgLmxvZ2luLWZvcm0gLnNpZ24tdXAtaHRtIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG4uaHIge1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luOiA2MHB4IDAgNTBweCAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uZm9vdC1sbmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXJyb3JNc2cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG4uc29jaWFsQmFubmVyIHtcbiAgd2lkdGg6IENBTEMoNTAlIC0gNXB4KTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uc29jaWFsQmFubmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.less']
        }]
      }], function () {
        return [{
          type: _Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, {
        userInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['user']
        }],
        passInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['pass']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Modules/Login/Services/Auth.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/Modules/Login/Services/Auth.service.ts ***!
    \********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppModulesLoginServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase auth service
      router, ngZone // NgZone service to remove outside scope warning
      ) {
        var _this2 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.authenticationFailed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this2.userData = user;
            localStorage.setItem('user', JSON.stringify(_this2.userData));
            JSON.parse(localStorage.getItem('user'));
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      } // Sign in with email/password


      _createClass(AuthService, [{
        key: "SignIn",
        value: function SignIn(email, password) {
          var _this3 = this;

          this.afAuth.signInWithEmailAndPassword(email, password).then(function (result) {
            _this3.ngZone.run(function () {
              _this3.router.navigate(['dashboard']);
            });

            _this3.SetUserData(result.user);

            return true;
          })["catch"](function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            _this3.authenticationFailed.next(true);
          });
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          var _this4 = this;

          return this.afAuth.createUserWithEmailAndPassword(email, password).then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            // this.SendVerificationMail();
            _this4.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Reset Forggot password

      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(passwordResetEmail) {
          return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(function () {
            window.alert('Password reset email sent, check your inbox.');
          })["catch"](function (error) {
            window.alert(error);
          });
        } // Returns true when user is looged in and email is verified

      }, {
        key: "GoogleAuth",
        // Sign in with Google
        value: function GoogleAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
        }
      }, {
        key: "GitHubAuth",
        value: function GitHubAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GithubAuthProvider());
        } // Auth logic to run auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          var _this5 = this;

          return this.afAuth.signInWithPopup(provider).then(function (result) {
            _this5.ngZone.run(function () {
              _this5.router.navigate(['dashboard']);
            });

            _this5.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error);
          });
        }
        /* Setting up user data when sign in with username/password,
        sign up with username/password and sign in with social auth
        provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
          };
          return userRef.set(userData, {
            merge: true
          });
        } // Sign out 

      }, {
        key: "SignOut",
        value: function SignOut() {
          var _this6 = this;

          return this.afAuth.signOut().then(function () {
            localStorage.removeItem('user');

            _this6.router.navigate(['sign-in']);
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user !== null && user.emailVerified !== false ? true : false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Modules/Login/login-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Modules/Login/login-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppModulesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Pages_LoginPage_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Pages/LoginPage/login.component */
    "./src/app/Modules/Login/Pages/LoginPage/login.component.ts");

    var routes = [{
      path: '',
      component: _Pages_LoginPage_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
    LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginRoutingModule_Factory(t) {
        return new (t || LoginRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Modules/Login/login.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/Modules/Login/login.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppModulesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/Modules/Login/login-routing.module.ts");
    /* harmony import */


    var _Pages_LoginPage_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Pages/LoginPage/login.component */
    "./src/app/Modules/Login/Pages/LoginPage/login.component.ts");
    /* harmony import */


    var _Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Services/Auth.service */
    "./src/app/Modules/Login/Services/Auth.service.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
    LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginModule_Factory(t) {
        return new (t || LoginModule)();
      },
      providers: [_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
        declarations: [_Pages_LoginPage_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_Pages_LoginPage_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"]],
          providers: [_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Modules-Login-login-module-es5.js.map