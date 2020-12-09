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



import planojust from "assets/img/planojust.png";
import planofit from "assets/img/planofit.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionPlans(props) {
  const classes = useStyles();

  const [color, setColor] = useState('#D3D3D3');
  const [textColor, setTextColor] = useState('#CCDA01');
  const [textPlano, setTextPlano] = useState('FIT+');


  const formatValue = (value) => {
    return new String(value.toFixed(2)).replace(".", ",");    
  }
  const formatValueDesc = (value) => {
    const decimalValue = value;
    return (
      <h1 style={{ margin: 0, padding: 0, position: 'relative', right: '90%', top: '10px', fontWeight: 700, fontSize: '50px' }}>{decimalValue.substr( 0, decimalValue.length - 3 )}<span style={{ fontSize: '25px' }}>{decimalValue.substr( decimalValue.length - 3 )}</span></h1>
    )
    
  }


  


  return (

    <GridContainer className={classes.content} justify="center" >
      <GridItem xs={12} sm={12} md={12}>
        <Justfit
          theme="white"
          className={classes.jusfit}
        >
          <GridContainer justify='center' align='center' >

            
            <GridItem align='center' justify='center'>
              <h2 style={{ marginBottom: '40px', marginTop: '20px', fontSize: '35px', fontWeight: 500, color: '#484848' }}>VOCÊ ESCOLHEU O PLANO <strong style={{ fontWeight: '900' }}>{textPlano}</strong></h2>


              {props.plans.map((plan, i) => {     
                console.log("Entered");                 
                // Return the element. Also pass key     

                if(plan.descricao.includes("FIT")){
                  return (
                    <GridItem style={{ marginBottom: '30px' }} xs={12} sm={12} md={10} >
                      <PlanHorizontal theme='dark' plano='FIT+' >
                        <GridContainer align='center' justify='center' style={{ minHeight: '150px' }} onClick={() => { setColor("#D3D3D3"); setTextColor('#CCDA01'); setTextPlano('FIT+'); props.setActivePlan(i) }}>
                          <GridItem xs={12} sm={12} md={1} justify='center' align='left'>
                            <div style={{ width: '20px', height: '20px', backgroundColor: textColor, borderRadius: '100px' }}></div>
                          </GridItem>
                          <GridContainer xs={12} sm={12} md={11} justify='center' align='center' className={classes.fixGridPlan}>
                            <GridItem xs={12} sm={12} md={2} justify='center' align='center'>
                              <img src={planofit} />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} justify='center' align='center'>
                              <h5 className={classes.textDefault}>Matrícula</h5>
                              <h5 className={classes.textDefault}>R$ { formatValue(plan.valorMatricula)}</h5>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4} justify='center' align='center'>
                              <h5 className={classes.textDefault}>Manutenção Anual</h5>
                              <h5 className={classes.textDefault}>R$ { formatValue(plan.valorAnuidade) } em { plan.parcelasAnuidade.length }x de { plan.parcelasAnuidade[0].valorApresentar }</h5>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} justify='center' align='left'>
      
                              <h5 style={{ fontSize: '13px', fontWeight: '700', padding: 0, margin: 0, textDecoration: 'line-through' }}>De R$ { formatValue(plan.valorMensal) }</h5>
                              <h5 style={{ fontSize: '13px', fontWeight: '700', padding: 0, margin: 0, }}>Por R$</h5>
      
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1} style={{ margin: 0, padding: 0, }}>
                              {formatValueDesc(plan.parcelas[0].valor)}                              
                            </GridItem>
      
                          </GridContainer>
                        </GridContainer>
                      </PlanHorizontal>
                    </GridItem>
                  ) 
                } else {
                  return (
                    <GridItem xs={12} sm={12} md={10}>
                      <PlanHorizontal theme='whitePlan' style={{}} plano='FIT+'>
                        <GridContainer align='center' justify='center' style={{ minHeight: '150px' }} onClick={() => { setColor("#CCDA01"); setTextColor('#D3D3D3'); setTextPlano('JUST'); props.setActivePlan(i) }}>
                          <GridItem xs={12} sm={12} md={1} justify='center' align='left'>
                            <div style={{ width: '20px', height: '20px', backgroundColor: color, borderRadius: '100px' }}></div>
                          </GridItem>
                          <GridContainer xs={12} sm={12} md={11} justify='center' align='center' className={classes.fixGridPlan} >
                            <GridItem xs={12} sm={12} md={2} justify='center'>
                              <img src={planojust} />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} justify='center' >
                              <h5 className={classes.textDefault}>Matrícula</h5>
                              <h5 className={classes.textDefault}>R$ { formatValue(plan.valorMatricula)}</h5>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4} justify='center'>
                              <h5 style={{ fontSize: '15px', fontWeight: '500', padding: 0, margin: 0, }}>Manutenção Anual</h5>
                              <h5 className={classes.textDefault}>R$ { formatValue(plan.valorAnuidade) } em { plan.parcelasAnuidade.length }x de { plan.parcelasAnuidade[0].valorApresentar }</h5>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} justify='center' align='left'>

                              <h5 style={{ fontSize: '13px', fontWeight: '700', padding: 0, margin: 0, textDecoration: 'line-through' }} align='left'>De R$ { formatValue(plan.valorMensal) }</h5>
                              <h5 style={{ fontSize: '13px', fontWeight: '700', padding: 0, margin: 0, }}>Por R$</h5>


                            </GridItem>
                            <GridItem xs={12} sm={12} md={1} style={{ margin: 0, padding: 0, }}>
                              {formatValueDesc(plan.parcelas[0].valor)}
                            </GridItem>
                          </GridContainer>
                        </GridContainer>
                      </PlanHorizontal>
                    </GridItem>
                  )

                }

                
              })}


             

              
            </GridItem>


            <GridItem xs={12} sm={12} md={10} style={{ marginTop: '20px', display: 'none' }} align='left'>
              <h4 className={classes.SubtitleText}>Quer complementar seu plano?</h4>
              <GridItem>
                <PlanHorizontal theme='whitePlan' >
                  <GridContainer justify='center'>
                    <GridItem xs={1} sm={1} md={1} align='center' justify='center' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <label className={classes.containerCheckbox}>
                        <input type='checkbox' ></input>
                        <span className={classes.checkmark}  ></span>
                      </label> </GridItem>
                    <GridItem xs={12} sm={12} md={8}>
                      <h5>JUSTFIT PROFISSIONAL ONLINE</h5>
                      <p>Aliquam erat volutpat. Suspendisse purus dui, scelerisque pulvinar nisi at, luctus vestibulum quam.</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1} >
                      <h5 style={{ fontSize: '15px', fontWeight: '700', padding: 0, marginBottom: '-60px' }}>R$</h5>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                      <h5 className={classes.complementValue}>9<span>,90/mês</span></h5>
                    </GridItem>

                  </GridContainer>

                </PlanHorizontal>
              </GridItem>
              <GridItem style={{ marginTop: '30px' }}>
                <PlanHorizontal theme='whitePlan' >
                  <GridContainer justify='center'>
                    <GridItem xs={1} sm={1} md={1} align='center' justify='center' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                      <label className={classes.containerCheckbox}>
                        <input type='checkbox' ></input>
                        <span className={classes.checkmark}  ></span>
                      </label>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8}>
                      <h5>JUSTFIT PROFISSIONAL ONLINE</h5>
                      <p>Aliquam erat volutpat. Suspendisse purus dui, scelerisque pulvinar nisi at, luctus vestibulum quam.</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1} >
                      <h5 style={{ fontSize: '15px', fontWeight: '700', padding: 0, marginBottom: '-60px' }}>R$</h5>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                      <h5 className={classes.complementValue}>9<span>,90/mês</span></h5>
                    </GridItem>
                  </GridContainer>

                </PlanHorizontal>
              </GridItem>
            </GridItem>

          </GridContainer>


        </Justfit>

      </GridItem>
    </GridContainer>



  );
}


