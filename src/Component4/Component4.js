import React from "react";
import Component4Style from "./Component4Style";
import cmp4Cards from "../assets/cmp4Cards.png";

const Component4 = () => {
  return (
    <Component4Style>
      <div className="member">
        Member Introduction
        <h1>Our Team</h1>
      </div>
      <div>
        <img src={cmp4Cards} alt="cmp4Cards" className="cmp4Cards" />
      </div>
    </Component4Style>
  );
};

export default Component4;
