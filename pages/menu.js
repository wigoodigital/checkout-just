/*eslint-disable*/
import React from "react";
import { useEffect, useState } from 'react';
// react components for routing our app without refresh
import Link from "next/link";

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

import SectionFooter from "pages-sections/footer/SectionFooter.js";
import SectionPills from "pages-sections/menu/SectionPills.js";

import axios from 'axios';

import loginPageStyle from "assets/jss/nextjs-material-kit-pro/pages/menuPageStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const [user, setUsers] = useState({
    cliente: {
      nome: "",
      cpf: "",
      empresaNome: "",
      plano: ""
    },
    
    creditos: {
      diasCredito: "",
      diasUsados: "",
      valorCredito: "",
      valorDebito: "",
      valorSaldo: "",
    },

    extrato: [
      {
        codigo: 92167,
        contrato: 92167,
        dataPagamento: "09/03/2020",
        dataVencimento: "09/03/2020",
        descricao: "PARCELA 8",
        diasCredito: 20,
        diasUsados: 11,
        estaEmRemessa: false,
        formaPagamento: "CARTAO RECORRENTE REDE MATRIZ",
        meioPagamento: "MASTERCARD",
        parcela: 1720707,
        situacao: "PAGO",
        valor: 69.9,
        valorCredito: 46.6,
        valorDebito: 0
      }
    ],
    ofertas: [
      {
        id: 1,
        clicou_personal: true,
        clicou_personal_60: false,
        descricao: "1 opção",
        opcao: 1,
        plano_pacto: "",
        qtde_dias_clicou_personal: 30,
        tipo_plano: "JUST",
        transferencia: false,
        upgrade_plano: true,
        valor_credito: "939,00",
        valor_maximo: "200,00",
        valor_mensalidade: "79,9",
        valor_minimo: "150,01",
        diasDisponiveis: "360"
      },
      {
        id: 2,
        clicou_personal: true,
        clicou_personal_60: false,
        descricao: "2 opção",
        opcao: 1,
        plano_pacto: "",
        qtde_dias_clicou_personal: 30,
        tipo_plano: "JUST",
        transferencia: false,
        upgrade_plano: true,
        valor_credito: "939,00",
        valor_maximo: "200,00",
        valor_mensalidade: "79,9",
        valor_minimo: "150,01",
        diasDisponiveis: "360"
      },
    ]


    
       
  });  

  const [loadClient, setClient] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setError(false);
        setUsers(prevState => [...prevState, ...res.data]);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchStorage = () => {
    // console.log(JSON.parse(localStorage.getItem('@justfit/user')))
    setUsers(JSON.parse(localStorage.getItem('@justfit/user')))
  
  }

  React.useEffect(() => {
    // fetchData();
  }, []);

  React.useEffect(() => {
    fetchStorage();
  }, []);

  React.useEffect(() => {
    // console.log(user);
  }, [user]);



  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Situação do Aluno - Just Fit</title>
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
          <SectionPills user={user}/>          
        </div>   

        <SectionFooter/> 

      </div>
    </div>
  );
}
