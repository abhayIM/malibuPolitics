import React, { useEffect, memo, useState } from "react";
import MultipleDropDown from "./MultipleDropDown";
import { sumOfEven, generateRandomNumber } from "./utility";

const Practice = () => {
  //console.log(sumOfEven(5));

  const [firstWidth, setFirstWidth] = useState(0);

  const generateRandomNo = (num) => {
    const rNo = Math.floor(Math.random() * num);
    setFirstWidth(rNo);
    return rNo;
  };

  useEffect(() => {}, []);
  return (
    <div
      onClick={() => {
        generateRandomNo(100);
      }}
    >
      Practice
      <div
      // style={{
      //   display: "flex",
      //   height: "200px",
      //   width: `100vw`,
      //   //   backgroundColor: "red",
      // }}
      >
        <MultipleDropDown />

        {/* <div
          style={{
            height: "200px",
            width: `${firstWidth}vw`,
            backgroundColor: "blue",
          }}
        ></div>
        <div
          style={{
            height: "200px",
            width: `${100 - firstWidth}vw`,
            backgroundColor: "red",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default memo(Practice);
