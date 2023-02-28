import React from "react";
import Button_btn from "../Button_btn/Button_btn";
import "./hero_items.css";

const Hero_item = () => {
  return (
    <div className="top_banner py-7 mt-[10.5rem] md:mt-[0rem]">
      <div className="container py-16">
        <div className="responsives">
          {/* laft site */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="left_img bg-teal-500 px-4 py-16 shadow-lg">
              <h1 className="text-[2rem] md:text-[4rem] text-[#FC427B]">
                Up to 50% off
              </h1>
              <p className="text-[#182C61] my-2">Home Supplies</p>

              <div className="bg-white">
                <Button_btn />
              </div>
            </div>
          </div>
          {/* right site */}
          <div
            data-aos="fade-down"
            // data-aos-delay="200"
            data-aos-duration="1000"
            className="right_bg py-16 px-4 shadow-lg"
          >
            <div className="">
              <p className="text-[2rem] text-[#182C61]">Disinfectant spray</p>
              <p className="text-[2rem] text-[#182C61]">
                comfort to <span className="text-[#FC427B]">your home</span>
              </p>
              <p className="">Dicta sunt explicabo Nemo enim ipsam.</p>

              <div className="mt-2">
                <Button_btn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_item;
