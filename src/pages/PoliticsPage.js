import React from "react";
import Headline from "../components/card-template/headline/Headline";
import BigPoliticsCard from "../components/big-politics-card/BigPoliticsCard";
import PoliticsCard from "../components/politics-card/PoliticsCard";
import "./politics-page.m.css";
import { PoliticsData, PoliticsData2 } from "../politics-data/PoliticsData";

const PoliticsPage = () => {
  const mainImage =
    "https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  console.log("djdso", PoliticsData, PoliticsData2);
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
              image={mainImage}
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
                    auther={"John Doe"}
                    headline={item?.headline}
                    image={item?.image}
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
