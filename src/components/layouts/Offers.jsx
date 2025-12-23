import React from "react";
import Containar from "/src/components/Containar";
import Flex from "/src/components/Flex";
import Offers1 from "/src/assets/Offers1.jpg";
import Offers2 from "/src/assets/Offers2.jpg";
import Offers3 from "/src/assets/Offers3.jpg";
import Offers4 from "/src/assets/Offers4.jpg";
import Product from "/src/components/Product";


const Offers = () => {
  return (
    <>
      <Containar className={"py-8 "}>
        <h2 className="font-dmSans text-[39px] font-bold text-[#262626] pb-14">
          Special Offers
        </h2>
        <Flex className={"justify-between gap-x-10"}>
          {/* Special Offers Fast  */}
          <Product
            productImg={Offers1}
            badgeText={"New"}
            productTitle={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            productColor={"Black"}
          />

          {/* Special Offers 2nd */}
          <Product
            productImg={Offers2}
            badgeText={"New"}
            productTitle={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            productColor={"Black"}
          />

          {/* Special Offers 3rd */}
          <Product
            productImg={Offers3}
            badgeText={"New"}
            productTitle={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            productColor={"Black"}
          />

          {/* Special Offers 4th */}
          <Product
            productImg={Offers4}
            badgeText={"New"}
            productTitle={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            productColor={"Black"}
          />
        </Flex>
      </Containar>
    </>
  );
};

export default Offers;
