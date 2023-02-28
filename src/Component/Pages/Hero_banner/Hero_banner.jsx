import React from "react";
import lottify from "../../image/lottify.gif";
import borderImg from "../../image/borderImg.webp";
import "./hero_banner.css";
import { Link } from "react-router-dom";

const Hero_banner = () => {
  return (
    <div>
      <div className="hero_bg">
        <div className="container h-screen pt-24 md:pt-11">
          <div className="md:flex items-center justify-between ">
            {/* left text */}
            <div className="">
              <span className="text-[2rem] md:text-[3rem] text-[#182C61]">
                Make
              </span>
              <span className="text-[2rem] md:text-[3rem] text-[#e84393] font-semibold relative">
                Your Cleaning
                <img
                  src={borderImg}
                  alt=""
                  className="absolute md:top-[64px] left-[2px]"
                />
              </span>
              <br />
              <span className="text-[2rem] md:text-[3rem] text-[#182C61]">
                Enjoyable With Our Product
              </span>
              <p className="pt-[2rem] md:pt-[0rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Ab laboriosam soluta quaerat vel iure saepe molestiae
                dolorem quas nihil voluptate.
              </p>

              <button className="customBtn">
                <Link to="/show_product_all">
                  <span>Shop now</span>
                </Link>
              </button>
            </div>

            {/* right image */}
            <div>
              <div className="bg-orange-400">
                <img src={lottify} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_banner;
