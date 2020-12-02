import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
import Email from "@material-ui/icons/Email";
import EventIcon from '@material-ui/icons/Event';
import Favorite from "@material-ui/icons/Favorite";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import FormHelperText from '@material-ui/core/FormHelperText'; 

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import Grow from '@material-ui/core/Grow';

import FieldsCpf from "pages-sections/checkout/identification/FieldsCpf.js";
import FieldsPersonalData from "pages-sections/checkout/identification/FieldsPersonalData.js";

import InputMask from "react-input-mask";
import MaskedInput from 'react-text-mask';
import PropTypes, { string } from 'prop-types';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { setLocale } from 'yup';

import TagManager from 'react-gtm-module'

import checkoutStyle from "assets/jss/nextjs-material-kit-pro/pages/checkoutSections/checkoutStyle.js";

import city from "assets/img/examples/city.jpg";

const useStyles = makeStyles(checkoutStyle);

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}      
      mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]}
      placeholderChar={'\u2007'}
      guide={false}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};


function PhoneMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}      
      mask={['(', /[1-9]/, /[0-9]/, ')', ' ', /[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
      placeholderChar={'\u2000'}
      guide={false}
      showMask
    />
  );
}

PhoneMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function DateMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      guide={false}
      showMask
    />
  );
}

DateMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function CEPMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/]}
      placeholderChar={'\u2000'}
      guide={false}
      showMask
    />
  );
}

CEPMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};


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


const regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/gm;
function cpfValidate(cpf) {
	console.log("Validatring", cpf);
	return cpf.length > 10
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
  nome: yup
    .string()
    .required(),  
  email: yup
    .string()
    .required()    
    .email(),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], "Email divergente ao inserido acima"),
  telefone: yup
    .string()
    .phone("Por favor, informe um número de celular válido"),
  confirmTelefone: yup
    .string()
    .oneOf([yup.ref('telefone'), null], "Celular divergente ao inserido acima"),         
  dataNascimento: yup   
    .string()   
    .dateNasc()
    .test('maiorIdade', 'Para continuar, você deve ter no mínimo 18 anos', 
      function(value) {
          return isMaiorIdade(value);
      }),    
    
  // dataNascimento: yup
  //   .string()
  //   .maiorIdade(),   
  optinSms: yup.bool().oneOf([true], 'Esta opção é obrigatória'),
  optinEmail: yup.bool().oneOf([true], 'Esta opção é obrigatória'),
  optinTelegram: yup.bool().oneOf([true], 'Esta opção é obrigatória'),
  aceiteTermos: yup.bool().oneOf([true], 'O aceite dos termos é obrigatório'),

  
  
  cep: yup
    .string()
    .required(),
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

  // receberContatoEmail: yup.boolean().oneOf([true],'aceite obrigatório'),
  // receberContatoSMS: yup.boolean().oneOf([true],'aceite obrigatório'),
  // receberContatoWhatsApp: yup.boolean().oneOf([true],'aceite obrigatório')
    

});



export default function SectionIdentification(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const { register, trigger, handleSubmit, getValues, errors } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onBlur"
    // mode: "onChange"
  });
  const onSubmit = data => {
    console.log(data);
    // alert(JSON.stringify(data, null));
  };


  useEffect(() => {    
    // history.pushState({}, null, "/checkout/identification");
    TagManager.dataLayer({
      dataLayer: {
        event: "identificationView",
        userId: '001',
        userProject: 'project',
        page: 'home'
      },          
    })
    
    TagManager.dataLayer({
      dataLayer: {
        'event': 'checkout',
        'ecommerce': {
          'checkout': {
            'actionField': {'step': 1},
            'products': [{
                'name': 'Plano Anual Start',
                'id': '1',
                'price': '478.80',
                'brand': 'Clicou Personal',
                'category': 'Atendimento online',                
                'quantity': 1
            }]
          }
        }        
      },          
    })
  }, []);


  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const [isAluno, setIsAluno] = React.useState(false);
  const [activeForm, setActiveForm] = React.useState(0); 
  const [activeField, setActiveField] = React.useState("cpf");
  const [isDisableNext, setIsDisableNext] = React.useState(true);  
  const [error, setError] = useState(false);

  const handleNext = async (type) => {

    console.log(activeField);
    var result = await trigger(activeField)
    console.log(result);

    var identificationForm = getValues();

    
    if(result) { 
      console.log(getValues());
      if(activeForm  == 2){
        var dataNascimentoSplit = identificationForm.dataNascimento.split("/"); 
        var day = parseInt(dataNascimentoSplit[0], 10);
        var month = parseInt(dataNascimentoSplit[1], 10);
        var year = parseInt(dataNascimentoSplit[2], 10);
        var d1 = new Date(year, month - 1, day);        
        var d2 = new Date();
        var diff = d2.getTime() - d1.getTime();
        var idadeUser = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));       
        props.setDataSale( prevDataSale => {
          return {  
            customer: {     
              ...prevDataSale.customer,            
              name: identificationForm.nome.toUpperCase(),
              birthDate: dataNascimentoSplit[2] + "-" + dataNascimentoSplit[1] + "-" + dataNascimentoSplit[0],
              email: identificationForm.email,
              document: identificationForm.cpf.replace(/[^\d]+/g,''), 
              phones: [
                {
                    type: "cellphone",
                    number: identificationForm.telefone
                }
              ],
              address: {
                address: identificationForm.endereco,
                number: identificationForm.numero,
                complement: identificationForm.complemento,
                district: identificationForm.bairro,
                city: identificationForm.cidade,
                state: identificationForm.estado,
                postalCode: identificationForm.cep
              },
              financeResponsible:{                
                name: identificationForm.nome,
                document: identificationForm.cpf, 
                email: identificationForm.email,
                phone: identificationForm.telefone,
                active: true
              },
              anamnese: {
                ...prevDataSale.customer.anamnese,
                idade: idadeUser,
                optinSms: identificationForm.optinSms,
                optinEmail: identificationForm.optinEmail,
                optinTelegram: identificationForm.optinTelegram,
                aceiteTermos: identificationForm.aceiteTermos
              }              
            }         
          }
        });    

        props.setStepCheckout(1);
      }else {        
        setActiveForm((prevActiveStep) => prevActiveStep + 1);
        handleFieldActive(activeForm + 1);                
      }
    }
        

  };

  const handleBack = (type) => {

    if(activeForm !== 0){
      setActiveForm((prevActiveStep) => prevActiveStep - 1);  
      handleFieldActive(activeForm - 1); 
    }

  };

  const handleFocus = (event) => {
    

    if(event.target.value == ""){      
      event.target.selectionStart = 0;
      event.target.selectionEnd = 0;      
    } else {
      event.target.select();      
    }
    
  };


  const handleFieldActive = (step) => {

    console.log("handleFieldActive");

    switch (step) {
      case 0:
        // setActiveField("first");
        setActiveField("cpf");
        break;
      case 1:
        setActiveField(["nome","email", "confirmEmail", "telefone", "confirmTelefone","dataNascimento", "optinSms", "optinEmail", "optinTelegram", "aceiteTermos" ]);
        break;      
      case 2:
        setActiveField(["cep","endereco","numero", "complemento","bairro", "estado", "cidade"]);
        break;      
      default:
        setActiveField("cpf");
        break;
    }

    console.log(step);
    // console.log(activeField);

  };

  
  
  const [identification, setIdentification] = React.useState({
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",

    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    estado: "",
    cidade: "",

    receberContatoEmail: "",
    receberContatoSMS: "",
    receberContatoWhatsApp: ""

  });



  const fetchData = async (event) => {    
    setError(false);
    let cep = event.target.value
    setIdentification( (prevIdentification) => {
      return {
        ...prevIdentification,       
        endereco: "",
        bairro: "",
        estado: "",
        cidade: "",
      }
    });

    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {

        if(res.data.error){
          setError(true);
          return
        }

        setIdentification( (prevIdentification) => {
          return {
            ...prevIdentification,
            cep: res.data.cep,
            endereco: res.data.logradouro,
            bairro: res.data.bairro,
            estado: res.data.uf,
            cidade: res.data.localidade,
          }
        });
        // console.log(res.data.cliente);     
        
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        // setLoading(false);
      });
  };




  const classes = useStyles();
  return (
    <div className="cd-section" >
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " " + classes.section}
        // style={{ backgroundImage: `url(${city})` }}
        // style={{ backgroundColor: "#ffffff" }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            {/* <GridItem xs={12} sm={12} md={8} className={classes.mlAuto}> */}
            <Grow 
              in={activeForm === 0 || activeForm === 2}
              style={{ transformOrigin: '0 0 0', display: activeForm === 0 || activeForm === 2 ? "block" : "none" }}
              {...(activeForm === 0 || activeForm === 2 ? { timeout: 1000 } : {})}
            >

              <GridItem xs={12} sm={12} md={5}>
                <Grow 
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(true ? { timeout: 1000 } : {})}
                >
                  <Card className={classes.card1}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <CardHeader
                      contact
                      color="primary"
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Identificação</h4>
                    </CardHeader>

                    <Grow 
                      in={activeForm === 0}
                      style={{ transformOrigin: '0 0 0', display: activeForm === 0 ? "block" : "none" }}
                      {...(activeForm === 0 ? { timeout: 1000 } : {})}
                    >

                      <CardBody>
                        <GridContainer justify="center"> 
                          <GridItem xs={12} sm={8} md={8}>

                            <CustomInput
                              labelText="CPF"
                              labelError={errors.cpf && errors.cpf.message}
                              id="cpf"  
                              error={errors.cpf ? true : false}                                                                          
                              formControlProps={{
                                fullWidth: true
                              }}                            
                              inputProps={{
                                type: "tel",
                                name: "cpf",
                                inputRef: register, 
                                onClick: handleFocus,
                                onBlur: handleFocus,
                                inputComponent: TextMaskCustom,
                                startAdornment: (
                                  <InputAdornment position="start"> 
                                    <AssignmentInd className={classes.inputIconsColor} />
                                  </InputAdornment>
                                ) 
                              }}                          
                            />     

                          </GridItem>   
                        </GridContainer>                 
                    
                      </CardBody>

                    </Grow>   
                    
                                             
                    
                    <Grow 
                      in={activeForm === 2}
                      style={{ transformOrigin: '0 0 0', display: activeForm === 2 ? "block" : "none" }}
                      {...(activeForm === 2 ? { timeout: 1000 } : {})}
                    >

                      <CardBody>

                      {error && ( 
                        <SnackbarContent
                          message={
                            <span>
                              <b>Não encontramos seu CEP</b> <br/> Tente novamente
                            </span>
                          }
                          // close
                          color="warning"
                          icon="info_outline"
                        />
                      )} 

                        <GridContainer justify="center"> 
                          <GridItem xs={12} sm={12} md={4}>
                            <CustomInput
                              labelText="CEP"
                              labelError={errors.cep && errors.cep.message}                          
                              error={errors.cep ? true : false}
                              id="cep"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                type: "tel",
                                name: "cep",
                                inputComponent: CEPMask,
                                onClick: handleFocus,
                                inputRef: register,
                                onBlur: fetchData,                                                    
                              }}
                            />  
                          </GridItem>                   
                          <GridItem xs={12} sm={12} md={8}>
                          
                            <CustomInput
                              labelText="Endereço"
                              labelError={errors.endereco && errors.endereco.message}                          
                              error={errors.endereco ? true : false}
                              id="endereco"
                              formControlProps={{
                                fullWidth: true
                              }}                            
                              inputProps={{
                                name: "endereco",
                                inputRef: register,
                                value: identification.endereco,
                                disabled: true
                              }}
                            />   
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>                                                            
                            <CustomInput
                              labelText="Número"
                              labelError={errors.numero && errors.numero.message}                          
                              error={errors.numero ? true : false}
                              id="numero"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                type: "tel",
                                name: "numero",
                                inputRef: register,                                                                                                                 
                              }}
                            /> 
                          </GridItem> 
                          <GridItem xs={12} sm={12} md={8}>                                                             
                            <CustomInput
                              labelText="Complemento"
                              labelError={errors.complemento && errors.complemento.message}                          
                              error={errors.complemento ? true : false}
                              id="complemento"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "complemento",
                                inputRef: register                                                                                                                   
                              }}
                            />        
                          </GridItem>   
                          <GridItem xs={12} sm={12} md={5}>                                                    
                            <CustomInput
                              labelText="Bairro"
                              labelError={errors.bairro && errors.bairro.message}                          
                              error={errors.bairro ? true : false}
                              id="bairro"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "bairro",
                                inputRef: register,
                                value: identification.bairro,
                                disabled: true                                                                                      
                              }}
                            />   
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>                                                            
                            <CustomInput
                              labelText="Estado"
                              labelError={errors.estado && errors.estado.message}                          
                              error={errors.estado ? true : false}
                              id="estado"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "estado",
                                inputRef: register,
                                value: identification.estado,
                                disabled: true                                                                                      
                              }}
                            />    
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>                                                           
                            <CustomInput
                              labelText="Cidade"
                              labelError={errors.cidade && errors.cidade.message}                          
                              error={errors.cidade ? true : false}
                              id="cidade"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "cidade",
                                inputRef: register,
                                value: identification.cidade,
                                disabled: true                                                                                      
                              }}
                            />                                                               
                          </GridItem>   
                        </GridContainer>                 
                    
                      </CardBody>

                    </Grow>

                    
                    <CardFooter>   
                      <GridContainer justify="center" style={{ margin: "0", width: "100%" }}> 
                        
                        <GridItem xs={12} sm={12} md={12}>

                          <Button color="primary" fullWidth onClick={handleNext}>
                            Próximo
                          </Button>
                                                  
                          
                        </GridItem> 
                        <GridItem xs={12} sm={12} md={12}>
                          
                          <Button simple color="primary" fullWidth onClick={handleBack}>
                            Voltar
                          </Button>
                          
                        </GridItem> 
                      </GridContainer>  
                      
                    </CardFooter>
                  </form>
                </Card>
                </Grow>
              </GridItem>

            </Grow>          
            <Grow 
              in={activeForm === 1}
              style={{ transformOrigin: '0 0 0', display: activeForm === 1 ? "block" : "none" }}
              {...(activeForm === 1 ? { timeout: 1000 } : {})}
            >
              <GridItem xs={12} sm={12} md={6}>
                <Grow 
                  in={true}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(true ? { timeout: 1000 } : {})}
                >
                  <Card className={classes.card1}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <CardHeader
                      contact
                      color="primary"
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Identificação</h4>
                    </CardHeader>

    
                    
                    <Grow 
                      in={activeForm === 1}
                      style={{ transformOrigin: '0 0 0', display: activeForm === 1 ? "block" : "none" }}
                      {...(activeForm === 1 ? { timeout: 1000 } : {})}
                    >

                      <CardBody>
                        <GridContainer justify="center"> 
                          <GridItem xs={12} sm={8} md={5}>
                            <CustomInput
                              labelText="Nome Completo"
                              labelError={errors.nome && errors.nome.message}                          
                              error={errors.nome ? true : false}
                              id="nome"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "nome",
                                inputRef: register,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AssignmentInd className={classes.inputIconsColor} />
                                  </InputAdornment>
                                )                           
                              }}
                            />                     
                            <CustomInput
                              labelText="Email"
                              labelError={errors.email && errors.email.message}                          
                              error={errors.email ? true : false}
                              id="email"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "email",
                                inputRef: register,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Email className={classes.inputIconsColor} />
                                  </InputAdornment>
                                )                                                        
                              }}
                            />                     
                            <CustomInput
                              labelText="Confirmar Email"
                              labelError={errors.confirmEmail && errors.confirmEmail.message}                          
                              error={errors.confirmEmail ? true : false}
                              id="confirmEmail"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "confirmEmail",
                                inputRef: register,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Email className={classes.inputIconsColor} />
                                  </InputAdornment>
                                )                                                        
                              }}
                            />                                                  
                          </GridItem>
                          <GridItem xs={12} sm={8} md={5}>                       
                            <CustomInput
                              labelText="Celular"
                              labelError={errors.telefone && errors.telefone.message}                          
                              error={errors.telefone ? true : false}
                              id="telefone"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                type: "tel",
                                name: "telefone",
                                inputRef: register,
                                onClick: handleFocus,
                                // onBlur: handleFocus,
                                inputComponent: PhoneMask,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Phone className={classes.inputIconsColor} />
                                  </InputAdornment>
                                )                            
                              }}
                            />                     
                            <CustomInput
                              labelText="Confirmar Celular"
                              labelError={errors.confirmTelefone && errors.confirmTelefone.message}                          
                              error={errors.confirmTelefone ? true : false}
                              id="confirmTelefone"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                type: "tel",
                                name: "confirmTelefone",
                                inputRef: register,
                                onClick: handleFocus,
                                // onBlur: handleFocus,
                                inputComponent: PhoneMask,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Phone className={classes.inputIconsColor} />
                                  </InputAdornment>
                                )                            
                              }}
                            />                     
                            <CustomInput
                              labelText="Data de nascimento"
                              labelError={errors.dataNascimento && errors.dataNascimento.message}                          
                              error={errors.dataNascimento ? true : false}
                              id="dataNascimento"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "dataNascimento",
                                type: "tel",
                                inputRef: register,
                                onClick: handleFocus,
                                // onBlur: handleFocus,
                                inputComponent: DateMask,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EventIcon className={classes.inputIconsColor} />
                                  </InputAdornment>
                                )                           
                              }}
                            />    
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                          
                            <label>Aceito receber contatos via:</label>
                            <br/>
                            <FormControlLabel
                              control={
                                <Checkbox  
                                  defaultChecked                              
                                  tabIndex={-1}
                                  onClick={() => handleToggle(1)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                  name="optinEmail"
                                  inputRef={ register }                          
                                />
                              }                      
                              classes={{ label: classes.label }}
                              label="Email"
                            />                          
                            <FormControlLabel
                              control={
                                <Checkbox   
                                  defaultChecked                             
                                  tabIndex={-1}
                                  onClick={() => handleToggle(1)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                  name="optinSms"
                                  inputRef={ register }                          
                                />
                              }                      
                              classes={{ label: classes.label }}
                              label="SMS"
                            />                          
                            <FormControlLabel
                              control={
                                <Checkbox    
                                  defaultChecked                            
                                  tabIndex={-1}
                                  onClick={() => handleToggle(1)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }                                
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                  name="optinTelegram"
                                  inputRef={ register }                          
                                />
                              }                      
                              classes={{ label: classes.label }}
                              label="Telegram"
                            />  
                            {
                              (errors.optinSms || errors.optinEmail || errors.optinTelegram) &&  (
                              <FormHelperText className={classes.marginAuto} error={true}>
                                Para uma experiência completa, o contato pelos três canais é obrigatório
                              </FormHelperText>  
                              )
                            }

                          </GridItem>

                          <GridItem xs={12} sm={8} md={8}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(1)}                                
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                  name="aceiteTermos"
                                  inputRef={ register }                          
                                />
                              }                      
                              classes={{ label: classes.label }}
                              // label="Li e aceito o Termo de Uso e Políticas de Privacidade."
                              label={
                                <>
                                <div>
                                  Li e aceito o 
                                  <a href="../termos/Termo_de_Uso_e_Politica_de_Privacidade_Clicou_Personal.pdf" className={classes.colorPrimary} target="_blank"> Termo de Uso e Políticas de Privacidade.</a>
                                  {/* <Button color="primary" href="" target="_blank" simple>
                                    Termo de Uso e Políticas de Privacidade.
                                  </Button> */}
                                </div>
                                </>
                              }
                            />  
                            {
                              errors.aceiteTermos && (
                              <FormHelperText className={classes.marginAuto} error={true}>
                                {errors.aceiteTermos.message}
                              </FormHelperText>  
                              )
                            }
                            


                          </GridItem>   
                        </GridContainer>                 
                    
                      </CardBody>

                    </Grow>
                    
        

                    
                    <CardFooter>   
                      <GridContainer justify="center" style={{ margin: "0", width: "100%" }}> 
                        
                        <GridItem xs={12} sm={12} md={12}>

                          <Button color="primary" fullWidth onClick={handleNext}>
                            Próximo
                          </Button>
                                                  
                          
                        </GridItem> 
                        <GridItem xs={12} sm={12} md={12}>
                          
                          <Button simple color="primary" fullWidth onClick={handleBack}>
                            Voltar
                          </Button>
                          
                        </GridItem> 
                      </GridContainer>  
                      
                    </CardFooter>
                  </form>
                </Card>
                </Grow>
              </GridItem>

            </Grow>  
          </GridContainer>
        </div>
      </div>
      
    </div>
  );
}
