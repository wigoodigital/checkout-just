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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var assets_img_credit_card_dark_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/img/credit-card-dark.png */ "./assets/img/credit-card-dark.png");
/* harmony import */ var assets_img_credit_card_dark_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_img_credit_card_dark_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var assets_img_credit_card_white_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/img/credit-card-white.png */ "./assets/img/credit-card-white.png");
/* harmony import */ var assets_img_credit_card_white_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_img_credit_card_white_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var assets_img_debit_bank_dark_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/img/debit-bank-dark.png */ "./assets/img/debit-bank-dark.png");
/* harmony import */ var assets_img_debit_bank_dark_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(assets_img_debit_bank_dark_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js */ "./assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js");
/* harmony import */ var _components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/Justfit/justfit */ "./components/Justfit/justfit.js");
/* harmony import */ var _components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/Justfit/JustfitPlans/PlanHorizontal */ "./components/Justfit/JustfitPlans/PlanHorizontal.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @hookform/resolvers */ "./node_modules/@hookform/resolvers/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");


var _jsxFileName = "/Users/gabrieldossantos/Desktop/checkout-justfit (1)/pages-sections/checkout-justfit/SectionPayment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/*eslint-disable*/


 // nodejs library that concatenates classes

 // @material-ui/core components





 // @material-ui/icons



 // core components


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_21__["default"]);
Object(yup__WEBPACK_IMPORTED_MODULE_28__["setLocale"])({
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

yup__WEBPACK_IMPORTED_MODULE_28__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_28__["string"], "dateCard", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_28__["mixed"]().test("date", message || "Por favor, digite uma data válida", function (value) {
    return isValidDateCard(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_28__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_28__["string"], "card", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_28__["mixed"]().test("card", message || "Por favor, digite um número de cartão válido", function (value) {
    return getCardFlag(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_28__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_28__["string"], "cpf", function (message) {
  // return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
  return yup__WEBPACK_IMPORTED_MODULE_28__["mixed"]().test("cpf", message || "número de CPF inválido", function (value) {
    return isValidCPF(value);
  });
});
var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_28__["object"]().shape({
  number: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().card().required(),
  name: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(),
  valid: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().dateCard().required(),
  cvv: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().matches(/^[0-9]{3}$/, 'Por favor, digite um CVV válido').required(),
  cpf: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().cpf("Por favor, informe um CPF válido"),
  cep: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().test('validCep', 'Por favor, digite um CEP válido', function (value) {
    return /^([0-9]{5}-[0-9]{3})$/.test(value);
  }),
  endereco: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(),
  numero: yup__WEBPACK_IMPORTED_MODULE_28__["number"]().required(),
  complemento: yup__WEBPACK_IMPORTED_MODULE_28__["string"](),
  bairro: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(),
  estado: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(),
  cidade: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(),
  acceptTerms: yup__WEBPACK_IMPORTED_MODULE_28__["bool"]().oneOf([true], 'O aceite dos termos é obrigatório')
});

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 10
    }
  }));
}

function SectionPayment(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('#484848'),
      firstCardColor = _useState[0],
      setFirstCardColor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('white'),
      firstCardTextColor = _useState2[0],
      setFirstCardTextColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('#F2F2F2'),
      secondCardColor = _useState3[0],
      setSecondCardColor = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('#484848'),
      secondCardTextColor = _useState4[0],
      setSecondCardTextColor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('#F2F2F2'),
      thirdCardColor = _useState5[0],
      setThirdCardColor = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('#484848'),
      thirdCardTextColor = _useState6[0],
      setThirdCardTextColor = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('block'),
      displayPayment = _useState7[0],
      setDisplayPayment = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('none'),
      displayDebit = _useState8[0],
      setDisplayDebit = _useState8[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      showError = _React$useState2[0],
      setShowError = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  }),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      messageReturn = _React$useState4[0],
      setMessageReturn = _React$useState4[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_26__["useForm"])({
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_27__["yupResolver"])(SignupSchema),
    mode: "onBlur"
  }),
      register = _useForm.register,
      trigger = _useForm.trigger,
      control = _useForm.control,
      getValues = _useForm.getValues,
      errors = _useForm.errors;

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (props.validationForm) {
      validateForm();
      props.setIsLoading(true);
      props.setValidationForm(false);
    }
  }, [props.validationForm]);
  var classes = useStyles();
  return __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.content,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 5
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }
  }, __jsx(_components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_22__["default"], {
    theme: "white",
    className: classes.jusfit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    justify: "center",
    style: {
      marginBottom: '30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    justify: "center",
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    style: {
      marginBottom: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
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
      lineNumber: 278,
      columnNumber: 19
    }
  }, "ESCOLHA SEU MEIO DE PAGAMENTO")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
      lineNumber: 281,
      columnNumber: 19
    }
  }, "Selecione uma das op\xE7\xF5es de pagamento e preencha os campos abaixo")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      lineNumber: 285,
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
      lineNumber: 287,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      backgroundColor: firstCardTextColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
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
      lineNumber: 290,
      columnNumber: 23
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z",
    fill: firstCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 27
    }
  }), __jsx("path", {
    d: "M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z",
    fill: firstCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 27
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 25
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
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
      lineNumber: 297,
      columnNumber: 29
    }
  })))), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
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
      lineNumber: 306,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      backgroundColor: secondCardTextColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
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
      lineNumber: 308,
      columnNumber: 23
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z",
    fill: secondCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 27
    }
  }), __jsx("path", {
    d: "M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z",
    fill: secondCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 27
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 25
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
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
      lineNumber: 315,
      columnNumber: 29
    }
  })))), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
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
      lineNumber: 323,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      backgroundColor: thirdCardTextColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
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
      lineNumber: 325,
      columnNumber: 23
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z",
    fill: thirdCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 27
    }
  }), __jsx("path", {
    d: "M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z",
    fill: thirdCardTextColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 27
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 25
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
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
      lineNumber: 332,
      columnNumber: 29
    }
  })))), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 23
    }
  }, "D\xE9bito em conta")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 343,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 346,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    justify: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
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
      lineNumber: 349,
      columnNumber: 27
    }
  }, "Informa\xE7\xF5es de Pagamento")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    className: errors.number ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 27
    }
  }, "N\xFAmero do Cart\xE3o"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_26__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_25___default.a,
    control: control,
    mask: "9999 9999 9999 9999",
    name: "number",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 27
    }
  }), errors.number && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 54
    }
  }, errors.number.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.valid ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 27
    }
  }, "Vencimento (MM/AAAA)"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_26__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_25___default.a,
    control: control,
    mask: "99/9999",
    name: "valid",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 27
    }
  }), errors.valid && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 54
    }
  }, errors.valid.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.cvv ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 27
    }
  }, "Cod. Seguran\xE7a"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_26__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_25___default.a,
    control: control,
    mask: "999",
    name: "cvv",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 27
    }
  }), errors.cvv && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 54
    }
  }, errors.cvv.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.name ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 27
    }
  }, "Nome impresso no Cart\xE3o"), __jsx("input", {
    ref: register,
    name: "name",
    id: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 27
    }
  }), errors.name && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 54
    }
  }, errors.name.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.cpf ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 27
    }
  }, "CPF do Titular do Cart\xE3o"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_26__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_25___default.a,
    control: control,
    mask: "999.999.999-99",
    name: "cpf",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 27
    }
  }), errors.cpf && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 54
    }
  }, errors.cpf.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 430,
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
      lineNumber: 431,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: classes.containerCheckboxT,
    style: {
      marginRight: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 31
    }
  }), __jsx("span", {
    className: classes.checkmarkT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 31
    }
  })), __jsx("h2", {
    style: {
      marginLeft: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 29
    }
  }, "Li e aceito o contrato, o ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 82
    }
  }, "termo de ades\xE3o"), " e o ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 109
    }
  }, "regulamento interno"), "."))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 442,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    justify: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 23
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
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
      lineNumber: 445,
      columnNumber: 27
    }
  }, "Informa\xE7\xF5es de Pagamento")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    className: classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 27
    }
  }, "Nome completo"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 27
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 27
    }
  }, "CPF"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 27
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 27
    }
  }, "Nome do banco"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 27
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    className: classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 27
    }
  }, "Ag\xEAncia"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 27
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    className: classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 27
    }
  }, "Conta"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 27
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    className: classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 27
    }
  }, "Digito"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 27
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 471,
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
      lineNumber: 472,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: classes.containerCheckboxT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 31
    }
  }), __jsx("span", {
    className: classes.checkmarkT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 31
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 29
    }
  }, "Li e aceito o contrato, o ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 59
    }
  }, "termo de ades\xE3o"), " e o ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 86
    }
  }, "regulamento interno"), "."))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    style: {
      marginTop: '50px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 23
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
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
      lineNumber: 487,
      columnNumber: 27
    }
  }, "Endere\xE7o de cobran\xE7a")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.cep ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 27
    }
  }, "CEP"), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_25___default.a, {
    name: "cep",
    mask: "99999-999",
    maskPlaceholder: "",
    inputRef: register() // defaultValue={""}
    ,
    onBlur: function onBlur(e) {
      // console.log(e.target.value);   
      console.log(getValues("cep"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 27
    }
  }), errors.cep && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 54
    }
  }, errors.cep.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.endereco ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 27
    }
  }, "Logradouro"), __jsx("input", {
    ref: register,
    name: "endereco",
    id: "endereco",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 27
    }
  }), errors.endereco && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 54
    }
  }, errors.endereco.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 3,
    className: errors.numero ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
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
      lineNumber: 531,
      columnNumber: 27
    }
  }), errors.numero && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 54
    }
  }, errors.numero.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.complemento ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 27
    }
  }, "Complemento"), __jsx("input", {
    ref: register,
    name: "complemento",
    id: "complemento",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 27
    }
  }), errors.complemento && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 54
    }
  }, errors.complemento.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 3,
    className: errors.estado ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 27
    }
  }, "UF"), __jsx("input", {
    ref: register,
    name: "estado",
    id: "estado",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 27
    }
  }), errors.estado && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 54
    }
  }, errors.estado.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.bairro ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 27
    }
  }, "Bairro"), __jsx("input", {
    ref: register,
    name: "bairro",
    id: "bairro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 27
    }
  }), errors.bairro && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 54
    }
  }, errors.bairro.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.cidade ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 27
    }
  }, "Cidade"), __jsx("input", {
    ref: register,
    name: "cidade",
    id: "cidade",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 27
    }
  }), errors.cidade && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 54
    }
  }, errors.cidade.message)))))))))))));
}

/***/ })

})
//# sourceMappingURL=checkout.js.d57959518c9d0c8ec2f9.hot-update.js.map