import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'


export default function Navigation() {
  const router = useRouter()
  const isActive = (r) => {
    if (r === router.pathname) {
      return "active"
    } else {
      return ""
    }
  }
  return (
    <div>

      <div>
        <Navbar style={{ backgroundImage: 'linear-gradient(to right, white, #e7c9c7)' }}>
          <span className="container justify-content-start">
            <Navbar.Brand href="/" style={{ paddingLeft: '40px' }}>
              <img src="../mmlogo1.png" alt="" width="100em" height="70em" />
            </Navbar.Brand>
          </span>

          <span className="container justify-content-end">
            <Navbar.Brand className={"btn btn-outline-secondary" + isActive('/cart/cart')} href="/cart/cart">
              <FontAwesomeIcon icon={faShoppingBag} size='lg' />
            </Navbar.Brand>
            <Navbar.Brand className={"btn btn-outline-secondary" + isActive('/account/login')} href="/account/login">
              <FontAwesomeIcon icon={faUser} size='lg' />
            </Navbar.Brand>
          </span>

        </Navbar>
      </div>

      <div>
        <Navbar collapseOnSelect expand="lg" style={{ backgroundImage: 'linear-gradient(to right, white, #e7c9c7)' }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="container justify-content-center">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Biquínis</Nav.Link>
                <Nav.Link href="#pricing">Maiô</Nav.Link>
                <NavDropdown title="Saída de Praia" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Curta</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Longa</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Pareô</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Infantil</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Camiseta T-Shirts" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Adulto</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Ifantil</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets">Viseiras</Nav.Link>
                <Nav.Link href="#memes">Acessórios</Nav.Link>
                <Nav.Link href="#memes">Blog</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>

          <div className="input-group">
            <input className="form-control" placeholder="Pesquisar" />
            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
              <FontAwesomeIcon icon={faSearch} size='lg' />
            </button>
          </div>
        </Navbar>
      </div>
    </div>
  )
}