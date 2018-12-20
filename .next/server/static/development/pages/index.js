module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Register.jsx":
/*!*********************************!*\
  !*** ./components/Register.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/helpers/MaterialUi.jsx */ "./components/helpers/MaterialUi.jsx");
/* harmony import */ var _components_helpers_SubmitButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/helpers/SubmitButton.jsx */ "./components/helpers/SubmitButton.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx




 // impor
//import CSALogo from '../media/CSA.jpg'

var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      width: 500,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    dense: {
      marginTop: 16
    },
    menu: {
      width: 200
    }
  };
};

var Register =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Register)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      open: false,
      form: {
        name: '',
        profession: '',
        description: '',
        email: '',
        tel: '',
        password: ''
      }
    };
    _this.handleOnSubmit = _this.handleOnSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClickOpen = _this.handleClickOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Register, [{
    key: "handleOnSubmit",
    value: function handleOnSubmit(e) {// alert('Click')
      // e.preventDefault()
      // let form = e.target
      // console.log(form.email.value)
      // console.log(form.password.value)
      // this.setState({
      //     mail: form.email.value,
      //     password: form.password.value
      // })
      // console.log(this.state)
    }
  }, {
    key: "handleClickOpen",
    value: function handleClickOpen() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      console.log(e.target); //+ " name:"+name 

      console.log(this.state);
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      this.setState({
        form: _objectSpread({}, this.state.form, _defineProperty({}, name, value))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          open = _this$state.open,
          _this$state$form = _this$state.form,
          name = _this$state$form.name,
          profession = _this$state$form.profession,
          description = _this$state$form.description,
          email = _this$state$form.email,
          tel = _this$state$form.tel,
          password = _this$state$form.password;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        onClick: this.handleClickOpen
      }, "Registrarme"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["Dialog"] // <Dialog> Aqui va todo el Register </Dialog>
      // fullScreen={fullScreen}
      , {
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "responsive-dialog-title",
        className: classes.container
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], {
        id: "responsive-dialog-title"
      }, "CSA: Formulario de Registro."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogContentText"], null, "Ingrese su informaci\xF3n para crear una cuenta:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.handleOnSubmit,
        className: classes.container,
        noValidate: true,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
        id: "standard-name",
        name: "name",
        label: "Nombre y apellido",
        className: classes.textField,
        value: this.state.name,
        onChange: this.handleChange,
        margin: "normal",
        autoComplete: "name"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
        id: "standard-name",
        name: "profession",
        label: "Profesi\xF3n",
        className: classes.textField,
        value: profession,
        onChange: this.handleChange,
        margin: "normal",
        autoComplete: "profession"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
        id: "standard-multiline-flexible",
        name: "description",
        label: "Descripci\xF3n",
        multiline: true,
        rowsMax: "5",
        value: description,
        onChange: this.handleChange,
        className: classes.textField,
        margin: "normal"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
        id: "standard-number",
        name: "tel",
        label: "Tel\xE9fono",
        type: "number",
        className: classes.textField,
        value: tel,
        onChange: this.handleChange,
        margin: "normal",
        autoComplete: "number"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
        name: "email",
        label: "E-mail",
        className: classes.textField,
        type: "email",
        value: email,
        onChange: this.handleChange,
        autoComplete: "email",
        margin: "normal",
        variant: "filled"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
        id: "standard-password-input",
        name: "password",
        label: "password",
        className: classes.textField,
        type: "password",
        value: password,
        onChange: this.handleChange,
        autoComplete: "current-password",
        margin: "normal"
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogActions"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        onClick: this.handleClose
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_helpers_SubmitButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: "primary"
      })))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Register.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(Register));

/***/ }),

/***/ "./components/csa/Actuators.jsx":
/*!**************************************!*\
  !*** ./components/csa/Actuators.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Slider_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Slider.jsx */ "./components/helpers/Slider.jsx");
/* harmony import */ var _helpers_SubmitButton_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/SubmitButton.jsx */ "./components/helpers/SubmitButton.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Actuadores =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Actuadores, _React$Component);

  function Actuadores() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Actuadores);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Actuadores)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      value: null,
      maxValueTemperature: null,
      minValueTemperature: null,
      maxValueHumidity: null,
      minValueHumidity: null,
      maxValueAirQuality: null
    };
    _this.handleGetMaxValueTemperature = _this.handleGetMaxValueTemperature.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleGetMinValueTemperature = _this.handleGetMinValueTemperature.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleGetMaxValueHumidity = _this.handleGetMaxValueHumidity.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleGetMinValueHumidity = _this.handleGetMinValueHumidity.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleGetMaxValueAirQuality = _this.handleGetMaxValueAirQuality.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // Temperatura:


  _createClass(Actuadores, [{
    key: "handleGetMaxValueTemperature",
    value: function handleGetMaxValueTemperature(value) {
      this.setState({
        maxValueTemperature: value
      });
    }
  }, {
    key: "handleGetMinValueTemperature",
    value: function handleGetMinValueTemperature(value) {
      this.setState({
        minValueTemperature: value
      });
    } //Humedad:

  }, {
    key: "handleGetMaxValueHumidity",
    value: function handleGetMaxValueHumidity(value) {
      this.setState({
        maxValueHumidity: value
      });
    }
  }, {
    key: "handleGetMinValueHumidity",
    value: function handleGetMinValueHumidity(value) {
      this.setState({
        minValueHumidity: value
      });
    } //Calidad de Aire:

  }, {
    key: "handleGetMaxValueAirQuality",
    value: function handleGetMaxValueAirQuality(value) {
      this.setState({
        maxValueAirQuality: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Valores de Referencia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Temperatura"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ingrese valores m\xE1ximos y minimos:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Slider_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: "Valor M\xE1ximo",
        unidad: "\xBAC",
        sendValue: this.handleGetMaxValueTemperature
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Slider_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: "Valor M\xEDnimo",
        unidad: "\xBAC",
        sendValue: this.handleGetMinValueTemperature
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Humedad"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ingrese valores m\xE1ximos y minimos:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Slider_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: "Valor M\xE1ximo",
        unidad: "%",
        sendValue: this.handleGetMaxValueHumidity
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Slider_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: "Valor M\xEDnimo",
        unidad: "%",
        sendValue: this.handleGetMinValueHumidity
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Calidad de Aire"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ingrese valores m\xE1ximos:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Slider_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: "Valor M\xE1ximo",
        unidad: "%",
        sendValue: this.handleGetMaxValueAirQuality
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_SubmitButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return Actuadores;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Actuadores);

/***/ }),

/***/ "./components/csa/AirQuality.jsx":
/*!***************************************!*\
  !*** ./components/csa/AirQuality.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_Calendar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Calendar.jsx */ "./components/helpers/Calendar.jsx");
/* harmony import */ var _helpers_chart_ModulesDayChart_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/chart/ModulesDayChart.jsx */ "./components/helpers/chart/ModulesDayChart.jsx");
/* harmony import */ var _helpers_chart_AverageDayChart_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/chart/AverageDayChart.jsx */ "./components/helpers/chart/AverageDayChart.jsx");
/* harmony import */ var _helpers_chart_ModulesMonthChart_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/chart/ModulesMonthChart.jsx */ "./components/helpers/chart/ModulesMonthChart.jsx");
/* harmony import */ var _helpers_chart_AverageMonthChart_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/chart/AverageMonthChart.jsx */ "./components/helpers/chart/AverageMonthChart.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Componente Calidad Aire renderiza los componentes:
// -> Calendar: Para elegir el dia que se quieren ver la graficas de Calidad Aire
//              Ejecuta el método  reciveDataDay(e): Hace una peticion axios a la Base de datos
//              del dia selecionado y devuelve un objeto con la información.
// -> ModulesDayChart: Renderiza la grafica de los 4 modulos para el día selecionado
//      Recibe por Props:
//          - Metric: String (Humedad, Humedad o Calidad aire) 
//          - Unidad: String (ºC, % , ppm)
//          - metricsDay: this.state.metricsDay -> objeto almacenado en el estado con toda la informacion.
//          - dateData: this.state.dateData -> Almacena el día selecionado.
// NOTA: Se usa un If en el render() para mostrar la gráfica, porque si no se ha 
//       selecionado una fecha (No se ha traido el objeto de la base de datos) y
//        se intenta renderizar el componente ModulesDayChart genera un ERROR
//  FALTA QUE CUANDO SE SELECCIONE OTRA FECHA ACTUALICE ELCOMPONENTE ModulesDayChart
 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component


 // Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.






 // Se importa moment que lo usa internamente esta libreria

var AirQuality =
/*#__PURE__*/
function (_Component) {
  _inherits(AirQuality, _Component);

  function AirQuality() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AirQuality);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AirQuality)).call.apply(_getPrototypeOf2, [this].concat(props)));
    console.log("Constructor");
    _this.state = {
      metricsDayBoolean: false,
      // Cambia a true Si la fecha selecionada tiene datos para ser graficados.
      metricsMonthBoolean: false,
      // Cambia a true Si la fecha selecionada tiene datos para ser graficados.
      metricsDay: {},
      // objeto general con la información de los dias
      dateData: '',
      // Fecha de datos que se quiere 
      dayAverage: [],
      month: '',
      year: '',
      metricsMonth: {},
      metrica: 'Calidad de Aire' // Fin de chartData
      // Fin deState

    };
    _this.reciveDataDay = _this.reciveDataDay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AirQuality, [{
    key: "reciveDataDay",
    value: function reciveDataDay(e) {
      var _this2 = this;

      console.log("reciveDataDay");
      var dateRaw = e;
      var date = dateRaw.replace('/', '-').replace('/', '-'); // Se reemplaza '/' por '-'  ->  2018/12/13 -> 2018-12-13

      var split = date.split('-'); // Split "corta" el string por donde le señalamos '-' y mete en un
      // array cada pedazo: 2018-12-22 -> split[0]= 2018 ; split[1]= 12 ; split[2]= 22

      var year = split[0];
      var month = split[1];
      console.log(year);
      console.log(month);
      this.setState({
        dateData: date,
        month: month,
        year: year
      }); // Petición al servidor con la información del DÏA

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: 'get',
        url: "https://csaserver.herokuapp.com/sensores/datos/search?dateSearch=".concat(date)
      }).then(function (response) {
        console.log("Respuesta" + JSON.stringify(response));

        if (response.data.ok === true) {
          // Si OK === true es que la Respuesta llego bien.
          _this2.setState({
            metricsDay: response.data.metrics
          });

          _this2.setState({
            metricsDayBoolean: true
          });
        } else {
          _this2.setState({
            metricsDayBoolean: false
          });
        }

        console.log(_this2.state.metricsDay);
      }).catch(function (error) {
        console.log("Este es el error");
        console.log(error);
      }); // Fin de la petición del Objeto metricsDay
      // Petición al servidor con la información del MES

      console.log("metricsMonth :");
      console.log(this.state.metricsMonth);
      console.log("Month :");
      console.log(month);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: 'get',
        url: "https://csaserver.herokuapp.com/sensores/datos/".concat(month, "-2018")
      }).then(function (response) {
        if (response.data.ok === true) {
          // Si OK === true es que la Respuesta llego bien.
          _this2.setState({
            metricsMonth: response.data.metrics.monthsArray
          });

          _this2.setState({
            metricsMonthBoolean: true
          });
        } else {
          _this2.setState({
            metricsMonthBoolean: false
          });
        }
      }).catch(function (error) {
        console.log("Este es el error");
        console.log(error);
      }); // Fin de la petición del Objeto metricsDay

      console.log("metricsMonth");
      console.log(this.state.metricsMonth);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("Render");
      console.log(this.state.metricsDay);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "teal-text center"
      }, this.state.metric), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "col s12 center "
      }, "Datos de d\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12 center"
      }, "Seleccione el d\xEDa que desee consultar.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Calendar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "date",
        onChange: this.reciveDataDay
      }, " "))), this.state.metricsDayBoolean === true && this.state.metricsMonthBoolean === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_ModulesDayChart_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        metrica: this.state.metrica,
        metric: "AirQuality",
        unidad: "%",
        metricsDay: this.state.metricsDay,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_AverageDayChart_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        metrica: this.state.metrica,
        metric: "AirQuality",
        unidad: "%",
        metricsDay: this.state.metricsDay,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_ModulesMonthChart_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        metrica: this.state.metrica,
        metric: "AirQuality",
        unidad: "%",
        metricsMonth: this.state.metricsMonth,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_AverageMonthChart_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        metrica: this.state.metrica,
        metric: "AirQuality",
        unidad: "%",
        metricsMonth: this.state.metricsMonth,
        dateData: this.state.dateData
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Ingresa una fecha con informaci\xF3n"));
    }
  }]);

  return AirQuality;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AirQuality);

/***/ }),

/***/ "./components/csa/Fire.jsx":
/*!*********************************!*\
  !*** ./components/csa/Fire.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fire; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Flama_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Flama.jsx */ "./components/helpers/Flama.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component



var Fire =
/*#__PURE__*/
function (_Component) {
  _inherits(Fire, _Component);

  function Fire() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Fire);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Fire)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      fire: [1, 0, 0, 0] // Siempre que se crea un método se debe hacer el autobinding: Enlaza el this de la instancia con el this del constructor (buena practica) dentro del constructor

    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Fire, [{
    key: "handleOnClick",
    value: function handleOnClick(e) {
      // alert('click') 
      document.getElementById('flama').classList.toggle('white');
      document.getElementById('flama').classList.toggle('red');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "col s12 center teal-text hoverable"
      }, "SENSORES FLAMA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Flama_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "hoverable",
        modulo: "1",
        fire: this.state.fire[0]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Flama_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        modulo: "2",
        fire: this.state.fire[1]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Flama_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        modulo: "3",
        fire: this.state.fire[2]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Flama_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        modulo: "4",
        fire: this.state.fire[3]
      })); //Fin return
    } //Fin render()

  }]);

  return Fire;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Fin Class




/***/ }),

/***/ "./components/csa/Humidity.jsx":
/*!*************************************!*\
  !*** ./components/csa/Humidity.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_Calendar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Calendar.jsx */ "./components/helpers/Calendar.jsx");
/* harmony import */ var _helpers_chart_ModulesDayChart_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/chart/ModulesDayChart.jsx */ "./components/helpers/chart/ModulesDayChart.jsx");
/* harmony import */ var _helpers_chart_AverageDayChart_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/chart/AverageDayChart.jsx */ "./components/helpers/chart/AverageDayChart.jsx");
/* harmony import */ var _helpers_chart_ModulesMonthChart_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/chart/ModulesMonthChart.jsx */ "./components/helpers/chart/ModulesMonthChart.jsx");
/* harmony import */ var _helpers_chart_AverageMonthChart_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/chart/AverageMonthChart.jsx */ "./components/helpers/chart/AverageMonthChart.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Componente Humedad renderiza los componentes:
// -> Calendar: Para elegir el dia que se quieren ver la graficas de Humedad
//              Ejecuta el método  reciveDataDay(e): Hace una peticion axios a la Base de datos
//              del dia selecionado y devuelve un objeto con la información.
// -> ModulesDayChart: Renderiza la grafica de los 4 modulos para el día selecionado
//      Recibe por Props:
//          - Metric: String (Humedad, Humedad o Calidad aire) 
//          - Unidad: String (ºC, % , ppm)
//          - metricsDay: this.state.metricsDay -> objeto almacenado en el estado con toda la informacion.
//          - dateData: this.state.dateData -> Almacena el día selecionado.
// NOTA: Se usa un If en el render() para mostrar la gráfica, porque si no se ha 
//       selecionado una fecha (No se ha traido el objeto de la base de datos) y
//        se intenta renderizar el componente ModulesDayChart genera un ERROR
//  FALTA QUE CUANDO SE SELECCIONE OTRA FECHA ACTUALICE ELCOMPONENTE ModulesDayChart
 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component


 // Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.






 // Se importa moment que lo usa internamente esta libreria

var Humidity =
/*#__PURE__*/
function (_Component) {
  _inherits(Humidity, _Component);

  function Humidity() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Humidity);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Humidity)).call.apply(_getPrototypeOf2, [this].concat(props)));
    console.log("Constructor");
    _this.state = {
      metricsDayBoolean: false,
      // Cambia a true Si la fecha selecionada tiene datos para ser graficados.
      metricsMonthBoolean: false,
      // Cambia a true Si la fecha selecionada tiene datos para ser graficados.
      metricsDay: {},
      // objeto general con la información de los dias
      dateData: '',
      // Fecha de datos que se quiere 
      dayAverage: [],
      month: '',
      year: '',
      metricsMonth: {},
      metrica: 'Humedad' // Fin de chartData
      // Fin deState

    };
    _this.reciveDataDay = _this.reciveDataDay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Humidity, [{
    key: "reciveDataDay",
    value: function reciveDataDay(e) {
      var _this2 = this;

      console.log("reciveDataDay");
      var dateRaw = e;
      var date = dateRaw.replace('/', '-').replace('/', '-'); // Se reemplaza '/' por '-'  ->  2018/12/13 -> 2018-12-13

      var split = date.split('-'); // Split "corta" el string por donde le señalamos '-' y mete en un
      // array cada pedazo: 2018-12-22 -> split[0]= 2018 ; split[1]= 12 ; split[2]= 22

      var year = split[0];
      var month = split[1];
      console.log(year);
      console.log(month);
      this.setState({
        dateData: date,
        month: month,
        year: year
      }); // Petición al servidor con la información del DÏA

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: 'get',
        url: "https://csaserver.herokuapp.com/sensores/datos/search?dateSearch=".concat(date)
      }).then(function (response) {
        console.log("Respuesta" + JSON.stringify(response));

        if (response.data.ok === true) {
          // Si OK === true es que la Respuesta llego bien.
          _this2.setState({
            metricsDay: response.data.metrics
          });

          _this2.setState({
            metricsDayBoolean: true
          });
        } else {
          _this2.setState({
            metricsDayBoolean: false
          });
        }

        console.log(_this2.state.metricsDay);
      }).catch(function (error) {
        console.log("Este es el error");
        console.log(error);
      }); // Fin de la petición del Objeto metricsDay
      // Petición al servidor con la información del MES

      console.log("metricsMonth :");
      console.log(this.state.metricsMonth);
      console.log("Month :");
      console.log(month);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: 'get',
        url: "https://csaserver.herokuapp.com/sensores/datos/".concat(month, "-2018")
      }).then(function (response) {
        if (response.data.ok === true) {
          // Si OK === true es que la Respuesta llego bien.
          _this2.setState({
            metricsMonth: response.data.metrics.monthsArray
          });

          _this2.setState({
            metricsMonthBoolean: true
          });
        } else {
          _this2.setState({
            metricsMonthBoolean: false
          });
        }
      }).catch(function (error) {
        console.log("Este es el error");
        console.log(error);
      }); // Fin de la petición del Objeto metricsDay

      console.log("metricsMonth");
      console.log(this.state.metricsMonth);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("Render");
      console.log(this.state.metricsDay);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "teal-text center"
      }, this.state.metric), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "col s12 center "
      }, "Datos de d\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12 center"
      }, "Seleccione el d\xEDa que desee consultar.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Calendar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "date",
        onChange: this.reciveDataDay
      }, " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card teal darken-1 white-text center hoverable"
      }, "Promedio de Humedad del dias: ", this.state.dayAverage, "Humedad"), this.state.metricsDayBoolean === true && this.state.metricsMonthBoolean === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_ModulesDayChart_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        metrica: this.state.metrica,
        metric: "Humidity",
        unidad: "%",
        metricsDay: this.state.metricsDay,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_AverageDayChart_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        metrica: this.state.metrica,
        metric: "Humidity",
        unidad: "%",
        metricsDay: this.state.metricsDay,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_ModulesMonthChart_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        metrica: this.state.metrica,
        metric: "Humidity",
        unidad: "%",
        metricsMonth: this.state.metricsMonth,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_AverageMonthChart_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        metrica: this.state.metrica,
        metric: "Humidity",
        unidad: "%",
        metricsMonth: this.state.metricsMonth,
        dateData: this.state.dateData
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Ingresa una fecha con informaci\xF3n"));
    }
  }]);

  return Humidity;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Humidity);

/***/ }),

/***/ "./components/csa/Location.jsx":
/*!*************************************!*\
  !*** ./components/csa/Location.jsx ***!
  \*************************************/
/*! exports provided: Locacion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locacion", function() { return Locacion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

var Locacion =
/*#__PURE__*/
function (_Component) {
  _inherits(Locacion, _Component);

  function Locacion() {
    _classCallCheck(this, Locacion);

    return _possibleConstructorReturn(this, _getPrototypeOf(Locacion).apply(this, arguments));
  }

  _createClass(Locacion, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Ubicaci\xF3n del emplazamiento"));
    }
  }]);

  return Locacion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Locacion);

/***/ }),

/***/ "./components/csa/Temperature.jsx":
/*!****************************************!*\
  !*** ./components/csa/Temperature.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_Calendar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Calendar.jsx */ "./components/helpers/Calendar.jsx");
/* harmony import */ var _helpers_chart_ModulesDayChart_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/chart/ModulesDayChart.jsx */ "./components/helpers/chart/ModulesDayChart.jsx");
/* harmony import */ var _helpers_chart_AverageDayChart_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/chart/AverageDayChart.jsx */ "./components/helpers/chart/AverageDayChart.jsx");
/* harmony import */ var _helpers_chart_ModulesMonthChart_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/chart/ModulesMonthChart.jsx */ "./components/helpers/chart/ModulesMonthChart.jsx");
/* harmony import */ var _helpers_chart_AverageMonthChart_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/chart/AverageMonthChart.jsx */ "./components/helpers/chart/AverageMonthChart.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Componente temperatura renderiza los componentes:
// -> Calendar: Para elegir el dia que se quieren ver la graficas de Temperatura
//              Ejecuta el método  reciveDataDay(e): Hace una peticion axios a la Base de datos
//              del dia selecionado y devuelve un objeto con la información.
// -> ModulesDayChart: Renderiza la grafica de los 4 modulos para el día selecionado
//      Recibe por Props:
//          - Metric: String (Temperatura, Humedad o Calidad aire) 
//          - Unidad: String (ºC, % , ppm)
//          - metricsDay: this.state.metricsDay -> objeto almacenado en el estado con toda la informacion.
//          - dateData: this.state.dateData -> Almacena el día selecionado.
// NOTA: Se usa un If en el render() para mostrar la gráfica, porque si no se ha 
//       selecionado una fecha (No se ha traido el objeto de la base de datos) y
//        se intenta renderizar el componente ModulesDayChart genera un ERROR
//  FALTA QUE CUANDO SE SELECCIONE OTRA FECHA ACTUALICE ELCOMPONENTE ModulesDayChart
 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component


 // Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.






 // Se importa moment que lo usa internamente esta libreria

var Temperature =
/*#__PURE__*/
function (_Component) {
  _inherits(Temperature, _Component);

  function Temperature() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Temperature);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Temperature)).call.apply(_getPrototypeOf2, [this].concat(props)));
    console.log("Constructor");
    _this.state = {
      metricsDayBoolean: false,
      // Cambia a true Si la fecha selecionada tiene datos para ser graficados.
      metricsMonthBoolean: false,
      // Cambia a true Si la fecha selecionada tiene datos para ser graficados.
      metricsDay: {},
      // objeto general con la información de los dias
      dateData: '',
      // Fecha de datos que se quiere 
      dayAverage: [],
      month: '',
      year: '',
      metricsMonth: {},
      metrica: 'Temperatura' // Fin de chartData
      // Fin deState

    };
    _this.reciveDataDay = _this.reciveDataDay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Temperature, [{
    key: "reciveDataDay",
    value: function reciveDataDay(e) {
      var _this2 = this;

      console.log("reciveDataDay");
      var dateRaw = e;
      var date = dateRaw.replace('/', '-').replace('/', '-'); // Se reemplaza '/' por '-'  ->  2018/12/13 -> 2018-12-13

      var split = date.split('-'); // Split "corta" el string por donde le señalamos '-' y mete en un
      // array cada pedazo: 2018-12-22 -> split[0]= 2018 ; split[1]= 12 ; split[2]= 22

      var year = split[0];
      var month = split[1];
      console.log(year);
      console.log(month);
      this.setState({
        dateData: date,
        month: month,
        year: year
      }); // Petición al servidor con la información del DÏA

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: 'get',
        url: "https://csaserver.herokuapp.com/sensores/datos/search?dateSearch=".concat(date)
      }).then(function (response) {
        console.log("Respuesta" + JSON.stringify(response));

        if (response.data.ok === true) {
          // Si OK === true es que la Respuesta llego bien.
          _this2.setState({
            metricsDay: response.data.metrics
          });

          _this2.setState({
            metricsDayBoolean: true
          });
        } else {
          _this2.setState({
            metricsDayBoolean: false
          });
        }

        console.log(_this2.state.metricsDay);
      }).catch(function (error) {
        console.log("Este es el error");
        console.log(error);
      }); // Fin de la petición del Objeto metricsDay
      // Petición al servidor con la información del MES

      console.log("metricsMonth :");
      console.log(this.state.metricsMonth);
      console.log("Month :");
      console.log(month);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: 'get',
        url: "https://csaserver.herokuapp.com/sensores/datos/".concat(month, "-2018")
      }).then(function (response) {
        if (response.data.ok === true) {
          // Si OK === true es que la Respuesta llego bien.
          _this2.setState({
            metricsMonth: response.data.metrics.monthsArray
          });

          _this2.setState({
            metricsMonthBoolean: true
          });
        } else {
          _this2.setState({
            metricsMonthBoolean: false
          });
        }
      }).catch(function (error) {
        console.log("Este es el error");
        console.log(error);
      }); // Fin de la petición del Objeto metricsDay

      console.log("metricsMonth");
      console.log(this.state.metricsMonth);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("Render");
      console.log(this.state.metricsDay);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "teal-text center"
      }, this.state.metric), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "col s12 center "
      }, "Datos de d\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s12 center"
      }, "Seleccione el d\xEDa que desee consultar.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_Calendar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "date",
        onChange: this.reciveDataDay
      }, " "))), this.state.metricsDayBoolean === true && this.state.metricsMonthBoolean === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_ModulesDayChart_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        metrica: this.state.metrica,
        metric: "Temperature",
        unidad: "\xBAC",
        metricsDay: this.state.metricsDay,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_AverageDayChart_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        metrica: this.state.metrica,
        metric: "Temperature",
        unidad: "\xBAC",
        metricsDay: this.state.metricsDay,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_ModulesMonthChart_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        metrica: this.state.metrica,
        metric: "Temperature",
        unidad: "\xBAC",
        metricsMonth: this.state.metricsMonth,
        dateData: this.state.dateData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_chart_AverageMonthChart_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        metrica: this.state.metrica,
        metric: "Temperature",
        unidad: "\xBAC",
        metricsMonth: this.state.metricsMonth,
        dateData: this.state.dateData
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Ingresa una fecha con informaci\xF3n"));
    }
  }]);

  return Temperature;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Temperature);

/***/ }),

/***/ "./components/helpers/Calendar.jsx":
/*!*****************************************!*\
  !*** ./components/helpers/Calendar.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    }
  };
};

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      // Estado
      startDate: moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYY/MM/DD") // Fecha inicial Ninguna

    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Calendar, [{
    key: "handleChange",
    value: function handleChange(e) {
      console.log(e.target.value);
      var dateSelected = e.target.value; // Iguala el estado con la fecha (Que elige el usuario) cuando haya un cambio

      this.setState({
        startDate: dateSelected // Parametro que recibe el manejador

      });
      this.props.onChange(dateSelected); // Se ejecuta el método reciveDataDay() declarado en el padre que se pasó como
      // props: onChange = {this.reciveDataDay} y que devuelva el valor de date
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange() {
      console.log(this.state.startDate);
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: classes.container,
        noValidate: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: this.props,
        label: "Fecha",
        type: "date",
        name: this.props,
        onChange: this.handleChange,
        onClick: this.handleOnChange,
        defaultValue: this.state.startDate,
        value: this.state.startDate,
        className: classes.textField,
        InputLabelProps: {
          shrink: true
        }
      }));
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Calendar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Calendar));

/***/ }),

/***/ "./components/helpers/CsaComponents.jsx":
/*!**********************************************!*\
  !*** ./components/helpers/CsaComponents.jsx ***!
  \**********************************************/
/*! exports provided: Locacion, Temperature, AirQuality, Humidity, Fire, Actuators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _csa_Location_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csa/Location.jsx */ "./components/csa/Location.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Locacion", function() { return _csa_Location_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _csa_Temperature_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../csa/Temperature.jsx */ "./components/csa/Temperature.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return _csa_Temperature_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _csa_AirQuality_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../csa/AirQuality.jsx */ "./components/csa/AirQuality.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AirQuality", function() { return _csa_AirQuality_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _csa_Humidity_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../csa/Humidity.jsx */ "./components/csa/Humidity.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Humidity", function() { return _csa_Humidity_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _csa_Fire_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../csa/Fire.jsx */ "./components/csa/Fire.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fire", function() { return _csa_Fire_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _csa_Actuators_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../csa/Actuators.jsx */ "./components/csa/Actuators.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Actuators", function() { return _csa_Actuators_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./components/helpers/Flama.jsx":
/*!**************************************!*\
  !*** ./components/helpers/Flama.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Flama; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

var Flama =
/*#__PURE__*/
function (_Component) {
  _inherits(Flama, _Component);

  function Flama() {
    var _getPrototypeOf2;

    _classCallCheck(this, Flama);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Flama)).call.apply(_getPrototypeOf2, [this].concat(props)));
  }

  _createClass(Flama, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s6 center"
      }, this.props.fire === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons large circle white center-align hoverable"
      }, "whatshot") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons large circle red center-align hoverable"
      }, "whatshot"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "black-text"
      }, "M\xF3dulo ", this.props.modulo)); //Fin return
    } //Fin render()

  }]);

  return Flama;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Fin Class




/***/ }),

/***/ "./components/helpers/MaterialUi.jsx":
/*!*******************************************!*\
  !*** ./components/helpers/MaterialUi.jsx ***!
  \*******************************************/
/*! exports provided: withStyles, Drawer, CssBaseline, AppBar, Toolbar, Tab, Tabs, List, Typography, Divider, IconButton, MenuIcon, Button, LocationOnIcon, WbSunnyIcon, CloudIcon, WhatshotIcon, ToysIcon, WifiTetheringIcon, ChevronLeftIcon, ChevronRightIcon, ListItem, ListItemIcon, ListItemText, InboxIcon, MailIcon, Paper, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, AccountCircleIcon, DialogActions, SendIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"]; });

/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CssBaseline", function() { return _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a; });
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a; });
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "LocationOnIcon", function() { return _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_11___default.a; });
/* harmony import */ var _material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/WbSunny */ "@material-ui/icons/WbSunny");
/* harmony import */ var _material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "WbSunnyIcon", function() { return _material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_12___default.a; });
/* harmony import */ var _material_ui_icons_Cloud__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Cloud */ "@material-ui/icons/Cloud");
/* harmony import */ var _material_ui_icons_Cloud__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cloud__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CloudIcon", function() { return _material_ui_icons_Cloud__WEBPACK_IMPORTED_MODULE_13___default.a; });
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Whatshot */ "@material-ui/icons/Whatshot");
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "WhatshotIcon", function() { return _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_14___default.a; });
/* harmony import */ var _material_ui_icons_Toys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Toys */ "@material-ui/icons/Toys");
/* harmony import */ var _material_ui_icons_Toys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Toys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ToysIcon", function() { return _material_ui_icons_Toys__WEBPACK_IMPORTED_MODULE_15___default.a; });
/* harmony import */ var _material_ui_icons_WifiTethering__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/WifiTethering */ "@material-ui/icons/WifiTethering");
/* harmony import */ var _material_ui_icons_WifiTethering__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WifiTethering__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "WifiTetheringIcon", function() { return _material_ui_icons_WifiTethering__WEBPACK_IMPORTED_MODULE_16___default.a; });
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ChevronLeftIcon", function() { return _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17___default.a; });
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_18__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ChevronRightIcon", function() { return _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_18___default.a; });
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_19__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_19___default.a; });
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_20__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ListItemIcon", function() { return _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_20___default.a; });
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ListItemText", function() { return _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21___default.a; });
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_22__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "InboxIcon", function() { return _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_22___default.a; });
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_23__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MailIcon", function() { return _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_23___default.a; });
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24___default.a; });
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a; });
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_26__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_26___default.a; });
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_27__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_27___default.a; });
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_28__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_28___default.a; });
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_29__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DialogTitle", function() { return _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_29___default.a; });
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30___default.a; });
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_31__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DialogContentText", function() { return _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_31___default.a; });
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_32__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_32___default.a; });
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_33__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "AccountCircleIcon", function() { return _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_33___default.a; });
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_34__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DialogActions", function() { return _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_34___default.a; });
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_35__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SendIcon", function() { return _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_35___default.a; });






































/***/ }),

/***/ "./components/helpers/Slider.jsx":
/*!***************************************!*\
  !*** ./components/helpers/Slider.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Slider */ "@material-ui/lab/Slider");
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var styles = {
  root: {
    width: 300
  },
  slider: {
    padding: '22px 0px'
  }
};

var MySlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MySlider, _React$Component);

  function MySlider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MySlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MySlider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });

      _this.props.sendValue(value);
    });

    return _this;
  }

  _createClass(MySlider, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "label"
      }, this.props.label, ": ", this.state.value, this.props.unidad), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4___default.a, {
        classes: {
          container: classes.slider
        },
        value: value,
        "aria-labelledby": "label",
        onChange: this.handleChange,
        min: 0,
        max: 100,
        step: 1
      }));
    }
  }]);

  return MySlider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MySlider.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(MySlider));

/***/ }),

/***/ "./components/helpers/SubmitButton.jsx":
/*!*********************************************!*\
  !*** ./components/helpers/SubmitButton.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MaterialUi.jsx */ "./components/helpers/MaterialUi.jsx");



 // Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

var styles = function styles(theme) {
  return {
    button: {
      margin: theme.spacing.unit
    },
    leftIcon: {
      marginRight: theme.spacing.unit
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    },
    iconSmall: {
      fontSize: 20
    }
  };
};

function SubmitButton(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: props.handleOnClick,
    variant: "contained",
    color: "primary",
    className: classes.button
  }, "Send", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_3__["SendIcon"], {
    className: classes.rightIcon
  })));
}

SubmitButton.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(SubmitButton));

/***/ }),

/***/ "./components/helpers/chart/AverageDayChart.jsx":
/*!******************************************************!*\
  !*** ./components/helpers/chart/AverageDayChart.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// ModulesDayChart: Gráfica de los 4 modulos para el día selecionado 
//                  (Se le pasa como props).
 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

 // Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

var AverageDayChart =
/*#__PURE__*/
function (_Component) {
  _inherits(AverageDayChart, _Component);

  function AverageDayChart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AverageDayChart);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AverageDayChart)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      metricsDay: _this.props.metricsDay,
      // objeto general con la información de los dias
      chartDataAverageDay: {},
      //Datos de grafica por dia.
      dateData: _this.props.dateData,
      // Fecha de datos que se quiere 
      unidad: _this.props.unidad,
      metric: _this.props.metric,
      metrica: _this.props.metrica // Fin de chartData
      // Fin deState

    };
    return _this;
  }

  _createClass(AverageDayChart, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      console.log("componentDidMount");
      console.log("componentDidMount");
      console.log("componentDidMount");
      console.log("metricsDay: State");
      console.log(this.state.metricsDay);
      var metric = this.state.metric; // (temperatura, calidad de aire, humedad)
      // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

      var dataMetric;

      if (metric === "Temperature") {
        dataMetric = this.state.metricsDay.totalModules.temperature;
      } else if (metric === "AirQuality") {
        dataMetric = this.state.metricsDay.totalModules.airQuality;
      } else if (metric === "Humidity") {
        dataMetric = this.state.metricsDay.totalModules.humidity;
      }

      console.log("this.state.metricsDay.totalModules.temperature :");
      console.log(this.state.metricsDay.totalModules.temperature);
      console.log("dataMetric: AverageDayChart");
      console.log(dataMetric); // Grafica de los 4 Modulos del dia

      this.setState({
        chartDataAverageDay: {
          labels: this.state.metricsDay.hours,
          datasets: [{
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M1 ".concat(this.state.metrica, " ").concat(this.state.unidad),
            //Se le pasa la metrica y su unidad
            data: dataMetric,
            fillColor: 'rgba( 215, 91, 181,1)',
            backgroundColor: 'rgba(125, 291, 181, 0.5)',
            strokeColor: 'rgba(125,32,190,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }] //Fin del DataSets
          // Fin de chartData

        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      console.log("componentWillReceiveProps"); // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      // con base a las nuevas propiedades.

      this.setState({
        metricsDay: this.props.metricsDay,
        dateData: this.props.dateData
      }); // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

      var metric = this.props.metric; // (temperatura, calidad de aire, humedad)

      var dataMetric;

      if (metric === "Temperature") {
        dataMetric = this.props.metricsDay.totalModules.temperature;
      } else if (metric === "AirQuality") {
        dataMetric = this.props.metricsDay.totalModules.airQuality;
      } else if (metric === "Humidity") {
        dataMetric = this.props.metricsDay.totalModules.humidity;
      }

      console.log("this.state.metricsDay.totalModules.temperature :");
      console.log(this.props.metricsDay.totalModules.temperature);
      console.log("dataMetric:");
      console.log(dataMetric);
      this.setState({
        chartDataAverageDay: {
          labels: this.props.metricsDay.hours,
          datasets: [{
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M1 ".concat(this.state.metrica, " ").concat(this.state.unidad),
            //Se le pasa la metrica y su unidad
            data: dataMetric,
            fillColor: 'rgba( 215, 91, 181,1)',
            backgroundColor: 'rgba(125, 291, 181, 0.5)',
            strokeColor: 'rgba(125,32,190,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }] //Fin del DataSets
          // Fin de chartData

        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var unidad = this.state.unidad; // Para llevar el valor de la unidad hasta Ticks (Etiqueta eje Y). 

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Chart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: this.state.chartDataAverageDay //width={100}
        //height={50}
        ,
        options: {
          title: {
            display: true,
            text: "Promedio de ".concat(this.state.metrica, ": d\xEDa ").concat(this.state.dateData),
            fontSize: 30,
            fontColor: 'teal'
          },
          legend: {
            display: true,
            labels: {
              fontColor: 'black',
              fontSize: 20
            }
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: 'true',
                labelString: "".concat(this.state.metrica),
                fontColor: 'black',
                fontSize: 20,
                position: 'top'
              },
              ticks: {
                display: true,
                labelString: "".concat(this.state.unidad),
                fontSize: 20,
                fontColor: 'black',
                // Include a dollar sign in the ticks
                callback: function callback(value, index, values) {
                  return "".concat(value, " ").concat(unidad);
                }
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: 'true',
                labelString: 'Hora',
                fontColor: 'black',
                fontSize: 20,
                position: 'top'
              },
              ticks: {
                display: true,
                labelString: 'Hora',
                fontSize: 16,
                fontColor: 'black'
              }
            }]
          }
        }
      }));
    }
  }]);

  return AverageDayChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AverageDayChart);

/***/ }),

/***/ "./components/helpers/chart/AverageMonthChart.jsx":
/*!********************************************************!*\
  !*** ./components/helpers/chart/AverageMonthChart.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// ModulesDayChart: Gráfica de los 4 modulos para el día selecionado 
//                  (Se le pasa como props).
 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

 // Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

var AverageMonthChart =
/*#__PURE__*/
function (_Component) {
  _inherits(AverageMonthChart, _Component);

  function AverageMonthChart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AverageMonthChart);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AverageMonthChart)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      metricsMonth: _this.props.metricsMonth,
      // objeto general con la información de los dias
      chartDataAverageMonth: {},
      //Datos de grafica por dia.
      dateData: _this.props.dateData,
      // Fecha de datos que se quiere 
      unidad: _this.props.unidad,
      metric: _this.props.metric,
      metrica: _this.props.metrica // Fin de chartData
      // Fin deState

    };
    return _this;
  }

  _createClass(AverageMonthChart, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      console.log("componentDidMount");
      var metric = this.state.metric; // (temperatura, calidad de aire, humedad)
      // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

      var TotalMetricMonth = []; // Donde se guardará el array con el promedio mensual

      if (metric === "Temperature") {
        this.state.metricsMonth.forEach(function (element) {
          TotalMetricMonth.push(element.totalTemperature);
        });
      } else if (metric === "AirQuality") {
        this.state.metricsMonth.forEach(function (element) {
          TotalMetricMonth.push(element.totalAirQuality);
        });
      } else if (metric === "Humidity") {
        this.state.metricsMonth.forEach(function (element) {
          TotalMetricMonth.push(element.totalHumidity);
        });
      }

      console.log("TotalMetricMonth: ");
      console.log(TotalMetricMonth); // Se crea el array con los diás (eje x de la gráfica)

      var daysArray = []; // Crea arreglo vacio para meter id con los dias

      this.state.metricsMonth.forEach(function (element) {
        // Itera sobre el objeto metricsMonth y coje cada valor del id(días donde hay info) ylos guarda dentro de daysArray
        daysArray.push(element.id);
      }); // Grafica de los 4 Modulos del mes

      this.setState({
        chartDataAverageMonth: {
          labels: daysArray,
          datasets: [{
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "Promedio de ".concat(this.state.metrica, ": ").concat(this.state.unidad),
            //Se le pasa la metrica y su unidad
            data: TotalMetricMonth,
            fillColor: 'rgba( 215, 91, 181,1)',
            backgroundColor: 'rgba(125, 291, 181, 0.5)',
            strokeColor: 'rgba(125,32,190,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }] //Fin del DataSets
          // Fin de chartData

        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      console.log("componentWillReceiveProps"); // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      // con base a las nuevas propiedades.

      this.setState({
        metricsDay: this.props.metricsDay,
        dateData: this.props.dateData
      }); // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

      var metric = this.props.metric; // (temperatura, calidad de aire, humedad)
      // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

      var TotalMetricMonth = []; // Donde se guardará el array con el promedio mensual

      if (metric === "Temperature") {
        this.props.metricsMonth.forEach(function (element) {
          TotalMetricMonth.push(element.totalTemperature);
        });
      } else if (metric === "AirQuality") {
        this.props.metricsMonth.forEach(function (element) {
          TotalMetricMonth.push(element.totalAirQuality);
        });
      } else if (metric === "Humidity") {
        this.props.metricsMonth.forEach(function (element) {
          TotalMetricMonth.push(element.totalHumidity);
        });
      }

      console.log("TotalMetricMonth: ");
      console.log(TotalMetricMonth); // Se crea el array con los diás (eje x de la gráfica)

      var daysArray = []; // Crea arreglo vacio para meter id con los dias

      this.state.metricsMonth.forEach(function (element) {
        // Itera sobre el objeto metricsMonth y coje cada valor del id(días donde hay info) ylos guarda dentro de daysArray
        daysArray.push(element.id);
      });
      this.setState({
        chartDataAverageMonth: {
          labels: daysArray,
          datasets: [{
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M1 ".concat(this.state.metrica, " ").concat(this.state.unidad),
            //Se le pasa la metrica y su unidad
            data: TotalMetricMonth,
            fillColor: 'rgba( 215, 91, 181,1)',
            backgroundColor: 'rgba(125, 291, 181, 0.5)',
            strokeColor: 'rgba(125,32,190,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }] //Fin del DataSets
          // Fin de chartData

        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var unidad = this.state.unidad; // Para llevar el valor de la unidad hasta Ticks (Etiqueta eje Y). 

      var split = this.state.dateData.split('-');
      var year = split[0];
      var month = split[1];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Chart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: this.state.chartDataAverageMonth //width={100}
        //height={50}
        ,
        options: {
          title: {
            display: true,
            text: "Promedio de ".concat(this.state.metrica, ": Mes ").concat(month, " de ").concat(year),
            fontSize: 30,
            fontColor: 'teal'
          },
          legend: {
            display: true,
            labels: {
              fontColor: 'black',
              fontSize: 20
            }
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: 'true',
                labelString: "".concat(this.state.metrica),
                fontColor: 'black',
                fontSize: 20,
                position: 'top'
              },
              ticks: {
                display: true,
                labelString: "".concat(this.state.unidad),
                fontSize: 20,
                fontColor: 'black',
                // Include a dollar sign in the ticks
                callback: function callback(value, index, values) {
                  return "".concat(value, " ").concat(unidad);
                }
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: 'true',
                labelString: 'Hora',
                fontColor: 'black',
                fontSize: 20,
                position: 'top'
              },
              ticks: {
                display: true,
                labelString: 'Hora',
                fontSize: 16,
                fontColor: 'black'
              }
            }]
          }
        }
      }));
    }
  }]);

  return AverageMonthChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AverageMonthChart);

/***/ }),

/***/ "./components/helpers/chart/ModulesDayChart.jsx":
/*!******************************************************!*\
  !*** ./components/helpers/chart/ModulesDayChart.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// ModulesDayChart: Gráfica de los 4 modulos para el día selecionado 
//                  (Se le pasa como props).
 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

 // Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

var ModulesDayChart =
/*#__PURE__*/
function (_Component) {
  _inherits(ModulesDayChart, _Component);

  function ModulesDayChart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModulesDayChart);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModulesDayChart)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      metricsDay: _this.props.metricsDay,
      // objeto general con la información de los dias
      chartDataModulesDay: {},
      //Datos de grafica por dia.
      dateData: _this.props.dateData,
      // Fecha de datos que se quiere 
      unidad: _this.props.unidad,
      metric: _this.props.metric,
      metrica: _this.props.metrica // Fin de chartData
      // Fin deState

    };
    return _this;
  }

  _createClass(ModulesDayChart, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      console.log("componentDidMount");
      var metric = this.state.metric; // (temperatura, calidad de aire, humedad)
      // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

      var dataMetric;

      if (metric === "Temperature") {
        dataMetric = this.state.metricsDay.temperature;
      } else if (metric === "AirQuality") {
        dataMetric = this.state.metricsDay.airQuality;
      } else if (metric === "Humidity") {
        dataMetric = this.state.metricsDay.humidity;
      }

      console.log("this.state.metricsDay.temperature:");
      console.log(this.state.metricsDay.temperature);
      console.log("dataMetric:");
      console.log(dataMetric); // Grafica de los 4 Modulos del dia

      this.setState({
        chartDataModulesDay: {
          labels: this.state.metricsDay.hours,
          datasets: [{
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M1 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            //Se le pasa la metrica y su unidad
            data: dataMetric.m1,
            fillColor: 'rgba( 215, 91, 181,1)',
            backgroundColor: 'rgba(125, 291, 181, 0.5)',
            strokeColor: 'rgba(125,32,190,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin Modulo1
          {
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M2 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: dataMetric.m2,
            fillColor: 'rgba( 225, 191, 81,1)',
            backgroundColor: 'rgba(225, 191, 81, 0.5)',
            strokeColor: 'rgba(255,252,95,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin de M2
          {
            // Modulo 3: this.state.metrics.moduleTemperature.m1
            label: "M3 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: dataMetric.m3,
            fillColor: 'rgba( 125, 191, 31,1)',
            backgroundColor: 'rgba(215, 111, 281, 0.5)',
            strokeColor: 'rgba(255,252,95,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin de M3
          {
            // Modulo 4: this.state.metrics.moduleTemperature.m1
            label: "M4 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: dataMetric.m4,
            fillColor: 'rgba( 25, 11, 31,1)',
            backgroundColor: 'rgba(25, 255, 50, 0.5)',
            strokeColor: 'rgba(55,152,85,1)',
            borderColor: 'rgba(155,14,27,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)' // Fin M4

          }] //Fin del DataSets
          // Fin de chartData

        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      // con base a las nuevas propiedades.
      this.setState({
        metricsDay: this.props.metricsDay,
        dateData: this.props.dateData
      }); // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature

      var metric = this.props.metric; // (temperatura, calidad de aire, humedad)

      var dataMetric;

      if (metric === "Temperature") {
        dataMetric = this.props.metricsDay.temperature;
      } else if (metric === "AirQuality") {
        dataMetric = this.props.metricsDay.airQuality;
      } else if (metric === "Humidity") {
        dataMetric = this.props.metricsDay.humidity;
      }

      console.log("dataMetric:");
      console.log(dataMetric);
      this.setState({
        chartDataModulesDay: {
          labels: this.props.metricsDay.hours,
          datasets: [{
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M1 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            //Se le pasa la metrica y su unidad
            data: dataMetric.m1,
            fillColor: 'rgba( 215, 91, 181,1)',
            backgroundColor: 'rgba(125, 291, 181, 0.5)',
            strokeColor: 'rgba(125,32,190,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin Modulo1
          {
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M2 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: dataMetric.m2,
            fillColor: 'rgba( 225, 191, 81,1)',
            backgroundColor: 'rgba(225, 191, 81, 0.5)',
            strokeColor: 'rgba(255,252,95,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin de M2
          {
            // Modulo 3: this.state.metrics.moduleTemperature.m1
            label: "M3 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: dataMetric.m3,
            fillColor: 'rgba( 125, 191, 31,1)',
            backgroundColor: 'rgba(215, 111, 281, 0.5)',
            strokeColor: 'rgba(255,252,95,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin de M3
          {
            // Modulo 4: this.state.metrics.moduleTemperature.m1
            label: "M4 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: dataMetric.m4,
            fillColor: 'rgba( 25, 11, 31,1)',
            backgroundColor: 'rgba(25, 255, 50, 0.5)',
            strokeColor: 'rgba(55,152,85,1)',
            borderColor: 'rgba(155,14,27,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)' // Fin M4

          }] //Fin del DataSets
          // Fin de chartData

        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var unidad = this.state.unidad; // Para llevar el valor de la unidad hasta Ticks (Etiqueta eje Y). 

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Chart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: this.state.chartDataModulesDay //width={100}
        //height={50}
        ,
        options: {
          title: {
            display: true,
            text: "Comparaci\xF3n de ".concat(this.props.metrica, ": d\xEDa ").concat(this.state.dateData),
            fontSize: 30,
            fontColor: 'teal'
          },
          legend: {
            display: true,
            labels: {
              fontColor: 'black',
              fontSize: 20
            }
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: 'true',
                labelString: "".concat(this.props.metrica),
                fontColor: 'black',
                fontSize: 20,
                position: 'top'
              },
              ticks: {
                display: true,
                labelString: "".concat(this.props.unidad),
                fontSize: 20,
                fontColor: 'black',
                // Include a dollar sign in the ticks
                callback: function callback(value, index, values) {
                  return "".concat(value, " ").concat(unidad);
                }
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: 'true',
                labelString: 'Hora',
                fontColor: 'black',
                fontSize: 20,
                position: 'top'
              },
              ticks: {
                display: true,
                labelString: 'Hora',
                fontSize: 16,
                fontColor: 'black'
              }
            }]
          }
        }
      }));
    }
  }]);

  return ModulesDayChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ModulesDayChart);

/***/ }),

/***/ "./components/helpers/chart/ModulesMonthChart.jsx":
/*!********************************************************!*\
  !*** ./components/helpers/chart/ModulesMonthChart.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// ModulesDayChart: Gráfica de los 4 modulos para el día selecionado 
//                  (Se le pasa como props).
 // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

 // Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

var ModulesMonthChart =
/*#__PURE__*/
function (_Component) {
  _inherits(ModulesMonthChart, _Component);

  function ModulesMonthChart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModulesMonthChart);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModulesMonthChart)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      metricsMonth: _this.props.metricsMonth,
      // objeto general con la información de los dias
      chartDataModulesMonth: {},
      //Datos de grafica por dia.
      dateData: _this.props.dateData,
      // Fecha de datos que se quiere 
      unidad: _this.props.unidad,
      metric: _this.props.metric,
      metrica: _this.props.metrica // Fin de chartData
      // Fin deState

    };
    return _this;
  }

  _createClass(ModulesMonthChart, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      console.log("componentDidMount");
      console.log("componentDidMount");
      console.log("componentDidMount");
      console.log("componentDidMount");
      console.log("Data Metric Month: Props");
      console.log(this.props.metricsMonth);
      console.log("Data Metric Month: State");
      console.log(this.state.metricsMonth); // Se crea el array con los diás (eje x de la gráfica)

      var daysArray = []; // Crea arreglo vacio para meter id con los dias

      this.state.metricsMonth.forEach(function (element) {
        // Itera sobre el objeto metricsMonth y coje cada valor del id(días donde hay info) ylos guarda dentro de daysArray
        daysArray.push(element.id);
      });
      console.log("daysArray:");
      console.log(daysArray); // Arreglo con los días ya creados
      //Se crea los arrays con la información de cada sensor de cada día promediado

      var m1 = []; // Valores del mes de M1

      var m2 = []; // Valores del mes de M2

      var m3 = []; // Valores del mes de M3

      var m4 = []; // Valores del mes de M4

      var metric = this.state.metric; // (temperatura, calidad de aire, humedad)

      if (metric === "Temperature") {
        this.state.metricsMonth.forEach(function (element) {
          m1.push(element.temperature[0]);
          m2.push(element.temperature[1]);
          m3.push(element.temperature[2]);
          m4.push(element.temperature[3]);
        });
      } else if (metric === "AirQuality") {
        this.state.metricsMonth.forEach(function (element) {
          m1.push(element.airQuality[0]);
          m2.push(element.airQuality[1]);
          m3.push(element.airQuality[2]);
          m4.push(element.airQuality[3]);
        });
      } else if (metric === "Humidity") {
        this.state.metricsMonth.forEach(function (element) {
          m1.push(element.humidity[0]);
          m2.push(element.humidity[1]);
          m3.push(element.humidity[2]);
          m4.push(element.humidity[3]);
        });
      }

      console.log("Metric:");
      console.log(metric);
      console.log("M1:");
      console.log(m1);
      console.log("m2:");
      console.log(m2);
      console.log("M3:");
      console.log(m3);
      console.log("M4:");
      console.log(m4); // (temperatura, calidad de aire, humedad)
      // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature
      //  Grafica de los 4 Modulos del dia

      this.setState({
        chartDataModulesMonth: {
          labels: daysArray,
          datasets: [{
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M1 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            //Se le pasa la metrica y su unidad
            data: m1,
            fillColor: 'rgba( 215, 91, 181,1)',
            backgroundColor: 'rgba(125, 291, 181, 0.5)',
            strokeColor: 'rgba(125,32,190,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin Modulo1
          {
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M2 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: m2,
            fillColor: 'rgba( 225, 191, 81,1)',
            backgroundColor: 'rgba(225, 191, 81, 0.5)',
            strokeColor: 'rgba(255,252,95,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin de M2
          {
            // Modulo 3: this.state.metrics.moduleTemperature.m1
            label: "M3 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: m3,
            fillColor: 'rgba( 125, 191, 31,1)',
            backgroundColor: 'rgba(215, 111, 281, 0.5)',
            strokeColor: 'rgba(255,252,95,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin de M3
          {
            // Modulo 4: this.state.metrics.moduleTemperature.m1
            label: "M4 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: m4,
            fillColor: 'rgba( 25, 11, 31,1)',
            backgroundColor: 'rgba(25, 255, 50, 0.5)',
            strokeColor: 'rgba(55,152,85,1)',
            borderColor: 'rgba(155,14,27,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)' // Fin M4

          }] //Fin del DataSets
          // Fin de chartData

        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      // con base a las nuevas propiedades.
      // método llamado al recibir nuevas propiedades que sirve para actualizar el estado
      console.log("componentWillReceiveProps");
      console.log("componentWillReceiveProps");
      console.log("componentWillReceiveProps");
      this.setState({
        metricsDay: this.props.metricsMonth,
        dateData: this.props.dateData
      });
      console.log("Data Metric Month: Props");
      console.log(this.props.metricsMonth);
      console.log("Data Metric Month: State");
      console.log(this.state.metricsMonth); // Se crea el array con los diás (eje x de la gráfica)

      var daysArray = []; // Crea arreglo vacio para meter id con los dias

      this.props.metricsMonth.forEach(function (element) {
        // Itera sobre el objeto metricsMonth y coje cada valor del id(días donde hay info) ylos guarda dentro de daysArray
        daysArray.push(element.id);
      });
      console.log("daysArray:");
      console.log(daysArray); // Arreglo con los días ya creados
      //Se crea los arrays con la información de cada sensor de cada día promediado

      var m1 = []; // Valores del mes de M1

      var m2 = []; // Valores del mes de M2

      var m3 = []; // Valores del mes de M3

      var m4 = []; // Valores del mes de M4

      var metric = this.props.metric; // (temperatura, calidad de aire, humedad)

      if (metric === "Temperature") {
        this.props.metricsMonth.forEach(function (element) {
          m1.push(element.temperature[0]);
          m2.push(element.temperature[1]);
          m3.push(element.temperature[2]);
          m4.push(element.temperature[3]);
        });
      } else if (metric === "AirQuality") {
        this.props.metricsMonth.forEach(function (element) {
          m1.push(element.airQuality[0]);
          m2.push(element.airQuality[1]);
          m3.push(element.airQuality[2]);
          m4.push(element.airQuality[3]);
        });
      } else if (metric === "Humidity") {
        this.props.metricsMonth.forEach(function (element) {
          m1.push(element.humidity[0]);
          m2.push(element.humidity[1]);
          m3.push(element.humidity[2]);
          m4.push(element.humidity[3]);
        });
      }

      console.log("Metric:");
      console.log(metric);
      console.log("M1:");
      console.log(m1);
      console.log("m2:");
      console.log(m2);
      console.log("M3:");
      console.log(m3);
      console.log("M4:");
      console.log(m4); // (temperatura, calidad de aire, humedad)
      // Se evalua la métrica para saber si es temperatura, calidad de aire, humedad
      // y dependiendo del resultado se le manda dentro del al setState this.state.metricsDay.temperature
      //  Grafica de los 4 Modulos del dia

      this.setState({
        chartDataModulesMonth: {
          labels: daysArray,
          datasets: [{
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M1 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            //Se le pasa la metrica y su unidad
            data: m1,
            fillColor: 'rgba( 215, 91, 181,1)',
            backgroundColor: 'rgba(125, 291, 181, 0.5)',
            strokeColor: 'rgba(125,32,190,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin Modulo1
          {
            // Modulo 1: this.state.metrics.moduleTemperature.m1
            label: "M2 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: m2,
            fillColor: 'rgba( 225, 191, 81,1)',
            backgroundColor: 'rgba(225, 191, 81, 0.5)',
            strokeColor: 'rgba(255,252,95,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin de M2
          {
            // Modulo 3: this.state.metrics.moduleTemperature.m1
            label: "M3 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: m3,
            fillColor: 'rgba( 125, 191, 31,1)',
            backgroundColor: 'rgba(215, 111, 281, 0.5)',
            strokeColor: 'rgba(255,252,95,1)',
            borderColor: 'rgba(255,214,127,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)'
          }, // Fin de M3
          {
            // Modulo 4: this.state.metrics.moduleTemperature.m1
            label: "M4 ".concat(this.props.metrica, " ").concat(this.state.unidad),
            data: m4,
            fillColor: 'rgba( 25, 11, 31,1)',
            backgroundColor: 'rgba(25, 255, 50, 0.5)',
            strokeColor: 'rgba(55,152,85,1)',
            borderColor: 'rgba(155,14,27,1)',
            borderWidth: 2,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
            pointHighlightFill: 'rgba(255,214,127,1)',
            pointHighlightStroke: 'rgba(255,214,127,1)' // Fin M4

          }] //Fin del DataSets
          // Fin de chartData

        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var unidad = this.state.unidad; // Para llevar el valor de la unidad hasta Ticks (Etiqueta eje Y). 

      var split = this.state.dateData.split('-');
      var year = split[0];
      var month = split[1];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Chart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: this.state.chartDataModulesMonth //width={100}
        //height={50}
        ,
        options: {
          title: {
            display: true,
            text: "Comparaci\xF3n de ".concat(this.state.metrica, ": Mes ").concat(month, " de ").concat(year),
            fontSize: 30,
            fontColor: 'teal'
          },
          legend: {
            display: true,
            labels: {
              fontColor: 'black',
              fontSize: 20
            }
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: 'true',
                labelString: "".concat(this.props.metrica),
                fontColor: 'black',
                fontSize: 20,
                position: 'top'
              },
              ticks: {
                display: true,
                labelString: "".concat(this.props.unidad),
                fontSize: 20,
                fontColor: 'black',
                // Include a dollar sign in the ticks
                callback: function callback(value, index, values) {
                  return "".concat(value, " ").concat(unidad);
                }
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: 'true',
                labelString: 'Hora',
                fontColor: 'black',
                fontSize: 20,
                position: 'top'
              },
              ticks: {
                display: true,
                labelString: 'Hora',
                fontSize: 16,
                fontColor: 'black'
              }
            }]
          }
        }
      }));
    }
  }]);

  return ModulesMonthChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ModulesMonthChart);

/***/ }),

/***/ "./pages/Csa.jsx":
/*!***********************!*\
  !*** ./pages/Csa.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_helpers_CsaComponents_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/helpers/CsaComponents.jsx */ "./components/helpers/CsaComponents.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/helpers/MaterialUi.jsx */ "./components/helpers/MaterialUi.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Componente CSA:
// Es un Drawer de Material Ui
// - Ubicación:
// - Sensores:
// - Actuadores:
// - Real Time



 // CsaComponents 


 // Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: _objectSpread({
      display: "flex",
      alignItems: "center",
      padding: "0 8px"
    }, theme.mixins.toolbar, {
      justifyContent: "flex-end"
    }),
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  };
};

var Csa =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Csa, _React$Component);

  function Csa() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Csa);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Csa)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      open: false
    }; // this.handleOnSubmit = this.handleOnSubmit.bind(this)

    _this.handleDrawerOpen = _this.handleDrawerOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDrawerClose = _this.handleDrawerClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Csa, [{
    key: "handleDrawerOpen",
    value: function handleDrawerOpen() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleDrawerClose",
    value: function handleDrawerClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["AppBar"] // Barra superior: Menu-Hamburguesa y CSA:
      , {
        position: "fixed",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.appBar, _defineProperty({}, classes.appBarShift, open))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
        disableGutters: !open
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.menuButton, open && classes.hide)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["MenuIcon"] // Icono de menu-Hamburguesa
      , null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
        variant: "h6",
        color: "inherit",
        noWrap: true
      }, "CSA: Control Sistematizado Agr\xEDcola"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        container: true,
        spacing: 16 //className={classes.demo}
        ,
        alignItems: "center",
        direction: "row",
        justify: "flex-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "inherit"
      }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "inherit"
      }, "Register"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Drawer"], {
        className: classes.drawer,
        variant: "persistent",
        anchor: "left",
        open: open,
        classes: {
          paper: classes.drawerPaper
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.drawerHeader
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
        onClick: this.handleDrawerClose
      }, theme.direction === "ltr" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ChevronLeftIcon"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ChevronRightIcon"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
        button: true,
        key: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/location"
        }, "Locaci\xF3n")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["LocationOnIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
        primary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/location"
        }, "LOCACI\xD3N")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
        button: true,
        key: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/temperatura"
        }, "Temperatura")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["WbSunnyIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
        primary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/temperatura"
        }, " TEMPERATURA")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
        button: true,
        key: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/humedad"
        }, " Humedad")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["CloudIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
        primary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/humedad"
        }, " HUMEDAD")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
        button: true,
        key: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/fuego"
        }, "Fuego")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["WhatshotIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
        primary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/fuego"
        }, " FUEGO")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
        button: true,
        key: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/actuadores"
        }, " Actuadores")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ToysIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
        primary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/actuadores"
        }, " ACTUADORES")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
        button: true,
        key: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/calidadAire"
        }, "Aire")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["WifiTetheringIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
        primary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/csa/calidadAire"
        }, "AIRE")
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.content, _defineProperty({}, classes.contentShift, open))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.drawerHeader
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: "/csa",
        component: _components_helpers_CsaComponents_jsx__WEBPACK_IMPORTED_MODULE_3__["Locacion"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/csa/actuadores",
        component: _components_helpers_CsaComponents_jsx__WEBPACK_IMPORTED_MODULE_3__["Actuators"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/csa/temperatura",
        component: _components_helpers_CsaComponents_jsx__WEBPACK_IMPORTED_MODULE_3__["Temperature"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/csa/humedad",
        component: _components_helpers_CsaComponents_jsx__WEBPACK_IMPORTED_MODULE_3__["Humidity"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/csa/calidadAire",
        component: _components_helpers_CsaComponents_jsx__WEBPACK_IMPORTED_MODULE_3__["AirQuality"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/csa/fuego",
        component: _components_helpers_CsaComponents_jsx__WEBPACK_IMPORTED_MODULE_3__["Fire"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/csa/location",
        component: _components_helpers_CsaComponents_jsx__WEBPACK_IMPORTED_MODULE_3__["Locacion"]
      })))))));
    }
  }]);

  return Csa;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Csa.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  withTheme: true
})(Csa));

/***/ }),

/***/ "./pages/Login.jsx":
/*!*************************!*\
  !*** ./pages/Login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/helpers/MaterialUi.jsx */ "./components/helpers/MaterialUi.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Register_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Register.jsx */ "./components/Register.jsx");
/* harmony import */ var _components_helpers_SubmitButton_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/helpers/SubmitButton.jsx */ "./components/helpers/SubmitButton.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx







var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      width: 500,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    dense: {
      marginTop: 16
    },
    menu: {
      width: 200
    },
    containe: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1.5em'
    },
    item: {
      verticalAlign: 'middle'
    }
  };
};

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      open: true,
      form: {
        email: '',
        password: ''
      } // this.handleOnSubmit = this.handleOnSubmit.bind(this)

    };
    _this.handleClickOpen = _this.handleClickOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Login, [{
    key: "handleOnSubmit",
    value: function handleOnSubmit(e) {// alert('Click')
      // e.preventDefault()
      // let form = e.target
      // console.log(form.email.value)
      // console.log(form.password.value)
      // this.setState({
      //     mail: form.email.value,
      //     password: form.password.value
      // })
      // console.log(this.state)
    }
  }, {
    key: "handleClickOpen",
    value: function handleClickOpen() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      console.log(e.target); //+ " name:"+name 

      console.log(this.state);
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      this.setState({
        form: _objectSpread({}, this.state.form, _defineProperty({}, name, value))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          open = _this$state.open,
          _this$state$form = _this$state.form,
          email = _this$state$form.email,
          password = _this$state$form.password;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        onClick: this.handleClickOpen
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["Dialog"] // <Dialog> Aqui va todo el Login </Dialog>
      // fullScreen={fullScreen}
      , {
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "responsive-dialog-title",
        className: classes.container
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], {
        id: "responsive-dialog-title"
      }, "CSA: Control Sistematizado Av\xEDcola"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogContentText"], null, "Ingrese su informaci\xF3n para validar el acceso:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleOnSubmit,
        className: classes.container,
        noValidate: true,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
        name: "email",
        label: "E-mail",
        className: classes.textField,
        type: "email",
        value: email,
        onChange: this.handleChange,
        autoComplete: "email",
        margin: "normal",
        variant: "filled"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
        id: "standard-password-input",
        name: "password",
        label: "Contrase\xF1a",
        className: classes.textField,
        type: "password",
        value: password,
        onChange: this.handleChange,
        autoComplete: "current-password",
        margin: "normal"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogContentText"], {
        className: classes.containe
      }, "No estas registrado?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.containe
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Register_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.item
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["AccountCircleIcon"], {
        className: classes.item
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["DialogActions"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: this.handleClose
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_helpers_SubmitButton_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleOnClick: this.props.handleOnSubmit,
        color: "primary"
      })))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Login.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_helpers_MaterialUi_jsx__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(Login));

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.jsx */ "./pages/Login.jsx");
/* harmony import */ var _Csa_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Csa.jsx */ "./pages/Csa.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Entry Point Next.js: index.jsx 
// Desplegará unicamente Login:(Dialog MaterialUI)
// Si estas autenticado => CSA
// sino => Register.

 //Componentes 




var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(props)));
    _this.state = {
      authed: false
    };
    _this.handleOnSubmit = _this.handleOnSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleLogout = _this.handleLogout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "handleOnSubmit",
    value: function handleOnSubmit() {
      this.setState({
        authed: true
      });
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      this.setState({
        authed: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.authed === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Csa_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleLogout
      }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        handleOnSubmit: this.handleOnSubmit
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Cloud":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Cloud" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cloud");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/Send":
/*!******************************************!*\
  !*** external "@material-ui/icons/Send" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ "@material-ui/icons/Toys":
/*!******************************************!*\
  !*** external "@material-ui/icons/Toys" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Toys");

/***/ }),

/***/ "@material-ui/icons/WbSunny":
/*!*********************************************!*\
  !*** external "@material-ui/icons/WbSunny" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WbSunny");

/***/ }),

/***/ "@material-ui/icons/Whatshot":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Whatshot" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Whatshot");

/***/ }),

/***/ "@material-ui/icons/WifiTethering":
/*!***************************************************!*\
  !*** external "@material-ui/icons/WifiTethering" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WifiTethering");

/***/ }),

/***/ "@material-ui/lab/Slider":
/*!******************************************!*\
  !*** external "@material-ui/lab/Slider" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Slider");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map