import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const SliderComponent = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const slides = [
    {
      titleKey: "slider.completeHealthcareTitle",
      textKey: "slider.completeHealthcareText",
      btnTextKey: "slider.completeHealthcareBtn",
      btnLink: "#about",
      img: "/assets/img/slider-1.jpg",
    },
    {
      titleKey: "slider.bestDoctorsTitle",
      textKey: "slider.bestDoctorsText",
      btnTextKey: "slider.bestDoctorsBtn",
      btnLink: "#footer",
      img: "/assets/img/slider-2.jpg",
    },
    {
      titleKey: "slider.healthPriorityTitle",
      textKey: "slider.healthPriorityText",
      btnTextKey: "slider.healthPriorityBtn",
      btnLink: "#services",
      img: "/assets/img/slider-3.jpg",
    },
  ];

  return (
    <div className="slider-wrapper">
      <section className="slider-section">
        <Slider {...settings} className="slider-active slick-style">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="single-slider"
              style={{
                height: "600px",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={slide.img}
                alt={t(slide.titleKey)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to right, #00adb5 0%, rgba(0, 173, 181, 0.11) 70.76%, rgba(255, 255, 255, 0) 100%)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="container"
                style={{ position: "relative", zIndex: 2, color: "#fff" }}
              >
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1>{t(slide.titleKey)}</h1>
                      <p>{t(slide.textKey)}</p>
                      <a
                        href={slide.btnLink}
                        className="btn theme-btn page-scroll"
                      >
                        {t(slide.btnTextKey)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default SliderComponent;
