import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import TagManager from 'react-gtm-module'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PaymentIcon from '@material-ui/icons/Payment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Grow from '@material-ui/core/Grow';

import Lateral from "components/Lateral/Lateral.js";
import styles from "assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js";


import axios from 'axios';

import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import SectionFooter from "pages-sections/footer/SectionFooter.js";
import SectionContacts from "pages-sections/checkout/SectionContacts.js";

import SectionIdentification from "pages-sections/checkout/SectionIdentification.js";
import SectionAnamnese from "pages-sections/checkout/SectionAnamnese.js";
import SectionModal from "pages-sections/checkout/SectionModal.js";

// import logo from "assets/img/logo.png";
import logo from "assets/img/logo-white.png";

import {
  primaryColor,
  defaultFont
} from "assets/jss/nextjs-material-kit-pro.js";
import SectionLateral from '../pages-sections/lateral-info';
import { Grid } from '@material-ui/core';

import SectionProgressBarMobile from '../pages-sections/justfit-mobile/SectionProgressBar';
import Sidebar from '../pages-sections/justfit-mobile/Sidebar';
import SectionPlansMobile from '../pages-sections/justfit-mobile/SectionPlans';
// import SectionFormMobile from '../pages-sections/justfit-mobile/SectionForm';
import SectionFormMobile from '../pages-sections/checkout-justfit/SectionForm';
import SectionPaymentMobile from '../pages-sections/justfit-mobile/SectionPayment';
import SectionSummaryMobile from '../pages-sections/justfit-mobile/SectionSummary';
import SectionFinishMobile from '../pages-sections/justfit-mobile/SectionFinish';
import SectionSelectPlanMobile from '../pages-sections/justfit-mobile/SectionSelectPlan';

import '../assets/css/bootstrap.min.css';


const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#CCDA01',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#CCDA01',
    },
  },
  line: {
    borderColor: '#D3D3D3',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#D3D3D3',
    display: 'flex',
    height: 22,
    alignItems: 'center'     
  },
  active: {
    color: '#CCDA01',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#FFF',
    backgroundColor:'#CCDA01',
    borderRadius:'50%',
    zIndex: 1,
    fontSize: 20,
    fontWeight:900
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22    
  },
  active: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
      backgroundColor:
        '#CCDA01',
    },
  },
  completed: {
    '& $line': {
      // backgroundImage:
      //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
      backgroundColor:
        '#CCDA01',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#ccc',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    // backgroundColor: '#ccc',
    // backgroundColor: '#ffffff',
    backgroundColor: '#ccc',
    // backgroundColor: primaryColor[0],
    zIndex: 1,
    // color: '#fff',
    color: primaryColor[0],
    width: 50,
    height: 50,
    display: 'flex',    
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  active: {
    // backgroundImage:
    //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%)',
    // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    backgroundColor:
        '#ffffff',
  },
  completed: {
    // backgroundImage:
    //   'linear-gradient(90deg, rgba(66,92,199,1) 0%, rgba(59,191,173,1) 100%);',
    backgroundColor:
        '#ffffff',
  }  
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AccountCircleIcon />,
    2: <PaymentIcon />,
    3: <FavoriteIcon />,
    4: <ShoppingCartIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const muiTheme = createMuiTheme({
  overrides: {
      MuiStepIcon: {
          root: {
              color: '#000000', // or 'rgba(0, 0, 0, 1)'
              '&$active': {
                  color: '#000000',
              },
              '&$completed': {
                  color: '#000000',
              },
          },
      },
  }
});

const otherStyles = theme => ({
  root: {
      // Whatever needed
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflowX: 'hidden',
    // backgroundColor: "#ffffff"
    backgroundColor: primaryColor[0],
    '&$disabled': {
      color: 'white',
      backgroundColor:'#d3d3d3',
    },
  },
  colorBtnDefault:{
    backgroundColor:'#484848',
  },
  colorBtnFinish:{
     backgroundColor: '#CCDA01 !important',
    color: '#484848 !important',
  },
  menuBtnText: {
    position: "fixed",
    right:'21%',
    top:'34px',
    float:'right',
    color: "'#FFF'",
    mixBlendMode: "difference"
  },
  button: {
    marginRight: theme.spacing(1),
  },

  disabledBurger:{
    display: 'none !important',
  },
  enabledBurger:{
    display: 'block !important',
  },

  btnFinish:{backgroundColor:'#CCDA01',color:"#484848", fontWeight:'700',fontSize:'14px', border:0,width:'100%',padding:'20px',marginTop:'0px',borderRadius:'8px',},
  btnFinishDisabled:{display: 'none'},
    lateralForm: {
  height:'100%',
  backgroundColor: "#F2F2F2"
  },

  lateralFormDisabed:{
   display:'none',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }, 
  progress: {
    // display: "none
    margin: "0 auto"
  },
  textCenter: {
    textAlign: "center"
  },
  imgLogo: {
    maxHeight: "90px",
    margin: "0 auto"
  },
  containerLogo: {
    // textAlign: "center",
    display: "flex",
    alignItems: "center"
  },
  containerStep: {
    padding: "8px",
    "@media (max-width: 350px)": {
      paddingBottom: "10px"
    },
    backgroundColor: primaryColor[0],
    '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
      ...defaultFont,
      color: "#ccc",      
      // visibility: "hidden",
      fontWeight: 500,    
      // wordBreak: "break-all",
      "@media (max-width: 576px)": {
        display: "none",
        paddingBottom: "10px"
      },        
      "@media (max-width: 350px)": {
        position: "absolute",
        width: "100px",
        marginLeft: "-24px"
      },        
    },
    '& .MuiStepLabel-active': {      
      fontWeight: "900 !important" ,
      // display: "block !important",
      color: "#ffffff !important"
    },
    '& .MuiStepLabel-completed': {                  
      color: "#ffffff !important"
    }

  },  
  containerTopo: {
    padding: 0,
    margin: 0
  }
}));

function getSteps() {
  return ['PLANOS', 'CADASTRO', 'PAGAMENTO', "RESUMO", 'TUDO PRONTO!'];
}






export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeAnamnese, setActiveAnamnese] = React.useState(0);

  const [showModal, setShowModal] = React.useState(false);

  const [messageReturn, setMessageReturn] = React.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  })
  

  const [dataSale, setDataSale] = React.useState({
    
    customer: {
        companyBranchId :15956,
        name :"LETICIA CLUG BASTOS GAMA",
        birthDate:"1994-02-20",
        sex:"F",
        email:"LETICIACLUG@HOTMAIL.COM",
        document:"41410072851",
        isForeigner: false,
        phones: [
          {
              type: "cellphone",
              number: "1199911-2140"
          }
        ],
        address: {
          address: "Rua Marcelino",
          number: "243",
          complement: "",
          district: "Santo andré",
          city: "São Paulo",
          state: "SP",
          postalCode:"09180020"
        },
        financeResponsible:{          
          name: "LETICIA CLUG BASTOS GAMA",
          document: "41410072851",
          email: "LETICIACLUG@HOTMAIL.COM",
          phone: "1199911-2140",
          active: true
        },
        planData:{
          companyBranchId:15956,
          planId:344722,
          consultantId:11650531,
          promotionId:0,
          startDate:"2020-07-31",
          dueDate:"2020-07-31"
        },
        "paymentMethod":"creditCard",
        card:{          
          number: "41410072851",
          name: "LETICIA CLUG BASTOS GAMA",
          valid: "12/20",
          cvv: "782"
        },
        "anamnese":{
          "idade" :"",
          "altura" :"",
          "objetivo":"",
          "habitoTreino" :"",
          "frequenciaTreino" :"",
          "fazMusculacao" :"",
          "fazAulas" :"",
          "sedentario" :"",
          "sedentarioTempo" :"",
          "reclusaoTreino":"SIM",
          "tempoPorDia":"",
          "periodo" :"",
          "peso" :"",
          "patologia" :"",
          "outroPatologia" :"",
          "osseoArticular" :"",
          "qualOsseoArticular" :"",
          "cirurgia" :"",
          "qualCirurgia" :"",
          "internacao" :"",
          "qualInternacao" :"",
          "medicamento" :"",
          "qualMedicamento" :"",
          "fuma" :"",
          "nutricionista" :"",
          "personalTrainer" :"",
          "equipamentos" :"",
          "status" :"",
          "unidade" :"",
          "aluno" :"",
          optinSms: true,
          optinEmail: true,
          optinTelegram: true,
          aceiteTermos: true

        }
    }
   

  });

  const steps = getSteps();
  const theme = useTheme();



  const handleNext = (type) => {
 
    switch (type) {
      case "Checkout":
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return
      case "Anamnese":        
        if (activeAnamnese === 4){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);   
        } else {
          setActiveAnamnese((prevActiveStep) => prevActiveStep + 1);   
        }  
        return
      default:
        return 
    }    
  };

  const handleBack = (type) => {
    switch (type) {
      case "Checkout":
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        return
      case "Anamnese":
        if (activeAnamnese === 0){
          setActiveStep((prevActiveStep) => prevActiveStep - 1);   
        } else {
          setActiveAnamnese((prevActiveStep) => prevActiveStep - 1);   
        }
        return
      default:
        return 
    }    
  };

  const handleReset = () => {
    setActiveStep(0);  
    setActiveAnamnese(0);      
  };
  
  const sendDataForm = () => {
        
    fetchData(dataSale);    
    
  };

  const  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SectionPlansMobile setDataSale={setDataSale} setStepCheckout={setActiveStep} />;
      case 1:
        return <SectionFormMobile setDataSale={setDataSale} setStepCheckout={setActiveStep} />;
      case 2:
        return <SectionPaymentMobile setDataSale={setDataSale} setStepCheckout={setActiveStep}  />
      case 3:
        return <SectionSummaryMobile dataSale={dataSale} />
        case 4:
          return <SectionFinishMobile dataSale={dataSale} />
      default:
        return 'Unknown step';
    }
  }
  


  const fetchData = async (dataSend) => {    
    axios.defaults.headers.post['Content-Type'] ='application/json';    
    // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, dataSend )
    await axios.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/Post`, dataSend )
      .then(res => {
        console.log(res);
        try {          
          if(res.data.code == "0"){            
            setActiveStep(3);
          }  else {
            setDataLog(dataSend);
            setShowModal(true);
          }
        } catch (error) {
           console.log(error);
        }

      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };
  
  const setDataLog = async (dataSend) => {    
    axios.defaults.headers.post['Content-Type'] ='application/json';    
    await axios.post('./checkout/setLog.php', dataSend )
      .then(res => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };
  
  const fetchDataTest = async () => {
    // await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf} 389.727.318-70`)
    // await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf}`)
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Content-Type'] ='application/json';
    // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Register`, {
    await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, {
      "customer":{
         "companyBranchId":15956,
         "name":"Undefined",
         "birthDate":"1994-02-20",
         "sex":"F",
         "email":"LETICIACLUG@HOTMAIL.COM",
         "document":"41410072851",
         "isForeigner":false,
         "phones":[
            {
               "type":"cellphone",
               "number":"1199911-2140"
            }
         ],
         "address":{
            "address":"Rua Marcelino",
            "number":"243",
            "complement":"",
            "district":"Santo andré",
            "city":"São Paulo",
            "state":"SP",
            "postalCode":"09180020"
         },
         "financeResponsible":{
   
            "name":"LETICIA CLUG BASTOS GAMA",
            "document":"41410072851",
            "email":"LETICIACLUG@HOTMAIL.COM",
            "phone":"1199911-2140",
            "active":true
         },
         "planData":{
            "companyBranchId":15956,
            "planId":344912,
            "consultantId":10044113,
            "promotionId":0,
            "startDate":"2020-07-31",
            "dueDate":"2020-07-31"
         },
         "paymentMethod":"creditCard",
         "card":{     
            "number":"41410072851",
            "name":"LETICIA CLUG BASTOS GAMA",
            "valid":"12/20",
            "cvv":"782"
         },
         "anamnese":{
            "idade" :"25",
            "altura" :"1.75",
            "objetivo":"teste",
            "habitotreino" :"teste",
            "frequenciatreino" :"teste",
            "fazmusculacao" :"teste",
            "fazaulas" :"TESTE",
            "sedentario" :"TESTE",
            "sedentariotempo" :"TESTE",
            "reclusaotreino":"TESTE",
            "tempoporDia":"TESTE",
            "periodo" :"TESTE",
            "peso" :"60",
            "patologia" :"TESTE",
            "outropatologia" :"TESTE",
            "osseoarticular" :"TESTE",
            "qualosseoArticular" :"TESTE",
            "cirurgia" :"TESTE",
            "qualCirurgia" :"TESTE",
            "internacao" :"TESTE",
            "qualInternacao" :"TESTE",
            "medicamento" :"TESTE",
            "qualMedicamento" :"TESTE",
            "fuma" :"TESTE",
            "nutricionista" :"TESTE",
            "peronalTrainer" :"TESTE",
            "equipamentos" :"TESTE",
            "status" :"TESTE",
            "unidade" :"TESTE",
            "aluno" :"TESTE"
         }
      }
   })
      .then(res => {
        console.log(res);        
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };

  const fetchDataJust = async (cpf) => {    
    await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf}`)
      .then(res => {
        console.log(res);                   
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };
  
  const fetchDataClicou = async () => {    
    await axios.get(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/getItem`)
      .then(res => {
        console.log(res);                   
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };
  const fetchDataClicouRegister = async () => {    
    // await axios.post(`https://admin.justfit.com.br/homologacao/api/LoadPersonalOnline/Post`, {
      
    //   "teste": "teste"
      
    // })
    await axios.post(`https://api.fale.justfit.com.br/solicitacoes`, {
      teste: "teste"
    })
      .then(res => {
        console.log(res);                   
      })
      .catch((error) => {
        console.log(error);        
      })
      .finally(() => {
        console.log("finally");
      });
  };


  // React.useEffect(() => {
    // fetchData();
    // fetchDataClicou();
    // fetchDataJust("389.727.318-70");
    // fetchDataClicouRegister();
    // setDataLog(dataSale);
  // }, []);


  const tagManagerArgs = {
    gtmId: 'GTM-WPLTJG8'
  }
  
  React.useEffect(() => {

    async function initializeTagManager() {
      await TagManager.initialize(tagManagerArgs);
      TagManager.dataLayer({
        dataLayer: {
          event: "teste",
          userId: '001',
          userProject: 'project',
          page: 'home'
        },          
      })
    }
    initializeTagManager();    
    
  }, []);
  
  
  React.useEffect(() => {
    console.log("dataSale");
    console.log(dataSale);

     if(activeStep == 2){
      fetchData(dataSale);
    }
    
  }, [ dataSale ]);
  
  React.useEffect(() => {
    console.log("activeStep");    
    console.log(activeStep);   
    
    // if(activeStep == 3){
    //   fetchData(dataSale);
    // }

  }, [ activeStep ]);


  return (
    <>


      <Head>
          <title>Justfit Checkout</title>
          {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      
      <div className={classes.root}>   
      <GridContainer style={{margin:0, padding:0,}}>

      <GridItem style={{margin:0, padding:0,}} xs={12} sm={12} md={activeStep === steps.length - 1 ? 12 : 12} id='outer-container'>
      <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}} className={activeStep === steps.length - 1 ? classes.disabledBurger : classes.enabledBurger} >
      <h3 style={{fontSize:'10px',color:'#FFF',fontWeight:500,zIndex:9, maxWidth:'50px', textAlign:'right',alignSelf:'flex-end' }} className={classes.menuBtnText}>Detalhes do Pedido</h3>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  />
      </div>
        <div id='page-wrap'>
        <SectionProgressBarMobile />
        <GridContainer justify='center' align='center'>
          <GridItem justify='center' align='center' xs={12} sm={12} md={8}>
            {/* <MuiThemeProvider theme={muiTheme}> 
            {
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                          
                  </Step>
                ))}
              </Stepper>
            }
          </MuiThemeProvider> */}
          </GridItem>
        </GridContainer>
    

      <SectionModal setActive={0} setShowModal={setShowModal} showModal={showModal} messageReturn={messageReturn} />
        



        <div className={classes.textCenter}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <>
              { activeStep === 10 ? (

                <div>                  
                  {getStepContent(activeStep)}                
                  <div>
                    {/* <Button disabled={activeStep === 0} onClick={() => handleBack("Anamnese")} className={classes.button}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleNext("Anamnese")}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button> */}
                  </div>
                </div>

              ) : (

                <div>
                  
                  <Grow 
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 1000 } : {})}
                  >                    
                    {getStepContent(activeStep)}                    
                  </Grow>           
                  {/* <div>
                    <Button disabled={activeStep === 0} onClick={() => handleBack("Checkout")} className={classes.button}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleNext("Checkout")}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div> */}

                  <GridContainer justify='center' align='center' style={{marginTop:'20px'}}>
                    <GridItem>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleNext("Checkout")}
                        className={activeStep === steps.length - 1 ? classes.colorBtnFinish : classes.colorBtnDefault}
                        style={{width:'280px', height:'50px',color:'white',backgroundColor:'#484848',marginBottom:'20px'}}
                      >
                        {activeStep === steps.length - 1 ? 'FINALIZAR' : 'CONTINUAR'}
                      </Button>
                    </GridItem>
                    <GridItem>
                    <Button disabled={activeStep === 0} onClick={() => handleBack("Checkout")}     className={activeStep === steps.length - 1 ? classes.disabledBurger : classes.enabledBurger} style={{width:'280px',color:'#484848',height:'50px',backgroundColor:'#d3d3d3'}}>
                        VOLTAR
                      </Button>

                    
                    </GridItem>
                  </GridContainer>
                </div>

              )}
            </>
            
          )}
        </div>
                      {/* <GridContainer xs={12} sm={2} md={12} justify='right' align='right' style={{position: 'relative', left:'1060px',bottom:'0px'}}>
                       <GridItem xs={12} sm={12} md={3}>
                           <button className={activeStep === steps.length - 1 ? classes.btnFinish : classes.btnFinishDisabled} onClick={() => handleNext("Checkout")}> FINALIZAR E VOLTAR PARA HOME</button>
                       </GridItem>
                       </GridContainer> */}



        <SectionFooter/>
        </div>
        </GridItem>
        
       
        </GridContainer>
      </div>
    </>
  );
}
