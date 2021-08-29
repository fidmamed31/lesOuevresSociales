import React from "react";
import un from "./assets/1.png";
import deux from "./assets/2.jpg";
import trois from "./assets/3.jpg";

const Main = () => {
  return (
    <div className="main " id="Main">
      <section className="main1 ">
        <h1 className="hh">!حصريات الاسبوع</h1>

        <div
          id="carouselExampleIndicators"
          class="carousel slide container w-50"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img class="d-block w-100  " src={un} alt="First slide" />
            </div>
            <div class="carousel-item ">
              <img class="d-block w-100 kk  " src={deux} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 " src={trois} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <p>
          لجِمَاعُ ويُسَمَّى أيضًا المُضَاجَعَة أو الوَطْء أو المواقعة هو
          العملية الجنسية التي تقوم أساساً على إدخال القضيب منتصباً إلى داخل
          المهبل بهدف الحصول على المتعة الجنسية أو للتكاثر أو كليهما. كما تُعرف
          هذه العملية باسم الجماع المهبلي أو الجنس المهبلي. توجد الغريزة الجنسية
          في الكائنات الحية الراقية والغرض منها التكاثر وحفظ النوع، أما في
          الكائنات الحية البدائية فيتم التكاثر غالباً بصورة لاجنسية.{" "}
          <a href="#">المزيد</a>
        </p>
      </section>
    </div>
  );
};

export default Main;
