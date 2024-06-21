import React from "react";
import banner from "../assets/banner.png";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full h-screen">
      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,30%)] z-10"></div>
      <img src={banner} alt="hero" className="w-full h-full object-cover" />
    </div>
  );
};

export default Hero;
