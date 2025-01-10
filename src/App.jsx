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
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (event) => {
      if (cursor) {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
      <div
        ref={cursorRef}
        className="cursor h-4 w-4 bg-white rounded-full fixed mix-blend-difference"
        style={{ position: "fixed", transform: "translate(-50%, -50%)" }}
      ></div>
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
