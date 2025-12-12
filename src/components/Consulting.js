import React from "react";


function Consulting() {
  return (
    <section className="consulting-section">
      <div className="consulting-container">

        <h2 className="consulting-title">Online Physiotherapy & Osteopathy Consultation</h2>

        <p className="consulting-description">
          Get professional physiotherapy and osteopathy guidance from your phone. 
          Every consultation is personalized — tell me your symptoms and I will guide you step by step.
        </p>

        <div className="consulting-cards">
          <div className="consulting-card">
            <h3 className="consulting-card-title">What I Can Help With</h3>
            <ul>
              <li>Back, neck, & shoulder pain</li>
              <li>Muscle tension & mobility issues</li>
              <li>Injury recovery guidance</li>
              <li>Posture analysis</li>
              <li>Exercise recommendations</li>
              <li>Rehabilitation support</li>
            </ul>
          </div>

          <div className="consulting-card">
            <h3 className="consulting-card-title">What You Will Receive</h3>
            <ul>
              <li>Personalised symptom-based guidance</li>
              <li>Home treatment advice</li>
              <li>Custom exercises (if needed)</li>
              <li>Assessment based on your photos/videos</li>
              <li>Whatsapp support</li>
              <li>Clear next steps</li>
            </ul>
          </div>
        </div>

        <a
          className="consulting-button"
          href="https://wa.me/+38349285577"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>

        <p className="consulting-disclaimer">
          *This online consultation provides general guidance and does not replace an in-person medical examination when required.*
        </p>

      </div>
    </section>
  );
}

export default Consulting;
