import React from "react";
import HeaderStyle from "./HeaderStyle";
import logo from "../assets/logo.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/twitter.svg";
import piggy from "../assets/piggy.svg";
import boatSail from "../assets/boatSail.svg";
import Fern from "../assets/Fern.svg";
import FernBlur from "../assets/FernBlur.svg";
import rightFern from "../assets/rightFern.svg";
import waterLeaf from "../assets/waterLeaf.png";
import VectorLeft from "../assets/VectorLeft.svg";
import VectorUnderTxt from "../assets/VectorUnderTxt.svg";
import Link from "../Components/Link/Link";

const Header = () => {
  return (
    <HeaderStyle>
      <Link bottom={"-25rem"} opacity={"1"} height={"40rem"} />
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
      <img src={Fern} alt="Fern" className="Fern" />
      <img src={FernBlur} alt="FernBlur" className="FernBlur" />
      <img src={rightFern} alt="rightFern" className="rightFern" />
      <img src={waterLeaf} alt="waterLeaf" className="waterLeaf" />

      <div className="headerTxt headertxtstyle">
        <div>Let's give Jaguars </div>
      </div>
      <div className=" subtxt headertxtstyle">
        <div>
          <div>the </div>
          <div>future </div>
          <div>they deserve</div>
        </div>
      </div>
      <img src={VectorLeft} alt="VectorLeft" className="VectorLeft" />
      <img
        src={VectorUnderTxt}
        alt="VectorUnderTxt"
        className="VectorUnderTxt"
      />
    </HeaderStyle>
  );
};

export default Header;
