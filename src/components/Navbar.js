import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BiGhost } from "react-icons/bi";
import { Button } from "./Button";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <BiGhost className="navbar-icon" />
              EldadHost
            </Link>
            <ul className="navbar-items">
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  About
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Services
                </Link>
              </li>
              <li className="navbar-btn">
                <Link to="/">
                  <Button btnStyle="btn-transparent" btnSize="btn-medium">
                    SIGN UP
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}
