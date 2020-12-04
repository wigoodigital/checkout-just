webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./pages-sections/checkout-justfit/SectionPayment.js":
/*!***********************************************************!*\
  !*** ./pages-sections/checkout-justfit/SectionPayment.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionPayment; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var assets_img_credit_card_dark_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/img/credit-card-dark.png */ "./assets/img/credit-card-dark.png");
/* harmony import */ var assets_img_credit_card_dark_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(assets_img_credit_card_dark_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_img_credit_card_white_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/credit-card-white.png */ "./assets/img/credit-card-white.png");
/* harmony import */ var assets_img_credit_card_white_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_img_credit_card_white_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var assets_img_debit_bank_dark_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/debit-bank-dark.png */ "./assets/img/debit-bank-dark.png");
/* harmony import */ var assets_img_debit_bank_dark_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_img_debit_bank_dark_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js */ "./assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js");
/* harmony import */ var _components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/Justfit/justfit */ "./components/Justfit/justfit.js");
/* harmony import */ var _components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/Justfit/JustfitPlans/PlanHorizontal */ "./components/Justfit/JustfitPlans/PlanHorizontal.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @hookform/resolvers */ "./node_modules/@hookform/resolvers/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");




var _jsxFileName = "/Users/gabrieldossantos/Desktop/checkout-justfit (1)/pages-sections/checkout-justfit/SectionPayment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*eslint-disable*/


 // nodejs library that concatenates classes

 // @material-ui/core components





 // @material-ui/icons



 // core components


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_23__["default"]);
Object(yup__WEBPACK_IMPORTED_MODULE_30__["setLocale"])({
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'Este campo deve ser um número';

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

function isValidDateCard(date) {
  // return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(date);
  return /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/.test(date);
}

function getCardFlag(cardnumber) {
  var cardnumber = cardnumber.replace(/[^0-9]+/g, '');
  var cards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})/,
    mastercard: /^5[1-5][0-9]{14}/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    amex: /^3[47][0-9]{13}/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
    elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}/,
    aura: /^(5078\d{2})(\d{2})(\d{11})$/
  };

  for (var flag in cards) {
    if (cards[flag].test(cardnumber)) {
      return flag;
    }
  }

  return false;
}

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

yup__WEBPACK_IMPORTED_MODULE_30__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_30__["string"], "dateCard", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_30__["mixed"]().test("date", message || "Por favor, digite uma data válida", function (value) {
    return isValidDateCard(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_30__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_30__["string"], "card", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_30__["mixed"]().test("card", message || "Por favor, digite um número de cartão válido", function (value) {
    return getCardFlag(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_30__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_30__["string"], "cpf", function (message) {
  // return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
  return yup__WEBPACK_IMPORTED_MODULE_30__["mixed"]().test("cpf", message || "número de CPF inválido", function (value) {
    return isValidCPF(value);
  });
});
var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_30__["object"]().shape({
  cep: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().test('validCep', 'Por favor, digite um CEP válido', function (value) {
    return /^([0-9]{5}-[0-9]{3})$/.test(value);
  }),
  endereco: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  numero: yup__WEBPACK_IMPORTED_MODULE_30__["number"]().required(),
  complemento: yup__WEBPACK_IMPORTED_MODULE_30__["string"](),
  bairro: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  estado: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  cidade: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required()
});
var creditCardSchema = yup__WEBPACK_IMPORTED_MODULE_30__["object"]().shape({
  nameCredit: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  cpfCredit: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().cpf("Por favor, informe um CPF válido"),
  number: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().card().required(),
  valid: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().dateCard().required(),
  cvv: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().matches(/^[0-9]{3}$/, 'Por favor, digite um CVV válido').required(),
  acceptTermsCredit: yup__WEBPACK_IMPORTED_MODULE_30__["bool"]().oneOf([true], 'O aceite dos termos é obrigatório')
});
var debitAccountSchema = yup__WEBPACK_IMPORTED_MODULE_30__["object"]().shape({
  nameDebit: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  cpfDebit: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().cpf("Por favor, informe um CPF válido"),
  banco: yup__WEBPACK_IMPORTED_MODULE_30__["string"]().required(),
  agencia: yup__WEBPACK_IMPORTED_MODULE_30__["number"]().required(),
  agenciaDV: yup__WEBPACK_IMPORTED_MODULE_30__["number"]().required(),
  conta: yup__WEBPACK_IMPORTED_MODULE_30__["number"]().required(),
  contaDV: yup__WEBPACK_IMPORTED_MODULE_30__["number"]().required(),
  acceptTermsDebit: yup__WEBPACK_IMPORTED_MODULE_30__["bool"]().oneOf([true], 'O aceite dos termos é obrigatório')
});

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 10
    }
  }));
}

function SectionPayment(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('#484848'),
      firstCardColor = _useState[0],
      setFirstCardColor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('white'),
      firstCardTextColor = _useState2[0],
      setFirstCardTextColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('#F2F2F2'),
      secondCardColor = _useState3[0],
      setSecondCardColor = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('#484848'),
      secondCardTextColor = _useState4[0],
      setSecondCardTextColor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('#F2F2F2'),
      thirdCardColor = _useState5[0],
      setThirdCardColor = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('#484848'),
      thirdCardTextColor = _useState6[0],
      setThirdCardTextColor = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('block'),
      displayPayment = _useState7[0],
      setDisplayPayment = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('none'),
      displayDebit = _useState8[0],
      setDisplayDebit = _useState8[1];

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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    endereco: "",
    bairro: "",
    estado: "",
    cidade: ""
  }),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      address = _React$useState6[0],
      setAddress = _React$useState6[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["useForm"])({
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_29__["yupResolver"])(SignupSchema),
    mode: "onBlur"
  }),
      register = _useForm.register,
      trigger = _useForm.trigger,
      control = _useForm.control,
      getValues = _useForm.getValues,
      errors = _useForm.errors;

  var _useForm2 = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["useForm"])({
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_29__["yupResolver"])(creditCardSchema),
    mode: "onBlur"
  }),
      registerCredit = _useForm2.register,
      triggerCredit = _useForm2.trigger,
      controlCredit = _useForm2.control,
      getValuesCredit = _useForm2.getValues,
      errorsCredit = _useForm2.errors;

  var _useForm3 = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["useForm"])({
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_29__["yupResolver"])(debitAccountSchema),
    mode: "onBlur"
  }),
      registerDebit = _useForm3.register,
      triggerDebit = _useForm3.trigger,
      controlDebit = _useForm3.control,
      getValuesDebit = _useForm3.getValues,
      errorsDebit = _useForm3.errors;

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    if (props.validationPayment) {
      // validateForm();  
      validateTeste();
      props.setIsLoading(true);
      props.setValidationPayment(false);
    }
  }, [props.validationPayment]);

  var validateTeste = function validateTeste() {
    var resultCredit, resultDebit;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function validateTeste$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(triggerCredit());

          case 2:
            resultCredit = _context.sent;
            console.log(resultCredit);
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(triggerDebit());

          case 6:
            resultDebit = _context.sent;
            console.log(resultDebit);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var validateForm = function validateForm() {
    var result, identificationForm;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function validateForm$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(trigger());

          case 2:
            result = _context2.sent;

            if (result) {
              identificationForm = getValues();
              console.log("identificationForm");
              console.log(identificationForm); // props.setDataSale( prevDataSale => {
              //   return {  
              //     customer: { 
              //       ...prevDataSale.customer,
              //       name: identificationForm.firstName.toUpperCase(),
              //       email: identificationForm.email,
              //       document: identificationForm.cpf.replace(/[^\d]+/g,''),   
              //       sex: identificationForm.sex,
              //       birthDate: identificationForm.birthDate,
              //       phones: [
              //         {
              //           type: "cellphone",
              //           number: identificationForm.phone.replace(/\s+/g, ''),  
              //         }
              //       ],                               
              //     }               
              //   }
              // });  

              props.setActiveStep(function (prevActiveStep) {
                return prevActiveStep + 1;
              });
            }

            props.setIsLoading(false);
            console.log(result);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var getAddress = function getAddress(cep) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getAddress$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            setAddress(function (prevAddress) {
              return _objectSpread({}, prevAddress, {
                endereco: "",
                bairro: "",
                estado: "",
                cidade: ""
              });
            });
            _context3.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://viacep.com.br/ws/".concat(cep, "/json/")).then(function (res) {
              if (res.data.error) {
                // setError(true);
                console.log(res.data.error);
                return;
              }

              setAddress(function (prevAddress) {
                return _objectSpread({}, prevAddress, {
                  cep: res.data.cep,
                  endereco: res.data.logradouro,
                  bairro: res.data.bairro,
                  estado: res.data.uf,
                  cidade: res.data.localidade
                });
              });
              trigger(["cep", "endereco", "bairro", "estado", "cidade"]);
            })["catch"](function (error) {
              console.log(error); // setError(true);
            })["finally"](function () {// setLoading(false);
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var classes = useStyles();
  return __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.content,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 5
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 7
    }
  }, __jsx(_components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_24__["default"], {
    theme: "white",
    className: classes.jusfit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    justify: "center",
    style: {
      marginBottom: '30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    justify: "center",
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 15
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    style: {
      marginBottom: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 17
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
      lineNumber: 431,
      columnNumber: 19
    }
  }, "ESCOLHA SEU MEIO DE PAGAMENTO")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 17
    }
  }, __jsx("h1", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: "#484848",
      maxWidth: '500px',
      paddingBottom: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 19
    }
  }, "Selecione uma das op\xE7\xF5es de pagamento e preencha os campos abaixo")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    justify: "start",
    align: "center",
    style: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: classes.btnCardChecked,
    style: {
      backgroundColor: firstCardColor,
      color: firstCardTextColor,
      marginLeft: 10,
      marginRight: 10
    },
    onClick: function onClick() {
      setFirstCardColor("#484848");
      setFirstCardTextColor('#FFF');
      setSecondCardColor('#F2F2F2');
      setSecondCardTextColor('#484848');
      setThirdCardColor("#F2F2F2");
      setThirdCardTextColor('#484848');
      setDisplayDebit('none');
      setDisplayPayment('block');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      backgroundColor: firstCardTextColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 23
    }
  }), __jsx("svg", {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    style: {
      marginRight: 15
    },
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 23
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z",
    fill: firstCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 27
    }
  }), __jsx("path", {
    d: "M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z",
    fill: firstCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 27
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 25
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 27
    }
  }, __jsx("rect", {
    width: "30.7987",
    height: "31",
    fill: firstCardTextColor,
    transform: "matrix(-1 0 0 1 30.7988 0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 29
    }
  })))), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 23
    }
  }, "Cart\xE3o de Cr\xE9dito")), __jsx("button", {
    className: classes.btnCard,
    style: {
      backgroundColor: secondCardColor,
      color: secondCardTextColor,
      marginLeft: 10,
      marginRight: 10,
      display: "none"
    },
    onClick: function onClick() {
      setFirstCardColor("#F2F2F2");
      setFirstCardTextColor('#484848');
      setSecondCardColor('#484848');
      setSecondCardTextColor('#FFF');
      setThirdCardColor("#F2F2F2");
      setThirdCardTextColor('#484848');
      setDisplayDebit('none');
      setDisplayPayment('block');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      backgroundColor: secondCardTextColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 23
    }
  }), __jsx("svg", {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    style: {
      marginRight: 15
    },
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 23
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z",
    fill: secondCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 27
    }
  }), __jsx("path", {
    d: "M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z",
    fill: secondCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 27
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 25
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 27
    }
  }, __jsx("rect", {
    width: "30.7987",
    height: "31",
    fill: secondCardTextColor,
    transform: "matrix(-1 0 0 1 30.7988 0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 29
    }
  })))), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 23
    }
  }, "Cart\xE3o de D\xE9bito")), __jsx("button", {
    className: classes.btnCard,
    style: {
      backgroundColor: thirdCardColor,
      color: thirdCardTextColor,
      marginLeft: 10,
      marginRight: 10
    },
    onClick: function onClick() {
      setFirstCardColor("#F2F2F2");
      setFirstCardTextColor('#484848');
      setSecondCardColor('#F2F2F2');
      setSecondCardTextColor('#484848');
      setThirdCardColor("#484848");
      setThirdCardTextColor('#FFF');
      setDisplayDebit('block');
      setDisplayPayment('none');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      backgroundColor: thirdCardTextColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 23
    }
  }), __jsx("svg", {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    style: {
      marginRight: 15
    },
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 23
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z",
    fill: thirdCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 27
    }
  }), __jsx("path", {
    d: "M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z",
    fill: thirdCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 27
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 27
    }
  }, __jsx("rect", {
    width: "30.7987",
    height: "31",
    fill: thirdCardTextColor,
    transform: "matrix(-1 0 0 1 30.7988 0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 29
    }
  })))), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 23
    }
  }, "D\xE9bito em conta")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    justify: "center",
    style: {
      marginBottom: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    style: {
      marginTop: '50px',
      display: displayPayment
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    justify: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 23
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 25
    }
  }, __jsx("h5", {
    style: {
      color: "#484848",
      fontSize: '18px',
      fontWeight: 600,
      paddingTop: '50px !important',
      padding: 0,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 27
    }
  }, "Informa\xE7\xF5es de Pagamento")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    className: errorsCredit.number ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 27
    }
  }, "N\xFAmero do Cart\xE3o"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_27___default.a,
    control: controlCredit,
    mask: "9999 9999 9999 9999",
    name: "number",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 27
    }
  }), errorsCredit.number && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 54
    }
  }, errorsCredit.number.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errorsCredit.valid ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 27
    }
  }, "Vencimento (MM/AAAA)"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_27___default.a,
    control: controlCredit,
    mask: "99/9999",
    name: "valid",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 27
    }
  }), errorsCredit.valid && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 54
    }
  }, errorsCredit.valid.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errorsCredit.cvv ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 27
    }
  }, "Cod. Seguran\xE7a"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_27___default.a,
    control: controlCredit,
    mask: "999",
    name: "cvv",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 27
    }
  }), errorsCredit.cvv && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 54
    }
  }, errorsCredit.cvv.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errorsCredit.nameCredit ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 27
    }
  }, "Nome impresso no Cart\xE3o"), __jsx("input", {
    ref: registerCredit,
    name: "nameCredit",
    id: "nameCredit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 27
    }
  }), errorsCredit.nameCredit && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 54
    }
  }, errorsCredit.nameCredit.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errorsCredit.cpfCredit ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 27
    }
  }, "CPF do Titular do Cart\xE3o"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_28__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_27___default.a,
    control: controlCredit,
    mask: "999.999.999-99",
    name: "cpfCredit",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 27
    }
  }), errorsCredit.cpfCredit && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 54
    }
  }, errorsCredit.cpfCredit.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    className: classes.checkboxItemPayment,
    style: {
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: classes.containerCheckboxT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "acceptTermsCredit",
    ref: registerCredit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 31
    }
  }), __jsx("span", {
    className: classes.checkmarkT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 31
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 29
    }
  }, "Li e aceito o contrato, o ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 59
    }
  }, "termo de ades\xE3o"), " e o ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 86
    }
  }, "regulamento interno"), ".")), errorsCredit.acceptTermsCredit && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 54
    }
  }, errorsCredit.acceptTermsCredit.message))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    style: {
      marginTop: '50px',
      display: displayDebit
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    justify: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 23
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 25
    }
  }, __jsx("h5", {
    style: {
      color: "#484848",
      fontSize: '18px',
      fontWeight: 600,
      paddingTop: '50px !important',
      padding: 0,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 27
    }
  }, "Informa\xE7\xF5es de Pagamento")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    className: errorsDebit.nameDebit ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 27
    }
  }, "Nome completo"), __jsx("input", {
    ref: registerDebit,
    name: "nameDebit",
    id: "nameDebit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 27
    }
  }), errorsDebit.nameDebit && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 54
    }
  }, errorsDebit.nameDebit.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errorsDebit.cpfDebit ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 27
    }
  }, "CPF"), __jsx("input", {
    ref: registerDebit,
    name: "cpfDebit",
    id: "cpfDebit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 27
    }
  }), errorsDebit.cpfDebit && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 54
    }
  }, errorsDebit.cpfDebit.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errorsDebit.banco ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 27
    }
  }, "Nome do banco"), __jsx("select", {
    name: "banco",
    id: "banco",
    ref: registerDebit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 29
    }
  }, "Banco do Brasil"), __jsx("option", {
    value: "341",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 29
    }
  }, "Ita\xFA"), __jsx("option", {
    value: "237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 29
    }
  }, "Bradesco"), __jsx("option", {
    value: "33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 29
    }
  }, "Santander")), errorsDebit.banco && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 54
    }
  }, errorsDebit.banco.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 9,
    className: errorsDebit.agencia ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 27
    }
  }, "Ag\xEAncia"), __jsx("input", {
    ref: registerDebit,
    name: "agencia",
    id: "agencia",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 27
    }
  }), errorsDebit.agencia && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 54
    }
  }, errorsDebit.agencia.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 3,
    className: errorsDebit.agenciaDV ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 27
    }
  }, "D\xEDgito"), __jsx("input", {
    ref: registerDebit,
    name: "agenciaDV",
    id: "agenciaDV",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 27
    }
  }), errorsDebit.agenciaDV && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 54
    }
  }, errorsDebit.agenciaDV.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 9,
    className: errorsDebit.conta ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 27
    }
  }, "Conta"), __jsx("input", {
    ref: registerDebit,
    name: "conta",
    id: "conta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 27
    }
  }), errorsDebit.conta && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 54
    }
  }, errorsDebit.conta.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 3,
    className: errorsDebit.contaDV ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 27
    }
  }, "D\xEDgito"), __jsx("input", {
    ref: registerDebit,
    name: "contaDV",
    id: "contaDV",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 27
    }
  }), errorsDebit.contaDV && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 54
    }
  }, errorsDebit.contaDV.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    className: classes.checkboxItemPayment,
    style: {
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: classes.containerCheckboxT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "acceptTermsDebit",
    ref: registerDebit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 31
    }
  }), __jsx("span", {
    className: classes.checkmarkT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 31
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 29
    }
  }, "Li e aceito o contrato, o ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 59
    }
  }, "termo de ades\xE3o"), " e o ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 86
    }
  }, "regulamento interno"), ".")), errorsDebit.acceptTermsDebit && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 54
    }
  }, errorsDebit.acceptTermsDebit.message))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    style: {
      marginTop: '50px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 23
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 25
    }
  }, __jsx("h5", {
    style: {
      color: "#484848",
      fontSize: '18px',
      fontWeight: 600,
      paddingTop: '50px !important',
      padding: 0,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 27
    }
  }, "Endere\xE7o de cobran\xE7a")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 9,
    className: errors.cep ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 27
    }
  }, "CEP"), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_27___default.a, {
    name: "cep",
    mask: "99999-999",
    maskPlaceholder: "",
    inputRef: register() // defaultValue={""}
    ,
    onBlur: function onBlur(e) {
      // console.log(e.target.value);   
      console.log(getValues("cep"));
      getAddress(getValues("cep"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 27
    }
  }), errors.cep && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 54
    }
  }, errors.cep.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 3,
    className: errors.estado ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 27
    }
  }, "UF"), __jsx("input", {
    ref: register,
    name: "estado",
    id: "estado",
    value: address.estado,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 27
    }
  }), errors.estado && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 54
    }
  }, errors.estado.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    className: errors.endereco ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731,
      columnNumber: 27
    }
  }, "Logradouro"), __jsx("input", {
    ref: register,
    name: "endereco",
    id: "endereco",
    value: address.endereco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 27
    }
  }), errors.endereco && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 54
    }
  }, errors.endereco.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.bairro ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 27
    }
  }, "Bairro"), __jsx("input", {
    ref: register,
    name: "bairro",
    id: "bairro",
    value: address.bairro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 27
    }
  }), errors.bairro && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 54
    }
  }, errors.bairro.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.cidade ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 27
    }
  }, "Cidade"), __jsx("input", {
    ref: register,
    name: "cidade",
    id: "cidade",
    value: address.cidade,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 27
    }
  }), errors.cidade && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 54
    }
  }, errors.cidade.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 3,
    className: errors.numero ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755,
      columnNumber: 27
    }
  }, "N\xFAmero"), __jsx("input", {
    ref: register,
    name: "numero",
    id: "numero",
    type: "tel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 27
    }
  }), errors.numero && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 54
    }
  }, errors.numero.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    sm: 12,
    md: 9,
    className: errors.complemento ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 27
    }
  }, "Complemento"), __jsx("input", {
    ref: register,
    name: "complemento",
    id: "complemento",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 27
    }
  }), errors.complemento && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 54
    }
  }, errors.complemento.message)))))))))))));
}

/***/ })

})
//# sourceMappingURL=checkout.js.0c37d812f7c98be58645.hot-update.js.map