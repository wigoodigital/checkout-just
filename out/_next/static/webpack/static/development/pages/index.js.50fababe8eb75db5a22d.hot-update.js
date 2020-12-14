webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var assets_img_mobilestep2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/img/mobilestep2.png */ "./assets/img/mobilestep2.png");
/* harmony import */ var assets_img_mobilestep2_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(assets_img_mobilestep2_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js */ "./assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js");
/* harmony import */ var _components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/Justfit/justfit */ "./components/Justfit/justfit.js");
/* harmony import */ var _components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/Justfit/JustfitPlans/PlanHorizontal */ "./components/Justfit/JustfitPlans/PlanHorizontal.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @hookform/resolvers */ "./node_modules/@hookform/resolvers/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-gtm-module */ "./node_modules/react-gtm-module/dist/index.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_33__);




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








Object(yup__WEBPACK_IMPORTED_MODULE_31__["setLocale"])({
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

yup__WEBPACK_IMPORTED_MODULE_31__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_31__["string"], "cpf", function (message) {
  // return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
  return yup__WEBPACK_IMPORTED_MODULE_31__["mixed"]().test("cpf", message || "número de CPF inválido", function (value) {
    return isValidCPF(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_31__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_31__["string"], "phone", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_31__["mixed"]().test("phone", message || "número de celular inválido", function (value) {
    return isValidPhone(value);
  });
});
yup__WEBPACK_IMPORTED_MODULE_31__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_31__["string"], "dateNasc", function (message) {
  return yup__WEBPACK_IMPORTED_MODULE_31__["mixed"]().test("dateNasc", message || "Por favor, digite uma data válida", function (value) {
    return isValidDate(value);
  });
});
var SignupSchema = yup__WEBPACK_IMPORTED_MODULE_31__["object"]().shape({
  cpf: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().cpf("Por favor, informe um CPF válido"),
  name: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().required(),
  sex: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().required(),
  email: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().required().email(),
  phone: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().phone("Por favor, informe um número de celular válido"),
  birthDate: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().dateNasc(),
  // .dateNasc()
  // .test('maiorIdade', 'Para continuar, você deve ter no mínimo 18 anos', 
  //   function(value) {
  //       return isMaiorIdade(value);
  //   }),  
  cpfResp: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().cpf("Por favor, informe um CPF válido"),
  nameResp: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().required(),
  emailResp: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().required().email(),
  phoneResp: yup__WEBPACK_IMPORTED_MODULE_31__["string"]().phone("Por favor, informe um número de celular válido") // optinPhone: yup.bool().oneOf([true], 'O aceite dos termos é obrigatório'),    
  // optinEmail: yup.bool().oneOf([true], 'O aceite dos termos é obrigatório'),    

});

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 10
    }
  }));
}

function dataAtualFormatada() {
  var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      //+1 pois no getMonth Janeiro começa com zero.
  mesF = mes.length == 1 ? '0' + mes : mes,
      anoF = data.getFullYear();
  return diaF + "/" + mesF + "/" + anoF;
}

var formatValueParcela = function formatValueParcela(value) {
  var returnValue = new String(value).replace(",", ".");
  var returnDecimal = parseFloat(returnValue).toFixed(2);
  return parseFloat(returnDecimal);
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_24__["default"]);
function SectionForm(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      showError = _React$useState2[0],
      setShowError = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(true),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      menorIdade = _React$useState4[0],
      setMenorIdade = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  }),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      messageReturn = _React$useState6[0],
      setMessageReturn = _React$useState6[1];

  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_29__["useForm"])({
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_30__["yupResolver"])(SignupSchema),
    mode: "onBlur"
  }),
      register = _useForm.register,
      trigger = _useForm.trigger,
      control = _useForm.control,
      getValues = _useForm.getValues,
      setValue = _useForm.setValue,
      errors = _useForm.errors;

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("setValue");
    setValue("optinPhone", true);
    setValue("optinEmail", true);

    if (isMaiorIdade(props.dataSale.customer.birthDate) || props.dataSale.customer.birthDate == "") {
      setMenorIdade(false);
    }

    setValue("name", props.dataSale.customer.name);
    setValue("email", props.dataSale.customer.email);
    setValue("cpf", props.dataSale.customer.document);
    setValue("sex", props.dataSale.customer.sex);
    setValue("birthDate", props.dataSale.customer.birthDate);
    setValue("phone", props.dataSale.customer.phones[0].number);
    setValue("cpfResp", props.dataSale.customer.financeResponsible.document);
    setValue("nameResp", props.dataSale.customer.financeResponsible.name);
    setValue("emailResp", props.dataSale.customer.financeResponsible.email);
    setValue("phoneResp", props.dataSale.customer.financeResponsible.phone);
    var priceTransaction = parseFloat(formatValueParcela(props.plans[props.activePlan].parcelas[0].valor) + props.plans[props.activePlan].valorMatricula);
    react_gtm_module__WEBPACK_IMPORTED_MODULE_32___default.a.dataLayer({
      dataLayer: {
        'event': 'addPersonalInfo',
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 2
            },
            "products": [{
              'id': props.plans[props.activePlan].codigoPlano,
              'name': props.plans[props.activePlan].descricao.includes("FIT") ? "Plano Fit Plus " + props.activeUnidade : "Plano Just " + props.activeUnidade,
              'sku': props.dataSale.customer.companyBranchId,
              'category': props.plans[props.activePlan].descricao.includes("FIT") ? "Plano Fit Plus" : "Plano Just",
              'price': priceTransaction,
              'quantity': '1',
              'currency': 'BRL'
            }]
          }
        },
        'plano': {
          "codigo": props.plans[props.activePlan].codigoPlano,
          "nome": props.plans[props.activePlan].descricao.includes("FIT") ? "Plano Fit Plus" : "Plano Just",
          "preco-mat": props.plans[props.activePlan].valorMatricula,
          "preco-pp": formatValueParcela(props.plans[props.activePlan].parcelas[0].valor),
          "preco-anuidade": props.plans[props.activePlan].valorAnuidade,
          "data-matricula": dataAtualFormatada()
        },
        'unidade': {
          "id": props.dataSale.customer.companyBranchId,
          "title": props.activeUnidade
        }
      }
    });
  }, []);
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
            // var result = await trigger();
            // var result = await trigger([ "name", "email", "cpf", "sex", "birthDate", "phone" ]);
            setDataLead(getValues());
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(trigger());

          case 3:
            result = _context.sent;

            if (!result) {
              _context.next = 20;
              break;
            }

            identificationForm = getValues();
            console.log("identificationForm");
            console.log(identificationForm);
            _context.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(validateCpf(identificationForm.cpf));

          case 10:
            resultCpf = _context.sent;
            console.log("resultCpf");
            console.log(resultCpf);

            if (!resultCpf) {
              _context.next = 20;
              break;
            }

            _context.next = 16;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(validateEmail(identificationForm.email));

          case 16:
            resultEmail = _context.sent;
            console.log("resultEmail");
            console.log(resultEmail);

            if (resultEmail) {
              props.setDataSale(function (prevDataSale) {
                return {
                  customer: _objectSpread({}, prevDataSale.customer, {
                    name: removeAcento(identificationForm.name),
                    email: identificationForm.email,
                    document: identificationForm.cpf.replace(/[^\d]+/g, ''),
                    sex: identificationForm.sex,
                    birthDate: identificationForm.birthDate,
                    financeResponsible: _objectSpread({}, prevDataSale.customer.financeResponsible, {
                      name: menorIdade ? removeAcento(identificationForm.nameResp) : removeAcento(identificationForm.name),
                      document: menorIdade ? identificationForm.cpfResp.replace(/[^\d]+/g, '') : identificationForm.cpf.replace(/[^\d]+/g, ''),
                      email: menorIdade ? identificationForm.emailResp : identificationForm.email,
                      phone: menorIdade ? identificationForm.phoneResp.replace(/\s+/g, '') : identificationForm.phone.replace(/\s+/g, '')
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

          case 20:
            props.setIsLoading(false);
            console.log(result);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var setDataLead = function setDataLead(dataSend) {
    var lead;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function setDataLead$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            lead = _objectSpread({}, dataSend, {
              unidade: props.activeUnidade,
              plano: props.plans[props.activePlan].descricao,
              finalizadoVenda: false
            });
            console.log(lead);
            axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.headers.post['Content-Type'] = 'application/json';
            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/checkout/setLead.php', lead).then(function (res) {
              console.log(res);
            })["catch"](function (error) {
              console.log(error);
            })["finally"](function () {
              console.log("finally");
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }; // const validateCpf = async (cpf) => {    


  function validateCpf(cpf) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function validateCpf$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = false;
            _context3.next = 3;
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

  function validateEmail(email) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function validateEmail$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            result = false;
            _context4.next = 3;
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
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  }

  ;

  var removeAcento = function removeAcento(text) {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    text = text.toUpperCase();
    return text;
  };

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
      lineNumber: 520,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: showError,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 9
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 11
    }
  }, messageReturn.msg)), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 10,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 9
    }
  }, __jsx(_components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_25__["default"], {
    theme: "white",
    className: classes.jusfit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    justify: "center",
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 11
    }
  }, props.isMobile && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "left",
    justify: "center",
    xs: 6,
    sm: 6,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 19
    }
  }, __jsx("h2", {
    style: {
      fontSize: '17px',
      fontWeight: 600,
      color: '#484848',
      minWidth: '160px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 21
    }
  }, "IDENTIFIQUE-SE PARA CONTINUAR"), __jsx("p", {
    style: {
      minWidth: '160px',
      color: '#484848',
      fontWeight: 500,
      fontSize: '12px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 21
    }
  }, "UNIDADE ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 106
    }
  }, "BARRETOS"))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.stepMobile,
    xs: 6,
    sm: 6,
    md: 4,
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: assets_img_mobilestep2_png__WEBPACK_IMPORTED_MODULE_23___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 21
    }
  }))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    style: {
      marginBottom: '0px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 13
    }
  }, __jsx("h1", {
    style: {
      fontSize: '40px',
      fontWeight: 600,
      color: "#484848",
      maxWidth: '500px',
      display: props.isMobile && "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
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
      lineNumber: 584,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
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
      lineNumber: 588,
      columnNumber: 19
    }
  }, "Preencha os campos abaixo para se cadastrar")), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    justify: "left",
    xs: 12,
    sm: 12,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 15
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.name ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 21
    }
  }, "Nome Completo"), __jsx("input", {
    ref: register,
    name: "name",
    id: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 21
    }
  }), errors.name && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 48
    }
  }, errors.name.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.email ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
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
      lineNumber: 604,
      columnNumber: 21
    }
  }), errors.email && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 48
    }
  }, errors.email.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.phone ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 21
    }
  }, "Celular"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_29__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_28___default.a,
    control: control,
    mask: "(99) 99999-9999",
    name: "phone",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 21
    }
  }), errors.phone && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 48
    }
  }, errors.phone.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.cpf ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 21
    }
  }, "CPF"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_29__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_28___default.a,
    control: control,
    mask: "999.999.999-99",
    name: "cpf",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 21
    }
  }), errors.cpf && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
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
      lineNumber: 644,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 21
    }
  }, "Sexo"), __jsx("select", {
    name: "sex",
    id: "sex",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "M",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 23
    }
  }, "Masculino"), __jsx("option", {
    value: "F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 23
    }
  }, "Feminino")), errors.sex && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
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
      lineNumber: 656,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 21
    }
  }, "Data de nascimento"), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_28___default.a, {
    name: "birthDate",
    type: "tel",
    mask: "99/99/9999",
    maskPlaceholder: "",
    inputRef: register(),
    defaultValue: props.dataSale.customer.birthDate,
    onBlur: function onBlur(e) {
      console.log(getValues("birthDate"));
      console.log(isMaiorIdade(getValues("birthDate")));

      if (!isMaiorIdade(getValues("birthDate"))) {
        setMenorIdade(true);
        setValue("cpfResp", "");
        setValue("nameResp", "");
        setValue("emailResp", "");
        setValue("phoneResp", "");
      } else {
        setMenorIdade(false);
        setValue("cpfResp", getValues("cpf"));
        setValue("nameResp", getValues("name"));
        setValue("emailResp", getValues("email"));
        setValue("phoneResp", getValues("phone"));
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 21
    }
  }), errors.birthDate && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 48
    }
  }, errors.birthDate.message)), menorIdade && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 31
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 50
    }
  }, "Identificamos que voc\xEA \xE9 menor de idade. Insira abaixo os dados do seu respons\xE1vel para continuar"))), menorIdade && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 25
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
      lineNumber: 714,
      columnNumber: 27
    }
  }, "Preencha os campos abaixo com as informa\xE7\xF5es do seu respons\xE1vel legal")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.nameResp ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 27
    }
  }, "Nome Completo"), __jsx("input", {
    ref: register,
    name: "nameResp",
    id: "nameResp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 27
    }
  }), errors.nameResp && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 54
    }
  }, errors.nameResp.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.cpfResp ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 27
    }
  }, "CPF"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_29__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_28___default.a,
    control: control,
    mask: "999.999.999-99",
    name: "cpfResp",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 27
    }
  }), errors.cpfResp && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 54
    }
  }, errors.cpfResp.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.emailResp ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 27
    }
  }, "E-mail"), __jsx("input", {
    name: "emailResp",
    id: "emailResp",
    type: "email",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 27
    }
  }), errors.emailResp && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 54
    }
  }, errors.emailResp.message))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: errors.phoneResp ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 27
    }
  }, "Celular"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_29__["Controller"], {
    as: react_input_mask__WEBPACK_IMPORTED_MODULE_28___default.a,
    control: control,
    mask: "(99) 99999-9999",
    name: "phoneResp",
    type: "tel",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 27
    }
  }), errors.phoneResp && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 35
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 54
    }
  }, errors.phoneResp.message))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
      lineNumber: 774,
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
      lineNumber: 775,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: classes.containerCheckboxT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "optinPhone",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: classes.checkmarkT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778,
      columnNumber: 25
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 21
    }
  }, "Aceito receber not\xEDcias e comunicados da JustFit por SMS, Whatsapp e Liga\xE7\xE3o.")), errors.optinPhone && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
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
      lineNumber: 787,
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
      lineNumber: 788,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: classes.containerCheckboxT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "optinEmail",
    ref: register,
    selected: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: classes.checkmarkT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 25
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 21
    }
  }, "Aceito receber not\xEDcias e comunicados da JustFit por Newsletter.")), errors.optinEmail && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 29
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 48
    }
  }, errors.optinEmail.message)))))))));
}

/***/ })

})
//# sourceMappingURL=index.js.50fababe8eb75db5a22d.hot-update.js.map