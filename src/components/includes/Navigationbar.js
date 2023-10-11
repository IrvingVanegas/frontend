import React from "react";
import Home from "../pages/Home";
import Medicion from "../pages/Medicion";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from 'react-router-dom';


function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >
            <img
                src="/imgages/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Principal</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/medicion' element={<Medicion/>} />
        <Route render={function () {
          return <p>Not found</p>
        }} />
      </Routes>
      </div>
    </>
  );
}

export default Navigationbar;