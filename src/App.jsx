import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import { Portfolio } from "./components/portfolio/portfolio";
import { Number } from "./components/Number/Number";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Contact } from "./components/Contact/Contact";
import Footer from "./components/Footer/Footers";
// import AnimatedCursor from "react-animated-cursor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Number />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
