import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./RecordHigh.css";
import data from "../../../../data/Market/recordSalesHigh.json";

function RecordHigh() {
  const [selected, setSelected] = useState("Pokémon TCG");

  const posNeg = (value) => {
    if (value >= 0) {
      return <p className="rehi__data__pch">{value}%</p>;
    } else {
      return <p className="rehi__data__pch__n">-{value}%</p>;
    }
  };
  return (
    <div className="record__high">
      <div className="rehi__box">
        <div className="rehi__heading__area">
          <h3 className="rehi__heading">Record Sales / High</h3>
          <span className="rehi__description">
            <p>Discover cards with rocket speed movement.</p>
            <p>Cards reaching 52W high (past 30 days) will be listed.</p>
          </span>
          <span className="rehi__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="rehi__table__box">
          <div className="rehi__info__box">
            <div className="rehi__info__box__header">
              <p className="rehi__cn">Card Name</p>
              <p className="rehi__sn">Set Name</p>
              <p className="rehi__lsd">Latest Sold Date</p>
              <p className="rehi__g">Grade</p>
              <p className="rehi__lsp">Latest Sold Price</p>
              <p className="rehi__wlow">52W Low</p>
              <p className="rehi__pch">% Change</p>
              <p className="rehi__l">Language</p>
            </div>
            <div className="rehi__data">
              {data.slice(0, 5).map((item) => {
                return (
                  <>
                    <div className="rehi__data__row">
                      <p className="rehi__data__cn">{item.cardName}</p>
                      <p className="rehi__data__sn">{item.setName}</p>
                      <p className="rehi__data__sd">{item.soldDate}</p>
                      <p className="rehi__data__g">{item.grade}</p>
                      <p className="rehi__data__sp">${item.soldPrice}</p>
                      <p className="rehi__data__wlow">${item.wl}</p>
                      <p className="rehi__data__pch">{posNeg(item.pChange)}</p>
                      <p className="rehi__data__l">{item.language}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="rehi__fl">
            <div className="rehi__fl__link">Full List {">>"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordHigh;
