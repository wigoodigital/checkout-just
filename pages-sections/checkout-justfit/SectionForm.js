/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
import Check from "@material-ui/icons/Check";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";

import googleIcon from "assets/img/google-icon.png";
import facebookIcon from "assets/img/facebook-icon.png";

import stepMobile2 from "assets/img/mobilestep2.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/justfit/justfit.js";
import Justfit from "../../components/Justfit/justfit";
import PlanHorizontal from "../../components/Justfit/JustfitPlans/PlanHorizontal";
import { Grid } from "@material-ui/core";

// import MaskedInput from 'react-text-mask';
import InputMask from "react-input-mask";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { setLocale } from 'yup';

import TagManager from 'react-gtm-module';
import { bool } from "prop-types";


setLocale({  
  mixed: {
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'deve ser um número';
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

function isValidPhone(phone){
  return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(phone);
}

function isValidDate(dateString) {
  // return /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test(date);

  // First check for the pattern
  if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
  return false;

  // Parse the date parts to integers
  var parts = dateString.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if(year < 1000 || year > 3000 || month == 0 || month > 12)
    return false;

  var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  // Adjust for leap years
  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}

function isMaiorIdade(d1){  
  var parts = d1.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);
  // d1 = new Date(month + "/" + day + "/" + year);
  d1 = new Date(year, month - 1, day);
  var d2 = new Date();
  var diff = d2.getTime() - d1.getTime();
  var idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  if(idade >= 18){
    return true
  } else {
    return false
  }
}

yup.addMethod(yup.string, "cpf", function(message) {
	// return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
	return yup.mixed().test("cpf", message || "número de CPF inválido", value => isValidCPF(value));
});

yup.addMethod(yup.string, "phone", function(message) {	
	return yup.mixed().test("phone", message || "número de celular inválido", value => isValidPhone(value));
});

yup.addMethod(yup.string, "dateNasc", function(message) {	
  return yup.mixed().test("dateNasc", message || "Por favor, digite uma data válida", value => isValidDate(value));  
});


const SignupSchema = yup.object().shape({  
  cpf: yup
    .string()
    .cpf("Por favor, informe um CPF válido"),  
  name: yup
    .string()
    .required(),   
  sex: yup
    .string()
    .required(),  
  email: yup
    .string()
    .required()    
    .email(),  
  phone: yup
    .string()
    .phone("Por favor, informe um número de celular válido"),  
  birthDate: yup   
    .string()   
    .dateNasc(),
    // .dateNasc()
    // .test('maiorIdade', 'Para continuar, você deve ter no mínimo 18 anos', 
    //   function(value) {
    //       return isMaiorIdade(value);
    //   }),  
      
  cpfResp: yup
    .string()
    .cpf("Por favor, informe um CPF válido"),  
  nameResp: yup
    .string()
    .required(),     
  emailResp: yup
    .string()
    .required()    
    .email(),  
  phoneResp: yup
    .string()
    .phone("Por favor, informe um número de celular válido"),  
    
  
  
  // optinPhone: yup.bool().oneOf([true], 'O aceite dos termos é obrigatório'),    
  // optinEmail: yup.bool().oneOf([true], 'O aceite dos termos é obrigatório'),    

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


const useStyles = makeStyles(styles);

export default function SectionForm(props) {
  const [showError, setShowError] = React.useState(false);
  const [menorIdade, setMenorIdade] = React.useState(true);
  const [messageReturn, setMessageReturn] = React.useState({
    code: "000",
    msg: "Erro ao enviar dados. Tente mais tarde"
  })
  const classes = useStyles();


  const { register, trigger, control, getValues, setValue, errors } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onBlur"    
  });




  React.useEffect( () => {
    console.log("setValue");

    setValue("optinPhone", true);
    setValue("optinEmail", true);

    if( isMaiorIdade(props.dataSale.customer.birthDate) || props.dataSale.customer.birthDate == "" ){
      setMenorIdade(false);
    }

    setValue("name", props.dataSale.customer.name);
    setValue("email", props.dataSale.customer.email);
    setValue("cpf", props.dataSale.customer.document);
    setValue("sex", props.dataSale.customer.sex);
    setValue("birthDate", props.dataSale.customer.birthDate);
    setValue("phone", props.dataSale.customer.phones[0].number);

    setValue("cpfResp", props.dataSale.customer.financeResponsible.document);
    setValue("nameResp", props.dataSale.customer.financeResponsible.name);
    setValue("emailResp", props.dataSale.customer.financeResponsible.email);
    setValue("phoneResp", props.dataSale.customer.financeResponsible.phone);      

    let priceTransaction = parseFloat( formatValueParcela(props.plans[props.activePlan].parcelas[0].valor) +  props.plans[props.activePlan].valorMatricula );
    
    TagManager.dataLayer({
      dataLayer: {
        'event': 'addPersonalInfo',
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 2
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
  
  
  React.useEffect( () => {
    if(props.validationForm){            
      validateForm();       
      props.setIsLoading(true);
      props.setValidationForm(false);      
    }            
  }, [props.validationForm]);



  const validateForm = async () => {
    // var result = await trigger();

    
    // var result = await trigger([ "name", "email", "cpf", "sex", "birthDate", "phone" ]);

    setDataLead(getValues(), false, false);
    

    var result = await trigger();
    if(result){

      var identificationForm = getValues();
      console.log("identificationForm");    
      console.log(identificationForm);    

      var resultCpf = await validateCpf(identificationForm.cpf);
      console.log("resultCpf");
      console.log(resultCpf);
      if(resultCpf){
        var resultEmail = await validateEmail(identificationForm.email);
        console.log("resultEmail");
        console.log(resultEmail);

        if(resultEmail){        


          props.setDataSale( prevDataSale => {
            return {  
              customer: { 
                ...prevDataSale.customer,
                name:  removeAcento( identificationForm.name ),
                email: identificationForm.email,
                document: identificationForm.cpf.replace(/[^\d]+/g,''),   
                sex: identificationForm.sex,
                birthDate: identificationForm.birthDate,
                financeResponsible: {
                  ...prevDataSale.customer.financeResponsible,
                  name: menorIdade ? removeAcento( identificationForm.nameResp ) : removeAcento( identificationForm.name ) ,
                  document: menorIdade ? identificationForm.cpfResp.replace(/[^\d]+/g,'') : identificationForm.cpf.replace(/[^\d]+/g,'') , 
                  email: menorIdade ? identificationForm.emailResp : identificationForm.email ,
                  phone: menorIdade ? identificationForm.phoneResp.replace(/\s+/g, '') : identificationForm.phone.replace(/\s+/g, '')
                }, 
                phones: [
                  {
                    type: "cellphone",
                    number: identificationForm.phone.replace(/\s+/g, ''),  
                  }
                ],                               
              }               
            }
          });  

          props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
          
        } else {
          // Error Email
          setDataLead(getValues(), false, true);
        }
      } else {
        //Error CPF
        setDataLead(getValues(), true, false);

      }

    }
    props.setIsLoading(false);
    console.log(result);    
  }

  const setDataLead = async (dataSend, pendenciaCpf, pendenciaEmail) => {    

    const lead = {
      ...dataSend,     
      cpf: formataCPF(dataSend.cpf),  
      unidade: props.activeUnidade,
      plano: props.plans[props.activePlan].descricao,
      finalizadoVenda: false,
      pendenciaCpf: pendenciaCpf ? pendenciaCpf : false,
      pendenciaEmail: pendenciaEmail ? pendenciaEmail : false,
    }

    console.log(lead);

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    await axios.post('/checkout/api/setLeadTelevendas.php', lead)
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
  
  // const validateCpf = async (cpf) => {    
  async function validateCpf(cpf) {    

    let result = false;
    result = await axios.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/isValidaCpfValue?cpf=${cpf}&limit=50.00`)
      .then(res => {
        console.log(res);        
        if(res.data.code !== "0"){   
          setMessageReturn( prev => {
            return {
              code: res.data.code,
              msg: res.data.msg
            }
          });       
          setShowError(true);
          return false;
        } else {          
          return true;
        }
        
      })
      .catch((error) => {
        console.log(error);
        setShowError(true);
        return false;
      })
      return result;
  };
  
  async function validateEmail(email) {      
    let result = false;
    result = await axios.post(`https://admin.justfit.com.br/app.justfit/api/LoadPersonalOnline/GetByEmailValue?email=${email}&limit=50.00`)
      .then(res => {
        console.log(res);
        if(res.data.code !== "0"){
          setMessageReturn( prev => {
            return {
              code: res.data.code,
              msg: res.data.msg
            }
          });  
          setShowError(true);

          return false;
        } else {          
          return true;
        }
        
      })
      .catch((error) => {
        console.log(error);
        setShowError(true);
        return false;
      })
      return result;
  };

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


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowError(false);
  };


  return (
      
      <GridContainer className={classes.content} justify="center" align='center' >        
        <Snackbar open={showError} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {messageReturn.msg}
          </Alert>
        </Snackbar>
        <GridItem xs={12} sm={10} md={10} >
          <Justfit
            theme="white"
            className={classes.jusfit}
          >
          <GridContainer justify='center' align='left'>


            {
              props.isMobile && (
                <>
                  <GridItem align='left' justify='center' xs={6} sm={6} md={8}>
                    <h2 style={{fontSize: '17px', fontWeight:600,color:'#484848',minWidth:'160px'}}>IDENTIFIQUE-SE PARA CONTINUAR</h2>
                    <p style={{minWidth:'160px',color:'#484848',fontWeight:500,fontSize:'12px'}}>UNIDADE <strong>BARRETOS</strong></p>
                  </GridItem>
                  <GridItem className={classes.stepMobile} xs={6} sm={6} md={4} align='right'>
                    <img src={stepMobile2} />
                  </GridItem>
                </>

              )
            }
            

            <GridItem xs={12} sm={12} md={10} style={{marginBottom:'0px'}}>
            {/* <h1 style={{fontSize:'40px',fontWeight:600,color:"#484848",maxWidth:'500px'}}>FAÇA LOGIN PARA CONTINUAR</h1> */}
            <h1 style={{fontSize:'40px',fontWeight:600,color:"#484848",maxWidth:'500px', display: props.isMobile && "none" }}>IDENTIFIQUE-SE PARA CONTINUAR</h1>
            </GridItem>

            {/* <GridItem xs={11} sm={11} md={11}>              

              <GridContainer justify='left' align='left'>
                <GridItem xs={12} sm={12} md={12} >
                  <GridContainer justify='center'>
                    <GridItem xs={12} sm={12} md={5} >
                      <button className={classes.btnFacebook}>
                      <img src={facebookIcon} />
                          <h2>LOGAR COM FACEBOOK</h2>
                      </button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1} className={classes.divOu}>
                      <h2 style={{fontSize:'15px',fontWeight:400,color:'#D8D8D8'}}>ou</h2>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <button className={classes.btnGoogle} style={{backgroundColor:'#f2f2f2'}}>
                          <img src={googleIcon}  />
                          <h2>LOGIN COM GOOGLE</h2>
                      </button>
                    </GridItem>
                  </GridContainer>
                </GridItem>

              </GridContainer>

            </GridItem> */}

            

            <GridItem xs={12} sm={12} md={12} style={{marginBottom:'20px'}}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={10}> 
                  {/* <h5 style={{color:"#484848",fontSize:'15px',fontWeight:600,paddingTop:'50px',}}>Preencha os campos abaixo para se cadastrar</h5> */}
                  <h5 style={{color:"#484848",fontSize:'15px',fontWeight:600,paddingTop:'0px',}}>Preencha os campos abaixo para se cadastrar</h5>
              </GridItem>

              

              <GridContainer justify='left' xs={12} sm={12} md={10} >
                  <GridItem xs={12} sm={12} md={6} className={ errors.name ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                    <h2 >Nome Completo</h2>
                    <input ref={register} name="name" id="name"></input>                      
                    { errors.name && (                      
                      <span><ErrorOutlineIcon/><label>{errors.name.message}</label></span>                      
                      )
                    }
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={ errors.email ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                    <h2>E-mail</h2>                  
                    <input name="email" id="email" type="email" ref={register}></input>                      
                    { errors.email && (                      
                      <span><ErrorOutlineIcon/><label>{errors.email.message}</label></span>                      
                      )
                    } 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={ errors.phone ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                    <h2>Celular</h2>                    

                    <Controller
                      as={InputMask}
                      control={control}
                      mask="(99) 99999-9999"
                      name="phone"
                      type="tel"
                      defaultValue={""}
                    />

                    { errors.phone && (                      
                      <span><ErrorOutlineIcon/><label>{errors.phone.message}</label></span>                      
                      )
                    } 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={ errors.cpf ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                    <h2>CPF</h2>                    
                    <Controller                      
                      
                      as={InputMask}
                      control={control}
                      mask="999.999.999-99"
                      name="cpf"     
                      type="tel"     
                      defaultValue={""}                                                                     
                                        
                    />                   
                    { errors.cpf && (                      
                      <span><ErrorOutlineIcon/><label>{errors.cpf.message}</label></span>                      
                      )
                    } 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={ errors.sex ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                    <h2>Sexo</h2>
                    {/* <input ref={register} name="sex" id="sex"></input>                       */}
                    <select name="sex" id="sex" ref={register}>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>                      
                    </select>
                    { errors.sex && (                      
                      <span><ErrorOutlineIcon/><label>{errors.sex.message}</label></span>                      
                      )
                    } 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} className={ errors.birthDate ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                    <h2>Data de nascimento</h2>
                    {/* <input ref={register} name="birthDate" id="birthDate"></input>                       */}

                    <InputMask
                        name="birthDate"
                        type="tel"
                        mask="99/99/9999"
                        maskPlaceholder={""}                            
                        inputRef={register()}
                        defaultValue={props.dataSale.customer.birthDate}
                        onBlur={(e) => {                          
                          console.log(getValues("birthDate")); 
                          console.log(isMaiorIdade(getValues("birthDate")));

                          if( !isMaiorIdade(getValues("birthDate")) ){                            
                            setMenorIdade(true);
                            setValue("cpfResp", "");
                            setValue("nameResp", "");
                            setValue("emailResp", "");
                            setValue("phoneResp", "");    
                          } else {
                            setMenorIdade(false);
                            setValue("cpfResp", getValues("cpf"));
                            setValue("nameResp", getValues("name"));
                            setValue("emailResp", getValues("email"));
                            setValue("phoneResp", getValues("phone"));     
                          }

                        }}
                      />

                    {/* <Controller
                      as={InputMask}
                      control={control}
                      mask="99/99/9999"
                      name="birthDate"
                      type="tel"
                      defaultValue={""}     
                    /> */}
                    { errors.birthDate && (                      
                      <span><ErrorOutlineIcon/><label>{errors.birthDate.message}</label></span>                      
                      )
                    }      
                    {
                      menorIdade && (
                        <span><ErrorOutlineIcon/><label>Identificamos que você é menor de idade. Insira abaixo os dados do seu responsável para continuar</label></span>                                 
                      )
                    }
                    
                  </GridItem>
                  

                  {
                    menorIdade && (
                      <>
                        <GridItem xs={12} sm={12} md={10}> 
                          {/* <h5 style={{color:"#484848",fontSize:'15px',fontWeight:600,paddingTop:'50px',}}>Preencha os campos abaixo para se cadastrar</h5> */}
                          <h5 style={{color:"#484848",fontSize:'15px',fontWeight:600,paddingTop:'0px',}}>Preencha os campos abaixo com as informações do seu responsável legal</h5>
                        </GridItem>
                        
                        <GridItem xs={12} sm={12} md={6} className={ errors.nameResp ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>                    
                          <h2 >Nome Completo</h2>
                          <input ref={register} name="nameResp" id="nameResp"></input>                      
                          { errors.nameResp && (                      
                            <span><ErrorOutlineIcon/><label>{errors.nameResp.message}</label></span>                      
                            )
                          }
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} className={ errors.cpfResp ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>CPF</h2>                    
                          <Controller                      
                            
                            as={InputMask}
                            control={control}
                            mask="999.999.999-99"
                            name="cpfResp"     
                            type="tel"     
                            defaultValue={""}                                                                     
                                              
                          />                   
                          { errors.cpfResp && (                      
                            <span><ErrorOutlineIcon/><label>{errors.cpfResp.message}</label></span>                      
                            )
                          } 
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} className={ errors.emailResp ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>E-mail</h2>                  
                          <input name="emailResp" id="emailResp" type="email" ref={register}></input>                      
                          { errors.emailResp && (                      
                            <span><ErrorOutlineIcon/><label>{errors.emailResp.message}</label></span>                      
                            )
                          } 
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} className={ errors.phoneResp ? classes.formInputItem + " " + classes.formInputItemError : classes.formInputItem }>
                          <h2>Celular</h2>                    

                          <Controller
                            as={InputMask}
                            control={control}
                            mask="(99) 99999-9999"
                            name="phoneResp"
                            type="tel"
                            defaultValue={""}
                          />

                          { errors.phoneResp && (                      
                            <span><ErrorOutlineIcon/><label>{errors.phoneResp.message}</label></span>                      
                            )
                          } 
                        </GridItem>
                  
                      </>
                    )
                  }
                  

              </GridContainer>
                  <GridItem xs={12} sm={12} md={10} className={classes.checkboxItem} style={{ marginTop: "25px" }}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems:'center',margin:0,padding:0}}>
                    <label className={classes.containerCheckboxT}>
                        <input type='checkbox' name="optinPhone" ref={register}></input>
                        <span className={classes.checkmarkT}  ></span>
                      </label>
                    <h2>Aceito receber notícias e comunicados da JustFit por SMS, Whatsapp e Ligação.</h2>
                    </div>
                    { errors.optinPhone && (                      
                      <span><ErrorOutlineIcon/><label>{errors.optinPhone.message}</label></span>                      
                      )
                    }                     
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10} className={classes.checkboxItem}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems:'center',margin:0,padding:0}}>
                            <label className={classes.containerCheckboxT}>
                        <input type='checkbox' name="optinEmail" ref={register} selected></input>
                        <span className={classes.checkmarkT}  ></span>
                      </label>
                    <h2>Aceito receber notícias e comunicados da JustFit por Newsletter.</h2>
                    </div>
                    { errors.optinEmail && (                      
                      <span><ErrorOutlineIcon/><label>{errors.optinEmail.message}</label></span>                      
                      )
                    } 
                  </GridItem>              
            </GridContainer>
          </GridItem>

          </GridContainer>
          
          </Justfit>
        
        </GridItem>
      </GridContainer>
      
       
      
  );
}
