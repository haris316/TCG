import React, { Component, useState } from "react";
import Data from "../../data/Ampharos.json";
import { Link, useHistory } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import "./Search.css";

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
export default Search;
