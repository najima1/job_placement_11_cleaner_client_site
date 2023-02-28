import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import "../Error_page/product.css"

const Product_temp = ({ data }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="temp shadow-lg rounded-sm bg-white p-4"
      >
        <Link to={`/product/${data?._id}`}>
          <div className="relative">
            <img className="tempImg" src={data?.image} alt="" />
            <h1 className="text-[#273c75] mt-2 font-semibold">
              {data?.product_name}
            </h1>
            <h1 className="">
              Price $
              <span className="text-[#7f8fa6] font-semibold">
                {data?.product_price}
              </span>
            </h1>

            {/* icon section */}
            <div className="flex items-center justify-center absolute top-1/2 left-[-50%] right-[-50%] gap-2">
              <span className="icon1 bg-[#22a6b3] text-white h-8 w-8 rounded-full p-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </span>
              <span className="icon2 bg-[#e84393] text-white h-8 w-8 rounded-full p-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <span className="icon3 bg-[#273c75] text-white h-8 w-8 rounded-full p-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product_temp;
