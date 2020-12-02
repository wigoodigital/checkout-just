import {
  container,
  primaryColor,
  whiteColor,
  btnLink,
  grayColor,
  twitterColor,
  dribbbleColor,
  instagramColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";

const justfitStyle = {
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  justfit: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    backgroundColor:'#FFF',
    position: "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none",
      
    },
    "& li":{
      padding:0,
      margin:0,
    },
  },
  content: {
    textAlign: "left",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:'auto',
    marginBottom:'auto',
    width:'100%',
  },
  a: {
    color: primaryColor[0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  dark: {
    backgroundColor: '#484848',
    borderRadius: '15px',
    "& p": {
      color: grayColor[0]
    },
    "& i": {
      color: whiteColor
    },
    "& h1, h2, h3, h4, h5": {
      color: whiteColor,
    },
    "& a": {
      color: whiteColor,
      opacity: ".86",
      "&:visited": {
        color: whiteColor
      },
      "&:focus, &:hover": {
        opacity: 1
      }
    },
    "& hr": {
      borderColor: "rgba(" + hexToRgb(whiteColor) + ",0.2)"
    },
    "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
      color: whiteColor
    }
  },
  white: {
    backgroundColor: whiteColor,
    color: grayColor[1],
    textDecoration: "none",
    "& a": {
      "&:visited": {
        color: grayColor[1]
      },
      "&:hover, &:focus": {
        color: grayColor[20]
      }
    }
  },

  whitePlan: {
    backgroundColor: whiteColor,
    color:'#484848',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    border: '2px solid #D3D3D3',
    borderRadius:'20px',
  },

  summary: {
    backgroundColor: "#F2F2F2",
    color:'#484848',
    border: '1px solid #D3D3D3',
    borderRadius:'10px',
  },


  container,
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
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
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
  justfitBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: grayColor[1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  clearFix: {
    clear: "both"
  },
 




};
export default justfitStyle;
