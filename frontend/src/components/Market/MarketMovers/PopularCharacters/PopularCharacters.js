import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./PopularCharacters.css";
import Overdata from "../../../../data/Market/popCharOverMar.json";
import Japdata from "../../../../data/Market/popCharJapSet.json";
import Engdata from "../../../../data/Market/popCharEngSet.json";

function PopularCharacters() {
  const [selected, setSelected] = useState("Pokémon TCG");
  return (
    <div className="popular__characters">
      <div className="pch__box">
        <div className="pch__heading__area">
          <h3 className="pch__heading">Popular Characters</h3>
          <span className="pch__description">
            <p>Detect the most popular character/Pokemon.</p>
          </span>
          <span className="pch__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="pch__table__box">
          <div className="pch__table__top">
            <div className="pch__overall__set">
              <div className="pch__overall__set__name">
                <div className="pch__overall__set__box">Overall Market</div>
              </div>
              <div className="pch__overall__set__header">
                <p className="pch__overall__cn">Character Name</p>
                <p className="pch__overall__dsv">30 Days Sales Volume</p>
                <p className="pch__overall__r">Rank</p>
                <p className="pch__overall__dp">30 Day Percentage</p>
              </div>
              <div className="pch__data">
                {Overdata.slice(0, 7).map((item) => {
                  return (
                    <>
                      <div className="pch__data__row">
                        <p className="pch__data__cn">{item.characterName}</p>
                        <p className="pch__data__dsv">{item.salesVolume}</p>
                        <p className="pch__data__r">{item.rank}</p>
                        <p className="pch__data__dp">
                          {item.thirtyDaysPercentage}%
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="pch__fl">
                <div className="pch__fl__link">Full List {">>"}</div>
              </div>
            </div>
            <div className="pch__graph"></div>
          </div>
          <div className="pch__table__bottom">
            <div className="pch__jap__set">
              <div className="pch__jap__set__name">
                <div className="pch__jap__set__box">Japanese Set</div>
              </div>
              <div className="pch__jap__set__header">
                <p className="pch__jap__cn">Character Name</p>
                <p className="pch__jap__dsv">30 Days Sales Volume</p>
                <p className="pch__jap__r">Rank</p>
                <p className="pch__jap__dp">30 Day Percentage</p>
              </div>
              <div className="pch__data">
                {Japdata.slice(0, 4).map((item) => {
                  return (
                    <>
                      <div className="pch__data__row">
                        <p className="pch__data__cn">{item.characterName}</p>
                        <p className="pch__data__dsv">{item.salesVolume}</p>
                        <p className="pch__data__r">{item.rank}</p>
                        <p className="pch__data__dp">
                          {item.thirtyDaysPercentage}%
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="pch__fl">
                <div className="pch__fl__link">Full List {">>"}</div>
              </div>
            </div>

            <div className="pch__eng__set">
              <div className="pch__eng__set__name">
                <div className="pch__eng__set__box">English Set</div>
              </div>
              <div className="pch__eng__set__header">
                <p className="pch__eng__cn">Character Name</p>
                <p className="pch__eng__dsv">30 Days Sales Volume</p>
                <p className="pch__eng__r">Rank</p>
                <p className="pch__eng__dp">30 Day Percentage</p>
              </div>
              <div className="pch__data">
                {Engdata.slice(0, 4).map((item) => {
                  return (
                    <>
                      <div className="pch__data__row">
                        <p className="pch__data__cn">{item.characterName}</p>
                        <p className="pch__data__dsv">{item.salesVolume}</p>
                        <p className="pch__data__r">{item.rank}</p>
                        <p className="pch__data__dp">
                          {item.thirtyDaysPercentage}%
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="pch__fl">
                <div className="pch__fl__link">Full List {">>"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCharacters;
