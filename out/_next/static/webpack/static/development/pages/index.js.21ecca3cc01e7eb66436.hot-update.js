webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedSteppers; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-gtm-module */ "./node_modules/react-gtm-module/dist/index.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/GroupAdd */ "./node_modules/@material-ui/icons/GroupAdd.js");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/VideoLabel */ "./node_modules/@material-ui/icons/VideoLabel.js");
/* harmony import */ var _material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Payment */ "./node_modules/@material-ui/icons/Payment.js");
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var perfect_scrollbar_react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! perfect-scrollbar-react */ "./node_modules/perfect-scrollbar-react/dist/index.min.js");
/* harmony import */ var perfect_scrollbar_react__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_react__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var perfect_scrollbar_react_dist_style_min_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! perfect-scrollbar-react/dist/style.min.css */ "./node_modules/perfect-scrollbar-react/dist/style.min.css");
/* harmony import */ var perfect_scrollbar_react_dist_style_min_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_react_dist_style_min_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var components_Lateral_Lateral_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! components/Lateral/Lateral.js */ "./components/Lateral/Lateral.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_lateral_lateralStyle_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js */ "./assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @material-ui/core/MobileStepper */ "./node_modules/@material-ui/core/esm/MobileStepper/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var pages_sections_footer_SectionFooter_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! pages-sections/footer/SectionFooter.js */ "./pages-sections/footer/SectionFooter.js");
/* harmony import */ var pages_sections_checkout_SectionContacts_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! pages-sections/checkout/SectionContacts.js */ "./pages-sections/checkout/SectionContacts.js");
/* harmony import */ var pages_sections_checkout_SectionIdentification_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! pages-sections/checkout/SectionIdentification.js */ "./pages-sections/checkout/SectionIdentification.js");
/* harmony import */ var pages_sections_checkout_SectionAnamnese_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! pages-sections/checkout/SectionAnamnese.js */ "./pages-sections/checkout/SectionAnamnese.js");
/* harmony import */ var pages_sections_checkout_SectionModal_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! pages-sections/checkout/SectionModal.js */ "./pages-sections/checkout/SectionModal.js");
/* harmony import */ var components_Justfit_Unidades_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! components/Justfit/Unidades.js */ "./components/Justfit/Unidades.js");
/* harmony import */ var assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! assets/img/logo-white.png */ "./assets/img/logo-white.png");
/* harmony import */ var assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro.js */ "./assets/jss/nextjs-material-kit-pro.js");
/* harmony import */ var _pages_sections_lateral_info__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../pages-sections/lateral-info */ "./pages-sections/lateral-info/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionPlans__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionPlans */ "./pages-sections/checkout-justfit/SectionPlans.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionFinish__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionFinish */ "./pages-sections/checkout-justfit/SectionFinish.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionSummary__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionSummary */ "./pages-sections/checkout-justfit/SectionSummary.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionForm__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionForm */ "./pages-sections/checkout-justfit/SectionForm.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionPayment__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionPayment */ "./pages-sections/checkout-justfit/SectionPayment.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionProgressBar__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionProgressBar */ "./pages-sections/checkout-justfit/SectionProgressBar.js");




var _jsxFileName = "/Users/gabrieldossantos/Desktop/checkout-justfit (1)/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















 //LATERAL 






 //LATERAL END






















 // import logo from "assets/img/logo.png";











var QontoConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])({
  alternativeLabel: {
    top: 45,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  active: {
    '& $line': {
      borderColor: '#CCDA01'
    }
  },
  completed: {
    '& $line': {
      borderColor: '#CCDA01'
    }
  },
  line: {
    borderColor: '#D3D3D3',
    borderTopWidth: 1.3,
    borderRadius: 1
  }
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_30__["default"]);
var useQontoStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    color: '#D3D3D3',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#CCDA01',
    '& $circle': {
      width: 15,
      height: 15
    }
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#FFF',
    backgroundColor: '#CCDA01',
    borderRadius: '50%',
    zIndex: 1,
    fontSize: 15,
    fontWeight: 900,
    '& $circle': {
      width: 15,
      height: 15
    }
  }
});

function QontoStepIcon(props) {
  var classes = useQontoStepIconStyles();
  var active = props.active,
      completed = props.completed;
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, classes.active, active)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 5
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 20
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 62
    }
  }));
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
var ColorlibConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
      backgroundColor: '#CCDA01'
    }
  },
  completed: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
      backgroundColor: '#CCDA01'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#ccc',
    borderRadius: 1
  }
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_30__["default"]);
var useColorlibStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    // backgroundColor: '#ccc',
    // backgroundColor: '#ffffff',
    backgroundColor: '#ccc',
    // backgroundColor: primaryColor[0],
    zIndex: 1,
    // color: '#fff',
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_52__["primaryColor"][0],
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    // backgroundImage:
    //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%)',
    // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    backgroundColor: '#ffffff'
  },
  completed: {
    // backgroundImage:
    //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
    backgroundColor: '#ffffff'
  }
});

function ColorlibStepIcon(props) {
  var _clsx2;

  var classes = useColorlibStepIconStyles();
  var active = props.active,
      completed = props.completed;
  var icons = {
    1: __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 8
      }
    }),
    2: __jsx(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 8
      }
    }),
    3: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 8
      }
    }),
    4: __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 8
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 5
    }
  }, icons[String(props.icon)]);
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The label displayed in the step icon.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};
var muiTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])({
  overrides: {
    MuiStepper: {
      root: {
        paddingTop: "0 !important",
        paddingBottom: "0 !important"
      }
    },
    MuiStepIcon: {
      root: {
        color: '#000000',
        // or 'rgba(0, 0, 0, 1)'
        '&$active': {
          color: '#000000'
        },
        '&$completed': {
          color: '#000000'
        }
      }
    },
    MuiStepLabel: {
      root: {
        flexDirection: "column-reverse !important"
      },
      label: {
        fontSize: "12px"
      }
    }
  }
});

var otherStyles = function otherStyles(theme) {
  return {
    root: {// Whatever needed
    }
  };
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      overflowX: 'hidden',
      // backgroundColor: "#ffffff"
      backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_52__["primaryColor"][0],
      '&$disabled': {
        color: 'white',
        backgroundColor: '#d3d3d3'
      }
    },
    MuiAccordionroot: {
      "&.MuiAccordion-root:before": {
        backgroundColor: "white",
        height: 0,
        display: 'none'
      },
      "&.MuiStepper-alternativeLabel": {
        flexDirection: "column-reverse"
      }
    },
    heading: {
      fontWeight: 800,
      fontSize: "12px",
      color: '#484848 !important',
      flex: 1,
      display: 'flex'
    },
    secondaryHeading: {
      display: 'flex',
      textAlign: 'right',
      justifyContent: 'flex-end',
      fontWeight: 700,
      fontSize: "12px",
      color: '#484848 !important'
    },
    heading2: {
      fontWeight: 600,
      fontSize: "12px",
      color: '#B0B0B0!important',
      flex: 1,
      display: 'flex'
    },
    secondaryHeading2: {
      display: 'flex',
      flex: 1,
      textAlign: 'right',
      justifyContent: 'flex-end',
      fontWeight: 600,
      fontSize: "12px",
      color: '#B0B0B0 !important'
    },
    button: {
      marginRight: theme.spacing(1)
    },
    btnFinish: {
      backgroundColor: '#CCDA01',
      color: "#484848",
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '14px',
      border: 0,
      width: '100%',
      padding: '20px',
      marginTop: '0px',
      borderRadius: '8px'
    },
    btnFinishDisabled: {
      display: 'none'
    },
    lateralForm: {
      height: '100%',
      backgroundColor: "#F2F2F2",
      "@media (max-width: 747px)": {
        height: 'auto'
      }
    },
    lateralFormDisabed: {
      display: 'none'
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    progress: {
      // display: "none
      margin: "0 auto"
    },
    textCenter: {
      textAlign: "center"
    },
    imgLogo: {
      maxHeight: "90px",
      margin: "0 auto"
    },
    containerLogo: {
      // textAlign: "center",
      display: "flex",
      alignItems: "center"
    },
    containerStep: {
      padding: "8px",
      "@media (max-width: 350px)": {
        paddingBottom: "10px"
      },
      backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_52__["primaryColor"][0],
      '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': _objectSpread({}, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_52__["defaultFont"], {
        color: "#ccc",
        flexDirection: "column-reverse",
        // visibility: "hidden",
        fontWeight: 500,
        // wordBreak: "break-all",
        "@media (max-width: 576px)": {
          display: "none",
          paddingBottom: "10px"
        },
        "@media (max-width: 350px)": {
          position: "absolute",
          width: "100px",
          marginLeft: "-24px"
        }
      }),
      '& .MuiStepLabel-active': {
        fontWeight: "900 !important",
        // display: "block !important",
        color: "#ffffff !important"
      },
      '& .MuiStepLabel-completed': {
        color: "#ffffff !important"
      }
    },
    containerTopo: {
      padding: 0,
      margin: 0
    },
    formInputItem: {
      "& input": {
        width: '100%',
        color: '#484848',
        background: '#FEFEFE',
        borderRadius: '5px',
        fontSize: '15px',
        padding: '10px',
        border: '2px solid #D1D1D170',
        textTransform: 'none !important'
      },
      "& h2": {
        color: '#8E8E8E',
        fontWeight: 600,
        letterSpacing: '10%',
        fontSize: '14px',
        marginTop: '10px',
        marginBottom: '1px'
      }
    },
    sideMobile: {
      position: "fixed",
      zIndex: "2",
      overflow: "scroll",
      height: "100vh"
    },
    iconSideBar: {
      background: "transparent",
      position: "fixed",
      right: 0,
      top: 0,
      padding: "35px",
      zIndex: 2,
      border: "none"
    },
    sideMobileNone: {
      display: "none"
    }
  };
});

function getSteps() {
  return ['PLANOS', 'CADASTRO', 'PAGAMENTO', "RESUMO", 'TUDO PRONTO!'];
}

function formataCPF(cpf) {
  //retira os caracteres indesejados...
  cpf = new String(cpf).replace(/[^\d]/g, ""); //realizar a formatação...

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function CustomizedSteppers() {
  var _this = this;

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(4),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      activeAnamnese = _React$useState4[0],
      setActiveAnamnese = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      showModal = _React$useState6[0],
      setShowModal = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      isLoading = _React$useState8[0],
      setIsLoading = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      validationForm = _React$useState10[0],
      setValidationForm = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState11, 2),
      validationPayment = _React$useState12[0],
      setValidationPayment = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState13, 2),
      isMobile = _React$useState14[0],
      setisMobile = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState15, 2),
      isOpenSide = _React$useState16[0],
      setIsOpenSide = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState17, 2),
      activePlan = _React$useState18[0],
      setActivePlan = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState19, 2),
      activeUnidade = _React$useState20[0],
      setActiveUnidade = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  }),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState21, 2),
      messageReturn = _React$useState22[0],
      setMessageReturn = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    FL: "00000",
    PL: "NULL"
  }),
      _React$useState24 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState23, 2),
      params = _React$useState24[0],
      setParams = _React$useState24[1];

  var _React$useState25 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([{
    codigoPlano: 600,
    descricao: "FIT PLUS CSL - MAT 0 E PRIM 14,90 MENS. 129,90",
    codigoHorario: 542,
    descricaoHorario: "LIVRE",
    condicaoPagamento: "EM 12 VEZES - CARTAO RECORRENCIA",
    descricaoEncantamento: "",
    valorMensal: 129.9,
    valorMatricula: 0.0,
    taxaAdesao: 0.0,
    valorAnuidade: 199.9,
    diaAnuidade: 1,
    mesAnuidade: "Janeiro",
    mesAnuidadeOrdinal: 1,
    duracaoPlano: 12,
    modalidades: [{
      codigo: 542,
      modalidade: "FITNESS 3",
      nrVezesSemana: 0
    }],
    msgValidacao: "",
    produtos: [{
      codigoProduto: 38,
      produto: "ADESÃO PLANO RECORRENTE",
      tipoProduto: "TD",
      valor: 0.0
    }],
    parcelas: [{
      numero: "1",
      valor: "14,90"
    }],
    parcelasAnuidade: [{
      numero: "1",
      valor: "29.98",
      valorApresentar: "R$ 29,98",
      parcela: "2",
      parcelaApresentar: "Mesma data da PARCELA 2"
    }]
  }]),
      _React$useState26 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState25, 2),
      plans = _React$useState26[0],
      setPlans = _React$useState26[1];

  var _React$useState27 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    customer: {
      companyBranchId: 26,
      name: "Teste Name",
      birthDate: "01/01/2005",
      sex: "M",
      email: "teste@teste.com",
      document: "29838096091",
      isForeigner: false,
      phones: [{
        type: "cellphone",
        number: "(11) 99999-9999"
      }],
      address: {
        address: "Rua Marcelino",
        number: "243",
        complement: "",
        district: "Santo andré",
        city: "São Paulo",
        state: "SP",
        postalCode: "09180020"
      },
      financeResponsible: {
        name: "LETICIA CLUG BASTOS GAMA",
        document: "41410072851",
        email: "LETICIACLUG@HOTMAIL.COM",
        phone: "1199911-2140",
        active: true
      },
      planData: {
        companyBranchId: 26,
        planId: 600,
        consultantId: 11650531,
        promotionId: 0,
        startDate: "2020-07-31",
        dueDate: "2020-07-31",
        cupom: "",
        nrParcelasPagamento: 12
      },
      card: {
        number: "4551789978997899",
        name: "teste de cartao",
        valid: "09/2021",
        cvv: "123",
        bandeira: 7
      },
      dcc: {
        conta: "86786876",
        contaCorrenteDV: "23",
        agencia: "213123",
        agenciaDV: "123",
        banco: "1"
      }
    } // customer: {
    //   companyBranchId: 26,
    //   name: "",
    //   birthDate: "",
    //   sex: "M",
    //   email: "",
    //   document: "",
    //   isForeigner: false,
    //   phones: [
    //     {
    //       type: "cellphone",
    //       number: ""
    //     }
    //   ],
    //   address: {
    //     address: "",
    //     number: "",
    //     complement: "",
    //     district: "",
    //     city: "",
    //     state: "",
    //     postalCode: ""
    //   },
    //   financeResponsible: {
    //     name: "",
    //     document: "",
    //     email: "",
    //     phone: "",
    //     active: true,        
    //   },        
    //   planData: {
    //     companyBranchId: 26,
    //     planId: 600,
    //     consultantId: 11650531,
    //     promotionId: 0,
    //     startDate: "2020-07-31",
    //     dueDate: "2020-07-31",
    //     cupom:"",
    //     nrParcelasPagamento: 12
    //   },    
    //   card: {
    //     number: "",
    //     name: "",
    //     valid: "",
    //     cvv: "",
    //     bandeira: "",
    //   },
    //   dcc: {
    //     conta:"",
    //     contaCorrenteDV:"",
    //     agencia:"",
    //     agenciaDV:"",
    //     banco:"",        
    //   }      
    // }

  }),
      _React$useState28 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState27, 2),
      dataSale = _React$useState28[0],
      setDataSale = _React$useState28[1];

  var steps = getSteps();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();

  var handleNext = function handleNext(step) {
    console.log(dataSale);

    switch (step) {
      case 0:
        setActiveStep(function (prevActiveStep) {
          return prevActiveStep + 1;
        });
        return;

      case 1:
        setValidationForm(true);
        return;

      case 2:
        setValidationPayment(true);
        return;

      case 3:
        saleSend(dataSale); // setActiveStep((prevActiveStep) => prevActiveStep + 1);        

        return;

      default:
        return;
    }
  };

  var handleBack = function handleBack(type) {
    switch (type) {
      case "Checkout":
        setActiveStep(function (prevActiveStep) {
          return prevActiveStep - 1;
        });
        return;

      case "Anamnese":
        if (activeAnamnese === 0) {
          setActiveStep(function (prevActiveStep) {
            return prevActiveStep - 1;
          });
        } else {
          setActiveAnamnese(function (prevActiveStep) {
            return prevActiveStep - 1;
          });
        }

        return;

      default:
        return;
    }
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
    setActiveAnamnese(0);
  };

  var handleSideBar = function handleSideBar() {
    setIsOpenSide(!isOpenSide);
  };

  var getStepContent = function getStepContent(step) {
    switch (step) {
      case 0:
        return __jsx(_pages_sections_checkout_justfit_SectionPlans__WEBPACK_IMPORTED_MODULE_55__["default"], {
          setDataSale: setDataSale,
          setActiveStep: setActiveStep,
          setActivePlan: setActivePlan,
          activePlan: activePlan,
          plans: plans,
          dataSale: dataSale,
          isMobile: isMobile,
          activeUnidade: activeUnidade,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 768,
            columnNumber: 16
          }
        });

      case 1:
        return __jsx(_pages_sections_checkout_justfit_SectionForm__WEBPACK_IMPORTED_MODULE_58__["default"], {
          setDataSale: setDataSale,
          setActiveStep: setActiveStep,
          setIsLoading: setIsLoading,
          setValidationForm: setValidationForm,
          dataSale: dataSale,
          validationForm: validationForm,
          isMobile: isMobile,
          activeUnidade: activeUnidade,
          activePlan: activePlan,
          plans: plans,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 770,
            columnNumber: 16
          }
        });

      case 2:
        return __jsx(_pages_sections_checkout_justfit_SectionPayment__WEBPACK_IMPORTED_MODULE_59__["default"], {
          setDataSale: setDataSale,
          setActiveStep: setActiveStep,
          setIsLoading: setIsLoading,
          setValidationPayment: setValidationPayment,
          dataSale: dataSale,
          validationPayment: validationPayment,
          isMobile: isMobile,
          activeUnidade: activeUnidade,
          activePlan: activePlan,
          plans: plans,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 772,
            columnNumber: 16
          }
        });

      case 3:
        return __jsx(_pages_sections_checkout_justfit_SectionSummary__WEBPACK_IMPORTED_MODULE_57__["default"], {
          dataSale: dataSale,
          setActiveStep: setActiveStep,
          isMobile: isMobile,
          activeUnidade: activeUnidade,
          activePlan: activePlan,
          plans: plans,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 774,
            columnNumber: 16
          }
        });

      case 4:
        return __jsx(_pages_sections_checkout_justfit_SectionFinish__WEBPACK_IMPORTED_MODULE_56__["default"], {
          dataSale: dataSale,
          activePlan: activePlan,
          plans: plans,
          isMobile: isMobile,
          activeUnidade: activeUnidade,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 776,
            columnNumber: 16
          }
        });

      default:
        return 'Unknown step';
    }
  };

  var saleSend = function saleSend(dataSend) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function saleSend$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            axios__WEBPACK_IMPORTED_MODULE_41___default.a.defaults.headers.post['Content-Type'] = 'application/json';
            result = false;
            setIsLoading(true);
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_41___default.a.post("https://admin.justfit.com.br/app.justfit//api/LoadPersonalOnline/CheckoutJust", dataSend).then(function (res) {
              console.log(res);

              try {
                if (res.data.code == "0") {
                  setActiveStep(4);
                  setDataLog(dataSend);
                  setDataLead(dataSend);
                } else {
                  setMessageReturn(function (prev) {
                    return {
                      code: res.data.code,
                      msg: res.data.msg
                    };
                  });
                  setDataLog(dataSend);
                  setShowModal(true);
                }
              } catch (error) {
                console.log(error);
              }
            })["catch"](function (error) {
              console.log(error);
            })["finally"](function () {
              console.log("finally");
              setIsLoading(false);
            }));

          case 5:
            result = _context.sent;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var setDataLog = function setDataLog(dataSend) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function setDataLog$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            axios__WEBPACK_IMPORTED_MODULE_41___default.a.defaults.headers.post['Content-Type'] = 'application/json';
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_41___default.a.post('/checkout/setLog.php', dataSend).then(function (res) {
              console.log(res);
            })["catch"](function (error) {
              console.log(error);
            })["finally"](function () {
              console.log("finally");
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var setDataLead = function setDataLead(dataSend) {
    var lead;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function setDataLead$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            lead = {
              name: dataSend.customer.name,
              email: dataSend.customer.email,
              sex: dataSend.customer.sex,
              birthDate: dataSend.customer.birthDate,
              phone: dataSend.customer.phones[0].number,
              cpf: formataCPF(dataSend.customer.document),
              unidade: activeUnidade,
              plano: plans[activePlan].descricao,
              finalizadoVenda: true
            };
            console.log(lead);
            axios__WEBPACK_IMPORTED_MODULE_41___default.a.defaults.headers.put['Content-Type'] = 'application/json';
            _context3.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_41___default.a.put('/checkout/setLead.php', lead).then(function (res) {
              console.log(res);
            })["catch"](function (error) {
              console.log(error);
            })["finally"](function () {
              console.log("finally");
            }));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var getPlans = function getPlans(codigo) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getPlans$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_41___default.a.post("https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/GetPlanByEmpresa?codEmpresa=".concat(codigo)).then(function (res) {
              if (res.data.error) {
                // setError(true);
                console.log(res.data.error);
                return;
              }

              if (res.data.ret.length == 0) {
                console.log(res.data.ret);
                return;
              }

              setPlans(res.data.ret);

              if (params.PL != "NULL") {
                res.data.ret.map(function (plan, i) {
                  if (plan.descricao.includes(params.PL)) {
                    setActivePlan(i);
                  }
                });
              }

              setDataSale(function (prev) {
                return _objectSpread({}, prev, {
                  customer: _objectSpread({}, prev.customer, {
                    planData: _objectSpread({}, prev.customer.planData)
                  })
                });
              });
              console.log(res.data);
            })["catch"](function (error) {
              console.log(error); // setError(true);
            })["finally"](function () {// setLoading(false);
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var tagManagerArgs = {
    gtmId: 'GTM-57XJ865'
  };
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    function initializeTagManager() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function initializeTagManager$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(react_gtm_module__WEBPACK_IMPORTED_MODULE_8___default.a.initialize(tagManagerArgs));

            case 2:
              react_gtm_module__WEBPACK_IMPORTED_MODULE_8___default.a.dataLayer({
                dataLayer: {
                  event: "initiateCheckout"
                }
              });

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }

    initializeTagManager();
    console.log("router"); // console.log(queryString.parse(location.search));

    if (window.innerWidth < 747) {
      setisMobile(true);
    }

    setParams(function (prev) {
      return _objectSpread({}, prev, {}, query_string__WEBPACK_IMPORTED_MODULE_10___default.a.parse(location.search));
    }); // setParams(queryString.parse(location.search));    
    // console.log(queryString.parse(location.search));

    console.log(params); // getUnidade(26);
  }, []);

  var getUnidade = function getUnidade(cod) {
    var unidadeSelected;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getUnidade$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(components_Justfit_Unidades_js__WEBPACK_IMPORTED_MODULE_50__["default"])(cod));

          case 2:
            unidadeSelected = _context6.sent;
            setActiveUnidade(unidadeSelected.nome);
            setDataSale(function (prev) {
              return _objectSpread({}, prev, {
                customer: _objectSpread({}, prev.customer, {
                  companyBranchId: unidadeSelected.codigo,
                  planData: _objectSpread({}, prev.customer.planData, {
                    companyBranchId: unidadeSelected.codigo
                  })
                })
              });
            });
            setActiveUnidade(unidadeSelected.nome);
            getPlans(unidadeSelected.codigo);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, null, Promise);
  };

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("params");
    console.log(params);

    if (params.FL != "00000") {
      getUnidade(params.FL);
    }
  }, [params]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("activePlan");
    console.log(activePlan);
    setDataSale(function (prev) {
      return _objectSpread({}, prev, {
        customer: _objectSpread({}, prev.customer, {
          planData: _objectSpread({}, prev.customer.planData, {
            planId: plans[activePlan].codigoPlano
          })
        })
      });
    });
  }, [activePlan]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("plans");
    console.log(plans);
    setDataSale(function (prev) {
      return _objectSpread({}, prev, {
        customer: _objectSpread({}, prev.customer, {
          planData: _objectSpread({}, prev.customer.planData, {
            planId: plans[activePlan].codigoPlano
          })
        })
      });
    });
  }, [plans]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("activePlan");
    console.log(activePlan);
    setDataSale(function (prev) {
      return _objectSpread({}, prev, {
        customer: _objectSpread({}, prev.customer, {
          companyBranchId: params.FL.substr(params.FL.length - 2),
          planData: _objectSpread({}, prev.customer.planData, {
            planId: plans[activePlan].codigoPlano
          })
        })
      });
    });
  }, [activePlan]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("dataSale");
    console.log(dataSale);
  }, [dataSale]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("activeStep");
    console.log(activeStep);
    window.scrollTo(0, 0); // if(activeStep == 3){
    //   saleSend(dataSale);
    // }
  }, [activeStep]);

  var _React$useState29 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState30 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState29, 2),
      expanded = _React$useState30[0],
      setExpanded = _React$useState30[1];

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
      window.scrollTo(0, 0);
    };
  };

  var handleBlurCupom = function handleBlurCupom() {
    return function (event) {
      console.log("cupom");
      console.log(event.target.value);
      var setCupom = event.target.value;
      setDataSale(function (prev) {
        return _objectSpread({}, prev, {
          customer: _objectSpread({}, prev.customer, {
            planData: _objectSpread({}, prev.customer.planData, {
              cupom: setCupom
            })
          })
        });
      });
    };
  };

  var formatValueParcela = function formatValueParcela(value) {
    var returnValue = new String(value).replace(",", ".");
    var returnDecimal = parseFloat(returnValue).toFixed(2);
    return parseFloat(returnDecimal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_33___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 9
    }
  }, "Just Fit - Checkout")), __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 7
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      margin: 0,
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1128,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      margin: 0,
      padding: 0
    },
    xs: 12,
    sm: 12,
    md: activeStep === steps.length - 1 ? 12 : 9,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130,
      columnNumber: 11
    }
  }, __jsx(_pages_sections_checkout_justfit_SectionProgressBar__WEBPACK_IMPORTED_MODULE_60__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1132,
      columnNumber: 13
    }
  }), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    justify: "center",
    align: "center",
    style: {
      display: isMobile && "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    justify: "center",
    align: "center",
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
    theme: muiTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(QontoConnector, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1137,
        columnNumber: 82
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
      columnNumber: 21
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1139,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
      StepIconComponent: QontoStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1140,
        columnNumber: 27
      }
    }, label));
  }))))), __jsx("div", {
    style: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1150,
      columnNumber: 13
    }
  }, __jsx(pages_sections_checkout_SectionModal_js__WEBPACK_IMPORTED_MODULE_49__["default"], {
    setActive: 0,
    setShowModal: setShowModal,
    showModal: showModal,
    messageReturn: messageReturn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: classes.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154,
      columnNumber: 15
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: classes.instructions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 21
    }
  }, "All steps completed - you're finished"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_31__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160,
      columnNumber: 21
    }
  }, "Reset")) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_38__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "in": true,
    style: {
      transformOrigin: '0 0 0'
    }
  }, true ? {
    timeout: 1000
  } : undefined, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1168,
      columnNumber: 25
    }
  }), getStepContent(activeStep))))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    justify: "center",
    align: "center",
    style: {
      margin: "0 auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181,
      columnNumber: 15
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182,
      columnNumber: 17
    }
  }, __jsx("button", {
    style: {
      width: '100%',
      maxWidth: "500px"
    },
    className: activeStep === steps.length - 1 ? classes.btnFinish : classes.btnFinishDisabled,
    onClick: function onClick() {
      return window.location.assign("https://justfit.com.br/");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183,
      columnNumber: 19
    }
  }, " FINALIZAR E VOLTAR PARA HOME"))), activeStep !== 4 && __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    justify: "center",
    align: "center",
    style: {
      marginTop: '20px',
      display: !isMobile && "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1191,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_31__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return handleNext(activeStep);
    },
    className: activeStep === steps.length - 1 ? classes.colorBtnFinish : classes.colorBtnDefault,
    style: {
      width: '280px',
      height: '50px',
      color: 'white',
      backgroundColor: '#484848',
      marginBottom: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 25
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_29__["default"], {
    style: {
      color: "#ccd900"
    },
    size: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1201,
      columnNumber: 31
    }
  }) : activeStep === steps.length - 2 ? 'FINALIZAR' : 'CONTINUAR')), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_31__["default"], {
    disabled: activeStep === 0,
    onClick: function onClick() {
      return handleBack("Checkout");
    },
    className: activeStep === steps.length - 1 ? classes.disabledBurger : classes.enabledBurger,
    style: {
      width: '280px',
      color: '#484848',
      height: '50px',
      backgroundColor: '#d3d3d3'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208,
      columnNumber: 23
    }
  }, "VOLTAR")))), __jsx(pages_sections_footer_SectionFooter_js__WEBPACK_IMPORTED_MODULE_45__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1225,
      columnNumber: 13
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    className: isMobile && isOpenSide && classes.sideMobile,
    style: {
      margin: 0,
      padding: 0
    },
    xs: 12,
    sm: 12,
    md: activeStep === steps.length - 1 ? 0 : 3,
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1227,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    className: activeStep === steps.length - 1 ? classes.lateralFormDisabed : classes.lateralForm,
    style: {
      padding: 0,
      margin: 0
    },
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1228,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1229,
      columnNumber: 15
    }
  }, __jsx(components_Lateral_Lateral_js__WEBPACK_IMPORTED_MODULE_39__["default"], {
    theme: "light",
    className: classes.lateralForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230,
      columnNumber: 17
    }
  }, isMobile && __jsx("button", {
    className: classes.iconSideBar,
    onClick: function onClick() {
      return handleSideBar();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1235,
      columnNumber: 21
    }
  }, isOpenSide ? __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1238,
      columnNumber: 27
    }
  }) : __jsx("svg", {
    width: "85",
    height: "13",
    viewBox: "0 0 85 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1240,
      columnNumber: 27
    }
  }, __jsx("line", {
    x1: "59.5",
    y1: "2.5",
    x2: "83.5",
    y2: "2.5",
    stroke: "#484848",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241,
      columnNumber: 29
    }
  }), __jsx("line", {
    x1: "73.5",
    y1: "10.5",
    x2: "83.5",
    y2: "10.5",
    stroke: "#484848",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M3.79094 11H6.69494C9.32294 11 11.0389 9.416 11.0389 6.728C11.0389 4.04 9.32294 2.48 6.69494 2.48H3.79094V11ZM5.33894 9.668V3.812H6.61094C8.31494 3.812 9.44294 4.832 9.44294 6.728C9.44294 8.648 8.33894 9.668 6.61094 9.668H5.33894ZM11.99 7.94C11.99 9.68 13.25 11.144 15.278 11.144C16.802 11.144 17.738 10.268 17.738 10.268L17.15 9.176C17.15 9.176 16.37 9.848 15.386 9.848C14.474 9.848 13.646 9.296 13.55 8.228H17.774C17.774 8.228 17.81 7.82 17.81 7.64C17.81 6.02 16.862 4.736 15.098 4.736C13.274 4.736 11.99 6.056 11.99 7.94ZM13.598 7.184C13.742 6.392 14.282 5.912 15.062 5.912C15.734 5.912 16.25 6.356 16.274 7.184H13.598ZM19.3306 8.756C19.3306 10.808 21.0226 11.06 21.8746 11.06C22.1626 11.06 22.3426 11.024 22.3426 11.024V9.692C22.3426 9.692 22.2346 9.716 22.0666 9.716C21.6466 9.716 20.8546 9.572 20.8546 8.564V6.188H22.2466V4.976H20.8546V3.212H19.3666V4.976H18.5386V6.188H19.3306V8.756ZM23.074 9.236C23.074 10.46 24.058 11.144 25.15 11.144C26.542 11.144 27.022 10.064 27.01 10.064H27.034C27.034 10.064 27.01 10.256 27.01 10.496V11H28.414V7.172C28.414 5.624 27.478 4.736 25.87 4.736C24.418 4.736 23.47 5.492 23.47 5.492L24.046 6.584C24.046 6.584 24.85 5.996 25.726 5.996C26.398 5.996 26.902 6.272 26.902 7.076V7.16H26.698C25.702 7.16 23.074 7.292 23.074 9.236ZM24.61 9.164C24.61 8.312 25.87 8.204 26.65 8.204H26.914V8.348C26.914 9.092 26.338 9.956 25.534 9.956C24.91 9.956 24.61 9.572 24.61 9.164ZM29.9162 9.092C29.9162 10.844 30.9602 11.06 31.8002 11.06C32.0522 11.06 32.2802 11.024 32.2802 11.024V9.692C32.2802 9.692 32.1722 9.704 32.0522 9.704C31.6562 9.704 31.4282 9.536 31.4282 8.864V2.48H29.9162V9.092ZM33.4103 11H34.9343V8.192C34.9343 7.904 34.9583 7.64 35.0303 7.4C35.2583 6.656 35.8823 6.128 36.6863 6.128C37.4663 6.128 37.6583 6.632 37.6583 7.376V11H39.1703V7.064C39.1703 5.444 38.4023 4.736 37.0463 4.736C35.9783 4.736 35.2343 5.36 34.9343 5.948H34.9103C34.9103 5.948 34.9343 5.732 34.9343 5.432V2.48H33.4103V11ZM40.3377 7.94C40.3377 9.68 41.5977 11.144 43.6257 11.144C45.1497 11.144 46.0857 10.268 46.0857 10.268L45.4977 9.176C45.4977 9.176 44.7177 9.848 43.7337 9.848C42.8217 9.848 41.9937 9.296 41.8977 8.228H46.1217C46.1217 8.228 46.1577 7.82 46.1577 7.64C46.1577 6.02 45.2097 4.736 43.4457 4.736C41.6217 4.736 40.3377 6.056 40.3377 7.94ZM41.9457 7.184C42.0897 6.392 42.6297 5.912 43.4097 5.912C44.0817 5.912 44.5977 6.356 44.6217 7.184H41.9457ZM46.8982 10.244C46.8982 10.244 47.7502 11.144 49.2742 11.144C50.7262 11.144 51.6142 10.328 51.6142 9.308C51.6142 7.34 48.6382 7.448 48.6382 6.584C48.6382 6.2 49.0222 6.032 49.4182 6.032C50.3542 6.032 50.9182 6.56 50.9182 6.56L51.4822 5.432C51.4822 5.432 50.8102 4.736 49.4302 4.736C48.1102 4.736 47.0902 5.396 47.0902 6.536C47.0902 8.504 50.0662 8.384 50.0662 9.296C50.0662 9.656 49.6942 9.848 49.2622 9.848C48.2662 9.848 47.5942 9.176 47.5942 9.176L46.8982 10.244Z",
    fill: "#484848",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243,
      columnNumber: 29
    }
  }))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    className: isMobile && !isOpenSide && classes.sideMobileNone,
    justify: "center",
    style: {
      padding: 0,
      marginTop: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1253,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1254,
      columnNumber: 21
    }
  }, __jsx("h5", {
    style: {
      padding: 0,
      margin: 0,
      color: '#787878',
      fontSize: '25px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1255,
      columnNumber: 23
    }
  }, "PLANO ", __jsx("strong", {
    style: {
      color: '#484848'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1255,
      columnNumber: 103
    }
  }, " ", plans[activePlan].descricao.includes("FIT") ? "FIT+" : "JUST", "  ")), __jsx("h5", {
    style: {
      padding: 0,
      margin: 0,
      marginBottom: '0px',
      fontSize: '18px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1256,
      columnNumber: 17
    }
  }, "UNIDADE ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1256,
      columnNumber: 102
    }
  }), " ", activeUnidade)), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    justify: "center",
    xs: 12,
    sm: 2,
    md: 10,
    className: classes.formInputItem,
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1260,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1261,
      columnNumber: 23
    }
  }, "INSERIR CUPOM:"), __jsx("input", {
    onBlur: handleBlurCupom(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1262,
      columnNumber: 23
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    justify: "space-between",
    align: "center",
    style: {
      marginTop: '30px'
    },
    xs: 12,
    sm: 2,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1266,
      columnNumber: 21
    }
  }, __jsx("h6", {
    style: {
      padding: 10,
      margin: 0,
      fontSize: '16px',
      textAlign: 'left',
      fontWeight: 600,
      color: '#292929',
      textTransform: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1267,
      columnNumber: 23
    }
  }, "Informa\xE7\xF5es de Cobran\xE7a")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1275,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "billing-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1276,
      columnNumber: 23
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      maxHeight: '400px',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 13
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1278,
      columnNumber: 25
    }
  }, __jsx(perfect_scrollbar_react__WEBPACK_IMPORTED_MODULE_27___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1279,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "list-data",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280,
      columnNumber: 29
    }
  }, plans[activePlan].parcelas.map(function (parcela, i) {
    return __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_23__["default"], {
      className: classes.MuiAccordionroot,
      onChange: handleChange('panel' + i),
      defaultExpanded: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1284,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_24__["default"], {
      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1287,
          columnNumber: 49
        }
      }),
      "aria-controls": "panel1bh-content",
      id: "panel1bh-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1286,
        columnNumber: 35
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1291,
        columnNumber: 37
      }
    }, parcela.numero, "\xAA Cobran\xE7a"), i < plans[activePlan].parcelasAnuidade.length + 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, i == 0 ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.secondaryHeading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1296,
        columnNumber: 43
      }
    }, " R$ ", new String(parseFloat(formatValueParcela(plans[activePlan].valorMatricula) + formatValueParcela(parcela.valor)).toFixed(2)).replace(".", ","), " ") : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.secondaryHeading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1298,
        columnNumber: 43
      }
    }, " R$ ", new String(parseFloat(formatValueParcela(plans[activePlan].parcelasAnuidade[i - 1].valor) + formatValueParcela(parcela.valor)).toFixed(2)).replace(".", ","), " ")) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.secondaryHeading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1302,
        columnNumber: 41
      }
    }, "R$ ", parcela.valor, " ")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_25__["default"], {
      style: {
        display: 'flex',
        flexDirection: 'column'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1306,
        columnNumber: 35
      }
    }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
      md: 12,
      sm: 12,
      xs: 12,
      style: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        paddingRight: '33px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1307,
        columnNumber: 37
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.heading2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1308,
        columnNumber: 39
      }
    }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.secondaryHeading2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1309,
        columnNumber: 39
      }
    }, " R$ ", parcela.valor)), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
      md: 12,
      sm: 12,
      xs: 12,
      style: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        paddingRight: '33px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1311,
        columnNumber: 37
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.heading2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1312,
        columnNumber: 39
      }
    }, "Manuten\xE7\xE3o"), i < plans[activePlan].parcelasAnuidade.length + 1 && i != 0 ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.secondaryHeading2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1314,
        columnNumber: 41
      }
    }, plans[activePlan].parcelasAnuidade[i - 1].valorApresentar) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.secondaryHeading2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1316,
        columnNumber: 41
      }
    }, "R$ 0,00")), i == 0 && __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
      md: 12,
      sm: 12,
      xs: 12,
      style: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        paddingRight: '33px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1321,
        columnNumber: 39
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.heading2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1322,
        columnNumber: 41
      }
    }, "Matr\xEDcula"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: classes.secondaryHeading2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1323,
        columnNumber: 41
      }
    }, " R$  ", new String(parseFloat(plans[activePlan].valorMatricula).toFixed(2)).replace(".", ",")))));
  })))))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    justify: "center",
    align: "center",
    style: {
      marginTop: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1339,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1340,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_31__["default"], {
    disabled: isLoading ? true : false,
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return handleNext(activeStep);
    },
    className: classes.button,
    style: {
      width: '280px',
      height: '50px',
      color: 'white',
      backgroundColor: '#484848',
      marginBottom: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1342,
      columnNumber: 29
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_29__["default"], {
    style: {
      color: "#ccd900"
    },
    size: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1352,
      columnNumber: 35
    }
  }) : activeStep === steps.length - 2 ? 'FINALIZAR' : 'CONTINUAR')), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_37__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1360,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_31__["default"], {
    disabled: activeStep === 0,
    onClick: function onClick() {
      return handleBack("Checkout");
    },
    className: classes.button,
    style: {
      width: '280px',
      color: '#484848',
      height: '50px',
      backgroundColor: '#d3d3d3'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1361,
      columnNumber: 25
    }
  }, "VOLTAR")))))))))));
}

/***/ })

})
//# sourceMappingURL=index.js.21ecca3cc01e7eb66436.hot-update.js.map