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

import TagManager from 'react-gtm-module';

import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";


function dataAtualFormatada(){
  var data = new Date(),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
}

const formatValueParcela = (value) => {
  let returnValue =  new String(value).replace(",", ".")
  let returnDecimal = parseFloat(returnValue).toFixed(2);      
  return  parseFloat(returnDecimal);    
}

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
      <h1 style={{ margin: 0, padding: 0, position: 'relative', right: '90%', top: '10px', fontWeight: 700, fontSize: '50px' }} className={ classes.priceNew }>{decimalValue.substr( 0, decimalValue.length - 3 )}<span style={{ fontSize: '25px' }}>{decimalValue.substr( decimalValue.length - 3 )}</span></h1>
    )
    
  }

  React.useEffect(() => {
      

    if(props.plans[props.activePlan].descricao.includes("FIT")){
      setColor("#D3D3D3"); 
      setTextColor('#CCDA01'); 
      setTextPlano('FIT+'); 

    } else {
      setColor("#CCDA01"); 
      setTextColor('#D3D3D3'); 
      setTextPlano('JUST');
    }

  }, [props.activePlan]);

  React.useEffect( () => {

    let priceTransaction = parseFloat( formatValueParcela(props.plans[props.activePlan].parcelas[0].valor) +  props.plans[props.activePlan].valorMatricula );

    TagManager.dataLayer({
      dataLayer: {
        'event': 'addPlan',        
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 1
            },
            "products": [
              {
                  'id': props.plans[props.activePlan].codigoPlano,   
                  'name': props.plans[props.activePlan].descricao.includes("FIT") ? "Plano Fit Plus " + props.activeUnidade : "Plano Just " + props.activeUnidade,
                  'sku': props.dataSale.customer.companyBranchId,
                  'category': props.plans[props.activePlan].descricao.includes("FIT") ? "Plano Fit Plus" : "Plano Just",
                  'price': priceTransaction,
                  'quantity': '1',
                  'currency': 'BRL'
              }
            ]
          }
        },
        'plano': {
          "codigo": props.plans[props.activePlan].codigoPlano,
          "nome": props.plans[props.activePlan].descricao.includes("FIT") ? "Plano Fit Plus" : "Plano Just",
          "preco-mat": props.plans[props.activePlan].valorMatricula,
          "preco-pp": formatValueParcela(props.plans[props.activePlan].parcelas[0].valor),				
          "preco-anuidade": props.plans[props.activePlan].valorAnuidade,
          "data-matricula": dataAtualFormatada()
        },
        'unidade': {
          "id": props.dataSale.customer.companyBranchId,
          "title": props.activeUnidade,          
        }
      },          
    })


  }, []);

  


  return (

    <GridContainer className={classes.content} justify="center" >
      <GridItem xs={12} sm={12} md={12}>
        <Justfit
          theme="white"
          className={classes.jusfit}
        >
          <GridContainer justify='center' align='center' >

            {
              props.isMobile && (
                <>
                  <GridItem align='left' justify='center' xs={6} sm={6} md={8}>
                    <h2 style={{ fontSize: '15px', fontWeight: 600, color: '#484848', minWidth: '160px' }}>VOCÊ ESCOLHEU O PLANO <strong style={{ fontWeight: '900' }}>{textPlano}</strong></h2>
                    <p style={{ minWidth: '160px', color: '#484848', fontWeight: 500, fontSize: '12px' }}>UNIDADE <strong>{props.activeUnidade}</strong></p>
                  </GridItem>
                  <GridItem className={classes.stepMobile} xs={6} sm={6} md={4} align='right'>
                    <img src={stepMobile1} />
                  </GridItem>
                </>

              )
            }
            

            
            <GridItem align='center' justify='center'>
              <h2 style={{ marginTop: '20px', fontSize: '35px', fontWeight: 500, color: '#484848', display: props.isMobile && "none" }}>VOCÊ ESCOLHEU O PLANO <strong style={{ fontWeight: '900' }}>{textPlano}</strong></h2>


              {props.plans.map((plan, i) => {     
                
                if(plan.descricao.includes("FIT")){
                  return (
                    <GridItem style={{ marginTop: '40px', marginBottom: '30px' }} xs={12} sm={12} md={10} >
                      <PlanHorizontal theme='dark' plano='FIT+' >
                        <GridContainer align='center' justify='center' style={{ minHeight: '150px' }} onClick={() => { setColor("#D3D3D3"); setTextColor('#CCDA01'); setTextPlano('FIT+'); props.setActivePlan(i) }}>
                          <GridItem xs={12} sm={12} md={1} justify='center' align='left' style={{ position: 'absolute', left: 0 }}>
                            <div style={{ width: '20px', height: '20px', backgroundColor: textColor, borderRadius: '100px' }}></div>
                          </GridItem>
                          <GridContainer xs={12} sm={12} md={11} justify='center' align='center' className={classes.fixGridPlan}>
                            <GridItem xs={12} sm={12} md={2} justify='center' align='center'>
                              {/* <img src={planofit} className={classes.imgPlano} /> */}
                              <svg style={{ width: "100%", maxHeight: "60px" }} width="104" height="79" viewBox="0 0 104 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M87.9803 53H92.8763L94.4243 45.008H101.804L102.704 40.328H95.3243L96.8723 32.3H91.9763L90.4283 40.328H83.0483L82.1483 45.008H89.5283L87.9803 53Z" fill="white" />
                                <path d="M3.456 11H4.644L5.256 7.868H7.296C7.728 7.868 8.16 7.784 8.556 7.616C9.624 7.148 10.404 6.044 10.404 4.688C10.404 3.836 10.008 3.152 9.336 2.804C8.976 2.612 8.532 2.528 8.016 2.528H5.112L3.456 11ZM5.448 6.836L6.096 3.56H7.812C8.688 3.56 9.18 4.004 9.18 4.772C9.18 5.66 8.724 6.332 8.076 6.644C7.812 6.776 7.5 6.836 7.176 6.836H5.448ZM10.7568 11H15.7248L15.9408 9.968H12.1488L13.6008 2.528H12.4128L10.7568 11ZM17.4773 11L18.7973 8.564H21.9893L22.3613 11H23.5493L22.1693 2.528H20.8493L16.2052 11H17.4773ZM19.2893 7.58L20.7533 4.892C20.9813 4.46 21.3053 3.692 21.3053 3.692H21.3293C21.3293 3.692 21.3893 4.46 21.4493 4.892L21.8693 7.58H19.2893ZM24.749 11H25.925L26.993 5.504C27.089 5.024 27.149 4.268 27.149 4.268H27.173C27.173 4.268 27.413 5.036 27.641 5.504L30.353 11H31.445L33.101 2.528H31.913L30.845 8.036C30.749 8.504 30.689 9.26 30.689 9.26H30.665C30.665 9.26 30.425 8.48 30.209 8.036L27.497 2.528H26.405L24.749 11ZM33.929 7.448C33.929 9.596 35.429 11.144 37.697 11.144C40.253 11.144 42.761 8.78 42.761 5.984C42.761 3.884 41.249 2.384 38.981 2.384C36.401 2.384 33.929 4.7 33.929 7.448ZM35.141 7.4C35.141 5.228 37.037 3.476 38.969 3.476C40.481 3.476 41.537 4.532 41.537 6.044C41.537 8.252 39.605 10.052 37.709 10.052C36.197 10.052 35.141 8.96 35.141 7.4Z" fill="white" />
                                <path d="M1.728 62H12.864L16.192 45.04H30.144L31.936 35.44H18.048L19.904 25.84H36.736L38.528 16.24H10.56L1.728 62ZM42.93 24.88H53.746L55.41 16.24H44.594L42.93 24.88ZM35.634 62H46.642L53.042 29.04H41.97L35.634 62ZM58.4055 51.76C58.4055 59.376 64.4855 62.32 71.7175 62.32C72.9975 62.32 74.6615 62.128 74.6615 62.128L76.5175 52.528C76.5175 52.528 75.7495 52.592 74.7895 52.592C72.3575 52.592 69.9255 52.08 69.9255 49.392C69.9255 49.072 69.9895 48.24 70.1175 47.664L71.9095 38.256H78.8855L80.5495 29.616H73.5735L75.4295 20.144H64.8055L62.9495 29.616H58.4055L56.7415 38.256H60.9015L58.7255 49.2C58.5335 50.096 58.4055 50.992 58.4055 51.76Z" fill="#CCDA01" />
                              </svg>
                            </GridItem>
                            <GridItem className={ classes.itemPricePlan } xs={12} sm={12} md={2} justify='center' align='center'>
                              <h5 className={classes.textDefault}>Matrícula</h5>
                              <h5 className={classes.textDefault}>R$ { formatValue(plan.valorMatricula)}</h5>
                            </GridItem>
                            <GridItem className={ classes.itemPricePlan } xs={12} sm={12} md={3} justify='center' align='center'>
                              <h5 className={classes.textDefault}>Manutenção Anual</h5>
                              <h5 className={classes.textDefault}>R$ { formatValue(plan.valorAnuidade) }  em <br/> { plan.parcelasAnuidade.length }x de { plan.parcelasAnuidade[0].valorApresentar }</h5>
                            </GridItem>
                            <GridItem className={ classes.itemPricePlan } xs={12} sm={12} md={2} justify='center' align='center'>
                              <h5 className={classes.textDefault}>Fidelidade</h5>
                              <h5 className={classes.textDefault}>12 meses</h5>
                            </GridItem>
                            <GridItem className={ classes.priceOld } xs={12} sm={12} md={2} justify='center' align='left'>
      
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
                          <GridItem xs={12} sm={12} md={1} justify='center' align='left' style={{ position: 'absolute', left: 0 }}>
                            <div style={{ width: '20px', height: '20px', backgroundColor: color, borderRadius: '100px' }}></div>
                          </GridItem>
                          <GridContainer xs={12} sm={12} md={11} justify='center' align='center' className={classes.fixGridPlan} >
                            <GridItem xs={12} sm={12} md={2} justify='center'>
                              {/* <img src={planojust} className={classes.imgPlano} /> */}
                              <svg style={{ width: "100%", maxHeight: "60px" }} width="128" height="63" viewBox="0 0 128 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.625 22.39L27.005 48.68C26.2717 52.75 24.5667 55.885 21.89 58.085C19.2133 60.285 15.9317 61.385 12.045 61.385C8.525 61.385 5.73833 60.505 3.685 58.745C1.66833 56.985 0.66 54.455 0.66 51.155C0.66 50.0183 0.751667 48.9917 0.935 48.075H10.285C10.175 48.6617 10.12 49.1933 10.12 49.67C10.12 50.77 10.395 51.595 10.945 52.145C11.495 52.695 12.265 52.97 13.255 52.97C14.3917 52.97 15.3267 52.6217 16.06 51.925C16.83 51.1917 17.3433 50.11 17.6 48.68L22.22 22.39H31.625ZM68.0969 30.31L62.7069 61H53.3019L54.0169 56.82C52.8069 58.1767 51.3219 59.2767 49.5619 60.12C47.8385 60.9267 45.9869 61.33 44.0069 61.33C40.9269 61.33 38.5069 60.4683 36.7469 58.745C34.9869 56.985 34.1069 54.5467 34.1069 51.43C34.1069 50.2567 34.1985 49.1933 34.3819 48.24L37.5719 30.31H46.9219L44.0069 46.975C43.8969 47.5617 43.8419 48.13 43.8419 48.68C43.8419 50.22 44.2635 51.4117 45.1069 52.255C45.9869 53.0617 47.1969 53.465 48.7369 53.465C50.4969 53.465 51.9819 52.9517 53.1919 51.925C54.4385 50.8617 55.2635 49.3583 55.6669 47.415L58.6919 30.31H68.0969ZM82.2224 61.44C79.8024 61.44 77.6208 61.055 75.6774 60.285C73.7708 59.515 72.2674 58.4517 71.1674 57.095C70.0674 55.7017 69.5174 54.1067 69.5174 52.31C69.5174 52.0533 69.5541 51.595 69.6274 50.935H78.7024C78.6291 52.0717 78.9591 52.9883 79.6924 53.685C80.4624 54.345 81.5441 54.675 82.9374 54.675C84.1108 54.675 85.0824 54.455 85.8524 54.015C86.6224 53.575 87.0074 52.9517 87.0074 52.145C87.0074 51.375 86.5858 50.77 85.7424 50.33C84.9358 49.8533 83.5791 49.285 81.6724 48.625C79.6924 47.965 78.0241 47.3233 76.6674 46.7C75.3474 46.04 74.2108 45.105 73.2574 43.895C72.3041 42.685 71.8274 41.1633 71.8274 39.33C71.8274 37.5333 72.3591 35.92 73.4224 34.49C74.4858 33.0233 75.9708 31.8867 77.8774 31.08C79.8208 30.2733 82.0574 29.87 84.5874 29.87C87.1174 29.87 89.3174 30.2917 91.1874 31.135C93.0574 31.9417 94.5058 33.0783 95.5324 34.545C96.5591 36.0117 97.0724 37.6617 97.0724 39.495L97.0174 40.32H88.4924C88.5658 39.22 88.2358 38.34 87.5024 37.68C86.7691 37.02 85.7241 36.69 84.3674 36.69C83.3041 36.69 82.4241 36.91 81.7274 37.35C81.0674 37.79 80.7374 38.395 80.7374 39.165C80.7374 39.9717 81.1774 40.65 82.0574 41.2C82.9741 41.7133 84.3858 42.3 86.2924 42.96C88.2724 43.62 89.9041 44.28 91.1874 44.94C92.5074 45.5633 93.6258 46.4617 94.5424 47.635C95.4958 48.7717 95.9724 50.2017 95.9724 51.925C95.9724 53.905 95.3674 55.61 94.1574 57.04C92.9841 58.47 91.3524 59.57 89.2624 60.34C87.2091 61.0733 84.8624 61.44 82.2224 61.44ZM112.891 50.44C112.855 50.6233 112.836 50.8617 112.836 51.155C112.836 51.815 113.02 52.2917 113.386 52.585C113.79 52.8783 114.431 53.025 115.311 53.025H118.666L117.236 61H112.451C106.291 61 103.211 58.415 103.211 53.245C103.211 52.475 103.303 51.5033 103.486 50.33L105.686 38.12H101.946L103.321 30.31H107.061L108.381 22.83H117.786L116.466 30.31H122.626L121.251 38.12H115.091L112.891 50.44Z" fill="#484848"/>
                                <path d="M4.38 17H5.37L5.88 14.39H7.58C7.94 14.39 8.3 14.32 8.63 14.18C9.52 13.79 10.17 12.87 10.17 11.74C10.17 11.03 9.84 10.46 9.28 10.17C8.98 10.01 8.61 9.94 8.18 9.94H5.76L4.38 17ZM6.04 13.53L6.58 10.8H8.01C8.74 10.8 9.15 11.17 9.15 11.81C9.15 12.55 8.77 13.11 8.23 13.37C8.01 13.48 7.75 13.53 7.48 13.53H6.04ZM10.464 17H14.604L14.784 16.14H11.624L12.834 9.94H11.844L10.464 17ZM16.0644 17L17.1644 14.97H19.8244L20.1344 17H21.1244L19.9744 9.94H18.8744L15.0044 17H16.0644ZM17.5744 14.15L18.7944 11.91C18.9844 11.55 19.2544 10.91 19.2544 10.91H19.2744C19.2744 10.91 19.3244 11.55 19.3744 11.91L19.7244 14.15H17.5744ZM22.1241 17H23.1041L23.9941 12.42C24.0741 12.02 24.1241 11.39 24.1241 11.39H24.1441C24.1441 11.39 24.3441 12.03 24.5341 12.42L26.7941 17H27.7041L29.0841 9.94H28.0941L27.2041 14.53C27.1241 14.92 27.0741 15.55 27.0741 15.55H27.0541C27.0541 15.55 26.8541 14.9 26.6741 14.53L24.4141 9.94H23.5041L22.1241 17ZM29.7741 14.04C29.7741 15.83 31.0241 17.12 32.9141 17.12C35.0441 17.12 37.1341 15.15 37.1341 12.82C37.1341 11.07 35.8741 9.82 33.9841 9.82C31.8341 9.82 29.7741 11.75 29.7741 14.04ZM30.7841 14C30.7841 12.19 32.3641 10.73 33.9741 10.73C35.2341 10.73 36.1141 11.61 36.1141 12.87C36.1141 14.71 34.5041 16.21 32.9241 16.21C31.6641 16.21 30.7841 15.3 30.7841 14Z" fill="#484848"/>
                              </svg>
                            </GridItem>
                            <GridItem className={ classes.itemPricePlan } xs={12} sm={12} md={2} justify='center' >
                              <h5 className={classes.textDefault}>Matrícula</h5>
                              <h5 className={classes.textDefault}>R$ { formatValue(plan.valorMatricula)}</h5>
                            </GridItem>
                            <GridItem className={ classes.itemPricePlan } xs={12} sm={12} md={3} justify='center'>
                              <h5 style={{ fontSize: '15px', fontWeight: '500', padding: 0, margin: 0, }}>Manutenção Anual</h5>
                              <h5 className={classes.textDefault}>R$ { formatValue(plan.valorAnuidade) } em <br/>{ plan.parcelasAnuidade.length }x de { plan.parcelasAnuidade[0].valorApresentar }</h5>
                            </GridItem>
                            <GridItem className={ classes.itemPricePlan } xs={12} sm={12} md={2} justify='center' align='center'>
                              <h5 className={classes.textDefault}>Fidelidade</h5>
                              <h5 className={classes.textDefault}>Não possui</h5>
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


