import React from "react";
import PropTypes from "prop-types";
import "./auther.m.css";

const Auther = ({ name, color }) => {
  return (
    <div>
      <p className={`auther-name ${color} `}> {name}</p>
    </div>
  );
};

Auther.propTypes = {
  name: PropTypes.string,
};

export default Auther;
