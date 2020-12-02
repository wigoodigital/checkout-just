import {
    container,
    section,
    sectionDark,
    mlAuto,
    title,
    description,
    cardTitle,
    blackColor,
    whiteColor,
    grayColor,
    hexToRgb
  } from "assets/jss/nextjs-material-kit-pro.js";
  
  import customCheckboxRadioSwitch from "assets/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js";
  import customSelect from "assets/jss/nextjs-material-kit-pro/customSelectStyle.js";
import { primaryColor } from "../../../nextjs-material-kit-pro";
  
  const checkoutSection = {
    ...customCheckboxRadioSwitch,
    ...customSelect,

    selectLabel: {
      ...customSelect.selectLabel,
      textTransform: "none",
      fontSize: "14px",
      lineHeight: "0",
      color: "#aaaaaa",
      fontWeight: "400"
    },
    container,
    mlAuto,
    title,
    description,
    cardTitle,
    section: {
      // ...sectionDark,
      ...section,
      position: "relative",
      backgroundColor: grayColor[23],
      // backgroundImage: "linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%)",
      "& $container": {
        zIndex: "2",
        position: "relative"
      },
      // "&:after": {
      //   position: "absolute",
      //   zIndex: "1",
      //   width: "100%",
      //   height: "100%",
      //   display: "block",
      //   left: "0",
      //   top: "0",
      //   content: "''",
      //   backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.7)"
      // },
      "& $title": {
        color: whiteColor
      },
      "& $description": {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)"
      },
      "& $infoArea": {}
    },
    contacts: {
      padding: "40px 0",
      "@media (max-width: 576px)": {        
        padding: "10px 0",
      },  
    },
    infoArea: {
      padding: "0",
      margin: "0",
      "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: whiteColor
      },
      "& h4": {
        marginTop: "20px",
        color: whiteColor
      }
    },
    card1: {
      marginTop: "30px",
      "& $cardTitle": {
        marginBottom: "0.75rem !important",
        color: whiteColor
      }
    },
    textCenter: {
      textAlign: "center"
    },
    justifyContentBetween: {
      WebkitBoxPack: "justify !important",
      MsFlexPack: "justify !important",
      justifyContent: "space-between !important"
    },
    pullRight: {
      float: "right"
    },
    card2: {
      "@media (min-width: 991px)": {
        margin: "80px 0 80px 150px"
      },
      maxWidth: "560px",
      float: "left",
      "& $cardTitle": {
        marginBottom: "0.75rem !important",
        color: whiteColor
      }
    },
    map: {
      overflow: "hidden",
      width: "100%",
      height: "800px",
      position: "absolute"
    },
    contacts2: {
      padding: "0",
      height: "800px"
    },
    infoArea2: {
      padding: "0",
      margin: "0",
      "& h4": {
        fontSize: "1.0625rem",
        lineHeight: "1.55em"
      }
    },
    containerCart: {
      maxWidth: "354px",
      margin: "0 auto",
      textAlign: "left",
      color: whiteColor,
      "& h4, & span, & a, & h5": {
        color: whiteColor,
        fontWeight: "900",
      },         
      "& span": {
        fontWeight: "300",
      },   
      "& h5 img": {
        height: "46px",
      }   
    },
    noPaddingBottom: {
      paddingBottom: "0"
    },
    containerFieldsCard: {
      marginTop: "30px"
    },
    topZero: {
      top: "0"
    },
    marginZero: {
      marginTop: "0"
    },
    marginAuto: {
      margin: "0 auto",
      textAlign: "center"
    },
    colorPrimary: {
      color: primaryColor[0],
      "&:hover,&:focus,&:active": {
        color: primaryColor[0]
      }

    },
    itensResumo: {
      color: "#676767 !important",
      "& li": {
        color: "#676767 !important"
      }
    } 

  };
  
  export default checkoutSection;
  