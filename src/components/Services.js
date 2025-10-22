import React from "react";

const Services = () => {
  const services = [
    {
      title: "Cardiology",
      text: "We provide advanced cardiac care using state-of-the-art technology and expert cardiologists.",
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
      title: "Cardiology",
      text: "We provide advanced cardiac care using state-of-the-art technology and expert cardiologists.",
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
      title: "Cardiology",
      text: "We provide advanced cardiac care using state-of-the-art technology and expert cardiologists.",
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
      title: "Cardiology",
      text: "We provide advanced cardiac care using state-of-the-art technology and expert cardiologists.",
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
      title: "Neurology",
      text: "Comprehensive neurological examinations and treatments for brain and nerve disorders.",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#00ADB5"
            strokeWidth="2"
          />
          <path
            d="M12 6v6l4 2"
            stroke="#00ADB5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Orthopedics",
      text: "Expert diagnosis and treatment for bone, joint, and muscle conditions.sdjasdjajdja",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
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
          <h2 className="mb-15">Our Medical Services</h2>
          <p>
            We offer a variety of healthcare services tailored to meet your
            needs.
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-item mb-30 text-center p-4">
                <div className="service-icon mb-25">{service.icon}</div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                  <a href="#" className="btn theme-btn mt-3">
                    Learn More
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
