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
import { primaryColor } from "../../../nextjs-material-kit-pro";

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
    position: 'relative',
    width: "500px",
    height: '100%',
    top: 0,
    left: 0,
    zIndex: '9999',
    margin: 0,
    backgroundColor: '#F2F2F2',
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      color: '#484848',
    },

  },

  contentMobile: {
    position: 'relative',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: '9999',
    margin: 0,
    backgroundColor: '#F2F2F2',
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      color: '#484848',
    },

  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
      height: 0,
      display: 'none',
    }
  },
  heading: {
    fontWeight: 800,
    fontSize: 12,
    color: '#484848 !important',
    flex: 1,
    textAlign:'left',
    display: 'flex',
  },
  secondaryHeading: {
    display: 'flex',
    textAlign: 'right',
    justifyContent: 'flex-end',
    fontWeight: 700,
    fontSize: 12,
    color: '#484848 !important',

  },
  heading2: {
    fontWeight: 600,
    fontSize: 12,
    color: '#B0B0B0!important',
    flex: 1,
    textAlign:'left',
    display: 'flex',
  },
  secondaryHeading2: {
    display: 'flex',
    flex: 1,
    textAlign: 'right',
    justifyContent: 'flex-end',
    fontWeight: 600,
    fontSize: 12,
    color: '#B0B0B0 !important',

  },

  '@media (max-width: 747px)': {
    content: {
      display: 'none',
    }
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
  footerBrand: {
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
  lateral: {

    position: "relative",
    width: "100%",
    background: "transparent",
    bottom: "0",
    color: '#000',
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
  titleFooter: {
    color: "#ffffff !important",
    ...defaultFont
  },

  lateralForm: { display: 'block' },

  '@media (max-width: 747px)': {
    centerPhone: {
      marginTop: "15px",
      textAlign: "center"
    },
    lateralForm: {
      display: 'none',
    },
  }

};

export default style;
