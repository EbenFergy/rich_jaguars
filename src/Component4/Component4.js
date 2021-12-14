import React from "react";
import capJaguar from "../assets/capJaguar.png";
import rastaJaguar from "../assets/rastaJaguar.png";
import peachCardJaguar from "../assets/peachCardJaguar.png";
import greenCardJaguar from "../assets/greenCardJaguar.png";
import blueCardJaguar from "../assets/blueCardJaguar.png";
import Component4Style from "./Component4Style";
import Cmp4Card from "./Cmp4Card/Cmp4Card";
import Link from "../Components/Link/Link";
const Component4 = () => {
  return (
    <Component4Style>
      <Link bottom={"-20rem"} opacity={"0.96"} height={"30rem"} />
      <Cmp4Card name="BIGGI" image={capJaguar} classes={"BIGGI"} />
      <Cmp4Card name="JEEROM" image={peachCardJaguar} classes={"JEEROM"} />
      <Cmp4Card name="LIOR.POLI" image={blueCardJaguar} classes={"LIOR"} />
      <Cmp4Card name="RAFAEL" image={rastaJaguar} classes={"RAFAEL"} />
      <Cmp4Card name="JUSTINA" image={greenCardJaguar} classes={"JUSTINA"} />
      <div className="member">
        Member Introduction
        <h1>Our Team</h1>
      </div>
    </Component4Style>
  );
};

export default Component4;
