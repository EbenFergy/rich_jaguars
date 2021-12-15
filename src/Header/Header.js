import React from "react";
import HeaderStyle from "./HeaderStyle";
import logo from "../assets/logo.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/twitter.svg";
import piggy from "../assets/piggy.svg";
import boatSail from "../assets/boatSail.svg";

// import Link from "../Components/Link/Link";

const Header = () => {
  return (
    <HeaderStyle>
      {/* <Link bottom={"-25rem"} opacity={"1"} height={"40rem"} /> */}
      <nav>
        <div className="nav-links">
          <img src={logo} alt="logo" />
          <a href="https://sharp-bassi-e0d5fc.netlify.app/">ROARAwards</a>
          <a href="https://sharp-bassi-e0d5fc.netlify.app/">About</a>
          <a href="https://sharp-bassi-e0d5fc.netlify.app/">RoadMap</a>
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
