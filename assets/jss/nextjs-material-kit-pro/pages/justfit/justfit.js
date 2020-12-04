import {
  container,
  title,
  description,
  section,
  btnLink,
  whiteColor,
  twitterColor,
  dribbbleColor,
  instagramColor,
  grayColor,
  defaultFont
} from "assets/jss/nextjs-material-kit-pro.js";

import imagesStyles from "assets/jss/nextjs-material-kit-pro/imagesStyles.js";
import { facebookColor, primaryColor } from "../../../nextjs-material-kit-pro";

const style = {
  ...imagesStyles,
  container,
  title,
  description,
  section: {
    ...section,
    padding: "70px 0px"
  },
  content: {
    width: "100%",
    margin: 0,
    backgroundColor: '#FFF',

  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    // padding: "15px 0",
    margin: "0",
    float: "right"
  },
  aClass: {
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  justfitBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: grayColor[1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Museo Sans,Times New Roman,serif"
  },
  textCenter: {
    textAlign: "center",
    ...defaultFont
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      padding: 0,
      listStyle: "none",
      "& li": {
        display: "inline-block"
      },
      "& a": {
        display: "block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  linksVertical: {
    "& li": {
      display: "block !important",
      marginLeft: "-5px",
      marginRight: "-5px",
      "& a": {
        padding: "5px !important"
      }
    }
  },
  justfit: {

    position: "relative",
    width: "100%",
    background: "transparent",
    bottom: "0",
    color: '#000',
    background: '#FFF',
    zIndex: "2",

    "& ul li": {
      display: "inline-block"
    },
    "& h4, & h5": {
      color: grayColor[1],
      textDecoration: "none"
    },
    "& ul:not($socialButtons) li a": {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block"
    },
    "& small": {
      fontSize: "75%",
      color: grayColor[10]
    },
    "& $pullCenter": {
      display: "inline-block",
      float: "none"
    }
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  copyRight: {
    padding: "15px 0px"
  },
  socialButtons: {
    "& li": {
      display: "inline-block"
    }
  },
  btnTwitter: {
    ...btnLink,
    color: twitterColor
  },
  btnDribbble: {
    ...btnLink,
    color: dribbbleColor
  },
  btnInstagram: {
    ...btnLink,
    color: instagramColor
  },
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative"
  },
  customFormControl: {
    paddingTop: "14px"
  },
  imgContainer: {
    width: "107px",
    maxHeight: "auto",
    overflow: "hidden",
    display: "block",
    "& img": {
      width: "100%"
    }
  },


  textDefault: {
    fontSize: '15px',
    fontWeight: '400',
    padding: '0px !important',
    margin: '0px !important',
  },

  SubtitleText: {
    fontSize: '15px',
    paddingLeft: '5px',
    fontWeight: '600',
    color: "#484848",
    paddingLeft: '2% !important'
  },

  titlejustfit: {
    color: "#ffffff !important",
    ...defaultFont
  },

  complementValue: {
    fontSize: '35px',
    fontWeight: '700',
    padding: 0,
    position: 'relative',
    right: '99%',
    bottom: '10px',
    "& span": {
      fontSize: '18px'
    },

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
      textTransform: 'none !important',
    },
    "& h2": {
      color: '#8E8E8E',
      fontWeight: 600,
      letterSpacing: '10%',
      fontSize: '14px',
      marginTop: '10px',
      marginBottom: '1px',
    }
  },

  btnFacebook: {
    color: whiteColor,
    fontSize: '18px'    
   },
  
  formInputItemError: {  
    "& h2": {
      color: '#c85a5f',
    },  
    "& input": {
      border: '1.25px solid #c85a5f',
    }
   },

   formInputItem: {
     "& input, & select": {
       width:'100%',
       color: '#484848',
       background: '#FEFEFE',
       borderRadius: '5px',
       fontSize: '20px',       
       padding: '10px',
       border: '1.25px solid #D1D1D1',
     },
     "& h2": {
       color: '#8E8E8E',
       fontWeight: 600,
       letterSpacing: '10%',
       fontSize: '13px',
       marginTop:'10px',
       marginBottom:'1px',
     },
     "& span": {
       display: 'flex',
       marginTop: '5px',
       alignItems: 'center',
       color: '#c85a5f',
       fontSize: '5px',
       "& label": {
        color: '#c85a5f',
        fontSize: '13px',
        margin: '0',
        padding: '4px'
       }
     }
   },

   btnFacebook: {
    color:whiteColor,
    background: facebookColor,
    width: '100%',
    height: '52px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    border: 'none',
    textAlign: 'center',
    borderRadius: '5px',
    "& h2": {
      fontSize: '13px',
      textAlign: 'center',
      fontWeight: 700,
      margin: 0
    },
    '& img': {
      margin: '10px',
    }
  },

  btnCard: {
    margin: '5px',    
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    flexDirection: 'row',
    width: '280px',
    height: '70px',
    border: 0,
    borderRadius: '5px',
    background: "#EAEAEA",
    color: "#757575",
    "& h2": {
      fontSize: '16px',
      fontWeight: 600,
    },
    '& img': {
      margin: '10px',
    },
    "& span": {
      margin: '10px',
      marginLeft: '0px',    
      width: '12px',
      height: '12px',
      borderRadius: '20px',
      content: '',
      position: 'relative',
      background: '#757575'
    }
  },



  btnCardChecked: {
    margin: '5px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    width: '280px',
    height: '70px',
    border: 0,
    borderRadius: '5px',
    background: "#484848",
    color: "#FFF",
    "& h2": {
      fontSize: '16px',
      fontWeight: 600,
    },
    '& img': {
      margin: '10px',
    },
    "& span": {
      margin: '20px',
      marginLeft: 0,      
      width: '12px',
      height: '12px',
      borderRadius: '20px',
      content: '',
      position: 'relative',
      background: '#FFF'
    }


  },


  topPriceBadge: {
    backgroundColor: '#FF6060',
    color: whiteColor,
    fontSize: 15,
    padding: 3,
    paddingRight: 10,
    fontWeight: 600,
    width: 150,
    textAlign: 'right',
    borderRadius: '1000px 0px 0px 1000px',
    position: 'relative',
    bottom: '100px',
    right: '40px'
  },



  btnGoogle: {
    color: '#484848',
    background: whiteColor,
    width: '100%',
    height: '52px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1.25px solid #E6E6E6',
    "& h2": {
      fontSize: '13px',
      textAlign: 'center',
      fontWeight: 700,
      color: "#8E8E8E",
      margin: 0
    },
    '& img': {
      margin: '10px',
    }
  },

  divOu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  fixGridPlan: {
    position: 'relative',
    top: '40px'
  },


  checkboxItem: {
    "& input": {
      background: '#F2F2F2',
      border: '1px solid #D3D3D3',
      cursor: 'pointer',
    },
    "& h2": {
      fontSize: '12px',
      fontWeight: 600,
      color: "#8E8E8E"
    },
    "& span": {
      display: 'flex',
      marginTop: '5px',
      alignItems: 'center',
      color: '#c85a5f',
      fontSize: '5px',
      "& label": {
       color: '#c85a5f',
       fontSize: '13px',
       margin: '0',
       padding: '4px'
      }
    }
  },


  containerCheckbox: {
    display: "block",
    position: "relative",
    paddingLeft: "35px",
    marginBottom: "25px",
    cursor: "pointer",
    fontSize: "22px",
    userSelect: "none",
    "& input": {
      /*  Hide the browser's default checkbox  */
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
      borderRadius:"5px",
      height: 0,
      width: 0,
      /* Show the checkmark when checked */
      "&:checked": {
        "& ~ $checkmark": {
          /* When the checkbox is checked, add a blue background */
          backgroundColor: "#CCDA01",
          "&:after": {
            display: "block"
          }
        }
      }
    },

    "& $checkmark": {
      "&:after": {
        left: "9px",
        top: "5px",
        width: "5px",
        height: "10px",
        border: "solid #484848",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(45deg)"
      }
    },

    /* On mouse-over, add a grey background color */
    // "&:hover": {
    //   "& input": {
    //     "& ~ $checkmark": {
    //       backgroundColor: "#ccc"
    //     }
    //   }
    // }
  },

  checkmark: {
    position: "absolute",
    top: 0,
    borderRadius:"5px",
    left: 0,
    height: "25px",
    width: "25px",
    backgroundColor: "#D8D8D8",
    "&:after": {
      content: '""',
      position: "absolute",
      display: "none"
    }
  },


  containerCheckboxT: {
    display: "block",
    position: "relative",
    paddingLeft: "35px",
    marginBottom: "5px",
    cursor: "pointer",
    fontSize: "22px",
    userSelect: "none",
    "& input": {
      /*  Hide the browser's default checkbox  */
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
      borderRadius:"5px",
      height: 0,
      width: 0,
      /* Show the checkmark when checked */
      "&:checked": {
        "& ~ $checkmarkT": {
          /* When the checkbox is checked, add a blue background */
          backgroundColor: "#CCDA01",
          "&:after": {
            display: "block"
          }
        }
      }
    },

    "& $checkmarkT": {
      "&:after": {
        left: "5px",
        top: "0px",
        width: "5px",
        height: "10px",
        border: "solid #484848",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(45deg)"
      }
    },

    /* On mouse-over, add a grey background color */
    // "&:hover": {
    //   "& input": {
    //     "& ~ $checkmark": {
    //       backgroundColor: "#ccc"
    //     }
    //   }
    // }
  },

  checkmarkT: {
    position: "absolute",
    top: 0,
    borderRadius:"2px",
    left: 0,
    height: "15px",
    width: "15px",
    backgroundColor: "#D8D8D8",
    "&:after": {
      content: '""',
      position: "absolute",
      display: "none"
    }
  },


  checkboxItemPayment: {
    "& input": {
      background: '#F2F2F2',
      border: '1px solid #D3D3D3',
      cursor: 'pointer'
    },
    "& h2": {
      fontSize: '12px',
      fontWeight: 600,
      color: "#8E8E8E"
    },
    "& a": {
      color: '#CCDA01',
      textDecoration: 'underline',
      cursor: 'pointer'

    },
    "& a:hover": {
      color: "#CCDA01"
    },
    "& span": {
      display: 'flex',
      marginTop: '5px',
      alignItems: 'center',
      color: '#c85a5f',
      fontSize: '5px',
      "& label": {
       color: '#c85a5f',
       fontSize: '13px',
       margin: '0',
       padding: '4px'
      }
    }
  },


  planoDark: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#484848',
    flex: 1,
    color: 'white',
    flexDirection: 'column',
    borderRadius: '15px',
    width: '100%',
    minHeight: '100px',
    marginBottom: '20px',
    "& h5": {
      fontSize: '11px',
      margin: 0,
      padding: 1,
      fontWeight: 500,
    },
    "& strong": {
      fontSize: '11px',
      margin: 0,
      padding: 1,
      fontWeight: 700,
    },
  },

  planoWhite: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    color: '#484848',
    border: '2px solid #d3d3d3',
    flexDirection: 'column',
    borderRadius: '15px',
    width: '100%',
    minHeight: '100px',
    marginBottom: '20px',
    "& h5": {
      fontSize: '11px',
      margin: 0,
      padding: 1,
      fontWeight: 500,
      color: '#747474',
    },
    "& strong": {
      color: '#747474',
      fontSize: '11px',
      margin: 0,
      padding: 1,
      fontWeight: 700,
    },
  },

  planoAdicional: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    color: '#484848',
    border: '2px solid #d3d3d3',
    borderRadius: '15px',
    width: '100%',
    minHeight: '100px',
    marginBottom: '10px',
  },

  planoAdicionalContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px',
    marginRight: '10px',
    "& h5": {
      fontSize: '13px'
    },
    "& p": {
      fontSize: '12px',
      lineHeight: '2px,'
    }
  },


  btnEscolher: {
    textAlign: 'center',
    backgroundColor: '#484848',
    fontWeight: 600,
    color: 'white',
    border: 0,
    padding: 15,
    width: '150px',
    borderRadius: '8px'
  },

  btnEscolherWhite: {
    textAlign: 'center',
    backgroundColor: 'white',
    fontWeight: 600,
    color: '#484848',
    border: 0,
    padding: 15,
    width: '150px',
    borderRadius: '8px'
  },

  beneficiosArea: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#F2F2F2',
    color: '#484848',
    borderRadius: '20px',
    width: '100%',
  },

  TextContentBenefit: {
    textAlign: 'left',
    "& h1": {
      fontSize: '25px',

    },
    "& h5": {
      margin: 0,
      padding: 0,
      fontSize: '15px',
      fontWeight: 600,
    },
  },

  '@media (max-wdith: 747px)': {
   textAlign:'center',
   backgroundColor:'#484848',
   fontWeight:600,
   color:'white',
   border:0,
   padding:15,
   width:'150px',
   borderRadius:'8px'
  },
  
  btnEscolherWhite:{
    textAlign:'center',
    backgroundColor:'white',
    fontWeight:600,
    color:'#484848',
    border:0,
    padding:15,
    width:'150px',
    borderRadius:'8px'
  },

  beneficiosArea:{
  flex:1,
  display:'flex',
  backgroundColor:'#F2F2F2',
  color:'#484848',
  borderRadius:'20px',
  width:'100%',
},
  
TextContentBenefit:{
  textAlign:'left',
  "& h1":{
    fontSize:'25px',
    
  },
  "& h5":{
   margin:0,
   padding:0,
   fontSize:'15px',
   fontWeight:600,
  },
},


FormGroup: {


},




   '@media (max-wdith: 747px)': {
    complementValue: {
      marginLeft: '0px !important',
      marginTop: '0px !important',
    },
    fixGridPlan: {
      position: 'relative',
      top: '0px',
    },
  },

  '@media (max-width: 747px)': {
    centerPhone: {
      marginTop: "15px",
      textAlign: "center"
    },
    fixGridPlan: {
      position: 'relative',
      top: '0px',
    },
    complementValue: {
      marginLeft: '0px !important',
      marginTop: '0px !important',
      position: 'relative',
      left: 30,
      right: 0,
      top: 0,
      bottom: 0,
    },
  }

};

export default style;
