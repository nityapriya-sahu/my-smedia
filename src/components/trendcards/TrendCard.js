import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../data/TrendData";
const TrendCard = () => {
  return (
    <div className="trend_card">
      <h3>Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
