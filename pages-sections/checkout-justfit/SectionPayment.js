/*eslint-disable*/
import React from "react";
import { useState } from "react";
import axios from 'axios';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";

import creditDark from "assets/img/credit-card-dark.png";
import creditWhite from "assets/img/credit-card-white.png";
import debitDark from "assets/img/debit-bank-dark.png";


import stepMobile3 from "assets/img/mobilestep3.png";


import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

import InputMask from "react-input-mask";

import TagManager from 'react-gtm-module';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { setLocale } from 'yup';

const useStyles = makeStyles(styles);


setLocale({  
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'Este campo deve ser um número';
        case 'string':
          return 'deve ser um texto';
        default:
          return 'formato errado';
      }
    },
    default: 'é inválido',
    required: 'Desculpe, este campo é obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}',
  },
  string: {
      length: 'deve ter exatamente ${length} caracteres',
      min: 'deve ter pelo menos ${min} caracteres',
      max: 'deve ter no máximo ${max} caracteres',
      email: 'Por favor, informe um e-mail inválido',
      url: 'deve ter um formato de URL válida',
      trim: 'não deve conter espaços no início ou no fim.',
      lowercase: 'deve estar em maiúsculo',
      uppercase: 'deve estar em minúsculo',
  },
  number: {
      min: 'deve ser no mínimo ${min}',
      max: 'deve ser no máximo ${max}',
      lessThan: 'deve ser menor que ${less}',
      moreThan: 'deve ser maior que ${more}',
      notEqual: 'não pode ser igual à ${notEqual}',
      positive: 'deve ser um número posítivo',
      negative: 'deve ser um número negativo',
      integer: 'deve ser um número inteiro',      
  },
      date: {
      min: 'deve ser maior que a data ${min}',
      max: 'deve ser menor que a data ${max}',
  },
      array: {
      min: 'deve ter no mínimo ${min} itens',
      max: 'deve ter no máximo ${max} itens',
  }
});

function isValidDateCard(date) {
  // return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(date);
  return /^((0[1-9])|(1[0-2]))\/((2009)|(20[1-2][0-9]))$/.test(date);
}

function getCardFlag(cardnumber) {
  var cardnumber = cardnumber.replace(/[^0-9]+/g, '');

  var cards = {
      visa      : /^4[0-9]{12}(?:[0-9]{3})/,
      mastercard : /^5[1-5][0-9]{14}/,
      diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      amex      : /^3[47][0-9]{13}/,
      discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
      hipercard  : /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
      elo        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
      jcb        : /^(?:2131|1800|35\d{3})\d{11}/,       
      aura      : /^(5078\d{2})(\d{2})(\d{11})$/     
  };

  for (var flag in cards) {
      if(cards[flag].test(cardnumber)) {
          return flag;
      }
  }       

  return false;
}

function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false
  cpf = cpf.replace(/[\s.-]*/igm, '')
  if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" 
  ) {
      return false
  }
  var soma = 0
  var resto
  for (var i = 1; i <= 9; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(9, 10)) ) return false
  soma = 0
  for (var i = 1; i <= 10; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(10, 11) ) ) return false
  return true
}



yup.addMethod(yup.string, "dateCard", function(message) {	
	return yup.mixed().test("date", message || "Por favor, digite uma data válida", value => isValidDateCard(value));
});

yup.addMethod(yup.string, "card", function(message) {	
	return yup.mixed().test("card", message || "Por favor, digite um número de cartão válido", value => getCardFlag(value));
});

yup.addMethod(yup.string, "cpf", function(message) {
	// return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
	return yup.mixed().test("cpf", message || "número de CPF inválido", value => isValidCPF(value));
});



const SignupSchema = yup.object().shape({  
  
    
  cep: yup
    .string()    
    .test('validCep', 'Por favor, digite um CEP válido', 
      function(value) {
          return /^([0-9]{5}-[0-9]{3})$/.test(value);
      }),       
  endereco: yup
    .string()
    .required(),
  numero: yup
    .number()
    .required(),
  complemento: yup
    .string(),    
  bairro: yup
    .string()
    .required(),
  estado: yup
    .string()
    .required(),
  cidade: yup
    .string()
    .required(),  

});


const creditCardSchema = yup.object().shape({  


  nameCredit: yup
    .string()
    .required(),

  cpfCredit: yup
    .string()
    .cpf("Por favor, informe um CPF válido"),  

  number: yup
    .string()
    .card()
    .required(),  
  valid: yup
    .string()
    .dateCard()
    .required(),
  cvv: yup
    .string()
    .matches(/^[0-9]{3}$/, 'Por favor, digite um CVV válido') 
    .required(),   

  acceptTermsCredit: yup.bool().oneOf([true], 'O aceite dos termos é obrigatório')  

});


const debitAccountSchema = yup.object().shape({  

  nameDebit: yup
    .string()
    .required(),

  cpfDebit: yup
    .string()
    .cpf("Por favor, informe um CPF válido"),  
  banco: yup
    .string()    
    .required(),
  agencia: yup
    .number()
    .required(),
  agenciaDV: yup
    .number()
    .required(),
  conta: yup
    .number()
    .required(),
  contaDV: yup
    .number()
    .required(),   
  
  acceptTermsDebit: yup.bool().oneOf([true], 'O aceite dos termos é obrigatório')  

});




function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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

const formatValueParcela = (value) => {
  let returnValue =  new String(value).replace(",", ".")
  let returnDecimal = parseFloat(returnValue).toFixed(2);      
  return  parseFloat(returnDecimal);    
}

function formataCPF(cpf){
  //retira os caracteres indesejados...
  cpf = new String(cpf).replace(/[^\d]/g, "");

  //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}



export default function SectionPayment(props) {

  const [firstCardColor, setFirstCardColor] = useState('#484848');
  const [firstCardTextColor, setFirstCardTextColor] = useState('white');
  const [secondCardColor, setSecondCardColor] = useState('#F2F2F2');
  const [secondCardTextColor, setSecondCardTextColor] = useState('#484848');
  const [thirdCardColor, setThirdCardColor] = useState('#F2F2F2');
  const [thirdCardTextColor, setThirdCardTextColor] = useState('#484848');
  const [displayPayment, setDisplayPayment] = useState('block');
  const [displayDebit, setDisplayDebit] = useState('none');

  const [showError, setShowError] = React.useState(false);
  const [messageReturn, setMessageReturn] = React.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  })

  const [address, setAddress] = React.useState({    
    endereco: "",
    bairro: "",
    estado: "",
    cidade: ""
  })


  const { register, trigger, control, getValues, setValue, errors } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onBlur"    
  });
  
  const { register: registerCredit, trigger: triggerCredit, control: controlCredit, getValues: getValuesCredit, setValue: setValueCredit,  errors: errorsCredit } = useForm({
    resolver: yupResolver(creditCardSchema),
    mode: "onBlur"    
  });
  
  const { register: registerDebit, trigger: triggerDebit, control: controlDebit, getValues: getValuesDebit, setValue: setValueDebit, errors: errorsDebit } = useForm({
    resolver: yupResolver(debitAccountSchema),
    mode: "onBlur"    
  });
  
  React.useEffect( () => {
    console.log("setValue");

    if(props.dataSale.customer.address.postalCode != ""){
            
      setValueDebit("acceptTermsDebit", true);
      setValueCredit("acceptTermsCredit", true);

    }

    if( props.dataSale.customer.dcc.conta != "" ) {
      setFirstCardColor("#F2F2F2"); 
      setFirstCardTextColor('#484848'); 
      setSecondCardColor('#F2F2F2'); 
      setSecondCardTextColor('#484848'); 
      setThirdCardColor("#484848"); 
      setThirdCardTextColor('#FFF'); 
      setDisplayDebit('block'); 
      setDisplayPayment('none');
    }

    setValueCredit("nameCredit", props.dataSale.customer.card.name);
    setValueCredit("number", props.dataSale.customer.card.number);
    setValueCredit("valid", props.dataSale.customer.card.valid);
    setValueCredit("cvv", props.dataSale.customer.card.cvv);
    setValueCredit("cpfCredit", props.dataSale.customer.financeResponsible.document);


    setValueDebit("conta", props.dataSale.customer.dcc.conta);
    setValueDebit("contaDV", props.dataSale.customer.dcc.contaCorrenteDV);
    setValueDebit("agencia", props.dataSale.customer.dcc.agencia);
    setValueDebit("agenciaDV", props.dataSale.customer.dcc.agenciaDV);
    setValueDebit("banco", props.dataSale.customer.dcc.banco);
    setValueDebit("cpfDebit", props.dataSale.customer.financeResponsible.document);
    setValueDebit("nameDebit", props.dataSale.customer.financeResponsible.name);

    setValue("numero", props.dataSale.customer.address.number);
    setValue("complemento", props.dataSale.customer.address.complement);    
    setAddress( (prevAddress) => {
      return {
        ...prevAddress,
        cep: props.dataSale.customer.address.postalCode,
        endereco: props.dataSale.customer.address.address,
        bairro: props.dataSale.customer.address.district,
        estado: props.dataSale.customer.address.state,
        cidade: props.dataSale.customer.address.city,
      }
    });   

    let priceTransaction = parseFloat( formatValueParcela(props.plans[props.activePlan].parcelas[0].valor) +  props.plans[props.activePlan].valorMatricula );

    TagManager.dataLayer({
      dataLayer: {
        'event': 'addPaymentInfo',
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 3
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
  
  

  React.useEffect( () => {
    if(props.validationPayment){            
      validateForm();  
      // validateTeste();
      props.setIsLoading(true);
      props.setValidationPayment(false);      
    }            
  }, [props.validationPayment]);


  const validateForm = async () => {
        
    // var result = await trigger([ "name", "email", "cpf", "sex", "birthDate", "phone" ]);
    var validationForms = false;
    var validationCobranca = await trigger();

    
    if(displayPayment == "block"){      
      validationForms = await triggerCredit();
      if(!validationForms || !validationCobranca){
        props.setIsLoading(false);
        return
      } else {
        var identificationForm = getValues();
        console.log("identificationForm");    
        console.log(identificationForm);  
        
        var identificationCredit = getValuesCredit();
        console.log("identificationCredit");    
        console.log(identificationCredit);  

        const codBrand = getBrandCod(identificationCredit.number);

        props.setDataSale( prevDataSale => {
          return {  
            customer: { 
              ...prevDataSale.customer,              
              financeResponsible: {
                ...prevDataSale.customer.financeResponsible,                
                document: identificationCredit.cpfCredit,                
              },    
              address: {
                address: removeAcento(identificationForm.endereco),
                number: identificationForm.numero,
                complement: removeAcento(identificationForm.complemento),
                district: removeAcento(identificationForm.bairro),
                city: removeAcento(identificationForm.cidade),
                state: identificationForm.estado,
                postalCode: identificationForm.cep
              },   
              card: {
                number: identificationCredit.number.replace(/\s+/g, ''),
                name: identificationCredit.nameCredit,
                valid: identificationCredit.valid,
                cvv: identificationCredit.cvv,
                bandeira: codBrand,
              },
              dcc: {
                conta:"",
                contaCorrenteDV:"",
                agencia:"",
                agenciaDV:"",
                banco:""
              }                                
            }               
          }
        });  

        props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else {      
      validationForms = await triggerDebit();
      if(!validationForms || !validationCobranca){
        props.setIsLoading(false);
        return
      } else {
        var identificationForm = getValues();
        console.log("identificationForm");    
        console.log(identificationForm);  
        
        var identificationDebit = getValuesDebit();
        console.log("identificationDebit");
        console.log(identificationDebit); 
                

        
        props.setDataSale( prevDataSale => {
          return {  
            customer: { 
              ...prevDataSale.customer,              
              financeResponsible: {
                ...prevDataSale.customer.financeResponsible,
                name: removeAcento( identificationDebit.nameDebit ),
                document: identificationDebit.cpfDebit,                
              }, 
              address: {
                address: removeAcento(identificationForm.endereco),
                number: identificationForm.numero,
                complement: removeAcento(identificationForm.complemento),
                district: removeAcento(identificationForm.bairro),
                city: removeAcento(identificationForm.cidade),
                state: identificationForm.estado,
                postalCode: identificationForm.cep
              },           
              dcc: {
                conta: identificationDebit.conta,
                contaCorrenteDV: identificationDebit.contaDV,
                agencia: identificationDebit.agencia,
                agenciaDV: identificationDebit.agenciaDV,
                banco: identificationDebit.banco
              },
              card: {
                number: "",
                name: "",
                valid: "",
                cvv: "",
                bandeira:""
              }                               
            }               
          }
        });  

        props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }

    props.setIsLoading(false);    
  }

  const removeAcento = (text) => {
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    text = text.toUpperCase()
    return text;    
  }


  const getAddress = async (cep) => {    
        
    setAddress( (prevAddress) => {
      return {
        ...prevAddress,       
        endereco: "",
        bairro: "",
        estado: "",
        cidade: "",
      }
    });

    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {

        if(res.data.error){
          // setError(true);
          console.log(res.data.error);
          return
        }

        setAddress( (prevAddress) => {
          return {
            ...prevAddress,
            cep: res.data.cep,
            endereco: res.data.logradouro,
            bairro: res.data.bairro,
            estado: res.data.uf,
            cidade: res.data.localidade,
          }
        });        

        trigger(["cep", "endereco", "bairro", "estado", "cidade"]);
        
      })
      .catch((error) => {
        console.log(error);
        // setError(true);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  const getCardFlag = (cardnumber) => {
    var cardnumber = cardnumber.replace(/[^0-9]+/g, '');
  
    var cards = {
        visa      : /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard : /^5[1-5][0-9]{14}/,
        diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        amex      : /^3[47][0-9]{13}/,
        discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
        hipercard  : /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
        elo        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
        jcb        : /^(?:2131|1800|35\d{3})\d{11}/,       
        aura      : /^(5078\d{2})(\d{2})(\d{11})$/     
    };
  
    for (var flag in cards) {
        if(cards[flag].test(cardnumber)) {
            return flag;
        }
    }       
  
    return false;
  }

  const getBrandCod = (numberCard) => {
    let brandCard = getCardFlag(numberCard);
    switch (brandCard) {
      case "visa":                
        return 1;
        break;
      case "mastercard":        
        return 2;
        break;      
      case "diners":        
        return 3;
        break;  
      case "amex":        
        return 4;
        break;    
      case "discover":        
        return 8;
        break;    
      case "hipercard":        
        return 9;
        break;    
      case "elo":        
        return 6;
        break;    
      case "jcb":        
        return 7;
        break;    
      case "aura":        
        return 5;
        break;      
      default:
        return 0;        
        break    
      }
  }


  const classes = useStyles();
  return (

    <GridContainer className={classes.content} justify="center" >
      <GridItem xs={12} sm={12} md={11}>
        <Justfit
          theme="white"
          className={classes.jusfit}
        >
          <GridContainer justify='center' style={{ marginBottom: '30px', }}>

          {
              props.isMobile && (
                <>
                  <GridItem align='left' justify='center' xs={6} sm={6} md={8}>
                    <h2 style={{fontSize: '17px', fontWeight:600,color:'#484848',minWidth:'150px'}}>ESCOLHA SEU MEIO DE PAGAMENTO</h2>
                    <p style={{minWidth:'160px',color:'#484848',fontWeight:500,fontSize:'12px'}}>UNIDADE <strong>BARRETOS</strong></p>
                  </GridItem>
                  <GridItem className={classes.stepMobile} xs={6} sm={6} md={4} align='right'>
                    <img src={stepMobile3} />
                  </GridItem>
                </>

              )
            }

            <GridItem xs={12} sm={12} md={12}>
              <GridContainer justify='center' align='left'>

                <GridItem xs={12} sm={12} md={12} style={{ marginBottom: '20px' }}>
                  <h1 style={{ fontSize: '40px', fontWeight: 600, color: "#484848", maxWidth: '500px', display: props.isMobile && "none" }}>ESCOLHA SEU MEIO DE PAGAMENTO</h1>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <h1 style={{ fontSize: '14px', fontWeight: 600, color: "#484848", maxWidth: '500px', paddingBottom: '20px' }}>Selecione uma das opções de pagamento e preencha os campos abaixo</h1>
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <GridContainer justify="start" align='center' style={{ display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>

                    <button className={classes.btnCardChecked} style={{ backgroundColor: firstCardColor, color: firstCardTextColor, marginLeft: 10, marginRight: 10 }} onClick={() => { setFirstCardColor("#484848"); setFirstCardTextColor('#FFF'); setSecondCardColor('#F2F2F2'); setSecondCardTextColor('#484848'); setThirdCardColor("#F2F2F2"); setThirdCardTextColor('#484848'); setDisplayDebit('none'); setDisplayPayment('block'); }}>
                      
                      <span style={{ backgroundColor: firstCardTextColor }}></span>
                      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" style={{ marginRight: 15 }} xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <path d="M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z" fill={firstCardTextColor} />
                          <path d="M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z" fill={firstCardTextColor} />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="30.7987" height="31" fill={firstCardTextColor} transform="matrix(-1 0 0 1 30.7988 0)" />
                          </clipPath>
                        </defs>
                      </svg>

                      <h2>Cartão de Crédito</h2>
                    </button>


                    <button className={classes.btnCard} style={{ backgroundColor: secondCardColor, color: secondCardTextColor, marginLeft: 10, marginRight: 10, display: "none" }} onClick={() => { setFirstCardColor("#F2F2F2"); setFirstCardTextColor('#484848'); setSecondCardColor('#484848'); setSecondCardTextColor('#FFF'); setThirdCardColor("#F2F2F2"); setThirdCardTextColor('#484848'); setDisplayDebit('none'); setDisplayPayment('block'); }}>
                      <span style={{ backgroundColor: secondCardTextColor }}></span>
                      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" style={{ marginRight: 15 }} xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <path d="M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z" fill={secondCardTextColor} />
                          <path d="M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z" fill={secondCardTextColor} />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="30.7987" height="31" fill={secondCardTextColor} transform="matrix(-1 0 0 1 30.7988 0)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h2>Cartão de Débito</h2>
                    </button>


                    <button className={classes.btnCard} style={{ backgroundColor: thirdCardColor, color: thirdCardTextColor, marginLeft: 10, marginRight: 10, display: "none" }} onClick={() => { setFirstCardColor("#F2F2F2"); setFirstCardTextColor('#484848'); setSecondCardColor('#F2F2F2'); setSecondCardTextColor('#484848'); setThirdCardColor("#484848"); setThirdCardTextColor('#FFF'); setDisplayDebit('block'); setDisplayPayment('none'); }}>
                      <span style={{ backgroundColor: thirdCardTextColor }}></span>
                      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" style={{ marginRight: 15 }} xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <path d="M1.40008 3.75757H29.3989C30.172 3.75757 30.7988 4.38847 30.7988 5.16662V16.909H0.000125885V5.16662C0.000125885 4.38847 0.626928 3.75757 1.40008 3.75757ZM18.1993 13.1515H23.7991C24.5723 13.1515 25.1991 12.5206 25.1991 11.7424C25.1991 10.9642 24.5723 10.3333 23.7991 10.3333H18.1993C17.4262 10.3333 16.7994 10.9642 16.7994 11.7424C16.7994 12.5206 17.4262 13.1515 18.1993 13.1515ZM7.46646 13.6212C8.02421 13.6212 8.52409 13.3725 8.86642 12.981C9.20876 13.3725 9.70863 13.6212 10.2664 13.6212C11.2956 13.6212 12.1329 12.7784 12.1329 11.7424C12.1329 10.7065 11.2956 9.86366 10.2664 9.86366C9.70863 9.86366 9.20876 10.1123 8.86642 10.5039C8.52409 10.1123 8.02421 9.86366 7.46646 9.86366C6.43723 9.86366 5.5999 10.7065 5.5999 11.7424C5.5999 12.7784 6.43723 13.6212 7.46646 13.6212Z" fill={thirdCardTextColor} />
                          <path d="M30.7988 20.6666V25.8333C30.7988 26.6115 30.172 27.2424 29.3989 27.2424H1.40002C0.626867 27.2424 6.67572e-05 26.6115 6.67572e-05 25.8333V20.6666H30.7988Z" fill={thirdCardTextColor} />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="30.7987" height="31" fill={thirdCardTextColor} transform="matrix(-1 0 0 1 30.7988 0)" />
                          </clipPath>
                        </defs>
                      </svg>

                      <h2>Débito em conta</h2>
                    </button>

                  </GridContainer>
                </GridItem>

                <GridItem xs={12} sm={12} md={12} justify='center' style={{ marginBottom: '20px' }}>

                  <GridContainer justify='center'>
                    <GridItem xs={12} sm={12} md={6} style={{ marginTop: '50px', display: displayPayment }} >
                      <GridContainer justify='left' >
                        <GridItem xs={12} sm={12} md={12}>
                          <h5 style={{ color: "#484848", fontSize: '18px', fontWeight: 600, paddingTop: '50px !important', padding: 0, margin: 0, }}>Informações de Pagamento</h5>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} className={ errorsCredit.number ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Número do Cartão</h2>
                          <Controller                                                  
                            as={InputMask}
                            control={controlCredit}
                            mask="9999 9999 9999 9999"
                            name="number"     
                            type="tel"     
                            defaultValue={""}                                                                                                                   
                          />   
                          { errorsCredit.number && (                      
                            <span><ErrorOutlineIcon/><label>{errorsCredit.number.message}</label></span>                      
                            )
                          } 
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} className={ errorsCredit.valid ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Vencimento (MM/AAAA)</h2>
                          <Controller                      
                            
                            as={InputMask}
                            control={controlCredit}
                            mask="99/9999"
                            name="valid"     
                            type="tel"     
                            defaultValue={""}                                                                     
                                              
                          />                   
                          { errorsCredit.valid && (                      
                            <span><ErrorOutlineIcon/><label>{errorsCredit.valid.message}</label></span>                      
                            )
                          } 
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} className={ errorsCredit.cvv ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>                        
                          <h2>Cod. Segurança</h2>
                          <Controller                                                  
                            as={InputMask}
                            control={controlCredit}
                            mask="999"
                            name="cvv"     
                            type="tel"     
                            defaultValue={""}                                                                     
                                              
                          />  
                          { errorsCredit.cvv && (                      
                            <span><ErrorOutlineIcon/><label>{errorsCredit.cvv.message}</label></span>                      
                            )
                          } 
                          
                        </GridItem>
                        {/* <GridItem xs={12} sm={12} md={3} className={classes.formInputItem}>
                          <h2>Nº de parcelas</h2>
                          <input></input>
                        </GridItem> */}
                        <GridItem xs={12} sm={12} md={6} className={ errorsCredit.nameCredit ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2 >Nome impresso no Cartão</h2>
                          <input ref={registerCredit} name="nameCredit" id="nameCredit"></input>
                          { errorsCredit.nameCredit && (                      
                            <span><ErrorOutlineIcon/><label>{errorsCredit.nameCredit.message}</label></span>                      
                            )
                          }
                        </GridItem>                        
                        <GridItem xs={12} sm={12} md={6} className={ errorsCredit.cpfCredit ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>CPF do Titular do Cartão</h2>                  
                          <Controller                      
                            
                            as={InputMask}
                            control={controlCredit}
                            mask="999.999.999-99"
                            name="cpfCredit"     
                            type="tel"     
                            defaultValue={""}                                                                     
                                              
                          />                   
                          { errorsCredit.cpfCredit && (                      
                            <span><ErrorOutlineIcon/><label>{errorsCredit.cpfCredit.message}</label></span>                      
                            )
                          } 
                        </GridItem>                        
                        
                        <GridItem xs={12} sm={12} md={12} className={classes.checkboxItemPayment} style={{ marginTop: 20 }}>
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                            <label className={classes.containerCheckboxT}>
                              <input type='checkbox' name="acceptTermsCredit" ref={registerCredit}></input>
                              <span className={classes.checkmarkT}  ></span>
                            </label>                            
                            <h2>Li e aceito o <a href="https://www.justfit.com.br/wp-content/themes/marty_wp/assets/images/Regulamento_Interno_2019.pdf" target="_blank">regulamento interno</a>, o <a href="https://justfit.com.br/wp-content/uploads/2020/06/TERMO-DE-RESPONSABILIDADE-ALUNOS-PREVEN%C3%87%C3%95ES-E-ORIENTA%C3%87%C3%95ES-COVID-19.pdf" target="_blank">termo de responsabilidade</a> e o termo de adesão (<a href="https://www.justfit.com.br/wp-content/themes/marty_wp/assets/images/Termo_Just.pdf" target="_blank">JUST</a> ou <a href="https://www.justfit.com.br/wp-content/uploads/2019/07/Termo-de-matricula-Fit-Plus-com-taxa-cancelamento.pdf" target="_blank">FIT PLUS</a>)</h2>
                          </div>
                          { errorsCredit.acceptTermsCredit && (                      
                            <span><ErrorOutlineIcon/><label>{errorsCredit.acceptTermsCredit.message}</label></span>                      
                            )
                          }   
                        </GridItem>
                        
                      </GridContainer>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6} style={{ marginTop: '50px', display: displayDebit }} >
                      <GridContainer justify='left' >
                        <GridItem xs={12} sm={12} md={12}>
                          <h5 style={{ color: "#484848", fontSize: '18px', fontWeight: 600, paddingTop: '50px !important', padding: 0, margin: 0, }}>Informações de Pagamento</h5>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} className={ errorsDebit.nameDebit ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2 >Nome completo</h2>
                          <input ref={registerDebit} name="nameDebit" id="nameDebit"></input>
                          { errorsDebit.nameDebit && (                      
                            <span><ErrorOutlineIcon/><label>{errorsDebit.nameDebit.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} className={ errorsDebit.cpfDebit ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>CPF</h2>                          
                          <Controller                      
                            
                            as={InputMask}
                            control={controlDebit}
                            mask="999.999.999-99"
                            name="cpfDebit"     
                            type="tel"     
                            defaultValue={""}                                                                     
                                              
                          />  
                          { errorsDebit.cpfDebit && (                      
                            <span><ErrorOutlineIcon/><label>{errorsDebit.cpfDebit.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} className={ errorsDebit.banco ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Nome do banco</h2>                          
                          <select name="banco" id="banco" ref={registerDebit}>
                            <option value="1">Banco do Brasil</option>
                            <option value="341">Itaú</option>
                            <option value="237">Bradesco</option>
                            <option value="33">Santander</option>
                            
                          </select>
                          { errorsDebit.banco && (                      
                            <span><ErrorOutlineIcon/><label>{errorsDebit.banco.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={9} className={ errorsDebit.agencia ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Agência</h2>
                          <input ref={registerDebit} name="agencia" id="agencia" type="tel"></input>
                          { errorsDebit.agencia && (                      
                            <span><ErrorOutlineIcon/><label>{errorsDebit.agencia.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} className={ errorsDebit.agenciaDV ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Dígito</h2>
                          <input ref={registerDebit} name="agenciaDV" id="agenciaDV" type="tel"></input>
                          { errorsDebit.agenciaDV && (                      
                            <span><ErrorOutlineIcon/><label>{errorsDebit.agenciaDV.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={9} className={ errorsDebit.conta ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Conta</h2>
                          <input ref={registerDebit} name="conta" id="conta" type="tel"></input>
                          { errorsDebit.conta && (                      
                            <span><ErrorOutlineIcon/><label>{errorsDebit.conta.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} className={ errorsDebit.contaDV ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Dígito</h2>
                          <input ref={registerDebit} name="contaDV" id="contaDV" type="tel"></input>
                          { errorsDebit.contaDV && (                      
                            <span><ErrorOutlineIcon/><label>{errorsDebit.contaDV.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} className={classes.checkboxItemPayment} style={{ marginTop: 20 }}>
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                            <label className={classes.containerCheckboxT}>
                              <input type='checkbox' name="acceptTermsDebit" ref={registerDebit}></input>
                              <span className={classes.checkmarkT}  ></span>
                            </label>
                            <h2>Li e aceito o contrato, o <a>termo de adesão</a> e o <a>regulamento interno</a>.</h2>
                          </div>
                          { errorsDebit.acceptTermsDebit && (                      
                            <span><ErrorOutlineIcon/><label>{errorsDebit.acceptTermsDebit.message}</label></span>                      
                            )
                          }     
                        </GridItem>
                      </GridContainer>
                    </GridItem>


                    <GridItem xs={12} sm={12} md={6} style={{ marginTop: '50px' }}>
                      <GridContainer justify='center' >
                        <GridItem xs={12} sm={12} md={12}>
                          <h5 style={{ color: "#484848", fontSize: '18px', fontWeight: 600, paddingTop: '50px !important', padding: 0, margin: 0, }}>Endereço de cobrança</h5>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={9} className={ errors.cep ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2 >CEP</h2>
                          
                          {/* <Controller
                            as={InputMask}
                            control={control}
                            mask="99999-999"
                            name="cep"
                            type="tel"
                            onBlur={(e) => {
                              console.log(e.target.value);                              
                            }}
                            defaultValue={""}                            
                          /> */}

                          <InputMask
                            name="cep"
                            type="tel"
                            mask={"99999-999"}
                            maskPlaceholder={""}                            
                            inputRef={register()}
                            defaultValue={props.dataSale.customer.address.postalCode}
                            onBlur={(e) => {
                              // console.log(e.target.value);   
                              console.log(getValues("cep"));  
                              getAddress(getValues("cep"));
                            }}
                          />
                          { errors.cep && (                      
                            <span><ErrorOutlineIcon/><label>{errors.cep.message}</label></span>                      
                            )
                          }   
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} className={ errors.estado ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>UF</h2>
                          <input ref={register} name="estado" id="estado" value={address.estado}></input>
                          { errors.estado && (                      
                            <span><ErrorOutlineIcon/><label>{errors.estado.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} className={ errors.endereco ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Logradouro</h2>
                          <input ref={register} name="endereco" id="endereco" value={address.endereco}></input>
                          { errors.endereco && (                      
                            <span><ErrorOutlineIcon/><label>{errors.endereco.message}</label></span>                      
                            )
                          }
                        </GridItem>                        
                        <GridItem xs={12} sm={12} md={6} className={ errors.bairro ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Bairro</h2>
                          <input ref={register} name="bairro" id="bairro" value={address.bairro}></input>
                          { errors.bairro && (                      
                            <span><ErrorOutlineIcon/><label>{errors.bairro.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} className={ errors.cidade ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Cidade</h2>
                          <input ref={register} name="cidade" id="cidade" value={address.cidade}></input>
                          { errors.cidade && (                      
                            <span><ErrorOutlineIcon/><label>{errors.cidade.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} className={ errors.numero ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Número</h2>
                          <input ref={register} name="numero" id="numero" type="tel"></input>
                          
                          { errors.numero && (                      
                            <span><ErrorOutlineIcon/><label>{errors.numero.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={9} className={ errors.complemento ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Complemento</h2>
                          <input ref={register} name="complemento" id="complemento"></input>
                          { errors.complemento && (                      
                            <span><ErrorOutlineIcon/><label>{errors.complemento.message}</label></span>                      
                            )
                          }
                        </GridItem>
                      </GridContainer>
                    </GridItem>

                  </GridContainer>

                </GridItem>


              </GridContainer>
            </GridItem>

          </GridContainer>

        </Justfit>

      </GridItem>
    </GridContainer>

  );
}
