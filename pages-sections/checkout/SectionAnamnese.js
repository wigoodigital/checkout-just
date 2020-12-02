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
import TagManager from 'react-gtm-module';
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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import Grow from '@material-ui/core/Grow';


import InputMask from "react-input-mask";
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { setLocale } from 'yup';

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
      // placeholderChar={'\u2000'}
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
      // placeholderChar={'\u2000'}
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
      // placeholderChar={'\u2000'}
      showMask
    />
  );
}

DateMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function AlturaMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={[/[0-9]/, ',', /[0-9]/, /[0-9]/]}
      // guide={false}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

AlturaMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};


const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 3, // limit length of integer numbers
  // requireDecimal: true,
  allowNegative: false,
  allowLeadingZeroes: true,
}

const PesoMask = (props) => {
  const { inputRef, maskOptions, ...other } = props;

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  })


  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={currencyMask}
      guide={false}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

PesoMask.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {},
}

PesoMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  inputmode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.boolean,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.boolean,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.boolean,
    allowNegative: PropTypes.boolean,
    allowLeadingZeroes: PropTypes.boolean,
    integerLimit: PropTypes.number,
  }),
};




// const AlturaMask = (props) => {
//   const { inputRef, maskOptions, ...other } = props;

//   const currencyMask = createNumberMask({
//     ...defaultMaskOptions,    
//     ...maskOptions,
//     integerLimit: 1, // limit length of integer numbers
//   })


//   return (
//     <MaskedInput
//       {...other}
//       ref={(ref) => {
//         inputRef(ref ? ref.inputElement : null);
//       }}
//       mask={currencyMask}
//       guide={false}
//       placeholderChar={'\u2000'}
//       showMask
//     />
//   );
// }

// AlturaMask.defaultProps = {
//   inputMode: 'numeric',
//   maskOptions: {},
// }

// AlturaMask.propTypes = {
//   inputRef: PropTypes.func.isRequired,
//   inputmode: PropTypes.string,
//   maskOptions: PropTypes.shape({
//     prefix: PropTypes.string,
//     suffix: PropTypes.string,
//     includeThousandsSeparator: PropTypes.boolean,
//     thousandsSeparatorSymbol: PropTypes.string,
//     allowDecimal: PropTypes.boolean,
//     decimalSymbol: PropTypes.string,
//     decimalLimit: PropTypes.string,
//     requireDecimal: PropTypes.boolean,
//     allowNegative: PropTypes.boolean,
//     allowLeadingZeroes: PropTypes.boolean,
//     integerLimit: PropTypes.number,
//   }),
// };


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

function isValidDate(date) {
  return /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/.test(date);
}

yup.addMethod(yup.string, "cpf", function(message) {
	// return yup.mixed().test("cpf", message || "número de CPF inválido", value => cpfValidate(value));
	return yup.mixed().test("cpf", message || "número de CPF inválido", value => isValidCPF(value));
});

yup.addMethod(yup.string, "phone", function(message) {	
	return yup.mixed().test("phone", message || "número de celular inválido", value => isValidPhone(value));
});

yup.addMethod(yup.string, "date", function(message) {	
	return yup.mixed().test("date", message || "data inválida", value => isValidDate(value));
});

// const SignupSchema = yup.object().shape({
//   // firstName: yup.string().required(),
//   cpf: yup
//     .string()
//     // .required(), 
// 		// .transform(function removeNonNumericalChar(value) {
// 		// 	console.log("Transforming", value);
// 		// 	return this.isType(value) && value !== null ? value.replace(/\D/g, "") : value;
// 		// })
// 		// .matches(regexCPF, "formato inválido")
//     .cpf("informe um CPF válido")
//     ,
//   first: yup
//     .string()
//     .required(),  
//   // email: yup.string().required(),
//   last: yup
//     .number()
//     // .required()
//     .positive()
//     .integer(),    
  
//   // message: yup.string().url(),
//   // checkboxInput: yup.boolean().oneOf([true],'aceite obrigatório')
// });

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
  telefone: yup
    .string()
    .phone("Por favor, informe um número de celular válido"),
  dataNascimento: yup
    .string()
    .date("Por favor, informe uma data válida"),  
  
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



  idade: yup
    .number()
    .required(),  

  peso: yup   
    .string() 
    .required(),
  
  altura: yup 
    .string()  
    .matches(/[0-9]{1}\,[0-9]{2}/g , 'Por favor, insira uma altura válida')
    .required(),
  
  outroPatologia: yup 
    .string()    
    .required(),
  



  
  
  
  

  // receberContatoEmail: yup.boolean().oneOf([true],'aceite obrigatório'),
  // receberContatoSMS: yup.boolean().oneOf([true],'aceite obrigatório'),
  // receberContatoWhatsApp: yup.boolean().oneOf([true],'aceite obrigatório')
    

});

// const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });

export default function SectionAnamnese(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const { register, trigger, handleSubmit, setValue, getValues, errors } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onBlur"
    // mode: "onChange"
  });
  const onSubmit = data => {
    console.log(data);
    // alert(JSON.stringify(data, null));
  };


  useEffect(() => {    
    // history.pushState({}, null, "/checkout/anamnese");
    TagManager.dataLayer({
      dataLayer: {
        event: "anamneseView",
        userId: '001',
        userProject: 'project',
        page: 'home'
      },          
    })
    TagManager.dataLayer({
      dataLayer: {
        'event': 'checkoutOption',
        'ecommerce': {
          'checkout_option': {
            'actionField': {'step': 3}
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
  
  const [activeField, setActiveField] = React.useState(["sexo"]);
  // const [activeField, setActiveField] = React.useState(["peso", "altura"]);
  const [isDisableNext, setIsDisableNext] = React.useState(true);
  const [error, setError] = useState(false);
    
  const [isOutro, setIsOutro] = React.useState(false);

  const handleNext = async () => {

    // console.log(activeField);
    // const result = await trigger(activeField)
    // console.log(result);

    const result = true

    if(result) { 
      console.log(getValues());
      if(activeForm == 17){
        const anamneseForm = getValues();

     

        props.setDataSale( prevDataSale => {
          return {  
            customer: {     
              ...prevDataSale.customer,
              sex: anamneseForm.sexo,
              anamnese: {
                ...prevDataSale.customer.anamnese,
                ...anamneseForm
              }  
            }         
          }
        });    

        // props.sendDataForm();
      } else {
        setIsDisableNext(true);
        setIsOutro(false);
        setActiveForm((prevActiveStep) => prevActiveStep + 1);
        handleFieldActive(activeForm + 1);                
      }
    }

    // setActiveForm((prevActiveStep) => prevActiveStep + 1);
        

  };

  const handleBack = (type) => {

    if(activeForm !== 0){
      setIsDisableNext(false);
      setActiveForm((prevActiveStep) => prevActiveStep - 1);  
      handleFieldActive(activeForm - 1); 
    } else{
      props.setStepCheckout(1);
    }

  };

  const handleFocus = (event) => {
    // event.target.select()

    if(event.target.value == ""){      
      event.target.selectionStart = 0;
      event.target.selectionEnd = 0;      
    } else {
      event.target.select();      
    }
    
  };
  
  const handleChange = async (event) => {
   

    const result = await trigger(activeField);
    console.log(activeField);
    console.log(result);
    if(result){
      setIsDisableNext(false);
    } else{
      setIsDisableNext(true);
    }

    
  };
  
  const handleChangeOutro = async (event, name) => {
    
    setValue(name, event.target.value);
  
    const result = await trigger(name);
    // console.log(name);
    // console.log(result);
    if(result){       
      setIsDisableNext(false);
    } else{
      setIsDisableNext(true);
    }

    
  };





  const handleFieldActive = (step) => {

    console.log("handleFieldActive");

    switch (step) {      
      case 0:
        setActiveField("sexo");
        break;      
      case 1:
        setActiveField(["peso", "altura"]);
        break;      
      case 2:
        setActiveField(["objetivo"]);
        break;      
      case 3:
        setActiveField(["habitoTreino","frequenciaTreino"]);
        break;      
      case 4:
        setActiveField(["fazMusculacao"]);
        break;      
      case 5:
        setActiveField(["fazAulas"]);
        break;      
      case 6:
        setActiveField(["sedentario", "sedentarioTempo"]);
        break;      
      case 7:
        setActiveField(["tempoPorDia"]);
        break;      
      case 8:
        setActiveField(["periodo"]);
        break;      
      case 9:
        setActiveField(["patologia", "outroPatologia"]);
        break;      
      case 10:
        setActiveField(["osseoArticular", "qualOsseoArticular"]);
        break;      
      case 11:
        setActiveField(["cirurgia", "qualCirurgia"]);
        break;      
      case 12:
        setActiveField(["internacao", "qualInternacao"]);
        break;      
      case 13:
        setActiveField(["medicamento", "qualMedicamento"]);
        break;      
      case 14:
        setActiveField(["fuma"]);
        break;      
      case 15:
        setActiveField(["nutricionista"]);
        break;      
      case 16:
        setActiveField(["personalTrainer"]);
        break;      
      case 17:
        setActiveField(["equipamentos", "qualEquipamentos"]);
        break;      
      default:
        setActiveField("sexo");
        break;
    }

    console.log(step);
    // console.log(activeField);

  };

  const setValueForm = (name, value, outro) => {    
    setValue(name, value);
    // console.log(getValues());
    if(outro){
      setIsOutro(true);
    } else{
      handleNext();
    }
  };
  
  

  // useEffect(() => {
  //   console.log("teste de erro");
  //   console.log(errors[activeField]);  
  //   !errors[activeField] && setIsDisableNext(false);
  // }, [ errors[activeField] ]);
  
  // useEffect(() => {
  //   if(isOutro) {
  //     register("outroPatologia");
  //   }  
  //  }, [ isOutro ]);

  
  
  const [anamnese, setAnamnese] = React.useState({    

    sexo: "TESTE",

    peso: "TESTE",
    altura: "TESTE",

    objetivo: "TESTE",

    habitoTreino: "TESTE",

    frequenciaTreino: "TESTE",

    fazMusculacao: "TESTE",

    fazAulas: "TESTE",

    sedentario: "TESTE",

    sedentarioTempo: "TESTE",

    reclusaoTreino: "TESTE",

    tempoPorDia: "TESTE",

    periodo: "TESTE",

    patologia: "TESTE",
    outroPatologia: "TESTE",

    osseoArticular: "TESTE",
    qualOsseoArticular: "TESTE",

    cirurgia: "TESTE",
    qualCirurgia: "TESTE",

    internacao: "TESTE",
    qualInternacao: "TESTE",

    medicamento: "TESTE",
    qualMedicamento: "TESTE",

    fuma: "TESTE",

    nutricionista: "TESTE",

    personalTrainer: "TESTE",

    equipamentos: "TESTE"

  });



  const fetchData = async (event) => {    
    setError(false);
    let cep = event.target.value
    setAnamnese( (prevAnamnese) => {
      return {
        ...prevAnamnese,       
        endereco: "",
        bairro: "",
        estado: "",
        cidade: "",
      }
    });

    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        // setError(false);
        // setUsers(prevState => [...prevState, ...res.data]);
        // setUser(res.data);
        // console.log(res.data);
        if(res.data.error){
          setError(true);
          return
        }

        setAnamnese( (prevAnamnese) => {
          return {
            ...prevAnamnese,
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
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            {/* <GridItem xs={12} sm={12} md={8} className={classes.mlAuto}> */}
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
                    <h4 className={classes.cardTitle}>Sobre você</h4>
                  </CardHeader>                                        


                  {/* <Grow 
                    in={activeForm === 0}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 0 ? "block" : "none" }}
                    {...(activeForm === 0 ? { timeout: 1000 } : {})}
                  >

                    <CardBody>
                      <GridContainer justify="center"> 
                        <GridItem xs={12} sm={8} md={8}>


                          <CustomInput
                            labelText="Qual é sua idade?"
                            labelError={errors.idade && errors.idade.message}
                            id="idade"  
                            error={errors.idade ? true : false}                                                                          
                            formControlProps={{
                              fullWidth: true
                            }}                                
                            inputProps={{
                              type: "tel",
                              name: "idade",                              
                              inputRef: register, 
                              onChange: handleChange                    
                            }}                          
                          />     
   
                        </GridItem>   
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow> */}
                  
                  <Grow 
                    in={activeForm === 0}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 0 ? "block" : "none" }}
                    {...(activeForm === 0 ? { timeout: 1000 } : {})}
                  >                

                    <CardBody>
                      <GridContainer justify="center"> 
                        <GridItem xs={12} sm={8} md={8}>

            
                          <input hidden name="sexo" type="text" ref={register} />

                          <label>Qual o seu sexo?</label>

                          <Button color="primary" fullWidth onClick={() => setValueForm("sexo", "M")}>
                            Masculino
                          </Button>
                          
                          <Button color="secondary" fullWidth onClick={() => setValueForm("sexo", "F")}>
                            Feminino
                          </Button>

                        </GridItem>   
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  <Grow 
                    in={activeForm === 1}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 1 ? "block" : "none" }}
                    {...(activeForm === 1 ? { timeout: 1000 } : {})}
                  >

                    <CardBody>
                      <GridContainer justify="center"> 
                        <GridItem xs={12} sm={8} md={8}>
                          <CustomInput
                            labelText="Qual é o seu peso?"
                            labelError={errors.peso && errors.peso.message}                          
                            error={errors.peso ? true : false}
                            id="peso"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "tel",
                              name: "peso",
                              placeholder: "0,00",
                              inputComponent: PesoMask,
                              inputRef: register,
                              onChange: handleChange,
                              endAdornment: (
                                <InputAdornment position="start">
                                  {"Kg"}
                                </InputAdornment>
                              )                           
                            }}
                          />                     
                          <CustomInput
                            labelText="Qual a sua altura? "
                            labelError={errors.altura && errors.altura.message}                          
                            error={errors.altura ? true : false}
                            id="altura"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "tel",
                              name: "altura",
                              // placeholder: "0,00",
                              inputComponent: AlturaMask,
                              inputRef: register,
                              onChange: handleChange,
                              onClick: handleFocus,
                              endAdornment: (
                                <InputAdornment position="start">
                                  {"m"}
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
                        <GridItem xs={12} sm={12} md={9}>


                          <input hidden name="objetivo" type="text" ref={register} />
                          <label>Qual é o seu objetivo?</label>
                          <br/>
                          <Button color="primary" fullWidth onClick={() => setValueForm("objetivo", "Emagrecer")}>
                            Emagrecer
                          </Button>

                          <Button color="primary" fullWidth onClick={() => setValueForm("objetivo", "Aumentar a Massa Magra")}>
                            Aumentar a Massa Magra
                          </Button>
                          
                          <Button color="primary" fullWidth onClick={() => setValueForm("objetivo", "Manter o Condicionamento Físico")}>
                            Manter o Condicionamento Físico
                          </Button>
                          
                          <Button color="primary" fullWidth onClick={() => setValueForm("objetivo", "Bem Estar")}>
                            Bem Estar
                          </Button>
                          
                          <Button color="primary" fullWidth onClick={() => setValueForm("objetivo", "Indicação Médica")}>
                            Indicação Médica
                          </Button>

                        </GridItem>                   
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  
                  
                  <Grow 
                    in={activeForm === 3}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 3 ? "block" : "none" }}
                    {...(activeForm === 3 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>

                        <input hidden name="habitoTreino" type="text" ref={register} />
                        <input hidden name="frequenciaTreino" type="text" ref={register} />

                        {
                          !isOutro ? (
                            <>
                                                            
                              <label>Possui o hábito de treinar?</label>
                              <br/>                        
                              <Button color="primary" fullWidth onClick={() => setValueForm("habitoTreino", "SIM", true)}>
                                Sim
                              </Button>
                              
                              <Button color="secondary" fullWidth onClick={() => setValueForm("habitoTreino", "NÃO")}>
                                Não
                              </Button>
                            </>

                          ): (

                            <>
                                                            
                              <label>Quantas vezes na semana?</label>
                              <br/>                        
                              <Button color="primary" fullWidth onClick={() => setValueForm("frequenciaTreino", "1 a 2 vezes")}>
                                1 a 2 vezes
                              </Button>
                              
                              <Button color="primary" fullWidth onClick={() => setValueForm("frequenciaTreino", "3 a 5 vezes")}>
                                3 a 5 vezes
                              </Button>
                              
                              <Button color="primary" fullWidth onClick={() => setValueForm("frequenciaTreino", "6 a 7 vezes")}>
                                6 a 7 vezes
                              </Button>

                            </>
                         

                          )
                        }
                        
                        </GridItem>                             
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>


                  <Grow 
                    in={activeForm === 4}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 4 ? "block" : "none" }}
                    {...(activeForm === 4 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={9}>
  

                          <input hidden name="fazMusculacao" type="text" ref={register} />

                          <label>Na academia, costuma fazer musculação?</label>
                          <br/>
                          <Button color="primary" fullWidth onClick={() => setValueForm("fazMusculacao", "SIM")}>
                            Sim
                          </Button>
                          
                          <Button color="secondary" fullWidth onClick={() => setValueForm("fazMusculacao", "NÃO")}>
                            Não
                          </Button>  


                        </GridItem>                                                  
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  <Grow 
                    in={activeForm === 5}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 5 ? "block" : "none" }}
                    {...(activeForm === 5 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={9}>
                          <input hidden name="fazAulas" type="text" ref={register} />

                          <label>Na academia, costuma fazer aulas?</label>
                          <br/>
                          <Button color="primary" fullWidth onClick={() => setValueForm("fazAulas", "SIM")}>
                            Sim
                          </Button>

                          <Button color="secondary" fullWidth onClick={() => setValueForm("fazAulas", "NÃO")}>
                            Não
                          </Button>
                        </GridItem>                   
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>

                  <Grow 
                    in={activeForm === 6}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 6 ? "block" : "none" }}
                    {...(activeForm === 6 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>
               

                          <input hidden name="sedentario" type="text" ref={register} />
                          <input hidden name="sedentarioTempo" type="text" ref={register} />

                          {
                            !isOutro ? (
                              <>
                                                              
                                <label>Atualmente, se considera sedentário?</label>
                                <br/>                        
                                <Button color="primary" fullWidth onClick={() => setValueForm("sedentario", "SIM", true)}>
                                  Sim
                                </Button>
                                
                                <Button color="secondary" fullWidth onClick={() => setValueForm("sedentario", "NÃO")}>
                                  Não
                                </Button>
                              </>

                            ): (

                              <>
                                                              
                                <label>Há quanto tempo?</label>
                                <br/>                        
                                <Button color="primary" fullWidth onClick={() => setValueForm("sedentarioTempo", "6 meses")}>
                                  6 meses
                                </Button>
                                
                                <Button color="primary" fullWidth onClick={() => setValueForm("sedentarioTempo", "6 meses a 2 anos")}>
                                  6 meses a 2 anos
                                </Button>
                                
                                <Button color="primary" fullWidth onClick={() => setValueForm("sedentarioTempo", "Há mais de 2 anos")}>
                                  Há mais de 2 anos
                                </Button>

                              </>
                          

                            )
                          }
                        

                        </GridItem>                   
                   
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>

                  <Grow 
                    in={activeForm === 7}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 7 ? "block" : "none" }}
                    {...(activeForm === 7 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>
                          
                          <input hidden name="tempoPorDia" type="text" ref={register} />

                          <label>Pretende treinar quanto tempo por dia?</label>
                          <br/>                        
                          <Button color="primary" fullWidth onClick={() => setValueForm("tempoPorDia", "10 a 30 minutos")}>
                            10 a 30 minutos
                          </Button>
                          
                          <Button color="primary" fullWidth onClick={() => setValueForm("tempoPorDia", "40 a 45 minutos")}>
                            40 a 45 minutos
                          </Button>
                          
                          <Button color="primary" fullWidth onClick={() => setValueForm("tempoPorDia", "1 hora ou mais")}>
                            1 hora ou mais
                          </Button>
                        </GridItem>                                    
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  <Grow 
                    in={activeForm === 8}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 8 ? "block" : "none" }}
                    {...(activeForm === 8 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>
                          <input hidden name="periodo" type="text" ref={register} />
                          <label>Em qual período deseja o atendimento?</label>
                          <br/>                        
                          <Button color="primary" fullWidth onClick={() => setValueForm("periodo", "Manhã")}>
                            Manhã - 08:00 às 12:00
                          </Button>
                          
                          <Button color="primary" fullWidth onClick={() => setValueForm("periodo", "Tarde")}>
                            Tarde - 12:00 às 16:00
                          </Button>
                          
                          <Button color="primary" fullWidth onClick={() => setValueForm("periodo", "Noite")}>
                            Noite - 16:00 às 20:00
                          </Button>
                        </GridItem>                   
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>

                  <Grow 
                    in={activeForm === 9}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 9 ? "block" : "none" }}
                    {...(activeForm === 9 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>       


                          <input hidden name="patologia" type="text" ref={register} />                                             
                          <input hidden name="outroPatologia" type="text" ref={register} />                                             

                          {
                            !isOutro ? (
                              <>
                                                              
                                <label>Possui alguma patologia?</label>
                                <br/>                        
                                <Button color="secondary" fullWidth onClick={() => setValueForm("patologia", "coracao")}>
                                  Sim, no coração
                                </Button>
                                <Button color="secondary" fullWidth onClick={() => setValueForm("patologia", "pulmao")}>
                                  Sim, no pulmão
                                </Button>
                                <Button color="primary" fullWidth onClick={() => setValueForm("patologia", "outro", true)}>
                                  Sim, em outro local
                                </Button>                                 
                                <Button color="danger" fullWidth onClick={() => setValueForm("patologia", "NÃO")}>
                                  Não
                                </Button>
                              </>

                            ): (

                              <>
                                <CustomInput
                                  labelText="Qual o problema e onde seria?"
                                  labelError={errors.outroPatologia && errors.outroPatologia.message}                          
                                  error={errors.outroPatologia ? true : false}
                                  id="outroPatologiaInput"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    name: "outroPatologiaInput",
                                    inputRef: register,
                                    onChange: (event) => handleChangeOutro(event, "outroPatologia")
                                  }}
                                />                                                               
                              </>
                          

                            )
                          } 

                        </GridItem>                                    
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  <Grow 
                    in={activeForm === 10}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 10 ? "block" : "none" }}
                    {...(activeForm === 10 ? { timeout: 1000 } : { })}
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
                        <GridItem xs={12} sm={12} md={8}>

                          <input hidden name="osseoArticular" type="text" ref={register} />                          
                          <input hidden name="qualOsseoArticular" type="text" ref={register} />                          

                          {
                            !isOutro ? (
                              <>
                                                              
                                <label>Possui algum problema ósseo articular?</label>
                                <br/>                        
                                <Button color="primary" fullWidth onClick={() => setValueForm("osseoArticular", "SIM", true)}>
                                  Sim
                                </Button>                               
                                <Button color="secondary" fullWidth onClick={() => setValueForm("osseoArticular", "NÃO")}>
                                  Não
                                </Button>
                              </>

                            ): (

                              <>
                                <CustomInput
                                  labelText="Qual seria?"
                                  labelError={errors.qualOsseoArticular && errors.qualOsseoArticular.message}                          
                                  error={errors.qualOsseoArticular ? true : false}
                                  id="qualOsseoArticularInput"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    name: "qualOsseoArticularInput",
                                    inputRef: register,
                                    onChange: (event) => handleChangeOutro(event, "qualOsseoArticular")
                                  }}
                                />                                                               
                              </>


                            )
                          } 


                        </GridItem>                                    
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  <Grow 
                    in={activeForm === 11}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 11 ? "block" : "none" }}
                    {...(activeForm === 11 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>

                          <input hidden name="cirurgia" type="text" ref={register} />
                          <input hidden name="qualCirurgia" type="text" ref={register} />

                          {
                            !isOutro ? (
                              <>
                                                              
                                <label>Já sofreu alguma cirurgia?</label>
                                <br/>                        
                                <Button color="primary" fullWidth onClick={() => setValueForm("cirurgia", "SIM", true)}>
                                  Sim
                                </Button>                               
                                <Button color="secondary" fullWidth onClick={() => setValueForm("cirurgia", "NÃO")}>
                                  Não
                                </Button>
                              </>

                            ): (

                              <>
                                <CustomInput
                                  labelText="Qual cirurgia?"
                                  labelError={errors.qualCirurgia && errors.qualCirurgia.message}                          
                                  error={errors.qualCirurgia ? true : false}
                                  id="qualCirurgiaInput"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    name: "qualCirurgiaInput",
                                    inputRef: register,
                                    onChange: (event) => handleChangeOutro(event, "qualCirurgia")                                                        
                                  }}
                                />                                                               
                              </>
                          

                            )
                          }  
                        </GridItem>                   
                 
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  
                  <Grow 
                    in={activeForm === 12}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 12 ? "block" : "none" }}
                    {...(activeForm === 12 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>

                          <input hidden name="internacao" type="text" ref={register} />                          
                          <input hidden name="qualInternacao" type="text" ref={register} />                          

                          {
                            !isOutro ? (
                              <>
                                                              
                                <label>Sofreu alguma internação recentemente?</label>
                                <br/>                        
                                <Button color="primary" fullWidth onClick={() => setValueForm("internacao", "SIM", true)}>
                                  Sim
                                </Button>                               
                                <Button color="secondary" fullWidth onClick={() => setValueForm("internacao", "NÃO")}>
                                  Não
                                </Button>
                              </>

                            ): (

                              <>
                                <CustomInput
                                  labelText="Qual seria?"
                                  labelError={errors.qualInternacao && errors.qualInternacao.message}                          
                                  error={errors.qualInternacao ? true : false}
                                  id="qualInternacaoInput"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    name: "qualInternacaoInput",
                                    inputRef: register,                                    
                                    onChange: (event) => handleChangeOutro(event, "qualInternacao")
                                  }}
                                />                                                               
                              </>


                            )
                          } 

                        </GridItem>                                 
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  <Grow 
                    in={activeForm === 13}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 13 ? "block" : "none" }}
                    {...(activeForm === 13 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>
          
                          <input hidden name="medicamento" type="text" ref={register} />                          
                          <input hidden name="qualMedicamento" type="text" ref={register} />                          

                          {
                            !isOutro ? (
                              <>
                                                              
                                <label>Faz uso de algum medicamento?</label>
                                <br/>                        
                                <Button color="primary" fullWidth onClick={() => setValueForm("medicamento", "SIM", true)}>
                                  Sim
                                </Button>                               
                                <Button color="secondary" fullWidth onClick={() => setValueForm("medicamento", "NÃO")}>
                                  Não
                                </Button>
                              </>

                            ): (

                              <>
                                <CustomInput
                                  labelText="Qual seria?"
                                  labelError={errors.qualMedicamento && errors.qualMedicamento.message}                          
                                  error={errors.qualMedicamento ? true : false}
                                  id="qualMedicamentoInput"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    name: "qualMedicamentoInput",
                                    inputRef: register,
                                    onChange: (event) => handleChangeOutro(event, "qualMedicamento")                                                        
                                  }}
                                />                                                               
                              </>


                            )
                          } 


                        </GridItem>                   
                          
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  
                  <Grow 
                    in={activeForm === 14}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 14 ? "block" : "none" }}
                    {...(activeForm === 14 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>


                          <input hidden name="fuma" type="text" ref={register} />   

                          <label>Possui o hábito de fumar?</label>
                          <br/>                        
                          <Button color="primary" fullWidth onClick={() => setValueForm("fuma", "SIM")}>
                            Sim
                          </Button>                               
                          <Button color="secondary" fullWidth onClick={() => setValueForm("fuma", "NÃO")}>
                            Não
                          </Button>                       

                        </GridItem>                                  
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  <Grow 
                    in={activeForm === 15}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 15 ? "block" : "none" }}
                    {...(activeForm === 15 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>

                          <input hidden name="nutricionista" type="text" ref={register} />   

                          <label>Faz acompanhamento com um(a) nutricionista?</label>
                          <br/>                        
                          <Button color="primary" fullWidth onClick={() => setValueForm("nutricionista", "SIM")}>
                            Sim
                          </Button>                               
                          <Button color="secondary" fullWidth onClick={() => setValueForm("nutricionista", "NÃO")}>
                            Não
                          </Button>  

                        </GridItem>                                  
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>

                  <Grow 
                    in={activeForm === 16}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 16 ? "block" : "none" }}
                    {...(activeForm === 16 ? { timeout: 1000 } : {})}
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
                        <GridItem xs={12} sm={12} md={8}>
                          
                          <input hidden name="personalTrainer" type="text" ref={register} />                          
                          
                          <label>Faz acompanhamento com um(a) personal trainer?</label>
                          <br/>                        
                          <Button color="primary" fullWidth onClick={() => setValueForm("personalTrainer", "SIM")}>
                            Sim
                          </Button>                               
                          <Button color="secondary" fullWidth onClick={() => setValueForm("personalTrainer", "NÃO")}>
                            Não
                          </Button>

                        </GridItem>                                  
                          
                      </GridContainer>                 
                  
                    </CardBody>

                  </Grow>
                  
                  <Grow 
                    in={activeForm === 17}
                    style={{ transformOrigin: '0 0 0', display: activeForm === 17 ? "block" : "none" }}
                    {...(activeForm === 17 ? { timeout: 1000 } : {})}
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

                      {/* <GridContainer justify="center"> 
                        <GridItem xs={12} sm={12} md={8}>
                          <CustomInput
                            labelText="Possui algum equipamento de treino? Se SIM, informe-os por aqui"
                            labelError={errors.equipamentos && errors.equipamentos.message}                          
                            error={errors.equipamentos ? true : false}
                            id="equipamentos"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              name: "equipamentos",
                              multiline: true,
                              onChange: handleChange, 
                              rows: 5,
                              inputRef: register,
                                             
                            }}
                          />  
                        </GridItem>                                  
                          
                      </GridContainer>        */}

                      <GridContainer justify="center"> 
                        <GridItem xs={12} sm={12} md={8}>
          
                          <input hidden name="equipamentosSN" type="text" ref={register} />                          
                          <input hidden name="equipamentos" type="text" ref={register} />                          

                          {
                            !isOutro ? (
                              <>
                                                              
                                <label>Possui algum equipamento de treino?</label>
                                <br/>                        
                                <Button color="primary" fullWidth onClick={() => setValueForm("equipamentosSN", "SIM", true)}>
                                  Sim
                                </Button>                               
                                <Button color="secondary" fullWidth onClick={() => setValueForm("equipamentosSN", "NÃO")}>
                                  Não
                                </Button>
                              </>

                            ): (

                              <>
                                <CustomInput
                                  labelText="Quais seriam?"
                                  labelError={errors.equipamentos && errors.equipamentos.message}                          
                                  error={errors.equipamentos ? true : false}
                                  id="equipamentosInput"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    name: "equipamentosInput",
                                    multiline: true,                              
                                    rows: 5,
                                    inputRef: register,
                                    onChange: (event) => handleChangeOutro(event, "equipamentos")                                                        
                                  }}
                                />                                                               
                              </>


                            )
                          } 


                        </GridItem>                   
                          
                          
                      </GridContainer>               
                  
                    </CardBody>

                  </Grow>

                  
                  <CardFooter>   
                    <GridContainer justify="center" style={{ margin: "0", width: "100%" }}> 
                      
                      <GridItem xs={12} sm={12} md={12}>

                        
                        <Button color="primary" fullWidth onClick={handleNext} style={{ display: isDisableNext ? "none" : "block" }}>
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
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
    </div>
  );
}
