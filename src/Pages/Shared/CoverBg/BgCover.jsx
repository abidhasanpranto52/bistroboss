import React from "react";
import { Parallax } from "react-parallax";

const BgCover = ({ img,title }) => {
  return (
    <Parallax
        blur={{ min: -25, max: 25 }}
        bgImage={img} className="rounded"
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
      className="hero lg:h-[600px]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="p-10 lg:p-28 rounded-md bg-gradient-to-r from-[#0f0f0f87] to-[#0f0f0f5b]">
          <h1 className="mb-5 text-5xl lg:text-8xl">{title}</h1>
          <p className="mb-5 uppercase">
            Would You Like to Try a Dish ?
          </p>
        </div>
      </div>
    </div>
    </Parallax>
    
  );
};

export default BgCover;
