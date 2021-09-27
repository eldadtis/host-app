import React from "react";
import { IconContext } from "react-icons";
import { BiGhost } from "react-icons/bi";
import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-desc">
            <div className="item-logo">
              <IconContext.Provider value={{ color: "#2b4d66;" }}>
                <Link to="/" className="footer-logo">
                  <BiGhost className="footer-logo-icon" />
                  EldadHost
                </Link>
              </IconContext.Provider>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore odio placeat maxime consectetur natus, possimus nostrum
              distinctio, aspernatur assumenda et provident optio at recusandae
              vero.
            </p>
            <div className="footer-social">
              <FaFacebookF className="social-item" />
              <RiInstagramFill className="social-item" />
              <FaLinkedinIn className="social-item" />
              <FaTwitter className="social-item" />
            </div>
            <div className="footer-cards">
              <FaCcMastercard className="card-item" />
              <FaCcVisa className="card-item" />
              <FaCcDiscover className="card-item" />
              <FaCcPaypal className="card-item" />
            </div>
          </div>
          <div className="footer-item">
            <h4>HOSTING</h4>
            <ul className="footer-list">
              <li className="list-item">
                <Link to="/" className="link-item">
                  web hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  cloud hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  wordpress hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  ecommerce hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  buy hosting
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>DOMAINS</h4>
            <ul className="footer-list">
              <li className="list-item">
                <Link to="/" className="link-item">
                  domain checker
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  free domain
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  buy domain name
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  domain name search
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  domain transfer
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>HOSTING</h4>
            <ul className="footer-list">
              <li className="list-item">
                <Link to="/" className="link-item">
                  web hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  cloud hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  wordpress hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  ecommerce hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  buy hosting
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>HOSTING</h4>
            <ul className="footer-list">
              <li className="list-item">
                <Link to="/" className="link-item">
                  web hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  cloud hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  wordpress hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  ecommerce hosting
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link-item">
                  buy hosting
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </div>
  );
}
