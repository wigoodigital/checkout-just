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

import stepMobile2 from "assets/img/mobilestep2.png";

import googleIcon from "assets/img/google-icon.png";
import facebookIcon from "assets/img/facebook-icon.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit-mobile.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionFormMobile() {
  const classes = useStyles();
  return (
      
      <GridContainer className={classes.content} justify="center" >        
          <Justfit
            theme="white"
            className={classes.jusfit}
          >
            <GridContainer>
     <GridItem align='left' justify='center'  xs={6} sm={6} md={8}>
           <h2 style={{fontSize: '17px', fontWeight:600,color:'#484848',minWidth:'160px'}}>FAÇA LOGIN PARA CONTINUAR</h2>
           <p style={{minWidth:'160px',color:'#484848',fontWeight:500,fontSize:'12px'}}>UNIDADE <strong>BARRETOS</strong></p>
           </GridItem>
           <GridItem className={classes.stepMobile} xs={6} sm={6} md={4} style={{marginBottom:'25px'}} align='right'>
                 <img src={stepMobile2} />
           </GridItem>
           
             <GridItem xs={12} sm={12} md={3} >
             <button className={classes.btnFacebook} style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',flexDirection:'row',height:60}}>
             <img src={facebookIcon} />
                 <h2>LOGAR COM FACEBOOK</h2>
             </button>
             </GridItem>
             <GridItem xs={12} sm={12} md={2} align='center' justify='center'>
              <h2 style={{fontSize:'15px',fontWeight:400,color:'#D8D8D8'}}>ou</h2>
             </GridItem>
             <GridItem xs={12} sm={12} md={3}>
             <button className={classes.btnGoogle} style={{border:'1px solid #D3D3D3 !important',backgroundColor:'#F2F2F2', display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',flexDirection:'row',height:60}}>
                 <img src={googleIcon} />
                 <h2>LOGIN COM GOOGLE</h2>
             </button>
             </GridItem>
             <GridItem xs={12} sm={12} md={10}> 
                 <h5 style={{color:"#484848",fontSize:'15px',fontWeight:600,paddingTop:'50px',}}>Preencha os campos abaixo para se cadastrar</h5>
             </GridItem>
             <GridContainer justify='left' style={{marginLeft:'0.1%'}} xs={12} sm={12} md={8} >
                 <GridItem xs={12} sm={6} md={6} className={classes.formInputItem}>
                 <h2 >Nome</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={6} md={6} className={classes.formInputItem}>
                 <h2>Sobrenome</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={12} className={classes.formInputItem}>
                 <h2>E-mail</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={6} md={6} className={classes.formInputItem}>
                 <h2>CPF</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={6} md={6} className={classes.formInputItem}>
                 <h2>Sexo</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={6} md={6} className={classes.formInputItem}>
                 <h2>Data de nascimento</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={6} md={6} className={classes.formInputItem}>
                 <h2>Celular</h2>
                 <input></input>
                 </GridItem>
                 </GridContainer>
                 <GridItem xs={12} sm={10} md={10} className={classes.checkboxItem} style={{marginTop:15}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems:'center',margin:0,padding:0}}>
                    <label className={classes.containerCheckboxT}>
                        <input type='checkbox' ></input>
                        <span className={classes.checkmarkT}  ></span>
                      </label>
                      <h2>Aceito receber notícias e comunicados da JustFit por SMS e Whatsapp.</h2>
                      </div>
                 </GridItem>
                 <GridItem xs={12} sm={10} md={10} className={classes.checkboxItem}>
                 <div style={{display: 'flex', flexDirection: 'row', alignItems:'center',margin:0,padding:0}}>
                 <label className={classes.containerCheckboxT}>
                        <input type='checkbox' ></input>
                        <span className={classes.checkmarkT}  ></span>
                      </label>
                      <h2>Aceito receber notícias e comunicados da JustFit por Newsletter.</h2>
                      </div>
                 </GridItem>
         
                 </GridContainer>
          
          </Justfit>
        
      </GridContainer>
      
       
      
  );
}
