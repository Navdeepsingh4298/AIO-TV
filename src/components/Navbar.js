import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
import logo from "./AIOTV.svg";

function Navibar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navibar">
        <Navbar.Brand href={process.env.REACT_APP_PUBLIC_URL + "/"} className="nav-brand">
          <img src={logo} alt="logo" />
          <span>AIO TV</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href={process.env.REACT_APP_PUBLIC_URL + "/news"}>News</Nav.Link>
          <Nav.Link href={process.env.REACT_APP_PUBLIC_URL + "/cartoons"}>Cartoons</Nav.Link>
          <Nav.Link href={process.env.REACT_APP_PUBLIC_URL + "/entertainment"}>Entertainment</Nav.Link>
          <Nav.Link href={process.env.REACT_APP_PUBLIC_URL + "/music"}>Music</Nav.Link>
          <Nav.Link href={process.env.REACT_APP_PUBLIC_URL + "/religious"}>Religious</Nav.Link>
          <Nav.Link href={process.env.REACT_APP_PUBLIC_URL + "/movies"}>Movies</Nav.Link>
          <Nav.Link href={process.env.REACT_APP_PUBLIC_URL + "/series"}>Series</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navibar;
