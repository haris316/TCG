import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./PopularCards.css";
import data from "../../../../data/Market/popularCards.json";

function PopularCards() {
  const [selected, setSelected] = useState("Pokémon TCG");

  const posNeg = (value) => {
    if (value >= 0) {
      return <p className="pc__data__pch">+{value}%</p>;
    } else {
      return <p className="pc__data__pch__n">-{value}%</p>;
    }
  };
  return (
    <div className="popular__cards">
      <div className="pc__box">
        <div className="pc__heading__area">
          <h3 className="pc__heading">Popular Cards</h3>
          <span className="pc__description">
            <p>Find out the most liquidate/popular cards up to date.</p>
            <p>(Basic Criteria: 30 Days Sales Volume {">"} 50)</p>
          </span>
          <span className="pc__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="pc__table__box">
          <div className="pc__info__box">
            <div className="pc__info__box__header">
              <p className="pc__cn">Card Name</p>
              <p className="pc__sn">Set Name</p>
              <p className="pc__dsv">14 Days Sales Volume</p>
              <p className="pc__10lp">PSA 10 Latest Price</p>
              <p className="pc__dc">30 Day Change</p>
              <p className="pc__9lp">PSA 9 Latest Price</p>
              <p className="pc__9dc">30 Day Change</p>
              <p className="pc__ry">Release Year</p>
              <p className="pc__l">Language</p>
            </div>
            <div className="pc__data">
              {data.slice(0, 8).map((item) => {
                return (
                  <>
                    <div className="pc__data__row">
                      <p className="pc__data__cn">{item.cardName}</p>
                      <p className="pc__data__sn">{item.setName}</p>
                      <p className="pc__data__dsv">
                        {item.fourteenDaySalesVolume}
                      </p>
                      <p className="pc__data__10lp">
                        ${item.psaTenLatestPrice}
                      </p>
                      <p className="pc__data__dc">
                        {posNeg(item.tenThirtyDayChange)}
                      </p>
                      <p className="pc__data__9lp">
                        ${item.psaNineLatestPrice}
                      </p>
                      <p className="pc__data__9dc">
                        {posNeg(item.NineThirtyDayChange)}
                      </p>
                      <p className="pc__data__ry">{item.releaseYear}</p>
                      <p className="pc__data__l">{item.language}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="pc__fl">
              <div className="pc__fl__link">Full List {">>"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCards;
