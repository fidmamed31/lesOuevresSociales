import React from "react";
import logoo from "./assets/4.png";
const Footer = () => {
  return (
    <footer class="page-footer font-small bg-dark" id="Footer">
      <div className="row  mx-auto footer1 container">
        <div className="col md-6 ">
          <div className="card">
            <img className="card-img-top " src={logoo} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                الفنك هي شركة جزائرية ناشئة في مجال البرمجة و الرقمنة{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col md-6 company">
          <ul>
            <li>
              {" "}
              <i class="far fa-envelope"></i>m.fidma@esi-sba.dz
            </li>
            <li>
              <i class="fas fa-phone"></i>0796260508
            </li>
            <li>
              <i class="fas fa-fax"></i>078 384 948 9
            </li>
          </ul>
        </div>
      </div>

      <hr class=" w-75 " />

      <div class="container ">
        <div class=" icons row ">
          <div class="col-12 mb-3 mx-auto">
            <div class=" flex-center">
              <a class="fb-ic">
                <i class="fab fa-facebook-f fa-lg white-text mr-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text mr-5 mr-3 fa-2x"> </i>
              </a>
              <a class="gplus-ic">
                <i class="fab fa-google-plus-g fa-lg white-text mr-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a class="li-ic">
                <i class="fab fa-linkedin-in fa-lg white-text mr-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a class="ins-ic">
                <i class="fab fa-instagram fa-lg white-text mr-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a class="pin-ic">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3 ">
        © 2020 Copyright:
        <a href="https://FenecDev.com/"> FenecDev</a>
      </div>
    </footer>
  );
};

export default Footer;
