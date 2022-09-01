import React from "react";
import PropTypes from "prop-types";
import "./author.m.css";

const Auther = ({ name, color, textVarient }) => {
  return (
    <div>
      <p className={`author-name font-size-${textVarient} ${color} `}>
        {" "}
        {name}
      </p>
    </div>
  );
};

Auther.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  textVarient: PropTypes.string,
};

export default Auther;
