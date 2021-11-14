import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./SalesVolumeBreakdown.css";

function SalesVolumeBreakdown() {
  const [selected, setSelected] = useState("Pokémon TCG");
  return (
    <div className="sales__volume__breakdown">
      <div className="svb__box">
        <div className="svb__heading__area">
          <h3 className="svb__heading">Sales Volume Breakdown by Language</h3>
          <span className="svb__description">
            <p>Recognize which language to choose from.</p>
            <p>(Past 30 days with past 30-60 days.)</p>
          </span>
          <span className="svb__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="svb__graph__area"></div>
      </div>
    </div>
  );
}

export default SalesVolumeBreakdown;
