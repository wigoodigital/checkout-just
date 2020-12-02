/*eslint-disable*/
import React from "react";
import { useEffect, useState } from 'react';
// react components for routing our app without refresh
import Link from "next/link";
import Router from 'next/router'

import PropTypes from 'prop-types';



// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from '@material-ui/core/CircularProgress';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
// core components
import Head from 'next/head'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Input from '@material-ui/core/Input';

import MaskedInput from 'react-text-mask'


import SectionFooter from "pages-sections/footer/SectionFooter.js";

import axios from 'axios';

import loginPageStyle from "assets/jss/nextjs-material-kit-pro/pages/loginPageStyle.js";

import image from "assets/img/bg7.jpg";


function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]}
      // placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const [values, setValues] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '1320',
  });

  
  const [cpfUser, setCpfUser] = useState("");
  const handleFocus = (event) => event.target.select();

  // const [user, setUser] = useState({
  //   nome: "",
  //   email: "",
  //   cpf: "",
  // });
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    message: ""
  });

  const [dangerError, setDangerError] = useState(false);

  const [faleConosco, setFaleConosco] = useState(false);

  const fetchData = async (cpf) => {
    // await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf} 389.727.318-70`)
    await axios.get(`https://api.fale.justfit.com.br/fechamentounidade/consultaExtrato?cpf=${cpf}`)
      .then(res => {
        setError(false);
        // setUsers(prevState => [...prevState, ...res.data]);
        setUser(res.data);
        // console.log(res.data.cliente);

        if(res.data.error){
          console.log(error);
        
          switch(res.data.error) {
            case 'Cliente já possue uma oferta cadastrada.':                
              setErrorMessage({
                title: "Você já selecionou uma oferta",
                message: "Em caso de dúvida, envie uma mensagem no fale conosco"
              });
              setFaleConosco(true);
              break; 
            default:
              setErrorMessage({
                title: res.data.error,
                // message: "Verifique seu CPF e tente novamente"
                message: ""
              });
              break;
          }   
          
          setError(true);

        } else {
          localStorage.setItem('@justfit/user', JSON.stringify(res.data));
          Router.push('/menu');
        }        
        
      })
      .catch((error) => {
        console.log(error);
        setDangerError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  React.useEffect(() => {
    // console.log(user);
  }, [user]);




  
  // function handleClick(event) {
  //   e.preventDefault();
  //   console.log('O link foi clicado.');
  //   alert(cpfUser);
  //   console.log(cpfUser);
  // }

  // function handleChange(event) {
  //   setError(false);
  //   event.preventDefault();      
  //   setCpfUser(event.target.value);       
  // }

  function handleClick(event) {
    event.preventDefault();
    setCpfUser("");
    setError(false);
    setFaleConosco(false);
    
  }

  function handleChange(event) {

    setError(false);
    setDangerError(false);
    event.preventDefault(); 
    setCpfUser(event.target.value); 
  };
  
  const handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
      fetchData(cpfUser);       
  }
  

  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Histórico do Aluno - Just Fit</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Header
        absolute
        color="transparent"
        // brand="NextJS Material Kit PRO"
        // imgBrand={image}
        links={<HeaderLinks dropdownHoverColor="info" />}
      />

      


      <div
        className={classes.pageHeader}
        style={{                    
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={4}>
              <Card>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <CardHeader
                    color="info"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Digite o seu CPF</h4>    
                  </CardHeader>                  
                  <CardBody signup>  

                    {dangerError && (
                      <SnackbarContent
                        message={
                          <span>
                            <b>Erro ao buscar os dados:</b> Tente novamente mais tarde
                          </span>
                        }
                        // close
                        color="danger"
                        icon="info_outline"
                      />
                    )}
                    
                    {error && (
                      <SnackbarContent
                        message={
                          <span>
                            <b>{errorMessage.title}</b> <br/> {errorMessage.message}
                          </span>
                        }
                        // close
                        color="warning"
                        icon="info_outline"
                      />
                    )}


                    {/* <Input
                      value={values.textmask}
                      onChange={handleChange}
                      name="textmask"
                      id="formatted-text-mask-input"
                      inputComponent={TextMaskCustom}
                    /> */}


                                    


                    {/* <CustomInput
                      id="cpf"
                      // name="textmask"                      
                      formControlProps={{
                        fullWidth: true
                      }}                      
                      inputProps={{
                        name: "textmask",
                        placeholder: "CPF...",
                        type: "text",
                        value: values.textmask,
                        onChange: handleChange,
                        inputComponent: TextMaskCustom,
                        startAdornment: (
                          <InputAdornment position="start">
                            <AssignmentInd className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />  */}

                    {!faleConosco && (

                      <CustomInput
                        id="cpf"
                        formControlProps={{
                          fullWidth: true
                        }}                      
                        inputProps={{
                          placeholder: "CPF...",
                          type: "text",
                          value: cpfUser,
                          onChange: handleChange,
                          onFocus: handleFocus,
                          inputComponent: TextMaskCustom,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AssignmentInd className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      /> 
                    )}
                   

                    
                    



                  {/* {!error && loading && <div>Loading data...</div>}
                  {error && <div>There was an error.</div>}
                  {!error && client && (                    
                    <table>
                      <thead>
                        <tr>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr key={1}>
                            <td>{client.nome}</td>
                            <td>{client.email}</td>
                            <td>{client.cpf}</td>
                          </tr>

                        {users.map((user, key) => (
                          <tr key={key}>
                            <td>{user.cliente.responsavelLegal}</td>
                            <td>{user.cliente.email}</td>
                            <td>{user.cliente.cpf}</td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  )} */}


                  </CardBody>
                  <div className={classes.textCenter}>
                  

                    {loading && (
                      <CircularProgress style={{ color: "#cad300" }} size={30}/>
                    )}
                    {!loading && !faleConosco && (
                      <Button button round color="primary" size="lg" type="submit" value="Submit">
                        Ver meu extrato
                      </Button>
                    )}

                    {faleConosco && (
                      <>
                        <Button button round color="primary" size="lg" href="https://justfit.com.br/fale-conosco/">
                          Ir para Fale Conosco
                        </Button>
                        <br/>
                        <Button button round color="secondary" size="lg" onClick={handleClick}>
                          Voltar
                        </Button>
                      </>
                    )}
                 
                  </div>
                </form>
              </Card>
            </GridItem>            
          </GridContainer>
        </div>   

        
        
        <SectionFooter/>

   
      </div>

    
    </div>
  );
}
