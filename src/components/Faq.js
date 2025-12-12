import React, { useEffect } from "react";
import "./Faq.css";

const Faq = () => {
  useEffect(() => {
    // Load the TikTok embed script once when component mounts
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="faq-section theme-bg">
      {/* TikTok Video Section */}
      <div className="faq-video-wrapper">
        <div className="faq-video">
          <div className="tiktok-container">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@vullnetgashi1/video/7492709387685956869"
              data-video-id="7492709387685956869"
            >
              <section>
                <a
                  target="_blank"
                  title="@vullnetgashi1"
                  href="https://www.tiktok.com/@vullnetgashi1?refer=embed"
                  rel="noreferrer"
                >
                  @vullnetgashi1
                </a>
                {/* ...other TikTok links as before */}
              </section>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="shape">
        <img
          src="assets/img/shapes/shape-8.svg"
          alt="Shape"
          className="shape-faq"
        />
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
                        What conditions can physiotherapy help with? <i className="fa-solid fa-chevron-down"></i>
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
                     Physiotherapy can help with back and neck pain, joint pain, muscle injuries, 
                     post-surgery rehabilitation, mobility problems,
                      sports injuries, posture issues, and chronic pain conditions.
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
                        How long does a physiotherapy session typically last? <i className="fa-solid fa-chevron-down"></i>

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
                     A standard physiotherapy session usually lasts 30–45 minutes, depending on your condition 
                     and treatment plan.
                      Your therapist will assess your needs and decide the appropriate duration.
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
                       What is osteopathy, and how is it different from physiotherapy? <i className="fa-solid fa-chevron-down"></i>
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
                   Osteopathy focuses on the body as a whole, using gentle manual techniques to improve joint mobility, muscle balance, and overall body function.
Physiotherapy is more exercise- and rehabilitation-based.
Both work well together, and your therapist may combine techniques for the best results..
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
                        Is manual therapy painful? <i className="fa-solid fa-chevron-down"></i>
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
                    Manual therapy techniques are usually gentle and should not cause significant pain. You may feel mild pressure or stretching,
                     but it should always feel comfortable.
                     If anything feels too intense, your therapist will adjust the technique immediately.
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

export default Faq;


