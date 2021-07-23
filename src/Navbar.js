import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Homepage from './Homepage';
  import Consume from './Consume';
  import Seafood from './Seafood';
import Feedback from './Feedback'
  export default function Navbars()
  
    {
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Urban Bistro!</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/Consume">Category</Nav.Link>
                                    <Nav.Link href="/Seafood">Seafood</Nav.Link>
                                    <Nav.Link href="/Feedback">Feedback</Nav.Link>
                                    </Nav>
                                 
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Homepage />
                                </Route>
                                <Route path="/Consume">
                                    <Consume />
                                </Route>
                                <Route path="/Seafood">
                                    <Seafood />
                                    
                                </Route>
                                <Route path="/Feedback">
                                    <Feedback />
                                    
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }

