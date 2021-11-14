import React from "react";
import "./Market.css";
import Navbar from "../components/Navbar";
import RevenueVolume from "../components/Market/MarketRecap/RevenueVolume/RevenueVolume";
import SalesVolumeBreakdown from "../components/Market/MarketRecap/SalesVolumeBreakdown/SalesVolumeBreakdown";
import SalesRevenueBreakdown from "../components/Market/MarketRecap/SalesRevenueBreakdown/SalesRevenueBreakdown";
import AverageSoldPrice from "../components/Market/MarketRecap/AverageSoldPrice/AverageSoldPrice";
import PopularCards from "../components/Market/MarketMovers/PopularCards/PopularCards";
import PopularSets from "../components/Market/MarketMovers/PopularSets/PopularSets";
import PopularCharacters from "../components/Market/MarketMovers/PopularCharacters/PopularCharacters";
import RecordHigh from "../components/Market/RecordSales/RecordHigh/RecordHigh";
import RecordLow from "../components/Market/RecordSales/RecordLow/RecordLow";
import PremiumSales from "../components/Market/RecordSales/PremiumSales/PremiumSales";
import SalesVolumeByGC from "../components/Market/GradingCompanies/SalesVolumByGC/SalesVolumeByGC";
import MarketCheckBox from "../components/MarketCheckBox/MarketCheckBox";
import Data from "../data/Ampharos.json";
import { Link, useHistory } from "react-router-dom";

class Market extends React.Component {
  render() {
    function Search(props) {
      const history = useHistory();
      const data = Data;
      let [searchField, setSearchField] = React.useState("");

      const getIcon = () => {
        if (searchField !== "") {
          return (
            <i
              onClick={() => {
                setSearchField("");
              }}
              class="fas fa-times"
            ></i>
          );
        } else return <i class="fas fa-search"></i>;
      };

      const searchResults = () => {
        if (searchField != "") {
          let All = data.filter((product_card) =>
            product_card.product_name
              .toLowerCase()
              .includes(searchField.toLowerCase())
          );
          if (All.length > 0) {
            All = All.slice(0, 9);
            return (
              <div className="results__search">
                {All.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        history.push(`/product/${item._id}/${item.cardNumber}`);
                        setSearchField("");
                      }}
                      className="oneSearch"
                    >
                      <div className="allText">
                        <div>
                          <p className="text">{item.product_name}</p>
                        </div>
                        <p className="smalltext">{item.category}</p>
                        <p className="smalltext">{item.set_name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          } else {
            return <p className="results__search">No Results Found</p>;
          }
        } else {
          return <></>;
        }
      };

      return (
        <>
          <div className="searchWhole">
            <input
              className="product__search"
              type="text"
              placeholder="Search"
              value={searchField}
              onChange={(e) => {
                setSearchField(e.target.value);
              }}
            />
            {getIcon()}
          </div>
          <div className="resultBox__search">{searchResults()}</div>
        </>
      );
    }
    return (
      <>
        <div className="market-body"></div>
        <div className="all navbar">
          {" "}
          <Navbar page="other" search="hide" />{" "}
        </div>
        <div className="all market-page-title">
          <span>Market Research Tool</span>
        </div>
        <div className="market">
          <div className=" all market__container">
            <div className="filter-main">
              <MarketCheckBox />
            </div>
            <br />
          </div>
          <div className="market__main">
            <div className="market__right__side">
              <div className="search">
                <Search />
              </div>
              <div className="firstComponent" id="00">
                <RevenueVolume />
              </div>
              <div id="01">
                <SalesVolumeBreakdown />
              </div>
              <div id="02">
                <SalesRevenueBreakdown />
              </div>
              <div id="03">
                <AverageSoldPrice />
              </div>
              <div id="10">
                <PopularCards />
              </div>
              <div id="11">
                <PopularSets />
              </div>
              <div id="12">
                <PopularCharacters />
              </div>
              <div id="20">
                <RecordHigh />
              </div>
              <div id="21">
                <RecordLow />
              </div>
              <div id="22">
                <PremiumSales />
              </div>
              <div id="30">
                <SalesVolumeByGC />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Market;
