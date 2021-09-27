import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BiGhost } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Button } from "./Button";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <IconContext.Provider value={{ color: "#2b4d66;" }}>
            <Link to="/" className="navbar-logo">
              <BiGhost className="navbar-logo-icon" />
              EldadHost
            </Link>
          </IconContext.Provider>
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>
            <li>
              <IconContext.Provider value={{ color: "white;" }}>
                <Link to="/">
                  <Button btnStyle="btn-transparent" btnSize="btn-medium">
                    <RiCustomerService2Fill className="btn-icon" />
                    052-287-5018
                  </Button>
                </Link>
              </IconContext.Provider>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
