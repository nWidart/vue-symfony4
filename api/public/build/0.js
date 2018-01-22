webpackJsonp([0],{

/***/ "./assets/utils/validate.js":
/*!**********************************!*\
  !*** ./assets/utils/validate.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isvalidUsername = isvalidUsername;
exports.validateURL = validateURL;
exports.validateLowerCase = validateLowerCase;
exports.validateUpperCase = validateUpperCase;
exports.validatAlphabets = validatAlphabets;
/**
 * Created by jiachenpan on 16/11/18.
 */

function isvalidUsername(str) {
  var valid_map = ['admin', 'editor'];
  return valid_map.indexOf(str.trim()) >= 0;
}

/* 合法uri*/
function validateURL(textval) {
  var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母*/
function validateLowerCase(str) {
  var reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母*/
function validateUpperCase(str) {
  var reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
function validatAlphabets(str) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/***/ }),

/***/ "./assets/views/login/index.vue":
/*!**************************************!*\
  !*** ./assets/views/login/index.vue ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(/*! !babel-loader?{"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/views/login/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4033230d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4033230d","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4033230d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/views/login/index.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader?sourceMap!css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-4033230d","scoped":false,"hasInlineConfig":false}!resolve-url-loader?{"sourceMap":true}!sass-loader?{"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js?sourceMap!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4033230d\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/views/login/index.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4033230d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/views/login/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4033230d", Component.options)
  } else {
    hotAPI.reload("data-v-4033230d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/views/login/index.vue":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./assets/views/login/index.vue ***!
  \************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validate = __webpack_require__(/*! ../../utils/validate */ "./assets/utils/validate.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'login',
  data: function data() {
    var validateUsername = function validateUsername(rule, value, callback) {
      if (!(0, _validate.isvalidUsername)(value)) {
        callback(new Error('请输入正确的用户名'));
      } else {
        callback();
      }
    };
    var validatePass = function validatePass(rule, value, callback) {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    };
  },

  methods: {
    showPwd: function showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = '';
      } else {
        this.pwdType = 'password';
      }
    },
    handleLogin: function handleLogin() {
      var _this = this;

      this.$refs.loginForm.validate(function (valid) {
        if (valid) {
          _this.loading = true;
          _this.$store.dispatch('Login', _this.loginForm).then(function () {
            _this.loading = false;
            _this.$router.push({ path: '/' });
          }).catch(function () {
            _this.loading = false;
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4033230d\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/views/login/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4033230d","scoped":false,"hasInlineConfig":false}!./node_modules/resolve-url-loader?{"sourceMap":true}!./node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/views/login/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "\n.login-container {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n}\n.login-container input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;\n  -webkit-text-fill-color: #fff !important;\n}\n.login-container input {\n  background: transparent;\n  border: 0px;\n  -webkit-appearance: none;\n  border-radius: 0px;\n  padding: 12px 5px 12px 15px;\n  color: #eee;\n  height: 47px;\n}\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.login-container .tips {\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.login-container .svg-container {\n  padding: 6px 5px 6px 15px;\n  color: #889aa4;\n  vertical-align: middle;\n  width: 30px;\n  display: inline-block;\n}\n.login-container .svg-container_login {\n  font-size: 20px;\n}\n.login-container .title {\n  font-size: 26px;\n  font-weight: 400;\n  color: #eee;\n  margin: 0px auto 40px auto;\n  text-align: center;\n  font-weight: bold;\n}\n.login-container .login-form {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 400px;\n  padding: 35px 35px 15px 35px;\n  margin: 120px auto;\n}\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #454545;\n}\n.login-container .show-pwd {\n  position: absolute;\n  right: 10px;\n  top: 7px;\n  font-size: 16px;\n  color: #889aa4;\n  cursor: pointer;\n  user-select: none;\n}\n.login-container .thirdparty-button {\n  position: absolute;\n  right: 35px;\n  bottom: 28px;\n}\n\n", "", {"version":3,"sources":["/Users/nicolaswidart/Sites/Playground/vuesf/assets/views/login/index.vue","/Users/nicolaswidart/Sites/Playground/vuesf/assets/views/login/index.vue"],"names":[],"mappings":";AAmGA;EACE,gBAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;CClGD;AD8FD;EAMI,4DAAA;EACA,yCAAA;CChGH;ADkGC;EACE,wBAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;CC/FH;ADiGC;EACE,sBAAA;EACA,aAAA;EACA,WAAA;CC9FH;ADyED;EAwBI,gBAAA;EACA,YAAA;EACA,oBAAA;CC7FH;AD+FC;EACE,0BAAA;EACA,eAAA;EACA,uBAAA;EACA,YAAA;EACA,sBAAA;CC5FH;AD2DD;EAmCM,gBAAA;CC1FL;ADuDD;EAuCI,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;CC1FH;AD4FC;EACE,mBAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;CCzFH;ADqCD;EAuDI,2CAAA;EACA,+BAAA;EACA,mBAAA;EACA,eAAA;CCxFH;AD8BD;EA6DI,mBAAA;EACA,YAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;CCvFH;ADoBD;EAsEI,mBAAA;EACA,YAAA;EACA,aAAA;CCtFH","file":"index.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$bg:#2d3a4b;\n$dark_gray:#889aa4;\n$light_gray:#eee;\n\n.login-container {\n  position: fixed;\n  height: 100%;\n  width:100%;\n  background-color: $bg;\n  input:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;\n    -webkit-text-fill-color: #fff !important;\n  }\n  input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: $light_gray;\n    height: 47px;\n  }\n  .el-input {\n    display: inline-block;\n    height: 47px;\n    width: 85%;\n  }\n  .tips {\n    font-size: 14px;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .svg-container {\n    padding: 6px 5px 6px 15px;\n    color: $dark_gray;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n    &_login {\n      font-size: 20px;\n    }\n  }\n  .title {\n    font-size: 26px;\n    font-weight: 400;\n    color: $light_gray;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n  }\n  .login-form {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 400px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n  }\n  .el-form-item {\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    color: #454545;\n  }\n  .show-pwd {\n    position: absolute;\n    right: 10px;\n    top: 7px;\n    font-size: 16px;\n    color: $dark_gray;\n    cursor: pointer;\n    user-select:none;\n  }\n  .thirdparty-button{\n    position: absolute;\n    right: 35px;\n    bottom: 28px;\n  }\n}\n",".login-container {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n}\n\n.login-container input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;\n  -webkit-text-fill-color: #fff !important;\n}\n\n.login-container input {\n  background: transparent;\n  border: 0px;\n  -webkit-appearance: none;\n  border-radius: 0px;\n  padding: 12px 5px 12px 15px;\n  color: #eee;\n  height: 47px;\n}\n\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n\n.login-container .tips {\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 10px;\n}\n\n.login-container .svg-container {\n  padding: 6px 5px 6px 15px;\n  color: #889aa4;\n  vertical-align: middle;\n  width: 30px;\n  display: inline-block;\n}\n\n.login-container .svg-container_login {\n  font-size: 20px;\n}\n\n.login-container .title {\n  font-size: 26px;\n  font-weight: 400;\n  color: #eee;\n  margin: 0px auto 40px auto;\n  text-align: center;\n  font-weight: bold;\n}\n\n.login-container .login-form {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 400px;\n  padding: 35px 35px 15px 35px;\n  margin: 120px auto;\n}\n\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #454545;\n}\n\n.login-container .show-pwd {\n  position: absolute;\n  right: 10px;\n  top: 7px;\n  font-size: 16px;\n  color: #889aa4;\n  cursor: pointer;\n  user-select: none;\n}\n\n.login-container .thirdparty-button {\n  position: absolute;\n  right: 35px;\n  bottom: 28px;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js?sourceMap!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4033230d\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/views/login/index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader?sourceMap!./node_modules/css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4033230d","scoped":false,"hasInlineConfig":false}!./node_modules/resolve-url-loader?{"sourceMap":true}!./node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/views/login/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?{"minimize":false,"sourceMap":true,"importLoaders":0}!../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4033230d","scoped":false,"hasInlineConfig":false}!../../../node_modules/resolve-url-loader?{"sourceMap":true}!../../../node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue */ "./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4033230d\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./assets/views/login/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("7371aa22", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4033230d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":true,\"importLoaders\":0}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4033230d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4033230d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/views/login/index.vue":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4033230d","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./assets/views/login/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login-container" },
    [
      _c(
        "el-form",
        {
          ref: "loginForm",
          staticClass: "card-box login-form",
          attrs: {
            autoComplete: "on",
            model: _vm.loginForm,
            rules: _vm.loginRules,
            "label-position": "left",
            "label-width": "0px"
          }
        },
        [
          _c("h3", { staticClass: "title" }, [_vm._v("vue-element-admin")]),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "username" } },
            [
              _c(
                "span",
                { staticClass: "svg-container svg-container_login" },
                [_c("svg-icon", { attrs: { "icon-class": "user" } })],
                1
              ),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "username",
                  type: "text",
                  autoComplete: "on",
                  placeholder: "username"
                },
                model: {
                  value: _vm.loginForm.username,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "username", $$v)
                  },
                  expression: "loginForm.username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "password" } },
            [
              _c(
                "span",
                { staticClass: "svg-container" },
                [_c("svg-icon", { attrs: { "icon-class": "password" } })],
                1
              ),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "password",
                  type: _vm.pwdType,
                  autoComplete: "on",
                  placeholder: "password"
                },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key)
                    ) {
                      return null
                    }
                    _vm.handleLogin($event)
                  }
                },
                model: {
                  value: _vm.loginForm.password,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "password", $$v)
                  },
                  expression: "loginForm.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "show-pwd", on: { click: _vm.showPwd } },
                [_c("svg-icon", { attrs: { "icon-class": "eye" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  staticStyle: { width: "100%" },
                  attrs: { type: "primary", loading: _vm.loading },
                  nativeOn: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.handleLogin($event)
                    }
                  }
                },
                [_vm._v("\n        Sign in\n      ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "tips" }, [
            _c("span", { staticStyle: { "margin-right": "20px" } }, [
              _vm._v("username: admin")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(" password: admin")])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4033230d", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL2xvZ2luL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3ZpZXdzL2xvZ2luL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvbG9naW4vaW5kZXgudnVlPzQ2YjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9sb2dpbi9pbmRleC52dWU/NWI3NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvbG9naW4vaW5kZXgudnVlP2QzMTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIl0sIm5hbWVzIjpbImlzdmFsaWRVc2VybmFtZSIsInZhbGlkYXRlVVJMIiwidmFsaWRhdGVMb3dlckNhc2UiLCJ2YWxpZGF0ZVVwcGVyQ2FzZSIsInZhbGlkYXRBbHBoYWJldHMiLCJzdHIiLCJ2YWxpZF9tYXAiLCJpbmRleE9mIiwidHJpbSIsInRleHR2YWwiLCJ1cmxyZWdleCIsInRlc3QiLCJyZWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7UUFJZ0JBLGUsR0FBQUEsZTtRQU1BQyxXLEdBQUFBLFc7UUFNQUMsaUIsR0FBQUEsaUI7UUFNQUMsaUIsR0FBQUEsaUI7UUFNQUMsZ0IsR0FBQUEsZ0I7QUE1QmhCOzs7O0FBSU8sU0FBU0osZUFBVCxDQUF5QkssR0FBekIsRUFBOEI7QUFDbkMsTUFBTUMsWUFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBQWxCO0FBQ0EsU0FBT0EsVUFBVUMsT0FBVixDQUFrQkYsSUFBSUcsSUFBSixF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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCO0FBQzNELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgamlhY2hlbnBhbiBvbiAxNi8xMS8xOC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXN2YWxpZFVzZXJuYW1lKHN0cikge1xuICBjb25zdCB2YWxpZF9tYXAgPSBbJ2FkbWluJywgJ2VkaXRvciddXG4gIHJldHVybiB2YWxpZF9tYXAuaW5kZXhPZihzdHIudHJpbSgpKSA+PSAwXG59XG5cbi8qIOWQiOazlXVyaSovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVVUkwodGV4dHZhbCkge1xuICBjb25zdCB1cmxyZWdleCA9IC9eKGh0dHBzP3xmdHApOlxcL1xcLyhbYS16QS1aMC05Li1dKyg6W2EtekEtWjAtOS4mJSQtXSspKkApKigoMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzEtOV1bMC05XT8pKFxcLigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMS05XT9bMC05XSkpezN9fChbYS16QS1aMC05LV0rXFwuKSpbYS16QS1aMC05LV0rXFwuKGNvbXxlZHV8Z292fGludHxtaWx8bmV0fG9yZ3xiaXp8YXJwYXxpbmZvfG5hbWV8cHJvfGFlcm98Y29vcHxtdXNldW18W2EtekEtWl17Mn0pKSg6WzAtOV0rKSooXFwvKCR8W2EtekEtWjAtOS4sPydcXFxcKyYlJCM9fl8tXSspKSokL1xuICByZXR1cm4gdXJscmVnZXgudGVzdCh0ZXh0dmFsKVxufVxuXG4vKiDlsI/lhpnlrZfmr40qL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTG93ZXJDYXNlKHN0cikge1xuICBjb25zdCByZWcgPSAvXlthLXpdKyQvXG4gIHJldHVybiByZWcudGVzdChzdHIpXG59XG5cbi8qIOWkp+WGmeWtl+avjSovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVVcHBlckNhc2Uoc3RyKSB7XG4gIGNvbnN0IHJlZyA9IC9eW0EtWl0rJC9cbiAgcmV0dXJuIHJlZy50ZXN0KHN0cilcbn1cblxuLyog5aSn5bCP5YaZ5a2X5q+NKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0QWxwaGFiZXRzKHN0cikge1xuICBjb25zdCByZWcgPSAvXltBLVphLXpdKyQvXG4gIHJldHVybiByZWcudGVzdChzdHIpXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy91dGlscy92YWxpZGF0ZS5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyP3NvdXJjZU1hcCFjc3MtbG9hZGVyP3tcXFwibWluaW1pemVcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImltcG9ydExvYWRlcnNcXFwiOjB9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDAzMzIzMGRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSFyZXNvbHZlLXVybC1sb2FkZXI/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWV9IXNhc3MtbG9hZGVyP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MDMzMjMwZFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdmlld3MvbG9naW4vaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQwMzMyMzBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDAzMzIzMGRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvdmlld3MvbG9naW4vaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL2Fzc2V0cy92aWV3cy9sb2dpbi9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibG9naW4tY29udGFpbmVyXCI+XG4gICAgPGVsLWZvcm0gYXV0b0NvbXBsZXRlPVwib25cIiA6bW9kZWw9XCJsb2dpbkZvcm1cIiA6cnVsZXM9XCJsb2dpblJ1bGVzXCIgcmVmPVwibG9naW5Gb3JtXCIgbGFiZWwtcG9zaXRpb249XCJsZWZ0XCIgbGFiZWwtd2lkdGg9XCIwcHhcIlxuICAgICAgY2xhc3M9XCJjYXJkLWJveCBsb2dpbi1mb3JtXCI+XG4gICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPnZ1ZS1lbGVtZW50LWFkbWluPC9oMz5cbiAgICAgIDxlbC1mb3JtLWl0ZW0gcHJvcD1cInVzZXJuYW1lXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3ZnLWNvbnRhaW5lciBzdmctY29udGFpbmVyX2xvZ2luXCI+XG4gICAgICAgICAgPHN2Zy1pY29uIGljb24tY2xhc3M9XCJ1c2VyXCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZWwtaW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibG9naW5Gb3JtLnVzZXJuYW1lXCIgYXV0b0NvbXBsZXRlPVwib25cIiBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgLz5cbiAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgPGVsLWZvcm0taXRlbSBwcm9wPVwicGFzc3dvcmRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdmctY29udGFpbmVyXCI+XG4gICAgICAgICAgPHN2Zy1pY29uIGljb24tY2xhc3M9XCJwYXNzd29yZFwiPjwvc3ZnLWljb24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGVsLWlucHV0IG5hbWU9XCJwYXNzd29yZFwiIDp0eXBlPVwicHdkVHlwZVwiIEBrZXl1cC5lbnRlci5uYXRpdmU9XCJoYW5kbGVMb2dpblwiIHYtbW9kZWw9XCJsb2dpbkZvcm0ucGFzc3dvcmRcIiBhdXRvQ29tcGxldGU9XCJvblwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiPjwvZWwtaW5wdXQ+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaG93LXB3ZFwiIEBjbGljaz1cInNob3dQd2RcIj48c3ZnLWljb24gaWNvbi1jbGFzcz1cImV5ZVwiIC8+PC9zcGFuPlxuICAgICAgPC9lbC1mb3JtLWl0ZW0+XG4gICAgICA8ZWwtZm9ybS1pdGVtPlxuICAgICAgICA8ZWwtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiIDpsb2FkaW5nPVwibG9hZGluZ1wiIEBjbGljay5uYXRpdmUucHJldmVudD1cImhhbmRsZUxvZ2luXCI+XG4gICAgICAgICAgU2lnbiBpblxuICAgICAgICA8L2VsLWJ1dHRvbj5cbiAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MjBweDtcIj51c2VybmFtZTogYWRtaW48L3NwYW4+XG4gICAgICAgIDxzcGFuPiBwYXNzd29yZDogYWRtaW48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2VsLWZvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGlzdmFsaWRVc2VybmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbG9naW4nLFxuICBkYXRhKCkge1xuICAgIGNvbnN0IHZhbGlkYXRlVXNlcm5hbWUgPSAocnVsZSwgdmFsdWUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBpZiAoIWlzdmFsaWRVc2VybmFtZSh2YWx1ZSkpIHtcbiAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCfor7fovpPlhaXmraPnoa7nmoTnlKjmiLflkI0nKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdmFsaWRhdGVQYXNzID0gKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCflr4bnoIHkuI3og73lsI/kuo415L2NJykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsb2dpbkZvcm06IHtcbiAgICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXG4gICAgICAgIHBhc3N3b3JkOiAnYWRtaW4nXG4gICAgICB9LFxuICAgICAgbG9naW5SdWxlczoge1xuICAgICAgICB1c2VybmFtZTogW3sgcmVxdWlyZWQ6IHRydWUsIHRyaWdnZXI6ICdibHVyJywgdmFsaWRhdG9yOiB2YWxpZGF0ZVVzZXJuYW1lIH1dLFxuICAgICAgICBwYXNzd29yZDogW3sgcmVxdWlyZWQ6IHRydWUsIHRyaWdnZXI6ICdibHVyJywgdmFsaWRhdG9yOiB2YWxpZGF0ZVBhc3MgfV1cbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHB3ZFR5cGU6ICdwYXNzd29yZCdcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93UHdkKCkge1xuICAgICAgaWYgKHRoaXMucHdkVHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICB0aGlzLnB3ZFR5cGUgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wd2RUeXBlID0gJ3Bhc3N3b3JkJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlTG9naW4oKSB7XG4gICAgICB0aGlzLiRyZWZzLmxvZ2luRm9ybS52YWxpZGF0ZSh2YWxpZCA9PiB7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xvZ2luJywgdGhpcy5sb2dpbkZvcm0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6ICcvJyB9KVxuICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Igc3VibWl0ISEnKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIiBsYW5nPVwic2Nzc1wiPlxuICAkYmc6IzJkM2E0YjtcbiAgJGRhcmtfZ3JheTojODg5YWE0O1xuICAkbGlnaHRfZ3JheTojZWVlO1xuXG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICMyOTM0NDQgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBwYWRkaW5nOiAxMnB4IDVweCAxMnB4IDE1cHg7XG4gICAgICBjb2xvcjogJGxpZ2h0X2dyYXk7XG4gICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgfVxuICAgIC5lbC1pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICB3aWR0aDogODUlO1xuICAgIH1cbiAgICAudGlwcyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5zdmctY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDZweCA1cHggNnB4IDE1cHg7XG4gICAgICBjb2xvcjogJGRhcmtfZ3JheTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICZfbG9naW4ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgY29sb3I6ICRsaWdodF9ncmF5O1xuICAgICAgbWFyZ2luOiAwcHggYXV0byA0MHB4IGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgcGFkZGluZzogMzVweCAzNXB4IDE1cHggMzVweDtcbiAgICAgIG1hcmdpbjogMTIwcHggYXV0bztcbiAgICB9XG4gICAgLmVsLWZvcm0taXRlbSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICB9XG4gICAgLnNob3ctcHdkIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiA3cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogJGRhcmtfZ3JheTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHVzZXItc2VsZWN0Om5vbmU7XG4gICAgfVxuICAgIC50aGlyZHBhcnR5LWJ1dHRvbntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgYm90dG9tOiAyOHB4O1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhc3NldHMvdmlld3MvbG9naW4vaW5kZXgudnVlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmxvZ2luLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDNhNGI7XFxufVxcbi5sb2dpbi1jb250YWluZXIgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICMyOTM0NDQgaW5zZXQgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxufVxcbi5sb2dpbi1jb250YWluZXIgaW5wdXQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIHBhZGRpbmc6IDEycHggNXB4IDEycHggMTVweDtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgaGVpZ2h0OiA0N3B4O1xcbn1cXG4ubG9naW4tY29udGFpbmVyIC5lbC1pbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDQ3cHg7XFxuICB3aWR0aDogODUlO1xcbn1cXG4ubG9naW4tY29udGFpbmVyIC50aXBzIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmxvZ2luLWNvbnRhaW5lciAuc3ZnLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA2cHggNXB4IDZweCAxNXB4O1xcbiAgY29sb3I6ICM4ODlhYTQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5sb2dpbi1jb250YWluZXIgLnN2Zy1jb250YWluZXJfbG9naW4ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubG9naW4tY29udGFpbmVyIC50aXRsZSB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNlZWU7XFxuICBtYXJnaW46IDBweCBhdXRvIDQwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDM1cHggMzVweCAxNXB4IDM1cHg7XFxuICBtYXJnaW46IDEyMHB4IGF1dG87XFxufVxcbi5sb2dpbi1jb250YWluZXIgLmVsLWZvcm0taXRlbSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxvZ2luLWNvbnRhaW5lciAuc2hvdy1wd2Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDdweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjODg5YWE0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5sb2dpbi1jb250YWluZXIgLnRoaXJkcGFydHktYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgYm90dG9tOiAyOHB4O1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL25pY29sYXN3aWRhcnQvU2l0ZXMvUGxheWdyb3VuZC92dWVzZi9hc3NldHMvdmlld3MvbG9naW4vaW5kZXgudnVlXCIsXCIvVXNlcnMvbmljb2xhc3dpZGFydC9TaXRlcy9QbGF5Z3JvdW5kL3Z1ZXNmL2Fzc2V0cy92aWV3cy9sb2dpbi9pbmRleC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1HQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtDQ2xHRDtBRDhGRDtFQU1JLDREQUFBO0VBQ0EseUNBQUE7Q0NoR0g7QURrR0M7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtDQy9GSDtBRGlHQztFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7Q0M5Rkg7QUR5RUQ7RUF3QkksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7Q0M3Rkg7QUQrRkM7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtDQzVGSDtBRDJERDtFQW1DTSxnQkFBQTtDQzFGTDtBRHVERDtFQXVDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtDQzFGSDtBRDRGQztFQUNFLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtDQ3pGSDtBRHFDRDtFQXVESSwyQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0NDeEZIO0FEOEJEO0VBNkRJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0NDdkZIO0FEb0JEO0VBc0VJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7Q0N0RkhcIixcImZpbGVcIjpcImluZGV4LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4kYmc6IzJkM2E0YjtcXG4kZGFya19ncmF5OiM4ODlhYTQ7XFxuJGxpZ2h0X2dyYXk6I2VlZTtcXG5cXG4ubG9naW4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOjEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XFxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCAjMjkzNDQ0IGluc2V0ICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICB9XFxuICBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHBhZGRpbmc6IDEycHggNXB4IDEycHggMTVweDtcXG4gICAgY29sb3I6ICRsaWdodF9ncmF5O1xcbiAgICBoZWlnaHQ6IDQ3cHg7XFxuICB9XFxuICAuZWwtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogNDdweDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gIH1cXG4gIC50aXBzIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC5zdmctY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNnB4IDVweCA2cHggMTVweDtcXG4gICAgY29sb3I6ICRkYXJrX2dyYXk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICZfbG9naW4ge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgfVxcbiAgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogJGxpZ2h0X2dyYXk7XFxuICAgIG1hcmdpbjogMHB4IGF1dG8gNDBweCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDM1cHggMzVweCAxNXB4IDM1cHg7XFxuICAgIG1hcmdpbjogMTIwcHggYXV0bztcXG4gIH1cXG4gIC5lbC1mb3JtLWl0ZW0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogIzQ1NDU0NTtcXG4gIH1cXG4gIC5zaG93LXB3ZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogN3B4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAkZGFya19ncmF5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0Om5vbmU7XFxuICB9XFxuICAudGhpcmRwYXJ0eS1idXR0b257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDM1cHg7XFxuICAgIGJvdHRvbTogMjhweDtcXG4gIH1cXG59XFxuXCIsXCIubG9naW4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkM2E0YjtcXG59XFxuXFxuLmxvZ2luLWNvbnRhaW5lciBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggIzI5MzQ0NCBpbnNldCAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuXFxuLmxvZ2luLWNvbnRhaW5lciBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgcGFkZGluZzogMTJweCA1cHggMTJweCAxNXB4O1xcbiAgY29sb3I6ICNlZWU7XFxuICBoZWlnaHQ6IDQ3cHg7XFxufVxcblxcbi5sb2dpbi1jb250YWluZXIgLmVsLWlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNDdweDtcXG4gIHdpZHRoOiA4NSU7XFxufVxcblxcbi5sb2dpbi1jb250YWluZXIgLnRpcHMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubG9naW4tY29udGFpbmVyIC5zdmctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDZweCA1cHggNnB4IDE1cHg7XFxuICBjb2xvcjogIzg4OWFhNDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMzBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmxvZ2luLWNvbnRhaW5lciAuc3ZnLWNvbnRhaW5lcl9sb2dpbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5sb2dpbi1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2VlZTtcXG4gIG1hcmdpbjogMHB4IGF1dG8gNDBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogMzVweCAzNXB4IDE1cHggMzVweDtcXG4gIG1hcmdpbjogMTIwcHggYXV0bztcXG59XFxuXFxuLmxvZ2luLWNvbnRhaW5lciAuZWwtZm9ybS1pdGVtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjNDU0NTQ1O1xcbn1cXG5cXG4ubG9naW4tY29udGFpbmVyIC5zaG93LXB3ZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogN3B4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICM4ODlhYTQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmxvZ2luLWNvbnRhaW5lciAudGhpcmRwYXJ0eS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDM1cHg7XFxuICBib3R0b206IDI4cHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6ZmFsc2UsXCJzb3VyY2VNYXBcIjp0cnVlLFwiaW1wb3J0TG9hZGVyc1wiOjB9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQwMzMyMzBkXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXI/e1wic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz97XCJzb3VyY2VNYXBcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYXNzZXRzL3ZpZXdzL2xvZ2luL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJtaW5pbWl6ZVwiOmZhbHNlLFwic291cmNlTWFwXCI6dHJ1ZSxcImltcG9ydExvYWRlcnNcIjowfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00MDMzMjMwZFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/e1wic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Fzc2V0cy92aWV3cy9sb2dpbi9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcXFwibWluaW1pemVcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImltcG9ydExvYWRlcnNcXFwiOjB9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDAzMzIzMGRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjczNzFhYTIyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcXFwibWluaW1pemVcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImltcG9ydExvYWRlcnNcXFwiOjB9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDAzMzIzMGRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJtaW5pbWl6ZVxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MH0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MDMzMjMwZFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJtaW5pbWl6ZVwiOmZhbHNlLFwic291cmNlTWFwXCI6dHJ1ZSxcImltcG9ydExvYWRlcnNcIjowfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00MDMzMjMwZFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/e1wic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Fzc2V0cy92aWV3cy9sb2dpbi9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOnRydWUsXCJpbXBvcnRMb2FkZXJzXCI6MH0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDAzMzIzMGRcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz97XCJzb3VyY2VNYXBcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9hc3NldHMvdmlld3MvbG9naW4vaW5kZXgudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImxvZ2luLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcImxvZ2luRm9ybVwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYm94IGxvZ2luLWZvcm1cIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiBcIm9uXCIsXG4gICAgICAgICAgICBtb2RlbDogX3ZtLmxvZ2luRm9ybSxcbiAgICAgICAgICAgIHJ1bGVzOiBfdm0ubG9naW5SdWxlcyxcbiAgICAgICAgICAgIFwibGFiZWwtcG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBcImxhYmVsLXdpZHRoXCI6IFwiMHB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbX3ZtLl92KFwidnVlLWVsZW1lbnQtYWRtaW5cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJlbC1mb3JtLWl0ZW1cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgcHJvcDogXCJ1c2VybmFtZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzdmctY29udGFpbmVyIHN2Zy1jb250YWluZXJfbG9naW5cIiB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInN2Zy1pY29uXCIsIHsgYXR0cnM6IHsgXCJpY29uLWNsYXNzXCI6IFwidXNlclwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJlbC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiBcIm9uXCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2dpbkZvcm0udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5sb2dpbkZvcm0sIFwidXNlcm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9naW5Gb3JtLnVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHByb3A6IFwicGFzc3dvcmRcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3ZnLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgW19jKFwic3ZnLWljb25cIiwgeyBhdHRyczogeyBcImljb24tY2xhc3NcIjogXCJwYXNzd29yZFwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJlbC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5wd2RUeXBlLFxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiBcIm9uXCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgIShcImJ1dHRvblwiIGluICRldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXkpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLmhhbmRsZUxvZ2luKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvZ2luRm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmxvZ2luRm9ybSwgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbkZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2hvdy1wd2RcIiwgb246IHsgY2xpY2s6IF92bS5zaG93UHdkIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJzdmctaWNvblwiLCB7IGF0dHJzOiB7IFwiaWNvbi1jbGFzc1wiOiBcImV5ZVwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLWZvcm0taXRlbVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImVsLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwcmltYXJ5XCIsIGxvYWRpbmc6IF92bS5sb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaGFuZGxlTG9naW4oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBTaWduIGluXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcHNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwidXNlcm5hbWU6IGFkbWluXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIiBwYXNzd29yZDogYWRtaW5cIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDAzMzIzMGRcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00MDMzMjMwZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fzc2V0cy92aWV3cy9sb2dpbi9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDAzMzIzMGRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hc3NldHMvdmlld3MvbG9naW4vaW5kZXgudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=