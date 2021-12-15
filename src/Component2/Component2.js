import React from "react";
import Component2Style from "./Component2Style";
import Comp2Cards from "../assets/Comp2Cards.png";
// import Link from "../Components/Link/Link";

const Component2 = () => {
  return (
    <Component2Style>
      {/* <Link bottom={"-25rem"} opacity={"0.98"} height={"40rem"} /> */}

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
          Our Jaguarz are strong, athetic, cute, fun, and boy, are they the
          kings of fashion
        </div>
      </div>
    </Component2Style>
  );
};

export default Component2;
