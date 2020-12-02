import React from "react";
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

export default function SectionContacts({ ...rest }) {
  // const { register, errors, handleSubmit} = useForm({
  //   validationSchema: SignupSchema
  // });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema)
  });
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

  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " " + classes.section}
        // style={{ backgroundImage: `url(${city})` }}
        // style={{ backgroundImage: `url(${city})` }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            {/* <GridItem xs={12} sm={12} md={8} className={classes.mlAuto}> */}
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes.card1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <CardHeader
                    contact
                    color="primary"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Identificação</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
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
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Last Name"
                          labelError={errors.last && errors.last.message}                          
                          error={errors.last ? true : false}
                          id="last"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            name: "last",
                            inputRef: register                            
                          }}
                        />
                      </GridItem>
                    </GridContainer>

                 
                    <CustomInput                      
                      labelText="Email Address"
                      labelError={errors.email && errors.email.message}
                      error={errors.email ? true : false}
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name: "email",
                        inputRef: register                            
                      }}
                    />
                    <CustomInput
                      labelText="Your Message"
                      labelError={errors.message && errors.message.message}
                      error={errors.message ? true : false}                      
                      id="message"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        name: "message",
                        inputRef: register   
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>    
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
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
    </div>
  );
}
