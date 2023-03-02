import React, { useEffect, useRef } from "react";
import "./details.css";
import "../Product_page/product.css";
import ReactImageMagnify from "react-image-magnify";

import { useLoaderData, useParams } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product_temp from "../Product_page/Product_temp";
import { useProvider } from "../../Context/Context_provider";
import Show_review from "./Show_review";
import { toast } from "react-hot-toast";
import useTitle from "../../useTitle/useTitle";
import Screen_loader from "../../Screen_loader/Screen_loader";

const Product_details = () => {
  useTitle("Product page");

  //current login user
  const { currentUser } = useProvider();
  const reviewInput = useRef();

  const {
    data: { data },
  } = useLoaderData();

  // To show product suggestion
  const url = `${process.env.REACT_APP_URL}/allProducts`;
  const {
    data: suggestData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const suggest = await axios.get(url);
      return suggest.data.data;
    },
  });

  //show review query request
  //to get find all review
  const review_url = `${process.env.REACT_APP_URL}/get_review/${data._id}`;

  const { data: review = [] } = useQuery({
    queryKey: ["get_review"],

    queryFn: async () => {
      const suggest = await axios.get(review_url);
      refetch();
      return suggest.data.data;
    },
  });

  //review store in database
  const reviewHandlar = (e, productData, id) => {
    e.preventDefault();
    const reviewValue = reviewInput.current.value;
    const url = `${process.env.REACT_APP_URL}/post_review`;

    const reviewObj = {
      ...productData,
      product_id: id,
      review: reviewValue,
      email: currentUser.email,
    };

    // fetch function
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewObj),
    };

    fetch(url, requestOptions)
      .then((e) => e.json())
      .then((data) => {
        toast.success("review send successfull");
        e.target.reset();

        reloadReview();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  //get product review
  //filter by product id

  const reloadReview = () => {
    window.location.reload();
  };

  return (
    <>
      {isLoading ? (
        <Screen_loader />
      ) : (
        <div className="bg_color py-24 pt-24 md:pt-36">
          <div className="">
            <div className="container">
              <div>
                <div className="single_product pb-4">
                  {/* left sit*/}
                  <div className="p-4">
                    <div>
                      <div className="hidden md:block">
                        <ReactImageMagnify
                          {...{
                            smallImage: {
                              alt: "Wristwatch by Ted Baker London",
                              isFluidWidth: true,
                              src: data?.image,
                            },
                            largeImage: {
                              src: data?.image,
                              width: 400,
                              height: 400,
                            },
                          }}
                        />
                      </div>
                      {/* for mobile device */}
                      <div className="md:hidden block">
                        <img src={data?.image} alt="" />
                      </div>
                    </div>
                  </div>

                  {/* right site */}
                  <div className="p-4">
                    <div className="">
                      {/* name & description */}
                      <div>
                        <h1 className="text-[#273c75] font-semibold text-2xl pb-2">
                          {data?.product_name}
                        </h1>
                        <span className="text-[#22a6b3] font-semibold text-2xl">
                          {data?.product_price} -{" "}
                          <span className="line-through text-[#aebcca]">
                            $19.00
                          </span>
                        </span>
                        <p className="py-4">{data?.desc}</p>
                        <br />
                        <p>{data?.desc2}</p>
                      </div>
                      {/* ======================================= */}
                      {/* counter & buy button */}
                      <div className="flex items-center mt-4 gap-x-2">
                        <input
                          type="number"
                          placeholder="1"
                          className="pl-3 pr-1 py-2 border-[1px] w-[15%] border-[#c8d6e5] outline-none text-[#95a9be]"
                        />
                        <button className="py-2 px-8 font-semibold inline-block outline-none uppercase bg-[#00d2d3] text-white">
                          Buy now
                        </button>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-11 h-11 bg-white rounded-full p-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        </span>
                      </div>
                      {/* ======================================= */}
                      {/* product info */}
                      <div className="mt-8 space-y-2">
                        <h1 className="font-semibold">
                          SKU: <span className="text-[#747d8c]">455</span>
                        </h1>
                        <h1 className="font-semibold">
                          Category:{" "}
                          <span className="text-[#747d8c]">Household</span>
                        </h1>
                        <h1 className="font-semibold">
                          Tags:{" "}
                          <span className="text-[#747d8c]">
                            Bathroom, Dishwashing
                          </span>
                        </h1>
                        <h1 className="font-semibold">
                          Product ID:{" "}
                          <span className="text-[#747d8c]">
                            {data?.product_id}
                          </span>
                        </h1>
                      </div>
                      {/* ======================================= */}
                      {/* user review create */}
                      <div>
                        <div>
                          {/* <h1>Review the product</h1> */}
                          <form
                            action=""
                            onSubmit={(e) => reviewHandlar(e, data, data._id)}
                          >
                            <div className="flex gap-2 my-4">
                              <textarea
                                required
                                name=""
                                placeholder="review"
                                id=""
                                cols="30"
                                rows="4"
                                ref={reviewInput}
                                className="outline-none p-2 w-full"
                              ></textarea>
                              <button
                                disabled={currentUser?.uid ? false : true}
                                className="px-6 py-1 bg-[#00cec9] text-white h-11"
                              >
                                Review
                              </button>
                            </div>
                          </form>

                          {review.length > 0 && (
                            <div className="pt-4">
                              <h1 className="text-[#273c75] font-bold text-xl py-2">
                                Product reviews
                              </h1>
                              <div className="space-y-3">
                                {review.map((rev) => (
                                  <Show_review review={rev} key={rev._id} />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //==================================== */}
              {/* top suggestion product section */}
              <div>
                <hr className="block border-white" />
                <h1 className="text-2xl md:text-4xl text-[#273c75] py-8 font-semibold">
                  Top suggest product
                </h1>
                <div className="product_grid">
                  {suggestData.map((data) => (
                    <Product_temp data={data} key={data?._id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product_details;
