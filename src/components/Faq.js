import React from "react";

const Faq = () => {
  return (
    <section className="faq-section theme-bg">
      {/* Video Section */}
      <div className="faq-video-wrapper">
        <div className="faq-video">
          <img src="assets/img/faq-img.jpg" alt="FAQ" />
          <div className="video-btn">
            <a className="popup-video glightbox" href="#">
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="shape">
        <img src="assets/img/shapes/shape-8.svg" alt="Shape" className="shape-faq" />
      </div>

      {/* FAQ Content */}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-6 col-lg-8 col-md-10">
            <div className="faq-content-wrapper pt-90 pb-90">
              <div className="section-title">
                <span className="text-white wow fadeInDown" data-wow-delay=".2s">
                  Frequently Asked Questions
                </span>
                <h2
                  className="text-white mb-35 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Get Every Single Answer There if You Want
                </h2>
              </div>

              {/* Accordion */}
              <div className="faq-wrapper accordion" id="accordionExample">
                {/* FAQ Item 1 */}
                <div className="faq-item mb-20">
                  <div id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="faq-btn btn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is an academic medical center? <i className="lni"></i>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="faq-content">
                      Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit
                      amet, consetet sadipscing elitr, sed dinonumy eirmod tempor
                      invidunt. sadipscing elitr, sed dinonumy eirmod tempor invidunt.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="faq-item mb-20">
                  <div id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="faq-btn btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What is an academic medical center? <i className="lni"></i>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="faq-content">
                      Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit
                      amet, consetet sadipscing elitr, sed dinonumy eirmod tempor
                      invidunt.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="faq-item mb-20">
                  <div id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="faq-btn btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What is a medical student? <i className="lni"></i>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="faq-content">
                      Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit
                      amet, consetet sadipscing elitr, sed dinonumy eirmod tempor
                      invidunt.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="faq-item">
                  <div id="headingFour">
                    <h5 className="mb-0">
                      <button
                        className="faq-btn btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How are residents supervised? <i className="lni"></i>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="faq-content">
                      Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit
                      amet, consetet sadipscing elitr, sed dinonumy eirmod tempor
                      invidunt.
                    </div>
                  </div>
                </div>
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq ;
