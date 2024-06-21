import React, { useState } from "react";
import logo_white from "../assets/logo_white.png";
import "./Navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (window.pageYOffset > 800) {
      setIsSticky(true);
      console.log(isSticky);
    } else {
      setIsSticky(false);
      console.log(isSticky);
    }
  }

  return (
    <ul className="flex fixed top-0 gap-10 items-center justify-center w-full z-20 navbar">
      <div
        className={`w-full pt-28 top-0 absolute navbar-bar z-[-1] gradient ${
          isSticky && "gradient-sticky"
        }`}
      ></div>
      <li className="font-karla uppercase font-extrabold text-xl text-white mt-5 flex flex-col navbar-item cursor-pointer">
        <h1>strona główna</h1>
        <hr className="bg-white w-0 h-[3px] rounded-full"></hr>
      </li>
      <li className="font-karla uppercase font-extrabold text-xl text-white mt-5 flex flex-col navbar-item cursor-pointer">
        <h1>o nas</h1>
        <hr className="bg-white w-0 h-[3px] rounded-full"></hr>
      </li>
      <li className="font-karla uppercase font-extrabold text-xl text-white mt-5 flex flex-col navbar-item cursor-pointer">
        <h1>szkolenie</h1>
        <hr className="bg-white w-0 h-[3px] rounded-full"></hr>
      </li>

      <div className="mx-18 relative flex justify-center">
        <img src={logo_white} alt="logo" className="w-[250px] mt-4" />
        <div
          className={`navbar-circle top-[-134px] z-20 w-[350px] h-[300px] absolute gradient-circle-static ${
            isSticky && "gradient-circle"
          }`}
        ></div>
      </div>

      <li className="font-karla uppercase font-extrabold text-xl text-white mt-5 flex flex-col navbar-item cursor-pointer">
        <h1>aktualności</h1>
        <hr className="bg-white w-0 h-[3px] rounded-full"></hr>
      </li>
      <li className="font-karla uppercase font-extrabold text-xl text-white mt-5 flex flex-col navbar-item cursor-pointer">
        <h1>cennik</h1>
        <hr className="bg-white w-0 h-[3px] rounded-full"></hr>
      </li>
      <li className="font-karla uppercase font-extrabold text-xl text-white mt-5 flex flex-col navbar-item cursor-pointer">
        kontakt
        <hr className="bg-white w-0 h-[3px] rounded-full"></hr>
      </li>
    </ul>
  );
};

export default Navbar;
