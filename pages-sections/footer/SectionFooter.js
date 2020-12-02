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
              <GridItem xs={6} sm={2} md={4}>
              <div>
                  <h6 style={{ color: '#8E8E8E' }}>Cartões de débito</h6>
                  <img style={{width:'120px'}} src={imgDebit}></img>
                </div>
              </GridItem>  
              <GridItem xs={12} sm={4} md={2}>
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
            <GridItem xs={4} sm={4} md={1} style={{marginTop: '2%'}}>
              <div >
                  <img style={{width:'50px'}} src={imgSsl}></img>
                 
                </div>
              </GridItem>  
              <GridItem xs={4} sm={4} md={3} style={{marginLeft: '1%', marginTop: '0%'}}>
              <h6>AMBIENTE SEGURO | CERTIFICADO SSL</h6>
              </GridItem>  
            </GridContainer>
            <GridContainer style={{marginTop:'5%'}}>
              <GridItem style={{marginTop: '2%'}}>
               <h5>INFORMAÇÕES E CONDIÇÕES</h5>
                <p style={{marginTop: '2%'}}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac malesuada mi. Vestibulum in ex dui. Integer eleifend malesuada rutrum. Mauris non porttitor augue, vitae sagittis dolor. Duis consequat non urna ac convallis. Praesent iaculis ut felis nec vestibulum. Praesent tellus lacus, rutrum at urna vel, suscipit suscipit nisi. Pellentesque tempus porta libero ut ullamcorper. Sed leo quam, tincidunt quis vestibulum nec, finibus vitae orci. Donec venenatis nisi eu vestibulum egestas. Praesent hendrerit ut augue ac tempor. 
              </p>
              <p style={{marginTop: '1%'}}>
                - Nulla quis lectus enim. Aenean efficitur orci vel tellus sagittis, eget feugiat tortor mattis.
                </p>
                <p style={{marginTop: '1%'}}>
               - Ut scelerisque ante sed facilisis sagittis. Praesent vehicula rhoncus eros, in aliquam ex dictum id.
               </p>
               <p style={{marginTop: '1%'}}>
                  - Cras accumsan nulla lacus, quis cursus nisl interdum eu.

                  </p>
              </GridItem>

              <GridItem style={{marginTop: '3%'}}>
              <p style={{marginTop: '1%'}}>
                <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Integer ac malesuada mi. Vestibulum in ex dui. Integer eleifend malesuada rutrum. Mauris non porttitor augue, vitae sagittis dolor. Duis consequat non urna ac convallis. Praesent iaculis ut felis nec vestibulum. Praesent tellus lacus, rutrum at urna vel, suscipit suscipit nisi. Pellentesque tempus porta libero ut ullamcorper. Sed leo quam, tincidunt quis vestibulum nec, finibus vitae orci. Donec venenatis nisi eu vestibulum egestas. Praesent hendrerit ut augue ac tempor. Donec congue erat vel purus feugiat, eu mattis erat euismod.
                </p>
                <p style={{marginTop: '1%'}}>
            
                <strong>  Aenean et ex sit amet augue eleifend pellentesque nec eu dolor.</strong> Duis scelerisque velit a ante scelerisque, nec aliquet erat fermentum. Vivamus viverra mollis congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet enim porttitor turpis dictum cursus id et ipsum. Phasellus magna orci, finibus sit amet tellus ac, rutrum ornare lacus. Praesent odio lacus, viverra eu magna ultrices, commodo molestie nisi.
               </p>
 
              </GridItem>
            </GridContainer>
          </Footer>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
