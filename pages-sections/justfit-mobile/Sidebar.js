import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Lateral from "components/Lateral/Lateral.js";

import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Scrollbar from 'perfect-scrollbar-react';
import Typography from '@material-ui/core/Typography';
import 'perfect-scrollbar-react/dist/style.min.css';

import seloCadeado from "assets/img/selo-cadeado.png";
import siteSeguro from "assets/img/site-seguro.png";
import imgSsl from "assets/img/cadeado.png";
import lestencrypt from "assets/img/letsencrypt_White.png";
import imgCard from "assets/img/card-list.png";
import imgDebit from "assets/img/debit-list.png";
import imgDebito from "assets/img/debito.png";

import styles from "assets/jss/nextjs-material-kit-pro/pages/lateral/lateralStyle.js";


const useStyles = makeStyles(styles);



export default props => {
    const classes = useStyles();


    const [expanded, setExpanded] = React.useState(false);

const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};
  return (
    <Menu>
      <GridContainer  className={classes.contentMobile} style={{padding:0,margin:0}} justify="center" align='center' >        
        <GridItem xs={12} sm={12} md={12} align='center' justify='center'>
            
             <h5 style={{padding:0,margin:0,color:'#787878',fontSize:'16px',marginTop:'20px',}}>PLANO <strong style={{color:'#484848'}} >FIT+ </strong></h5>
             <h5 style={{padding:0,margin:0,marginBottom:'30px',fontSize:'16px'}}>UNIDADE BARRETOS</h5>
    
               </GridItem>
               
               {/* <GridItem justify='center' xs={12} sm={2} md={10}>
               <label style={{padding:0,margin:0,fontSize:'10px',fontWeight: 500,textAlign: 'left'}}>INSERIR CUPOM:</label>
               <input style={{border:'1px solid #D9D9D9', fontSize:'20px', width: '100%'}}></input>
        
               </GridItem> */}

               <GridItem justify='center' align='center' style={{marginTop:'30px'}}  xs={12} sm={12} md={12}>
               <h6 style={{padding:0,margin:0,fontSize:'12px', textAlign: 'center', fontWeight: 600,}}>INFORMAÇÕES DE COBRANÇA</h6> 
               
        
               </GridItem>
              
               <GridItem xs={12} sm={12} md={12}>
                      <div className='billing-info'>

                        <div style={{ display: 'flex', maxHeight: '400px', backgroundColor: 'white', padding: 20, borderRadius:13 }}>
                          <Scrollbar>
                            <div className="list-data">
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                  <Typography className={classes.heading}>1ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 59,80</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 29,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 29,90</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel2bh-content"
                                  id="panel2bh-header"
                                >
                                  <Typography className={classes.heading}>2ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel3bh-content"
                                  id="panel3bh-header"
                                >
                                  <Typography className={classes.heading}>3ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
          </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel4bh-content"
                                  id="panel4bh-header"
                                >
                                  <Typography className={classes.heading}>4ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel5bh-content"
                                  id="panel5bh-header"
                                >
                                  <Typography className={classes.heading}>5ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel6bh-content"
                                  id="panel6bh-header"
                                >
                                  <Typography className={classes.heading}>6ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel7bh-content"
                                  id="panel7bh-header"
                                >
                                  <Typography className={classes.heading}>7ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel8bh-content"
                                  id="panel8bh-header"
                                >
                                  <Typography className={classes.heading}>8ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel9bh-content"
                                  id="panel9bh-header"
                                >
                                  <Typography className={classes.heading}>9ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel10bh-content"
                                  id="panel10bh-header"
                                >
                                  <Typography className={classes.heading}>10ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel11bh-content"
                                  id="panel11bh-header"
                                >
                                  <Typography className={classes.heading}>11ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                              
                              <Accordion className={classes.MuiAccordionroot}  expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel12bh-content"
                                  id="panel12bh-header"
                                >
                                  <Typography className={classes.heading}>12ª Cobrança</Typography>
                                  <Typography className={classes.secondaryHeading}> R$ 79,90
                                
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display:'flex',flexDirection:'column'}}>
                                <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Mensalidade</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 79,90</Typography>
                                  </GridItem>
                                  <GridItem md={12} sm={12} xs={12} style={{display:'flex',flex:1,flexDirection:'row',padding:0,margin:0,}} >
                                <Typography className={classes.heading2}>Taxa de adesão</Typography>
                                  <Typography className={classes.secondaryHeading2}> R$ 0,00</Typography>
                                  </GridItem>
                                </AccordionDetails>
                              </Accordion>

                            </div>
                          </Scrollbar>
                        </div>

                      </div>
                    </GridItem>
                  
            
               <GridContainer justify='center' align='center' style={{marginTop:'20px'}}>

                   </GridContainer>

                   

                  
     
      </GridContainer>
    </Menu>
  );
};