import Containar from "/src/components/Containar";

import Product from "/src/components/Product";
import NewOne from "/src/assets/ap1.jpg";
import NewTwo from "/src/assets/nweArr2.jpg";
import NewThree from "/src/assets/nweArr3.jpg";
import NewFour from "/src/assets/nweArr4.jpg";

// slick slider start
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

// slick slider end

const NewArrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="pt-8 pb-20">
        <Containar>
          <h2 className="font-dmSans text-[39px] font-bold text-[#262626] pb-14">
            New Arrivals
          </h2>
          <div className="">
            <Slider {...settings}>
              {/* New Fast  */}
              <div className="w-1/4">
                <Product
                  productImg={NewOne}
                  badgeText={"New"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              {/* New 2nd */}
              <div className="w-1/4">
                <Product
                  productImg={NewTwo}
                  badgeText={"New"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              {/* New 3rd */}
              <div className="w-1/4">
                <Product
                  productImg={NewThree}
                  badgeText={"New"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              {/* new 4th */}
              <div className="w-1/3">
                <Product
                  productImg={NewFour}
                  badgeText={"New"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              {/* New 5th */}
              <div className="w-1/4">
                <Product
                  productImg={NewTwo}
                  badgeText={"New"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              {/* New 6th */}
              <div className="w-1/4">
                <Product
                  productImg={NewThree}
                  badgeText={"New"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  productColor={"Black"}
                />
              </div>
              {/* new 7th */}
              <div className="w-1/3">
                <Product
                  productImg={NewFour}
                  badgeText={"New"}
                  productTitle={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                  productColor={"Black"}
                />
              </div>
            </Slider>
          </div>
        </Containar>
      </div>
    </>
  );
};

export default NewArrivals;
