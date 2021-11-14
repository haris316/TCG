import React, { useState } from "react";
import { Checkbox } from "antd";
import "./MarketCheckBox.css";
import { HashLink } from "react-router-hash-link";

const MarketCheckBox = (props) => {
  const categories = [
    {
      super: "Market Recap",
      sub: [
        "Revenue & Value",
        "Sales Volume Brekadown",
        "Sales Revenue Breakdown",
        "Average Sold Price",
      ],
    },
    {
      super: "Market Movers",
      sub: ["Popular Cards", "Popular Sets", "Popular Charachters"],
    },
    {
      super: "Record Sales",
      sub: ["Record High", "Record Low", "Premium Sales"],
    },
    {
      super: "Grading Companies",
      sub: ["Sales Volume by Grading Companies"],
    },
  ];

  const [SuperChecked, setSuperChecked] = useState("");
  const [Checked, setChecked] = useState("");
  React.useEffect(() => {
    window.addEventListener("scroll", onScrollProgress);
    window.scrollTo(0, 0);
    select("Market Recap", "Revenue & Value");
  }, []);

  const onScrollProgress = () => {
    console.log("I'm on");
    for (var i = 0; i < categories.length; i++) {
      for (var j = 0; j < categories[i].sub.length; j++) {
        let word = i + "" + j;
        if (
          document.getElementById(word).getBoundingClientRect().y < 230 &&
          document.getElementById(word).getBoundingClientRect().y > 160
        ) {
          select(categories[i].super, categories[i].sub[j]);
        }
      }
    }
  };

  const renderSuperCheckList = () =>
    categories.map((value, index) => {
      if (value.super == SuperChecked)
        return (
          <React.Fragment key={index}>
            <div className="OneCat" style={{}}>
              <div
                className="OneBox"
                style={{
                  borderLeft: "solid #54a4d3 6px",
                  borderRadius: "25px",
                  backgroundColor: "#142940",
                  padding: "5px",
                  
                }}
              >
                <div className="Box">
                  <HashLink
                    smooth
                    style={{ textDecoration: "none" }}
                    to={`/market/#${index}0`}
                    scroll={(e1) => {
                      e1.scrollIntoView();
                      window.scrollTo(window.scrollX,window.scrollY-150)
                      select(value.super, value.sub[0]);
                    }}
                  >
                    <h2 style={{ color: "white" }} className="heads">
                      {" "}
                      {value.super}
                    </h2>
                  </HashLink>
                </div>
              </div>
              <div>{renderCheckList(index, value.super, value.sub)}</div>
            </div>
          </React.Fragment>
        );
      else
        return (
          <React.Fragment key={index}>
            <div className="OneCat">
              <div className="OneBox">
                <div className="Box">
                  <HashLink
                    smooth
                    style={{ textDecoration: "none" }}
                    to={`/market/#${index}0`}
                    scroll={(e1) => {
                      e1.scrollIntoView();
                      window.scrollTo(window.scrollX,window.scrollY-150)
                      select(value.super, value.sub[0]);
                    }}
                  >
                    <h2 style={{ color: "white" }} className="heads">
                      {" "}
                      {value.super}
                    </h2>
                  </HashLink>
                </div>
              </div>
              <div>{renderCheckList(index, value.super, value.sub)}</div>
            </div>
          </React.Fragment>
        );
    });
  function renderCheckList(supNum, sup, data) {
    return data.map((value, index) => {
      if (value == Checked)
        return (
          <React.Fragment key={index}>
            <div className="OneCatBox">
              <div
                className="OneBox"
                style={{
                  borderLeft: "solid #80128C 6px",
                  borderRadius: "25px",
                  backgroundColor: "#142940",
                  padding: "5px",
                  marginLeft:"10px",
                }}
              >
                <div className="Box">
                  <HashLink
                    smooth
                    style={{ textDecoration: "none" }}
                    to={`/market/#${supNum}${index}`}
                    scroll={(e1) => {
                      e1.scrollIntoView();
                      window.scrollTo(window.scrollX,window.scrollY-150)
                      select(sup, value);
                    }}
                  >
                    <p style={{ color: "white" }}> {value}</p>
                  </HashLink>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      else
        return (
          <React.Fragment key={index}>
            <div className="OneCatBox">
              <div className="OneBox"
                style={{
                  marginLeft:"10px",
                }}
              >
                <div className="Box">
                  <HashLink
                    smooth
                    style={{ textDecoration: "none" }}
                    to={`/market/#${supNum}${index}`}
                    scroll={(e1) => {
                      e1.scrollIntoView();
                      window.scrollTo(window.scrollX,window.scrollY-150)
                      select(sup, value);
                    }}
                  >
                    <p style={{ color: "white" }}> {value}</p>
                  </HashLink>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    });
  }
  const select = (sup, sub) => {
    setChecked(sub);
    setSuperChecked(sup);
  };
  return <div className="OneBigBox">{renderSuperCheckList()}</div>;
};
export default MarketCheckBox;
