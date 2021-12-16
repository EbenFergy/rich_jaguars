import React from "react";
import SideMenuStyle from "./SideMenuStyle";

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
        <div></div>
        <a href="#about">About</a>
        <div></div>
        <a href="#roadMap">RoadMap</a>
        <div></div>
        <a href="#ourTeam">OurTeam</a>
      </div>
    </SideMenuStyle>
  );
};

export default SideMenu;
