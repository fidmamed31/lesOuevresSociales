import React, { Component } from "react";
import Typed from "react-typed";
import Modal from "./Modal";

class Header extends Component {
  render() {
    return (
      <>
        <div className="headwraper">
          <div className="maininfo">
            <h1>
              الخدمات الاجتماعية لعمال المدرسة العليا للاعلام الالي بسيدي بلعباس
            </h1>
            <Typed
              className="typed-text"
              strings={[
                "الخدات الصحية  ",
                "تعويضات ",
                " المنح و التقاعدات",
                "الضمان الاجتماعي",
                "العمرة و الحج",
              ]}
              typeSpeed={40}
              backSpeed={20}
              loop
            />
            <a href="#" className="btn-maininfo" onClick={this.props.open}>
              سجل عضويتك
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
