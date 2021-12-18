import React from "react";
import Component3Style from "./Component3Style";
import Carousel from "../Components/Carousel/Carousel";
// import Link from "../Components/Link/Link";

const Component3 = () => {
  return (
    <Component3Style >
      {/* <Link bottom={"-26rem"} opacity={"0.4"} height={"40rem"} /> */}
      <div className="component3Cont">
        <div className="heading ">Features</div>
        <div className="writeUpCont">
          <div className="left ">Rarity</div>
          <div className="right">
            <div>
              No two Jaguarz are exactly alike, and each one of them can be
              officially owned by a single person on the Ethereum blockchain
            </div>
            <span>
              Each Rich Jaguarz is one of a kind and programmatically generated
              from over 160 possible traits, including clothing, backgrounds,
              expression and more.
            </span>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="componentTxt" id="roadMap">
        <div className="Features">Features</div>
        <div className="Roadmap">Roadmap</div>
        <div className="topTxt">
          One thing is certain, all our <br />
          jags are special because this project gives <br />
          back to the community and the world.
        </div>
        <span className="bottomTxt">
          Yep! Thats right. We are very close to announcing a partnership with
          one of the <br />
          most prominent institutions focused on saving endangered jaguar
          species.
        </span>
      </div>
    </Component3Style>
  );
};

export default Component3;
