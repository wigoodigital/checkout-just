import React from "react";
import { useEffect, useState } from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

// @material-ui/core components
import { withStyles, makeStyles } from "@material-ui/core/styles"
import InputAdornment from "@material-ui/core/InputAdornment";;

import classNames from 'classnames';

import axios from 'axios';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import ExitToApp from "@material-ui/icons/ExitToApp";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Email from "@material-ui/icons/Email";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
import CheckCircle from "@material-ui/icons/CheckCircle";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import EventAvailable from "@material-ui/icons/EventAvailable";
import ErrorOutline from "@material-ui/icons/ErrorOutline";

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import CircularProgress from '@material-ui/core/CircularProgress';

import MaskedInput from 'react-text-mask'

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Button from "components/CustomButtons/Button.js";

import SectionCards from "pages-sections/menu/SectionCards.js";
import SectionCardsReabertura from "pages-sections/menu/SectionCardsReabertura.js";
import SectionNewOffer from "pages-sections/menu/SectionNewOffer.js";
import SectionFeatures from "pages-sections/menu/SectionFeatures.js";
import SectionFeaturesReabertura from "pages-sections/menu/SectionFeaturesReabertura.js";
import SectionModal from "pages-sections/menu/SectionModal.js";

import pillsStyle from "assets/jss/nextjs-material-kit-pro/pages/menuSections/pillsStyle.js";


import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";





const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const columns = [
  { id: 'situacao', label: 'Situação', minWidth: 100 },
  { id: 'valorPago', label: 'Valor', minWidth: 100 },
  { id: 'descricao', label: 'Descrição', minWidth: 100 },
  { id: 'dataVencimento', label: 'Vencimento', minWidth: 100 },
  { id: 'diasUsados', label: 'Dias Utilizados', minWidth: 100 },
  { id: 'valorDebito', label: 'Débito', minWidth: 120},
  { id: 'diasCredito', label: 'Dias de crédito', minWidth: 100 },
  { id: 'valorCredito', label: 'Crédito', minWidth: 120 },  
];

const columnsUnidade = [
  { id: 'situacao', label: 'Situação', minWidth: 100 },
  { id: 'valorPago', label: 'Valor', minWidth: 100 },
  { id: 'descricao', label: 'Descrição', minWidth: 100 },
  { id: 'dataVencimento', label: 'Vencimento', minWidth: 100 },
  { id: 'diasUsados', label: 'Dias Utilizados', minWidth: 100 },  
  { id: 'diasCredito', label: 'Dias de crédito', minWidth: 100 },  
];


function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={['(', /[1-9]/, /[0-9]/,')', ' ', /[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/ , /[0-9]/]}
      // placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};




const useStyles = makeStyles(pillsStyle);

export default function SectionPills(props) {
  const classes = useStyles();
  // const [activeItemIndex, setActiveItemIndex] = React.useState(15);      
  // const [activeItemIndex, setActiveItemIndex] = React.useState(11);      
  const matches = useMediaQuery('(max-width:747px)');  
 
  const [changeColor, setChangeColor] = React.useState(true);


  const [user, setUsers] = useState({
    cliente: {
      nome: ""
    }
  });  

  const [selectedOffer, setSelectedOffer] = useState({
      id: 24,
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
      valor_minimo: "150,01"
  });


  const [totalTable, setTotalTable] = useState({
    debito: 0,
    credito: 0,
  });  
  
  const [personalData, setPersonalData] = useState({
    email: "",
    celular: "",
    message:""
  });  


  const [requestOffer, setRequestOffer] = useState({

    matricula: "220472",
    id_oferta: 24,
    unidade_cnpj: "16738149001508",
    historico_parcelas: [
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
    ]
  });
  
  const [requestReembolso, setRequestReembolso] = useState({

    matricula: "220472",
    // id_oferta: 24,
    unidade_cnpj: "16738149001508",
    creditos: {
      diasCredito: "",
      diasUsados: "",
      valorCredito: "",
      valorDebito: "",
      valorSaldo: "",
    },
    historico_parcelas: [
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
    ]
  });
  
  const [requestFale, setRequestFale] = useState({
    
    email: "gabriel.gds96@gmail.com",
    cpf: props.user.cliente.cpf,
    nome: props.user.cliente.nome,
    telefone: "974901516",
    messagem: "Quero cancelar meu plano, como eu faço ?",
    id_unidade: 1,
    aluno: "S",
    assunto: "Situação da aluno - Falar com o gerente"
    
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [showOptions, setShowOptions] = useState(false);
  const [unidadeAberta, setUnidadeAberta] = useState(true);
  const [inadimplente, setInadimplente] = useState(true);
  const [showModal, setShowModal] = useState((unidadeAberta && !inadimplente) ? true : false);
  const [saldoTop, showSaldoTop] = useState(true);
  const [saldoNegativo, showSaldoNegativo] = useState(true);

  const [activeItemIndex, setActiveItemIndex] = useState(unidadeAberta ? 11 : 15);  
  
  
  const fetchDataConfirmar = async (sendRequest) => {  
    console.log(sendRequest);  
    await axios.post("https://api.fale.justfit.com.br/oferta/confirmar", sendRequest)
      .then(res => {
        setError(false);
        setActiveItemIndex(8);
        // setUsers(prevState => [...prevState, ...res.data]);
        // setUser(res.data);
        // console.log(res.data.cliente);
        // localStorage.setItem('@justfit/user', JSON.stringify(res.data));
        // Router.push('/menu');
        
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  const fetchDataReembolso = async (sendRequest) => {    
    console.log(sendRequest);
    console.log("fetchDataReembolso");
    await axios.post("https://api.fale.justfit.com.br/reembolso/confirmar", sendRequest)
      .then(res => {
        setError(false);
        setActiveItemIndex(9);
        // setUsers(prevState => [...prevState, ...res.data]);
        // setUser(res.data);
        // console.log(res.data.cliente);
        // localStorage.setItem('@justfit/user', JSON.stringify(res.data));
        // Router.push('/menu');
        
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  
  const fetchDataReembolsoLog = async (sendRequest) => {    
    console.log(sendRequest);
    console.log("fetchDataReembolsoLog");
    await axios.post("https://api.fale.justfit.com.br/log/reembolso", sendRequest)
      .then(res => {
        setError(false);
        // setActiveItemIndex(9);
        // setUsers(prevState => [...prevState, ...res.data]);
        // setUser(res.data);
        // console.log(res.data.cliente);
        // localStorage.setItem('@justfit/user', JSON.stringify(res.data));
        // Router.push('/menu');
        
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        // setLoading(false);
      });
  };
  
  const fetchDataFale = async (sendRequest) => {    
    // console.log(sendRequest);
    await axios.post("https://api.fale.justfit.com.br/solicitacoes", sendRequest)
      .then(res => {
        setError(false);
        setActiveItemIndex(7);
        // setUsers(prevState => [...prevState, ...res.data]);
        // setUser(res.data);
        // console.log(res.data.cliente);
        // localStorage.setItem('@justfit/user', JSON.stringify(res.data));
       
        
        
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmitOferta = (event) => {
    event.preventDefault();    
       
    
    if(personalData.email != "" && personalData.celular != ""){
      setLoading(true);
      fetchDataConfirmar({
        matricula: props.user.cliente.matricula,
        id_oferta: selectedOffer.id,
        email: personalData.email,
        telefone: personalData.celular,
        unidade_cnpj: props.user.cliente.unidade_cnpj,   
        creditos: props.user.creditos,   
        historico_parcelas: props.user.extrato
      });  
    } else {
      setError(true);
    }
    
  }
  
  
  const handleSubmitReembolso = (event) => {
    event.preventDefault();

    if(personalData.email != "" && personalData.celular != ""){
      setLoading(true);
      fetchDataReembolso({
        matricula: props.user.cliente.matricula,
        email: personalData.email,
        telefone: personalData.celular,
        unidade_cnpj: props.user.cliente.unidade_cnpj,
        creditos: props.user.creditos,
        historico_parcelas: props.user.extrato
      });
      fetchDataReembolsoLog({
        matricula: props.user.cliente.matricula,
        nomeunidade: props.user.cliente.empresaNome 
      });      
    } else {
      setError(true);
    }
        
  }
  
  const handleSubmitReembolsoLog = (event) => {
    event.preventDefault();

    console.log("handleSubmitReembolsoLog");

    fetchDataReembolsoLog({
      matricula: props.user.cliente.matricula,
      nomeunidade: props.user.cliente.empresaNome 
    });  
   
        
  }


  const handleSubmitFale = (event) => {
    event.preventDefault();
    // setLoading(true);    

    if(personalData.email != "" && personalData.celular != ""){
      setLoading(true);
      fetchDataFale({

        email: personalData.email,
        cpf: props.user.cliente.cpf,
        nome: props.user.cliente.nome,
        telefone: personalData.celular,
        messagem: personalData.message,
        id_unidade: 1,
        aluno: "S",
        assunto: "Situação da aluno - Falar com o gerente"
        
      });   
    } else {
      setError(true);
    }

        
  }

  function handleChange(event) {   
    setError(false);
    event.preventDefault(); 
    let value = event.target.value;
    switch(event.target.id) {
      case 'email':        
        setPersonalData(prevState => {
          // Object.assign também funcionaria
          return {...prevState, email: value};
        });
        break;
      case 'celular':       
  

        setPersonalData(prevState => {
          // Object.assign também funcionaria
          return {...prevState, celular: value};
        });  
        break;   
      default:
        // console.log("message");
        setPersonalData(prevState => {
          // Object.assign também funcionaria
          return {...prevState, message: value};
        });
        break;
    }                                 
  }


  const handleFocus = (event) => event.target.select();


  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData('Aluno 1', 'IN', 1324171354, 3287263),
    createData('Aluno 2', 'CN', 1403500365, 9596961),
    createData('Aluno 3', 'IT', 60483973, 301340),
    createData('Aluno 4', 'US', 327167434, 9833520),
    createData('Aluno 5', 'CA', 37602103, 9984670),
    createData('Aluno 6', 'AU', 25475400, 7692024),
    createData('Aluno 7', 'DE', 83019200, 357578),
    createData('Aluno 8', 'IE', 4857000, 70273),
    createData('Aluno 9', 'MX', 126577691, 1972550),
    createData('Aluno 10', 'JP', 126317000, 377973),
    createData('Aluno 11', 'FR', 67022000, 640679),
    createData('Aluno 12', 'GB', 67545757, 242495),
    createData('Aluno 13', 'RU', 146793744, 17098246),
    createData('Aluno 14', 'NG', 200962417, 923768),
    createData('Aluno 15', 'BR', 210147125, 8515767),
  ];

  const rowsUser = props.user.extrato;

  


  useEffect(() => {
    setUsers(props.user)
    if(props.user.ofertas.length > 0) {
      setShowOptions(true)
    } else {
      setShowOptions(false)      
    }
  }, [props.user]);
  
  useEffect(() => {
    // console.log(user.cliente.nome);
    console.log(user);
  }, [user]);
  
  useEffect(() => {
    // console.log(user.cliente.nome);
    console.log(user);

    let debito = 0;
    let credito = 0;
    {rowsUser.map((row) => (
      debito = debito + row.valorDebito,
      credito = credito + row.valorCredito
    ))}

    setTotalTable({
      debito,
      credito 
    })

  }, [rowsUser]);


  useEffect(() => {

    setTimeout(()=> setChangeColor(!changeColor), 700)

    
  }, [changeColor]);

  useEffect(() => {    
    if(unidadeAberta && !inadimplente){      
      setTimeout(()=> setShowOptions(false), 700)
    }
  }, [unidadeAberta]);


  useEffect(() => {

    if( activeItemIndex == 11){
      // setTimeout(()=> showSaldoTop(false), 700)
      showSaldoTop(false)
    } else {
      showSaldoTop(true)
    }


  }, [activeItemIndex]);





  
  

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          {/* situacao  */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <div className={classes.title}>                
                <h3>Seja Bem-vindo(a), {props.user.cliente.nome}</h3>          
              </div>
              <div >            
                <span className={classes.title}>CPF:</span> {props.user.cliente.cpf}<br/>
                <span className={classes.title}>Unidade:</span> {props.user.cliente.empresaNome}<br/>
                <span className={classes.title}>Plano:</span> {props.user.cliente.plano}<br/>
              </div>
            </GridItem>
            { !unidadeAberta && (
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <div className={classNames(classes.textRight, classes.marginBottomZero)}>
                  <div className={classNames(classes.title, classes.marginBottomZero)}>
                    <span>Saldo</span>   
                    { showOptions && (
                      <h2 className={classes.marginBottomZero} style={{ color: "#c9d302", marginTop: "0px" }}>R$ {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}</h2>                            
                    )} 
                    { !showOptions && (
                      <h2 className={classes.marginBottomZero} style={{ color: "red", marginTop: "0px" }}>R$ {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}</h2>                            
                    )} 
                  </div>                
                  <div className={classes.textRight}>
                    Confira aqui as unidades <br/>que continuam abertas
                    <br/>                  
                    <Link href="/historico-do-aluno">                      
                      <Button button round color="primary" size="lg" target="_blank" href="https://justfit.com.br/unidades" style={{ color: "#272727", marginTop: "10px" }}>
                        Ver unidades 
                      </Button>
                    </Link>
                  </div>

                </div>
              </GridItem>
            ) }
            { unidadeAberta && saldoTop && (
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <div className={classNames(classes.textRight, classes.marginBottomZero)}>
                  <div className={classNames(classes.title, classes.marginBottomZero)}>
                    <span>Dias de crédito</span>   
                    { !showOptions && (                      
                      <h3 className={classes.marginBottomZero} style={{ color: "#c9d302", marginTop: "0px" }}>{props.user.creditos.diasCredito} dias</h3>
                    )} 
                    { showOptions && (                      
                      // <h3 className={classes.marginBottomZero} style={{ color: "red", marginTop: "0px" }}>- {props.user.creditos.diasCredito} dias</h3>
                      <h3 className={classes.marginBottomZero} style={{ color: "#c9d302", marginTop: "0px" }}>{props.user.creditos.diasCredito} dias</h3>
                    )}                     
                  </div>                
                  <div className={classes.textRight}>
                    à partir de <span style={{ color: "#c9d302", fontWeight: "900" }}>13/07/2020</span>
                      
                    { saldoNegativo && (
                      <>
                        <br/>    
                        <br/>  
                        <span style={{ fontWeight: "900" }}>Saldo</span>   
                        <h3 className={classes.marginBottomZero} style={{ color: "red", marginTop: "0px" }}>- R$ {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}</h3>                            
                      </>
                    )}               
                    {/* <Link href="/historico-do-aluno">                      
                      <Button button round color="primary" size="lg" target="_blank" href="https://justfit.com.br/unidades" style={{ color: "#272727", marginTop: "10px" }}>
                        Ver unidades 
                      </Button>
                    </Link> */}
                  </div>

                </div>
              </GridItem>
            ) }
            {/* <GridItem xs={12} sm={12} md={12} lg={6}>
              <div className={classNames(classes.textRight, classes.marginBottomZero)}>
                <div className={classNames(classes.title, classes.marginBottomZero)}>
                  <span>Saldo</span>   
                  { showOptions && (
                    <h2 className={classes.marginBottomZero} style={{ color: "#c9d302", marginTop: "0px" }}>R$ {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}</h2>                            
                  )} 
                  { !showOptions && (
                    <h2 className={classes.marginBottomZero} style={{ color: "red", marginTop: "0px" }}>R$ {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}</h2>                            
                  )} 
                </div>                
                <div className={classes.textRight}>
                  Confira aqui as unidades <br/>que continuam abertas
                  <br/>                  
                  <Link href="/historico-do-aluno">                      
                    <Button button round color="primary" size="lg" target="_blank" href="https://justfit.com.br/unidades" style={{ color: "#272727", marginTop: "10px" }}>
                      Ver unidades 
                    </Button>
                  </Link>
                </div>

              </div>
            </GridItem> */}
            
          </GridContainer>

          
          <SectionModal setActive={setActiveItemIndex} setShowModal={setShowModal} showModal={showModal} />
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              {/* <h3>
                <small>Vertical tabs</small>
              </h3> */}
              <NavPills
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 10, md: 10 }
                }}
                active={activeItemIndex}
                setActive={setActiveItemIndex}
                color="primary"
                tabs={[
                  {
                    tabButton: "Meu extrato",
                    tabIcon: Dashboard,
                    tabContent: (
                      <>

                      <TableContainer component={Paper} className={classes.containerTable} style={{ maxHeight: "640px" }}>
                        <Table stickyHeader className={classes.table} aria-label="customized table">
                          <TableHead>
                            <TableRow>
                              {

                                unidadeAberta && !saldoNegativo ? columnsUnidade.map((column) => (
                                  <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </StyledTableCell>
                                )) : columns.map((column) => (
                                  <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </StyledTableCell>
                                ))

                              }
                              
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rowsUser.map((row) => (
                              <StyledTableRow key={row.name}>
                                {/* <StyledTableCell component="th" scope="row">
                                  {row.name}
                                </StyledTableCell> */}
                                <StyledTableCell align="right">{row.situacao}</StyledTableCell>
                                <StyledTableCell align="right">R$ {parseFloat(row.valor).toFixed(2).toString().replace(".", ",")}</StyledTableCell>
                                <StyledTableCell align="right">{row.descricao}</StyledTableCell>
                                <StyledTableCell align="right">{row.dataVencimento}</StyledTableCell>
                                <StyledTableCell align="right">{row.diasUsados}</StyledTableCell>
                                { (!unidadeAberta || saldoNegativo) && (
                                  <StyledTableCell align="right" style={{ color: "red" }}>R$ {parseFloat(row.valorDebito).toFixed(2).toString().replace(".", ",")}</StyledTableCell>
                                  )
                                }
                                <StyledTableCell align="right">{row.diasCredito}</StyledTableCell>
                                { (!unidadeAberta || saldoNegativo) && (
                                  <StyledTableCell align="right">R$ {parseFloat(row.valorCredito).toFixed(2).toString().replace(".", ",")}</StyledTableCell>
                                  )
                                }
                              </StyledTableRow>
                            ))}

                            {unidadeAberta && !saldoNegativo  ? (
                              <>                               
                  
                                <StyledTableRow>
                                  <StyledTableCell colSpan={2} />
                                  <StyledTableCell colSpan={3}><b>Saldo Total</b></StyledTableCell>
                                  <StyledTableCell align="right"><b>(=) {props.user.creditos.diasCredito} dias</b></StyledTableCell>
                                </StyledTableRow>
                              </>

                            ): (
                              <>
                                <StyledTableRow>
                                  <StyledTableCell colSpan={3} />
                                  {/* <StyledTableCell colSpan={2}><b>Total de débitos</b></StyledTableCell> */}
                                  <StyledTableCell colSpan={2}><b>Subtotal</b></StyledTableCell>
                                  <StyledTableCell align="right" style={{ color: "red" }}>(-) R$ {parseFloat(totalTable.debito).toFixed(2).toString().replace(".", ",")}</StyledTableCell>
                                  <StyledTableCell colSpan={1} />
                                  <StyledTableCell align="right">(+) R$ {parseFloat(totalTable.credito).toFixed(2).toString().replace(".", ",")}</StyledTableCell>
                                </StyledTableRow>
                  
                                <StyledTableRow>
                                  <StyledTableCell colSpan={3} />
                                  <StyledTableCell colSpan={4}><b>Saldo Total</b></StyledTableCell>
                                  <StyledTableCell align="right"><b>(=) R$ {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}</b></StyledTableCell>
                                </StyledTableRow>
                              </>
                             

                            )}    

                            
                            
                          </TableBody>               
                        </Table>
                      </TableContainer>
                     

                      { !unidadeAberta && showOptions && (
                        <div className={classes.textCenter} style={{ marginTop: "40px" }}>
                          {/* <Link href="/fechamento">                       */}
                            <Button button round color="primary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(1) }}>
                              Opções para receber meus créditos
                            </Button>
                          {/* </Link> */}
                        </div>
                      )}
                      
                      { !unidadeAberta && !showOptions && (
                        <div className={classes.textCenter} style={{ marginTop: "40px" }}>
                          {/* <Link href="/fechamento">                       */}
                            <h4>Fique tranquilo, nenhum valor será cobrado</h4>
                            <Button button round color="primary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(3) }}>
                              Falar com meu gerente
                            </Button>
                          {/* </Link> */}
                        </div>
                      )}

                      { unidadeAberta && (
                        <div className={classes.textCenter} style={{ marginTop: "40px" }}>
                          <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(11) }}>
                            Voltar
                          </Button>
                        </div>
                      )}

                      </>
                    )
                  },
                  {
                    tabButton: "Opções",
                    tabIcon: LibraryBooks,
                    tabHidden: !showOptions,
                    // tabHidden: true,
                    tabContent: (
                      <>
                        { !unidadeAberta && showOptions && (
                          <>
                          <SectionCards setActive={setActiveItemIndex} setOffer={setSelectedOffer} user={props.user}/>                      
                            <div className={classes.textCenter} style={{ marginTop: "10px" }}>
                              {/* <h4>Não está satisfeito com as ofertas?</h4> */}
                              {/* <Link href="/fechamento">                      */}
                                <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(4) }}>
                                {/* <Button button simple size="lg" style={{ maxWidth: "100%" }} onClick={() => { setActiveItemIndex(4) }}> */}
                                  Quero avaliar outras opções
                                </Button>
                              {/* </Link> */}
                            </div>
                          </>
                          
                        )}

                        { unidadeAberta && (
                          <>
                            <SectionCardsReabertura setActive={setActiveItemIndex} setOffer={setSelectedOffer} user={props.user}/>
                            <div className={classes.textCenter} style={{ marginTop: "10px" }}>
                              <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(11) }}>                            
                                Voltar
                              </Button>
                            </div>
                          </>
                          
                        ) }

                      </>
                      
                    )
                  },
                  {
                    tabButton: "Sair",
                    tabIcon: ExitToApp,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={9} lg={9}>
                          <span>
                            <h3 style={{ textAlign: "center" }}>
                              Desejar entrar com outro CPF?
                            </h3>
                            <br />                  
                            <div className={classes.textCenter}>
                              <Link href="/historico-do-aluno">                      
                                <Button button round color="primary" size="lg">
                                  Sim, desejo sair
                                </Button>
                              </Link>
                            </div>
                          </span>

                        </GridItem>
                      </GridContainer>                      
                    )
                  },
                  {
                    tabButton: "Contact",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (
                      <div className={classes.container}>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={8} md={6}>
                            <Card>
                              <form className={classes.form} onSubmit={handleSubmitFale}>
                                <CardHeader
                                  color="info"
                                  signup
                                  className={classes.cardHeader}
                                >
                                  <h4 className={classes.cardTitle}>Falar com gerente</h4>    
                                </CardHeader>                  
                                <CardBody signup>   

                                {error && (
                                    <SnackbarContent
                                      message={
                                        <span>
                                          <b>Erro ao enviar os dados:</b> Verifique os campos e tente novamente
                                        </span>
                                      }
                                      // close
                                      color="danger"
                                      icon="info_outline"
                                    />
                                  )}

                                  <CustomInput
                                    id="email"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      placeholder: "Email...",
                                      type: "text",
                                      value: personalData.email,
                                      onChange: handleChange,
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <Email className={classes.inputIconsColor} />
                                        </InputAdornment>
                                      )
                                    }}
                                  />                 
                                  <CustomInput
                                    id="celular"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      placeholder: "Celular...",
                                      type: "text",
                                      value: personalData.celular,
                                      onChange: handleChange,
                                      onFocus: handleFocus,
                                      inputComponent: TextMaskCustom,
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <PhoneIphone className={classes.inputIconsColor} />
                                        </InputAdornment>
                                      )
                                    }}
                                  />    

                                  <CustomInput
                                    labelText="Sua mensagem..."
                                    id="message"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      value: personalData.message,
                                      // onChange: handleChange(event, "message"),
                                      onChange: handleChange,
                                      multiline: true,
                                      rows: 5
                                    }}
                                  />             

                               

                                </CardBody>
                                <div className={classes.textCenter}>
                                  
                                  {/* <CircularProgress size={68} className={classes.fabProgress} /> */}
                                  
                                  {loading && (
                                    <CircularProgress style={{ color: "#cad300" }} size={30}/>
                                  )}
                                  {!loading && (
                                    <Button button round color="primary" size="lg" type="submit" value="Submit">
                                      Enviar mensagem
                                    </Button>
                                  )}
                                                                  
                                  {/* <Button button round color="primary" size="lg" onClick={() => { setActiveItemIndex(7) }}>
                                    Enviar mensagem
                                  </Button> */}
                                  
                    
                              
                                </div>
                              </form>
                            </Card>

                            <div className={classes.textCenter}>
                              <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { showOptions ? setActiveItemIndex(1) : setActiveItemIndex(0) }}>
                                Voltar
                              </Button>
                            </div>

                          </GridItem>            
                        </GridContainer>
                      </div>  
                    )
                  },
                  {
                    tabButton: "Options",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (
                      <SectionFeatures setActive={setActiveItemIndex} handleSubmit={handleSubmitReembolsoLog} />
                    )
                  },
                  {
                    tabButton: "Confirmation",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (
                      <GridContainer justify="center"  direction={ matches ? "column-reverse" : null }>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={6}
                          className={classes.gridItem}
                        >
                          <Card>
                            <form className={classes.form} onSubmit={handleSubmitOferta}>
                              <CardHeader
                                color="info"
                                signup
                                className={classes.cardHeader}
                              >
                                <h4 className={classes.cardTitle}>Confirmar dados</h4>    
                              </CardHeader>                  
                              <CardBody signup>   
                                {error && (
                                    <SnackbarContent
                                      message={
                                        <span>
                                          <b>Erro ao enviar os dados:</b> Verifique os campos e tente novamente
                                        </span>
                                      }
                                      // close
                                      color="danger"
                                      icon="info_outline"
                                    />
                                )}
                                <CustomInput
                                  id="email"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    placeholder: "Email...",
                                    type: "text",
                                    value: personalData.email,
                                    onChange: handleChange,                                    
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <Email className={classes.inputIconsColor} />
                                      </InputAdornment>
                                    )
                                  }}
                                />                 
                                <CustomInput
                                  id="celular"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    placeholder: "Celular...",
                                    type: "text",
                                    value: personalData.celular,
                                    onChange: handleChange,
                                    onFocus: handleFocus,
                                    inputComponent: TextMaskCustom,
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <PhoneIphone className={classes.inputIconsColor} />
                                      </InputAdornment>
                                    )
                                  }}
                                />            

                              

                              </CardBody>
                              <div className={classes.textCenter}>
                                
                                {/* <CircularProgress size={68} className={classes.fabProgress} /> */}
                                
                                {loading && (
                                  <CircularProgress style={{ color: "#cad300" }} size={30}/>
                                )}
                                {!loading && (
                                  <Button button round color="primary" size="lg" type="submit" value="Submit">
                                    Confirmar escolha
                                  </Button>
                                )}
                                         
                                                   
                                {/* <Button button round color="primary" size="lg" onClick={() => { setActiveItemIndex(9) }}>
                                  Confirmar escolha
                                </Button> */}
                                
                  
                            
                              </div>
                            </form>
                          </Card>
                          <div className={classes.textCenter}>
                            <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(1) }}>
                              Voltar
                            </Button>
                          </div>
                        </GridItem>
                        {!unidadeAberta && (

                          <GridItem
                            xs={12}
                            sm={12}
                            md={4}
                            className={classes.gridItem}
                          >
                          <h4 className={classes.title} style={{ marginBottom: "0" }}>Opção selecionada:</h4>
                          <h4 className={classes.title} style={{ color: "#cad300", margin: "20px 10px 0 10px" }}>OFERTA {selectedOffer.opcao}</h4>
                          <div style={{ margin: "10px 10px" }}>
                            <h3 className={classes.cardTitleWhite} style={{ marginTop: "0px", marginBottom: "0px" }}>                              
                              <small>R$</small><strike style={{ color: "red" }}><span style={{ color: "white" }}>{selectedOffer.valor_credito}</span></strike>
                            </h3>
                            por:
                            <h5 className={classes.cardTitleWhite} style={{ marginTop: "0px" }}>
                              <small>R$</small>{parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}
                            </h5>
                            <h5 className={classes.cardTitleWhite} style={{ marginTop: "0px", marginBottom: "0px" }}>
                              SEM CUSTO ADICIONAL
                            </h5>
                          </div>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>{selectedOffer.diasDisponiveis} dias</b> do Plano Fit Plus
                            </li>
                            <li>
                              <b>{selectedOffer.qtde_dias_clicou_personal} dias</b> de Personal Online {selectedOffer.opcao == 2 && ( "+60 anos" )}
                            </li>      
                            {selectedOffer.opcao == 2 && (
                              <li>
                                <b>Transferência</b> para um amigo(a) ou familiar
                            </li>  
                            )}               
                            <li>
                              Acesso a <b>TODAS</b> <br/>as unidades da rede
                            </li>             
                            <li>
                              Poltrona de massagem
                            </li>             
                            <li>
                              Direito a levar <b>5 convidados</b> <br/>para treinar <br/><small>de domingo a quinta e feriados</small>
                            </li>             
                            <li>
                              Acesso ao Wi-Fi
                            </li>             
                            <li>
                              Acompanhamento mensal de nível de gordura e idade corporal
                            </li>             
                            <li>
                              FIT Férias
                            </li>                    
                          </ul>

                          </GridItem>

                        )}
                        {unidadeAberta && (

                          <GridItem
                            xs={12}
                            sm={12}
                            md={4}
                            className={classes.gridItem}
                          >
                          <h4 className={classes.title} style={{ marginBottom: "0" }}>Opção selecionada:</h4>
                          <h4 className={classes.title} style={{ color: "#cad300", margin: "20px 10px 0 10px" }}>OFERTA {selectedOffer.opcao}</h4>

                              {selectedOffer.opcao == 1 && (
                                <>
                                  <div style={{ margin: "10px 10px" }}>
                                    1ª Mensalidade
                                    <h3 className={classes.cardTitleWhite} style={{ marginTop: "0px", marginBottom: "0px" }}>                                    
                                      GRÁTIS
                                    </h3>
                                    <br/>
                                    2ª Mensalidade
                                    <h5 className={classes.cardTitleWhite} style={{ marginTop: "0px" }}>
                                      <small>R$</small> R$ 39,90
                                    </h5>    
                                  </div>
                                  <ul className={classes.listUnstyled}>                                  
                                    <li>
                                      <b>{selectedOffer.qtde_dias_clicou_personal} dias</b> de Personal Online 
                                    </li>                                            
                                    {/* <li>
                                      Perdão de <b>100%</b> da dívida
                                    </li>                               */}
                                  </ul>
                                </>
                              )}                            
                              
                              {selectedOffer.opcao == 2 && (
                                <>
                                  <div style={{ margin: "10px 10px" }}>
                                    Crédito de 
                                    <h3 className={classes.cardTitleWhite} style={{ marginTop: "0px", marginBottom: "0px" }}>                                    
                                      {props.user.creditos.diasCredito} Dias
                                    </h3>
                                    {/* <br/>
                                    Pagar débito de
                                    <h5 className={classes.cardTitleWhite} style={{ marginTop: "0px" }}>
                                      <small>R$</small> {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}
                                    </h5>     */}
                                  </div>                
                                </>
                              )}                            
                                             
                          

                          </GridItem>

                        )}
                        
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "ConfirmationEstorno",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (
                      <GridContainer justify="center"  direction={ matches ? "column-reverse" : null }>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={6}
                          className={classes.gridItem}
                        >
                          <Card>
                            <form className={classes.form} onSubmit={handleSubmitReembolso}>
                              <CardHeader
                                color="info"
                                signup
                                className={classes.cardHeader}
                              >
                                <h4 className={classes.cardTitle}>Confirmar dados</h4>    
                              </CardHeader>                  
                              <CardBody signup>   
                                {error && (
                                    <SnackbarContent
                                      message={
                                        <span>
                                          <b>Erro ao enviar os dados:</b> Verifique os campos e tente novamente
                                        </span>
                                      }
                                      // close
                                      color="danger"
                                      icon="info_outline"
                                    />
                                )}
                                <CustomInput
                                  id="email"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    placeholder: "Email...",
                                    type: "text",
                                    value: personalData.email,
                                    onChange: handleChange,
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <Email className={classes.inputIconsColor} />
                                      </InputAdornment>
                                    )
                                  }}
                                />                 
                                <CustomInput
                                  id="celular"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    placeholder: "Celular...",
                                    type: "text",
                                    value: personalData.celular,
                                    onChange: handleChange,
                                    onFocus: handleFocus,
                                    inputComponent: TextMaskCustom,
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <PhoneIphone className={classes.inputIconsColor} />
                                      </InputAdornment>
                                    )
                                  }}
                                />            

                              

                              </CardBody>
                              <div className={classes.textCenter}>
                                
                                {/* <CircularProgress size={68} className={classes.fabProgress} /> */}

                                {loading && (
                                  <CircularProgress style={{ color: "#cad300" }} size={30}/>
                                )}
                                {!loading && (
                                  <Button button round color="primary" size="lg" type="submit" value="Submit">
                                    Confirmar escolha
                                  </Button>
                                )}
                                                                                    
                                {/* <Button button round color="primary" size="lg" onClick={() => { setActiveItemIndex(8) }}>
                                  Confirmar escolha
                                </Button> */}
                                
                  
                            
                              </div>
                            </form>
                          </Card>
                          <div className={classes.textCenter}>
                            <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(1) }}>
                              Voltar
                            </Button>
                          </div>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={4}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title} style={{ marginBottom: "0" }}>Opção selecionada:</h4>
                          <h4 className={classes.title} style={{ color: "#cad300", margin: "20px 10px" }}>Solicitação de reembolso</h4>                          
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>R$ {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")}</b> a ser reembolsado
                            </li>                                          
                                                                   
                          </ul>
                          <hr style={{ border: "1px solid #ffffff", marginTop: "30px" }} />
                          {/* <h4 className={classes.title}>Ainda tem alguma dúvida?</h4> */}
                          <p className={classes.description}>
                            O reembolso será feito através da sua forma de pagamento que consta em nosso cadastro e o seu plano será cancelado.
                          </p>
                          {/* <Button button round color="primary" size="lg" onClick={() => { setActiveItemIndex(3) }}>
                            Falar com gerente
                          </Button> */}
                                
                          {/* <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">Footwear</Badge>
                          <Badge color="rose">Luxury</Badge> */}
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "FeedbackContato",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (

                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6} lg={7}>
                          <span>
                            <div style={{ textAlign: "center" }}>

                              <CheckCircle className={classes.largeIcon} />
                            
                            <h3 style={{ textAlign: "center" }}>
                              Solicitação enviada com sucesso!
                              
                            </h3>
                              Em até 72 horas, o gerente entrará em contato
                            </div>
                            <br />                  
                            <div className={classes.textCenter}>
                              {/* <Link href="/fechamento">                       */}
                                {/* <Button button round color="primary" size="lg" onClick={() => { setActiveItemIndex(0) }}>
                                  Voltar para extrato
                                </Button> */}
                              {/* </Link> */}
                            </div>
                          </span>

                        </GridItem>
                      </GridContainer>
                      
                    )
                  },
                  {
                    tabButton: "FeedbackEstorno",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (

                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6} lg={7}>
                          <span>
                            <div style={{ textAlign: "center" }}>

                              <CheckCircle className={classes.largeIcon} />
                            
                            <h3 style={{ textAlign: "center" }}>
                              Solicitação enviada com sucesso!                              
                            </h3>
                            
                            <h4 style={{ textAlign: "center" }}>
                              Muito obrigado pela confiança e por esse tempo que passamos juntos.  
                              Esperamos que, em breve, nos encontremos novamente em uma nova unidade.                           
                            </h4>
                              Enviamos um email com os detalhes.
                              <br/>Para conta corrente, o reembolso será feito em até 15 dias. Para cartão de crédito, será feito em até 40 dias, dependendo da data de fechamento da sua fatura.
                            </div>
                            <br />                  
                            <div className={classes.textCenter}>
                              {/* <Link href="/fechamento">                       */}
                                {/* <Button button round color="primary" size="lg" onClick={() => { setActiveItemIndex(0) }}>
                                  Voltar para extrato
                                </Button> */}
                              {/* </Link> */}
                            </div>
                          </span>

                        </GridItem>
                      </GridContainer>
                      
                    )
                  },
                  {
                    tabButton: "FeedbackOferta",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (

                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6} lg={7}>
                          <span>
                            <div style={{ textAlign: "center" }}>

                              <CheckCircle className={classes.largeIcon} />
                            
                            <h3 style={{ textAlign: "center" }}>
                              Ótima escolha, parabéns! 
                              
                            </h3>
                              Enviamos um email com os detalhes.
                              <br/>Siga as instruções enviadas no email 
                              <br/>para confirmar os benefícios.
                            </div>
                            <br />                  
                            <div className={classes.textCenter}>
                              {/* <Link href="/fechamento">                       */}
                                {/* <Button button round color="primary" size="lg" onClick={() => { setActiveItemIndex(0) }}>
                                  Voltar para extrato
                                </Button> */}
                              {/* </Link> */}
                            </div>
                          </span>

                        </GridItem>
                      </GridContainer>
                      
                    )
                  },
                  {
                    tabButton: "FeedbackNewOffer",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (
                      <>
                        <SectionNewOffer setActive={setActiveItemIndex} setOffer={setSelectedOffer} user={props.user}/>

                        <div className={classes.textCenter} style={{ marginTop: "10px" }}>                          
                          <Button button round color="secondary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(11) }}>                          
                            Ver meus créditos
                          </Button>                        
                        </div>
                      </>
                
                    )
                  },
                  {
                    tabButton: "InfoCreditos",
                    tabIcon: ExitToApp,
                    tabHidden: true,
                    tabContent: (
                      <>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6} lg={7}>
                          <span>
                            <div style={{ textAlign: "center" }}>
                            { unidadeAberta && !inadimplente && (
                              <EventAvailable className={classes.largeIcon} />
                            )}
                            { unidadeAberta && inadimplente && (
                              <ErrorOutline color="warning" className={classes.largeIcon} />
                            )}
                              
                            
                            <h3 style={{ textAlign: "center" }}>
                              { unidadeAberta && !saldoNegativo &&(
                                <>
                                  Você possui <span style={{ color: "#c9d302", fontSize: "3rem" }}>{props.user.creditos.diasCredito}</span> dias de crédito<br/>
                                  À partir do dia <span style={{ color: "#c9d302" }}>13/07/2020</span>
                                </>
                              )}
                              { unidadeAberta && saldoNegativo && (
                                <>
                                  Identificamos um <br/>débito de <span style={{ color: "red" }}> - R$ {parseFloat(props.user.creditos.valorSaldo).toFixed(2).toString().replace(".", ",")} </span>
                                </>
                              )}
                              
                            </h3>
                              {/* Enviamos um email com os detalhes.
                              <br/>Siga as instruções enviadas no email 
                              <br/>para confirmar os benefícios. */}
                            </div>
                            <br />   
                            { unidadeAberta && inadimplente && !saldoNegativo &&(

                              <div className={classes.textCenter}>
                              {/* <h4>Deseja <span style={{ color: "#c9d302" }}>DOBRAR</span> os seus dias de crédito e <br/> <span style={{ color: "#c9d302" }}>QUITAR</span> seus débitos?</h4> */}
                              {/* <Link href="/fechamento">                       */}
                                <Button button round color={ changeColor ? "primary" : "secondary"} size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(1) }}>
                                  Opções para utilizar meus créditos
                                </Button>
                              {/* </Link> */}
                              </div>

                            ) }                              

                                           
                            
                          </span>

                        </GridItem>
                      </GridContainer>

                      { unidadeAberta && (
                        <>
                          {/* <div className={classes.textCenter}>
                            <h4>Algum dúvida sobre os dias de crédito?<br/> Entenda melhor visualizando seu extrato</h4>                              
                            <Button button round color="primary" size="lg" style={{ color: "#272727", maxWidth: "100%" }} onClick={() => { setActiveItemIndex(0) }}>
                              Ver extrato
                            </Button>  
                          </div>                          
                          <br/>
                          <br/> */}

                          <SectionFeaturesReabertura setActive={setActiveItemIndex} handleSubmit={handleSubmitReembolsoLog} />
                        </>
                        

                      ) }  

                      </>
                    )
                  }
              
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
