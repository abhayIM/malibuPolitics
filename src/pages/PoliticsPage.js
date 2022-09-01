import React from "react";
import Headline from "../components/card-template/headline/Headline";
import * as Asset from "../assets/index";
import BigPoliticsCard from "../components/big-politics-card/BigPoliticsCard";
import PoliticsCard from "../components/politics-card/PoliticsCard";
import "./politics-page.m.css";
import { PoliticsData, PoliticsData2 } from "../politics-data/PoliticsData";

const PoliticsPage = () => {
  return (
    <div className="politics-page-wrapper">
      <div>
        <Headline type="Headline" border={true} text={"Politics"} />
      </div>
      {/* first section of politics page */}
      <div className="design-for-tab">
        <div className="politics-section">
          <div className="first-section">
            <BigPoliticsCard
              headlineColor={"white"}
              auther={"John Doe"}
              headline={PoliticsData[0]?.headline}
              image={Asset.DonaldTrump}
            />
          </div>
          {/* second section of politics page xjkfk */}
          <div className="small-card-container">
            {PoliticsData2.map((item, index) => {
              return (
                <div key={index} className="small-cards">
                  <PoliticsCard
                    fontsBold={""}
                    backgroundWhite={true}
                    headlineColor={"black"}
                    auther={"John Doe"}
                    headline={item?.headline}
                    image={item?.image}
                    size={"16"}
                  />
                </div>
              );
            })}
          </div>
          {/* third section of politics page */}
          <div className="third-section">
            {PoliticsData.map((item, index) => {
              return (
                <div key={index} className="small-cards">
                  <PoliticsCard
                    fontsBold={"black-bold"}
                    // backgroundWhite={true}
                    headlineColor={"black"}
                    auther={item.auther}
                    headline={item?.headline}
                    image={item?.image}
                    size={"12"}
                  />
                  {index < 3 && <div className="border-bottom"> </div>}
                </div>
              );
            })}
          </div>
          {/* read more */}
          <div className="read-more"> Read More {"---->"}</div>
        </div>
      </div>
    </div>
  );
};

export default PoliticsPage;
