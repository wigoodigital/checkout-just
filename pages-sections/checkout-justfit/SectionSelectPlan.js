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

import planojust from "assets/img/planojust.png";
import planofit from "assets/img/planofit.png";

import fitplanwhite from "assets/img/fitplan-white.png";
import justplanwhite from "assets/img/justplan-white.png";

import checkedIcon from "assets/img/checked.png";
import uncheckIcon from "assets/img/uncheck.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionSelectPlans() {
  const classes = useStyles();
  return (
      
      <GridContainer className={classes.content} justify="center" >        
        <GridItem xs={12} sm={12} md={12}>
          <Justfit
            theme="white"
            className={classes.jusfit}
          >
           <GridContainer justify='center' align='center' >
           <GridItem align='center' justify='center'>
           <h2 style={{marginBottom:'40px', marginTop:'20px', fontSize: '35px', fontWeight:500,color:'#484848'}}>ESCOLHA SEU PLANO</h2>
             </GridItem>
               <GridItem xs={12} sm={12} md={4}>
               <div className={classes.planoDark}>
               
                 <img style={{width:'80px',marginBottom:'20px',marginTop:'30px'}}  src={planofit} /> 
                 <div style={{display:'flex',flexDirection:'row',margin:'10px'}}>
                  <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',flex:1,}}>
                <h3 style={{fontSize:'10px',fontWeight:500,textDecoration:'line-through',margin:0,padding:0,}}>De R$ 89,90</h3>
                  <h3 style={{fontSize:'10px',fontWeight:500,margin:0,padding:0,}}>Por R$</h3>
                  </div>
                  <h1 style={{fontSize:'50px',fontWeight:550,margin:0,padding:0,}}>39<span style={{fontSize:'25px'}}>,90</span></h1>
                  </div> 

                   <div style={{textAlign:'left',position:'relative',right:50,marginBottom:'10px'}}>
                   <h5 style={{margin:0,padding:0,}} >Matrícula</h5>
                <strong style={{margin:0,padding:0,}}>R$ 39,90</strong>
                </div>
                <div style={{textAlign:'left',marginBottom:'10px'}}>
                <h5 style={{margin:0,padding:0,}}>Manutenção Anual</h5>
                <strong style={{margin:0,padding:0,}}>R$ 149,90 em 5x de R$ 29,98</strong> 
                </div>             
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'10px',marginBottom:'30px'}}>
                  <button className={classes.btnEscolherWhite}>ESCOLHER</button>
                  </div>
       
              </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                   <div className={classes.planoWhite}>
                    
                   <img style={{width:'125px',marginBottom:'20px',marginTop:'30px'}} src={planojust} /> 
                   <div style={{display:'flex',flexDirection:'row',margin:'10px'}}>
                  <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',flex:1,}}>
                <h3 style={{fontSize:'10px',fontWeight:500,textDecoration:'line-through',margin:0,padding:0,}}>De R$ 79,90</h3>
                  <h3 style={{fontSize:'10px',fontWeight:500,margin:0,padding:0,}}>Por R$</h3>
                  </div>
                  <h1 style={{fontSize:'50px',fontWeight:550,margin:0,padding:0,}}>39<span style={{fontSize:'25px'}}>,90</span></h1>
                  </div> 

                   <div style={{textAlign:'left',position:'relative',right:50,marginBottom:'10px'}}>
                   <h5 style={{margin:0,padding:0,}} >Matrícula</h5>
                <strong style={{margin:0,padding:0,}}>R$ 39,90</strong>
                </div>
                <div style={{textAlign:'left',marginBottom:'10px'}}>
                <h5 style={{margin:0,padding:0,}}>Manutenção Anual</h5>
                <strong style={{margin:0,padding:0,}}>R$ 149,90 em 5x de R$ 29,98</strong> 
                </div>             
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'10px',marginBottom:'30px'}}>
                  <button className={classes.btnEscolher}>ESCOLHER</button>
                  </div>

                   </div>
                   </GridItem>
                   <GridItem xs={12} sm={12} md={8} align='left'>
                     <h2 style={{fontSize:'15px',color:'#484848',fontWeight:600}}>Compare os planos e veja o melhor benefício para você:</h2>
                   </GridItem>
                   <GridItem  xs={12} sm={12} md={8}>
                     <div className={classes.beneficiosArea}>
                      <GridContainer xs={6} sm={6} md={6} style={{marginLeft:'20px',marginTop:'40px',marginBottom:'40px'}}>
                        <GridItem className={classes.TextContentBenefit} style={{marginBottom:'30px'}} >
                        <h1>Beneficios</h1>
                        </GridItem>
                        <GridItem className={classes.TextContentBenefit} >
                        <h5>Prescrição de treino</h5>
                        </GridItem>
                        <GridItem className={classes.TextContentBenefit} >
                        <h5>Orientação de treino cardiovascular</h5>
                        </GridItem>
                        <GridItem className={classes.TextContentBenefit}>
                        <h5>Comparação de medidas e resultados</h5>
                        </GridItem>
                        <GridItem className={classes.TextContentBenefit}>
                        <h5>Treino coletivo em atividades especificas</h5>
                        </GridItem>
                        <GridItem className={classes.TextContentBenefit}>
                        <h5>Poltrona de massagem**</h5>
                        </GridItem >
                        <GridItem className={classes.TextContentBenefit}>
                        <h5>Direito a levar 5 convidados para treinar**</h5>
                        </GridItem>
                        <GridItem className={classes.TextContentBenefit}>
                         <h5>Acesso ao Wi-Fi</h5>
                        </GridItem>
                        <GridItem className={classes.TextContentBenefit}>
                        <h5>Acompanhamento mensal de nível de gordura e idade corporal</h5>
                        </GridItem>
                        <GridItem className={classes.TextContentBenefit}>
                        <h5>FIT Férias</h5>
                        </GridItem>

                      </GridContainer>
                      <GridContainer xs={6} sm={6} md={6} style={{marginLeft:'0px',}}>
                        <GridItem  xs={6} sm={6} md={6} style={{backgroundColor:'#484848',borderRight:'1px solid white',}}>
                           <img src={fitplanwhite} style={{marginTop:'50px',marginBottom:'30px'}} />
                           <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} /></GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                        </GridItem>

                        <GridItem  xs={6} sm={6} md={6} style={{backgroundColor:'#484848',borderTopRightRadius:'20px',borderBottomRightRadius:'20px'}}>
                        <img src={justplanwhite} style={{marginTop:'50px',marginBottom:'30px'}} />
                      
                        <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} /></GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                             <GridItem>
                             <img src={checkedIcon} />
                             </GridItem>
                        <GridItem>
                        <img src={uncheckIcon} />
                        </GridItem>
                        <GridItem>
                        <img src={uncheckIcon} />
                        </GridItem>
                        <GridItem>
                        <img src={uncheckIcon} />
                        </GridItem>
                        <GridItem>
                        <img src={uncheckIcon} />
                        </GridItem>
                        <GridItem>
                        <img src={uncheckIcon} />
                        </GridItem>

                        </GridItem>
                      </GridContainer>
                     </div>

                   </GridItem>
           </GridContainer>
 
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
