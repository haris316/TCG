import React from "react";
import HeroSection from "../components/HeroSection";
import "./Home.css";
import Featured from "../components/Featured";
import LatestSet from "../components/LatestSet";
import Banner from "../components/Banner";
import Articles from "../components/Articles";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Search from "../components/Search/Search";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <div className="search__section">
        {/* <div className="search__bar"> */}
        <Search />
        {/* </div> */}
      </div>
      <Featured />
      <div className="latest__set__and__articles">
        <div className="latest_set_section">
          <LatestSet />
        </div>
        <div className="article_section">
          <Articles />
        </div>
      </div>
      {/* <LatestSet /> */}
      <Banner />
      {/* <Articles /> */}
      <Newsletter />
    </div>
  );
}

export default Home;
