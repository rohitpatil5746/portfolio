import React from "react";
import me from "../assets/me/Me.jpg";
import Rohit_Patil_Cv from "../assets/me/rohitpatilCV.pdf";

export default function About() {
  return (
    <div
      id="about"
      className="bg-black  px-7 sm:md:flex md:flex lg:gap-2 pt-28"
    >
      <div className="flex justify-center items-center">
        <img
          className="w-[215px] sm:w-[80rem] md:w-[100rem] xl:w-[120rem] "
          style={{ borderRadius: "50%" }}
          src={me}
          alt=""
        />
      </div>
      <div
        id="textabout"
        className="text-white tracking-tight text-center xl:px-16 sm:text-left leading-5 text-xs md:text-sm md:leading-7 lg:text-2xl lg:leading-10"
      >
        <h5 className="text-center">(about Me)</h5>
        <p className="">
          I am a passionate Frontend Developer with a focus on building
          responsive, user-friendly interfaces using React. I have a strong
          foundation in JavaScript, HTML, and CSS, and I am experienced in
          working with jQuery and Tailwind CSS. I enjoy creating seamless web
          experiences and have a keen eye for design, leveraging Tailwind CSS to
          build modern, scalable, and maintainable UI components. My goal is to
          continuously learn and grow in the ever-evolving field of web
          development, delivering high-quality code and innovative solutions.
        </p>
        <div className="flex justify-between p-2">
          <a
            title="Make A Phone Call"
            className="hover:bg-white hover:text-black border rounded-full p-2"
            href="tel:+91-966-256-5746"
          >
            let's talk
          </a>
          <a
            title="Download"
            download="Rohit_Patil_Cv"
            className="hover:bg-white hover:text-black border rounded-full p-2 "
            href={Rohit_Patil_Cv}
          >
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
}
