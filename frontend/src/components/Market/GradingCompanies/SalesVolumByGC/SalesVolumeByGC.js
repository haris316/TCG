import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./SalesVolumeByGC.css";
import data from "../../../../data/Market/svgc__weekly__info.json";

function SalesVolumeByGC() {
  const [selected, setSelected] = useState("Pokémon TCG");
  return (
    <div className="sales__volume__by__GC">
      <div className="svgc__box">
        <div className="svgc__heading__area">
          <h3 className="svgc__heading">
            Sales Volume filtered by Grading Companies
          </h3>
          <span className="svgc__description">
            <p>Reveal the favourable choice in the hobby.</p>
            <p>(As of Oct 2021, Only Includes BGS, CGC and PSA)</p>
          </span>
          <span className="svgc__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="svgc__graph__area"></div>
      </div>
      <div className="svgc__table__box">
        <div className="svgc__pie__graph">
          <div className="svgc__pie__graph__heading">
            <div>Past 30 Days Summary</div>
          </div>
        </div>
        <div className="svgc__weekly__info">
          <div className="svgc__weekly__info__heading">
            <div>Weekly Information</div>
          </div>
          <div className="svgc__weekly__info__header">
            <p className="svgc__wih__w">Weekly</p>
            <p className="svgc__wih__sv">Sales Volume</p>
            <p className="svgc__wih__psap">PSA Percentage</p>
            <p className="svgc__wih__cgcp">CGC Percentage</p>
            <p className="svgc__wih__bgsp">BGS Percentage</p>
          </div>
          <div className="svgc__wih__data">
            {data.slice(0, 4).map((item) => {
              return (
                <>
                  <div className="svgc__data__row">
                    <p className="svgc__data__w">{item.weekly}</p>
                    <p className="svgc__data__sv">{item.salesVolume}</p>
                    <p className="svgc__data__psap">{item.psaPercentage}%</p>
                    <p className="svgc__data__cgcp">{item.cgcPercentage}%</p>
                    <p className="svgc__data__bgsp">{item.bgsPercentage}%</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="svgc__fl">
            <div className="svgc__fl__link">Full List {">>"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesVolumeByGC;
