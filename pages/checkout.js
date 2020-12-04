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

//LATERAL 
import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Scrollbar from 'perfect-scrollbar-react';
import 'perfect-scrollbar-react/dist/style.min.css';
//LATERAL END


import CircularProgress from '@material-ui/core/CircularProgress';
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
import SectionPlans from '../pages-sections/checkout-justfit/SectionPlans';
import SectionFinish from '../pages-sections/checkout-justfit/SectionFinish';
import SectionSummary from '../pages-sections/checkout-justfit/SectionSummary';
import SectionForm from '../pages-sections/checkout-justfit/SectionForm';
import SectionPayment from '../pages-sections/checkout-justfit/SectionPayment';
import SectionProgressBar from '../pages-sections/checkout-justfit/SectionProgressBar';




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
    backgroundColor: '#CCDA01',
    borderRadius: '50%',
    zIndex: 1,
    fontSize: 20,
    fontWeight: 900
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
      backgroundColor: '#d3d3d3',
    },
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
      height:0,
      display:'none',
    }
  },
  heading:{
    fontWeight:800,
    fontSize:15,
    color:'#484848 !important',
    flex:1,
    display:'flex',
  },
  secondaryHeading:{
    display:'flex',
    textAlign:'right',
    justifyContent:'flex-end',
    fontWeight:700,
    fontSize:15,
    color:'#484848 !important',

  },
  heading2:{
    fontWeight:600,
    fontSize:14,
    color:'#B0B0B0!important',
    flex:1,
    display:'flex',
  },
  secondaryHeading2:{
    display:'flex',
    flex:1,
    textAlign:'right',
    justifyContent:'flex-end',
    fontWeight:600,
    fontSize:14,
    color:'#B0B0B0 !important',

  },
  button: {
    marginRight: theme.spacing(1),
  },

  btnFinish: { backgroundColor: '#CCDA01', color: "#484848",cursor:'pointer', fontWeight: '700', fontSize: '14px', border: 0, width: '100%', padding: '20px', marginTop: '0px', borderRadius: '8px', },
  btnFinishDisabled: { display: 'none' },
  lateralForm: {
    height: '100%',
    backgroundColor: "#F2F2F2"
  },

  lateralFormDisabed: {
    display: 'none',
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
      fontWeight: "900 !important",
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
  const [activeStep, setActiveStep] = React.useState(4);
  const [activeAnamnese, setActiveAnamnese] = React.useState(0);

  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const [validationForm, setValidationForm] = React.useState(false);
  const [validationPayment, setValidationPayment] = React.useState(false);

  const [messageReturn, setMessageReturn] = React.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  })
  

  const [dataSale, setDataSale] = React.useState({

    customer: {
      companyBranchId: 26,
      name: "LETICIA CLUG BASTOS GAMA",
      birthDate: "1994-02-20",
      sex: "F",
      email: "LETICIACLUG@HOTMAIL.COM",
      document: "41410072851",
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
        postalCode: "09180020"
      },
      financeResponsible: {
        name: "LETICIA CLUG BASTOS GAMA",
        document: "41410072851",
        email: "LETICIACLUG@HOTMAIL.COM",
        phone: "1199911-2140",
        active: true,        
      },        
      planData: {
        companyBranchId: 26,
        planId: 600,
        consultantId: 11650531,
        promotionId: 0,
        startDate: "2020-07-31",
        dueDate: "2020-07-31",
        cupom:"",
        nrParcelasPagamento: 12
      },    
      card: {
        // number: "4551789978997899",
        number: "",
        name: "",
        valid: "",
        cvv: "",
        bandeira:""
      },
      dcc: {
        // conta:"86786876",
        // contaCorrenteDV:"23",
        // agencia:"213123",
        // agenciaDV:"123",
        // banco:"1"
        conta:"",
        contaCorrenteDV:"",
        agencia:"",
        agenciaDV:"",
        banco:""
      }      
    }


  });

  const steps = getSteps();
  const theme = useTheme();



  const handleNext = (step) => {
    

    switch (step) {
      case 0:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return
      case 1:
        setValidationForm(true);        
        return
      case 2:
        setValidationPayment(true);        
        return
      case 3:
        saleSend(dataSale);
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);        
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
        if (activeAnamnese === 0) {
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

  

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SectionPlans setDataSale={setDataSale} setActiveStep={setActiveStep} />;
      case 1:
        return <SectionForm setDataSale={setDataSale} setActiveStep={setActiveStep} setIsLoading={setIsLoading} setValidationForm={setValidationForm}  validationForm={validationForm} />;
      case 2:
        return <SectionPayment setDataSale={setDataSale} setActiveStep={setActiveStep} setIsLoading={setIsLoading} setValidationPayment={setValidationPayment}  validationPayment={validationPayment} />
      case 3:
        return <SectionSummary dataSale={dataSale} setActiveStep={setActiveStep} />
      case 4:
        return <SectionFinish dataSale={dataSale} />
      default:
        return 'Unknown step';
    }
  }



  const saleSend = async (dataSend) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';   
    var result = false;
    setIsLoading(true);
    result = await axios.post(`https://admin.justfit.com.br/app.justfit//api/LoadPersonalOnline/CheckoutJust`, dataSend)
      .then(res => {
        console.log(res);
        try {
          if (res.data.code == "0") {
            setActiveStep(4);
          } else {
            setMessageReturn( prev => {
              return {
                code: res.data.code,
                msg: res.data.msg
              }
            });
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
        setIsLoading(false);
      });
  };

  const setDataLog = async (dataSend) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    await axios.post('./checkout/setLog.php', dataSend)
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

    // if (activeStep == 2) {
    //   fetchData(dataSale);
    // }

  }, [dataSale]);

  React.useEffect(() => {
    console.log("activeStep");
    console.log(activeStep);

    // if(activeStep == 3){
    //   saleSend(dataSale);
    // }

  }, [activeStep]);


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>


      <Head>
        <title>Justfit Checkout</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>

      <div className={classes.root}>
        <GridContainer style={{ margin: 0, padding: 0, }}>

          <GridItem style={{ margin: 0, padding: 0, }} xs={12} sm={12} md={activeStep === steps.length - 1 ? 12 : 9}>

            <SectionProgressBar />
            <GridContainer justify='center' align='center'>
              <GridItem justify='center' align='center' xs={12} sm={12} md={8}>
                <MuiThemeProvider theme={muiTheme}>
                  {
                    <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>

                        </Step>
                      ))}
                    </Stepper>
                  }
                </MuiThemeProvider>
              </GridItem>
            </GridContainer>

            <div style={{display:'flex',flex:1,flexDirection:'column'}}>
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
                    {activeStep === 10 ? (

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
                        </div>

                      )}
                  </>

                )}
            </div>
            <GridContainer xs={12} sm={12} md={12} justify='center' align='center'>
              <GridItem xs={12} sm={12} md={12}>
                <button style={{width:'500px' }} className={activeStep === steps.length - 1 ? classes.btnFinish : classes.btnFinishDisabled} onClick={() => handleNext("Checkout")}> FINALIZAR E VOLTAR PARA HOME</button>
              </GridItem>
            </GridContainer>

            </div>

            <SectionFooter />
          </GridItem>
          <GridItem style={{ margin: 0, padding: 0, }} xs={12} sm={12} md={activeStep === steps.length - 1 ? 0 : 3} align='right' >
            <GridContainer className={activeStep === steps.length - 1 ? classes.lateralFormDisabed : classes.lateralForm} style={{ padding: 0, margin: 0 }} justify="center" >
              <GridItem xs={12} sm={12} md={12}>
                <Lateral
                  theme="light"
                  className={classes.lateralForm}
                >
                  <GridContainer justify='center' style={{ padding: 0, marginTop: '50px' }}>
                    <GridItem align='center'>
                      <h5 style={{ padding: 0, margin: 0, color: '#787878', fontSize: '25px' }}>PLANO <strong style={{ color: '#484848' }} >FIT+ </strong></h5>
                      <h5 style={{ padding: 0, margin: 0, marginBottom: '30px', fontSize: '25px' }}>UNIDADE BARRETOS</h5>

                    </GridItem>

                    {/* <GridItem justify='center' xs={12} sm={2} md={10}>
               <label style={{padding:0,margin:0,fontSize:'10px',fontWeight: 500,textAlign: 'left'}}>INSERIR CUPOM:</label>
               <input style={{border:'1px solid #D9D9D9', fontSize:'20px', width: '100%'}}></input>
        
               </GridItem> */}

                    <GridItem justify='space-between' align='center' style={{ marginTop: '30px' }} xs={12} sm={2} md={12}>
                      <h6 style={{ padding: 10, margin: 0, fontSize: '16px', textAlign: 'left', fontWeight: 600, color:'#292929',textTransform:'none' }}>Informações de Cobrança</h6>
                     
                    

                    </GridItem>
                    {/* <GridItem justify='right' align='right' style={{ marginTop: '30px' }} xs={12} sm={2} md={5}>
                    <h6 style={{ padding: 10, margin: 0, fontSize: '15px', textAlign: 'light', fontWeight: 600, color:'#292929',textTransform:'none', cursor:'pointer'}}>Expandir tudo</h6>
                    </GridItem> */}
                    <GridItem>
                      <div className='billing-info'>

                        <div style={{ display: 'flex', maxHeight: '400px', backgroundColor: 'white', padding: 20, borderRadius:13 }}>
                          <Scrollbar>
                            <div className="list-data">
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                  <Typography className={classes.heading}>1ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 59,80</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 29,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 29,90</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel2bh-content"
                                  id="panel2bh-header"
                                >
                                  <Typography className={classes.heading}>2ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel3bh-content"
                                  id="panel3bh-header"
                                >
                                  <Typography className={classes.heading}>3ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
          </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel4bh-content"
                                  id="panel4bh-header"
                                >
                                  <Typography className={classes.heading}>4ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel5bh-content"
                                  id="panel5bh-header"
                                >
                                  <Typography className={classes.heading}>5ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel6bh-content"
                                  id="panel6bh-header"
                                >
                                  <Typography className={classes.heading}>6ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel7bh-content"
                                  id="panel7bh-header"
                                >
                                  <Typography className={classes.heading}>7ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel8bh-content"
                                  id="panel8bh-header"
                                >
                                  <Typography className={classes.heading}>8ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel9bh-content"
                                  id="panel9bh-header"
                                >
                                  <Typography className={classes.heading}>9ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel10bh-content"
                                  id="panel10bh-header"
                                >
                                  <Typography className={classes.heading}>10ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel11bh-content"
                                  id="panel11bh-header"
                                >
                                  <Typography className={classes.heading}>11ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                              
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel12bh-content"
                                  id="panel12bh-header"
                                >
                                  <Typography className={classes.heading}>12ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                            </div>
                          </Scrollbar>
                        </div>

                      </div>
                    </GridItem>
                    <GridContainer justify='center' align='center' style={{ marginTop: '20px' }}>
                      <GridItem>
                       
                            <Button
                              disabled={isLoading ? true : false}
                              variant="contained"
                              color="primary"
                              onClick={() => handleNext(activeStep)}
                              className={classes.button}
                              style={{ width: '280px', height: '50px', color: 'white', backgroundColor: '#484848', marginBottom: '20px' }}
                            >
                               {
                                isLoading ? (
                                  <CircularProgress style={{ color: "#ccd900" }} size={30}/>
                                ) : 
                                  activeStep === steps.length - 2 ? 'FINALIZAR' : 'CONTINUAR'                                      
                                }
                            </Button>
                          
                                                
                      </GridItem>
                      <GridItem>
                        <Button disabled={activeStep === 0} onClick={() => handleBack("Checkout")} className={classes.button} style={{ width: '280px', color: '#484848', height: '50px', backgroundColor: '#d3d3d3' }}>
                          VOLTAR
                    </Button>


                      </GridItem>
                    </GridContainer>




                  </GridContainer>
                </Lateral>

              </GridItem>
            </GridContainer>

          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
