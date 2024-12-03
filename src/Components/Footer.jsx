import React from "react";
import Clock from "./Clock";

export default function Footer() {
  return (
    <div>
      <div
        id="footer"
        className="bg-black text-white flex justify-between pt-5 px-5"
      >
        <div id="rightfooter " className="lg:flex lg:gap-2">
          <h4>2024 &copy;</h4>
          <Clock />
        </div>
        <div id="leftfooter" className="flex gap-3">
          <a href="#">instagram</a>
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/rohit-patil-57b01a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          >
            linkdin
          </a>
          <a href="#">twitter</a>
        </div>
      </div>
    </div>
  );
}
