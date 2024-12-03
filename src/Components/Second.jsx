import React, { forwardRef } from "react";
import Line from "./Line";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";

function Second({ aboutScroll, projectsScroll }) {
  return (
    <div
      id="second "
      className="text-white bg-black pt-12 px-12  overflow-x-hidden "
    >
      <Line />
      <div className="elem flex justify-between  relative ">
        <h1 className=" flex  text-3xl sm:text-3xl md:text-7xl  lg:text-6xl">
          Skills{" "}
          <ChevronDown
            onClick={() => projectsScroll()}
            className="cursor-pointer"
          />
        </h1>
        <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl">2024</h5>
      </div>
      <Line />
      <div className="elem flex justify-between   text-3xl sm:text-3xl md:text-4xl lg:text-6xl  ">
        <h1 className=" flex  text-3xl sm:text-3xl md:text-7xl  lg:text-6xl">
          Projects{" "}
          <ChevronDown
            onClick={() => projectsScroll()}
            className="cursor-pointer"
          />
        </h1>
        <h5 className=" text-xl sm:text-3xl md:text-4xl lg:text-6xl">2024</h5>
      </div>
      <Line />

      <div className="elem flex justify-between   text-3xl sm:text-3xl md:text-7xl  lg:text-6xl ">
        <h1 className=" flex  ">
          Contact{" "}
          <ChevronDown
            className="cursor-pointer"
            onClick={() => aboutScroll()}
          />
        </h1>
        <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl">2022</h5>
      </div>
      <Line />
    </div>
  );
}
export default Second;
