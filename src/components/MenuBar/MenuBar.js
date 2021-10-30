import React from 'react';
import "./MenuBar.css";
import { NavLink, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const MenuBar = () => {
    const { user, handleLogout } = useFirebase();
    return (
        <div>

            <Navbar bg="light" expand="lg" variant="light" fixed="top"  >
                <Container fluid>
                    <Navbar.Brand className="px-5 col-1" href="#home">

                        <img
                            alt=""

                            width="50"
                            height="50"
                            className="d-inline-block align-top
                        "
                        />{' '}
                        TRIPO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="d-flex align-items-end justify-content-end nav-item dropdown col-11">
                            <Nav.Link as={NavLink} to="/home" className="items ">
                                <li>Home</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/alltour" className="items">
                                <li>Tours</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/addevent" className="items">
                                <li>Add Event</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/myCart" className="items">
                                <li>Mycart</li>
                            </Nav.Link>


                            <Nav.Link as={NavLink} to="/login">
                                <Button variant="danger">

                                    Login
                                </Button>

                            </Nav.Link>
                            {user.displayName && (
                                <Link to="/">
                                    {user.displayName}
                                    <Button onClick={handleLogout} variant="danger">

                                        LogOut
                                    </Button>
                                </Link>
                            )}

                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default MenuBar;