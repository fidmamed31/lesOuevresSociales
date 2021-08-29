import React from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import SignUp from "./Components/SignUp";
import Modal from "./Components/Modal";

class AppUser extends Component {
  constructor() {
    super();
    this.state = { test: "" };
  }
  /*NOt finish yet */
  render() {
    return (
      <div>
        <NavBar />

        <Modal />
        <Search />
        <Main />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default AppUser;
