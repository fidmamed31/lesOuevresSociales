import React from "react";
import logo from "./assets/logo.png";
import { fontAwesonIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
export const NavBar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#Footer">
                اتصل بنا <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Footer">
                من نحن
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Main">
                اخر الاخبار{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lo" href="#Card">
                المحتوى
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Search">
                الخدمات الاجتماعية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ESI SBA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
