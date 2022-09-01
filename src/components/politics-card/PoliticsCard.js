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
  textVarient,
  thirdSection,
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
              : thirdSection
              ? "third-section-card"
              : "politics-card-headline-auther-top"
          }
        >
          <Headline
            fontsBold={fontsBold}
            type={"paragraph"}
            text={headline}
            headlineColor={headlineColor}
          />
          <Auther textVarient={textVarient} name={auther} color={"gray"} />
        </div>
      </div>
    </div>
  );
};

export default PoliticsCard;
