import React, { useState } from "react";
import HeaderStyle from "./HeaderStyle";
import logo from "../assets/logo.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/twitter.svg";
import piggy from "../assets/piggy.svg";
import boatSail from "../assets/boatSail.svg";
import harmburger from "../assets/harmburger.svg";
import SideMenu from "./SideMenu";
// import Link from "../Components/Link/Link";

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const sideMenuHandler = () => {
    setSideMenu(true);
  };

  const closeMenu = () => {
    setSideMenu(false);
  };

  return (
    <HeaderStyle>
      {/* <Link bottom={"-50rem"} opacity={"1"} height={"50rem"} /> */}
      {sideMenu ? <SideMenu close={closeMenu} /> : null}
      <nav>
        <img src={logo} alt="logo" className="logooff" />
        <img
          src={harmburger}
          alt="harmburger_menu"
          className="harmburger"
          onClick={sideMenuHandler}
        />
        <div className="nav-links">
          <img src={logo} alt="logo" className="logo" />

          <a href="#about" className="navLinks">
            About
          </a>

          <a href="#roadMap" className="navLinks">
            RoadMap
          </a>

          <a href="#ourTeam" className="navLinks">
            OurTeam
          </a>
        </div>
        <a href="https://richjaguarz.io" className="connect_wallet">
          CONNECT WALLET
        </a>
      </nav>
      <div className="socialMedia">
        <a
          href="https://instagram.com/richjaguarz?utm_medium=copy_link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://discord.gg/yv7mWFTb" target="_blank" rel="noreferrer">
          <img src={piggy} alt="piggy" />
        </a>
        {/* <a href="#"> */}
        <img src={boatSail} alt="boatSail" />
        {/* </a> */}
        <a
          href="https://twitter.com/richjaguarz?t=qbP35khcSTr6C6qtMxde4g&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
      </div>

      <div className="txtCont">
        <div className="headerTxt headertxtstyle">
          <div>Let's give Jaguarz </div>
        </div>
        <div className=" subtxt headertxtstyle">
          the <span> future </span> they deserve
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
