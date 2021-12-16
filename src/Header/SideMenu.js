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
        <a href="https://sharp-bassi-e0d5fc.netlify.app/">ROARAwards</a>
        <a href="https://sharp-bassi-e0d5fc.netlify.app/">About</a>
        <a href="https://sharp-bassi-e0d5fc.netlify.app/">RoadMap</a>
        <a href="https://sharp-bassi-e0d5fc.netlify.app/">OurTeam</a>
      </div>
    </SideMenuStyle>
  );
};

export default SideMenu;
