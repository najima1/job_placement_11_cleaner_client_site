import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Screen_loader from "../../Screen_loader/Screen_loader";
import "../Product_page/product.css";
import Product_temp from "../Product_page/Product_temp";
import "./show_product.css";

const Show_all_product = () => {
  const url = `${process.env.REACT_APP_URL}/allProducts`;

  //to get the all product from api request
  // product api call here
  const {
    data: productData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const data = await axios.get(url);

      return data.data.data;
    },
  });

  return (
    <>
      {isLoading ? (
        <Screen_loader />
      ) : (
        <div className="product_bg py-24 md:py-36">
          <div className="container">
            {/* product templete */}
            <div className="product_grid">
              {productData.map((data) => (
                <Product_temp data={data} key={data?._id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Show_all_product;
