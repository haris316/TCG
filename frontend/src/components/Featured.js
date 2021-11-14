import React, { useRef } from "react";
import "./Featured.css";
import data from "../data/Ampharos.json";
import { Link } from "react-router-dom";

const Featured = () => {
  const list = data.filter((data) => data.featured === true);
  // console.log(list);
  const fItems = list.map((item) => (
    <Link
      to={`./product/${item._id}/${item.cardNumber}`}
      className="f-card_img"
    >
      <img src={item.thumb} alt="IMG" />
      <div className="f-card_title">{item.product_name}</div>
      <div className="f-card_desc">{item.set_name}</div>
      <div className="f-card_cat">{item.category}</div>
    </Link>
  ));
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="featured">
      <h1 className="featured__heading">Featured</h1>
      <div className="featured-carousel">
        <a className="switchLeft sliderButton" onClick={() => scroll(-600)}>
          <i class="fas fa-chevron-left"></i>
        </a>
        <div className="carouselbox" ref={ref}>
          {fItems}
        </div>
        <a className="switchRight sliderButton" onClick={() => scroll(600)}>
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
  //   }
};

export default Featured;
