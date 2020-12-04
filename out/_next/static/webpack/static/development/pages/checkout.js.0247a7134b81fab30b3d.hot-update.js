webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./pages-sections/checkout-justfit/SectionForm.js":
/*!********************************************************!*\
  !*** ./pages-sections/checkout-justfit/SectionForm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var assets_img_google_icon_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/google-icon.png */ "./assets/img/google-icon.png");
/* harmony import */ var assets_img_google_icon_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_img_google_icon_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var assets_img_facebook_icon_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/facebook-icon.png */ "./assets/img/facebook-icon.png");
/* harmony import */ var assets_img_facebook_icon_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_img_facebook_icon_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js */ "./assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js");
/* harmony import */ var _components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/Justfit/justfit */ "./components/Justfit/justfit.js");
/* harmony import */ var _components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/Justfit/JustfitPlans/PlanHorizontal */ "./components/Justfit/JustfitPlans/PlanHorizontal.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @hookform/resolvers */ "./node_modules/@hookform/resolvers/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-gtm-module */ "./node_modules/react-gtm-module/dist/index.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_32__);




var _jsxFileName = "/Users/gabrieldossantos/Desktop/checkout-justfit (1)/pages-sections/checkout-justfit/SectionForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*eslint-disable*/
 // nodejs library that concatenates classes


 // @material-ui/core components





 // @material-ui/icons




 // core components











 // import MaskedInput from 'react-text-mask';








Object(yup__WEBPACK_IMPORTED_MODULE_30__["setLocale"])({
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';

        case 'string':
          return 'deve ser um texto';

        default:
          return 'formato errado';
      }
    },
    "default": 'é inválido',
    required: 'Desculpe, este campo é obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'deve ter exatamente ${length} caracteres',
    min: 'deve ter pelo menos ${min} caracteres',
    max: 'deve ter no máximo ${max} caracteres',
    email: 'Por favor, informe um e-mail inválido',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    notEqual: 'não pode ser igual à ${notEqual}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter no mínimo ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
});

function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/igm, '');

  if (!cpf || cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
    return false;
  }

  var soma = 0;
  var resto;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;

  for (var i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function isValidPhone(phone) {
  return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(phone);
}

function isValidDate(dateString) {
  // return /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test(date);
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false; // Parse the date parts to integers

  var parts = dateString.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10); // Check the ranges of month and year

  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Adjust for leap years

  if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) monthLength[1] = 29; // Check the range of the day

  return day > 0 && day <= monthLength[month - 1];
}

function isMaiorIdade(d1) {
  var parts = d1.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10); // d1 = new Date(month + "/" + day + "/" + year);

  d1 = new Date(year, month - 1, day);
  var d2 = new Date();
  var diff = d2.getTime() - d1.getTime();
  var idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

yup__WEBPACK_IMPORTED_MODULE_30__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_30__["string"], "cpf", function (message) {
  // return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
  return yup__WEBPACK_IMPORTED_MODULE_30__["mixed"]().test("cpf", message || "número de CPF inválido", function (value) {
    return isValidCPF(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_30__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_30__["string"], "phone", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_30__["mixed"]().test("phone", message || "número de celular inválido", function (value) {
    return isValidPhone(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_30__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_30__["string"], "dateNasc", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_30__["mixed"]().test("dateNasc", message || "Por favor, digite uma data válida", function (value) {
    return isValidDate(value);
  });
});
var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_30__["object"]().shape({
  cpf: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().cpf("Por favor, informe um CPF válido"),
  firstName: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  lastName: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  sex: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  email: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required().email(),
  phone: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().phone("Por favor, informe um número de celular válido"),
  birthDate: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().dateNasc().test('maiorIdade', 'Para continuar, você deve ter no mínimo 18 anos', function (value) {
    return isMaiorIdade(value);
  }),
  optinPhone: yup__WEBPACK_IMPORTED_MODULE_30__["bool"]().oneOf([true], 'O aceite dos termos é obrigatório'),
  optinEmail: yup__WEBPACK_IMPORTED_MODULE_30__["bool"]().oneOf([true], 'O aceite dos termos é obrigatório')
});

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 10
    }
  }));
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_23__["default"]);
function SectionForm(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      showError = _React$useState2[0],
      setShowError = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  }),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      messageReturn = _React$useState4[0],
      setMessageReturn = _React$useState4[1];

  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["useForm"])({
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_29__["yupResolver"])(SignupSchema),
    mode: "onBlur"
  }),
      register = _useForm.register,
      trigger = _useForm.trigger,
      control = _useForm.control,
      getValues = _useForm.getValues,
      errors = _useForm.errors;

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    if (props.validationForm) {
      validateForm();
      props.setIsLoading(true);
      props.setValidationForm(false);
    }
  }, [props.validationForm]);

  var validateForm = function validateForm() {
    var result, identificationForm, resultCpf, resultEmail;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function validateForm$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(trigger());

          case 2:
            result = _context.sent;

            if (!result) {
              _context.next = 19;
              break;
            }

            identificationForm = getValues();
            console.log("identificationForm");
            console.log(identificationForm);
            _context.next = 9;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(validateCpf(identificationForm.cpf));

          case 9:
            resultCpf = _context.sent;
            console.log("resultCpf");
            console.log(resultCpf);

            if (!resultCpf) {
              _context.next = 19;
              break;
            }

            _context.next = 15;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(validateEmail(identificationForm.email));

          case 15:
            resultEmail = _context.sent;
            console.log("resultEmail");
            console.log(resultEmail);

            if (resultEmail) {
              props.setDataSale(function (prevDataSale) {
                return {
                  customer: _objectSpread({}, prevDataSale.customer, {
                    name: identificationForm.firstName.toUpperCase(),
                    email: identificationForm.email,
                    document: identificationForm.cpf.replace(/[^\d]+/g, ''),
                    sex: identificationForm.sex,
                    birthDate: identificationForm.birthDate,
                    financeResponsible: _objectSpread({}, prevDataSale.customer.financeResponsible, {
                      name: identificationForm.firstName.toUpperCase(),
                      document: identificationForm.cpf.replace(/[^\d]+/g, ''),
                      email: identificationForm.email,
                      phone: identificationForm.phone.replace(/\s+/g, '')
                    }),
                    phones: [{
                      type: "cellphone",
                      number: identificationForm.phone.replace(/\s+/g, '')
                    }]
                  })
                };
              });
              props.setActiveStep(function (prevActiveStep) {
                return prevActiveStep + 1;
              });
            }

          case 19:
            props.setIsLoading(false);
            console.log(result);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }; // const validateCpf = async (cpf) => {    


  function validateCpf(cpf) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function validateCpf$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = false;
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/isValidaCpf?cpf=".concat(cpf)).then(function (res) {
              console.log(res);

              if (res.data.code !== "0") {
                setMessageReturn(function (prev) {
                  return {
                    code: res.data.code,
                    msg: res.data.msg
                  };
                });
                setShowError(true);
                return false;
              } else {
                return true;
              }
            })["catch"](function (error) {
              console.log(error);
              setShowError(true);
              return false;
            }));

          case 3:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }

  ;

  function validateEmail(email) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function validateEmail$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = false;
            _context3.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/GetByEmail?email=".concat(email)).then(function (res) {
              console.log(res);

              if (res.data.code !== "0") {
                setMessageReturn(function (prev) {
                  return {
                    code: res.data.code,
                    msg: res.data.msg
                  };
                });
                setShowError(true);
                return false;
              } else {
                return true;
              }
            })["catch"](function (error) {
              console.log(error);
              setShowError(true);
              return false;
            }));

          case 3:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  }

  ;

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setShowError(false);
  };

  return __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.content,
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: showError,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 11
    }
  }, messageReturn.msg)), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 10,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }
  }, __jsx(_components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_24__["default"], {
    theme: "white",
    className: classes.jusfit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    justify: "center",
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 10,
    sm: 10,
    md: 10,
    style: {
      marginBottom: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 13
    }
  }, __jsx("h1", {
    style: {
      fontSize: '40px',
      fontWeight: 600,
      color: "#484848",
      maxWidth: '500px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 13
    }
  }, "IDENTIFIQUE-SE PARA CONTINUAR")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    style: {
      marginBottom: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 10,
    sm: 10,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 15
    }
  }, __jsx("h5", {
    style: {
      color: "#484848",
      fontSize: '15px',
      fontWeight: 600,
      paddingTop: '0px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 19
    }
  }, "Preencha os campos abaixo para se cadastrar")), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    justify: "left",
    xs: 10,
    sm: 10,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 15
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.firstName ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 21
    }
  }, "Nome"), __jsx("input", {
    ref: register,
    name: "firstName",
    id: "firstName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 21
    }
  }), errors.firstName && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 48
    }
  }, errors.firstName.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.lastName ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 21
    }
  }, "Sobrenome"), __jsx("input", {
    ref: register,
    name: "lastName",
    id: "lastName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 21
    }
  }), errors.lastName && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 48
    }
  }, errors.lastName.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    className: errors.email ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 21
    }
  }, "E-mail"), __jsx("input", {
    name: "email",
    id: "email",
    type: "email",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 21
    }
  }), errors.email && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 48
    }
  }, errors.email.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.cpf ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }, "CPF"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_27___default.a,
    control: control,
    mask: "999.999.999-99",
    name: "cpf",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 21
    }
  }), errors.cpf && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 48
    }
  }, errors.cpf.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.sex ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 21
    }
  }, "Sexo"), __jsx("select", {
    name: "sex",
    id: "sex",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "M",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 23
    }
  }, "Masculino"), __jsx("option", {
    value: "F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 23
    }
  }, "Feminino")), errors.sex && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 48
    }
  }, errors.sex.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.birthDate ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 21
    }
  }, "Data de nascimento"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_27___default.a,
    control: control,
    mask: "99/99/9999",
    name: "birthDate",
    type: "tel",
    defaultValue: "" // onClick={(event) => {                        
    //   event.target.select();                    
    // }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 21
    }
  }), errors.birthDate && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 48
    }
  }, errors.birthDate.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.phone ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 21
    }
  }, "Celular"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_27___default.a,
    control: control,
    mask: "(99) 99999-9999",
    name: "phone",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 21
    }
  }), errors.phone && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 48
    }
  }, errors.phone.message)))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    className: classes.checkboxItem,
    style: {
      marginTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 0,
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: classes.containerCheckboxT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "optinPhone",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: classes.checkmarkT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 25
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 21
    }
  }, "Aceito receber not\xEDcias e comunicados da JustFit por SMS, Whatsapp e Liga\xE7\xE3o.")), errors.optinPhone && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 48
    }
  }, errors.optinPhone.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    className: classes.checkboxItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 0,
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: classes.containerCheckboxT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "optinEmail",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: classes.checkmarkT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 25
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 21
    }
  }, "Aceito receber not\xEDcias e comunicados da JustFit por Newsletter.")), errors.optinEmail && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 48
    }
  }, errors.optinEmail.message)))))))));
}

/***/ })

})
//# sourceMappingURL=checkout.js.0247a7134b81fab30b3d.hot-update.js.map