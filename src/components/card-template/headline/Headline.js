import React from "react";
import PropTypes from "prop-types";
import "./headline.m.css";

const Headline = ({ text, headlineColor, fontsBold, type, border }) => {
  console.log(border);
  return (
    <div>
      {type === "Headline" && (
        <h1 className={border ? "border headline" : ""}> {text}</h1>
      )}
      {type === "paragraph" && (
        <p className={` ${headlineColor} paragraph ${fontsBold}`}> {text}</p>
      )}
    </div>
  );
};

Headline.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  fontsBold: PropTypes.string,
  type: PropTypes.string,
};

export default Headline;
