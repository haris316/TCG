import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./RecordLow.css";
import data from "../../../../data/Market/recordSalesLow.json";

function RecordLow() {
  const [selected, setSelected] = useState("Pokémon TCG");

  const posNeg = (value) => {
    if (value >= 0) {
      return <p className="relo__data__pch">+{value}%</p>;
    } else {
      return <p className="relo__data__pch__n">-{value}%</p>;
    }
  };
  return (
    <div className="record__low">
      <div className="relo__box">
        <div className="relo__heading__area">
          <h3 className="relo__heading">Record Sales/Low</h3>
          <span className="relo__description">
            <p>Discover cards with rocket speed movement.</p>
            <p>Cards reaching 52W low (past 30 days) will be listed.</p>
          </span>
          <span className="relo__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="relo__info__box">
          <div className="relo__info__box__header">
            <p className="relo__cn">Card Name</p>
            <p className="relo__sn">Set Name</p>
            <p className="relo__sd">Sold Date</p>
            <p className="relo__g">Grade</p>
            <p className="relo__sp">Sold Price</p>
            <p className="relo__wh">52W High</p>
            <p className="relo__pch">% Change</p>
            <p className="relo__l">Language</p>
          </div>
          <div className="relo__data">
            {data.slice(0, 5).map((item) => {
              return (
                <>
                  <div className="relo__data__row">
                    <p className="relo__data__cn">{item.cardName}</p>
                    <p className="relo__data__sn">{item.setName}</p>
                    <p className="relo__data__sd">{item.soldDate}</p>
                    <p className="relo__data__g">{item.grade}</p>
                    <p className="relo__data__sp">${item.soldPrice}</p>
                    <p className="relo__data__wh">${item.wh}</p>
                    <p className="relo__data__pch">{posNeg(item.pChange)}</p>
                    <p className="relo__data__l">{item.language}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="relo__fl">
          <div className="relo__fl__link">Full List {">>"}</div>
        </div>
      </div>
    </div>
  );
}

export default RecordLow;
