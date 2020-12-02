import React from "react";
import TagManager from 'react-gtm-module';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupWork from "@material-ui/icons/GroupWork";
import Airplay from "@material-ui/icons/Airplay";
import LocationOn from "@material-ui/icons/LocationOn";
import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import finishStyle from "assets/jss/nextjs-material-kit-pro/pages/checkoutSections/finishStyle.js";

import iphone from "assets/img/sections/iphone.png";
import iphone2 from "assets/img/phoneApp.png";
import clicouApp from "assets/img/clicouApp.png";
import bg9 from "assets/img/bg9.jpg";

import logoTecnofit from "assets/img/logo-tecnofit.png";
import logoTelegram from "assets/img/logo-telegram.png";
import iconLove from "assets/img/like-love.png";


const useStyles = makeStyles(finishStyle);


const passo4 = (
  <>  
     O <b>acompanhamento</b> e <b>atendimento</b> são realizados através do grupo do Telegram® da sua turma no período do dia que você optou no questionário sobre você.  
  </>
);


export default function SectionFeatures(props) {
  const classes = useStyles();

  React.useEffect(() => {    
    // history.pushState({}, null, "/checkout/finish");
    TagManager.dataLayer({
      dataLayer: {
        event: "finishView",
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': String(Math.floor(Math.random() * (1000 - 9999 + 1) ) + 9999),                         // Transaction ID. Required for purchases and refunds.
              'affiliation': 'Tecnofit - Clicou Personal',
              'revenue': '478.80',                     // Total transaction value (incl. tax and shipping)
              'tax':'0.00',
              'shipping': '0.00'              
            },
            'products': [{                            // List of productFieldObjects.
              'name': 'Plano Anual Start',
              'id': '1',
              'price': '478.80',
              'brand': 'Clicou Personal',
              'category': 'Atendimento online',                
              'quantity': 1                           // Optional fields may be omitted or set to empty string.
             }]
          }
        }  
      },          
    })


    TagManager.dataLayer({
      dataLayer: {
        'event': 'checkoutOption',
        'ecommerce': {
          'checkout_option': {
            'actionField': {'step': 4}
          }
        }       
      },          
    })

    
  }, []);

  
  

  return (
    <div className="cd-section" style={{ backgroundColor: "#ffffff" }} >
      <div className={classes.container}>
        {/* Feature 4 START */}
        <div className={classes.features4} style={{ paddingTop: 0 }}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >            
              <InfoArea                
                iconImage={iconLove}                
                title={props.dataSale.customer.name} 
                descriptionLarge="Sua matrícula foi realizada com sucesso!"
                iconColor="info"   
                className={classes.textLeft}   
                                        
              />
            </GridItem>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >              
              <div className={classes.bubble}>
                Seu treino já está sendo preparado.
                <br/>
                Em até 48 horas você poderá acessá-lo através do aplicativo Tecnofit.
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h3 className={classes.titleConfira}>Confira os próximos passos:</h3>
              <br/>              
              <svg style={{ width: "45px" }} id="Componente_1_1" data-name="Componente 1 – 1" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
                <path id="download" d="M667,922l16.463,17L700,922.06" transform="translate(-647.5 -894.5)" fill="none" stroke="#425cc7" stroke-width="4" opacity="0.9"/>
                <g id="Elipse_2" data-name="Elipse 2" fill="rgba(255,255,255,0)" stroke="#425cc7" stroke-width="3">
                  <circle cx="36" cy="36" r="36" stroke="none"/>
                  <circle cx="36" cy="36" r="34.5" fill="none"/>
                </g>
              </svg>              

            </GridItem>      
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={6} className={classes.mlAuto}>              
              <InfoArea
                titlePasso="Passo 1" 
                iconImage={logoTecnofit}                 
                title="Baixe o Aplicativo de treinos:"
                description="Com ele você visualiza seus treinos, vídeos explicativos e acompanha seus resultados. Tudo de forma simples e rápida."
                iconColor="info" 
                app   
                android="https://play.google.com/store/apps/details?id=br.com.tecnofit.mobileapp"
                ios="https://apps.apple.com/br/app/tecnofit/id1109478634"     
                className={classes.paddingTopZero}                       
              />
 
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6} className={classes.mlAuto}>              
              <InfoArea
                titlePasso="Passo 2"                                     
                description="Você receberá um e-mail para Confirmar que possui acesso ao e-mail cadastrado."     
                className={classes.paddingTopZero}        
                
              />
              <InfoArea
                titlePasso="Passo 3" 
                description='Abra o app Tecnofit, clique em "Novo Cadastro", informe o mesmo e-mail cadastrado na matrícula.'      
                className={classes.paddingTopZero}                    
              />
 
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={12} lg={3}>
              <div className={classes.phoneContainer}>
                <img src={clicouApp} alt="..." />
              </div>
            </GridItem> */}

            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >                 
              <svg style={{ width: "45px" }} id="Componente_1_1" data-name="Componente 1 – 1" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
                <path id="download" d="M667,922l16.463,17L700,922.06" transform="translate(-647.5 -894.5)" fill="none" stroke="#425cc7" stroke-width="4" opacity="0.9"/>
                <g id="Elipse_2" data-name="Elipse 2" fill="rgba(255,255,255,0)" stroke="#425cc7" stroke-width="3">
                  <circle cx="36" cy="36" r="36" stroke="none"/>
                  <circle cx="36" cy="36" r="34.5" fill="none"/>
                </g>
              </svg>              

            </GridItem>  
            <GridItem xs={12} sm={12} md={12} lg={6} className={classes.mrAuto}>
                 
              <InfoArea
                titlePasso="Passo 4" 
                iconImage={logoTelegram}                 
                title="Baixe o Telegram® e crie sua conta:"
                description={passo4}
                iconColor="info" 
                app   
                android="https://play.google.com/store/apps/details?id=org.telegram.messenger"
                ios="https://apps.apple.com/br/app/telegram-messenger/id686449807" 
                className={classes.paddingTopZero}                   
              />

            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6} className={classes.mrAuto}>
              <InfoArea
                titlePasso="Passo 5" 
                description="Você receberá por SMS e e-mail o convite para ingressar no grupo do Telegram®."   
                className={classes.paddingTopZero}               
              />
              
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 4 END */}
      </div>

    </div>
  );
}
