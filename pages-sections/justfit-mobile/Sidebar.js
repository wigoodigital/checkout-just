import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
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
import Lateral from "components/Lateral/Lateral.js";

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

import styles from "assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js";


const useStyles = makeStyles(styles);

export default props => {
    const classes = useStyles();
  return (
    <Menu>
      <GridContainer  className={classes.contentMobile} style={{padding:0,margin:0,overflow: 'hidden',zIndex:1,}} justify="center" align='center' >        
        <GridItem xs={12} sm={12} md={12} align='center' justify='center'>
            
             <h5 style={{padding:0,margin:0,color:'#787878',fontSize:'16px',marginTop:'20px',}}>PLANO <strong style={{color:'#484848'}} >FIT+ </strong></h5>
             <h5 style={{padding:0,margin:0,marginBottom:'30px',fontSize:'16px'}}>UNIDADE <strong>BARRETOS</strong></h5>
    
               </GridItem>
               
               {/* <GridItem justify='center' xs={12} sm={2} md={10}>
               <label style={{padding:0,margin:0,fontSize:'10px',fontWeight: 500,textAlign: 'left'}}>INSERIR CUPOM:</label>
               <input style={{border:'1px solid #D9D9D9', fontSize:'20px', width: '100%'}}></input>
        
               </GridItem> */}

               <GridItem justify='center' align='center' style={{marginTop:'30px'}}  xs={12} sm={12} md={12}>
               <h6 style={{padding:0,margin:0,fontSize:'12px', textAlign: 'center', fontWeight: 600,}}>INFORMAÇÕES DE COBRANÇA</h6> 
               
        
               </GridItem>
               <GridItem xs={12} sm={12} md={12} align='center' justify='center' style={{marginTop:'10px', marginBottom:'20px'}}>
                <iframe align='center' style={{width: '100%', height: '400px', backgroundColor: '#FFF',border:'1px solid #D9D9D9',borderRadius: '10px'}}>


                </iframe>
               </GridItem>
               <GridContainer justify='center' align='center' style={{marginTop:'20px'}}>

                   </GridContainer>

                   

                  
     
      </GridContainer>
    </Menu>
  );
};