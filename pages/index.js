import React, { Component } from "react";
import Router from "next/router";


export default class Index extends Component {
  componentDidMount = () => {  
    console.log(window.innerWidth);
    // if(window.innerWidth > 576){
    //   Router.push("/checkout");
    // } else {
    //   Router.push("/mobile");
    // }

    Router.push("/checkout");
    
  };

  render() {
    return <div />;
  }
}
