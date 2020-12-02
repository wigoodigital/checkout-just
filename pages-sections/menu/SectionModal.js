import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import CheckCircle from "@material-ui/icons/CheckCircle";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Check from "@material-ui/icons/Check";
// core components
import Button from "components/CustomButtons/Button.js";
import Success from "components/Typography/Success.js";

import modalStyle from "assets/jss/nextjs-material-kit-pro/modalStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


// const useStyles = makeStyles(modalStyle);

// const useStyles = makeStyles(
//   (theme) => ({
//     ...modalStyle(theme),
//     modalTeste: {
//       color: "#000"
//     }
//   }),
//   { withTheme: true },
// )

const useStyles = makeStyles(theme => 
  ({
    ...modalStyle(theme),
    modalIcon: {
      color: "#c9d200",
      fontSize: "6.1875rem"
    },
    modalFooter: {
      margin: 0,
      padding: "15px",
      textAlign: "center",
      display: "block",
      paddingTop: 0
    }
  })
);

export default function ModalOffer(props) {
  
  // const classes = withStyles(
  //   (theme) => ({
  //     ...modalStyle(theme),
  //     modalTeste: {
  //       color: "#000"
  //     }
  //   }),
  //   { withTheme: true },
  // )

  const classes = useStyles();

  return (
    <div>
      {/* <Button color="primary" onClick={() => props.setShowModal(true)}>
        Launch Demo Modal
      </Button> */}
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal
        }}
        open={props.showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.setShowModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => props.setShowModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          {/* <h4 className={classes.modalTitle}>Modal title</h4> */}
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <div style={{ textAlign: "center" }}>
            <CardGiftcardIcon color="primary" className={classes.modalIcon} />
            <br/>
            <h4 className={classes.modalTitle}>Temos um presente para você!</h4>
            <br/>

            <p>Como forma de agradecimento por estar ao nosso lado nesse tempo de pandemia, você se tornou um Aluno(a) <h3 style={{ color: "#c9d302", fontWeight: "900", marginTop: 0 }}>DIAMANTE</h3></p>
            <p>Agora você tem direito aos seguintes recursos:</p>
              <span>
                <Success><Check /></Success> Agendamento com <b>uma semana</b> de antecedência
              </span><br/>
              <span>
                <Success><Check /></Success> <b>Clube de benefícios EXCLUSIVO </b> 
              </span> <br/> 
              <span>
                <Success><Check /></Success> Upgrade para o plano <b>FIT Plus</b>
              </span><br/>             
              <span>
                <Success><Check /></Success> 30 dias grátis Personal Online
              </span>                         
            
            
          </div>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          {/* <Button round onClick={() => props.setShowModal(false)} color="secondary"> */}
          <Button round onClick={() => props.setShowModal(false)} color="primary">
            Fechar
          </Button>
          {/* <Button round onClick={() => { props.setActive(10), props.setShowModal(false) }} color="primary">Ver detalhes</Button>           */}
          {/* <Button round onClick={() => { props.setActive(11), props.setShowModal(false) }} color="primary">Ver detalhes</Button>           */}
        </DialogActions>
      </Dialog>
    </div>
  );
}