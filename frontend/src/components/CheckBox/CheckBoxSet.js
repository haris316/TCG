import React, { Component, useState } from "react";
import { Checkbox } from "antd";
import data from "../../data/category.json";
import Collapsible from "react-collapsible";

const cat = data;
const CheckBoxSet = (props) => {
  // const forceUpdate = useForceUpdate();
  let booleanList = [];
  const [Checked, setChecked] = useState([]);
  let newList = props.mySetFilters;
  React.useEffect(() => {
    if (newList[0] !== undefined) {
      setChecked(newList);
      props.setHandleFilters(newList);
    }
  }, newList);
  let NameList = props.myCatFilters;
  for (var i = 0; i < cat.length; i++) {
    booleanList[i] = false;
  }
  let tempList = [];
  for (var i = 0; i < cat.length; i++) {
    tempList[i] = cat[i].title;
  }
  const isSelected = () => {
    for (var i = 0; i < NameList.length; i++) {
      booleanList[tempList.indexOf(NameList[i])] = true;
    }
  };
  isSelected();
  const removeSets = (e) => {
    let filteredArray = Checked.filter((item) => item !== e);
    setChecked(filteredArray);
  };
  let Checker = "";
  for (var i = 0; i < Checked.length; i++) {
    Checker = Checker + " " + Checked[i].toLowerCase() + " ";
  }
  for (var i = 0; i < cat.length; i++) {
    if (booleanList[i]) {
    } else {
      for (var j = 0; j < cat[i].sets.length; j++) {
        if (Checker.includes(cat[i].sets[j].set_Name.toLowerCase())) {
          removeSets(cat[i].sets[j].set_Name);
        }
      }
    }
  }
  const renderHeadings = () =>
    cat.map((value) => (
      <div>
        <h4
          style={{
            borderTop: "solid 0.5px",
            cursor: "pointer",
            borderColor: "#494949",
            paddingLeft: 8,
            paddingBottom: 8,
            paddingTop: 13,
          }}
        >
          {value.title}
        </h4>
        <Collapsible open={booleanList[value.id]}>
          <br />
          {renderCheckList(value.sets)}
          <br />
          <br />
        </Collapsible>
      </div>
    ));
  const renderCheckList = (sets) =>
    sets.map((value) => (
      <React.Fragment>
        <div
          className="OneBox"
          style={{
            backgroundImage: `url(${value.set_img})`,
            borderRadius: "4px",
          }}
        >
          <div className="Box">
            <Checkbox
              onChange={() => handleToggle(value.set_Name)}
              type="checkbox"
              checked={Checked.indexOf(value.set_Name) === -1 ? false : true}
            />
          </div>
          <span
            style={{
              backgroundColor: "#0c1b2b",
              paddingTop: "1px",
              paddingBottom: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "2px",
            }}
          >
            {value.set_Name}
          </span>
        </div>
      </React.Fragment>
    ));
  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.setHandleFilters(newChecked);
  };
  return (
    <div className="OneBigBox">
      <h2>Set Name</h2>
      {renderHeadings()}
    </div>
  );
};
export default CheckBoxSet;
