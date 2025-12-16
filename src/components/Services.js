import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "physiotherapy",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21s-6-4.35-9-9a5.5 5.5 0 019-6.36A5.5 5.5 0 0121 12c-3 4.65-9 9-9 9z"
            stroke="#00ADB5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "osteopathy",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21s-6-4.35-9-9a5.5 5.5 0 019-6.36A5.5 5.5 0 0121 12c-3 4.65-9 9-9 9z"
            stroke="#00ADB5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "manual",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21s-6-4.35-9-9a5.5 5.5 0 019-6.36A5.5 5.5 0 0121 12c-3 4.65-9 9-9 9z"
            stroke="#00ADB5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "sports",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21s-6-4.35-9-9a5.5 5.5 0 019-6.36A5.5 5.5 0 0121 12c-3 4.65-9 9-9 9z"
            stroke="#00ADB5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "posture",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21s-6-4.35-9-9a5.5 5.5 0 019-6.36A5.5 5.5 0 0121 12c-3 4.65-9 9-9 9z"
            stroke="#00ADB5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "chronic",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21s-6-4.35-9-9a5.5 5.5 0 019-6.36A5.5 5.5 0 0121 12c-3 4.65-9 9-9 9z"
            stroke="#00ADB5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="services-section pt-120 pb-90">
      <div className="container">
        <div className="text-center mb-55">
          <h2 className="mb-15">{t("services.title")}</h2>
          <p>{t("services.subtitle")}</p>
        </div>

        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6 d-flex" key={service.key}>
              <div className="service-item mb-30 text-center p-4">
                <div className="service-icon mb-25">{service.icon}</div>
                <div className="service-content">
                  <h4>{t(`services.items.${service.key}.title`)}</h4>
                  <p>{t(`services.items.${service.key}.text`)}</p>
                  <a href="#" className="btn theme-btn mt-3">
                    {t("services.items.learnMore")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
