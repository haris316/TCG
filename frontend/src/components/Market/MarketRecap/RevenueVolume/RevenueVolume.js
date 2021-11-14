import React, { useState } from "react";
import "./RevenueVolume.css";
import CatDropdown from "../../../CatDropdown/CatDropdown";
import dailyData from "../../../../data/Market/rvDailyInfo.json";
import weeklyData from "../../../../data/Market/rvWeeklyInfo.json";

function RevenueVolume() {
  const [selected, setSelected] = useState("Pokémon TCG");
  const posNeg = (value) => {
    if (value >= 0) {
      return <p className="rv__data__value">+{value}%</p>;
    } else {
      return <p className="rv__data__value__n">-{value}%</p>;
    }
  };
  return (
    <div className="revenue__volume">
      <div className="box">
        <div className="heading__area">
          <h3 className="rv__heading">Sales Revenue & Volume</h3>
          <span className="rv__description">
            <p>Track the overall market movement.</p>
            <p>This is a good indicator of the market direction.</p>
          </span>
          <span className="rv__dropdown">
            <CatDropdown selected={selected} setSelected={setSelected} />
          </span>
        </div>
        <div className="graph__area"></div>
      </div>
      <div className="table__box">
        <div className="daily__info">
          <div className="daily__info__heading">
            <div>Daily Information</div>
          </div>
          <div className="daily__info__header">
            <p className="dih__date">Date</p>
            <p className="dih__sv">Sales Volume</p>
            <p className="dih__pc">Percentage Change</p>
            <p className="dih__sr">Sales Revenue</p>
            <p className="dih__pc2">Percentage Change</p>
          </div>
          <div className="rv__data">
            {dailyData.slice(0, 4).map((item) => {
              return (
                <>
                  <div className="rv__data__row">
                    <p className="rv__data__date">{item.date}</p>
                    <p className="rv__data__sv">${item.salesVolume}</p>
                    <p className="rv__data__pc">
                      {posNeg(item.svPercentageChange)}
                    </p>
                    <p className="rv__data__sr">$ {item.salesRevenue}</p>
                    <p className="rv__data__pc">
                      {posNeg(item.srPercentageChange)}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="rv__fl">
            <div className="rv__fl__link">Full List {">>"}</div>
          </div>
        </div>
        <div className="weekly__info">
          <div className="weekly__info__heading">
            <div>Weekly Information (1 month)</div>
          </div>
          <div className="weekly__info__header">
            <p className="wih__ws">Week Start</p>
            <p className="wih__sv">Sales Volume</p>
            <p className="wih__pc">Percentage Change</p>
            <p className="wih__sr">Sales Revenue</p>
            <p className="wih__pc2">Percentage Change</p>
          </div>
          <div className="rv__data">
            {weeklyData.slice(0, 4).map((item) => {
              return (
                <>
                  <div className="rv__data__row">
                    <p className="rv__data__date">{item.weekStart}</p>
                    <p className="rv__data__sv">${item.salesVolume}</p>
                    <p className="rv__data__pc">
                      {posNeg(item.svPercentageChange)}
                    </p>
                    <p className="rv__data__sr">$ {item.salesRevenue}</p>
                    <p className="rv__data__pc">
                      {posNeg(item.srPercentageChange)}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="rv__fl">
            <div className="rv__fl__link">Full List {">>"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueVolume;
