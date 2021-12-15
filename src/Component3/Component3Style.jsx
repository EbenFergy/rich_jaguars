import styled from "styled-components";
import component3BG from "../assets/component3BG2.svg";

const Component3Style = styled.div`
  background-color: #0a1626;
  color: #ffff;
  padding-top: 5rem;
  width: 100%;
  position: relative;
  min-height: 150vh;
  height: fit-content;
  background-image: url(${component3BG});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .component3Cont {
    display: flex;
    flex-direction: column;
    /* border: 2px solid red; */
    text-align: left;
    padding: 0 1rem;
  }

  .heading {
    font-size: 14px;
    /* border: 2px solid yellow; */
  }

  .writeUpCont {
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* align-items: center; */
    /* border: 2px solid yellow; */

    .left {
      text-align: left;
      font-size: 2rem;
      font-weight: 700;
      /* border: 2px solid yellow; */
    }
    .right {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-weight: 400;

      div {
        font-size: 1.2rem;
        line-height: 2rem;
      }

      span {
        font-size: 14px;
        line-height: 1.5rem;
      }
    }
  }

  .componentTxt {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  }

  .Features {
    font-size: 14px;
    letter-spacing: 0;
    font-weight: 700;
  }

  .Roadmap {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .topTxt {
    line-height: 2rem;
    font-size: 1.2rem;
    width: 100%;
    margin-bottom: 1.375rem;
  }
  .bottomTxt {
    font-size: 14px;
    line-height: 1.5rem;
  }

  @media only screen and (min-width: 460px) {
  }

  @media only screen and (min-width: 600px) {
    .heading {
      width: 50%;
      padding-right: 2rem;
      text-align: right;
    }
    .writeUpCont {
      flex-direction: row;

      div {
        width: 50%;
      }

      .left {
        text-align: right;
        padding-right: 2rem;
      }
      .right {
        div {
          width: 100%;
        }
        padding-right: 2rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .writeUpCont {
      .left {
        font-size: 2.5rem;
      }
    }

    .Roadmap {
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .heading,
    .Features {
      font-size: 1rem;
    }

    .writeUpCont {
      .left {
        font-size: 4rem;
      }

      .right {
        div {
          font-size: 1.5rem;
          line-height: 2.3rem;
        }

        span {
          font-size: 1rem;
          line-height: 1.8rem;
        }
      }
    }

    .Roadmap {
      font-size: 4rem;
    }
    .topTxt {
      font-size: 1.5rem;
      line-height: 2.3rem;
    }
    .bottomTxt {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .heading {
      font-size: 1.5rem;
      padding-right: 3.5rem;
    }
    .writeUpCont {
      .left {
        font-size: 5rem;
        padding-right: 3.5rem;
      }

      .right {
        div {
          font-size: 2rem;
          line-height: 3rem;
        }

        span {
          font-size: 1.5rem;
          line-height: 2.5rem;
        }
      }
    }

    .Features {
      font-size: 1.5rem;
    }
    .Roadmap {
      font-size: 5rem;
    }
    .topTxt {
      font-size: 2rem;
      line-height: 3rem;
    }
    .bottomTxt {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
  }
  @media only screen and (min-width: 1440px) {
    .writeUpCont {
      .right {
        padding-right: 5rem;
      }
    }
  }

  @media only screen and (min-width: 1600px) {
  }
  @media only screen and (min-width: 1800px) {
    .heading {
      font-size: 2rem;
      padding-right: 5rem;
    }
    .writeUpCont {
      .left {
        padding-right: 5rem;
      }

      .right {
        gap: 4rem;
        div {
          font-size: 3rem;
          line-height: 4.5rem;
        }

        span {
          font-size: 2rem;
          line-height: 3rem;
        }
      }
    }
    .Features {
      font-size: 2rem;
    }

    .topTxt {
      font-size: 3rem;
      line-height: 4.5rem;
    }
    .bottomTxt {
      font-size: 2rem;
      line-height: 3rem;
    }
  }
  @media only screen and (min-width: 2200px) {
  }
`;
export default Component3Style;
