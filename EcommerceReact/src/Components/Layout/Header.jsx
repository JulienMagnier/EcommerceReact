import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderCartButton from './HeaderCartButton';



function Header() {
    return (
        <Navbar bg="light" expand="lg" id="navbar">
            <Container id="container">
                <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/julien-magnier/" target="_blank">Contact</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <HeaderCartButton/>
            </Container>
        </Navbar>
        
    )
}

export default Header;



//Rien de bien compliqué ici, on importe les composants de react-bootstrap et on les utilise pour créer un header simple avec navigation de page.
//Le Container permet de centrer et aligner le contenu.
//Le Nav.Link permet de créer des liens de navigation. Ce qui matche avec ce qu'on a fait dans le App.jsx.
//Le HeaderCartButton permet d'afficher notre bouton pour afficher le panier.