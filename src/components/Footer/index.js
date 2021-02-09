import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'

export default function Footer() {
  return (
    <body>

      <div>
        <Navbar style={{ backgroundImage: 'linear-gradient(to bottom, white, #e7c9c7)', width: '100%', height: '12em', margin: 'auto', bottom: '0', position: 'relative' }}>
          <Nav className="container justify-content-end" style={{width: '100%'}}>
              <Nav.Link href="#features">Ajuda</Nav.Link>
              <Nav.Link href="#pricing">Atendimento</Nav.Link>
              <Nav.Link href="#features">Dúvidas e Sugestões</Nav.Link>              
              <Nav.Link href="#pricing">Formas de Pagamento</Nav.Link>
              <Nav.Link href="#pricing">Frete e Prazos</Nav.Link>           
          </Nav>
        </Navbar>
      </div>

    </body>

  )
}