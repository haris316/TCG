import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
// import '../App.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h3>MAGIC: THE GATHERING</h3>
        <h2>Adventures in the Forgotten Realms</h2>

        <div className="hero-btns">
          <Button
            to="/shop"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          >
            Pre-order Now <i class="fas fa-long-arrow-alt-right"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
