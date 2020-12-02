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

import stepMobile4 from "assets/img/mobilestep4.png";

import nextsteps from "assets/img/nextsteps.png";
import planofit from "assets/img/planofit.png";
import mastercard from "assets/img/mastercard.png";
import editIcon from "assets/img/editIcon.png";


import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit-mobile.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";
import JustfitSummary from "../../components/Justfit/JustfitSummary/JustfitSummary";

const useStyles = makeStyles(styles);

export default function SectionSummaryMobile() {
  const classes = useStyles();
  return (
      
      <GridContainer className={classes.content} justify="center" >        
        <GridItem xs={12} sm={12} md={12}>
          <Justfit
            theme="white"
            className={classes.jusfit}>
           <GridContainer xs={12} sm={12} md={12}>
            
           <GridItem align='left' justify='center'  xs={6} sm={6} md={8}>
           <h2 style={{fontSize: '17px', fontWeight:600,color:'#484848',minWidth:'150px'}}>RESUMO DO PEDIDO</h2>
           <p style={{minWidth:'160px',color:'#484848',fontWeight:500,fontSize:'12px'}}>UNIDADE <strong>BARRETOS</strong></p>
           </GridItem>
           <GridItem className={classes.stepMobile} xs={6} sm={6} md={4} style={{marginBottom:'25px'}} align='right'>
                 <img src={stepMobile4} />
           </GridItem>
               <h6 style={{color:"#484848",fontWeight:'600',fontSize:'13px',paddingBottom:20,paddingTop:30,paddingLeft:15,textTransform:'none'}}>Confira aqui alguns detalhes do seu pedido</h6>
         

                 <GridItem style={{marginBottom:40,}}>
               <JustfitSummary theme='summary'>
                 <GridContainer style={{height:'100%'}}>
                   <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                     <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Seus dados</h1>
                   </GridItem>
                   <GridItem xs={12} sm={12} md={6} align='right'>
                
                   <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px'}}><img src={editIcon} /></h1>
            
                   </GridItem>
  
                   <GridItem style={{marginLeft:'30px',padding:0,}}>
                     <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>E-mail:</h1>
                     <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>exemplo@exemplo.com.br</h2>
                   </GridItem>
                   <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Nome:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>Exemplo</h2></GridItem>
                   <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Sobrenome:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>Exemplo</h2></GridItem>
                  
                   <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>CPF:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>12345678911</h2></GridItem>
                   <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Sexo:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>Indefinido</h2></GridItem>
                  
                   <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Celular:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>(11)9XXXX-XXXX</h2></GridItem>
                   <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Telefone:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>XXXX-XXXX</h2></GridItem>
                 
                   <GridContainer style={{marginLeft:'30px',padding:0,}}>
                     <GridItem>
                     </GridItem>
                   </GridContainer>
                 </GridContainer>
               </JustfitSummary>
               </GridItem>
               <GridItem style={{marginBottom:40,}}>
               <JustfitSummary  theme='summary'>
               <GridContainer style={{height:'100%'}}>
                   <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                     <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Endereço</h1>
                   </GridItem>
                   <GridItem xs={12} sm={12} md={6} align='right'>
                   <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px'}}><img src={editIcon} /></h1>
                   </GridItem>
                   <GridItem style={{marginLeft:'30px',padding:0,}}>
                     <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>E-mail:</h1>
                     <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>exemplo@exemplo.com.br</h2>
                   </GridItem>
                   <GridItem style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Logradouro:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>Rua Exemplo</h2></GridItem>
                   <GridItem style={{marginLeft:'30px',padding:0,}}  xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Número:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>999</h2></GridItem>
                 
                   <GridItem style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Complemento:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>Apartamento</h2></GridItem>
                   <GridItem style={{marginLeft:'30px',padding:0,}}  xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Bairro:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>Jardim Exemplo</h2></GridItem>
                   
                   <GridItem style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Cidade:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>Barueri</h2></GridItem>
                   <GridItem style={{marginLeft:'30px',padding:0,}}  xs={12} sm={12} md={5}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Estado:</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>São Paulo</h2></GridItem>
                   
                   <GridContainer style={{marginLeft:'30px',padding:0,}}>
                     <GridItem>
                     </GridItem>
                   </GridContainer>
                 </GridContainer>
               </JustfitSummary>
               </GridItem>
              
               <GridItem xs={12} sm={12} md={12}  >
                  <JustfitSummary theme='summary'>
                  <GridContainer style={{minHeight:'300px'}}>
                   <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                     <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Informações de Pagamento</h1>
                   </GridItem>
                   <GridItem xs={12} sm={12} md={6} align='right'>
                     <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px'}}><img src={editIcon} /></h1>
                   </GridItem>
                   <GridItem style={{marginLeft:'30px',padding:0,}}>
                     <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Método de pagamento escolhido</h1>
                     <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>Cartão de crédito</h2>
                   </GridItem>
                   <GridItem style={{marginLeft:'30px',padding:0,}}>
                     <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Nome impresso no cartão</h1>
                     <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>José Exemplo Exemplar</h2>
                   </GridItem>
                   <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={6}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Número do cartão</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>XXXX XXXX XXXX 5566</h2></GridItem>
                   <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={3}><h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Vencimento</h1> <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0}}>11/26</h2></GridItem>
                   <GridContainer style={{marginLeft:'30px',padding:0,}}>
                     <GridItem>
                     </GridItem>
                   </GridContainer>
                 </GridContainer>
                  </JustfitSummary>
                   </GridItem>
                 
                  
           </GridContainer>
 
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
