import {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";
import { primaryColor } from "../../../nextjs-material-kit-pro";

const features = {
  container,
  mlAuto,
  mrAuto,
  description,
  title: {
    ...title,
    color: primaryColor[0]
  },
  features1: {
    textAlign: "center",
    padding: "80px 0"
  },
  features2: {
    padding: "80px 0"
  },
  features3: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "220px",
      margin: "0 auto"
    }
  },
  features4: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "260px",
      margin: "60px auto 0"
    }
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px"
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: whiteColor
    },
    "&:after": {
      background: "rgba(" + hexToRgb(blackColor) + ",0.55)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px"
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0"
        }
      },
      "& $gridItem": {
        border: "1px solid rgba(" + hexToRgb(whiteColor) + ", 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0"
        }
      }
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "310px",
      minHeight: "320px",
      "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: whiteColor
      }
    }
  },
  gridContainer: {},
  gridItem: {},
  margin0: {
    margin: "0 !important"
  },
  paddingTopZero: {
    paddingTop: "0 !important"
  },
  textCenter: {
    textAlign: "center"
  },
  phoneContainer: {    
    "& img": {
      width: "100%"
    }
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px"
  },
  textLeft: {
    textAlign: "left"
  },
  titleConfira: {
    ...title,
    color: primaryColor[0],
    margin: "0 !important"
  },
  bubble: {
    position: "relative",
    // background: "#00aabb",
    borderRadius: "20px",
    border: "4px solid #425cc6",
    margin: "90px auto",
    padding: "10px 30px",
    maxWidth: "360px",
    "&:after": {
      content: "''",
      width: "0px",
      height: "0px",
      position: "absolute",
      borderLeft: "10px solid #fff",
      borderRight: "10px solid transparent",
      borderTop: "10px solid #fff",
      borderBottom: "10px solid transparent",
      left: "24px",
      bottom: "-13px"
    },
    "&:before": {
      content: "''",
      width: "0px",
      height: "0px",
      position: "absolute",
      borderLeft: "10px solid #425cc6",
      borderRight: "10px solid transparent",
      borderTop: "10px solid #425cc6",
      borderBottom: "10px solid transparent",
      left: "20px",
      bottom: "-23px"
    },
    "@media (max-width: 768px)": {
      margin: "20px auto",
      marginBottom: "80px"
    },

  }  
};

export default features;
