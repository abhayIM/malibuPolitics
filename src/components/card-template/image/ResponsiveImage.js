import React from "react";
import PropTypes from "prop-types";
import "./responsive-image.m.css";

const ResponsiveImage = ({ horizontal, src, height }) => {
  return (
    <div>
      <img
        className={height ? ` main-image ${height} ` : "main-image"}
        // height={height ? height : ""}
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
