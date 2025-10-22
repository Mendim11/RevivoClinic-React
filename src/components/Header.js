import React from "react";

const Header = () => {
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
                        <i class="fa-solid fa-phone"></i> +383 49 28 55 77 & +383 49 970 903
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
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="page-scroll active" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#services">
                          Service
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">
                          Contact
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
