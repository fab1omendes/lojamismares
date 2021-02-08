import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <body>

      <div>
        <Navbar style={{ backgroundImage: 'linear-gradient(to bottom, white, #f381a7)', width: '100%', height: '15em', margin: 'auto', bottom: '0', position: 'relative' }}>
          <span className="container justify-content-start">
            <Navbar.Brand href="/" style={{ paddingLeft: '40px' }}>
              <img src="../MMicon.png" alt="" width="90em" height="50em" />
            </Navbar.Brand>
          </span>

          <span className="container justify-content-end">
            <p>Ajuda</p>
            <p></p>
            <p>Atendimento</p>
            <p>Ajuda</p>
          </span>
        </Navbar>
      </div>

    </body>

  )
}