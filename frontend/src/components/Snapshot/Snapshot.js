import React from "react";
import "./Snapshot.css";

function Snapshot({ allSales }) {
  //   console.log(allSales);
  const psaSales = allSales.filter((item) => item.company === "PSA");
  const cgcSales = allSales.filter((item) => item.company === "CGC");
  const bgsSales = allSales.filter((item) => item.company === "BGS");
  //   console.log(psaSales);
  //   console.log(cgcSales);
  //   console.log(bgsSales);
  const company = ["PSA", "CGC", "BGS"];
  const calculateAverage = (company, grade) => {
    let total = 0.0;
    let average = 0.0;
    let arr = [];
    if (company === "PSA")
      arr = psaSales.filter((item) => +item.grade === grade);
    else if (company === "CGC")
      arr = cgcSales.filter((item) => +item.grade === grade);
    else if (company === "BGS")
      arr = bgsSales.filter((item) => +item.grade === grade);

    if (arr.length < 1) {
      return "- - - - -";
    }
    for (var i = 0; i < arr.length; i++) {
      total = total + arr[i].sold;
    }
    average = total / arr.length;
    return "$" + average.toFixed(2);
  };

  const calculateMinimum = (company, grade) => {
    let arr = [];
    if (company === "PSA")
      arr = psaSales.filter((item) => +item.grade === grade);
    else if (company === "CGC")
      arr = cgcSales.filter((item) => +item.grade === grade);
    else if (company === "BGS")
      arr = bgsSales.filter((item) => +item.grade === grade);
    if (arr.length < 1) {
      return "- - - - -";
    }

    arr.sort(function (a, b) {
      return a.sold - b.sold;
    });
    return "$" + arr[0].sold.toFixed(2);
  };

  const calculateMedian = (company, grade) => {
    let arr = [];
    let median = 0.0;
    if (company === "PSA")
      arr = psaSales.filter((item) => +item.grade === grade);
    else if (company === "CGC")
      arr = cgcSales.filter((item) => +item.grade === grade);
    else if (company === "BGS")
      arr = bgsSales.filter((item) => +item.grade === grade);
    if (arr.length < 1) {
      return "- - - - -";
    }
    // console.log(arr);
    const mid = Math.floor(arr.length / 2);
    let nums = [...arr].sort((a, b) => a.sold - b.sold);
    // console.log(nums);
    // console.log(mid);
    if (mid < 1) return "$" + nums[0].sold.toFixed(2);
    if (arr.length % 2 !== 0) median = nums[mid].sold;
    else {
      median = (nums[mid - 1].sold + nums[mid].sold) / 2;
    }
    // console.log(median);
    return "$" + median.toFixed(2);
  };

  const calculateHigh = (company, grade) => {
    let arr = [];
    if (company === "PSA")
      arr = psaSales.filter((item) => +item.grade === grade);
    else if (company === "CGC")
      arr = cgcSales.filter((item) => +item.grade === grade);
    else if (company === "BGS")
      arr = bgsSales.filter((item) => +item.grade === grade);
    if (arr.length < 1) {
      return "- - - - -";
    }
    arr.sort(function (a, b) {
      return b.sold - a.sold;
    });
    // console.log(arr);
    return "$" + arr[0].sold.toFixed(2);
  };

  const snapshotGrade = (company, grade) => {
    return (
      <>
        <p className="snapshot__heading">{company + " " + grade}</p>
        <p className="snapshot__average">{calculateAverage(company, grade)}</p>
        <p className="snapshot__minimum">{calculateMinimum(company, grade)}</p>
        <p className="snapshot__median">{calculateMedian(company, grade)}</p>
        <p className="snapshot__high">{calculateHigh(company, grade)}</p>
      </>
    );
  };

  const snapshotScroll = () => {
    const grades = [];
    for (var i = 10; i >= 1; i = i - 0.5) {
      grades.push(i);
    }
    // console.log(grades);
    return (
      <>
        {grades.map((item) => {
          // console.log(item);
          return (
            <>
              <div className="snapshot__row">
                <div className="snapshot__psa">
                  {snapshotGrade("PSA", item)}
                </div>
                <div className="snapshot__psa">
                  {snapshotGrade("CGC", item)}
                </div>
                <div className="snapshot__psa">
                  {snapshotGrade("BGS", item)} 
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="snapshot">
      <h4>PRICE SNAPSHOT</h4>
      <div className="snapshot__container">
        <div className="psa__snapshot">
          <p className="snapshot__heading">Grade</p>
          <p className="snapshot__heading">Average</p>
          <p className="snapshot__heading">Minimum</p>
          <p className="snapshot__heading">Median</p>
          <p className="snapshot__heading">High</p>
        </div>
        <div className="cgc__snapshot">
          <p className="snapshot__heading">Grade</p>
          <p className="snapshot__heading">Average</p>
          <p className="snapshot__heading">Minimum</p>
          <p className="snapshot__heading">Median</p>
          <p className="snapshot__heading">High</p>
        </div>
        <div className="bgs__snapshot">
          <p className="snapshot__heading">Grade</p>
          <p className="snapshot__heading">Average</p>
          <p className="snapshot__heading">Minimum</p>
          <p className="snapshot__heading">Median</p>
          <p className="snapshot__heading">High</p>
        </div>
      </div>
      <div className="snapshot_scroll_wrapper">{snapshotScroll()}</div>
    </div>
  );
}

export default Snapshot;
