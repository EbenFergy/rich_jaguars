import React from "react";
import { CarouselWrapper, prev } from "react-pretty-carousel";
import capJaguar from "../../assets/capJaguar.png";
import rastaJaguar from "../../assets/rastaJaguar.png";
import yellowcardJaguar from "../../assets/yellowcardJaguar.png";
import CarouselStyle from "./CarouselStyel";
import nextArrow from "../../assets/nextArrow.svg";

const Carousel = () => {
  return (
    <CarouselStyle>
      <CarouselWrapper mode="normal gallery" showControls={false}>
        <img src={capJaguar} alt="capJaguar" className="cards" />
        <img src={yellowcardJaguar} alt="yellowcardJaguar" className="cards" />
        <img src={rastaJaguar} alt="rastaJaguar" className="cards" />
        <img src={capJaguar} alt="capJaguar" className="cards" />
        <img src={yellowcardJaguar} alt="yellowcardJaguar" className="cards" />
        <img src={rastaJaguar} alt="rastaJaguar" className="cards" />
        <img src={capJaguar} alt="capJaguar" className="cards" />
        <img src={yellowcardJaguar} alt="yellowcardJaguar" className="cards" />
        <img src={rastaJaguar} alt="rastaJaguar" className="cards" />
      </CarouselWrapper>
      <img
        src={nextArrow}
        onClick={() => {
          prev();
        }}
        alt="nextArrow"
        className="nextArrow"
      />
    </CarouselStyle>
  );
};

export default Carousel;
