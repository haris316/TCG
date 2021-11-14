import React, { useState } from "react";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import "./PopularSets.css";
import Japdata from "../../../../data/Market/popSetJap.json";
import Engdata from "../../../../data/Market/popSetEng.json";

function PopularSets() {
  const [selected, setSelected] = useState("Pokémon TCG");
  return (
    <div className="popular__sets">
      <div className="ps__box">
        <div className="ps__heading__area">
          <h3 className="ps__heading">Popular Sets</h3>
          <span className="ps__description">
            <p>Find out the most liquidate/popular sets up to date.</p>
            <p>(Seperated into Japanese and English two categories.)</p>
          </span>
          <span className="ps__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="ps__table__box">
          <div className="ps__jap__set">
            <div className="ps__jap__set__name">
              <div className="ps__jap__set__box">Japanese Set</div>
            </div>
            <div className="ps__jap__set__header">
              <p className="ps__jap__sn">Set Name</p>
              <p className="ps__jap__ry">Release Year</p>
              <p className="ps__jap__dsv">30 Days Sales Volume</p>
              <p className="ps__jap__p">Percentage %</p>
            </div>
            <div className="pch__data">
              {Japdata.slice(0, 5).map((item) => {
                return (
                  <>
                    <div className="pch__data__row">
                      <p className="pch__data__sn">{item.setName}</p>
                      <p className="pch__data__ry">{item.releaseYear}</p>
                      <p className="pch__data__dsv">{item.salesVolume}</p>
                      <p className="pch__data__p">{item.Percentage}%</p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="pch__fl">
              <div className="pch__fl__link">Full List {">>"}</div>
            </div>
          </div>
          <div className="ps__eng__set">
            <div className="ps__eng__set__name">
              <div className="ps__eng__set__box">English Set</div>
            </div>
            <div className="ps__eng__set__header">
              <p className="ps__eng__sn">Set Name</p>
              <p className="ps__eng__ry">Release Year</p>
              <p className="ps__eng__dsv">30 Days Sales Volume</p>
              <p className="ps__eng__p">Percentage %</p>
            </div>
            <div className="pch__data">
              {Engdata.slice(0, 5).map((item) => {
                return (
                  <>
                    <div className="pch__data__row">
                      <p className="pch__data__sn">{item.setName}</p>
                      <p className="pch__data__ry">{item.releaseYear}</p>
                      <p className="pch__data__dsv">{item.salesVolume}</p>
                      <p className="pch__data__p">{item.Percentage}%</p>
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
  );
}

export default PopularSets;
