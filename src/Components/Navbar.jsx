import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ skillScroll, projectsScroll, aboutScroll }) => {
  const homeRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      ref={homeRef}
      id="hero "
      className="text-white   w-fit bg-black overflow-x-hidden relative  "
    >
      <div
        id="nav"
        className="flex  sm:text-xl justify-between sm:py-2 md:py-5 px-2 sm:px-4 md:px-6 w-[100%] fixed bg-black"
      >
        <a className=" sm:text-xl " href="#">
          Rohit Patil
        </a>
        <div className="flex gap-2 md:gap-5 sm:text-2xl md:text-3xl">
          <a onClick={() => scrollToHome()} className="cursor-pointer">
            Home
          </a>
          <a className="cursor-pointer" onClick={() => skillScroll()}>
            Skills
          </a>
          <a className="cursor-pointer" onClick={() => projectsScroll()}>
            Projects
          </a>
          <a className="cursor-pointer" onClick={() => aboutScroll()}>
            Contact
          </a>
        </div>
        <h4>MENU+</h4>
      </div>

      <div id="heading" className="py-24 w-[100vw]">
        <div className="bounding pl-12  text-5xl sm:text-7xl md:9xl lg:text-[20vh] sm:font-extrabold">
          <h1 className="boundingelem text-gray-500">FrontEnd</h1>
        </div>
        <div className="blocktext">
          <div className="bounding pl-24 sm:pl-20 md:pl-28 xl:pl-44  text-5xl sm:text-7xl md:9xl lg:text-[20vh] sm:font-extrabold">
            <h1 className="boundingelem text-gray-500" id="secondh1">
              Devloper
            </h1>
          </div>
          <div className="bounding text-xs pt-2 sm:text-lg md:text-2xl lg:text-4xl pl-56 sm:pl-80 md:pl-[49srem] lg:pl-[38rem] w-fit">
            <h1 className="boundingelem h1Small">Based in Surat</h1>
          </div>
        </div>
      </div>
      <div id="heading2" className="flex flex-col gap-1 pl-2">
        <div className="bounding text-xl sm:text-2xl lg:text-3xl ">
          <h1
            direction="left"
            scrollamount="25"
            behavior="slide"
            className="boundingelem"
          >
            available for FullTime
          </h1>
        </div>
        <div className="bounding text-xl sm:text-2xl lg:text-3xl ">
          <h1
            direction="left"
            scrollamount="30"
            behavior="slide"
            className="boundingelem"
          >
            work from may '23
          </h1>
        </div>
      </div>
      <div id="herofooter " className="flex justify-around pt-6 ">
        <a href="# " className="lg:text-2xl md:text-xl text-xs pl-2 ">
          I am a fresher seeking new opportunities
          <i className="ri-arrow-right-up-line"></i>{" "}
        </a>
        <a href="#" className="lg:text-2xl md:text-xl text-xs pl-2">
          React Enthusiast<i className="ri-arrow-right-up-line"></i>
        </a>
        <div id="iconset" className="flex gap-2 fixed right-2   ">
          <div
            title="Move To Top"
            id="circle"
            className="h-8 w-8  border rounded-full flex  justify-center text-black bg-white cursor-pointer "
          >
            <ArrowUp onClick={() => scrollToTop()} />
          </div>
          <div
            title="Move To Bottom"
            id="circle"
            className="h-8 w-8   border  rounded-full flex  justify-center text-black bg-white cursor-pointer "
          >
            <ArrowDown onClick={() => scrollToBottom()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
