import React, { useEffect } from "react";
import Review_temp from "./Review_temp";
import "./review.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useProvider } from "../../Context/Context_provider";
import Screen_loader from "../../Screen_loader/Screen_loader";

const Review = () => {
  const { currentUser, setLoading, loading } = useProvider();

  //get all review from api
  //filter by email
  //
  const {
    data: reviewData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["get_all_review", currentUser?.email],
    enabled: !!currentUser,
    queryFn: async () => {
      const reviewUrl = `${process.env.REACT_APP_URL}/get_all_review/${currentUser?.email}`;

      const rev = await axios.get(reviewUrl);
      return rev.data.data;
    },
  });

  return (
    <>
      {isLoading ? (
        <Screen_loader />
      ) : (
        <div className="">
          <div className=" bg-[#E6EEF7] py-16 md:py-24 ">
            <div className="container md:w-1/2">
              <div className="h-full">
                {reviewData.length === 0 ? (
                  <h1 className="py-11 text-2xl text-[#273c75] flex items-center justify-center md:text-4xl font-semibold">
                    There is not Product review
                  </h1>
                ) : (
                  <h1 className="py-11 text-2xl text-[#273c75] ">
                    Product review
                  </h1>
                )}

                <div className="">
                  {reviewData?.map((value) => (
                    <Review_temp
                      review={value}
                      refetch={refetch}
                      key={value._id}
                    />
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

export default Review;
