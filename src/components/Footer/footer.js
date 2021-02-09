import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faQuestionCircle, faBook, faShippingFast, faCreditCard, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'
import { faPaypal, faGooglePay, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div>
      <Navbar style={{ backgroundImage: 'linear-gradient(to bottom, white, #e7c9c7)', width: '100%', margin: 'auto', bottom: '0', position: 'relative', textAlign: 'center' }}>
        <Nav className="container justify-content-center" style={{ width: '100%' }}>
          <ul>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faHeadset} size='2x' />
              <p>Atendimento</p>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faQuestionCircle} size='2x' />
              <p>Dúvidas frequentes</p>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faBook} size='2x' />
              <p>Ajuda</p>
            </Nav.Link>
          </ul>
          <ul>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faShippingFast} size='2x' />
              <p>Frete e Prazos</p>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faCreditCard} size='2x' /><span>   </span>
              <FontAwesomeIcon icon={faPaypal} size='2x' /><span>   </span>
              <FontAwesomeIcon icon={faGooglePay} size='2x' />
              <p>Formas de Pagamento</p>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faExchangeAlt} size='2x' />
              <p>Trocas e Devoluções</p>
            </Nav.Link>
          </ul>
        </Nav>
      </Navbar>
    </div>
  )
}