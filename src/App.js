import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateClient from "./components/create-client.component";
import EditClient from "./components/edit-client.component";
import ClientList from "./components/client-list.component";

import CreateBedRoom from "./components/create-bedroom.component";
import EditBedRoom from "./components/edit-bedroom.component";
import BedRoomList from "./components/bedroom-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                Hotel Management
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              {/* <Nav>
                <Link to={"/create-client"} className="nav-link">
                  Create Client
                </Link>
              </Nav> */}

              {/* <Nav>
                <Link to={"/edit-client/:id"} className="nav-link">
                  Edit Client
                </Link>
              </Nav> */}
              <Nav>
                {/* <Link to={"/client-list"} className="nav-link">
                  Client List
                </Link> */}

                <NavDropdown title="Client" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/create-client"> Create Client</NavDropdown.Item>
                  <NavDropdown.Item href="/client-list">Client List</NavDropdown.Item>
                </NavDropdown>

              </Nav>
              <Nav>
                <NavDropdown title="BedRoom" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/create-bedroom"> Create BedRoom</NavDropdown.Item>
                  <NavDropdown.Item href="/bedroom-list">BedRoom List</NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Nav>

          </Container>
        </Navbar>

      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                {/* <Route exact path='/' component={CreateClient} /> */}
                <Route path="/create-client" component={CreateClient} />
                <Route path="/edit-client/:id" component={EditClient} />
                <Route path="/client-list" component={ClientList} />
                {/* <Route exact path='/' component={CreateBedRoom} /> */}
                <Route path="/create-bedroom" component={CreateBedRoom} />
                <Route path="/edit-bedroom/:id" component={EditBedRoom} />
                <Route path="/bedroom-list" component={BedRoomList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;