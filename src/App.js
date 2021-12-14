import React from "react";
import AppStyle from "./AppStyle";
import Header from "./Header/Header";
import Component2 from "./Component2/Component2";
import Component3 from "./Component3/Component3";
import Component4 from "./Component4/Component4";
import CompFinale from "./CompFinale/CompFinale";

const App = () => {
  return (
    <AppStyle>
      <Header />
      <Component2 />
      <Component3 />
      <Component4 />
      <CompFinale />
    </AppStyle>
  );
};

export default App;
