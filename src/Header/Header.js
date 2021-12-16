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
        <img src={logo} alt="logo" />
        <img
          src={harmburger}
          alt="logo"
          className="harmburger"
          onClick={sideMenuHandler}
        />
        <div className="nav-links">
          <a href="https://sharp-bassi-e0d5fc.netlify.app/">ROARAwards</a>
          <div></div>
          <a href="https://sharp-bassi-e0d5fc.netlify.app/">About</a>
          <div></div>
          <a href="https://sharp-bassi-e0d5fc.netlify.app/">RoadMap</a>
          <div></div>
          <a href="https://sharp-bassi-e0d5fc.netlify.app/">OurTeam</a>
        </div>
        <a
          href="https://sharp-bassi-e0d5fc.netlify.app/"
          className="connect_wallet"
        >
          CONNECT WALLET
        </a>
      </nav>
      <div className="socialMedia">
        <img src={instagram} alt="instagram" />
        <img src={piggy} alt="piggy" />
        <img src={boatSail} alt="boatSail" />
        <img src={twitter} alt="twitter" />
      </div>

      <div className="txtCont">
        <div className="headerTxt headertxtstyle">
          <div>Let's give Jaguars </div>
        </div>
        <div className=" subtxt headertxtstyle">
          the <span> future </span> they deserve
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
