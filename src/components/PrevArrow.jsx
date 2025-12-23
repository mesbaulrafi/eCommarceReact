import React from "react";
import PrevIcon from "../assets/icons/PrevIcon";


const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className={"absolute left-2 top-1/2 -translate-y-1/1 z-50"} onClick={onClick}>
    <PrevIcon/>
  </div>;
};

export default PrevArrow;
