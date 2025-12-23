import React from "react";
import NextIcon from "../assets/icons/NextIcon";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={"absolute right-2 top-1/2 -translate-y-1/1"} onClick={onClick}>
      <NextIcon/>
    </div>
  );
};

export default NextArrow;
