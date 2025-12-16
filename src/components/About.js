import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section pt-120">
      <div className="shape shape-2">
        {/* <img src="/assets/img/shapes/shape-2.svg" alt="shape" /> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-11 mx-auto">
            <div className="about-content text-center mb-55">
              <div className="section-title mb-30">
                <span className="wow fadeInDown" data-wow-delay=".2s">
                  {t("about.subtitle")}
                </span>
                <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                  {t("about.title")}
                </h2>
              </div>
              <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">
                {t("about.text")}
              </p>
              <a
                href="#footer"
                className="btn theme-btn wow fadeInUp"
                data-wow-delay=".8s"
              >
                {t("about.button")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-img text-center">
        <img src="/assets/img/about-img.png" alt={t("about.imageAlt")} />
      </div>
    </section>
  );
};

export default About;
