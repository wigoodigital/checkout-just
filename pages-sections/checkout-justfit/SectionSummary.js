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


import nextsteps from "assets/img/nextsteps.png";
import planofit from "assets/img/planofit.png";
import mastercard from "assets/img/mastercard.png";
import editIcon from "assets/img/edit.png";


import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";
import JustfitSummary from "../../components/Justfit/JustfitSummary/JustfitSummary";

const useStyles = makeStyles(styles);

export default function SectionSummary(props) {
  const classes = useStyles();
  return (
      
      <GridContainer className={classes.content} justify="center" >        
        <GridItem xs={12} sm={12} md={10}>
          <Justfit
            theme="white"
            className={classes.jusfit}>
           <GridContainer className={classes.content} justify="center">
             <GridItem  xs={12} sm={12} md={12}>
               <GridItem xs={12} sm={12} md={12}>
               <h1 style={{color:"#484848",fontWeight:'550',fontSize:'40px'}}>RESUMO DO SEU PEDIDO</h1>
               </GridItem>
               <h6 style={{color:"#484848",fontWeight:'600',fontSize:'15px',paddingBottom:20,paddingTop:30,paddingLeft:15,textTransform:'none'}}>Confira aqui alguns detalhes do seu pedido</h6>
               </GridItem>
               <GridItem  xs={12} sm={12} md={6} >
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} style={{marginBottom:33}}>
                      <JustfitSummary theme='summary'>
                        <GridContainer style={{height:'100%'}}>
                          <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Seus dados</h1>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6} align='right'>
                        
                            <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px'}}>Editar</h1>
                    
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
                    <GridItem xs={12} sm={12} md={12} style={{marginBottom:33}}>
                      <JustfitSummary  theme='summary'>
                        <GridContainer style={{height:'100%'}}>
                          <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Endereço</h1>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6} align='right'>
                            <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px'}}>Editar</h1>
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
                  </GridContainer>
               </GridItem>
               <GridItem  xs={12} sm={12} md={6} >
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}  >
                      <JustfitSummary theme='summary'>
                        <GridContainer style={{minHeight:'300px'}}>
                          <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Informações de Pagamento</h1>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6} align='right'>
                            <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px'}}>Editar</h1>
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
                </GridItem>
               
           </GridContainer>
 
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
