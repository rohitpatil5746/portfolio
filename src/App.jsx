import "./App.css";

import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Second from "./Components/Second";
import About from "./Components/About";
import Project from "./Components/Project";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

export default function App() {
  const skillRef = useRef(null);
  const skillScroll = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const projectRef = useRef(null);
  const projectsScroll = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const aboutRef = useRef(null);
  const aboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[100%] overflow-x-hidden bg-black ">
      <Navbar
        skillScroll={skillScroll}
        projectsScroll={projectsScroll}
        aboutScroll={aboutScroll}
      />
      <div>
        <Second
          skillScroll={skillScroll}
          projectsScroll={projectsScroll}
          aboutScroll={aboutScroll}
        />
      </div>
      <div ref={skillRef}>
        <Skills />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
