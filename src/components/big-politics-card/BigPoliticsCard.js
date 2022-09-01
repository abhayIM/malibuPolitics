import React from "react";
import PropTypes from "prop-types";
import "./big-politics-card.m.css";

import Headline from "../card-template/headline/Headline";
import Auther from "../card-template/auther/Auther";
import ResponsiveImage from "../card-template/image/ResponsiveImage";

const BigPoliticsCard = ({ image, headline, auther, headlineColor }) => {
  console.log("");
  return (
    <div className="">
      <div className="big-card-wrapper">
        <div className="image-container">
          <ResponsiveImage src={image} />
          <div className="heading-auther">
            <div className="padding-for-texts">
              <Headline
                type={"paragraph"}
                text={headline}
                headlineColor={headlineColor}
              />
              <Auther textVarient={"16"} name={auther} color={"white"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BigPoliticsCard.propTypes = {
  image: PropTypes.string,
  headline: PropTypes.string,
  headlineColor: PropTypes.string,
  auther: PropTypes.string,
};

export default BigPoliticsCard;
