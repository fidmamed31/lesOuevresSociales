import React from "react";

export const SideBar = () => {
  return (
    <div>
      <section className="main2 ">
        <div class="sidebar left ">
          <ul class="list-sidebar bg-defoult">
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#dashboard"
                class="collapsed active"
              >
                <i class="fa fa-th-large"></i>{" "}
                <span class="nav-label"> المنح </span>{" "}
                <span class="fa fa-chevron-left pull-right"></span>{" "}
              </a>
              <ul class="sub-menu collapse" id="dashboard">
                <li class="active">
                  <a href="#">CSS3 Animation</a>
                </li>
                <li>
                  <a href="#">General</a>
                </li>
                <li>
                  <a href="#">Buttons</a>
                </li>
                <li>
                  <a href="#">Tabs & Accordions</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">حالة وفاة</a>
                </li>
                <li>
                  <a href="#">Slider</a>
                </li>
                <li>
                  <a href="#">Panels</a>
                </li>
                <li>
                  <a href="#">Widgets</a>
                </li>
                <li>
                  <a href="#">Bootstrap Model</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-diamond"></i>{" "}
                <span class="nav-label">التكاثر</span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#products"
                class="collapsed active"
              >
                <i class="fa fa-bar-chart-o"></i>{" "}
                <span class="nav-label">Graphs</span>{" "}
                <span class="fa fa-chevron-left pull-right"></span>{" "}
              </a>
              <ul class="sub-menu collapse" id="products">
                <li class="active">
                  <a href="#">CSS3 Animation</a>
                </li>
                <li>
                  <a href="#">General</a>
                </li>
                <li>
                  <a href="#">Buttons</a>
                </li>
                <li>
                  <a href="#">Tabs & Accordions</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">FontAwesome</a>
                </li>
                <li>
                  <a href="#">Slider</a>
                </li>
                <li>
                  <a href="#">Panels</a>
                </li>
                <li>
                  <a href="#">Widgets</a>
                </li>
                <li>
                  <a href="#">Bootstrap Model</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-laptop"></i>{" "}
                <span class="nav-label">Grid options</span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#tables"
                class="collapsed active"
              >
                <i class="fa fa-table"></i>{" "}
                <span class="nav-label">Tables</span>
                <span class="fa fa-chevron-left pull-right"></span>
              </a>
              <ul class="sub-menu collapse" id="tables">
                <li>
                  <a href=""> Static Tables</a>
                </li>
                <li>
                  <a href=""> Data Tables</a>
                </li>
                <li>
                  <a href=""> Foo Tables</a>
                </li>
                <li>
                  <a href=""> jqGrid</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#e-commerce"
                class="collapsed active"
              >
                <i class="fa fa-shopping-cart"></i>{" "}
                <span class="nav-label">E-commerce</span>
                <span class="fa fa-chevron-left pull-right"></span>
              </a>
              <ul class="sub-menu collapse" id="e-commerce">
                <li>
                  <a href=""> Products grid</a>
                </li>
                <li>
                  <a href=""> Products list</a>
                </li>
                <li>
                  <a href="">Product edit</a>
                </li>
                <li>
                  <a href=""> Product detail</a>
                </li>
                <li>
                  <a href="">Cart</a>
                </li>
                <li>
                  <a href=""> Orders</a>
                </li>
                <li>
                  <a href=""> Credit Card form</a>{" "}
                </li>
              </ul>
            </li>
            <li>
              <a href="">
                <i class="fa fa-pie-chart"></i>{" "}
                <span class="nav-label">Metrics</span>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-files-o"></i>{" "}
                <span class="nav-label">Other Pages</span>
              </a>{" "}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
