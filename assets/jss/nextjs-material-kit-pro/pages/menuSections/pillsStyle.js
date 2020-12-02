import { container, title, defaultFont, primaryColor, whiteColor, grayColor } from "assets/jss/nextjs-material-kit-pro.js";

const pillsStyle = {
  section: {
    padding: "0 0 70px 0"
  },
  container,
  title: {
    ...title,
    color: whiteColor,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  table: {
    minWidth: 700,
  },
  containerTable: {
    maxHeight: 440,
  },
  textCenter: {
    textAlign: "center",
    ...defaultFont
  },
  textRight: {
    textAlign: "right"

  },
  marginBottomZero: {
    marginBottom: "0"
  },
  marginTopZero: {
    marginTop: "0"
  },

  form: {
    margin: "0 0 25px 0"
  },

  cardHeader: {
    width: "auto",
    textAlign: "center",
    background: grayColor[5]
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: grayColor[13]
  },

  largeIcon: {
    fontSize: "6.1875rem",
    color: primaryColor[0]
  },
  stickyFooter: {
    bottom: 0,
    position: "fixed",
    backgroundColor: "#ffffff"
  },

  '@media (max-width: 747px)': {
    textRight: {      
      textAlign: "center"
    }
  }
  
}

export default pillsStyle;
