import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./SalesRevenueBreakdown.css";

function SalesRevenueBreakdown() {
  const [selected, setSelected] = useState("Pokémon TCG");
  return (
    <div className="sales__revenue__breakdown">
      <div className="srbl__box">
        <div className="srbl__heading__area">
          <h3 className="srbl__heading">Sales Revenue Breakdown by Language</h3>
          <span className="srbl__description">
            <p>Recognize the revenue flow.</p>
            <p>(Past 30 days with past 30-60 days.)</p>
          </span>
          <span className="srbl__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="srbl__graph__area"></div>
      </div>
      <div className="srbp__box">
        <div className="srbp__heading__area">
          <h3 className="srbp__heading">Sales Revenue Breakdown by Price</h3>
          <span className="srbp__description">
            <p>Recognize the revenue flow.</p>
            <p>(Past 30 days with past 30-60 days.)</p>
          </span>
          <span className="srbp__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="srbp__graph__area"></div>
      </div>
    </div>
  );
}

export default SalesRevenueBreakdown;
