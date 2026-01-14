import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";




const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header id="home" className="header">
      <div className="header-wrapper">
        <div className="header-top theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="header-top-left text-center text-md-left">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-phone"></i> +383 49 28 55 77 &
                        +383 49 970 903
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-regular fa-envelope"></i>{" "}
                        Revivoclinic@hotmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="header-top-right d-none d-md-block">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61571802177881"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@vullnetgashi1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/revivo_clinic/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <button className="lang-btn" onClick={() => i18n.changeLanguage("en")}>
                        EN
                      </button>
                      <button className="lang-btn" onClick={() => i18n.changeLanguage("sq")}>
                        SQ
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <img src="assets/img/logo_revivo.png" alt="Logo" />
                  </a>

                  <div className="d-flex align-items-center ml-auto">
                    <div className="mobile-lang d-lg-none mr-2">
                      <button className="lang-btn" onClick={() => i18n.changeLanguage("en")}>EN</button>
                      <button className="lang-btn" onClick={() => i18n.changeLanguage("sq")}>SQ</button>
                    </div>

                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={toggleMenu}
                      aria-label="Toggle navigation"
                    >
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>
                  </div>



                  <div
                    className={`collapse navbar-collapse sub-menu-bar ${menuOpen ? "show" : ""}`}
                    id="navbarSupportedContent"
                  >

                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a
                          className="page-scroll"
                          href="#home"
                          onClick={() => setMenuOpen(false)}
                        >
                          {t("nav.home")}
                        </a>

                      </li>
                      <li className="nav-item">
                        <a
                          className="page-scroll"
                          href="#about"
                          onClick={() => setMenuOpen(false)}
                        >
                          {t("nav.about")}
                        </a>

                      </li>
                      <li className="nav-item">
                        <a
                          className="page-scroll"
                          href="#services"
                          onClick={() => setMenuOpen(false)}
                        >
                          {t("nav.services")}
                        </a>

                      </li>
                      <li className="nav-item">
                        <a
                          className="page-scroll"
                          href="#footer"
                          onClick={() => setMenuOpen(false)}
                        >
                          {t("nav.contact")}
                        </a>

                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
