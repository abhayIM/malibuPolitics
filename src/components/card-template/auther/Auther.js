import React from "react";
import PropTypes from "prop-types";
import "./author.m.css";

const Auther = ({ name, color, size }) => {
  return (
    <div>
      <p className={`author-name font-size-${size} ${color} `}> {name}</p>
    </div>
  );
};

Auther.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Auther;
