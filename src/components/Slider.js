import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
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
      title: "Complete Healthcare Solution",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      btnText: "Learn More",
      btnLink: "#about",
      img: "/assets/img/slider-1.jpg",
    },
    {
      title: "Best Doctors and Equipments in Town",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      btnText: "Make Appointment",
      btnLink: "#contact",
      img: "/assets/img/slider-2.jpg",
    },
    {
      title: "Your Health is Our Top Priority",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      btnText: "Our Services",
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
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
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

              {/* Gradient Overlay */}
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

              {/* Slider Content */}
              <div
                className="container"
                style={{ position: "relative", zIndex: 2, color: "#fff" }}
              >
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1>{slide.title}</h1>
                      <p>{slide.text}</p>
                      <a
                        href={slide.btnLink}
                        className="btn theme-btn page-scroll"
                      >
                        {slide.btnText}
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
