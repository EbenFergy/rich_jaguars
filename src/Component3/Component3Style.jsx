import styled from "styled-components";
import component3BG from "../assets/component3BG2.svg";

const Component3Style = styled.div`
  background-color: #0a1626;
  color: #ffff;
  letter-spacing: -0.05em;
  padding-top: 5rem;
  width: 100%;
  position: relative;
  /* height: 100vh; */
  background-image: url(${component3BG});
  background-position: cover;
  background-repeat: no-repeat;
  background-size: cover;

  .component3Cont {
    position: relative;
    z-index: 11;
  }

  .heading {
    width: 40%;
    text-align: right;
    font-size: 1.25rem;
    /* border: 2px solid yellow; */
  }

  .writeUpCont {
    width: 100%;
    display: flex;
    /* align-items: center; */
    /* border: 2px solid yellow; */

    .left {
      width: 40%;
      text-align: right;
      font-size: 5rem;
      font-weight: 700;
      /* border: 2px solid yellow; */
    }
    .right {
      padding: 1.5rem 15rem 0 2rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 60%;
      text-align: left;
      line-height: 2.5rem;
      gap: 2rem;

      div {
        font-size: 1.875rem;
      }

      span {
        font-size: 1.125rem;
      }
    }
  }

  .padding {
    padding: 0 2rem;
  }

  .componentTxt {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 20;
  }

  .Features {
    font-size: 1.25rem;
    letter-spacing: 0;
    font-weight: 700;
  }

  .Roadmap {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .topTxt {
    line-height: 2.5rem;
    font-size: 1.875rem;
    width: 50%;
    margin-bottom: 1.375rem;
  }
  .bottomTxt {
    line-height: 2.5rem;
  }
`;
export default Component3Style;
