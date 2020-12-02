import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from "assets/jss/nextjs-material-kit-pro.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "70px 0 30px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor[0]
  },
  warning: {
    color: warningColor[0]
  },
  danger: {
    color: dangerColor[0]
  },
  success: {
    color: successColor[0]
  },
  info: {
    color: infoColor[0]
  },
  rose: {
    color: roseColor[0]
  },
  gray: {
    color: grayColor[0]
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem"
  },
  descriptionWrapper: {
    color: grayColor[0],
    overflow: "hidden"
  },
  title: {
    ...title,
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset",
    color: primaryColor[0]
  },
  description: {
    textAlign: "left",
    color: grayColor[0],
    overflow: "hidden",
    marginTop: "0px",
    "& p": {
      color: grayColor[0],
      fontSize: "14px"
    }
  },
  descriptionLarge: {
    textAlign: "left",
    color: grayColor[12],
    overflow: "hidden",
    fontSize: "24px",
    fontWeight: "700",
    marginTop: "0px",
    "& p": {
      color: grayColor[0],
      fontSize: "14px"
    }
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  },
  containerApp: {    
    margin: "10px auto",
    "& img": {
      width: "100%"
    }
  },
  imgIcon: {
    width: "30px"
  },
  textLeft: {
    ...title,
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset",
    color: grayColor[12],
    textAlign: "left"
  }  
};

export default infoStyle;
