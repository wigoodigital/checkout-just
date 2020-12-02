import React from "react";

import PropTypes from "prop-types";

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
import Button from "components/CustomButtons/Button.js";

import featuresStyle from "assets/jss/nextjs-material-kit-pro/pages/menuSections/featuresStyle.js";

import iphone from "assets/img/sections/iphone.png";
import iphone2 from "assets/img/sections/iphone2.png";
import bg9 from "assets/img/bg9.jpg";

const useStyles = makeStyles(featuresStyle);


export default function SectionFeatures(props) {
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div className={classes.container}>

        {/* Feature 2 START */}
        <div className={classes.features2}>
          {/* <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Why our product is the best</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer> */}
          <GridContainer justify="center">
            <GridItem xs={12} sm={7} md={7}>
              <InfoArea
                icon={Chat}
                title="Fale com seu gerente"
                className={classes.infoArea}
                description={
                  <span>
                    <p>
                      Nossos gerentes estão disponíveis para avaliar a sua situação e propor a melhor solução. Clique no botão abaixo para falar com seu gerente 
                    </p>
                    <div className={classes.textCenter}>
                      <Button button round color="primary" size="lg" style={{ color: "#272727", maxWidth: "100%", marginRight: "40px" }} onClick={() => { props.setActive(3) }}>
                        Falar com meu gerente
                      </Button>                   
                    </div>
                  </span>
                }
                iconColor="primary"
              />
            </GridItem>
            
            <GridItem xs={12} sm={7} md={7}>
              <hr style={{ margin: "40px 0px 0 0", border: "0.7px solid #c9d302" }}/>
              <InfoArea
                icon={AttachMoney}
                title="Solicitar restituição financeira"
                className={classes.infoArea}
                description={
                  <span>
                    <p>
                      Caso deseje, realmente, solicitar a restituição do crédito em sua conta ou cartão de crédito, clique no botão abaixo.
                    </p>
                    <div className={classes.textCenter}>
                      <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%", marginRight: "40px" }} onClick={() => { props.setActive(6),  props.handleSubmit(event)}}>
                        Solicitar restituição
                      </Button>                   
                    </div>               
                  </span>
                }
                iconColor="primary"
              />
            </GridItem>    
            
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.textCenter} style={{ marginTop: "40px" }}>
                <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { props.setActive(1) }}>
                  Voltar
                </Button>
              </div>
            </GridItem>    

          </GridContainer>
        </div>
        {/* Feature 2 END */}

      </div>

    </div>
  );
}

SectionFeatures.propTypes = {  
  setActive: PropTypes.object,
};


