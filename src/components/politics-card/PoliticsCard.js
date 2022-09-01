import React from "react";
import PropTypes from "prop-types";
import "./politics-card.m.css";

import Headline from "../card-template/headline/Headline";
import Auther from "../card-template/auther/Auther";
import ResponsiveImage from "../card-template/image/ResponsiveImage";

const PoliticsCard = ({
  image,
  headline,
  auther,
  headlineColor,
  backgroundWhite,
  fontsBold,
  size,
}) => {
  return (
    <div>
      <div
        className={
          backgroundWhite ? "politics-card-wrapper-bg" : "politics-card-wrapper"
        }
      >
        {image ? <ResponsiveImage height={"smaller-height"} src={image} /> : ""}
        <div
          className={
            image
              ? "politics-card-headline-auther"
              : "politics-card-headline-auther-top"
          }
        >
          <Headline
            fontsBold={fontsBold}
            type={"paragraph"}
            text={headline}
            headlineColor={headlineColor}
          />
          <Auther size={size} name={auther} color={"gray"} />
        </div>
      </div>
    </div>
  );
};

export default PoliticsCard;
