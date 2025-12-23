import React, { useEffect, useState } from "react";
import Containar from "/src/components/Containar";
import Flex from "/src/components/Flex";
import Best1 from "/src/assets/Bestsellers1.jpg";
import Best2 from "/src/assets/Bestsellers2.jpg";
import Best3 from "/src/assets/Bestsellers3.jpg";
import Best4 from "/src/assets/Bestsellers4.jpg";
import Product from "/src/components/Product";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules";

const Bestsellers = () => {
var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay:true,
    autoplaySpeed:0,
    cssEase:'linear',
    slidesToShow: 4,
    slidesToScroll: 1,}
    // ====
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  });

// ========


  return (
    <>
      <Containar className={"py-8 "}>
        <h2 className="font-dmSans text-[39px] font-bold text-[#262626] pb-14">
          Our Bestsellers
        </h2>
        <Slider {...settings}>
          {allData.map((item) => (
            <div className="w-1/4">
              <Product
                productImg={item.thumbnail}
                badgeText={item.rating}
                productTitle={item.title}
                productPrice={item.price}
                productColor={"Black"}
              />
            </div>
          ))}
       </Slider>
      </Containar>
    </>
  );
};

export default Bestsellers;
