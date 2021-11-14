import React from "react";
// import '../App.css'

const STYLES = ["hide", "show"];
const NavSearch = (props) => {
  // console.log(props.main);
  const check = STYLES.includes(props.main) ? props.main : STYLES[1];
  return (
    <div>
      <input
        type="search"
        className={`nav-search ${check}`}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default NavSearch;
