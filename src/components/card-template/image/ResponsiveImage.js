import React from "react";
import PropTypes from "prop-types";
import "./responsive-image.m.css";

const ResponsiveImage = ({ src, height }) => {
  return (
    <div>
      <img
        className={height ? ` main-image ${height} ` : "main-image"}
        src={src}
        alt="img"
      />
    </div>
  );
};
ResponsiveImage.propTypes = {
  type: PropTypes.bool,
  src: PropTypes.string,
};

export default ResponsiveImage;
