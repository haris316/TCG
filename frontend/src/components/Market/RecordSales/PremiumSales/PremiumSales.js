import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./PremiumSales.css";
import data from "../../../../data/Market/premiumSales.json";

function PremiumSales() {
  const [selected, setSelected] = useState("Pokémon TCG");

  const posNeg = (value) => {
    if (value >= 0) {
      return <p className="prsa__data__pch">+{value}%</p>;
    } else {
      return <p className="prsa__data__pch__n">-{value}%</p>;
    }
  };
  return (
    <div className="premium__sales">
      <div className="prsa__box">
        <div className="prsa__heading__area">
          <h3 className="prsa__heading">Premium Sales</h3>
          <span className="prsa__description">
            <p>Uncover the high-end sales in the past 30 days.</p>
            <p>(Minimum sold price {">"} $2,000.)</p>
          </span>
          <span className="prsa__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="prsa__info__box">
          <div className="prsa__info__box__header">
            <p className="prsa__cn">Card Name</p>
            <p className="prsa__sn">Set Name</p>
            <p className="prsa__sd">Sold Date</p>
            <p className="prsa__g">Grade</p>
            <p className="prsa__sp">Sold Price</p>
            <p className="prsa__pr">Prior Sold</p>
            <p className="prsa__pch">% Change</p>
            <p className="prsa__l">Language</p>
          </div>

          <div className="prsa__data">
            {data.slice(0, 8).map((item) => {
              return (
                <>
                  <div className="prsa__data__row">
                    <p className="prsa__data__cn">{item.cardName}</p>
                    <p className="prsa__data__sn">{item.setName}</p>
                    <p className="prsa__data__sd">{item.soldDate}</p>
                    <p className="prsa__data__g">{item.grade}</p>
                    <p className="prsa__data__sp">${item.soldPrice}</p>
                    <p className="prsa__data__pr">${item.priorSold}</p>
                    <p className="prsa__data__pr">{posNeg(item.pChange)}</p>
                    <p className="prsa__data__l">{item.language}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="prsa__fl">
          <div className="prsa__fl__link">Full List {">>"}</div>
        </div>
      </div>
    </div>
  );
}

export default PremiumSales;
