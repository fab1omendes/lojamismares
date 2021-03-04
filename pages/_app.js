// import { createGlobalStyle, ThemeProvider } from 'styled-components'
// import colorTheme from '../colorTheme.json'
// import Navigation from '../src/components/Navbar/navbar'
// import Footer from '../src/components/Footer/footer'

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `
// const theme = colorTheme.theme

// export default function App({ Component, pageProps }) {
//   return (
//     <>
       
//         <GlobalStyle />


//         <Navigation/>
               
//         <Component {...pageProps} />

//         <Footer/>


//     </>
//   )
// }

import React from "react";

import Global from "../src/styles/global";
import Navigation from '../src/components/Navbar/navbar'
import Footer from '../src/components/Footer/footer'

import Home from '../src/routes/home/home';

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    text: lorem,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    bgColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    text: lorem,
    bgColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    text: lorem,
    bgColor: "#9FEACD"
  }
];


function App() {
  return (
    <>
      <Global />
      <Navigation/>
      <Home boxData={data}/>
      <Footer/>
    </>
  );
}

export default App;
