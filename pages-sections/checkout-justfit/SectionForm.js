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

import googleIcon from "assets/img/google-icon.png";
import facebookIcon from "assets/img/facebook-icon.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { setLocale } from 'yup';

import TagManager from 'react-gtm-module'


const useStyles = makeStyles(styles);

export default function SectionForm() {
  const classes = useStyles();
  return (
      
      <GridContainer className={classes.content} justify="center" align='center' >        
        <GridItem xs={8} sm={8} md={8} >
          <Justfit
            theme="white"
            className={classes.jusfit}
          >
          <GridContainer justify='center' align='left'>
            <GridItem xs={10} sm={10} md={10} style={{marginBottom:'40px'}}>
            <h1 style={{fontSize:'40px',fontWeight:600,color:"#484848",maxWidth:'500px'}}>FAÇA LOGIN PARA CONTINUAR</h1>
            </GridItem>

            <GridItem xs={11} sm={11} md={11}>              

              <GridContainer justify='left' align='left'>
                <GridItem xs={12} sm={12} md={12} >
                  <GridContainer justify='center'>
                    <GridItem xs={12} sm={12} md={5} >
                      <button className={classes.btnFacebook}>
                      <img src={facebookIcon} />
                          <h2>LOGAR COM FACEBOOK</h2>
                      </button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1} className={classes.divOu}>
                      <h2 style={{fontSize:'15px',fontWeight:400,color:'#D8D8D8'}}>ou</h2>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <button className={classes.btnGoogle} style={{backgroundColor:'#f2f2f2'}}>
                          <img src={googleIcon}  />
                          <h2>LOGIN COM GOOGLE</h2>
                      </button>
                    </GridItem>
                  </GridContainer>
                </GridItem>

              </GridContainer>

            </GridItem>

            

            <GridItem xs={12} sm={12} md={12} style={{marginBottom:'20px'}}>
            <GridContainer justify='center'>
              <GridItem xs={10} sm={10} md={10}> 
                  <h5 style={{color:"#484848",fontSize:'15px',fontWeight:600,paddingTop:'50px',}}>Preencha os campos abaixo para se cadastrar</h5>
              </GridItem>
              <GridContainer justify='left' xs={10} sm={10} md={10} >
                  <GridItem xs={12} sm={12} md={6} className={classes.formInputItem}>
                  <h2 >Nome</h2>
                  <input></input>
                  <span>Por favor, insira o seu nome</span>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={classes.formInputItem}>
                  <h2>Sobrenome</h2>
                  <input></input>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12} className={classes.formInputItem}>
                  <h2>E-mail</h2>
                  <input></input>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={classes.formInputItem}>
                  <h2>CPF</h2>
                  <input></input>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={classes.formInputItem}>
                  <h2>Sexo</h2>
                  <input></input>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={classes.formInputItem}>
                  <h2>Data de nascimento</h2>
                  <input></input>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={classes.formInputItem}>
                  <h2>Celular</h2>
                  <input></input>
                  </GridItem>
              </GridContainer>
                  <GridItem xs={12} sm={12} md={10} className={classes.checkboxItem} style={{ marginTop: "25px" }}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems:'center',margin:0,padding:0}}>
                    <label className={classes.containerCheckboxT}>
                        <input type='checkbox' ></input>
                        <span className={classes.checkmarkT}  ></span>
                      </label>
                    <h2>Aceito receber notícias e comunicados da JustFit por SMS e Whatsapp.</h2>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10} className={classes.checkboxItem}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems:'center',margin:0,padding:0}}>
                            <label className={classes.containerCheckboxT}>
                        <input type='checkbox' ></input>
                        <span className={classes.checkmarkT}  ></span>
                      </label>
                    <h2>Aceito receber notícias e comunicados da JustFit por Newsletter.</h2>
                    </div>
                  </GridItem>              
            </GridContainer>
          </GridItem>

          </GridContainer>
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
