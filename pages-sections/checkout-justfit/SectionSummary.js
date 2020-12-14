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


import nextsteps from "assets/img/nextsteps.png";
import planofit from "assets/img/planofit.png";
import mastercard from "assets/img/mastercard.png";
import editIcon from "assets/img/edit.png";

import stepMobile4 from "assets/img/mobilestep4.png";

import TagManager from 'react-gtm-module';


import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";
import JustfitSummary from "../../components/Justfit/JustfitSummary/JustfitSummary";

const formatValueParcela = (value) => {
  let returnValue =  new String(value).replace(",", ".")
  let returnDecimal = parseFloat(returnValue).toFixed(2);      
  return  parseFloat(returnDecimal);    
}

function dataAtualFormatada(){
  var data = new Date(),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
}

function formataCPF(cpf){
  //retira os caracteres indesejados...
  cpf = new String(cpf).replace(/[^\d]/g, "");

  //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

const useStyles = makeStyles(styles);

export default function SectionSummary(props) {
  const classes = useStyles();

  let priceTransaction = parseFloat( formatValueParcela(props.plans[props.activePlan].parcelas[0].valor) +  props.plans[props.activePlan].valorMatricula );

  React.useEffect( () => {

    let priceTransaction = parseFloat( formatValueParcela(props.plans[props.activePlan].parcelas[0].valor) +  props.plans[props.activePlan].valorMatricula );

    TagManager.dataLayer({
      dataLayer: {
        'event': 'addSummary',
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 4
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
        },
        'cliente': {
          "nome": props.dataSale.customer.name,
          "email": props.dataSale.customer.email,
          "cpf": formataCPF(props.dataSale.customer.document),
        }
      },          
    })


  }, []);

  return (
      
      <GridContainer className={classes.content} justify="center" >        
        <GridItem xs={12} sm={12} md={10}>
          <Justfit
            theme="white"
            className={classes.jusfit}>
           <GridContainer className={classes.content} justify="center">

            {
                props.isMobile && (
                  <>
                    <GridItem align='left' justify='center' xs={6} sm={6} md={8}>
                      <h2 style={{fontSize: '17px', fontWeight:600,color:'#484848',minWidth:'150px'}}>RESUMO DO PEDIDO</h2>
                      <p style={{minWidth:'160px',color:'#484848',fontWeight:500,fontSize:'12px'}}>UNIDADE <strong>BARRETOS</strong></p>
                    </GridItem>
                    <GridItem className={classes.stepMobile} xs={6} sm={6} md={4} align='right'>
                      <img src={stepMobile4} />
                    </GridItem>
                  </>

                )
              }

             <GridItem  xs={12} sm={12} md={12}>
               <GridItem xs={12} sm={12} md={12}>
               <h1 style={{color:"#484848",fontWeight:'550',fontSize:'40px', display: props.isMobile && "none"}}>RESUMO DO SEU PEDIDO</h1>
               </GridItem>
               <h6 style={{color:"#484848",fontWeight:'600',fontSize:'15px',paddingBottom:20,paddingTop:30,paddingLeft:15,textTransform:'none'}}>Confira aqui alguns detalhes do seu pedido</h6>
               </GridItem>
               <GridItem  xs={12} sm={12} md={6} >
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} style={{marginBottom:33}}>
                      <JustfitSummary theme='summary'>
                        <GridContainer className={ props.isMobile && classes.cardSummary } style={{height:'100%'}}>
                          <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Seus dados</h1>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6} align='right'>
                        
                            <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px', cursor: "pointer"}} onClick={ () => { props.setActiveStep(1) } }>
                              <svg width="46" height="14" viewBox="0 0 46 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.152 11H19.276V9.968H15.34V7.244H18.376V6.212H15.34V3.56H19.072V2.528H14.152V11ZM20.3949 7.964C20.3949 9.848 21.4269 11.144 23.0709 11.144C24.5709 11.144 25.0629 10.016 25.0629 10.016H25.0869C25.0869 10.016 25.0749 10.184 25.0749 10.424V11H26.1789V2.528H25.0149V5.336C25.0149 5.564 25.0389 5.744 25.0389 5.744H25.0149C25.0149 5.744 24.5469 4.784 23.1429 4.784C21.5349 4.784 20.3949 6.032 20.3949 7.964ZM21.5829 7.964C21.5829 6.584 22.3749 5.792 23.3349 5.792C24.4869 5.792 25.0509 6.872 25.0509 7.952C25.0509 9.5 24.1989 10.136 23.2989 10.136C22.2909 10.136 21.5829 9.284 21.5829 7.964ZM27.9859 3.716H29.1619V2.528H27.9859V3.716ZM27.9979 11H29.1619V4.928H27.9979V11ZM31.2382 8.78C31.2382 10.808 32.7862 11.048 33.5662 11.048C33.8062 11.048 33.9742 11.024 33.9742 11.024V9.992C33.9742 9.992 33.8662 10.016 33.6982 10.016C33.2542 10.016 32.4022 9.86 32.4022 8.648V5.948H33.8662V5.012H32.4022V3.26H31.2742V5.012H30.4462V5.948H31.2382V8.78ZM34.795 9.296C34.795 10.508 35.815 11.144 36.859 11.144C38.311 11.144 38.803 9.944 38.803 9.944H38.827C38.827 9.944 38.803 10.148 38.803 10.424V11H39.883V7.16C39.883 5.624 39.019 4.784 37.483 4.784C36.091 4.784 35.215 5.504 35.215 5.504L35.695 6.356C35.695 6.356 36.451 5.768 37.387 5.768C38.155 5.768 38.719 6.104 38.719 7.1V7.208H38.455C37.435 7.208 34.795 7.292 34.795 9.296ZM35.971 9.236C35.971 8.144 37.555 8.084 38.431 8.084H38.731V8.276C38.731 9.176 38.095 10.208 37.111 10.208C36.355 10.208 35.971 9.728 35.971 9.236ZM41.6268 11H42.7908V8.516C42.7908 8.144 42.8268 7.772 42.9348 7.424C43.2108 6.524 43.8948 5.996 44.6388 5.996C44.8188 5.996 44.9748 6.032 44.9748 6.032V4.88C44.9748 4.88 44.8308 4.856 44.6748 4.856C43.7388 4.856 43.0308 5.552 42.7548 6.44H42.7308C42.7308 6.44 42.7548 6.236 42.7548 5.984V4.928H41.6268V11Z" fill="#4A4A4A"/>
                                <g clip-path="url(#clip0)">
                                <path d="M10.1526 7.91034C10.0012 7.91034 9.87861 8.03298 9.87861 8.1843V10.6167C9.87808 11.0705 9.51048 11.4382 9.05674 11.4386H1.36978C0.916044 11.4382 0.548449 11.0705 0.547914 10.6167V3.47769C0.548449 3.02406 0.916044 2.65636 1.36978 2.65582H3.80222C3.95354 2.65582 4.07618 2.53319 4.07618 2.38187C4.07618 2.23066 3.95354 2.10791 3.80222 2.10791H1.36978C0.613621 2.10877 0.000856116 2.72153 0 3.47769V10.6168C0.000856116 11.373 0.613621 11.9858 1.36978 11.9866H9.05674C9.8129 11.9858 10.4257 11.373 10.4265 10.6168V8.1843C10.4265 8.03298 10.3039 7.91034 10.1526 7.91034Z" fill="#4A4A4A"/>
                                <path d="M10.3182 1.4026C9.83674 0.921139 9.05617 0.921139 8.57472 1.4026L3.68715 6.29016C3.65365 6.32366 3.62947 6.36518 3.61684 6.41077L2.97411 8.73116C2.94768 8.8263 2.97454 8.92817 3.04431 8.99805C3.11419 9.06783 3.21607 9.09469 3.3112 9.06836L5.6316 8.42553C5.67719 8.4129 5.71871 8.38871 5.75221 8.35522L10.6397 3.46755C11.1204 2.98577 11.1204 2.20585 10.6397 1.72407L10.3182 1.4026ZM4.28407 6.46823L8.28417 2.46803L9.57423 3.75809L5.57403 7.75829L4.28407 6.46823ZM4.02638 6.98533L5.05704 8.01609L3.63139 8.41108L4.02638 6.98533ZM10.2523 3.08016L9.96173 3.3707L8.67156 2.08053L8.96222 1.78999C9.22965 1.52256 9.66327 1.52256 9.9307 1.78999L10.2523 2.11146C10.5193 2.37921 10.5193 2.81251 10.2523 3.08016Z" fill="#4A4A4A"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="11" height="11" fill="white" transform="translate(0 1)"/>
                                </clipPath>
                                </defs>
                              </svg>
                            </h1>
                    
                          </GridItem>
          
                          <GridItem style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>E-mail:</h1>
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.email}</h2>
                          </GridItem>
                          <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Nome:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.name}</h2>
                          </GridItem>                          
                          
                          <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>CPF:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.document}</h2>
                          </GridItem>
                          
                          <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Sexo:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.sex}</h2>
                          </GridItem>
                          
                          <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}> 
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Celular:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.phones[0].number}</h2>
                          </GridItem>                          
                        
                          <GridContainer style={{marginLeft:'30px',padding:0,}}>
                            <GridItem>
                            </GridItem>
                          </GridContainer>
                        </GridContainer>
                      </JustfitSummary>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} style={{marginBottom:33}}>
                      <JustfitSummary  theme='summary'>
                        <GridContainer style={{height:'100%'}}>
                          <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Endereço</h1>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6} align='right'>
                            <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px', cursor: "pointer"}} onClick={ () => { props.setActiveStep(2) } }>
                              <svg width="46" height="14" viewBox="0 0 46 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.152 11H19.276V9.968H15.34V7.244H18.376V6.212H15.34V3.56H19.072V2.528H14.152V11ZM20.3949 7.964C20.3949 9.848 21.4269 11.144 23.0709 11.144C24.5709 11.144 25.0629 10.016 25.0629 10.016H25.0869C25.0869 10.016 25.0749 10.184 25.0749 10.424V11H26.1789V2.528H25.0149V5.336C25.0149 5.564 25.0389 5.744 25.0389 5.744H25.0149C25.0149 5.744 24.5469 4.784 23.1429 4.784C21.5349 4.784 20.3949 6.032 20.3949 7.964ZM21.5829 7.964C21.5829 6.584 22.3749 5.792 23.3349 5.792C24.4869 5.792 25.0509 6.872 25.0509 7.952C25.0509 9.5 24.1989 10.136 23.2989 10.136C22.2909 10.136 21.5829 9.284 21.5829 7.964ZM27.9859 3.716H29.1619V2.528H27.9859V3.716ZM27.9979 11H29.1619V4.928H27.9979V11ZM31.2382 8.78C31.2382 10.808 32.7862 11.048 33.5662 11.048C33.8062 11.048 33.9742 11.024 33.9742 11.024V9.992C33.9742 9.992 33.8662 10.016 33.6982 10.016C33.2542 10.016 32.4022 9.86 32.4022 8.648V5.948H33.8662V5.012H32.4022V3.26H31.2742V5.012H30.4462V5.948H31.2382V8.78ZM34.795 9.296C34.795 10.508 35.815 11.144 36.859 11.144C38.311 11.144 38.803 9.944 38.803 9.944H38.827C38.827 9.944 38.803 10.148 38.803 10.424V11H39.883V7.16C39.883 5.624 39.019 4.784 37.483 4.784C36.091 4.784 35.215 5.504 35.215 5.504L35.695 6.356C35.695 6.356 36.451 5.768 37.387 5.768C38.155 5.768 38.719 6.104 38.719 7.1V7.208H38.455C37.435 7.208 34.795 7.292 34.795 9.296ZM35.971 9.236C35.971 8.144 37.555 8.084 38.431 8.084H38.731V8.276C38.731 9.176 38.095 10.208 37.111 10.208C36.355 10.208 35.971 9.728 35.971 9.236ZM41.6268 11H42.7908V8.516C42.7908 8.144 42.8268 7.772 42.9348 7.424C43.2108 6.524 43.8948 5.996 44.6388 5.996C44.8188 5.996 44.9748 6.032 44.9748 6.032V4.88C44.9748 4.88 44.8308 4.856 44.6748 4.856C43.7388 4.856 43.0308 5.552 42.7548 6.44H42.7308C42.7308 6.44 42.7548 6.236 42.7548 5.984V4.928H41.6268V11Z" fill="#4A4A4A"/>
                                <g clip-path="url(#clip0)">
                                <path d="M10.1526 7.91034C10.0012 7.91034 9.87861 8.03298 9.87861 8.1843V10.6167C9.87808 11.0705 9.51048 11.4382 9.05674 11.4386H1.36978C0.916044 11.4382 0.548449 11.0705 0.547914 10.6167V3.47769C0.548449 3.02406 0.916044 2.65636 1.36978 2.65582H3.80222C3.95354 2.65582 4.07618 2.53319 4.07618 2.38187C4.07618 2.23066 3.95354 2.10791 3.80222 2.10791H1.36978C0.613621 2.10877 0.000856116 2.72153 0 3.47769V10.6168C0.000856116 11.373 0.613621 11.9858 1.36978 11.9866H9.05674C9.8129 11.9858 10.4257 11.373 10.4265 10.6168V8.1843C10.4265 8.03298 10.3039 7.91034 10.1526 7.91034Z" fill="#4A4A4A"/>
                                <path d="M10.3182 1.4026C9.83674 0.921139 9.05617 0.921139 8.57472 1.4026L3.68715 6.29016C3.65365 6.32366 3.62947 6.36518 3.61684 6.41077L2.97411 8.73116C2.94768 8.8263 2.97454 8.92817 3.04431 8.99805C3.11419 9.06783 3.21607 9.09469 3.3112 9.06836L5.6316 8.42553C5.67719 8.4129 5.71871 8.38871 5.75221 8.35522L10.6397 3.46755C11.1204 2.98577 11.1204 2.20585 10.6397 1.72407L10.3182 1.4026ZM4.28407 6.46823L8.28417 2.46803L9.57423 3.75809L5.57403 7.75829L4.28407 6.46823ZM4.02638 6.98533L5.05704 8.01609L3.63139 8.41108L4.02638 6.98533ZM10.2523 3.08016L9.96173 3.3707L8.67156 2.08053L8.96222 1.78999C9.22965 1.52256 9.66327 1.52256 9.9307 1.78999L10.2523 2.11146C10.5193 2.37921 10.5193 2.81251 10.2523 3.08016Z" fill="#4A4A4A"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="11" height="11" fill="white" transform="translate(0 1)"/>
                                </clipPath>
                                </defs>
                              </svg>
                            </h1>
                          </GridItem>
                          <GridItem style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>CEP:</h1>
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.address.postalCode}</h2>
                          </GridItem>
                          <GridItem style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Logradouro:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.address.address}</h2>
                          </GridItem>
                          <GridItem style={{marginLeft:'30px',padding:0,}}  xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Número:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.address.number}</h2>
                          </GridItem>
                                                  
                          <GridItem style={{marginLeft:'30px',padding:0,}}  xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Bairro:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.address.district}</h2>
                          </GridItem>
                          <GridItem style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Cidade:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.address.city}</h2>
                          </GridItem>
                          
                          <GridItem style={{marginLeft:'30px',padding:0,}}  xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Estado:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.address.state}</h2>
                          </GridItem>
                          <GridItem style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={5}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Complemento:</h1> 
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.address.complement}</h2>
                          </GridItem>
                          
                          <GridContainer style={{marginLeft:'30px',padding:0,}}>
                            <GridItem>
                            </GridItem>
                          </GridContainer>
                        </GridContainer>
                      </JustfitSummary>
                    </GridItem>
                  </GridContainer>
               </GridItem>
               <GridItem  xs={12} sm={12} md={6} >
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}  >
                      <JustfitSummary theme='summary'>
                        <GridContainer style={{minHeight:'300px'}}>
                          <GridItem xs={12} sm={12} md={4} style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'16px'}}>Informações de Pagamento</h1>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6} align='right'>
                            <h1 style={{color:"#484848",fontWeight:'500',fontSize:'15px', cursor: "pointer"}} onClick={ () => { props.setActiveStep(2) } }>
                              <svg width="46" height="14" viewBox="0 0 46 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.152 11H19.276V9.968H15.34V7.244H18.376V6.212H15.34V3.56H19.072V2.528H14.152V11ZM20.3949 7.964C20.3949 9.848 21.4269 11.144 23.0709 11.144C24.5709 11.144 25.0629 10.016 25.0629 10.016H25.0869C25.0869 10.016 25.0749 10.184 25.0749 10.424V11H26.1789V2.528H25.0149V5.336C25.0149 5.564 25.0389 5.744 25.0389 5.744H25.0149C25.0149 5.744 24.5469 4.784 23.1429 4.784C21.5349 4.784 20.3949 6.032 20.3949 7.964ZM21.5829 7.964C21.5829 6.584 22.3749 5.792 23.3349 5.792C24.4869 5.792 25.0509 6.872 25.0509 7.952C25.0509 9.5 24.1989 10.136 23.2989 10.136C22.2909 10.136 21.5829 9.284 21.5829 7.964ZM27.9859 3.716H29.1619V2.528H27.9859V3.716ZM27.9979 11H29.1619V4.928H27.9979V11ZM31.2382 8.78C31.2382 10.808 32.7862 11.048 33.5662 11.048C33.8062 11.048 33.9742 11.024 33.9742 11.024V9.992C33.9742 9.992 33.8662 10.016 33.6982 10.016C33.2542 10.016 32.4022 9.86 32.4022 8.648V5.948H33.8662V5.012H32.4022V3.26H31.2742V5.012H30.4462V5.948H31.2382V8.78ZM34.795 9.296C34.795 10.508 35.815 11.144 36.859 11.144C38.311 11.144 38.803 9.944 38.803 9.944H38.827C38.827 9.944 38.803 10.148 38.803 10.424V11H39.883V7.16C39.883 5.624 39.019 4.784 37.483 4.784C36.091 4.784 35.215 5.504 35.215 5.504L35.695 6.356C35.695 6.356 36.451 5.768 37.387 5.768C38.155 5.768 38.719 6.104 38.719 7.1V7.208H38.455C37.435 7.208 34.795 7.292 34.795 9.296ZM35.971 9.236C35.971 8.144 37.555 8.084 38.431 8.084H38.731V8.276C38.731 9.176 38.095 10.208 37.111 10.208C36.355 10.208 35.971 9.728 35.971 9.236ZM41.6268 11H42.7908V8.516C42.7908 8.144 42.8268 7.772 42.9348 7.424C43.2108 6.524 43.8948 5.996 44.6388 5.996C44.8188 5.996 44.9748 6.032 44.9748 6.032V4.88C44.9748 4.88 44.8308 4.856 44.6748 4.856C43.7388 4.856 43.0308 5.552 42.7548 6.44H42.7308C42.7308 6.44 42.7548 6.236 42.7548 5.984V4.928H41.6268V11Z" fill="#4A4A4A"/>
                                <g clip-path="url(#clip0)">
                                <path d="M10.1526 7.91034C10.0012 7.91034 9.87861 8.03298 9.87861 8.1843V10.6167C9.87808 11.0705 9.51048 11.4382 9.05674 11.4386H1.36978C0.916044 11.4382 0.548449 11.0705 0.547914 10.6167V3.47769C0.548449 3.02406 0.916044 2.65636 1.36978 2.65582H3.80222C3.95354 2.65582 4.07618 2.53319 4.07618 2.38187C4.07618 2.23066 3.95354 2.10791 3.80222 2.10791H1.36978C0.613621 2.10877 0.000856116 2.72153 0 3.47769V10.6168C0.000856116 11.373 0.613621 11.9858 1.36978 11.9866H9.05674C9.8129 11.9858 10.4257 11.373 10.4265 10.6168V8.1843C10.4265 8.03298 10.3039 7.91034 10.1526 7.91034Z" fill="#4A4A4A"/>
                                <path d="M10.3182 1.4026C9.83674 0.921139 9.05617 0.921139 8.57472 1.4026L3.68715 6.29016C3.65365 6.32366 3.62947 6.36518 3.61684 6.41077L2.97411 8.73116C2.94768 8.8263 2.97454 8.92817 3.04431 8.99805C3.11419 9.06783 3.21607 9.09469 3.3112 9.06836L5.6316 8.42553C5.67719 8.4129 5.71871 8.38871 5.75221 8.35522L10.6397 3.46755C11.1204 2.98577 11.1204 2.20585 10.6397 1.72407L10.3182 1.4026ZM4.28407 6.46823L8.28417 2.46803L9.57423 3.75809L5.57403 7.75829L4.28407 6.46823ZM4.02638 6.98533L5.05704 8.01609L3.63139 8.41108L4.02638 6.98533ZM10.2523 3.08016L9.96173 3.3707L8.67156 2.08053L8.96222 1.78999C9.22965 1.52256 9.66327 1.52256 9.9307 1.78999L10.2523 2.11146C10.5193 2.37921 10.5193 2.81251 10.2523 3.08016Z" fill="#4A4A4A"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="11" height="11" fill="white" transform="translate(0 1)"/>
                                </clipPath>
                                </defs>
                              </svg>
                            </h1>
                          </GridItem>
                          <GridItem style={{marginLeft:'30px',padding:0,}}>
                            <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Método de pagamento escolhido</h1>
                            <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}> {props.dataSale.customer.card.number !== "" ? "Cartão de crédito" : "Débito automático"} </h2>
                          </GridItem>

                          {props.dataSale.customer.card.number !== "" ? (
                            <>
                              <GridItem style={{marginLeft:'30px',padding:0,}}>
                                <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Nome impresso no cartão</h1>
                                <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.financeResponsible.name}</h2>
                              </GridItem>
                              <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={6}>
                                <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Número do cartão</h1> 
                                <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>XXXX XXXX XXXX {props.dataSale.customer.card.number.substr(props.dataSale.customer.card.number.length - 4)}</h2>
                              </GridItem>
                              <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={3}>
                                <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Vencimento</h1> 
                                <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.card.valid}</h2>
                              </GridItem>
                            </>

                          ) : (
                            <>
                              <GridItem style={{marginLeft:'30px',padding:0,}}>
                                <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Banco</h1>
                                <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.dcc.banco}</h2>
                              </GridItem>
                              <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={6}>
                                <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Agência</h1> 
                                <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.dcc.agencia}</h2>
                                </GridItem>
                              <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={3}>
                                <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Dígito</h1> 
                                <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.dcc.agenciaDV}</h2>
                                </GridItem>
                              
                              <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={6}>
                                <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Conta</h1> 
                                <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.dcc.conta}</h2>
                                </GridItem>
                              <GridItem  style={{marginLeft:'30px',padding:0,}} xs={12} sm={12} md={3}>
                                <h1 style={{color:"#484848",fontWeight:'600',fontSize:'13px'}}>Dígito</h1> 
                                <h2 style={{color:"#7D7D7D",fontWeight:'500',fontSize:'13px',margin:0,padding:0, paddingBottom: "5px"}}>{props.dataSale.customer.dcc.contaCorrenteDV}</h2>
                                </GridItem>
                            </>
                          )}

                          


                          <GridContainer style={{marginLeft:'30px',padding:0,}}>
                            <GridItem>
                            </GridItem>
                          </GridContainer>
                        </GridContainer>
                      </JustfitSummary>
                    </GridItem>
                   </GridContainer>
                </GridItem>
               
           </GridContainer>
 
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
