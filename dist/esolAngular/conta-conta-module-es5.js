(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conta-conta-module"], {
    /***/
    "4pFF":
    /*!**********************************************!*\
      !*** ./src/app/conta/conta.app.component.ts ***!
      \**********************************************/

    /*! exports provided: ContaAppComponent */

    /***/
    function pFF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContaAppComponent", function () {
        return ContaAppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var ContaAppComponent = /*#__PURE__*/_createClass(function ContaAppComponent() {
        _classCallCheck(this, ContaAppComponent);
      });

      ContaAppComponent.ɵfac = function ContaAppComponent_Factory(t) {
        return new (t || ContaAppComponent)();
      };

      ContaAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContaAppComponent,
        selectors: [["conta-app-root"]],
        decls: 1,
        vars: 0,
        template: function ContaAppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContaAppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'conta-app-root',
            template: '<router-outlet></router-outlet>'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "9cCN":
    /*!***************************************!*\
      !*** ./src/app/conta/conta.module.ts ***!
      \***************************************/

    /*! exports provided: ContaModule */

    /***/
    function cCN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContaModule", function () {
        return ContaModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _conta_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./conta.route */
      "GXUH");
      /* harmony import */


      var _conta_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./conta.app.component */
      "4pFF");
      /* harmony import */


      var _services_conta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/conta.service */
      "9l1t"); //import { LoginComponent } from './login/login.component';
      //import { ContaGuard } from './models/conta.guard';


      var ContaModule = /*#__PURE__*/_createClass(function ContaModule() {
        _classCallCheck(this, ContaModule);
      });

      ContaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ContaModule
      });
      ContaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ContaModule_Factory(t) {
          return new (t || ContaModule)();
        },
        providers: [_services_conta_service__WEBPACK_IMPORTED_MODULE_7__["ContaService"] // ContaGuard
        ],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _conta_route__WEBPACK_IMPORTED_MODULE_5__["ContaRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContaModule, {
          declarations: [_conta_app_component__WEBPACK_IMPORTED_MODULE_6__["ContaAppComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _conta_route__WEBPACK_IMPORTED_MODULE_5__["ContaRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_conta_app_component__WEBPACK_IMPORTED_MODULE_6__["ContaAppComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _conta_route__WEBPACK_IMPORTED_MODULE_5__["ContaRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [_services_conta_service__WEBPACK_IMPORTED_MODULE_7__["ContaService"] // ContaGuard
            ]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "9l1t":
    /*!*************************************************!*\
      !*** ./src/app/conta/services/conta.service.ts ***!
      \*************************************************/

    /*! exports provided: ContaService */

    /***/
    function l1t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContaService", function () {
        return ContaService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var ContaService = /*#__PURE__*/function (_src_app_services_bas) {
        _inherits(ContaService, _src_app_services_bas);

        var _super = _createSuper(ContaService);

        function ContaService(http) {
          var _this;

          _classCallCheck(this, ContaService);

          _this = _super.call(this);
          _this.http = http;
          return _this;
        } // registrarUsuario(usuario: Usuario): Observable<Usuario> {
        //     let response = this.http
        //         .post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
        //         .pipe(
        //             map(this.extractData),
        //             catchError(this.serviceError));
        //     return response;
        // }


        _createClass(ContaService, [{
          key: "login",
          value: function login(usuario) {
            //console.log(usuario);
            var response = this.http.post(this.UrlServiceV1 + "/conta/autenticar/", usuario, this.ObterHeaderJson()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.serviceError));
            return response;
          }
        }]);

        return ContaService;
      }(src_app_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

      ContaService.ɵfac = function ContaService_Factory(t) {
        return new (t || ContaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ContaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ContaService,
        factory: ContaService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContaService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GXUH":
    /*!**************************************!*\
      !*** ./src/app/conta/conta.route.ts ***!
      \**************************************/

    /*! exports provided: ContaRoutingModule */

    /***/
    function GXUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContaRoutingModule", function () {
        return ContaRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _conta_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./conta.app.component */
      "4pFF");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "K3Fv");

      var contaRouterConfig = [{
        path: '',
        component: _conta_app_component__WEBPACK_IMPORTED_MODULE_2__["ContaAppComponent"],
        children: [{
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
        }]
      }];

      var ContaRoutingModule = /*#__PURE__*/_createClass(function ContaRoutingModule() {
        _classCallCheck(this, ContaRoutingModule);
      });

      ContaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ContaRoutingModule
      });
      ContaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ContaRoutingModule_Factory(t) {
          return new (t || ContaRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(contaRouterConfig)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContaRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContaRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(contaRouterConfig)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "K3Fv":
    /*!************************************************!*\
      !*** ./src/app/conta/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function K3Fv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_utils_generic_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/generic-form-validation */
      "cES+");
      /* harmony import */


      var _services_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/conta.service */
      "9l1t");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, contaService, router, toastr) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.contaService = contaService;
          this.router = router;
          this.toastr = toastr;
          this.displayMessage = {};
          this.errors = [];
          this.validationMessages = {
            username: {
              required: 'Informe o usuário'
            },
            password: {
              required: 'Informe a senha'
            }
          };
          this.genericValidator = new src_app_utils_generic_form_validation__WEBPACK_IMPORTED_MODULE_3__["GenericValidator"](this.validationMessages);
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.fb.group({
              username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            var controlBlurs = this.formInputElements.map(function (formControl) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(formControl.nativeElement, 'blur');
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(controlBlurs)).subscribe(function () {
              _this2.displayMessage = _this2.genericValidator.processarMensagens(_this2.loginForm);
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this3 = this;

            if (this.loginForm.dirty && this.loginForm.valid) {
              this.usuario = Object.assign({}, this.usuario, this.loginForm.value); //console.log(this.usuario);

              this.contaService.login(this.usuario).subscribe(function (sucesso) {
                _this3.processarSucesso(sucesso, _this3.usuario);
              }, function (falha) {
                _this3.processarFalha(falha);
              });
            }
          }
        }, {
          key: "processarSucesso",
          value: function processarSucesso(response, usuario) {
            var _this4 = this;

            this.loginForm.reset();
            this.errors = []; //console.log('response: ', response);

            this.contaService.LocalStorage.salvarDadosLocaisUsuario(response, this.usuario);
            var toast = this.toastr.success('Registro realizado com sucesso', 'Bem vindo!!!');

            if (toast) {
              toast.onHidden.subscribe(function () {
                _this4.router.navigate(['/home']);
              });
            }

            this.toastr.success('Login realizado com sucesso!', 'Bem Vindo!');
            this.router.navigate(['/home']);
          }
        }, {
          key: "processarFalha",
          value: function processarFalha(fail) {
            //console.log(fail.error.Message);
            this.errors = fail.error.Message.split('\r\n');
            this.toastr.error('Ocorreu um erro!', 'Opa :(');
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_conta_service__WEBPACK_IMPORTED_MODULE_4__["ContaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        viewQuery: function LoginComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
          }
        },
        decls: 22,
        vars: 0,
        consts: [[1, "container", "main-container"], ["novalidate", "", 3, "ngSubmit"], [1, "form-group"], [1, "col-md-2", "control-label"], [1, "col-md-10"], ["id", "username", "type", "text", "placeholder", "Usu\xE1rio (requerido)", "formControlName", "username", 1, "form-control"], ["id", "password", "type", "password", "placeholder", "Senha (requerido)", "formControlName", "password", 1, "form-control"], [1, "col-md-4", "col-md-offset-2"], ["id", "Login", "type", "submit", 1, "btn", "btn-success"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Entre na sua conta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Usu\xE1rio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Senha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_conta_service__WEBPACK_IMPORTED_MODULE_4__["ContaService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
          }];
        }, {
          formInputElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "cES+":
    /*!**************************************************!*\
      !*** ./src/app/utils/generic-form-validation.ts ***!
      \**************************************************/

    /*! exports provided: GenericValidator */

    /***/
    function cES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericValidator", function () {
        return GenericValidator;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var GenericValidator = /*#__PURE__*/function () {
        function GenericValidator(validationMessages) {
          _classCallCheck(this, GenericValidator);

          this.validationMessages = validationMessages;
        }

        _createClass(GenericValidator, [{
          key: "processarMensagens",
          value: function processarMensagens(container) {
            var _this5 = this;

            var messages = {};

            var _loop = function _loop(controlKey) {
              if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];

                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                  var childMessages = _this5.processarMensagens(c);

                  Object.assign(messages, childMessages);
                } else {
                  if (_this5.validationMessages[controlKey]) {
                    messages[controlKey] = '';

                    if ((c.dirty || c.touched) && c.errors) {
                      Object.keys(c.errors).map(function (messageKey) {
                        if (_this5.validationMessages[controlKey][messageKey]) {
                          messages[controlKey] += _this5.validationMessages[controlKey][messageKey] + '<br />';
                        }
                      });
                    }
                  }
                }
              }
            };

            for (var controlKey in container.controls) {
              _loop(controlKey);
            }

            return messages;
          }
        }]);

        return GenericValidator;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=conta-conta-module-es5.js.map