webpackHotUpdate("static\\development\\pages\\mobile.js",{

/***/ "./pages-sections/lateral-info/index.js":
/*!**********************************************!*\
  !*** ./pages-sections/lateral-info/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionLateral; });
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
/* harmony import */ var components_Lateral_Lateral_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Lateral/Lateral.js */ "./components/Lateral/Lateral.js");
/* harmony import */ var assets_img_faces_card_profile6_square_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/faces/card-profile6-square.jpg */ "./assets/img/faces/card-profile6-square.jpg");
/* harmony import */ var assets_img_faces_card_profile6_square_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_card_profile6_square_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/img/faces/christian.jpg */ "./assets/img/faces/christian.jpg");
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_img_faces_card_profile4_square_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/img/faces/card-profile4-square.jpg */ "./assets/img/faces/card-profile4-square.jpg");
/* harmony import */ var assets_img_faces_card_profile4_square_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_card_profile4_square_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var assets_img_faces_card_profile1_square_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/img/faces/card-profile1-square.jpg */ "./assets/img/faces/card-profile1-square.jpg");
/* harmony import */ var assets_img_faces_card_profile1_square_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_card_profile1_square_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/img/faces/marc.jpg */ "./assets/img/faces/marc.jpg");
/* harmony import */ var assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/img/faces/kendall.jpg */ "./assets/img/faces/kendall.jpg");
/* harmony import */ var assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_img_faces_card_profile5_square_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/img/faces/card-profile5-square.jpg */ "./assets/img/faces/card-profile5-square.jpg");
/* harmony import */ var assets_img_faces_card_profile5_square_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_card_profile5_square_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var assets_img_faces_card_profile2_square_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/img/faces/card-profile2-square.jpg */ "./assets/img/faces/card-profile2-square.jpg");
/* harmony import */ var assets_img_faces_card_profile2_square_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_card_profile2_square_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var assets_img_selo_cadeado_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/img/selo-cadeado.png */ "./assets/img/selo-cadeado.png");
/* harmony import */ var assets_img_selo_cadeado_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(assets_img_selo_cadeado_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_img_site_seguro_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/site-seguro.png */ "./assets/img/site-seguro.png");
/* harmony import */ var assets_img_site_seguro_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_img_site_seguro_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var assets_img_cadeado_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/cadeado.png */ "./assets/img/cadeado.png");
/* harmony import */ var assets_img_cadeado_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_img_cadeado_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var assets_img_letsencrypt_White_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/img/letsencrypt_White.png */ "./assets/img/letsencrypt_White.png");
/* harmony import */ var assets_img_letsencrypt_White_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(assets_img_letsencrypt_White_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var assets_img_card_list_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/img/card-list.png */ "./assets/img/card-list.png");
/* harmony import */ var assets_img_card_list_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(assets_img_card_list_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var assets_img_debit_list_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/img/debit-list.png */ "./assets/img/debit-list.png");
/* harmony import */ var assets_img_debit_list_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(assets_img_debit_list_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var assets_img_debito_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/img/debito.png */ "./assets/img/debito.png");
/* harmony import */ var assets_img_debito_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(assets_img_debito_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var assets_jss_nextjs_material_kit_pro_pages_lateral_lateralStyle_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js */ "./assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js");
var _jsxFileName = "C:\\Users\\Matraqueado\\Downloads\\checkout-justfit\\pages-sections\\lateral-info\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/
 // nodejs library that concatenates classes

 // @material-ui/core components



 // @material-ui/icons


 // core components






















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_pro_pages_lateral_lateralStyle_js__WEBPACK_IMPORTED_MODULE_27__["default"]);
function SectionLateral(props) {
  var classes = useStyles();
  return __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.content,
    style: {
      padding: 0,
      margin: 0
    },
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(components_Lateral_Lateral_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    theme: "light",
    className: classes.lateralForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    justify: "center",
    style: {
      padding: 0,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 12
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 16
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
      lineNumber: 54,
      columnNumber: 13
    }
  }, "PLANO ", __jsx("strong", {
    style: {
      color: '#484848'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 84
    }
  })), __jsx("h5", {
    style: {
      padding: 0,
      margin: 0,
      marginBottom: '30px',
      fontSize: '25px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 14
    }
  }, "UNIDADE BARRETOS")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justify: "space-between",
    align: "center",
    style: {
      marginTop: '30px'
    },
    xs: 12,
    sm: 2,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 16
    }
  }, __jsx("h6", {
    style: {
      padding: 0,
      margin: 0,
      fontSize: '12px',
      textAlign: 'left',
      fontWeight: 700
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 16
    }
  }, "INFORMA\xC7\xD5ES DE COBRAN\xC7A")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 2,
    md: 12,
    align: "center",
    style: {
      marginTop: '10px',
      marginBottom: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 16
    }
  }, __jsx("iframe", {
    style: {
      width: '350px',
      height: '400px',
      backgroundColor: '#FFF',
      border: '1px solid #D9D9D9',
      borderRadius: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  })), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    justify: "center",
    align: "center",
    style: {
      marginTop: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 16
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 16
    }
  }, __jsx("button", {
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 20
    }
  }, "CONTINUAR")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 20
    }
  }, __jsx("button", {
    style: {
      backgroundColor: '#DADADA',
      color: '#484848',
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 20
    }
  }, "VOLTAR")))))));
}

/***/ })

})
//# sourceMappingURL=mobile.js.efa6d7931ff5d069aaa1.hot-update.js.map