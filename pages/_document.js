import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";


import MuseoSansLight from "assets/fonts/MuseoSansRounded-300.ttf";
import MuseoSansRegular from "assets/fonts/MuseoSansRounded-500.ttf";
import MuseoSansBold from "assets/fonts/MuseoSansRounded-700.ttf";
import MuseoSansExtraBold from "assets/fonts/MuseoSansRounded-900.ttf";

import MuseoSansLight2 from "assets/fonts/MuseoSansRounded-300.woff";
import MuseoSansRegular2 from "assets/fonts/MuseoSansRounded-500.woff";
import MuseoSansBold2 from "assets/fonts/MuseoSansRounded-700.woff";
import MuseoSansExtraBold2 from "assets/fonts/MuseoSansRounded-900.woff";



class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href={require("assets/img/favicon.png")} />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/apple-icon.png")}
          />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
            

          <style dangerouslySetInnerHTML={{__html: `
              @font-face {
                font-family: 'Museo Sans';
                src: url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-300.woff") format('woff'), url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-300.ttf") format('truetype');              
                font-weight: 300;
                font-style: normal;
              }
              @font-face {
                font-family: 'Museo Sans';
                src: url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-500.woff") format('woff'), url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-500.ttf") format('truetype');              
                font-weight: 500;
                font-style: normal;
              }            
              @font-face {
                font-family: 'Museo Sans';
                src: url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-700.woff") format('woff'), url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-700.ttf") format('truetype');
                font-weight: 700;
                font-style: normal;
              }
              @font-face {
                font-family: 'Museo Sans';
                src: url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-900.woff") format('woff'), url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-900.ttf") format('truetype');
                font-weight: 900;
                font-style: normal;
              }

          `}}></style>

          <style jsx>{`

            @font-face {
              font-family: 'Museo Sans';
              src: url(${MuseoSansRegular2}) format('woff'), url(${MuseoSansRegular}) format('truetype');  
              font-weight: 300;
              font-style: normal;
            }
            @font-face {
              font-family: 'Museo Sans';
              src: url(${MuseoSansLight2}) format('woff'), url(${MuseoSansLight}) format('truetype');              
              font-weight: 500;
              font-style: normal;
            }            
            @font-face {
              font-family: 'Museo Sans';
              src: url(${MuseoSansBold2}) format('woff'), url(${MuseoSansBold}) format('truetype');
              font-weight: 700;
              font-style: normal;
            }
            @font-face {
              font-family: 'Museo Sans';
              src: url(${MuseoSansExtraBold2}) format('woff'), url(${MuseoSansExtraBold}) format('truetype');
              font-weight: 900;
              font-style: normal;
            }
                        

          `}
          </style>
                    

          

        </Head>
        <body>

          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
