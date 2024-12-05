import React, { useState } from "react";
import nike from "../assets/Projects/Nike.png";
import ID from "../assets/Projects/interior.png";
import foodDevlivery from "../assets/Projects/fooddefinal.png";

export default function Project() {
  let [data, setData] = useState([
    {
      id: "1",
      image: nike,
      heading: "Nike Landing Page",
      info: "Nike landing page where I can use React and Tailwind CSS to make a stylish website. In this, I can add a map and forms that store user data in localStorage. I also use Router to render to another page without reloading the page.",
    },
    {
      id: "2",
      image: ID,
      heading: "Interior Design",
      info: "It is a website that showcases interior designs created by designers. It also includes offers and promotions for clients to explore various design options.",
    },
    {
      id: "3",
      image: foodDevlivery,
      heading: "Burger Delight E-Commerce",
      info: "Created a fully responsive e-commerce website featuring a dynamic burger cart. Used Redux Toolkit for real-time cart updates and Tailwind CSS for sleek styling, ensuring a seamless user experience.",
    },
  ]);

  return (
    <div className="text-center p-10 bg-black text-white pt-28">
      <h1 className="text-5xl font-bold mb-8">PROJECTS</h1>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-start">
        {data.map((e) => {
          return (
            <div
              key={e.id}
              className="w-full  md:w-1/2 border border-black p-5 rounded-lg shadow-lg"
            >
              <img
                src={e.image}
                alt={e.heading}
                className="w-full  object-cover rounded-lg mb-5 "
              />
              <h5 className="text-2xl md:text-3xl lg:text-2xl  font-semibold mb-3">
                {e.heading}
              </h5>
              <p className="text-sm">{e.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
