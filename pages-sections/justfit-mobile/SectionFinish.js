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


import nextstep1 from "assets/img/nextstep-1.png";
import nextstep2 from "assets/img/nextstep-2.png";
import nextstep3 from "assets/img/nextstep-3.png";
import nextstep4 from "assets/img/nextstep-4.png";

import planofit from "assets/img/planofit.png";
import mastercard from "assets/img/mastercard.png";


import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit-mobile.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionFinishMobile() {
  const classes = useStyles();

    const dotCheck = <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.43192 10.0652C4.88786 10.6092 4.00508 10.6092 3.46128 10.0652L0.408044 7.01195C-0.136015 6.46816 -0.136015 5.58538 0.408044 5.04158C0.951839 4.49752 1.83462 4.49752 2.37868 5.04158L4.19781 6.86045C4.33514 6.99751 4.55806 6.99751 4.69565 6.86045L9.62132 1.93478C10.1651 1.39072 11.0479 1.39072 11.592 1.93478C11.8532 2.19604 12 2.55052 12 2.91996C12 3.28941 11.8532 3.64389 11.592 3.90515L5.43192 10.0652Z" fill="#CCDA01" /></g><defs><clipPath id="clip0"><rect width="12" height="12" fill="white" /></clipPath></defs></svg>;



  return (

    <GridContainer className={classes.content} justify="center"  >
      <GridItem xs={12} sm={12} md={12}>
        <Justfit
          theme="white"
          className={classes.jusfit}
        >
          <GridContainer justify='center' align='center' >
            <GridItem xs={12} sm={12} md={10}>
              <h2 style={{ marginBottom: '40px', marginTop: '20px', fontSize: '25px', fontWeight: '600', color: '#787878' }}>SEJA <strong style={{ fontWeight: '900', color: '#484848', }}>BEM VINDO(A)</strong> À JUSTFIT, <strong style={{ fontWeight: '900', color: '#484848' }}>JOSÉ</strong> </h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <h5 style={{ fontSize: '15px', fontWeight: '900', padding: 0, margin: 0, color: '#484848', marginBottom: '10px' }}>PRÓXIMOS PASSOS</h5>

            </GridItem>
            <GridContainer xs={12} sm={12} md={12} justify='center' align='left'>
              <GridItem style={{ margin: '5px' }} xs={12} sm={12} md={3}><img src={nextstep1} /></GridItem>
              <GridItem style={{ margin: '5px' }} xs={12} sm={12} md={3}><img src={nextstep2} /></GridItem>
              <GridItem style={{ margin: '5px' }} xs={12} sm={12} md={3}><img src={nextstep3} /></GridItem>
              <GridItem style={{ margin: '5px' }} xs={12} sm={12} md={3}><img src={nextstep4} /></GridItem>
            </GridContainer>
            <GridItem xs={12} sm={12} md={12} align='left'>
              <h1 style={{ marginBottom: '10px', marginTop: '50px', fontSize: '15px', fontWeight: '600', color: '#AFAFAF' }}>RESUMO DO SEU CADASTRO</h1>
            </GridItem>
            <GridItem xs={12} sm={12} md={7} style={{ marginBottom: '30px', height: '100%' }}  >
              <GridItem style={{ marginBottom: '10px', height: '100%', }}>
                <GridContainer style={{ height: '100%', backgroundColor: '#484848', display: 'flex', display: 1, borderRadius: 20, padding: 20, }}>
                  <GridItem xs={12} sm={12} md={1} justify='center' align='left'>
                    <div style={{ width: '15px', height: '15px', backgroundColor: '#CCDA01', borderRadius: '100px' }}></div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} justify='center' align='center' style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <svg width="104" height="79" viewBox="0 0 104 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M87.9803 53H92.8763L94.4243 45.008H101.804L102.704 40.328H95.3243L96.8723 32.3H91.9763L90.4283 40.328H83.0483L82.1483 45.008H89.5283L87.9803 53Z" fill="white" />
                      <path d="M3.456 11H4.644L5.256 7.868H7.296C7.728 7.868 8.16 7.784 8.556 7.616C9.624 7.148 10.404 6.044 10.404 4.688C10.404 3.836 10.008 3.152 9.336 2.804C8.976 2.612 8.532 2.528 8.016 2.528H5.112L3.456 11ZM5.448 6.836L6.096 3.56H7.812C8.688 3.56 9.18 4.004 9.18 4.772C9.18 5.66 8.724 6.332 8.076 6.644C7.812 6.776 7.5 6.836 7.176 6.836H5.448ZM10.7568 11H15.7248L15.9408 9.968H12.1488L13.6008 2.528H12.4128L10.7568 11ZM17.4773 11L18.7973 8.564H21.9893L22.3613 11H23.5493L22.1693 2.528H20.8493L16.2052 11H17.4773ZM19.2893 7.58L20.7533 4.892C20.9813 4.46 21.3053 3.692 21.3053 3.692H21.3293C21.3293 3.692 21.3893 4.46 21.4493 4.892L21.8693 7.58H19.2893ZM24.749 11H25.925L26.993 5.504C27.089 5.024 27.149 4.268 27.149 4.268H27.173C27.173 4.268 27.413 5.036 27.641 5.504L30.353 11H31.445L33.101 2.528H31.913L30.845 8.036C30.749 8.504 30.689 9.26 30.689 9.26H30.665C30.665 9.26 30.425 8.48 30.209 8.036L27.497 2.528H26.405L24.749 11ZM33.929 7.448C33.929 9.596 35.429 11.144 37.697 11.144C40.253 11.144 42.761 8.78 42.761 5.984C42.761 3.884 41.249 2.384 38.981 2.384C36.401 2.384 33.929 4.7 33.929 7.448ZM35.141 7.4C35.141 5.228 37.037 3.476 38.969 3.476C40.481 3.476 41.537 4.532 41.537 6.044C41.537 8.252 39.605 10.052 37.709 10.052C36.197 10.052 35.141 8.96 35.141 7.4Z" fill="white" />
                      <path d="M1.728 62H12.864L16.192 45.04H30.144L31.936 35.44H18.048L19.904 25.84H36.736L38.528 16.24H10.56L1.728 62ZM42.93 24.88H53.746L55.41 16.24H44.594L42.93 24.88ZM35.634 62H46.642L53.042 29.04H41.97L35.634 62ZM58.4055 51.76C58.4055 59.376 64.4855 62.32 71.7175 62.32C72.9975 62.32 74.6615 62.128 74.6615 62.128L76.5175 52.528C76.5175 52.528 75.7495 52.592 74.7895 52.592C72.3575 52.592 69.9255 52.08 69.9255 49.392C69.9255 49.072 69.9895 48.24 70.1175 47.664L71.9095 38.256H78.8855L80.5495 29.616H73.5735L75.4295 20.144H64.8055L62.9495 29.616H58.4055L56.7415 38.256H60.9015L58.7255 49.2C58.5335 50.096 58.4055 50.992 58.4055 51.76Z" fill="#CCDA01" />
                    </svg>

                  </GridItem>
                  <GridItem xs={12} sm={12} md={8} justify='center' align='left' style={{ padding: '10px', paddingRight: 0 }}  >
                    <h1 style={{ margin: 0, padding: 0, fontSize: '13px', fontWeight: '900', color: '#FFF' }}>Beneficios</h1>
                    <ul style={{ color: '#FFF', fontSize: '11px', fontWeight: '600', listStyleType: 'none' }}>
                      <li style={{ marginTop: '10px' }}><span style={{ color: '#CCDA01', fontSize: '12px', marginRight: 5, }}>{dotCheck} </span>Prescrição de treino</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px', marginRight: 5, }}>{dotCheck}  </span>Orientação de treino cardiovascular</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px', marginRight: 5, }}>{dotCheck} </span>Comparação de medidas e resultados</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px', marginRight: 5, }}>{dotCheck}  </span>Treino coletivo em atividades especificas</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px', marginRight: 5, }}>{dotCheck}  </span>Poltrona de massagem**</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px', marginRight: 5, }}>{dotCheck}  </span>Direito a levar 5 convidados para treinar**</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px', marginRight: 5, }}>{dotCheck}  </span>Acesso ao Wi-Fi</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px', marginRight: 5, }}>{dotCheck}  </span>Acompanhamento mensal de nível de gordura e idade corporal</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px', marginRight: 5, }}>{dotCheck}  </span>FIT Férias</li>
                    </ul>
                  </GridItem>
                </GridContainer >
              </GridItem>
              <GridItem style={{ marginBottom: '30px' }}>
                <GridContainer style={{ display: 'flex', flex: 1, height: '100%', border: '2px solid #D8D8D8', padding: 20, borderRadius: 20 }}>
                  <GridItem xs={1} sm={1} md={1} align='center' justify='center' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <label className={classes.containerCheckbox}>
                      <input type='checkbox' checked></input>
                      <span className={classes.checkmark}  ></span>
                    </label>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={11} style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                    <h5 style={{ color: '#484848', fontSize: '13px', margin: 0, padding: 0, fontWeight: 600, textAlign: 'left' }}>JUSTFIT <strong style={{ fontWeight: 800 }}>PROFISSIONAL ONLINE</strong></h5>
                    <p style={{ color: '#484848', fontSize: '12px', margin: 0, padding: 0, textAlign: 'left', marginLeft: 5 }}>Aliquam erat volutpat. Suspendisse purus dui, scelerisque pulvinar nisi at, luctus vestibulum quam.</p>
                  </GridItem>
                </GridContainer>
                </GridItem>

              </GridItem>


                  <GridItem xs={12} sm={12} md={5} style={{ marginBottom: '30px' }}>

              <GridContainer style={{ height: '100%', backgroundColor: '#484848', display: 'flex', display: 1, borderRadius: 20, padding: 30, }}>

                <GridItem xs={12} sm={12} md={12} align='center'>
                  <GridItem align='left'>
                    <h1 style={{ margin: 0, padding: 0, fontSize: '20px', fontWeight: '400', color: '#E3E3E3' }}>VÁ ATÉ A <strong>UNIDADE BARRETOS</strong> COM:</h1>
                  </GridItem>
                  <GridItem align='left' >
                    <ul style={{ color: '#E3E3E3', fontSize: '12px', fontWeight: '400', listStyleType: 'none', marginTop: '20px' }}>
                      <li style={{ marginTop: '10px' }}><span style={{ color: '#CCDA01', fontSize: '13px' }}>• </span>Número da Matrícula</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px' }}>• </span>Seu cartão </li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px' }}>• </span>Atestado médico ou questionário de apetidão física</li>
                      <li><span style={{ color: '#CCDA01', fontSize: '13px' }}>• </span>Documento com foto</li>

                    </ul>
                  </GridItem>
                  <GridItem align='left' style={{ marginTop: '40px' }}>
                    <h1 style={{ margin: 0, padding: 0, fontSize: '13px', fontWeight: '700', color: '#FFF' }} >PROMOÇÕES</h1>
                    <h3 style={{ color: '#E3E3E3', fontSize: '12px', fontWeight: '400', listStyleType: 'none', marginTop: '5px', padding: 0, }}>ANUIDADEZERO | <strong>R$ 0,00</strong></h3>
                  </GridItem>
                  <GridItem align='left' style={{ marginTop: '40px' }}>
                    <h1 style={{ margin: 0, padding: 0, fontSize: '13px', fontWeight: '700', color: '#FFF' }} >PAGAMENTO COM CARTÃO DE CRÉDITO</h1>
                    <GridContainer style={{ marginTop: '5px' }}>
                      <GridItem xs={12} sm={12} md={2}>
                        <img src={mastercard} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <h3 style={{ color: '#E3E3E3', fontSize: '12px', fontWeight: '400', listStyleType: 'none', margin: 0, padding: 0, }}>JOSÉ EXEMPLO EXEMPLAR </h3>
                        <h3 style={{ color: '#E3E3E3', fontSize: '12px', fontWeight: '400', listStyleType: 'none', margin: 0, padding: 0, }}>CARTÃO XXXX XXXX XXXX 5859</h3>
                      </GridItem>

                    </GridContainer>
                  </GridItem>

                </GridItem>

              </GridContainer>


            </GridItem>

          </GridContainer>


        </Justfit>

      </GridItem>
    </GridContainer>



  );
}
