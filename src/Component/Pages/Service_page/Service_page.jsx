import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import "./service.css";
import Product_temp from "../Product_page/Product_temp";
import useTitle from "../../useTitle/useTitle";
import Screen_loader from "../../Screen_loader/Screen_loader";

const Service_page = () => {
  //to update title after call the hooks
  useTitle("Service page");

  const url = `${process.env.REACT_APP_URL}/allProducts`;

  const {
    data: productData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await axios.get(url);

      return data.data.data;
    },
  });

  return (
    <div>
      {isLoading ? (
        <Screen_loader />
      ) : (
        <div className="bg_img">
          <div className="container py-16 md:py-36">
            <div className="product_grids">
              {productData?.map((data) => (
                <Product_temp data={data} key={data?._id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service_page;
