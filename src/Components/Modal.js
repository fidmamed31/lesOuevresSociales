import React, { Component } from "react";
import Header from "./Header";
import "../style.css";
export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      login: false,
    };
  }
  onOpenModal = () => {
    this.setState({ login: true });
  };

  onCloseModal = () => {
    this.setState({ login: false });
  };

  render() {
    const { login } = this.state;
    login
      ? document.getElementById("root").classList.add("modal-active")
      : document.getElementById("root").classList.remove("modal-active");

    return (
      <section className="headmod">
        <Header open={this.onOpenModal} />
        {login && (
          <div className="Modal">
            <div className="overlay" onClick={this.onCloseModal}></div>
            <div className="modal-content">
              <form className=" container log ">
                <button className="close-modal" onClick={this.onCloseModal}>
                  <i class="far fa-times-circle"></i>
                </button>
                <i class="far fa-user-circle "></i>

                <div className="form-group ">
                  <label>
                    {" "}
                    <i class="far fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <i class="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Sign in
                </button>
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
              </form>
            </div>
          </div>
        )}
      </section>
    );
  }
}
