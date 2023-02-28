import React from "react";
import Product_temp from "./Product_temp";
import "./product.css";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useTitle from "../../useTitle/useTitle";

const Product_page = () => {
  useTitle("Product page");
  const url = `${process.env.REACT_APP_URL}/allProducts`;

  const {
    data: productData = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await axios.get(url);

      return data.data.data;
    },
  });

  return (
    <div className="bg_main">
      <div>
        <div className="container py-11 md:py-24 ">
          <div className="text-center pb-8 md:pb-11">
            <h1 className="font-semibold">DON'T MISS</h1>
            <h1 className="text-2xl md:text-4xl font-semibold">New Arrivals</h1>
          </div>
          {/* show 4 product data in the home page */}
          <div className="product_grid">
            {productData?.slice(0, 4).map((data) => (
              <Product_temp data={data} key={data?._id} />
            ))}
          </div>

          <div className="w-full mx-auto text-center mt-8">
            <Link to="/show_product_all">
              <button className="glow-on-hover" type="button">
                VIEW MORE PRODUCTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_page;
