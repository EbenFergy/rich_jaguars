import React from "react";
import Component2Style from "./Component2Style";
import GlassCard from "../Components/GlassCard";
import yellowJaguar from "../assets/yellowJaguar.png";
import peachJaguar from "../assets/peachJaguar.png";
import heart from "../assets/heart.svg";

const Component2 = () => {
  return (
    <Component2Style>
      <div className="component2txt headertxtstyle">
        <span>About</span> <br />
        To do this, we have <br />
        to incredibly enrich <br />
        the jaguars
      </div>
      <div className="component2Cards">
        <GlassCard className="GlassCard card1">
          <div className="GlassCardHeader">
            <div>
              <span>Current</span>
              <span>0.75ETH</span>
              <span>$1,431,75</span>
            </div>
            <div>
              <img src={heart} alt="heart" /> 6.5K
            </div>
          </div>
          <img src={yellowJaguar} alt="yellowJaguar" className="cardImg" />
        </GlassCard>
        <GlassCard className="GlassCard card2">
          <div className="GlassCardHeader">
            <div>
              <span>Current</span>
              <span>0.75ETH</span>
              <span>$1,431,75</span>
            </div>
            <div>
              <img src={heart} alt="heart" /> 6.5K
            </div>
          </div>
          <img src={peachJaguar} alt="peachJaguar" className="cardImg" />
        </GlassCard>
        <GlassCard className="GlassCard card3">
          <div className="GlassCardHeader">
            <div>
              <span>Current</span>
              <span>0.75ETH</span>
              <span>$1,431,75</span>
            </div>
            <div>
              <img src={heart} alt="heart" /> 6.5K
            </div>
          </div>
          <img src={yellowJaguar} alt="yellowJaguar" className="cardImg" />
        </GlassCard>
      </div>
    </Component2Style>
  );
};

export default Component2;
