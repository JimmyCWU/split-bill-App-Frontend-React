import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AAA from './AAA';



const Party = () => {
    const [partyName, setPartyName] = useState("眼鏡猴");

    return (
      <div className="party-Background">
        <Navbar>
          <Container>
            <Navbar.Brand>Party Name : {partyName}</Navbar.Brand>
            <NavDropdown title="Add A Bill" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <AAA/>
              </NavDropdown.Item>
              <NavDropdown.Item>
                Go Dutch
              </NavDropdown.Item>
              <NavDropdown.Item>
                Transfer
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
      </div>
    );

}
export default Party;