import React from "react";
import SideMenuStyle from "./SideMenuStyle";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/twitter.svg";
import piggy from "../assets/piggy.svg";
import boatSail from "../assets/boatSail.svg";

const SideMenu = ({ close }) => {
  const closeMenu = () => {
    close();
  };
  return (
    <SideMenuStyle>
      <div onClick={closeMenu} className="close">
        x
      </div>
      <div className="links">
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <div></div>
        <a href="#roadMap" onClick={closeMenu}>
          RoadMap
        </a>
        <div></div>
        <a href="#ourTeam" onClick={closeMenu}>
          OurTeam
        </a>
        <div></div>
        <a href="https://richjaguarz.io" className="connect">
          CONNECT WALLET
        </a>
      </div>
      <div className="socials">
        <a href="https://instagram.com/richjaguarz?utm_medium=copy_link">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://discord.gg/yv7mWFTb">
          <img src={piggy} alt="piggy" />
        </a>
        <a href="#home">
          <img src={boatSail} alt="boatSail" />
        </a>
        <a href="https://twitter.com/richjaguarz?t=qbP35khcSTr6C6qtMxde4g&s=09">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </SideMenuStyle>
  );
};

export default SideMenu;
