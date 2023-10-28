import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
