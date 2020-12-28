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

import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import seloCadeado from "assets/img/selo-cadeado.png";
import siteSeguro from "assets/img/site-seguro.png";
import imgSsl from "assets/img/cadeado.png";
import lestencrypt from "assets/img/letsencrypt_White.png";
import imgCard from "assets/img/card-list.png";
import imgDebit from "assets/img/debit-list.png";
import imgDebito from "assets/img/debito.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/footer/footerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionFooter() {
  const classes = useStyles();
  return (
      
      <GridContainer className={classes.content} justify="center" >        
        <GridItem xs={12} sm={12} md={10}>
          <Footer
            theme="dark"
            className={classes.footer}
          >
            <GridContainer justify="left" style={{marginTop:'80px'}}>
              <GridItem xs={6} sm={2} md={4}>
                <div>
                  <h6 style={{ color: '#8E8E8E' }}>Cartões de crédito</h6>
                  <img style={{width:'200px'}} src={imgCard}></img>
                </div>
              </GridItem>
              <GridItem xs={6} sm={2} md={4} style={{ display: "none" }}>
              <div>
                  <h6 style={{ color: '#8E8E8E' }}>Cartões de débito</h6>
                  <img style={{width:'120px'}} src={imgDebit}></img>
                </div>
              </GridItem>  
              <GridItem xs={12} sm={4} md={2} style={{ display: "none" }}>
              <div>
                  <h6 style={{ color: '#8E8E8E' }}>Débito</h6>
                  <img style={{width:  '35px'}} src={imgDebito}></img>
                </div>
              </GridItem>  
             
              {/* <GridItem xs={12} sm={4} md={4} className={classes.centerPhone}>
                <h5 className={classes.titleFooter}>Ficou com alguma dúvida?</h5>
              
                <a target="_blank" href="https://justfit.com.br/fale-conosco/">
                  <Button round color="secondary" size="lg">
                    Fale Conosco
                  </Button>
                </a>
                

                <ul className={classes.socialButtons}>      
                  <li>
                    
                      <Button justIcon simple href="https://www.facebook.com/justfitoficial" target="_blank" color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                    
                  </li>      
                  <li>
                    
                      <Button justIcon simple href="https://www.youtube.com/justfitoficial" target="_blank" color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                    
                  </li>
                  <li>
                    
                      <Button justIcon simple href="https://www.instagram.com/justfitoficial/" target="_blank"  color="instagram">
                        <i className="fab fa-instagram" />
                      </Button>
                    
                  </li>
                </ul>      
              </GridItem> */}
            </GridContainer>
            <GridContainer style={{marginTop: '3%'}}>
            <GridItem xs={12} sm={12} md={1} style={{marginTop: '2%'}}>
              <div >
                  <img style={{width:'50px'}} src={imgSsl}></img>
                 
                </div>
              </GridItem>  
              <GridItem xs={12} sm={12} md={3} style={{marginLeft: '1%', marginTop: '0%'}}>
              <h6>AMBIENTE SEGURO | CERTIFICADO SSL</h6>
              </GridItem>  
            </GridContainer>
            <GridContainer style={{marginTop:'5%'}}>
              <GridItem style={{marginTop: '2%'}}>
               {/* <h5>INFORMAÇÕES E CONDIÇÕES</h5> */}
                <p style={{marginTop: '2%'}}>
                  *Promoção Verão Fit:  Ao aderir a Promoção Verão Fit, você irá pagar no primeiro 01 (um) mês o valor de R$ 29,90 (vinte e nove reais e noventa centavos) no Plano Just, e R$ 14,90 (quatorze reais e noventa centavos) no Plano Fit Plus, e terá a isenção da taxa de matrícula em ambos os planos. Condição válida apenas para novas vendas que fizerem adesão nos Planos Just ou Fit Plus, nos termos e demais condições a seguir: 
              </p>
              </GridItem>

              <GridItem style={{marginTop: '2%'}}>
                <p style={{marginTop: '1%'}}>
                  <strong>i)</strong> Promoção com início em 01 de dezembro 2020 e data final em 31 de dezembro 2020.
                </p>
                <p style={{marginTop: '1%'}}>
                  <strong>ii)</strong> Todas as demais cobranças previstas em contrato (taxa de manutenção, multas, etc.) serão integralmente mantidas. 
                </p>
                <p style={{marginTop: '1%'}}>
                  <strong>iii)</strong> Promoção não cumulativa e vinculada a permanência mínima de 03 (três) meses. Esse prazo mínimo é uma condição ao benefício, e não se confunde com o prazo contratual que é de 12 (doze) meses.
                </p>
                <p style={{marginTop: '1%'}}>
                  <strong>iv)</strong> Caso haja cancelamento durante o período de permanência mínima de 03 (três) meses, o valor do benefício (taxa de matrícula e desconto concedido na primeira mensalidade do plano contratado) será cobrado juntamente com quaisquer outros valores devidos no momento do cancelamento (taxa de manutenção, multa, etc.). 
                </p>
                <p style={{marginTop: '1%'}}>
                  <strong>v)</strong> Essa promoção não é válida para clientes com débito anterior em aberto ou que tiveram seu plano cancelado por violação do Regulamento Interno. Consulte unidades participantes.
                </p>

              </GridItem>
            </GridContainer>
          </Footer>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
