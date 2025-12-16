import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Faq.css";

const Faq = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const faqs = [
    {
      id: "one",
      question: t("faq.q1"),
      answer: t("faq.a1"),
      show: true,
    },
    {
      id: "two",
      question: t("faq.q2"),
      answer: t("faq.a2"),
      show: false,
    },
    {
      id: "three",
      question: t("faq.q3"),
      answer: t("faq.a3"),
      show: false,
    },
    {
      id: "four",
      question: t("faq.q4"),
      answer: t("faq.a4"),
      show: false,
    },
  ];

  return (
    <section className="faq-section theme-bg">
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
              </section>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="shape">
        <img
          src="assets/img/shapes/shape-8.svg"
          alt="Shape"
          className="shape-faq"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-6 col-lg-8 col-md-10">
            <div className="faq-content-wrapper pt-90 pb-90">
              <div className="section-title">
                <span className="text-white wow fadeInDown" data-wow-delay=".2s">
                  {t("faq.title")}
                </span>
                <h2 className="text-white mb-35 wow fadeInUp" data-wow-delay=".4s">
                  {t("faq.subtitle")}
                </h2>
              </div>

              <div className="faq-wrapper accordion" id="accordionExample">
                {faqs.map((item, index) => (
                  <div className="faq-item mb-20" key={index}>
                    <div id={`heading${item.id}`}>
                      <h5 className="mb-0">
                        <button
                          className={`faq-btn btn ${item.show ? "" : "collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded={item.show}
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question} <i className="fa-solid fa-chevron-down"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id={`collapse${item.id}`}
                      className={`collapse ${item.show ? "show" : ""}`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="faq-content">{item.answer}</div>
                    </div>
                  </div>
                ))}
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
