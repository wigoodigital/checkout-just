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


import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionFinish() {
  const classes = useStyles();

  return (
      
      <GridContainer className={classes.content} justify="center"  >        
        <GridItem xs={12} sm={12} md={12}>
          <Justfit
            theme="white"
            className={classes.jusfit}
          >
           <GridContainer justify='center' align='center' >
           <GridItem xs={12} sm={12} md={10}>
           <h2 style={{marginBottom:'40px', marginTop:'20px', fontSize: '35px', fontWeight:'400',color:'#787878'}}>SEJA <strong style={{fontWeight:'700',color:'#484848',}}>BEM VINDO(A)</strong> À JUSTFIT, <strong style={{fontWeight:'900',color:'#484848'}}>JOSÉ</strong> </h2>
           </GridItem>
              <GridItem xs={12} sm={12} md={10}>
              <h5 style={{fontSize:'15px',fontWeight:'900',padding:0, margin:0,color:'#484848',marginBottom:'10px'}}>PRÓXIMOS PASSOS</h5>
             
           </GridItem>
           <GridContainer xs={12} sm={12} md={12} justify='center' align='center'>
           <GridItem xs={12} sm={12} md={3}><img src={nextstep1} /></GridItem>
           <GridItem xs={12} sm={12} md={3}><img src={nextstep2} /></GridItem>
           <GridItem xs={12} sm={12} md={3}><img src={nextstep3} /></GridItem>
           <GridItem xs={12} sm={12} md={3}><img src={nextstep4} /></GridItem>
           </GridContainer>
           <GridItem xs={12} sm={12} md={12} align='left'>
               <h1 style={{marginBottom:'10px', marginTop:'50px', fontSize: '15px', fontWeight:'600',color:'#AFAFAF'}}>RESUMO DO SEU CADASTRO</h1>
           </GridItem>
               <GridItem xs={12} sm={12} md={7}  >
               <GridItem style={{marginBottom:'30px'}}>
                   <PlanHorizontal theme='dark'>
                       <GridContainer>
                   <GridItem xs={12} sm={12} md={1} justify='center' align='left'>
                  <div style={{width:'15px', height:'15px', backgroundColor:'#CCDA01', borderRadius:'100px'}}></div>
                 </GridItem> 
                   <GridItem xs={12} sm={12} md={3} justify='center' align='center'>
                 <img src={planofit} /> 
                 </GridItem>
                 <GridItem xs={12} sm={12} md={8} justify='center' align='left'  >
                 <h1 style={{margin:0,padding:0,fontSize: '13px', fontWeight:'900',color:'#FFF'}}>Beneficios</h1>
                 <ul style={{color:'#FFF',fontSize:'12px',fontWeight:'600',listStyleType:'none'}}>
                           <li style={{marginTop:'10px'}}><span style={{color:'#CCDA01',fontSize:'12px'}}>• </span>Prescrição de treino</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Orientação de treino cardiovascular</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Comparação de medidas e resultados</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Treino coletivo em atividades especificas</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Poltrona de massagem**</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Direito a levar 5 convidados para treinar**</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Acesso ao Wi-Fi</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Acompanhamento mensal de nível de gordura e idade corporal</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>FIT Férias</li>
                       </ul>
                 </GridItem>
                 </GridContainer >
                   </PlanHorizontal>
                   </GridItem>
                     <GridItem style={{marginBottom:'30px'}}>
                   <PlanHorizontal theme='whitePlan' >
                       <GridContainer> 
                       <GridItem xs={12} sm={12} md={1} >
                  <input type='checkbox' value='checked' style={{width:'20px', height:'20px', backgroundColor:'#D8D8D8', border:0,borderRadius:'3px'}} checked/>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={11}>
                   <h5 style={{color:'#484848',fontSize:'14px',margin:0,padding:0,}}>JUSTFIT PROFISSIONAL ONLINE</h5>
                   <p style={{color:'#484848',fontSize:'12px',margin:0,padding:0,}}>Aliquam erat volutpat. Suspendisse purus dui, scelerisque pulvinar nisi at, luctus vestibulum quam.</p>
                 </GridItem>
                       </GridContainer>
                   </PlanHorizontal>
                   </GridItem>
               </GridItem>
               <GridItem xs={12} sm={12} md={5} style={{marginBottom:'30px'}}>
               <PlanHorizontal theme='dark'>
                       <GridContainer style={{minHeight:'355px',marginBottom:'30px'}}>
                
                   <GridItem xs={12} sm={12} md={12} align='center'>
                   <GridItem align='left'>
                       <h1 style={{margin:0,padding:0,fontSize: '20px', fontWeight:'400',color:'#E3E3E3'}}>VÁ ATÉ A <strong>UNIDADE BARRETOS</strong> COM:</h1>
                       </GridItem>
                       <GridItem align='left' >
                       <ul style={{color:'#E3E3E3',fontSize:'12px',fontWeight:'400',listStyleType:'none',marginTop:'20px'}}>
                           <li style={{marginTop:'10px'}}><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Número da Matrícula</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Seu cartão </li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Atestado médico ou questionário de apetidão física</li>
                           <li><span style={{color:'#CCDA01',fontSize:'13px'}}>• </span>Documento com foto</li>

                       </ul>
                       </GridItem>
                       <GridItem align='left' style={{marginTop:'40px'}}>
                       <h1 style={{margin:0,padding:0,fontSize: '13px', fontWeight:'700',color:'#FFF'}} >PROMOÇÕES</h1>
                       <h3 style={{color:'#E3E3E3',fontSize:'12px',fontWeight:'400',listStyleType:'none',marginTop:'5px',padding:0,}}>ANUIDADEZERO | <strong>R$ 0,00</strong></h3>
                       </GridItem>
                       <GridItem align='left' style={{marginTop:'40px'}}>
                       <h1 style={{margin:0,padding:0,fontSize: '13px', fontWeight:'700',color:'#FFF'}} >PAGAMENTO COM CARTÃO DE CRÉDITO</h1>
                       <GridContainer style={{marginTop:'5px'}}>
                       <GridItem  xs={12} sm={12} md={2}>
                           <img src={mastercard} />
                       </GridItem>
                       <GridItem xs={12} sm={12} md={10}>
                       <h3 style={{color:'#E3E3E3',fontSize:'12px',fontWeight:'400',listStyleType:'none',margin:0,padding:0,}}>JOSÉ EXEMPLO EXEMPLAR </h3>
                       <h3 style={{color:'#E3E3E3',fontSize:'12px',fontWeight:'400',listStyleType:'none',margin:0,padding:0,}}>CARTÃO XXXX XXXX XXXX 5859</h3>
                       </GridItem>
       
                       </GridContainer>
                       </GridItem>
     
             </GridItem> 

                 </GridContainer>
                   </PlanHorizontal>
                
             </GridItem>
      
           </GridContainer>
 
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
