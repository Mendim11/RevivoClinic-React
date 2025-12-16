import React from "react";
import { useTranslation } from "react-i18next";

function Consulting() {
  const { t } = useTranslation();

  return (
    <section className="consulting-section">
      <div className="consulting-container">

        <h2 className="consulting-title">{t("consulting.title")}</h2>

        <p className="consulting-description">{t("consulting.description")}</p>

        <div className="consulting-cards">
          <div className="consulting-card">
            <h3 className="consulting-card-title">{t("consulting.card1.title")}</h3>
            <ul>
              <li>{t("consulting.card1.item1")}</li>
              <li>{t("consulting.card1.item2")}</li>
              <li>{t("consulting.card1.item3")}</li>
              <li>{t("consulting.card1.item4")}</li>
              <li>{t("consulting.card1.item5")}</li>
              <li>{t("consulting.card1.item6")}</li>
            </ul>
          </div>

          <div className="consulting-card">
            <h3 className="consulting-card-title">{t("consulting.card2.title")}</h3>
            <ul>
              <li>{t("consulting.card2.item1")}</li>
              <li>{t("consulting.card2.item2")}</li>
              <li>{t("consulting.card2.item3")}</li>
              <li>{t("consulting.card2.item4")}</li>
              <li>{t("consulting.card2.item5")}</li>
              <li>{t("consulting.card2.item6")}</li>
            </ul>
          </div>
        </div>

        <a
          className="consulting-button"
          href="https://wa.me/+38349285577"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("consulting.button")}
        </a>

        <p className="consulting-disclaimer">{t("consulting.disclaimer")}</p>

      </div>
    </section>
  );
}

export default Consulting;
