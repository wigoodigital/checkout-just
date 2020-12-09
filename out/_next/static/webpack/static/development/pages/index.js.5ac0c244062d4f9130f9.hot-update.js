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
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var perfect_scrollbar_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! perfect-scrollbar-react */ "./node_modules/perfect-scrollbar-react/dist/index.min.js");
/* harmony import */ var perfect_scrollbar_react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var perfect_scrollbar_react_dist_style_min_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! perfect-scrollbar-react/dist/style.min.css */ "./node_modules/perfect-scrollbar-react/dist/style.min.css");
/* harmony import */ var perfect_scrollbar_react_dist_style_min_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_react_dist_style_min_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var components_Lateral_Lateral_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! components/Lateral/Lateral.js */ "./components/Lateral/Lateral.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_lateral_lateralStyle_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js */ "./assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @material-ui/core/MobileStepper */ "./node_modules/@material-ui/core/esm/MobileStepper/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var pages_sections_footer_SectionFooter_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! pages-sections/footer/SectionFooter.js */ "./pages-sections/footer/SectionFooter.js");
/* harmony import */ var pages_sections_checkout_SectionContacts_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! pages-sections/checkout/SectionContacts.js */ "./pages-sections/checkout/SectionContacts.js");
/* harmony import */ var pages_sections_checkout_SectionIdentification_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! pages-sections/checkout/SectionIdentification.js */ "./pages-sections/checkout/SectionIdentification.js");
/* harmony import */ var pages_sections_checkout_SectionAnamnese_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! pages-sections/checkout/SectionAnamnese.js */ "./pages-sections/checkout/SectionAnamnese.js");
/* harmony import */ var pages_sections_checkout_SectionModal_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! pages-sections/checkout/SectionModal.js */ "./pages-sections/checkout/SectionModal.js");
/* harmony import */ var assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! assets/img/logo-white.png */ "./assets/img/logo-white.png");
/* harmony import */ var assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro.js */ "./assets/jss/nextjs-material-kit-pro.js");
/* harmony import */ var _pages_sections_lateral_info__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../pages-sections/lateral-info */ "./pages-sections/lateral-info/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionPlans__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionPlans */ "./pages-sections/checkout-justfit/SectionPlans.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionFinish__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionFinish */ "./pages-sections/checkout-justfit/SectionFinish.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionSummary__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionSummary */ "./pages-sections/checkout-justfit/SectionSummary.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionForm__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionForm */ "./pages-sections/checkout-justfit/SectionForm.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionPayment__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionPayment */ "./pages-sections/checkout-justfit/SectionPayment.js");
/* harmony import */ var _pages_sections_checkout_justfit_SectionProgressBar__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../pages-sections/checkout-justfit/SectionProgressBar */ "./pages-sections/checkout-justfit/SectionProgressBar.js");




var _jsxFileName = "/Users/gabrieldossantos/Desktop/checkout-justfit (1)/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















 //LATERAL 






 //LATERAL END





















 // import logo from "assets/img/logo.png";











var QontoConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])({
  alternativeLabel: {
    top: 10,
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
    borderTopWidth: 3,
    borderRadius: 1
  }
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_29__["default"]);
var useQontoStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    color: '#D3D3D3',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#CCDA01'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#FFF',
    backgroundColor: '#CCDA01',
    borderRadius: '50%',
    zIndex: 1,
    fontSize: 20,
    fontWeight: 900
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
      lineNumber: 147,
      columnNumber: 5
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 20
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_29__["default"]);
var useColorlibStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    // backgroundColor: '#ccc',
    // backgroundColor: '#ffffff',
    backgroundColor: '#ccc',
    // backgroundColor: primaryColor[0],
    zIndex: 1,
    // color: '#fff',
    color: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_50__["primaryColor"][0],
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
        lineNumber: 232,
        columnNumber: 8
      }
    }),
    2: __jsx(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 8
      }
    }),
    3: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 8
      }
    }),
    4: __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 8
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
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
      backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_50__["primaryColor"][0],
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
      }
    },
    heading: {
      fontWeight: 800,
      fontSize: 15,
      color: '#484848 !important',
      flex: 1,
      display: 'flex'
    },
    secondaryHeading: {
      display: 'flex',
      textAlign: 'right',
      justifyContent: 'flex-end',
      fontWeight: 700,
      fontSize: 15,
      color: '#484848 !important'
    },
    heading2: {
      fontWeight: 600,
      fontSize: 14,
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
      fontSize: 14,
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
      backgroundColor: "#F2F2F2"
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
      backgroundColor: assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_50__["primaryColor"][0],
      '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': _objectSpread({}, assets_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_50__["defaultFont"], {
        color: "#ccc",
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
    }
  };
});

function getSteps() {
  return ['PLANOS', 'CADASTRO', 'PAGAMENTO', "RESUMO", 'TUDO PRONTO!'];
}

function CustomizedSteppers() {
  var _this = this;

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
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

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  }),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState13, 2),
      messageReturn = _React$useState14[0],
      setMessageReturn = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    FL: "00000",
    PL: "NULL"
  }),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState15, 2),
      params = _React$useState16[0],
      setParams = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([{
    codigoPlano: 602,
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
    }]
  }]),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState17, 2),
      plans = _React$useState18[0],
      setPlans = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    customer: {
      companyBranchId: 26,
      name: "LETICIA CLUG BASTOS GAMA",
      birthDate: "1994-02-20",
      sex: "F",
      email: "LETICIACLUG@HOTMAIL.COM",
      document: "41410072851",
      isForeigner: false,
      phones: [{
        type: "cellphone",
        number: "1199911-2140"
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
        number: "",
        name: "",
        valid: "",
        cvv: "",
        bandeira: "" // number: "4551789978997899",
        // name: "teste de cartao",
        // valid: "09/2021",
        // cvv: "123",        
        // bandeira: 7

      },
      dcc: {
        // conta:"",
        // contaCorrenteDV:"",
        // agencia:"",
        // agenciaDV:"",
        // banco:"",
        conta: "86786876",
        contaCorrenteDV: "23",
        agencia: "213123",
        agenciaDV: "123",
        banco: "1"
      }
    }
  }),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState19, 2),
      dataSale = _React$useState20[0],
      setDataSale = _React$useState20[1];

  var steps = getSteps();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();

  var handleNext = function handleNext(step) {
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

  var getStepContent = function getStepContent(step) {
    switch (step) {
      case 0:
        return __jsx(_pages_sections_checkout_justfit_SectionPlans__WEBPACK_IMPORTED_MODULE_53__["default"], {
          setDataSale: setDataSale,
          setActiveStep: setActiveStep,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 615,
            columnNumber: 16
          }
        });

      case 1:
        return __jsx(_pages_sections_checkout_justfit_SectionForm__WEBPACK_IMPORTED_MODULE_56__["default"], {
          setDataSale: setDataSale,
          setActiveStep: setActiveStep,
          setIsLoading: setIsLoading,
          setValidationForm: setValidationForm,
          validationForm: validationForm,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 617,
            columnNumber: 16
          }
        });

      case 2:
        return __jsx(_pages_sections_checkout_justfit_SectionPayment__WEBPACK_IMPORTED_MODULE_57__["default"], {
          setDataSale: setDataSale,
          setActiveStep: setActiveStep,
          setIsLoading: setIsLoading,
          setValidationPayment: setValidationPayment,
          validationPayment: validationPayment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 619,
            columnNumber: 16
          }
        });

      case 3:
        return __jsx(_pages_sections_checkout_justfit_SectionSummary__WEBPACK_IMPORTED_MODULE_55__["default"], {
          dataSale: dataSale,
          setActiveStep: setActiveStep,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 621,
            columnNumber: 16
          }
        });

      case 4:
        return __jsx(_pages_sections_checkout_justfit_SectionFinish__WEBPACK_IMPORTED_MODULE_54__["default"], {
          dataSale: dataSale,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623,
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
            axios__WEBPACK_IMPORTED_MODULE_40___default.a.defaults.headers.post['Content-Type'] = 'application/json';
            result = false;
            setIsLoading(true);
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_40___default.a.post("https://admin.justfit.com.br/app.justfit//api/LoadPersonalOnline/CheckoutJust", dataSend).then(function (res) {
              console.log(res);

              try {
                if (res.data.code == "0") {
                  setActiveStep(4);
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
            axios__WEBPACK_IMPORTED_MODULE_40___default.a.defaults.headers.post['Content-Type'] = 'application/json';
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_40___default.a.post('./checkout/setLog.php', dataSend).then(function (res) {
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

  var getPlans = function getPlans(params) {
    var FL, PL;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getPlans$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            FL = params.FL, PL = params.PL;
            _context3.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_40___default.a.post("https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/GetPlanByEmpresa?codEmpresa=".concat(FL.substr(FL.length - 2))).then(function (res) {
              if (res.data.error) {
                // setError(true);
                console.log(res.data.error);
                return;
              }

              setPlans(res.data.ret);
              console.log(res.data);
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

  var tagManagerArgs = {// gtmId: 'GTM-WPLTJG8'
  };
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    function initializeTagManager() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function initializeTagManager$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(react_gtm_module__WEBPACK_IMPORTED_MODULE_8___default.a.initialize(tagManagerArgs));

            case 2:
              react_gtm_module__WEBPACK_IMPORTED_MODULE_8___default.a.dataLayer({
                dataLayer: {
                  event: "teste",
                  userId: '001',
                  userProject: 'project',
                  page: 'home'
                }
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }

    initializeTagManager();
    console.log("router"); // console.log(queryString.parse(location.search));

    setParams(query_string__WEBPACK_IMPORTED_MODULE_10___default.a.parse(location.search));
    console.log(params);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("params");
    console.log(params);
    getPlans(params);
  }, [params]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("plans");
    console.log(plans);
  }, [plans]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log("activeStep");
    console.log(activeStep); // if(activeStep == 3){
    //   saleSend(dataSale);
    // }
  }, [activeStep]);

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState21, 2),
      expanded = _React$useState22[0],
      setExpanded = _React$useState22[1];

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_32___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 9
    }
  }, "Justfit Checkout")), __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
      columnNumber: 7
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      margin: 0,
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
      lineNumber: 784,
      columnNumber: 11
    }
  }, __jsx(_pages_sections_checkout_justfit_SectionProgressBar__WEBPACK_IMPORTED_MODULE_58__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 13
    }
  }), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_35__["default"], {
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    justify: "center",
    align: "center",
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
    theme: muiTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(QontoConnector, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 791,
        columnNumber: 82
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 21
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
      StepIconComponent: QontoStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794,
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
      lineNumber: 804,
      columnNumber: 13
    }
  }, __jsx(pages_sections_checkout_SectionModal_js__WEBPACK_IMPORTED_MODULE_48__["default"], {
    setActive: 0,
    setShowModal: setShowModal,
    showModal: showModal,
    messageReturn: messageReturn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 13
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.instructions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 19
    }
  }, "All steps completed - you're finished"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_30__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816,
      columnNumber: 19
    }
  }, "Reset")) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, activeStep === 10 ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 23
    }
  }, getStepContent(activeStep), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 25
    }
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_37__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      lineNumber: 845,
      columnNumber: 27
    }
  }), getStepContent(activeStep))))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_35__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 15
    }
  }, __jsx("button", {
    style: {
      width: '500px'
    },
    className: activeStep === steps.length - 1 ? classes.btnFinish : classes.btnFinishDisabled,
    onClick: function onClick() {
      return window.location.assign("https://justfit.com.br/");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874,
      columnNumber: 17
    }
  }, " FINALIZAR E VOLTAR PARA HOME")))), __jsx(pages_sections_footer_SectionFooter_js__WEBPACK_IMPORTED_MODULE_44__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 13
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
      lineNumber: 882,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_35__["default"], {
    className: activeStep === steps.length - 1 ? classes.lateralFormDisabed : classes.lateralForm,
    style: {
      padding: 0,
      margin: 0
    },
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 15
    }
  }, __jsx(components_Lateral_Lateral_js__WEBPACK_IMPORTED_MODULE_38__["default"], {
    theme: "light",
    className: classes.lateralForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_35__["default"], {
    justify: "center",
    style: {
      padding: 0,
      marginTop: '50px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
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
      lineNumber: 891,
      columnNumber: 23
    }
  }, "PLANO ", __jsx("strong", {
    style: {
      color: '#484848'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 103
    }
  }, "FIT+ ")), __jsx("h5", {
    style: {
      padding: 0,
      margin: 0,
      marginBottom: '30px',
      fontSize: '25px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892,
      columnNumber: 23
    }
  }, "UNIDADE BARRETOS")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
      lineNumber: 902,
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
      lineNumber: 903,
      columnNumber: 23
    }
  }, "Informa\xE7\xF5es de Cobran\xE7a")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "billing-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
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
      lineNumber: 914,
      columnNumber: 25
    }
  }, __jsx(perfect_scrollbar_react__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "list-data",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel1',
    onChange: handleChange('panel1'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel1bh-content",
    id: "panel1bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 35
    }
  }, "1\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 35
    }
  }, " R$ 59,80")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929,
      columnNumber: 35
    }
  }, " R$ 29,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 931,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933,
      columnNumber: 35
    }
  }, " R$ 29,90")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel2',
    onChange: handleChange('panel2'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel2bh-content",
    id: "panel2bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 943,
      columnNumber: 35
    }
  }, "2\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel3',
    onChange: handleChange('panel3'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 959,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel3bh-content",
    id: "panel3bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 35
    }
  }, "3\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel4',
    onChange: handleChange('panel4'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 979,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 981,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel4bh-content",
    id: "panel4bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 35
    }
  }, "4\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel5',
    onChange: handleChange('panel5'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel5bh-content",
    id: "panel5bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 35
    }
  }, "5\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel6',
    onChange: handleChange('panel6'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1025,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel6bh-content",
    id: "panel6bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029,
      columnNumber: 35
    }
  }, "6\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1039,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel7',
    onChange: handleChange('panel7'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel7bh-content",
    id: "panel7bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1046,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 35
    }
  }, "7\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1052,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1061,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1062,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel8',
    onChange: handleChange('panel8'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1069,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel8bh-content",
    id: "panel8bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1073,
      columnNumber: 35
    }
  }, "8\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1074,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1081,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel9',
    onChange: handleChange('panel9'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1092,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel9bh-content",
    id: "panel9bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 35
    }
  }, "9\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1104,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel10',
    onChange: handleChange('panel10'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1113,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1115,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel10bh-content",
    id: "panel10bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119,
      columnNumber: 35
    }
  }, "10\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1120,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1125,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel11',
    onChange: handleChange('panel11'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1138,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel11bh-content",
    id: "panel11bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 35
    }
  }, "11\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1147,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1149,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1150,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154,
      columnNumber: 35
    }
  }, " R$ 0,00")))), __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.MuiAccordionroot,
    expanded: expanded === 'panel12',
    onChange: handleChange('panel12'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_23__["default"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1162,
        columnNumber: 47
      }
    }),
    "aria-controls": "panel12bh-content",
    id: "panel12bh-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166,
      columnNumber: 35
    }
  }, "12\xAA Cobran\xE7a"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1171,
      columnNumber: 33
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173,
      columnNumber: 33
    }
  }, "Mensalidade"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 35
    }
  }, " R$ 79,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 35
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.heading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 33
    }
  }, "Taxa de ades\xE3o"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: classes.secondaryHeading2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 35
    }
  }, " R$ 0,00"))))))))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_35__["default"], {
    justify: "center",
    align: "center",
    style: {
      marginTop: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
      lineNumber: 1192,
      columnNumber: 29
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__["default"], {
    style: {
      color: "#ccd900"
    },
    size: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1202,
      columnNumber: 35
    }
  }) : activeStep === steps.length - 2 ? 'FINALIZAR' : 'CONTINUAR')), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_36__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1210,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
      lineNumber: 1211,
      columnNumber: 25
    }
  }, "VOLTAR")))))))))));
}

/***/ })

})
//# sourceMappingURL=index.js.5ac0c244062d4f9130f9.hot-update.js.map