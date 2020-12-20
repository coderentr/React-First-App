import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  Nav,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";
import CardSummary from "./CardSummary";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarBrand href="/form1">Form1</NavbarBrand>
        <NavbarBrand href="/form2">Form2</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          </Nav>
          <Nav navbar>
          <CardSummary  removeFromCard={props.removeFromCard} card={props.card} ></CardSummary>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
