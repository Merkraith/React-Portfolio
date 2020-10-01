import React from "react";
import { NavLink } from 'react-router-dom';
import '../../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function TopNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                <h4 className="my-name">Mark Heil</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/"} className="link" exact activeClassName="active"><p className="nav-link pt-0 pb-0" id="aboutLink" data-toggle="collapse" data-target=".navbar-collapse.show">Home</p></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"../../Pages/About"} className="link" activeClassName="active"><p className="nav-link pt-0 pb-0" id="aboutLink" data-toggle="collapse" data-target=".navbar-collapse.show">About</p></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"../../Pages/Collaborations"} className="link" activeClassName="active"><p className="nav-link pt-0 pb-0" id="collaborations" data-toggle="collapse" data-target=".navbar-collapse.show">Collaborations</p></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"../../Pages/Projects"} className="link" activeClassName="active"><p className="nav-link pt-0 pb-0 lastLink" id="projectsLink" data-toggle="collapse" data-target=".navbar-collapse.show">Projects</p></NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TopNavbar;