import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="footer pt-100 img-bg"
      style={{ backgroundImage: "url('assets/img/footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row">
            {/* Logo and About */}
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="footer-widget mb-30">
                <a href="index.html" className="logo">
                  <img
                    src="assets/img/logo_revivo.png"
                    alt="Revivo Clinic"
                    width="150px"
                  />
                </a>
                <p>{t("footer.contactText")}</p>
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61571802177881"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@vullnetgashi1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/revivo_clinic/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links Column 1 */}
            <div className="col-xl-2 col-lg-3 col-md-6">
              <div className="footer-widget mb-30">
                <h4>{t("footer.quickLinks")}</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#home">{t("nav.home")}</a>
                  </li>
                  <li>
                    <a href="#about">{t("nav.about")}</a>
                  </li>
                  <li>
                    <a href="#services">{t("nav.services")}</a>
                  </li>
                  <li>
                    <a href="#footer">{t("nav.contact")}</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links Column 2 */}
            <div className="col-xl-2 col-lg-3 col-md-5">
              <div className="footer-widget mb-30">
                <h4>{t("footer.quickLinks")}</h4>
                <ul className="footer-links">
                  <li>{t("footer.service1")}</li>
                  <li>{t("footer.service2")}</li>
                  <li>{t("footer.service3")}</li>
                  <li>{t("footer.service4")}</li>
                  <li>{t("footer.service5")}</li>
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="col-xl-4 col-lg-12 col-md-7">
              <div className="footer-widget mb-30">
                <h4>{t("footer.locationTitle")}</h4>
                <div className="map-canvas">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.196861594489!2d21.147965199999998!3d42.6571835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f77d18f684d%3A0xccbf216b93d4c43c!2sRevivo%20Clinic!5e0!3m2!1sen!2s!4v1760970616118!5m2!1sen!2s"
                    width="370"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Revivo Clinic Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-area">
          <p className="mb-0 text-center">
            {t("footer.designedBy")}{" "}
            <a
              href="https://mendim-gashi-portfolio.netlify.app/"
              rel="nofollow"
              target="_blank"
            >
              Mendim Gashi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
