import { createGlobalStyle, ThemeProvider } from 'styled-components'
import colorTheme from '../colorTheme.json'
import Navigation from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = colorTheme.theme

export default function App({ Component, pageProps }) {
  return (
    <>
       
        <GlobalStyle />


        <Navigation/>
               
        <Component {...pageProps} />

        <Footer/>


    </>
  )
}
