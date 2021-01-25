import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import TagManager from 'react-gtm-module';

import { useRouter } from 'next/router';


import queryString from 'query-string';



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
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';


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
import SnackbarContent from "components/Snackbar/SnackbarContent.js";


import axios from 'axios';

import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import SectionFooter from "pages-sections/footer/SectionFooter.js";
import SectionContacts from "pages-sections/checkout/SectionContacts.js";

import SectionIdentification from "pages-sections/checkout/SectionIdentification.js";
import SectionAnamnese from "pages-sections/checkout/SectionAnamnese.js";
import SectionModal from "pages-sections/checkout/SectionModal.js";





import unidadesJson from 'components/Justfit/Unidades.js';



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
    top: 45,
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
    borderTopWidth: 1.3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#D3D3D3',
    display: 'flex',
    height: 22,
    alignItems: 'center',    
  },
  active: {
    color: '#CCDA01',            
    '& $circle': {
      width: 15,
      height: 15,
    }
    
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#FFF',
    backgroundColor: '#CCDA01',
    borderRadius: '50%',
    zIndex: 1,
    fontSize: 15,
    fontWeight: 900,
    '& $circle': {
      width: 15,
      height: 15,
    }
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
    MuiStepper: {
      root: {
        paddingTop: "0 !important",
        paddingBottom: "0 !important"
      }
    },
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
    MuiStepLabel: {
      root: {        
        flexDirection: "column-reverse !important"
      },
      label: {
        fontSize: "12px"
      }

    }
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
    },
    "&.MuiStepper-alternativeLabel": {
      flexDirection: "column-reverse"
    },
  },
 
  heading:{
    fontWeight:800,
    fontSize:"12px",
    color:'#484848 !important',
    flex:1,
    display:'flex',
  },
  secondaryHeading:{
    display:'flex',
    textAlign:'right',
    justifyContent:'flex-end',
    fontWeight:700,
    fontSize:"12px",
    color:'#484848 !important',

  },
  heading2:{
    fontWeight:600,
    fontSize:"12px",
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
    fontSize:"12px",
    color:'#B0B0B0 !important',

  },
  button: {
    marginRight: theme.spacing(1),
  },

  btnFinish: { backgroundColor: '#CCDA01', color: "#484848",cursor:'pointer', fontWeight: '700', fontSize: '14px', border: 0, width: '100%', padding: '20px', marginTop: '0px', borderRadius: '8px', },
  btnFinishDisabled: { display: 'none' },
  lateralForm: {
    height: '100%',
    backgroundColor: "#F2F2F2",
    "@media (max-width: 747px)": {
      height: 'auto',
    }

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
      flexDirection: "column-reverse",
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
  },
  formInputItem: {
    "& input": {      
      width: '100%',
      color: '#484848',
      background: '#FEFEFE',
      borderRadius: '5px',
      fontSize: '15px',      
      padding: '10px',
      border: '2px solid #D1D1D170',
      textTransform: 'none !important',
    },
    "& h2": {
      color: '#8E8E8E',
      fontWeight: 600,
      letterSpacing: '10%',
      fontSize: '14px',
      marginTop: '10px',
      marginBottom: '1px',
    }
  },
  sideMobile: {
    position: "fixed",
    zIndex: "2",
    overflow: "scroll",
    height: "100vh"
  },
  iconSideBar: {
    background: "transparent",
    position: "fixed",
    right: 0,
    top: 0,
    padding: "35px",
    zIndex: 2,
    border: "none"
  },
  sideMobileNone: { 
    display: "none"
  }  



}));

function getSteps() {
  return ['PLANOS', 'CADASTRO', 'PAGAMENTO', "RESUMO", 'TUDO PRONTO!'];
}


function formataCPF(cpf){
  //retira os caracteres indesejados...
  cpf = new String(cpf).replace(/[^\d]/g, "");

  //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}



export default function CustomizedSteppers() {
  const classes = useStyles();
  const router = useRouter();
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeAnamnese, setActiveAnamnese] = React.useState(0);

  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const [validationForm, setValidationForm] = React.useState(false);
  const [validationPayment, setValidationPayment] = React.useState(false);

  const [isMobile, setisMobile] = React.useState(false);
  const [isOpenSide, setIsOpenSide] = React.useState(false);

  const [isLoadingPlan, setIsLoadingPlan] = React.useState(true);   
  
  const [isLoadingCupom, setIsLoadingCupom] = React.useState(false);  
  const [insertCupom, setInsertCupom] = React.useState(false);
  const [errorCupom, setErrorCupom] = React.useState(false); 
  const [inputCupom, setInputCupom] = React.useState("");   

  const [activePlan, setActivePlan] = React.useState(0);
  
  const [activeUnidade, setActiveUnidade] = React.useState("");

  const [messageReturn, setMessageReturn] = React.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  })
  
  const [params, setParams] = React.useState({
    FL: "00000",
    PL: "NULL"
  })
  
  const [plans, setPlans] = React.useState([{
    codigoPlano: 0,
    descricao: "FIT PLUS CSL - MAT 0 E PRIM 14,90 MENS. 129,90",
    codigoHorario: 0,
    descricaoHorario: "LIVRE",
    condicaoPagamento: "EM 12 VEZES - CARTAO RECORRENCIA",
    descricaoEncantamento: "",
    valorMensal: 0.0,
    valorMatricula: 0.0,
    taxaAdesao: 0.0,
    valorAnuidade: 0.0,
    diaAnuidade: 1,
    mesAnuidade: "Janeiro",
    mesAnuidadeOrdinal: 1,
    duracaoPlano: 12,
    modalidades: [
      {
        codigo: 542,
        modalidade: "FITNESS 3",
        nrVezesSemana: 0
      }
    ],
    msgValidacao: "",
    produtos: [
      {
        codigoProduto: 38,
        produto: "ADESÃO PLANO RECORRENTE",
        tipoProduto: "TD",
        valor: 0.0
      },    
    ],
    parcelas: [
      {
        numero: "1",
        valor: "0,00"
      }      
    ],
    parcelasAnuidade: [
      {
        numero: "1",
        valor: "0.00",
        valorApresentar: "R$ 0,00",
        parcela: "2",
        parcelaApresentar: "Mesma data da PARCELA 2"
      },
    ]
  }])
  

  const [dataSale, setDataSale] = React.useState({


    // customer: {
    //   companyBranchId: 26,
    //   name: "Teste Name",
    //   birthDate: "01/01/2005",
    //   sex: "M",
    //   email: "teste@teste.com",
    //   document: "29838096091",
    //   isForeigner: false,
    //   phones: [
    //     {
    //       type: "cellphone",
    //       number: "(11) 99999-9999"
    //     }
    //   ],
    //   address: {
    //     address: "Rua Marcelino",
    //     number: "243",
    //     complement: "",
    //     district: "Santo andré",
    //     city: "São Paulo",
    //     state: "SP",
    //     postalCode: "09180020"
    //   },
    //   financeResponsible: {
    //     name: "LETICIA CLUG BASTOS GAMA",
    //     document: "41410072851",
    //     email: "LETICIACLUG@HOTMAIL.COM",
    //     phone: "1199911-2140",
    //     active: true,        
    //   },        
    //   planData: {
    //     companyBranchId: 26,
    //     planId: 600,
    //     consultantId: 11650531,
    //     promotionId: 0,
    //     startDate: "2020-07-31",
    //     dueDate: "2020-07-31",
    //     cupom:"",
    //     nrParcelasPagamento: 12
    //   },    
    //   card: {        
    //     number: "4551789978997899",
    //     name: "teste de cartao",
    //     valid: "09/2021",
    //     cvv: "123",        
    //     bandeira: 7
    //   },
    //   dcc: {
    //     conta:"86786876",
    //     contaCorrenteDV:"23",
    //     agencia:"213123",
    //     agenciaDV:"123",
    //     banco:"1"        
        
    //   }      
    // }



    customer: {
      companyBranchId: 26,
      name: "",
      birthDate: "",
      sex: "M",
      email: "",
      document: "",
      isForeigner: false,
      phones: [
        {
          type: "cellphone",
          number: ""
        }
      ],
      address: {
        address: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: "",
        postalCode: ""
      },
      financeResponsible: {
        name: "",
        document: "",
        email: "",
        phone: "",
        active: true,        
      },        
      planData: {
        companyBranchId: 26,
        planId: 0,
        consultantId: 11650531,
        promotionId: 0,
        startDate: "2020-07-31",
        dueDate: "2020-07-31",
        cupom:"",
        nrParcelasPagamento: 12
      },    
      card: {
        
        number: "",
        name: "",
        valid: "",
        cvv: "",
        bandeira: "",
      },
      dcc: {

        conta:"",
        contaCorrenteDV:"",
        agencia:"",
        agenciaDV:"",
        banco:"",        
        
      }      
    }


  });

  const [listaPremios, setListaPremios] = React.useState(
    {
      numeroCupom: "TESTE",
      listaPremios: [
        {
          percentualDesconto: "10",
          valorDesconto: "10",
          descricaoPremio: "PARCELA 1",
          tipoPremio: "MENSALIDADE",
          Tipo: "men",
          ValorReferente: 2,
        },
        {
          percentualDesconto: "10",
          valorDesconto: "10",
          descricaoPremio: "PARCELA 1",
          tipoPremio: "MENSALIDADE",
          Tipo: "men",
          ValorReferente: 5,
        },
        
        // {
        //   percentualDesconto: "10",
        //   valorDesconto: "0",
        //   descricaoPremio: "PARCELA 3",
        //   tipoPremio: "MENSALIDADE"
        // },          
      ]
    }
  );

  const steps = getSteps();
  const theme = useTheme();


  



  const handleNext = (step) => {
    
    console.log(dataSale);

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
  
  const handleSideBar = () => {
    setIsOpenSide(!isOpenSide);    
  };

  

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SectionPlans setDataSale={setDataSale} setActiveStep={setActiveStep} setActivePlan={setActivePlan} activePlan={ activePlan } plans={plans} dataSale={dataSale} isMobile={isMobile} activeUnidade={activeUnidade} isLoadingPlan={isLoadingPlan} />;
      case 1:
        return <SectionForm setDataSale={setDataSale} setActiveStep={setActiveStep} setIsLoading={setIsLoading} setValidationForm={setValidationForm} dataSale={dataSale} validationForm={validationForm} isMobile={isMobile} activeUnidade={activeUnidade} activePlan={ activePlan } plans={plans}  />;
      case 2:
        return <SectionPayment setDataSale={setDataSale} setActiveStep={setActiveStep} setIsLoading={setIsLoading} setValidationPayment={setValidationPayment} dataSale={dataSale}  validationPayment={validationPayment} isMobile={isMobile} activeUnidade={activeUnidade} activePlan={ activePlan } plans={plans} />
      case 3:
        return <SectionSummary dataSale={dataSale} setActiveStep={setActiveStep} isMobile={isMobile} activeUnidade={activeUnidade} activePlan={ activePlan } plans={plans} />
      case 4:
        return <SectionFinish dataSale={dataSale} activePlan={activePlan} plans={plans} isMobile={isMobile} activeUnidade={activeUnidade} />
      default:
        return 'Unknown step';
    }
  }

  



  const saleSend = async (dataSend) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';   
    var result = false;
    setIsLoading(true);
    // result = await axios.post(`https://admin.justfit.com.br/app.justfit//api/LoadPersonalOnline/CheckoutJust`, dataSend)
    result = await axios.post(`https://justfit.com.br/checkout/api/setCheckout.php`, dataSend)
      .then(res => {
        console.log(res);
        try {
          if (res.data.code == "0") {
            setActiveStep(4);
            setDataLog(dataSend);
            setDataLead(dataSend);
          } else {
            setMessageReturn( prev => {
              return {
                code: res.data.code,
                msg: res.data.msg
              }
            });
            setDataLogError(dataSend);                        
            setShowModal(true);
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);   
        setMessageReturn( prev => {
          return {
            code: "500",
            msg: "Erro interno. Por favor, tente novamente mais tarde."
          }
        });
        setDataLogError(dataSend);                        
        setShowModal(true);     
      })
      .finally(() => {
        console.log("finally");
        setIsLoading(false);
      });
  };

  const setDataLog = async (dataSend) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    await axios.post('/checkout/setLog.php', dataSend)
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
  
  const setDataLogError = async (dataSend) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    await axios.post('/checkout/setLogError.php', dataSend)
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

  const setDataLead = async (dataSend) => {    

    const lead = {      
      name: dataSend.customer.name,
      email: dataSend.customer.email,
      sex: dataSend.customer.sex,
      birthDate: dataSend.customer.birthDate,
      phone: dataSend.customer.phones[0].number,
      cpf: formataCPF(dataSend.customer.document),      
      unidade: activeUnidade,
      plano: plans[activePlan].descricao,
      finalizadoVenda: true,
      pendenciaCpf: false,
      pendenciaEmail: false,
    }

    console.log(lead);

    axios.defaults.headers.put['Content-Type'] = 'application/json';
    await axios.put('/checkout/api/setLeadTelevendas.php', lead)
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
  
  


  const getPlans = async (codigo) => {        

    setIsLoadingPlan(true);

    await axios.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/GetPlanByEmpresa?codEmpresa=${codigo}`)
      .then(res => {

        if(res.data.error){
          // setError(true);
          console.log(res.data.error);
          return
        }

        if(res.data.ret.length == 0){
          console.log(res.data.ret);
          return
        }

        setPlans(res.data.ret);
        setIsLoadingPlan(false);
        

        if( params.PL != "NULL" ) {

          res.data.ret.map((plan, i) => {  

            if(plan.descricao.includes(params.PL)){
              setActivePlan(i);              
            }

          });


        }

        setDataSale( prev => {
          return {
            ...prev,
            customer:{
              ...prev.customer,              
              planData: {
                ...prev.customer.planData,                
              } 
            }           
          }
        });

        console.log(res.data);        
       
        
      })
      .catch((error) => {
        console.log(error);
        // setError(true);
      })
      .finally(() => {
        // setLoading(false);
        setIsLoadingPlan(false);
      });
  };


  const getCupom = async (cupom) => {    
    setIsLoadingCupom(true);  
    setInsertCupom(false);
    setErrorCupom(false);  
  
    await axios.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/GetCupomInfo?cupom=${cupom}`)
      .then(res => {
  
        if(res.data.code != "0"){
          console.log("error getCupom");    
          setErrorCupom(true);    
          return false;
        }
        console.log(res.data);     
  
        console.log(res.data.cupom.cupom);     
        
        setInsertCupom(true);
  
        setListaPremios(res.data.cupom.cupom);          
        
      })
      .catch((error) => {
        console.log(error);
        setErrorCupom(true);
      })
      .finally(() => {
        setIsLoadingCupom(false);  
      });
  };




  

  const tagManagerArgs = {
    gtmId: 'GTM-57XJ865'
  }

  React.useEffect(() => {

    async function initializeTagManager() {
      await TagManager.initialize(tagManagerArgs);
      TagManager.dataLayer({
        dataLayer: {
          event: "initiateCheckout",          
        },
      })
    }
    initializeTagManager();

    
  
    console.log("router");    
    // console.log(queryString.parse(location.search));

    if(window.innerWidth < 747){
      setisMobile(true);
    } 

    
    setParams(prev => {
      return {
        ...prev,
        ...queryString.parse(location.search)
      }
    });    
    // setParams(queryString.parse(location.search));    
    // console.log(queryString.parse(location.search));
    console.log(params);

    
    // getUnidade(26);

    // saleSend(dataSale);
    

  }, []);

  const getUnidade = async (cod) => {         
    let unidadeSelected =  await unidadesJson(cod);
    setActiveUnidade(unidadeSelected.nome);

    setDataSale( prev => {
      return {
        ...prev,
        customer:{
          ...prev.customer,
          companyBranchId: unidadeSelected.codigo,
          planData: {
            ...prev.customer.planData,            
            companyBranchId: unidadeSelected.codigo,
          } 
        }          
      }
    });
    setActiveUnidade(unidadeSelected.nome);

    getPlans(unidadeSelected.codigo);
  };


  React.useEffect(() => {

    
    console.log("params");
    console.log(params);

    if(params.FL != "00000"){      
      getUnidade(params.FL);
    }




  }, [params]);
  
  React.useEffect(() => {

    
    console.log("activePlan");
    console.log(activePlan);

    setDataSale( prev => {
      return {
        ...prev,
        customer:{
          ...prev.customer,          
          planData: {
            ...prev.customer.planData,            
            planId: plans[activePlan].codigoPlano
          } 
        }           
      }
    });


  }, [activePlan]);
  
  React.useEffect(() => {
    console.log("plans");
    console.log(plans);

    setDataSale( prev => {
      return {
        ...prev,
        customer:{
          ...prev.customer,          
          planData: {
            ...prev.customer.planData,       
            planId: plans[activePlan].codigoPlano
          }  
        }          
      }
    });

  }, [plans]);
  
  React.useEffect(() => {
    console.log("activePlan");
    console.log(activePlan);
    setDataSale( prev => {
      return {
        ...prev,
        customer:{
          ...prev.customer,
          // companyBranchId: params.FL.substr(params.FL.length - 2),
          planData: {
            ...prev.customer.planData,       
            planId: plans[activePlan].codigoPlano
          }  
        }          
      }
    });

  }, [activePlan]);
  
  React.useEffect(() => {
    console.log("dataSale");
    console.log(dataSale);

  }, [dataSale]);

  React.useEffect(() => {
    console.log("activeStep");
    console.log(activeStep);

    window.scrollTo(0, 0);

    // if(activeStep == 3){
    //   saleSend(dataSale);
    // }

  }, [activeStep]);


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    window.scrollTo(0, 0);
    
  };
  
  const handleBlurCupom = () => (event) => {

    setInputCupom(event.target.value);    
    
    // getCupom(event.target.value);
  };

  React.useEffect(() => {
    console.log("inputCupom");
    console.log(inputCupom);

    setDataSale( prev => {
      return {
        ...prev,
        customer:{
          ...prev.customer,          
          planData: {
            ...prev.customer.planData,       
            cupom: inputCupom
          }  
        }          
      }
    });
    
    if(inputCupom == ""){
      setIsLoadingCupom(false);  
      setInsertCupom(false);
      setErrorCupom(false); 
    } else {
      getCupom(inputCupom);
    }

  }, [inputCupom]);


  const  getValueCupomParcela = (i) => {
    return (
      <>              
        {i == 0 ? (
          <Typography className={classes.secondaryHeading}> R$ { new String(parseFloat(formatValueParcela(plans[activePlan].valorMatricula) + descontoParcela( listaPremios.listaPremios[i], parcela.valor ) ).toFixed(2) ).replace(".", ",")} </Typography> 
        ) : (
          <Typography className={classes.secondaryHeading}> R$ { new String(parseFloat(formatValueParcela(plans[activePlan].parcelasAnuidade[i - 1].valor) + formatValueParcela( descontoParcela( listaPremios.listaPremios[i], parcela.valor ) ) ).toFixed(2) ).replace(".", ",")} </Typography> 
          // <Typography className={classes.secondaryHeading}> R$ { new String(parseFloat(formatValueParcela(plans[activePlan].parcelasAnuidade[i - 1].valor) + formatValueParcela(parcela.valor) ).toFixed(2) ).replace(".", ",")} </Typography> 
          
        )} 
      </>    
    ) 
  }




  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorCupom(false);
  };

  const formatValueParcela = (value) => {
    let returnValue =  new String(value).replace(",", ".")
    let returnDecimal = parseFloat(returnValue).toFixed(2);      
    return  parseFloat(returnDecimal);    
  }

  const descontoParcela = (descontos, parcela) => {
 
    let valorParcela = formatValueParcela(parcela);

    // console.log("valorParcela formatValueParcela(parcela)");
    // console.log(valorParcela);
    
    // console.log("valorParcela descontos.valorDesconto");
    // console.log(descontos);
    // console.log(descontos.valorDesconto);

  
    valorParcela = valorParcela - formatValueParcela(descontos.valorDesconto);
  
    valorParcela = valorParcela - ( formatValueParcela(parcela) * ( parseFloat(descontos.percentualDesconto) / 100 ) )
  
  
    // console.log("valorParcela");
    // console.log(valorParcela);

    if( valorParcela < 0 ){
      valorParcela = 0;
    }
  
    return parseFloat( valorParcela ).toFixed(2);    
  }
  
  const valorTotalParcelaCupom = (descontos, numeroParcela, valorParcela, parcelaAnuidade, matricula) => {
    
    console.log("numeroParcela, valorParcela, parcelaAnuidade, matricula");
    console.log(numeroParcela, valorParcela, parcelaAnuidade, matricula);
    descontos = descontos.filter(( desconto ) => {
      return parseInt(desconto.ValorReferente) == numeroParcela + 1;  
    });

    function descontaValor( desconto ) {
      switch (desconto.Tipo) {
        case "men":
          valorParcela = formatValueParcela(valorParcela) - formatValueParcela(desconto.valorDesconto); 
          valorParcela = formatValueParcela(valorParcela) - ( formatValueParcela(valorParcela) * ( parseFloat(desconto.percentualDesconto) / 100 ) ); 
          return
        case "mat":
          matricula = formatValueParcela(matricula) - formatValueParcela(desconto.valorDesconto); 
          matricula = formatValueParcela(matricula) - ( formatValueParcela(matricula) * ( parseFloat(desconto.percentualDesconto) / 100 ) );           
          return
        case "anu":
          parcelaAnuidade = formatValueParcela(parcelaAnuidade) - formatValueParcela(desconto.valorDesconto); 
          parcelaAnuidade = formatValueParcela(parcelaAnuidade) - ( formatValueParcela(parcelaAnuidade) * ( parseFloat(desconto.percentualDesconto) / 100 ) );                     
          return         
        default:
          return null;
      } 
    }

    if(descontos.length > 0){
      console.log("encontrado");
      console.log(descontos);

      descontos.map(( desconto ) => {
        descontaValor(desconto)
      });
    
    }


    valorParcela = formatValueParcela(valorParcela) + formatValueParcela(matricula) + formatValueParcela(parcelaAnuidade);
    
  
  
    console.log("valorParcela");
    console.log(valorParcela);

    if( valorParcela < 0 ){
      valorParcela = 0;
    }
  
    return parseFloat( valorParcela ).toFixed(2);    
    // return 0;    
  }

  return (
    <>


      <Head>
        <title>Just Fit - Checkout</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>

      <div className={classes.root}>
        <GridContainer style={{ margin: 0, padding: 0, }}>

          <GridItem style={{ margin: 0, padding: 0, }} xs={12} sm={12} md={activeStep === steps.length - 1 ? 12 : 9}>          

            <SectionProgressBar />
            <GridContainer justify='center' align='center' style={{ display: isMobile && "none" }}>
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
                      <div>

                        <Grow
                          in={true}
                          style={{ transformOrigin: '0 0 0' }}
                          {...(true ? { timeout: 1000 } : {})}
                        >
                          {getStepContent(activeStep)}
                        </Grow>

                      </div>                  
                    </>

                  )}
              </div>
              <GridContainer xs={12} sm={12} md={12} justify='center' align='center' style={{ margin: "0 auto" }}>
                <GridItem xs={12} sm={12} md={12}>
                  <button style={{width:'100%', maxWidth: "500px" }} className={activeStep === steps.length - 1 ? classes.btnFinish : classes.btnFinishDisabled} onClick={() => window.location.assign("https://justfit.com.br/")}> FINALIZAR E VOLTAR PARA HOME</button>
                </GridItem>
              </GridContainer>


              {
                activeStep !== 4 && (
                  <GridContainer justify='center' align='center' style={{marginTop:'20px', display: !isMobile && "none"}}>
                    <GridItem>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleNext(activeStep)}
                          className={activeStep === steps.length - 1 ? classes.colorBtnFinish : classes.colorBtnDefault}
                          style={{width:'280px', height:'50px',color:'white',backgroundColor:'#484848',marginBottom:'20px'}}
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
                      <Button disabled={activeStep === 0} onClick={() => handleBack("Checkout")}     className={activeStep === steps.length - 1 ? classes.disabledBurger : classes.enabledBurger} style={{width:'280px',color:'#484848',height:'50px',backgroundColor:'#d3d3d3'}}>
                          VOLTAR
                      </Button>

                      
                    </GridItem>
                  </GridContainer>

                )

          
              }

              

            </div>

            <SectionFooter />
          </GridItem>
          <GridItem className={ isMobile &&  isOpenSide && classes.sideMobile  }  style={{ margin: 0, padding: 0, }} xs={12} sm={12} md={activeStep === steps.length - 1 ? 0 : 3} align='right'>
            <GridContainer className={activeStep === steps.length - 1 ? classes.lateralFormDisabed : classes.lateralForm} style={{ padding: 0, margin: 0 }} justify="center" >
              <GridItem xs={12} sm={12} md={12}>
                <Lateral
                  theme="light"
                  className={classes.lateralForm}
                >
                  { isMobile &&
                    <button className={ classes.iconSideBar  } onClick={ () => handleSideBar() }>
                      {
                        isOpenSide ? (
                          <CloseIcon/>
                        ) : (
                          <svg width="85" height="13" viewBox="0 0 85 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="59.5" y1="2.5" x2="83.5" y2="2.5" stroke="#484848" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <line x1="73.5" y1="10.5" x2="83.5" y2="10.5" stroke="#484848" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.79094 11H6.69494C9.32294 11 11.0389 9.416 11.0389 6.728C11.0389 4.04 9.32294 2.48 6.69494 2.48H3.79094V11ZM5.33894 9.668V3.812H6.61094C8.31494 3.812 9.44294 4.832 9.44294 6.728C9.44294 8.648 8.33894 9.668 6.61094 9.668H5.33894ZM11.99 7.94C11.99 9.68 13.25 11.144 15.278 11.144C16.802 11.144 17.738 10.268 17.738 10.268L17.15 9.176C17.15 9.176 16.37 9.848 15.386 9.848C14.474 9.848 13.646 9.296 13.55 8.228H17.774C17.774 8.228 17.81 7.82 17.81 7.64C17.81 6.02 16.862 4.736 15.098 4.736C13.274 4.736 11.99 6.056 11.99 7.94ZM13.598 7.184C13.742 6.392 14.282 5.912 15.062 5.912C15.734 5.912 16.25 6.356 16.274 7.184H13.598ZM19.3306 8.756C19.3306 10.808 21.0226 11.06 21.8746 11.06C22.1626 11.06 22.3426 11.024 22.3426 11.024V9.692C22.3426 9.692 22.2346 9.716 22.0666 9.716C21.6466 9.716 20.8546 9.572 20.8546 8.564V6.188H22.2466V4.976H20.8546V3.212H19.3666V4.976H18.5386V6.188H19.3306V8.756ZM23.074 9.236C23.074 10.46 24.058 11.144 25.15 11.144C26.542 11.144 27.022 10.064 27.01 10.064H27.034C27.034 10.064 27.01 10.256 27.01 10.496V11H28.414V7.172C28.414 5.624 27.478 4.736 25.87 4.736C24.418 4.736 23.47 5.492 23.47 5.492L24.046 6.584C24.046 6.584 24.85 5.996 25.726 5.996C26.398 5.996 26.902 6.272 26.902 7.076V7.16H26.698C25.702 7.16 23.074 7.292 23.074 9.236ZM24.61 9.164C24.61 8.312 25.87 8.204 26.65 8.204H26.914V8.348C26.914 9.092 26.338 9.956 25.534 9.956C24.91 9.956 24.61 9.572 24.61 9.164ZM29.9162 9.092C29.9162 10.844 30.9602 11.06 31.8002 11.06C32.0522 11.06 32.2802 11.024 32.2802 11.024V9.692C32.2802 9.692 32.1722 9.704 32.0522 9.704C31.6562 9.704 31.4282 9.536 31.4282 8.864V2.48H29.9162V9.092ZM33.4103 11H34.9343V8.192C34.9343 7.904 34.9583 7.64 35.0303 7.4C35.2583 6.656 35.8823 6.128 36.6863 6.128C37.4663 6.128 37.6583 6.632 37.6583 7.376V11H39.1703V7.064C39.1703 5.444 38.4023 4.736 37.0463 4.736C35.9783 4.736 35.2343 5.36 34.9343 5.948H34.9103C34.9103 5.948 34.9343 5.732 34.9343 5.432V2.48H33.4103V11ZM40.3377 7.94C40.3377 9.68 41.5977 11.144 43.6257 11.144C45.1497 11.144 46.0857 10.268 46.0857 10.268L45.4977 9.176C45.4977 9.176 44.7177 9.848 43.7337 9.848C42.8217 9.848 41.9937 9.296 41.8977 8.228H46.1217C46.1217 8.228 46.1577 7.82 46.1577 7.64C46.1577 6.02 45.2097 4.736 43.4457 4.736C41.6217 4.736 40.3377 6.056 40.3377 7.94ZM41.9457 7.184C42.0897 6.392 42.6297 5.912 43.4097 5.912C44.0817 5.912 44.5977 6.356 44.6217 7.184H41.9457ZM46.8982 10.244C46.8982 10.244 47.7502 11.144 49.2742 11.144C50.7262 11.144 51.6142 10.328 51.6142 9.308C51.6142 7.34 48.6382 7.448 48.6382 6.584C48.6382 6.2 49.0222 6.032 49.4182 6.032C50.3542 6.032 50.9182 6.56 50.9182 6.56L51.4822 5.432C51.4822 5.432 50.8102 4.736 49.4302 4.736C48.1102 4.736 47.0902 5.396 47.0902 6.536C47.0902 8.504 50.0662 8.384 50.0662 9.296C50.0662 9.656 49.6942 9.848 49.2622 9.848C48.2662 9.848 47.5942 9.176 47.5942 9.176L46.8982 10.244Z" fill="#484848"/>
                          </svg>
                        )

                      }
                                          
                    </button>
                  }
                  

                  <GridContainer className={ isMobile &&  !isOpenSide && classes.sideMobileNone } justify='center' style={{ padding: 0, marginTop: '20px' }}>
                    <GridItem align='center'>
                      <h5 style={{ padding: 0, margin: 0, color: '#787878', fontSize: '25px' }}>PLANO <strong style={{ color: '#484848' }} > { plans[activePlan].descricao.includes("FIT") ? "FIT+" : "JUST"  }  </strong></h5>
                <h5 style={{ padding: 0, margin: 0, marginBottom: '0px', fontSize: '18px' }}>UNIDADE <br/> { activeUnidade }</h5>

                    </GridItem>

                    {/* <GridItem justify='center' xs={12} sm={2} md={10} className={classes.formInputItem} style={{ display: "none" }}> */}
                    <GridItem justify='center' xs={12} sm={12} md={10} className={classes.formInputItem} style={{ marginTop: "15px", marginBottom: "20px" }}>
                      <h2>INSERIR CUPOM:</h2>
                      <GridContainer>
                        <GridItem justify='center' xs={8} sm={8} md={8}>
                          <input onBlur={handleBlurCupom()}></input>                          
                        </GridItem>
                        <GridItem justify='center' xs={4} sm={4} md={4}>

                            <Button
                              disabled={isLoadingCupom ? true : false}
                              variant="contained"
                              color="primary"
                              onClick={() => getCupom(inputCupom)}
                              className={classes.button}
                              style={ isMobile ? { color: 'white', backgroundColor: '#484848', marginTop: "1px"  } : { color: 'white', backgroundColor: '#484848', marginTop: "2px"  } } 
                            >
                               OK
                            </Button>
                          
                        </GridItem>

                      </GridContainer>
                      
                
                    </GridItem>


                    {
                      isLoadingCupom ? (
                        <GridItem justify='center' xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                          <CircularProgress style={{ color: "#ccd900" }} size={30}/>
                        </GridItem>

                      ) : (
                        <>
                          {
                            insertCupom && (
                              <GridItem justify='center' xs={12} sm={12} md={12} style={{ textAlign: "center", marginBottom: "15px" }}>
                                <h5 style={{ padding: 0, margin: 0, color: '#787878', fontSize: '18px' }}> <strong style={{ color: '#484848' }} > CUPOM APLICADO </strong> <br/> { listaPremios.numeroCupom } </h5>                                
                              </GridItem>
      
                            )
      
                          }
                        </>
                      )

                    }  

                      
                    <Snackbar open={errorCupom} autoHideDuration={6000} onClose={handleClose}>
                      <SnackbarContent                          
                        message={
                          <span>
                            <b>Cupom não encontrado</b> <br/> Insira um cupom válido
                          </span>
                        }
                        // close
                        color="danger"
                        icon="info_outline"
                      />
                    </Snackbar>
                        
                    



                    <GridItem justify='space-between' align='center' style={{ marginTop: '0px' }} xs={12} sm={2} md={12}>
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

                            { isLoadingPlan ? (
                              <GridItem justify='center' xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                                <CircularProgress style={{ color: "#ccd900" }} size={30}/>
                              </GridItem>

                            ): ( <>

                              {plans[activePlan].parcelas.map((parcela, i) => {        
                                
                                
                                return (
                                  <>
                                    {
                                      insertCupom ? (
                                        <>
                                          <Accordion className={classes.MuiAccordionroot}  onChange={handleChange('panel' + i)} defaultExpanded>                                          
                                            <AccordionSummary
                                              expandIcon={<ExpandMoreIcon />}
                                              aria-controls="panel1bh-content"
                                              id="panel1bh-header"
                                            >                                    
                                              <Typography className={classes.heading}>{parcela.numero}ª Cobrança</Typography>
                                              

                                              { i < plans[activePlan].parcelasAnuidade.length + 1 ? 
                                                
                                                ( <>                                                                                                                                            
                                                    {i == 0 ? (
                                                      // <Typography className={classes.secondaryHeading}> R$ { new String(parseFloat(formatValueParcela(plans[activePlan].valorMatricula) + descontoParcela( listaPremios.listaPremios[i], parcela.valor ) ).toFixed(2) ).replace(".", ",")} </Typography> 
                                                      <Typography className={classes.secondaryHeading}> R$ { new String(valorTotalParcelaCupom( listaPremios.listaPremios, i, parcela.valor, 0, plans[activePlan].valorMatricula )).replace(".", ",")} </Typography> 

                                                    ) : (
                                                      // <Typography className={classes.secondaryHeading}> R$ { new String(parseFloat(formatValueParcela(plans[activePlan].parcelasAnuidade[i - 1].valor) + formatValueParcela( descontoParcela( listaPremios.listaPremios[i], parcela.valor ) ) ).toFixed(2) ).replace(".", ",")} </Typography> 
                                                      // <Typography className={classes.secondaryHeading}> R$ { new String(parseFloat(formatValueParcela(plans[activePlan].parcelasAnuidade[i - 1].valor) + formatValueParcela(parcela.valor) ).toFixed(2) ).replace(".", ",")} </Typography> 

                                                      <Typography className={classes.secondaryHeading}> R$ { new String(valorTotalParcelaCupom( listaPremios.listaPremios, i, parcela.valor, plans[activePlan].parcelasAnuidade[i - 1].valor, 0 )).replace(".", ",")} </Typography> 
                                                      
                                                    )} 
                                                  </>                                                                                                          
                                                ) : ( 
                                                  // <Typography className={classes.secondaryHeading}>R$ { parcela.valor } </Typography> 
                                                  <Typography className={classes.secondaryHeading}> R$ { new String(valorTotalParcelaCupom( listaPremios.listaPremios, i, parcela.valor, 0, 0 )).replace(".", ",")} </Typography> 
                                                )
                                              }                                    
                                            </AccordionSummary>
                                            <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                              {/* Detalhe de cobrança */}
                                              <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                                <Typography className={classes.heading2}>Mensalidade</Typography>

                                                {/* <Typography className={classes.secondaryHeading2}> R$ { i < listaPremios.listaPremios.length ? new String( descontoParcela( listaPremios.listaPremios[i], parcela.valor ) ).replace(".", ",") :  parcela.valor }</Typography> */}
                                                <Typography className={classes.secondaryHeading2}> R$ { i < listaPremios.listaPremios.length ? new String( valorTotalParcelaCupom( listaPremios.listaPremios, i, parcela.valor, 0, 0 ) ).replace(".", ",") :  parcela.valor }</Typography>

                                                
                                              </GridItem>
                                              <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                                <Typography className={classes.heading2}>Manutenção</Typography>                                      
                                                { i < plans[activePlan].parcelasAnuidade.length + 1 && i != 0 ? (
                                                  <Typography className={classes.secondaryHeading2}>{plans[activePlan].parcelasAnuidade[i - 1].valorApresentar}</Typography>
                                                ) : (
                                                  <Typography className={classes.secondaryHeading2}>R$ 0,00</Typography>
                                                )
                                                }                                      
                                              </GridItem>
                                              { i == 0 && (
                                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                                  <Typography className={classes.heading2}>Matrícula</Typography>
                                                  <Typography className={classes.secondaryHeading2}> R$  { new String(parseFloat( plans[activePlan].valorMatricula ).toFixed(2) ).replace(".", ",")}</Typography>
                                                </GridItem>
                                              )}
                                            </AccordionDetails>
                                          </Accordion>                                                                        
                                        </>

                                      ): (
                                        <>
                                          <Accordion className={classes.MuiAccordionroot}  onChange={handleChange('panel' + i)} defaultExpanded>
                                          {/* <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}> */}
                                            <AccordionSummary
                                              expandIcon={<ExpandMoreIcon />}
                                              aria-controls="panel1bh-content"
                                              id="panel1bh-header"
                                            >                                    
                                              <Typography className={classes.heading}>{parcela.numero}ª Cobrança</Typography>

                                              { i < plans[activePlan].parcelasAnuidade.length + 1 ? 
                                                
                                                ( <>
                                                  {i == 0 ? (
                                                    <Typography className={classes.secondaryHeading}> R$ { new String(parseFloat(formatValueParcela(plans[activePlan].valorMatricula) + formatValueParcela(parcela.valor) ).toFixed(2) ).replace(".", ",")} </Typography> 
                                                  ) : (
                                                    <Typography className={classes.secondaryHeading}> R$ { new String(parseFloat(formatValueParcela(plans[activePlan].parcelasAnuidade[i - 1].valor) + formatValueParcela(parcela.valor)).toFixed(2) ).replace(".", ",")} </Typography> 
                                                  )}                                         
                                                  </>
                                                ) : ( 
                                                  <Typography className={classes.secondaryHeading}>R$ { parcela.valor } </Typography> 
                                                )
                                              }                                    
                                            </AccordionSummary>
                                            <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                              <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                                <Typography className={classes.secondaryHeading2}> R$ {parcela.valor}</Typography>
                                              </GridItem>
                                              <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                                <Typography className={classes.heading2}>Manutenção</Typography>                                      
                                                { i < plans[activePlan].parcelasAnuidade.length + 1 && i != 0 ? (
                                                  <Typography className={classes.secondaryHeading2}>{plans[activePlan].parcelasAnuidade[i - 1].valorApresentar}</Typography>
                                                ) : (
                                                  <Typography className={classes.secondaryHeading2}>R$ 0,00</Typography>
                                                )
                                                }                                      
                                              </GridItem>
                                              { i == 0 && (
                                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',margin:0,padding:0,paddingRight:'33px',}} >
                                                  <Typography className={classes.heading2}>Matrícula</Typography>
                                                  <Typography className={classes.secondaryHeading2}> R$  { new String(parseFloat( plans[activePlan].valorMatricula ).toFixed(2) ).replace(".", ",")}</Typography>
                                                </GridItem>
                                              )}
                                            </AccordionDetails>
                                          </Accordion>
                                        </>
                                        
                                      )
                                    }
                                  </>                                
                                )
                              })}
                            </>)}
                            
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
