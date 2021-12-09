import React from "react";
import HeaderStyle from "./HeaderStyle";
import logo from "../assets/logo.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/twitter.svg";
import piggy from "../assets/piggy.svg";
import boatSail from "../assets/boatSail.svg";

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <div className="nav-links">
          <img src={logo} alt="logo" />
          <div>ROARAwards</div>
          <div>About</div>
          <div>RoadMap</div>
          <div>OurTeam</div>
        </div>
        <div className="connect_wallet">CONNECT WALLET</div>
      </nav>
      <div className="socialMedia">
        <img src={instagram} alt="instagram" />
        <img src={piggy} alt="piggy" />
        <img src={boatSail} alt="boatSail" />
        <img src={twitter} alt="twitter" />
      </div>
    </HeaderStyle>
  );
};

export default Header;
