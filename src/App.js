import React from "react";
import AppStyle from "./AppStyle";
import Header from "./Header/Header";
import Component2 from "./Component2/Component2";
import Component3 from "./Component3/Component3";
import Link from "./Components/Link/Link";

const App = () => {
  return (
    <AppStyle>
      <Header />
      <Link top={"48rem"} />
      <Component2 />
      <Link top={"130rem"} />
      <Component3 />
    </AppStyle>
  );
};

export default App;
