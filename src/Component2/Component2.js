import React from "react";
import Component2Style from "./Component2Style";
import Comp2Cards from "../assets/Comp2Cards.png";
// import Link from "../Components/Link/Link";

const Component2 = () => {
  return (
    <Component2Style id="about">
      {/* <Link bottom={"-25rem"} opacity={"0.98"} height={"40rem"} /> */}
      <div className="link">
        <div></div>
      </div>

      <div className="component2txt headertxtstyle">
        <span>About</span> <br />
        To do this, we have <br />
        to incredibly enrich <br />
        the jaguars
      </div>
      <div className="Comp2Cards">
        <div>
          <img src={Comp2Cards} alt="Comp2Cards" />
        </div>
        <div>
          Our Jaguars are strong, athletic, cute, fun, and boy, are they kings
          of fashion
          <span>
            <a href="www.richjaguarz.io">SEE THE ENTIRE COLLECTION</a>
          </span>
        </div>
      </div>
    </Component2Style>
  );
};

export default Component2;
