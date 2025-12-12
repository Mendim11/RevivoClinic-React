import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section pt-120">
      <div className="shape shape-2">
        {/* <img src="/assets/img/shapes/shape-2.svg" alt="shape" /> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-11 mx-auto">
            <div className="about-content text-center mb-55">
              <div className="section-title mb-30">
                <span className="wow fadeInDown" data-wow-delay=".2s">
                  Rreth nesh
                </span>
                <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                  Mirë se vini në Revivo Clinic
                </h2>
              </div>
              <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">
                Një vend ku kujdesi shëndetësor dhe mirëqenia juaj janë
                prioriteti ynë kryesor. <br></br>Në klinikën tonë, ne besojmë se
                çdo pacient meriton trajtim personal, të sigurt dhe të bazuar në
                standardet më të larta profesionale. Ofrojmë një gamë të gjerë
                shërbimesh mjekësore dhe fizioterapeutike, duke përdorur
                teknologjinë më moderne dhe metoda të provuara shkencërisht, për
                të siguruar rezultate të qëndrueshme dhe të besueshme. Bëhuni
                pjesë e familjes sonë dhe le të kujdesemi së bashku për
                shëndetin dhe mirëqenien tuaj!
              </p>
              <a
                href="#footer"
                className="btn theme-btn wow fadeInUp"
                data-wow-delay=".8s"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-img text-center">
        <img src="/assets/img/about-img.png" alt="About Clinic" />
      </div>
    </section>
  );
};

export default About;
