/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";

import justfitLogo from "assets/img/justfit.png";
import menuBurguerIcon from "assets/img/mobileMenuIcon.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit-mobile.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionNavbarMobile() {
  const classes = useStyles();
  return (
      
      <GridContainer className={classes.content} justify="center" >        
        <GridItem xs={12} sm={12} md={12}>
          <Justfit
            theme="white"
            className={classes.jusfit}
          >
          
          <GridContainer>
          <GridItem xs={6} sm={6} md={6}>
           <img  style={{width:'130px',marginTop:'15px'}} src={justfitLogo} />
          </GridItem>    
              {/* <GridItem xs={12} sm={12} md={6} align='right'>
                 <span>Detalhes</span> <img src={menuBurguerIcon}/>
              </GridItem> */}
          </GridContainer>
 
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
