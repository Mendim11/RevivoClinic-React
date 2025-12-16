import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Slider from "./components/Slider";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Consulting from "./components/Consulting";
import './i18n';


function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Slider />
      <Consulting /> 
      <About />
      <Services />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
