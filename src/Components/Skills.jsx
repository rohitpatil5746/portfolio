import React, { useRef } from "react";
import img1 from "../assets/Skills/01.png";
import img2 from "../assets/Skills/02.png";
import img3 from "../assets/Skills/03.png";
import img4 from "../assets/Skills/04.png";
import img5 from "../assets/Skills/05.png";
import img6 from "../assets/Skills/06.png";
import { motion } from "motion/react";

const Skills = () => {
  let ref = useRef(null);
  return (
    <div className="bg-black py-12 pt-28">
      <div className="text-center text-white px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light italic mb-8">
          "The beautiful thing about learning is that nobody can take it away
          from you."
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
          My Skills
        </h1>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-12 lg:px-20"
      >
        {[img1, img2, img3, img4, img5, img6].map((img, index) => (
          <div key={index} className="flex justify-center items-center">
            <motion.img
              drag
              dragListener={true}
              whileDrag={{ scale: 1.2 }}
              dragElastic={10}
              dragConstraints={ref}
              src={img}
              alt={`Skill ${index + 1}`}
              className=" flex-shrink-0  w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain rounded-lg shadow-md grayscale hover:grayscale-0 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
