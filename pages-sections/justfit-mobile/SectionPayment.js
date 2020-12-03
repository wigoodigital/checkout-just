/*eslint-disable*/
import React from "react";
import {useState}from "react";
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


import stepMobile3 from "assets/img/mobilestep3.png";

import creditDark from "assets/img/credit-card-dark.png";
import creditWhite from "assets/img/credit-card-white.png";
import debitDark from "assets/img/debit-bank-dark.png";


import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit-mobile.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionPaymentMobile() {
  const classes = useStyles();
    
const [firstCardColor,setFirstCardColor]=useState('#484848');
const [firstCardTextColor,setFirstCardTextColor]=useState('white');
const [secondCardColor,setSecondCardColor]=useState('#F2F2F2');
const [secondCardTextColor,setSecondCardTextColor]=useState('#484848');
const [thirdCardColor,setThirdCardColor]=useState('#F2F2F2');
const [thirdCardTextColor,setThirdCardTextColor]=useState('#484848');
const [displayPayment,setDisplayPayment]=useState('block');
const [displayDebit,setDisplayDebit]=useState('none');
  return (
      
      <GridContainer className={classes.content} justify="center" >        
        <GridItem xs={12} sm={12} md={12}>
          <Justfit
            theme="white"
            className={classes.jusfit}
          >
           <GridContainer justify='left'>
           <GridItem align='left' justify='center'  xs={6} sm={6} md={8}>
           <h2 style={{fontSize: '17px', fontWeight:600,color:'#484848',minWidth:'150px'}}>ESCOLHA SEU MEIO DE PAGAMENTO</h2>
           <p style={{minWidth:'160px',color:'#484848',fontWeight:500,fontSize:'12px'}}>UNIDADE <strong>BARRETOS</strong></p>
           </GridItem>
           <GridItem className={classes.stepMobile} xs={6} sm={6} md={4} style={{marginBottom:'25px'}} align='right'>
                 <img src={stepMobile3} />
           </GridItem>
             <GridItem xs={12} sm={12} md={10}>
             <h1 style={{fontSize:'12px',fontWeight:600,color:"#484848",maxWidth:'500px',paddingBottom:'20px'}}>Selecione uma das opções de pagamento e preencha os campos abaixo</h1>
             </GridItem>
             <GridItem xs={12} sm={12} md={3} >
     <button className={classes.btnCardChecked} style={{backgroundColor:firstCardColor,color:firstCardTextColor}}  onClick={()=>{setFirstCardColor("#484848");setFirstCardTextColor('#FFF');setSecondCardColor('#F2F2F2');setSecondCardTextColor('#484848');setThirdCardColor("#F2F2F2");setThirdCardTextColor('#484848');setDisplayDebit('none');setDisplayPayment('block');}}>
      <span style={{backgroundColor: firstCardTextColor}}></span>
      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" style={{marginRight:15}} xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z" fill={firstCardTextColor}/>
<path d="M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z" fill={firstCardTextColor}/>
</g>
<defs>
<clipPath id="clip0">
<rect width="30.7987" height="31" fill={firstCardTextColor} transform="matrix(-1 0 0 1 30.7988 0)"/>
</clipPath>
</defs>
</svg>

      <h2>Cartão de Crédito</h2>
     </button>
     </GridItem>
           <GridItem xs={12} sm={12} md={3} >
     <button className={classes.btnCard} style={{backgroundColor:secondCardColor,color:secondCardTextColor}}  onClick={()=>{setFirstCardColor("#F2F2F2");setFirstCardTextColor('#484848');setSecondCardColor('#484848');setSecondCardTextColor('#FFF');setThirdCardColor("#F2F2F2");setThirdCardTextColor('#484848');setDisplayDebit('none');setDisplayPayment('block');}}>
     <span style={{backgroundColor: secondCardTextColor}}></span>
     <svg width="31" height="31" viewBox="0 0 31 31" fill="none" style={{marginRight:15}} xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z" fill={secondCardTextColor}/>
<path d="M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z" fill={secondCardTextColor}/>
</g>
<defs>
<clipPath id="clip0">
<rect width="30.7987" height="31" fill={secondCardTextColor} transform="matrix(-1 0 0 1 30.7988 0)"/>
</clipPath>
</defs>
</svg>

      <h2>Cartão de Débito</h2>
     </button>
  </GridItem>
              <GridItem xs={12} sm={12} md={3}>
  <button className={classes.btnCard} style={{backgroundColor:thirdCardColor,color:thirdCardTextColor}} onClick={()=>{setFirstCardColor("#F2F2F2");setFirstCardTextColor('#484848');setSecondCardColor('#F2F2F2');setSecondCardTextColor('#484848');setThirdCardColor("#484848");setThirdCardTextColor('#FFF');setDisplayDebit('block');setDisplayPayment('none');}}>
      <span style={{backgroundColor: thirdCardTextColor}}></span>
      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" style={{marginRight:15}} xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z" fill={thirdCardTextColor}/>
<path d="M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z" fill={thirdCardTextColor}/>
</g>
<defs>
<clipPath id="clip0">
<rect width="30.7987" height="31" fill={thirdCardTextColor} transform="matrix(-1 0 0 1 30.7988 0)"/>
</clipPath>
</defs>
</svg>

      <h2>Débito em conta</h2>
  </button>
  </GridItem>
                <GridItem xs={12} sm={12} md={6} style={{marginTop:'50px',display: displayPayment}} >
                <GridContainer justify='left' >
                <GridItem xs={12} sm={12} md={10}> 
                 <h5 style={{color:"#484848",fontSize:'18px',fontWeight:600,paddingTop:'50px !important',padding:0,margin:0,}}>Informações de Pagamento</h5>
             </GridItem>
                 <GridItem xs={12} sm={12} md={10} className={classes.formInputItem}>
                 <h2 >Nome impresso no Cartão</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>Número do Cartão</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>CPF do Titular do Cartão</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={3} className={classes.formInputItem}>
                 <h2>Vencimento</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={4} className={classes.formInputItem}>
                 <h2>Cod. Segurança</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={3} className={classes.formInputItem}>
                 <h2>Nº de parcelas</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={10} className={classes.checkboxItemPayment} style={{marginTop:20}}>
                 <div style={{display: 'flex', flexDirection: 'row', alignItems:'center',}}>
                 <label className={classes.containerCheckbox}>
                      <input type='checkbox'></input>
                      <span className={classes.checkmark}  ></span>
                    </label>
                     <h2>Li e aceito o contrato, o <a>termo de adesão</a> e o <a>regulamento interno</a>.</h2>
                      </div>
                 </GridItem>
                 </GridContainer>
                 </GridItem>

                 <GridItem xs={12} sm={12} md={6} style={{marginTop:'50px',display: displayDebit}} >
                <GridContainer justify='left' >
                <GridItem xs={12} sm={10} md={10}> 
                 <h5 style={{color:"#484848",fontSize:'18px',fontWeight:600,paddingTop:'50px !important',padding:0,margin:0,}}>Informações de Pagamento</h5>
             </GridItem>
                 <GridItem xs={12} sm={10} md={10} className={classes.formInputItem}>
                 <h2 >Nome completo</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>CPF</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>Nome do banco</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={3} className={classes.formInputItem}>
                 <h2>Agência</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>Conta</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={2} className={classes.formInputItem}>
                 <h2>Digito</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={10} className={classes.checkboxItemPayment} style={{marginTop:20}}>
                 <div style={{display: 'flex', flexDirection: 'row', alignItems:'center',}}>
                 <label className={classes.containerCheckbox}>
                      <input type='checkbox'></input>
                      <span className={classes.checkmark}  ></span>
                    </label>
                    <h2>Li e aceito o contrato, o <a>termo de adesão</a> e o <a>regulamento interno</a>.</h2>
                      </div>
                 </GridItem>
                 </GridContainer>
                 </GridItem>



                <GridItem xs={12} sm={12} md={6} style={{marginTop:'50px'}}>
                <GridContainer justify='left' >
                <GridItem xs={12} sm={12} md={10}> 
                 <h5 style={{color:"#484848",fontSize:'18px',fontWeight:600,paddingTop:'50px !important',padding:0,margin:0,}}>Endereço de cobrança</h5>
             </GridItem>

                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2 >CEP</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={2} className={classes.formInputItem}>
                 <h2>UF</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>Logradouro</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={3} className={classes.formInputItem}>
                 <h2>Número</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>Complemento</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>Bairro</h2>
                 <input></input>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5} className={classes.formInputItem}>
                 <h2>Cidade</h2>
                 <input></input>
                 </GridItem>
                 </GridContainer>
                 </GridItem>
            </GridContainer>
 
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
