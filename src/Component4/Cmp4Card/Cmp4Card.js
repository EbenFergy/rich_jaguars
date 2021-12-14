import React from "react";
import Cmp4CardStyle from "./Cmp4CardStyle";
import GlassCard from "../../Components/GlassCard";
import instagram from "../../assets/Instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

const Cmp4Card = ({ name, image, classes }) => {
  return (
    <Cmp4CardStyle classes={classes}>
      <GlassCard className="GlassCard card1">
        <div className="name">{name}</div>
        <div className="image">
          <img src={image} alt="cardImage" />
        </div>
        <div className="socialMedia">
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
        </div>
      </GlassCard>
    </Cmp4CardStyle>
  );
};

export default Cmp4Card;
