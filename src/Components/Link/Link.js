import React from "react";
import LinkStyle from "./LinkStyle";

const Link = ({ bottom, opacity, height }) => {
  return (
    <LinkStyle bottom={bottom} opacity={opacity} height={height}>
      <div></div>
    </LinkStyle>
  );
};

export default Link;
