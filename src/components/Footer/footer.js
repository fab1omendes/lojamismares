import React from 'react'
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faQuestionCircle, faBook, faShippingFast, faCreditCard, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { faPaypal, faGooglePay, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const DivStyle = styled.div`
  background-image: linear-gradient(to bottom, white, #e7c9c7);
  max-width: auto;
  margin: 0 auto;
  @media (max-widht: 1020p  x){
    padding: 0px;
  }
`;


const Footer = () => {
  return (
    // <div className="container-fluid" style={{
    //   backgroundImage: 'linear-gradient(to bottom, white, #e7c9c7)',
    //   width: '100%',
    //   margin: 'auto',
    //   bottom: '0px',
    //   position: 'relative',
    //   textAlign: 'center' }}>

    <DivStyle>
      <Navbar >
        <Nav className="container justify-content-center" 
        style={{ width: 'auto', 
        textAlign: 'center',
        }}>
          <ul>
            <Nav.Link href="#instagram">
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </Nav.Link>
          </ul>
          <ul>
            <Nav.Link href="#whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} size='2x' />
            </Nav.Link>
          </ul>
          <ul>
            <Nav.Link href="#facebook">
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </Nav.Link>
          </ul>
        </Nav>
       </Navbar>
{/*   ========= aqui vem a segunda parte do footer ======       */}
      <Navbar>
        <Nav>
          <Nav.Link></Nav.Link>
        </Nav>
      </Navbar>
      <Navbar>
        <Nav className="container justify-content" style={{ width: '100%', textAlign: 'center' }}>
          <ul>
            <Nav.Link href="#call">
              <FontAwesomeIcon icon={faHeadset} size='2x' />
              <p>Atendimento</p>
            </Nav.Link>
          </ul>
          <ul>
            <Nav.Link href="#answers">
              <FontAwesomeIcon icon={faQuestionCircle} size='2x' />
              <p>Dúvidas frequentes</p>
            </Nav.Link>
          </ul>
          <ul>
            <Nav.Link href="#help">
              <FontAwesomeIcon icon={faBook} size='2x' />
              <p>Ajuda</p>
            </Nav.Link>
          </ul>
          <ul>
            <Nav.Link href="#shipping">
              <FontAwesomeIcon icon={faShippingFast} size='2x' />
              <p>Frete e Prazos</p>
            </Nav.Link>
          </ul>
          <ul>
            <Nav.Link href="#cards">
              <FontAwesomeIcon icon={faCreditCard} size='2x' /><span>   </span>
              <FontAwesomeIcon icon={faPaypal} size='2x' /><span>   </span>
              <FontAwesomeIcon icon={faGooglePay} size='2x' />
              <p>Formas de Pagamento</p>
            </Nav.Link>
          </ul>
          <ul>
            <Nav.Link href="#change">
              <FontAwesomeIcon icon={faExchangeAlt} size='2x' />
              <p>Trocas e Devoluções</p>
            </Nav.Link>
          </ul>
        </Nav>
      </Navbar>
    {/* </div> */}
    </DivStyle>
  )
}
export default Footer;