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
              <img src={footerLogo} alt="footerLogo" />
            </div>
            <div>Privacy Policy | Terms of Sale</div>
          </div>
          <div className="socialMedia">
            <img src={instagram} alt="instagram" />
            <img src={piggy} alt="piggy" />
            <img src={boatSail} alt="boatSail" />
            <img src={twitter} alt="twitter" />
          </div>
          <div className="nav-links">
            <div>ROARAwards</div>
            <div>About</div>
            <div>RoadMap</div>
            <div>OurTeam</div>
          </div>
          <div className="connect_wallet">CONNECT WALLET</div>
        </div>
      </div>
    </CompFinaleStyle>
  );
};

export default CompFinale;
