/*eslint-disable*/
import React from "react";
import { useState } from "react";
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

import stepMobile1 from "assets/img/mobilestep1.png";

import planojust from "assets/img/planojust.png";
import planofit from "assets/img/planofit.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit-mobile.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionPlansMobile() {
  const classes = useStyles();

  const [color, setColor] = useState('#D3D3D3');
  const [textColor, setTextColor] = useState('#CCDA01');

  return (



    <GridContainer className={classes.content} justify="center" >
      <GridItem xs={12} sm={12} md={12}>
        <Justfit
          theme="white"
          className={classes.jusfit}
        >
          <GridContainer justify='center' align='center' >
            <GridItem align='left' justify='center' xs={6} sm={6} md={8}>
              <h2 style={{ fontSize: '15px', fontWeight: 600, color: '#484848', minWidth: '160px' }}>VOCÊ ESCOLHEU O PLANO <strong style={{ fontWeight: '900' }}>FIT</strong></h2>
              <p style={{ minWidth: '160px', color: '#484848', fontWeight: 500, fontSize: '12px' }}>UNIDADE <strong>BARRETOS</strong></p>
            </GridItem>
            <GridItem className={classes.stepMobile} xs={6} sm={6} md={4} align='right'>
              <img src={stepMobile1} />
            </GridItem>

            <GridItem xs={12} sm={12} md={12} style={{ marginTop: '20px' }} align='left'>
              <GridItem>
                <div className={classes.planoDark} onClick={() => { setColor("#D3D3D3"); setTextColor('#CCDA01') }}>
                  <span style={{ width: '15px', height: '15px', backgroundColor: textColor, borderRadius: '100px', alignSelf: 'flex-start', justifySelf: 'flex-start', margin: '10px' }}></span>
                  <img style={{ width: '70px', marginBottom: '20px' }} src={planofit} />

                  <h5 >Matrícula</h5>
                  <strong style={{ marginBottom: '10px' }}>R$ 39,90</strong>

                  <h5>Manutenção Anual</h5>
                  <strong style={{ marginBottom: '10px' }}>R$ 149,90 em 5x de R$ 29,98</strong>

                  <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', flex: 1, }}>
                      <h3 style={{ fontSize: '10px', fontWeight: 500, textDecoration: 'line-through', margin: 0, padding: 0, }}>De R$ 79,90</h3>
                      <h3 style={{ fontSize: '10px', fontWeight: 500, margin: 0, padding: 0, }}>Por R$</h3>
                    </div>
                    <h1 style={{ fontSize: '50px', fontWeight: 550, margin: 0, padding: 0, }}>39<span style={{ fontSize: '25px' }}>,90</span></h1>
                  </div>
                </div>
                <div className={classes.planoWhite} onClick={() => { setColor("#CCDA01"); setTextColor('#D3D3D3') }}>
                  <span style={{ width: '15px', height: '15px', backgroundColor: color, borderRadius: '100px', alignSelf: 'flex-start', justifySelf: 'flex-start', margin: '10px' }}></span>
                  <img style={{ width: '70px', marginBottom: '20px' }} src={planojust} />
                  <h5 >Matrícula</h5>
                  <strong style={{ marginBottom: '10px' }}>R$ 39,90</strong>

                  <h5>Manutenção Anual</h5>
                  <strong style={{ marginBottom: '10px' }}>R$ 149,90 em 5x de R$ 29,98</strong>

                  <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', flex: 1, }}>
                      <h3 style={{ fontSize: '10px', fontWeight: 500, textDecoration: 'line-through', margin: 0, padding: 0, }}>De R$ 79,90</h3>
                      <h3 style={{ fontSize: '10px', fontWeight: 500, margin: 0, padding: 0, }}>Por R$</h3>
                    </div>
                    <h1 style={{ fontSize: '50px', fontWeight: 550, margin: 0, padding: 0, }}>39<span style={{ fontSize: '25px' }}>,90</span></h1>
                  </div>
                </div>
              </GridItem>
              <h4 className={classes.SubtitleText}>Quer complementar seu plano?</h4>
              <GridItem>
                <div className={classes.planoAdicional}>
                  <GridItem xs={2} sm={2} md={2} align='center' justify='center' style={{ display: 'flex',margin:5,  flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <label className={classes.containerCheckbox}>
                      <input type='checkbox'></input>
                      <span className={classes.checkmark}  ></span>
                    </label>
                  </GridItem>
                   <div className={classes.planoAdicionalContent} style={{ marginTop: 20, marginBottom: 20, }}>
                    <h5 style={{ fontWeight: 800,fontSize:'15px', }}>JUSTFIT PROFISSIONAL ONLINE</h5>
                    <p style={{fontSize:'13px',}}>Aliquam erat volutpat. Suspendisse purus dui, </p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                      <h3 style={{ fontSize: '12px', fontWeight: 500, margin: 0, padding: 0, alignSelf: 'flex-start', marginTop: '10px !important' }}>R$</h3>

                      <h1 style={{ fontSize: '40px', fontWeight: 600, margin: 0, padding: 0, }}>9<span style={{ fontSize: '20px' }}>,90</span></h1>
                    </div>
                  </div>

                </div>
                <div className={classes.planoAdicional}>
                  <GridItem xs={2} sm={2} md={2} align='center' justify='center' style={{ display: 'flex', margin:5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <label className={classes.containerCheckbox}>
                      <input type='checkbox'></input>
                      <span className={classes.checkmark}  ></span>
                    </label>
                  </GridItem><div className={classes.planoAdicionalContent} style={{ marginTop: 20, marginBottom: 20, }}>
                    <h5 style={{ fontWeight: 800,fontSize:'15px', }}>JUSTFIT PROFISSIONAL ONLINE</h5>
                    <p style={{fontSize:'13px',}}>Aliquam erat volutpat. Suspendisse purus dui, </p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                      <h3 style={{ fontSize: '12px', fontWeight: 500, margin: 0, padding: 0, alignSelf: 'flex-start', marginTop: '10px !important' }}>R$</h3>

                      <h1 style={{ fontSize: '40px', fontWeight: 600, margin: 0, padding: 0, }}>9<span style={{ fontSize: '20px' }}>,90</span></h1>
                    </div>

                  </div>
                </div>
              </GridItem>

            </GridItem>

          </GridContainer>


        </Justfit>

      </GridItem>
    </GridContainer>



  );
}
