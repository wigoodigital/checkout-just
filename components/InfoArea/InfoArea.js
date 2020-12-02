import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import appStore from "assets/img/appStore.png";
import playStore from "assets/img/playStore.png";

import styles from "assets/jss/nextjs-material-kit-pro/components/infoStyle.js";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const { title, description, iconColor, vertical, className, app, android, ios, iconImage, titlePasso, descriptionLarge } = props;
  const classes = useStyles();
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined
  });
  let icon = null;
  switch (typeof props.icon) {
    case "string":
      icon = <Icon className={iconClasses}>{props.icon}</Icon>;
      break;
    default:
      icon = <props.icon className={iconClasses} />;
      break;
  }
  return (
    <div className={infoAreaClasses}>
      
      {
        titlePasso != null && (
          <h3 className={classes.title}>{titlePasso}</h3>  
        )
      }
      <div className={classes.descriptionWrapper}>
        {
          props.icon != null && (
            <div className={iconWrapper}>{icon}</div>    
          )
        }
        {
          iconImage != null && (
            <div className={iconWrapper}><img className={classes.imgIcon} src={iconImage}></img> </div>    
          )
        }      
        <h4 className={classes.textLeft}>{title}</h4>
        
        {
          description != null && (
            <div className={classes.description}>{description}</div>
          )
        } 
        {
          descriptionLarge != null && (
            <div className={classes.descriptionLarge}>{descriptionLarge}</div>
          )
        } 

        {
          app && (
            <>
              <div className={classes.containerApp}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    className={
                      classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                    }
                  >
                    <a href={android} target="_blank"><img src={playStore} alt="..." /></a>
                  </GridItem>   
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    className={
                      classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                    }
                  >
                    <a href={ios} target="_blank"><img src={appStore} alt="..." /></a>
                  </GridItem>   
                </GridContainer>
                
                
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool,
  app: PropTypes.bool,
  android: PropTypes.string,
  ios: PropTypes.string,
  iconImage: PropTypes.string,
  titlePasso: PropTypes.string,
  descriptionLarge: PropTypes.string,
  className: PropTypes.string
};
