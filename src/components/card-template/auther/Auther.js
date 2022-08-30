import React from "react";
import PropTypes from "prop-types";
import "./author.m.css";

const Auther = ({ name, color }) => {
  return (
    <div>
      <p className={`author-name ${color} `}> {name}</p>
    </div>
  );
};

Auther.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Auther;
