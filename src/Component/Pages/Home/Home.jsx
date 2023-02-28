import React from "react";
import Screen_loader from "../../Screen_loader/Screen_loader";
import useTitle from "../../useTitle/useTitle";
import Button_btn from "../Button_btn/Button_btn";
import Footer from "../Footer/Footer";
import Hero_banner from "../Hero_banner/Hero_banner";
import Hero_item from "../Hero_item/Hero_item";
import Product_page from "../Product_page/Product_page";

const Home = () => {
  useTitle("Home page");
  return (
    <div>
      {/* hero banner */}
      <Hero_banner />

      {/* hero product itme */}
      <Hero_item />
      {/* <Button_btn /> */}

      {/* product page will show 4 items */}
      <Product_page />

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
