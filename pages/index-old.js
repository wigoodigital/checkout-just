import React, { Component } from "react";
import Router from "next/router";
import { useRouter } from 'next/router';


export default class Index extends Component {
  
  componentDidMount = () => {      

    console.log("router");    
    console.log(Router.router);
    console.log(Router.query);

    console.log(window.innerWidth);
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
