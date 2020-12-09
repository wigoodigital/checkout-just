webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages-sections/checkout-justfit/SectionPlans.js":
/*!*********************************************************!*\
  !*** ./pages-sections/checkout-justfit/SectionPlans.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionPlans; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var assets_img_planojust_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/planojust.png */ "./assets/img/planojust.png");
/* harmony import */ var assets_img_planojust_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_img_planojust_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_img_planofit_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/img/planofit.png */ "./assets/img/planofit.png");
/* harmony import */ var assets_img_planofit_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_img_planofit_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js */ "./assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js");
/* harmony import */ var _components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Justfit/justfit */ "./components/Justfit/justfit.js");
/* harmony import */ var _components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Justfit/JustfitPlans/PlanHorizontal */ "./components/Justfit/JustfitPlans/PlanHorizontal.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/gabrieldossantos/Desktop/checkout-justfit (1)/pages-sections/checkout-justfit/SectionPlans.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/

 // nodejs library that concatenates classes

 // @material-ui/core components



 // @material-ui/icons


 // core components












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_justfit_justfit_js__WEBPACK_IMPORTED_MODULE_14__["default"]);
function SectionPlans(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('#D3D3D3'),
      color = _useState[0],
      setColor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('#CCDA01'),
      textColor = _useState2[0],
      setTextColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('FIT+'),
      textPlano = _useState3[0],
      setTextPlano = _useState3[1];

  var formatValue = function formatValue(value) {
    return new String(value.toFixed(2)).replace(".", ",");
  };

  return __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.content,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_components_Justfit_justfit__WEBPACK_IMPORTED_MODULE_15__["default"], {
    theme: "white",
    className: classes.jusfit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center",
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("h2", {
    style: {
      marginBottom: '40px',
      marginTop: '20px',
      fontSize: '35px',
      fontWeight: 500,
      color: '#484848'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "VOC\xCA ESCOLHEU O PLANO ", __jsx("strong", {
    style: {
      fontWeight: '900'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 146
    }
  }, textPlano)), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginBottom: '30px'
    },
    xs: 12,
    sm: 12,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx(_components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    theme: "dark",
    plano: "FIT+",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "center",
    justify: "center",
    style: {
      minHeight: '150px'
    },
    onClick: function onClick() {
      setColor("#D3D3D3");
      setTextColor('#CCDA01');
      setTextPlano('FIT+');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 1,
    justify: "center",
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      width: '20px',
      height: '20px',
      backgroundColor: textColor,
      borderRadius: '100px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  })), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    xs: 12,
    sm: 12,
    md: 11,
    justify: "center",
    align: "center",
    className: classes.fixGridPlan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 2,
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: assets_img_planofit_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 2,
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 23
    }
  }, __jsx("h5", {
    className: classes.textDefault,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "Matr\xEDcula"), __jsx("h5", {
    className: classes.textDefault,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, "R$ ", formatValue(props.plans[0].valorMatricula))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 23
    }
  }, __jsx("h5", {
    className: classes.textDefault,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Manuten\xE7\xE3o Anual"), __jsx("h5", {
    className: classes.textDefault,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, "R$ ", formatValue(props.plans[0].valorAnuidade), " em ", props.plans[0].parcelasAnuidade[0].numero, "x de R$ 29,98")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 2,
    justify: "center",
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, __jsx("h5", {
    style: {
      fontSize: '13px',
      fontWeight: '700',
      padding: 0,
      margin: 0,
      textDecoration: 'line-through'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, "De R$ 79,90"), __jsx("h5", {
    style: {
      fontSize: '13px',
      fontWeight: '700',
      padding: 0,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Por R$")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 1,
    style: {
      margin: 0,
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, __jsx("h1", {
    style: {
      margin: 0,
      padding: 0,
      position: 'relative',
      right: '90%',
      top: '10px',
      fontWeight: 700,
      fontSize: '50px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, "39", __jsx("span", {
    style: {
      fontSize: '25px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 149
    }
  }, ",90"))))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(_components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    theme: "whitePlan",
    style: {},
    plano: "FIT+",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "center",
    justify: "center",
    style: {
      minHeight: '150px'
    },
    onClick: function onClick() {
      setColor("#CCDA01");
      setTextColor('#D3D3D3');
      setTextPlano('JUST');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 1,
    justify: "center",
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      width: '20px',
      height: '20px',
      backgroundColor: color,
      borderRadius: '100px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 23
    }
  })), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    xs: 12,
    sm: 12,
    md: 11,
    justify: "center",
    align: "center",
    className: classes.fixGridPlan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 2,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: assets_img_planojust_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 2,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 23
    }
  }, __jsx("h5", {
    className: classes.textDefault,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, "Matr\xEDcula"), __jsx("h5", {
    className: classes.textDefault,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, "R$ 39,90")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }, __jsx("h5", {
    style: {
      fontSize: '15px',
      fontWeight: '500',
      padding: 0,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "Manuten\xE7\xE3o Anual"), __jsx("h5", {
    style: {
      fontSize: '15px',
      fontWeight: '500',
      padding: 0,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, "R$ 149,90 em 5x de R$ 29,98")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 2,
    justify: "center",
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 23
    }
  }, __jsx("h5", {
    style: {
      fontSize: '13px',
      fontWeight: '700',
      padding: 0,
      margin: 0,
      textDecoration: 'line-through'
    },
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "De R$ 79,90"), __jsx("h5", {
    style: {
      fontSize: '13px',
      fontWeight: '700',
      padding: 0,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "Por R$")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 1,
    style: {
      margin: 0,
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 23
    }
  }, __jsx("h1", {
    style: {
      margin: 0,
      padding: 0,
      position: 'relative',
      right: '90%',
      top: '10px',
      fontWeight: 700,
      fontSize: '50px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, "39", __jsx("span", {
    style: {
      fontSize: '25px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 149
    }
  }, ",90")))))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    style: {
      marginTop: '20px',
      display: 'none'
    },
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: classes.SubtitleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Quer complementar seu plano?"), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx(_components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    theme: "whitePlan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 1,
    sm: 1,
    md: 1,
    align: "center",
    justify: "center",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: classes.containerCheckbox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: classes.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  })), " "), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }, "JUSTFIT PROFISSIONAL ONLINE"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }, "Aliquam erat volutpat. Suspendisse purus dui, scelerisque pulvinar nisi at, luctus vestibulum quam.")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx("h5", {
    style: {
      fontSize: '15px',
      fontWeight: '700',
      padding: 0,
      marginBottom: '-60px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 23
    }
  }, "R$")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: classes.complementValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }, "9", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 64
    }
  }, ",90/m\xEAs")))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginTop: '30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(_components_Justfit_JustfitPlans_PlanHorizontal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    theme: "whitePlan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 1,
    sm: 1,
    md: 1,
    align: "center",
    justify: "center",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: classes.containerCheckbox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, __jsx("input", {
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: classes.checkmark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  }, "JUSTFIT PROFISSIONAL ONLINE"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 23
    }
  }, "Aliquam erat volutpat. Suspendisse purus dui, scelerisque pulvinar nisi at, luctus vestibulum quam.")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, __jsx("h5", {
    style: {
      fontSize: '15px',
      fontWeight: '700',
      padding: 0,
      marginBottom: '-60px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 23
    }
  }, "R$")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: classes.complementValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 23
    }
  }, "9", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 64
    }
  }, ",90/m\xEAs")))))))))));
}

/***/ })

})
//# sourceMappingURL=index.js.0e258ace77d4663ab982.hot-update.js.map