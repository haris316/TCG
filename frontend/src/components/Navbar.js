import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Dropdown from "./Dropdown/Dropdown";
import "./Navbar.css";
import NavSearch from "./NavSearch";

function Navbar(props) {
  // console.log(props.page);
  const checksearch = props.search;

  const STYLES = ["main", "other"];

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [magic_dropdown, setMagic_dropdown] = useState(false);
  const [yugioh_dropdown, setYugioh_dropdown] = useState(false);
  const [pokemon_dropdown, setPokemon_dropdown] = useState(false);
  const [cardfight_dropdown, setCardfight_dropdown] = useState(false);
  const [dbs_dropdown, setDbs_dropdown] = useState(false);
  const [fnb_dropdown, setFnb_dropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const MagicHoverEnter = () => {
    if (window.innerWidth > 960) {
      setMagic_dropdown(true);
    } else {
      setMagic_dropdown(false);
    }
  };
  const YugiohHoverEnter = () => {
    if (window.innerWidth > 960) {
      setYugioh_dropdown(true);
    } else {
      setYugioh_dropdown(false);
    }
  };
  const PokemonHoverEnter = () => {
    if (window.innerWidth > 960) {
      setPokemon_dropdown(true);
    } else {
      setPokemon_dropdown(false);
    }
  };
  const CardfightHoverEnter = () => {
    if (window.innerWidth > 960) {
      setCardfight_dropdown(true);
    } else {
      setCardfight_dropdown(false);
    }
  };
  const DBSHoverEnter = () => {
    if (window.innerWidth > 960) {
      setDbs_dropdown(true);
    } else {
      setDbs_dropdown(false);
    }
  };
  const FNBHoverEnter = () => {
    if (window.innerWidth > 960) {
      setFnb_dropdown(true);
    } else {
      setFnb_dropdown(false);
    }
  };

  const onMouseLeave = () => {
    setMagic_dropdown(false);
    setYugioh_dropdown(false);
    setPokemon_dropdown(false);
    setCardfight_dropdown(false);
    setDbs_dropdown(false);
    setFnb_dropdown(false);
  };

  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };

  const checkpage = STYLES.includes(props.page) ? props.page : STYLES[0];

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <nav className={`navbar ${checkpage}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          TCG <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={MagicHoverEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/shop/Magic: The Gathering/All"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Magic <i class="fas fa-caret-down"></i>
            </Link>
            {magic_dropdown && <Dropdown category="Magic: The Gathering" />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={YugiohHoverEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/shop/Yu-Gi-Oh!/All"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Yu-Gi-Oh! <i class="fas fa-caret-down"></i>
            </Link>
            {yugioh_dropdown && <Dropdown category="Yu-Gi-Oh!" />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={PokemonHoverEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/shop/Pokémon/All"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Pokémon <i class="fas fa-caret-down"></i>
            </Link>
            {pokemon_dropdown && <Dropdown category="Pokémon" align="center" />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={CardfightHoverEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/shop/Cardfight!! Vanguard/All"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Cardfight <i class="fas fa-caret-down"></i>
            </Link>
            {cardfight_dropdown && (
              <Dropdown category="Cardfight!! Vanguard" align="center" />
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={DBSHoverEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/shop/Dragon Ball Super Card Game/All"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Dragon Ball Super <i class="fas fa-caret-down"></i>
            </Link>
            {dbs_dropdown && (
              <Dropdown category="Dragon Ball Super Card Game" align="left" />
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={FNBHoverEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/shop/Flesh And Blood/All"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Flesh and Blood <i class="fas fa-caret-down"></i>
            </Link>
            {fnb_dropdown && (
              <Dropdown category="Flesh And Blood" align="left" />
            )}
          </li>
          <li className="nav-item">
            <Link to="/market" className="nav-links" onClick={closeMobileMenu}>
              Market
            </Link>
          </li>

          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              SIGN UP
            </Link>
          </li>
        </ul>
        {/* <NavSearch placeholder="Search" main={checksearch} /> */}
        <div class="action">
          <div className="nav-profile" onClick={menuToggle}>
            <img
              src={"/images/profile.jpg"}
              alt="IMG"
              className="nav-profile-img"
            />
          </div>
          <div className="menu">
            <h3>
              Omair Mairaj
              <br />
              <span>Web Developer</span>
            </h3>
            <ul>
              <li>
                <img src={"../images/user.png"} alt="" />
                <Link to="/">My Profile</Link>
              </li>
              <li>
                <img src={"../images/edit.png"} alt="" />
                <Link to="/">Edit Profile</Link>
              </li>
              <li>
                <img src={"../images/settings.png"} alt="" />
                <Link to="/">Settings</Link>
              </li>
              <li>
                <img src={"../images/question.png"} alt="" />
                <Link to="/">Help</Link>
              </li>
              <li>
                <img src={"../images/log-out.png"} alt="" />
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;
