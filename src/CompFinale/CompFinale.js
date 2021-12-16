import React from "react";
import CompFinaleStyle from "./CompFinaleStyle";
import footerLogo from "../assets/footerLogo.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/twitter.svg";
import piggy from "../assets/piggy.svg";
import boatSail from "../assets/boatSail.svg";

const CompFinale = () => {
  return (
    <CompFinaleStyle>
      <div className="blur">
        <div className="curveCont">
          <div className="curves curve1">Collect on OpenSea!</div>
          <div className="curves curve2">View on OpenSea</div>
        </div>
        <div className="footerDown">
          <div>
            <div>
              <img src={footerLogo} alt="footerLogo" className="footerLogo" />
            </div>
            <div>Privacy Policy | Terms of Sale</div>
          </div>
          <div className="socialMedia">
            <a href="https://instagram.com/richjaguarz?utm_medium=copy_link">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://discord.gg/yv7mWFTb">
              <img src={piggy} alt="piggy" />
            </a>
            {/* <a href="#"> */}
            <img src={boatSail} alt="boatSail" />
            {/* </a> */}
            <a href="https://twitter.com/richjaguarz?t=qbP35khcSTr6C6qtMxde4g&s=09">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>

            <a href="#roadMap">RoadMap</a>

            <a href="#ourTeam">OurTeam</a>
          </div>
          <div className="connect_wallet">CONNECT WALLET</div>
        </div>
      </div>
    </CompFinaleStyle>
  );
};

export default CompFinale;
