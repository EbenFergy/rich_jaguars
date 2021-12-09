import styled from "styled-components";
import link1 from "./assets/link1.svg";

const AppStyle = styled.div`
  background-color: #0a1626;
  height: 100vh;
  /* border: 2px solid red; */

  .link1 {
    position: absolute;
    top: 48rem;
    z-index: 10;
    filter: blur(4rem);
    opacity: 0.9;
    /* border-radius: 50%;   */
    /* border: 2px solid red; */
    width: 100%;
    height: 25rem;
    background-color: #060f0f;

    /* background-image: url(${link1});
    background-position: cover;
    background-repeat: no-repeat;
    background-size: 100% auto; */
  }
`;

export default AppStyle;
