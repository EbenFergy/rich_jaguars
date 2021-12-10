import styled from "styled-components";
import Component2BG from "../assets/Component2BG.svg";

const Component2Style = styled.div`
  background-color: #0a1626;
  background-image: url(${Component2BG});
  background-position: cover;
  background-repeat: no-repeat;
  background-size: cover;
  height: 170%;
  /* border: 2px solid red; */
  /* margin-top: 0; */

  .headertxtstyle {
    font-weight: 700;
    font-size: 5.4rem;
    line-height: 5.4rem;
    letter-spacing: -0.05em;
    color: #ffff;
  }

  .component2txt {
    position: relative;
    z-index: 20;
    /* border: 2px solid red; */
    width: 100%;
    text-align: center;

    span {
      font-size: 1.25rem;
      letter-spacing: 0;
    }
  }

  .GlassCard {
  }

  .card1 {
    transform: translateX(65%) rotate(-8.24deg);
    z-index: 30;
  }

  .card2 {
    z-index: 20;
    transform: rotate(6.4deg);
    border: 2px solid #28e8ff;
  }

  .card3 {
    transform: translateX(-75%) rotate(-6.52deg);
    z-index: 10;
  }

  .component2Cards {
    width: 100%;
    /* border: 2px solid yellow; */
    margin-top: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Component2Style;
