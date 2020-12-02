import React from "react";
import { useEffect, useState } from "react";
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
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
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
import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import Grow from '@material-ui/core/Grow';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { setLocale } from 'yup';

import contactsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle.js";

import city from "assets/img/examples/city.jpg";

const useStyles = makeStyles(contactsStyle);


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
    required: 'é um campo obrigatório',
    oneOf: 'deve ser um dos seguintes valores: ${values}',
    notOneOf: 'não pode ser um dos seguintes valores: ${values}',
  },
  string: {
      length: 'deve ter exatamente ${length} caracteres',
      min: 'deve ter pelo menos ${min} caracteres',
      max: 'deve ter no máximo ${max} caracteres',
      email: 'tem o formato de e-mail inválido',
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

const SignupSchema = yup.object().shape({
  // firstName: yup.string().required(),
  first: yup.string().required(),
  email: yup.string().required(),
  last: yup
    .number()
    .required()
    .positive()
    .integer(),    
  message: yup.string().url(),
  checkboxInput: yup.boolean().oneOf([true],'aceite obrigatório')
});

// const schema = yup.object().shape({
//   first: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// });

export default function FieldsCpf(props) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const { register, handleSubmit, errors } = props
  const onSubmit = data => {
    console.log(data);
    // alert(JSON.stringify(data, null));
  };



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

  const [isAluno, setIsAluno] = React.useState(true);

  const classes = useStyles();
  return (
    <> 
    <Grow 
        in={props.visible}
        style={{ transformOrigin: '0 0 0', display: props.visible ? "block" : "none" }}
        {...(props.visible ? { timeout: 1000 } : {})}
    >
        <CardBody>
        <GridContainer justify="center"> 
            <GridItem xs={12} sm={6} md={6}>
            <CustomInput
                labelText="First Name"
                labelError={errors.first && errors.first.message}
                id="first"  
                error={errors.first ? true : false}                                                                          
                formControlProps={{
                fullWidth: true
                }}
                helperText="Incorrect entry."
                inputProps={{
                name: "first",                            
                inputRef: register
                }}                          
            />
            {/* <FormHelperText error>Error</FormHelperText> */}
            </GridItem>   
        </GridContainer>                 
    
        </CardBody>
        {/* <Button color="primary" className={classes.pullRight} onClick={ () => setIsAluno(false) }>
            Mudar Tela
        </Button> */}
        {/* <CardFooter className={classes.justifyContentBetween}>    
        <FormControl required error={errors.checkboxInput} component="fieldset" className={classes.formControl}>                      
            <FormGroup>

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
                    name="checkboxInput"
                    inputRef={ register }                          
                />
                }                      
                classes={{ label: classes.label }}
                label="I'm not a robot"
            />  
            </FormGroup>
            <FormHelperText>{errors.checkboxInput ? errors.checkboxInput.message : ""}</FormHelperText>
        </FormControl>                 
        <Button type="submit" color="primary" className={classes.pullRight}>
            Send Message
        </Button>                         
        </CardFooter> */}

    </Grow>
    </>          
  );
}
