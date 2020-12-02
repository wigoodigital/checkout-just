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

const useStyles = makeStyles(finishStyle);

export default function SectionFeatures(props) {
  const classes = useStyles();

  React.useEffect(() => {    
    // history.pushState({}, null, "/checkout/finish");
    TagManager.dataLayer({
      dataLayer: {
        event: "finishView",
        userId: '001',
        userProject: 'project',
        page: 'home'
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
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Seja {props.dataSale.customer.sex == "M" ? "bem-vindo" : "bem-vinda"}, {props.dataSale.customer.name} </h2>
              <h5 className={classes.description}>
                Seu cadastro foi concluído com sucesso! Em até 48 horas você receberá seu treino no Aplicativo da Tecnofit. Saiba os próximos passos.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={4} className={classes.mlAuto}>
              <InfoArea
                icon={Code}
                title="Treinos e Evolução"
                description="Agora que você já é um(a) aluno(a) Clicou Personal, baixe o app Tecnofit. Com ele você acessa seus treinos, histórico e acompanha sua evolução."
                iconColor="info"                              
              />
              <InfoArea
                icon={FormatPaint}
                title="Tecnofit"
                description="Baixe agora e realize o primeiro acesso com o mesmo e-mail informado na sua matrícula."
                iconColor="danger"
                app
                android="https://play.google.com/store/apps/details?id=br.com.tecnofit.mobileapp"
                ios="https://apps.apple.com/br/app/tecnofit/id1109478634"
              />    
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3}>
              <div className={classes.phoneContainer}>
                <img src={clicouApp} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={4} className={classes.mrAuto}>
              <InfoArea
                icon={Dashboard}
                title="Acompanhamento e Interação"
                description="A interação do seu Personal com sua turma acontece pelo Telegram! Tire suas dúvidas, compartilhe seus resultados e mantenha o foco em sua rotina de treinos!"
                iconColor="primary"
              />

              <InfoArea
                icon={ViewCarousel}
                title="Telegram"
                description="Se você ainda não tem o aplicativo, baixe agora e crie seu perfil com o mesmo número informado na sua matrícula. Se você já tem o aplicativo instalado, é só aguardar o convite para ingressar no grupo da sua turma."
                iconColor="success"
                app
                android="https://play.google.com/store/apps/details?id=org.telegram.messenger"
                ios="https://apps.apple.com/br/app/telegram-messenger/id686449807"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 4 END */}
      </div>

    </div>
  );
}
