import React, { useEffect, useState } from "react";

const Show_review = ({ review }) => {
 

  return (
    <div className="">
      <h1 className="">
        <ol>{review?.review}</ol>
      </h1>
    </div>
  );
};

export default Show_review;
