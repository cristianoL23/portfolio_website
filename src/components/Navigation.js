import React from "react";
import { Link } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//TODO: use arrow keys to navigate menu items
//TODO: make links tabbable
const Navigation = ({ title, headerLinks }) => {
  return (
    <NavBar bg="secondary" variant="dark" className="border-bottom" expand="lg">
      <NavBar.Brand>{title}</NavBar.Brand>
      <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <NavBar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to={headerLinks.home.path}>
            {headerLinks.home.name}
          </Link>
          <Link className="nav-link" to={headerLinks.about.path}>
            {headerLinks.about.name}
          </Link>
          <Link className="nav-link" to={headerLinks.projects.path}>
            {headerLinks.projects.name}
          </Link>
          <Link className="nav-link" to={headerLinks.skills.path}>
            {headerLinks.skills.name}
          </Link>
          <Link className="nav-link" to={headerLinks.contact.path}>
            {headerLinks.contact.name}
          </Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
};

export { Navigation };
